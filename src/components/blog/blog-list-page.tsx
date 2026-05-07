import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { QuoteSection } from "@/components/layout/quote-section";
import { getBlogArticles } from "@/lib/blog";
import { BlogCard } from "./blog-card";

export async function BlogListPage() {
  const articles = await getBlogArticles();

  return (
    <>
      <Header />
      <main className="overflow-x-clip bg-white pt-[60px] tablet:pt-[56px] desktop:pt-[56px]">
        <section className="w-full overflow-hidden bg-white px-4 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10 desktop:py-20">
          <div className="mx-auto flex w-full max-w-[358px] flex-col gap-10 tablet:max-w-[710px] desktop:max-w-[1100px]">
            <div className="flex flex-col items-start gap-4">
              <h1 className="w-full font-display text-[41.6px] font-medium leading-[1] tracking-[-0.02em] text-accent tablet:text-[64px] tablet:leading-[1.1] desktop:text-[75.2px]">
                Insights
              </h1>
              <p className="w-full font-display text-[18px] font-normal leading-[1.2] text-ink tablet:text-[20px] desktop:text-[24px]">
                Working notes from the Collective. Practical thinking on marketing, sales and AI for businesses building predictable revenue.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-10 tablet:grid-cols-2 desktop:grid-cols-2">
              {articles.map((article) => (
                <BlogCard article={article} key={article.slug} />
              ))}
            </div>
          </div>
        </section>

        <QuoteSection />
        <Footer />
      </main>
    </>
  );
}
