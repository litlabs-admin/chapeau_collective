import Image from "next/image";
import type { BlogArticle } from "@/content/blog";
import { SmartLink } from "@/components/home/shared";

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <SmartLink
      className="group flex w-full flex-col gap-[30px] overflow-hidden"
      href={`/blog/${article.slug}`}
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-[8px] bg-mist">
        <Image
          alt=""
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(min-width: 992px) 542px, (min-width: 768px) 347px, 358px"
          src={article.image}
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          <div className="w-fit rounded-full bg-mist px-2 py-1">
            <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
              {article.readTime}
            </p>
          </div>

          <h2 className="ad-card-title transition-colors duration-300 group-hover:text-accent">
            {article.title}
          </h2>
        </div>

        <p className="font-display text-[14px] font-medium leading-[1.4] text-ink-soft">
          {article.author}, {article.authorRole}
        </p>
      </div>
    </SmartLink>
  );
}
