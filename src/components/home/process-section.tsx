"use client";

import { homePageContent } from "@/content/site";
import { Reveal } from "./shared";

const cardPlacement = [
  "tablet:col-start-1 desktop:col-start-1",
  "tablet:col-start-2 desktop:col-start-2",
  "tablet:col-start-1 desktop:col-start-3",
  "tablet:col-start-2 desktop:col-start-4"
];

export function ProcessSection() {
  const section = homePageContent.processSection;

  return (
    <section
      className="w-full overflow-clip bg-white px-4 py-20 tablet:px-10 desktop:px-10"
      id={section.id}
    >
      <div className="mx-auto flex w-full max-w-[358px] flex-col gap-6 tablet:max-w-[710px] tablet:gap-20 desktop:max-w-[1200px] desktop:gap-20">
        <div className="flex w-full flex-col items-start gap-4 tablet:flex-col desktop:flex-row">
          <Reveal className="w-full desktop:w-[30%]">
            <p className="section-eyebrow">
              {section.eyebrow}
            </p>
          </Reveal>
          <div className="w-full min-w-0 desktop:flex-1">
            <Reveal delay={0.04}>
              <h3 className="ad-intro-title">
                {section.intro}
              </h3>
            </Reveal>
          </div>
        </div>

        <div className="flex w-full flex-col gap-0 overflow-clip">
          {section.steps.map((step, index) => (
            <div
              className="sticky top-[150px] z-[1] grid h-[50vh] w-full grid-cols-1 items-stretch overflow-clip tablet:grid-cols-2 desktop:grid-cols-4"
              key={step.step}
            >
              <Reveal
                className={`h-full w-full ${cardPlacement[index]}`}
                delay={index * 0.06}
              >
                <article className="flex h-full w-full flex-col justify-between overflow-hidden bg-mist p-4">
                  <div className="flex w-full items-center justify-start overflow-hidden">
                    <p className="font-display text-[128px] font-normal leading-[1.2] tracking-normal text-accent-dark">
                      {step.step}
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-center gap-2 rounded-[8px]">
                    <div className="flex w-full flex-col items-start">
                      <h4 className="font-display text-[22.08px] font-medium leading-[1.2] text-black">
                        {step.title}
                      </h4>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 overflow-hidden">
                      <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
