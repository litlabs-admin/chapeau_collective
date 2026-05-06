"use client";

import Image from "next/image";
import { homePageContent } from "@/content/site";
import {
  AnimatedChars,
  AnimatedHeadline,
  AnimatedWords,
  SmartLink
} from "./shared";

export function HeroSection() {
  const { hero } = homePageContent;

  return (
    <section
      className="relative w-full overflow-hidden bg-white p-0 desktop:px-[20px] desktop:pt-[63px] desktop:pb-[20px] tablet:px-[20px] tablet:pt-[63px] tablet:pb-[20px]"
      id={hero.sectionId}
      style={{ height: "100vh" }}
    >
      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-hidden rounded-none px-[20px] pb-[80px] pt-[120px] desktop:rounded-[20px] desktop:px-[20px] desktop:py-[80px] tablet:rounded-[20px] tablet:px-[20px] tablet:py-[80px]"
      >
        <Image
          alt="man in black jacket holding orange and black helmet"
          className="object-cover object-[left_top] desktop:object-[center_top]"
          fill
          priority
          sizes="100vw"
          src={hero.backdrop}
        />

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

          <div className="hidden w-min flex-col items-start gap-[16px] self-stretch desktop:flex tablet:flex">
            <AnimatedWords
              as="h6"
              className="font-display text-[16px] font-medium uppercase leading-[1.4] tracking-[-0.02em] text-white"
              text={hero.sideLabel}
            />
            <div className="overflow-hidden rounded-[8px]" style={{ width: 200, height: 113 }}>
              <video
                autoPlay
                className="block h-full w-full object-cover"
                loop
                muted
                playsInline
                poster={hero.videoPoster}
                preload="none"
                style={{ borderRadius: 8, backgroundColor: "rgba(0,0,0,0)" }}
              >
                <source src={hero.videoSrc} type="video/mp4" />
              </video>
            </div>
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
          className="absolute inset-0 z-0 order-2"
          style={{ backgroundColor: "#08080833" }}
        />
      </div>
    </section>
  );
}
