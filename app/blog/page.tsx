import type { Metadata } from "next";
import { BlogListPage } from "@/components/blog/blog-list-page";

export const metadata: Metadata = {
  title: "Curated Tips | Chapeau Collective",
  description: "Your go-to source for eCommerce tips, trends, and success stories."
};

export default function Page() {
  return <BlogListPage />;
}
