import type { Metadata } from "next";
import { BlogListPage } from "@/components/blog/blog-list-page";
import { homePageContent } from "@/content/site";

export const metadata: Metadata = {
  title: `Curated Tips | ${homePageContent.meta.title}`,
  description: "Your go-to source for eCommerce tips, trends, and success stories."
};

export default function Page() {
  return <BlogListPage />;
}
