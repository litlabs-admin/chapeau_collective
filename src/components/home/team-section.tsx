"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { homePageContent } from "@/content/site";

export function TeamSection() {
  const { arrows, eyebrow, id, intro, members } = homePageContent.teamSection;
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
    node.scrollBy({
      behavior: "smooth",
      left: direction * node.clientWidth
    });
  };

  return (
    <section
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-white px-5 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10 desktop:py-20"
      id={id}
    >
      <div className="mx-auto flex w-full max-w-[358px] flex-col items-center justify-center gap-6 overflow-hidden tablet:max-w-[710px] tablet:gap-10 desktop:max-w-[1200px] desktop:gap-10">
        <div className="flex w-full flex-col items-start justify-start gap-4 desktop:flex-row">
          <div className="w-full desktop:w-[30%]">
            <h6 className="section-eyebrow">{eyebrow}</h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden desktop:w-px desktop:flex-1">
            <h3 className="ad-intro-title w-full">
              {intro}
            </h3>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center gap-4 overflow-hidden">
          <section
            aria-roledescription="carousel"
            className="relative flex h-full w-full overflow-hidden pb-[60px]"
          >
            <ul
              aria-atomic="false"
              aria-live="polite"
              className="hidden-scrollbar flex w-full flex-1 snap-x snap-mandatory flex-row items-start gap-4 overflow-x-auto overflow-y-hidden"
              ref={listRef}
            >
              {members.map((member, index) => (
                <li
                  aria-label={`${index + 1} of ${members.length}`}
                  className="w-full shrink-0 snap-center snap-always tablet:w-full desktop:w-[calc(33.333333333333336%_-_10.666666666666666px)]"
                  key={member.name}
                >
                  <article className="grid w-full grid-rows-[300px_auto_auto_auto] items-start gap-4 overflow-visible">
                    <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                      <Image
                        alt="Profile image"
                        className="grayscale"
                        fill
                        sizes="(min-width: 1200px) 323px, (min-width: 810px) 710px, 358px"
                        src={member.image}
                        style={{
                          objectFit: "fill",
                          objectPosition: member.objectPosition ?? "center"
                        }}
                      />
                    </div>

                    <h4 className="ad-card-title w-full">{member.name}</h4>
                    <p className="w-full font-display text-sm font-medium leading-[1.4] text-accent-dark">
                      {member.role}
                    </p>
                    <p className="w-full font-display text-sm font-medium leading-[1.4] text-ink">
                      {member.bio}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

            <fieldset
              aria-label="Carousel pagination controls"
              className="pointer-events-none absolute inset-0 m-0 hidden items-center justify-between border-0 p-5 tablet:flex desktop:flex"
            >
              <button
                aria-label="Previous"
                className={`pointer-events-auto grid h-10 w-10 place-items-center overflow-hidden rounded-full border-0 bg-black/20 p-0 transition-opacity ${
                  canPrev ? "cursor-pointer opacity-100" : "pointer-events-none cursor-default opacity-0"
                }`}
                disabled={!canPrev}
                onClick={() => scroll(-1)}
                type="button"
              >
                <img alt="" height="40" src={arrows.prev} width="40" />
              </button>
              <button
                aria-label="Next"
                className={`pointer-events-auto grid h-10 w-10 place-items-center overflow-hidden rounded-full border-0 bg-black/20 p-0 transition-opacity ${
                  canNext ? "cursor-pointer opacity-100" : "pointer-events-none cursor-default opacity-0"
                }`}
                disabled={!canNext}
                onClick={() => scroll(1)}
                type="button"
              >
                <img alt="" height="40" src={arrows.next} width="40" />
              </button>
            </fieldset>
          </section>
        </div>
      </div>
    </section>
  );
}
