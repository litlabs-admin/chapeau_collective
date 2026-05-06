"use client";

import { homePageContent } from "@/content/site";
import { MetricCounter, Reveal } from "./shared";

export function MetricsSection() {
  const intro = homePageContent.servicesSection;

  return (
    <section
      className="flex w-full flex-col items-center bg-white px-4 py-20 tablet:px-10 desktop:px-10"
      id={homePageContent.metricsSectionId}
    >
      <div className="w-full max-w-[358px] tablet:max-w-[710px] desktop:max-w-[1200px]">
        <div className="flex w-full flex-col gap-4 desktop:flex-row desktop:items-start">
          <Reveal className="flex-none desktop:w-[30%]">
            <p className="section-eyebrow">{intro.eyebrow}</p>
          </Reveal>

          <div className="flex flex-col gap-8 desktop:flex-1">
            <Reveal>
              <h3 className="font-display text-[23.2px] font-medium leading-[1.2] tracking-normal text-ink tablet:text-[28px] desktop:text-[32px]">
                {intro.intro}
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-[10px] tablet:flex-row desktop:flex-row">
                {homePageContent.metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="grid h-[250px] flex-1 grid-rows-[32px_98px_88px] items-start rounded-[16px] bg-mist p-4"
                  >
                    <p
                      className="font-display text-[32px] font-medium text-ink"
                      style={{
                        lineHeight: "0.8em",
                        letterSpacing: "-0.05em",
                        fontFeatureSettings: "'zero' on, 'tnum' on"
                      }}
                    >
                      <MetricCounter suffix={metric.suffix} value={metric.value} />
                    </p>
                    <div className="row-start-3 flex h-full w-full flex-col items-start gap-[4px] overflow-hidden">
                      <p className="font-instrument text-[16px] font-medium leading-[1.4] text-ink desktop:text-[19.2px]">
                        {metric.label}
                      </p>
                      <p className="font-display text-[14px] font-medium leading-[1.2] text-ink">
                        {metric.detail}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
