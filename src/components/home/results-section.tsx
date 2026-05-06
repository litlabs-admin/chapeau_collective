"use client";

import Image from "next/image";
import { homePageContent } from "@/content/site";

export function ResultsSection() {
  const section = homePageContent.resultsSection;

  return (
    <section className="ad-section bg-white" id={section.id}>
      <div className="ad-container">
        <div className="grid w-full gap-4 desktop:grid-cols-[30%_minmax(0,1fr)] desktop:items-start">
          <p className="section-eyebrow">{section.eyebrow}</p>
          <div className="min-w-0">
            <div className="flex flex-col gap-[32px]">
              <h3 className="ad-intro-title">{section.intro}</h3>

              <div className="flex w-full flex-row items-center gap-6 overflow-hidden">
                <div className="shrink-0">
                  <p
                    className="font-display text-[12.8px] font-medium leading-none tracking-normal text-ink"
                    style={{ whiteSpace: "pre" }}
                  >
                    {section.logosHeading}
                  </p>
                </div>

                <div className="relative h-20 flex-1 overflow-hidden">
                  <div
                    className="flex h-full items-center gap-[40px] px-[10px]"
                    style={{
                      maskImage:
                        "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)"
                    }}
                  >
                    {section.logos.map((logo, index) => (
                      <span
                        key={`${logo}-${index}`}
                        className="relative flex h-6 w-[100px] shrink-0 items-center justify-center"
                      >
                        <img
                          alt={`Client logo ${index + 1}`}
                          className="max-h-6 w-[100px] object-contain"
                          src={logo}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[40px] tablet:flex-row tablet:gap-[16px] desktop:flex-row desktop:gap-[16px]">
          {section.cards.map((card) => (
            <div key={card.title} className="w-full tablet:flex-1 desktop:flex-1">
              <article className="flex flex-col gap-[16px] overflow-hidden bg-mist">
                <div
                  className={`relative overflow-hidden rounded-[8px] ${
                    card.mediaType === "video" ? "h-[400px]" : "h-[300px]"
                  }`}
                >
                  {card.mediaType === "video" ? (
                    <video
                      autoPlay
                      className="h-full w-full object-cover"
                      controls
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      style={{ borderRadius: 8, backgroundColor: "rgb(254,247,231)" }}
                    >
                      <source src={card.mediaSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      alt={card.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1200px) 389px, (min-width: 810px) 50vw, 100vw"
                      src={card.mediaSrc}
                    />
                  )}
                </div>

                <div className="w-full">
                  <h4 className="font-display text-[22.08px] font-medium leading-[1.2] text-black">
                    {card.title}
                  </h4>
                </div>

                <div className="flex w-full flex-col gap-[24px]">
                  <p className="font-display text-[14px] font-medium leading-[1.4] text-ink-soft">
                    {card.quote}
                  </p>
                  <div className="flex w-full items-center gap-[8px]">
                    <div className="relative h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full">
                      <Image
                        alt={card.person}
                        className="object-cover"
                        fill
                        sizes="42px"
                        src={card.avatar}
                      />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
                        {card.person}
                      </p>
                      <p className="font-display text-[14px] font-medium leading-[1.4] text-[#133F40]">
                        {card.company}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
