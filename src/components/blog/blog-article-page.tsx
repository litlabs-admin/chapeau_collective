import Image from "next/image";
import { getRelatedArticles } from "@/lib/blog";
import type { BlogArticle } from "@/lib/blog";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { QuoteSection } from "@/components/layout/quote-section";
import { BlogCard } from "./blog-card";

type MarkdownNode =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "pro_tip"; text: string };

type Section = {
  heading: string | null;
  nodes: Exclude<MarkdownNode, { type: "heading" }>[];
};

function parseInlineMarkdown(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function parseMarkdown(markdown: string): MarkdownNode[] {
  const nodes: MarkdownNode[] = [];
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let quote: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    nodes.push({ type: "paragraph", text: parseInlineMarkdown(paragraph.join(" ")) });
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    nodes.push({ type: "list", items: listItems.map(parseInlineMarkdown) });
    listItems = [];
  };

  const flushQuote = () => {
    if (quote.length === 0) return;
    const text = parseInlineMarkdown(quote.join(" ").replace(/^Pro Tip:\s*/i, ""));
    nodes.push({ type: "pro_tip", text });
    quote = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    const heading = line.match(/^#{2,3}\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushQuote();
      nodes.push({ type: "heading", text: parseInlineMarkdown(heading[1]) });
      continue;
    }

    const bullet = line.match(/^[-*]\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      flushQuote();
      listItems.push(bullet[1]);
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      flushList();
      quote.push(line.replace(/^>\s?/, ""));
      continue;
    }

    flushList();
    flushQuote();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushQuote();

  return nodes;
}

function splitIntoSections(nodes: MarkdownNode[]): Section[] {
  const sections: Section[] = [];
  let current: Section = { heading: null, nodes: [] };

  for (const node of nodes) {
    if (node.type === "heading") {
      if (current.heading !== null || current.nodes.length > 0) {
        sections.push(current);
      }
      current = { heading: node.text, nodes: [] };
      continue;
    }
    current.nodes.push(node);
  }

  if (current.heading !== null || current.nodes.length > 0) {
    sections.push(current);
  }

  return sections;
}

const bodyClass =
  "font-display text-[16px] font-medium leading-[1.4] text-ink desktop:text-[19.2px]";

function ArticleParagraph({ text }: { text: string }) {
  return <p className={bodyClass}>{text}</p>;
}

function ArticleList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full list-disc flex-col gap-[22.4px] pl-[1.4em] text-ink marker:text-accent desktop:gap-[26.88px]">
      {items.map((item, index) => (
        <li className={bodyClass} key={`${item}-${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProTip({ text }: { text: string }) {
  return (
    <aside className="flex w-full max-w-[800px] flex-col gap-4 rounded-2xl bg-mist p-4">
      <h4 className="font-display text-[22.08px] font-medium leading-[1.2] text-accent">
        Pro Tip
      </h4>
      <p className={bodyClass}>{text}</p>
    </aside>
  );
}

function ArticleHeading({ text }: { text: string }) {
  return (
    <h3 className="font-display text-[23.2px] font-medium leading-[1.2] text-ink tablet:text-[28px] desktop:text-[32px]">
      {text}
    </h3>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(value: string) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return value;
  return `${match[3]}/${match[2]}/${match[1]}`;
}

function ArticleMeta({ article }: { article: BlogArticle }) {
  const metaText =
    "font-display text-[16px] font-medium leading-[1.4] desktop:text-[19.2px]";

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-mist font-display text-[20px] font-medium leading-none text-accent">
          {getInitials(article.author)}
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className={`${metaText} text-ink`}>{article.author}</p>
          <p className={`${metaText} text-ink-soft`}>{article.authorRole}</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
          {formatDate(article.date)}
        </p>
        <p className="font-display text-[14px] font-medium leading-[1.4] text-ink-soft">
          {article.readTime}
        </p>
      </div>
    </div>
  );
}

function ArticleSection({ section }: { section: Section }) {
  return (
    <div className="flex w-full flex-col gap-8">
      {section.heading ? <ArticleHeading text={section.heading} /> : null}
      {section.nodes.map((node, index) => {
        if (node.type === "paragraph") {
          return <ArticleParagraph key={index} text={node.text} />;
        }
        if (node.type === "list") {
          return <ArticleList items={node.items} key={index} />;
        }
        return <ProTip key={index} text={node.text} />;
      })}
    </div>
  );
}

export async function BlogArticlePage({ article }: { article: BlogArticle }) {
  const sections = splitIntoSections(parseMarkdown(article.contentMarkdown));
  const relatedArticles = await getRelatedArticles(article.slug, 2);

  return (
    <>
      <Header />
      <main className="overflow-x-clip bg-white pt-[60px] tablet:pt-[56px] desktop:pt-[56px]">
        <section className="flex w-full flex-col items-center gap-[60px] bg-white px-4 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10 desktop:py-20">
          <div className="mx-auto flex w-full max-w-[358px] flex-col gap-10 tablet:max-w-[700px] desktop:max-w-[1100px]">
            <div className="flex w-full flex-col items-center gap-8">
              <h1 className="w-full font-display text-[41.6px] font-medium leading-[1] tracking-[-0.02em] text-accent tablet:text-[64px] tablet:leading-[1.1] desktop:text-[75.2px]">
                {article.title}
              </h1>
              <ArticleMeta article={article} />
            </div>

            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1200px) min(100vw, 1100px), (min-width: 810px) min(calc(100vw - 80px), 700px), min(100vw, 358px)"
                src={article.image}
              />
            </div>
          </div>

          <div className="flex w-full max-w-[358px] flex-col gap-[60px] tablet:max-w-[700px] desktop:max-w-[800px]">
            {sections.map((section, index) => (
              <ArticleSection key={index} section={section} />
            ))}
          </div>
        </section>

        <section className="w-full overflow-hidden bg-white px-4 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10 desktop:py-20">
          <div className="mx-auto flex w-full max-w-[358px] flex-col gap-10 tablet:max-w-[710px] desktop:max-w-[1100px]">
            <h2 className="w-full font-display text-[32px] font-medium leading-[1.2] text-accent tablet:text-[34.88px] desktop:text-[48px]">
              More like this
            </h2>
            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-10 tablet:grid-cols-2 desktop:grid-cols-2">
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
