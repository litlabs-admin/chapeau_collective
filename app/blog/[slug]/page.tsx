import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePage } from "@/components/blog/blog-article-page";
import { getBlogArticle, getBlogArticles } from "@/lib/blog";
import { homePageContent } from "@/content/site";

export const revalidate = 300;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await getBlogArticles();
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | ${homePageContent.meta.title}`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = await getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return <BlogArticlePage article={article} />;
}
