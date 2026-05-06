"use client";

import { homePageContent } from "@/content/site";
import { QuoteForm } from "../forms";
import { Reveal } from "./shared";

export function QuoteSection() {
  const section = homePageContent.quoteSection;

  return (
    <section
      className="w-full overflow-hidden bg-mist px-4 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10"
      id={section.id}
    >
      <div className="mx-auto flex w-full max-w-[358px] flex-col items-center gap-6 tablet:max-w-[710px] tablet:gap-10 desktop:max-w-[1200px]">
        <div className="flex w-full flex-col items-start gap-4 desktop:flex-row">
          <Reveal className="w-full desktop:w-[30%]">
            <p className="section-eyebrow">
              {section.eyebrow}
            </p>
          </Reveal>

          <div className="flex w-full flex-col items-center gap-10 desktop:w-px desktop:flex-1">
            <Reveal className="w-full">
              <h3 className="ad-intro-title">
                {section.title}
              </h3>
            </Reveal>

            <Reveal className="w-full">
              <QuoteForm section={section} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
