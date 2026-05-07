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
            <h3 className="intro-title w-full">
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
                  <article className="grid w-full grid-rows-[auto_auto_auto_auto] items-start gap-4 overflow-visible">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                      <Image
                        alt="Profile image"
                        className="grayscale"
                        fill
                        sizes="(min-width: 992px) 323px, (min-width: 768px) 710px, 358px"
                        src={member.image}
                        style={{
                          objectFit: "fill",
                          objectPosition: member.objectPosition ?? "center"
                        }}
                      />
                    </div>

                    <div className="flex w-full items-center justify-between gap-2">
                      <h4 className="card-title">{member.name}</h4>
                      {member.linkedin ? (
                        <a
                          aria-label={`${member.name} on LinkedIn`}
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-accent"
                          href={member.linkedin}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
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
