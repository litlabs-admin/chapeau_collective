import { cache } from "react";
import Airtable, { type FieldSet, type Record as AirtableRecord } from "airtable";

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
  contentMarkdown: string;
};

function getString(record: AirtableRecord<FieldSet>, field: string) {
  const value = record.get(field);
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return String(value);
  return "";
}

function getAttachmentUrl(record: AirtableRecord<FieldSet>, field: string) {
  const value = record.get(field);
  if (!Array.isArray(value)) return "";
  const first = value[0] as { url?: unknown } | undefined;
  return typeof first?.url === "string" ? first.url : "";
}

function normalizeSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getBase() {
  const apiKey = process.env.AIRTABLE_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_BLOG_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) return null;

  return { base: new Airtable({ apiKey }).base(baseId), tableName };
}

function sortArticles(articles: BlogArticle[]) {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

function mapRecord(record: AirtableRecord<FieldSet>): BlogArticle | null {
  const title = getString(record, "Title");
  const slug = getString(record, "Slug") || normalizeSlug(title);
  const image = getAttachmentUrl(record, "Image");
  const contentMarkdown = getString(record, "Content Markdown");

  if (!title || !slug || !image || !contentMarkdown) return null;

  const createdTime = (record as unknown as { _rawJson?: { createdTime?: string } })
    ._rawJson?.createdTime;

  return {
    slug,
    title,
    description: getString(record, "Description"),
    image,
    readTime: getString(record, "Read Time") || "3 mins",
    author: getString(record, "Author") || "Chapeau Collective",
    authorRole: getString(record, "Author Role") || "Content writer",
    date: getString(record, "Date") || (createdTime ? createdTime.slice(0, 10) : ""),
    contentMarkdown
  };
}

export const getBlogArticles = cache(async (): Promise<BlogArticle[]> => {
  const config = getBase();
  if (!config) return [];

  try {
    const records = await config.base<FieldSet>(config.tableName)
      .select({ pageSize: 100 })
      .all();

    return sortArticles(
      records
        .map(mapRecord)
        .filter((article): article is BlogArticle => article !== null)
    );
  } catch (error) {
    const detail = error as {
      error?: string;
      message?: string;
      statusCode?: number;
    };
    console.warn(
      `[blog] Airtable fetch failed, falling back to empty list. status=${detail.statusCode ?? "?"} code=${detail.error ?? "?"} message=${detail.message ?? "?"}`
    );
    return [];
  }
});

export async function getBlogArticle(slug: string) {
  const articles = await getBlogArticles();
  return articles.find((article) => article.slug === slug);
}

export async function getRelatedArticles(slug: string, limit = 2) {
  const articles = await getBlogArticles();
  return articles.filter((article) => article.slug !== slug).slice(0, limit);
}

export async function getLatestBlogArticles(limit = 2) {
  const articles = await getBlogArticles();
  return articles.slice(0, limit);
}
