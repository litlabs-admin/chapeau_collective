"use client";

import Image from "next/image";
import { homePageContent } from "@/content/site";

const logos = homePageContent.resultsSection.logos;

export function ResultsSection() {
  const section = homePageContent.resultsSection;
  const resultCards = section.cards;
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 tablet:px-10 desktop:px-10"
      id={section.id}
    >
      <div className="mx-auto flex w-full max-w-[358px] flex-col items-center justify-center gap-10 overflow-hidden tablet:max-w-[710px] tablet:gap-20 desktop:max-w-[1200px] desktop:gap-20">
        <div className="flex w-full flex-col items-start justify-start gap-4 desktop:flex-row">
          <div className="w-full desktop:w-[30%]">
            <h6 className="section-eyebrow">Results</h6>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden desktop:w-px desktop:flex-1">
            <h3 className="ad-intro-title w-full">
              We don't just talk performance . We deliver it. Our clients don't just see growth, they experience transformation. Here's a glimpse of what we've done.
            </h3>

            <div className="flex w-full flex-row items-center justify-center gap-6 overflow-hidden">
              <div className="w-min shrink-0">
                <h2
                  className="whitespace-pre font-display text-[12.8px] font-medium leading-none text-ink"
                >
                  Clients include
                </h2>
              </div>

              <div className="relative h-20 w-px flex-1 overflow-hidden">
                <div
                  className="flex h-full w-full items-center overflow-hidden p-[10px]"
                  style={{
                    maskImage:
                      "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)"
                  }}
                >
                  <ul className="ad-logo-marquee flex h-full items-center gap-10">
                    {marqueeLogos.map((logo, index) => (
                      <li
                        aria-hidden={index >= logos.length}
                        className="relative h-6 w-[100px] shrink-0"
                        key={`${logo}-${index}`}
                      >
                        <img
                          alt={index < logos.length ? `Client logo ${index + 1}` : ""}
                          className="h-full w-full object-contain"
                          src={logo}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-10 tablet:flex-row tablet:gap-4 desktop:flex-row desktop:gap-4">
          {resultCards.map((card) => (
            <article
              className="flex w-full flex-col items-start gap-4 overflow-hidden tablet:w-px tablet:flex-1 desktop:w-px desktop:flex-1"
              key={card.title}
            >
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="(min-width: 992px) 389px, (min-width: 768px) 226px, 358px"
                  src={card.mediaSrc}
                />
              </div>

              <div className="flex w-full flex-col items-center justify-end gap-2">
                <h4 className="ad-card-title w-full">{card.title}</h4>
              </div>

              <div className="flex w-full flex-col items-start justify-end gap-6">
                <p className="font-display text-sm font-medium leading-[1.4] text-ink-soft">
                  {card.quote}
                </p>

                <div className="flex w-full items-center justify-start gap-2">
                  <div className="relative h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full">
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      sizes="42px"
                      src={card.avatar}
                    />
                  </div>
                  <div className="flex w-px flex-1 flex-col items-start gap-1">
                    <p className="w-full font-display text-sm font-medium leading-[1.4] text-ink">
                      {card.person}
                    </p>
                    <p className="w-full font-display text-sm font-medium leading-[1.4] text-accent-dark">
                      {card.company}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
