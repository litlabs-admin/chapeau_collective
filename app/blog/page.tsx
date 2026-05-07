import type { Metadata } from "next";
import { BlogListPage } from "@/components/blog/blog-list-page";
import { homePageContent } from "@/content/site";

export const revalidate = 300;

export const metadata: Metadata = {
  title: `Insights | ${homePageContent.meta.title}`,
  description:
    "Working notes from the Collective. Practical thinking on marketing, sales and AI for businesses building predictable revenue."
};

export default async function Page() {
  return <BlogListPage />;
}
