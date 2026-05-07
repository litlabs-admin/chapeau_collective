import { blogArticles } from "@/content/blog";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { QuoteSection } from "@/components/layout/quote-section";
import { BlogCard } from "./blog-card";

export function BlogListPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip bg-white pt-[96px]">
        <section className="w-full overflow-hidden px-4 pb-[160px] pt-[100px] tablet:px-10 desktop:px-10">
          <div className="mx-auto flex w-full max-w-[358px] flex-col gap-10 tablet:max-w-[710px] desktop:max-w-[1100px]">
            <div className="flex w-full flex-col gap-2">
              <h1 className="font-display text-[48px] font-medium leading-[1.05] tracking-[-0.03em] text-ink tablet:text-[72px] desktop:text-[96px]">
                Curated Tips
              </h1>
              <p className="font-display text-[18px] font-medium leading-[1.4] text-ink-soft tablet:text-[22px] desktop:text-[24px]">
                Your go-to source for eCommerce tips, trends, and success stories.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-10 tablet:grid-cols-2 desktop:grid-cols-2">
              {blogArticles.map((article) => (
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
