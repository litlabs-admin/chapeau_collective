"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { homePageContent } from "@/content/site";
import { SectionIntro, Reveal } from "./shared";

export function FaqSection() {
  const section = homePageContent.faqSection;
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      className="w-full overflow-hidden bg-white px-4 py-[60px] tablet:px-10 tablet:py-20 desktop:px-10 desktop:py-20"
      id={section.id}
    >
      <div className="mx-auto flex w-full max-w-[358px] flex-col gap-[24px] tablet:max-w-[710px] tablet:gap-10 desktop:max-w-[1200px] desktop:gap-10">
        <SectionIntro eyebrow={section.eyebrow}>
          <div className="flex w-full flex-col gap-10">
            <h3 className="ad-intro-title">
              {section.intro}
            </h3>

            <Reveal className="w-full">
              <div
                className="flex w-full flex-col overflow-hidden px-5"
                style={{ backgroundColor: "rgb(252, 252, 252)", borderRadius: "16px" }}
              >
                {section.items.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <article key={item.question} className="flex w-full flex-col">
                      <button
                        className="relative flex w-full cursor-pointer items-center gap-6 py-5 pl-10 pr-0 text-left"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        type="button"
                      >
                        {/* Plus icon — absolutely positioned at left:0, top:25px */}
                        <div className="absolute left-0 top-[25px] h-4 w-4 overflow-hidden">
                          <div className="absolute left-[calc(50%-8px)] top-[calc(50%-1px)] h-[2px] w-4 rounded-full bg-accent-dark" />
                          <div
                            className={`absolute left-[calc(50%-1px)] top-[calc(50%-8px)] h-4 w-[2px] rounded-full bg-accent-dark transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                          />
                        </div>

                        <p className="font-instrument text-[16px] font-medium leading-[1.4] text-ink desktop:text-[19.2px]">
                          {item.question}
                        </p>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            initial={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pl-10 pr-5 pt-0">
                              <p className="font-display text-[14px] font-medium leading-[1.4] text-ink-soft">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      {index < section.items.length - 1 && (
                        <div
                          className="h-px w-full"
                          style={{ backgroundColor: "rgba(186, 186, 186, 0.25)" }}
                        />
                      )}
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </SectionIntro>
      </div>
    </section>
  );
}
