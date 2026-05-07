import { cache } from "react";

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

type AirtableAttachment = {
  url?: string;
};

type AirtableRecord = {
  id: string;
  createdTime: string;
  fields: Record<string, unknown>;
};

type AirtableListResponse = {
  records: AirtableRecord[];
  offset?: string;
};

const airtableApiUrl = "https://api.airtable.com/v0";
const revalidateSeconds = 300;

function getString(fields: Record<string, unknown>, key: string) {
  const value = fields[key];
  if (typeof value === "string") {
    return value.trim();
  }
  if (typeof value === "number") {
    return String(value);
  }
  return "";
}

function getAttachmentUrl(fields: Record<string, unknown>, key: string) {
  const value = fields[key];
  if (!Array.isArray(value)) {
    return "";
  }
  const first = value[0] as AirtableAttachment | undefined;
  return typeof first?.url === "string" ? first.url : "";
}

function normalizeSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getAirtableBlogConfig() {
  const token = process.env.AIRTABLE_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_BLOG_TABLE_NAME;

  if (!token || !baseId || !tableName) {
    return null;
  }

  return { baseId, tableName, token };
}

function sortArticles(articles: BlogArticle[]) {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

function mapRecord(record: AirtableRecord): BlogArticle | null {
  const { fields } = record;
  const title = getString(fields, "Title");
  const slug = getString(fields, "Slug") || normalizeSlug(title);
  const image = getAttachmentUrl(fields, "Image");
  const contentMarkdown = getString(fields, "Content Markdown");

  if (!title || !slug || !image || !contentMarkdown) {
    return null;
  }

  return {
    slug,
    title,
    description: getString(fields, "Description"),
    image,
    readTime: getString(fields, "Read Time") || "3 mins",
    author: getString(fields, "Author") || "Chapeau Collective",
    authorRole: getString(fields, "Author Role") || "Content writer",
    date: getString(fields, "Date") || record.createdTime.slice(0, 10),
    contentMarkdown
  };
}

async function fetchAirtableBlogArticles() {
  const config = getAirtableBlogConfig();
  if (!config) {
    return null;
  }

  const records: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const params = new URLSearchParams({ pageSize: "100" });
    if (offset) {
      params.set("offset", offset);
    }

    const url = `${airtableApiUrl}/${config.baseId}/${encodeURIComponent(config.tableName)}?${params.toString()}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${config.token}` },
      next: { revalidate: revalidateSeconds }
    });

    if (!response.ok) {
      throw new Error(`Airtable blog fetch failed with status ${response.status}.`);
    }

    const data = (await response.json()) as AirtableListResponse;
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  return sortArticles(
    records.map(mapRecord).filter((article): article is BlogArticle => article !== null)
  );
}

export const getBlogArticles = cache(async (): Promise<BlogArticle[]> => {
  try {
    return (await fetchAirtableBlogArticles()) ?? [];
  } catch (error) {
    console.error(error);
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
