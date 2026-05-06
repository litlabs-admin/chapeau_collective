"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { homePageContent } from "@/content/site";
import { Reveal, SectionIntro } from "./shared";

export function TeamSection() {
  const { members, arrows, eyebrow, intro, id } = homePageContent.teamSection;
  const listRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;
    const update = () => {
      setCanPrev(node.scrollLeft > 4);
      setCanNext(node.scrollLeft + node.clientWidth < node.scrollWidth - 4);
    };
    update();
    node.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      node.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: 1 | -1) => {
    const node = listRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * (node.clientWidth * 0.9), behavior: "smooth" });
  };

  return (
    <section
      className="w-full overflow-hidden bg-white px-5 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10 desktop:py-20"
      id={id}
    >
      {/* Container — Framer framer-zjk6sn (max-width responsive). Inner Content has gap:40px */}
      <div className="mx-auto flex w-full max-w-[358px] flex-col gap-10 tablet:max-w-[710px] desktop:max-w-[1200px]">
        <SectionIntro eyebrow={eyebrow}>
          <h3 className="ad-intro-title">
            {intro}
          </h3>
        </SectionIntro>

        {/* Card Wrapper — framer-rxsuta */}
        <Reveal className="relative">
          {/* Carousel — pb-[60px] matches Framer carousel section bottom padding; items-center matches Framer */}
          <ul
            ref={listRef}
            className="hidden-scrollbar flex snap-x snap-mandatory items-center gap-4 overflow-x-auto pb-[60px]"
          >
            {members.map((member) => (
              <li key={member.name} className="team-slide snap-center">
                {/* Card — framer-1iivhs0: NO outer bg, flex-col gap:16px */}
                <article className="flex flex-col gap-4">
                  {/* Image — framer-97fwxi: h-300px rounded-[8px] overflow:hidden */}
                  <div className="relative h-[300px] overflow-hidden rounded-[8px]">
                    <Image
                      alt={`${member.name} profile`}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1200px) 389px, (min-width: 810px) 710px, 358px"
                      src={member.image}
                    />
                  </div>

                  {/* Content — framer-178ja4n: flex-col gap:16px, padding:0 */}
                  <div className="flex flex-col gap-4">
                    {/* Profile — framer-1dtkvrm: flex-row gap:8px items-center */}
                    <div className="flex w-full items-center gap-2">
                      {/* Frame 8475 — framer-kw38v6: flex-col gap:8px flex:1 */}
                      <div className="flex flex-1 flex-col gap-2">
                        <h4 className="font-display text-[22.08px] font-medium leading-[1.2] text-ink">
                          {member.name}
                        </h4>
                        <p className="font-display text-[14px] font-medium leading-[1.4] text-[#133F40]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    {/* Bio — framer-8dqb80: text-ink (#111), NOT ink-soft */}
                    <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {/* Carousel controls — Framer fieldset, padding:20px, prev/next buttons */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-between p-5 tablet:flex desktop:flex">
            <button
              aria-label="Previous"
              className={`pointer-events-auto h-10 w-10 rounded-full bg-black/20 transition-opacity ${canPrev ? "opacity-100" : "opacity-0"}`}
              disabled={!canPrev}
              onClick={() => scroll(-1)}
              type="button"
            >
              <img alt="" src={arrows.prev} />
            </button>
            <button
              aria-label="Next"
              className={`pointer-events-auto h-10 w-10 rounded-full bg-black/20 transition-opacity ${canNext ? "opacity-100" : "opacity-0"}`}
              disabled={!canNext}
              onClick={() => scroll(1)}
              type="button"
            >
              <img alt="" src={arrows.next} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
