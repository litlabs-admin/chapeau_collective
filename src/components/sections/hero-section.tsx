"use client";

import { homePageContent } from "@/content/site";
import {
  AnimatedChars,
  AnimatedHeadline,
  SmartLink
} from "@/components/ui/shared";

export function HeroSection() {
  const { hero } = homePageContent;

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-white p-0 desktop:px-[20px] desktop:pt-[63px] desktop:pb-[20px] tablet:px-[20px] tablet:pt-[63px] tablet:pb-[20px]"
      id={hero.sectionId}
    >
      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-hidden rounded-none px-[20px] pb-[80px] pt-[120px] desktop:rounded-[20px] desktop:px-[20px] desktop:py-[80px] tablet:rounded-[20px] tablet:px-[20px] tablet:py-[80px]"
      >
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover object-center"
          loop
          muted
          playsInline
          poster={hero.backdrop}
          preload="auto"
        >
          <source src={hero.backdropVideo} type="video/mp4" />
        </video>

        <div
          className="relative z-[1] order-1 flex w-full max-w-[358px] flex-1 flex-col items-stretch justify-end gap-[24px] desktop:order-none desktop:max-w-[1200px] desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-0 tablet:order-none tablet:max-w-[710px] tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-0"
        >
          <div className="flex w-full max-w-[360px] flex-col items-start gap-[16px] desktop:max-w-[400px] desktop:flex-1 desktop:justify-center tablet:max-w-[400px] tablet:flex-1 tablet:justify-center">
            <AnimatedChars
              as="p"
              className="font-display text-[14px] font-medium leading-[1.4] tracking-normal text-white"
              text={hero.copy}
            />
            <SmartLink
              className="inline-flex items-center justify-center gap-[8px] rounded-full bg-white px-[16px] py-[8px] text-[14px] font-medium leading-[1.4] text-accent font-display"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
              <span
                aria-hidden="true"
                className="flex h-[16px] w-[16px] items-center justify-center"
              >
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </SmartLink>
          </div>
        </div>

        <div className="relative z-[1] order-0 flex w-full max-w-[358px] flex-col items-start gap-[24px] desktop:order-none desktop:max-w-[1200px] desktop:flex-row desktop:items-end desktop:gap-[40px] tablet:order-none tablet:max-w-[710px] tablet:flex-row tablet:items-end tablet:gap-[40px]">
          <div className="flex w-full flex-col items-start gap-[24px] desktop:flex-1 desktop:flex-row desktop:items-end desktop:justify-center desktop:gap-0 tablet:flex-1 tablet:flex-row tablet:items-end tablet:justify-center tablet:gap-0">
            <AnimatedHeadline
              className="w-full font-display text-[41.6px] font-medium leading-[1] tracking-[-0.02em] text-white desktop:text-[75.2px] desktop:leading-[1.1] tablet:text-[64px] tablet:leading-[1.1]"
              desktopBreakAfter="and"
              text={hero.title}
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 order-2 bg-[#08080833]"
        />
      </div>
    </section>
  );
}
