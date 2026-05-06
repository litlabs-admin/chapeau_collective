"use client";

import Image from "next/image";
import Link from "next/link";
import { homePageContent } from "@/content/site";
import { Reveal, SectionIntro } from "./shared";

export function BlogSection() {
  const section = homePageContent.blogSection;

  return (
    <section
      className="w-full overflow-hidden bg-white px-4 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10 desktop:py-20"
      id={section.id}
    >
      <div className="mx-auto flex w-full max-w-[358px] flex-col items-center gap-10 tablet:max-w-[710px] desktop:max-w-[1200px]">
        <SectionIntro eyebrow={section.eyebrow}>
          <h3 className="ad-intro-title">
            {section.intro}
          </h3>
        </SectionIntro>

        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-10 tablet:grid-cols-2 desktop:grid-cols-2">
          {section.previews.map((post, index) => (
            <Reveal key={post.href} delay={index * 0.06}>
              <Link className="group block w-full" href={post.href}>
                <article className="flex flex-col gap-4">
                  <div className="relative h-[400px] overflow-hidden rounded-[8px]">
                    <Image
                      alt={post.title}
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      fill
                      sizes="(min-width: 1200px) 592px, (min-width: 810px) 50vw, 100vw"
                      src={post.image}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="w-fit rounded-full bg-mist px-2 py-1 font-display text-[14px] font-medium leading-[1.4] text-ink">
                      {post.readTime}
                    </span>
                    <h4 className="font-display text-[22.08px] font-medium leading-[1.2] text-black">
                      {post.title}
                    </h4>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-accent bg-white px-4 py-2 font-display text-[14px] font-medium leading-[1.4] text-accent"
            href={section.viewAllHref}
          >
            {section.viewAllLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
