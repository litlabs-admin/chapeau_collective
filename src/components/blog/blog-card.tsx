import Image from "next/image";
import type { BlogArticle } from "@/lib/blog";
import { SmartLink } from "@/components/ui/shared";

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <SmartLink className="group block w-full" href={`/blog/${article.slug}`}>
      <article className="flex flex-col gap-4">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-mist">
          <Image
            alt={article.title}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            fill
            sizes="(min-width: 1200px) 542px, (min-width: 768px) 50vw, 100vw"
            src={article.image}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="w-fit rounded-full bg-mist px-2 py-1 font-display text-[14px] font-medium leading-[1.4] text-accent">
            {article.readTime}
          </span>
          <h2 className="w-full font-display text-[22.08px] font-medium leading-[1.2] text-black transition-colors group-hover:text-accent">
            {article.title}
          </h2>
        </div>
      </article>
    </SmartLink>
  );
}
