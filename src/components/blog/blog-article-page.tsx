import Image from "next/image";
import type { BlogArticle, BlogContentBlock } from "@/content/blog";
import { getRelatedArticles } from "@/content/blog";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { QuoteSection } from "@/components/layout/quote-section";
import { BlogCard } from "./blog-card";

function renderBlock(block: BlogContentBlock, key: string) {
  if (block.type === "heading") {
    return (
      <h3
        className="w-full text-left font-display text-[23.2px] font-medium leading-[1.2] text-ink tablet:text-[28px] desktop:text-[32px]"
        key={key}
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        className="flex w-full list-disc flex-col gap-2 pl-5 text-left font-display text-[16px] font-medium leading-[1.4] text-ink desktop:text-[19.2px]"
        key={key}
      >
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "pro_tip") {
    return (
      <div
        className="flex w-full flex-col items-start gap-4 rounded-[16px] bg-mist p-4"
        key={key}
      >
        <div className="flex w-full items-center">
          <h4 className="flex-1 font-display text-[22.08px] font-medium leading-[1.2] text-[#42A174]">
            Pro Tip
          </h4>
        </div>
        <p className="w-full text-left font-display text-[16px] font-medium leading-[1.4] text-ink desktop:text-[19.2px]">
          {block.text}
        </p>
      </div>
    );
  }

  return (
    <p
      className="w-full text-left font-display text-[16px] font-medium leading-[1.4] text-ink desktop:text-[19.2px]"
      key={key}
    >
      {block.text}
    </p>
  );
}

function ArticleContent({ article }: { article: BlogArticle }) {
  const blocks = article.content;
  const firstHeadingIdx = blocks.findIndex((block) => block.type === "heading");
  const intro = firstHeadingIdx === -1 ? blocks : blocks.slice(0, firstHeadingIdx);
  const rest = firstHeadingIdx === -1 ? [] : blocks.slice(firstHeadingIdx);

  const sections: BlogContentBlock[][] = [];
  let current: BlogContentBlock[] = [];
  for (const block of rest) {
    if (block.type === "heading" && current.length > 0) {
      sections.push(current);
      current = [];
    }
    current.push(block);
  }
  if (current.length > 0) {
    sections.push(current);
  }

  return (
    <div className="flex w-full flex-col items-start gap-[60px]">
      {intro.length > 0 ? (
        <div className="flex w-full flex-col items-start gap-8">
          {intro.map((block, idx) => renderBlock(block, `intro-${idx}`))}
        </div>
      ) : null}
      {sections.map((section, sIdx) => {
        const head = section[0];
        const isFinal =
          head.type === "heading" && /final\s*thoughts/i.test(head.text);
        return (
          <div
            className={`flex w-full flex-col items-start ${isFinal ? "gap-4" : "gap-8"}`}
            key={`section-${sIdx}`}
          >
            {section.map((block, i) => renderBlock(block, `s${sIdx}-b${i}`))}
          </div>
        );
      })}
    </div>
  );
}

function ArticleMeta({ article }: { article: BlogArticle }) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full bg-mist">
          <Image
            alt={`${article.author} profile`}
            className="object-cover"
            fill
            sizes="60px"
            src={article.authorAvatar}
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="font-display text-[16px] font-medium leading-[1.4] text-ink desktop:text-[19.2px]">
            {article.author}
          </p>
          <p className="font-display text-[16px] font-medium leading-[1.4] text-ink-soft desktop:text-[19.2px]">
            {article.authorRole}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
          {article.date}
        </p>
        <p className="font-display text-[14px] font-medium leading-[1.4] text-ink-soft">
          {article.readTime}
        </p>
      </div>
    </div>
  );
}

export function BlogArticlePage({ article }: { article: BlogArticle }) {
  const relatedArticles = getRelatedArticles(article.slug, 2);

  return (
    <>
      <Header />
      <main className="overflow-x-clip bg-white pt-[96px]">
        <section className="flex w-full flex-col items-center gap-10 overflow-hidden py-[60px] tablet:px-10 tablet:py-20 desktop:px-0 desktop:py-[100px]">
          <div className="mx-auto flex w-full max-w-[358px] flex-col items-center gap-10 pt-[100px] tablet:max-w-[700px] tablet:pt-0 desktop:max-w-[1100px] desktop:pt-0">
            <header className="flex w-full flex-col items-center gap-6">
              <div className="flex w-full flex-col items-center gap-2">
                <h1 className="w-full text-left font-display text-[41.6px] font-medium leading-none tracking-[-0.02em] text-ink tablet:text-[64px] tablet:leading-[1.1] desktop:text-[75.2px] desktop:leading-[1.1]">
                  {article.title}
                </h1>
              </div>
              <ArticleMeta article={article} />
            </header>

            <div className="relative h-[400px] w-full overflow-hidden rounded-[16px] bg-mist">
              <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1200px) 1100px, (min-width: 810px) 700px, 358px"
                src={article.image}
              />
            </div>

            <div className="mx-auto w-full desktop:max-w-[800px]">
              <ArticleContent article={article} />
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col items-center overflow-hidden pb-[80px] pt-10 tablet:px-10 tablet:py-20 desktop:px-0 desktop:pb-[80px] desktop:pt-10">
          <div className="mx-auto flex w-full max-w-[358px] flex-col items-center gap-6 tablet:max-w-[710px] desktop:max-w-[1100px] desktop:gap-5">
            <div className="flex w-full flex-col items-center">
              <h2 className="w-full text-left font-display text-[32px] font-medium leading-[1.2] text-ink tablet:text-[34.88px] desktop:text-[48px]">
                More like this
              </h2>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-10 p-[2px] desktop:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <BlogCard article={relatedArticle} key={relatedArticle.slug} />
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
