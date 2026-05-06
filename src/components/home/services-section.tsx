"use client";

import { homePageContent } from "@/content/site";
import { Reveal } from "./shared";
import { ServiceArt } from "./service-art";

export function ServicesSection() {
  const section = homePageContent.servicesSection;

  return (
    <section
      className="w-full overflow-hidden bg-mist px-4 py-10 tablet:px-10 desktop:px-10"
      id={section.id}
    >
      <div className="mx-auto flex w-full max-w-[358px] flex-col gap-6 tablet:max-w-[710px] tablet:gap-20 desktop:max-w-[1200px] desktop:gap-20">
        {section.items.map((service, index) => (
          <article
            className={`grid w-full gap-4 desktop:grid-cols-[30%_minmax(0,1fr)] desktop:items-start${
              index === 0
                ? " desktop:p-4"
                : " pt-10 pb-4 desktop:pt-10 desktop:px-4 desktop:pb-4"
            }`}
            key={service.title}
          >
            {/* Eyebrow — framer-otmrws */}
            <Reveal className="w-full" delay={index * 0.04}>
              <h6 className="font-display text-base font-medium uppercase leading-[1.4] tracking-[-.02em] text-[#133F40]">
                {service.tag}
              </h6>
            </Reveal>

            {/* Wrapper — framer-henimr */}
            <div className="grid w-full grid-cols-1 items-start gap-y-10 gap-x-6 tablet:items-center tablet:grid-cols-[328px_1fr] tablet:gap-y-20 desktop:grid-cols-[328px_1fr] desktop:items-center desktop:gap-x-10 desktop:gap-y-20">

              {/* Heading — framer-6wkpks */}
              <Reveal delay={index * 0.04 + 0.04} className="col-span-1 tablet:col-span-2 desktop:col-span-2">
                <h2 className="section-title">
                  {service.heading}
                </h2>
              </Reveal>

              {/* Art card — framer-83knmo-container */}
              <Reveal className="w-full shrink-0" delay={index * 0.04 + 0.08}>
                <ServiceArt kind={service.art} />
              </Reveal>

              {/* Content Wrapper — framer-1nlbunn */}
              <div className="flex w-full max-w-[500px] flex-col items-start gap-[10px]">
                <Reveal className="w-full" delay={index * 0.04 + 0.12}>
                  <h4 className="font-display text-[22.08px] font-medium leading-[1.2] text-black">
                    {service.title}
                  </h4>
                </Reveal>
                <Reveal className="w-full" delay={index * 0.04 + 0.16}>
                  <p className="font-display text-[14px] font-medium leading-[1.4] text-ink-soft">
                    {service.body}
                  </p>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
