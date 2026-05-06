"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { NavItem } from "@/content/site";
import { homePageContent } from "@/content/site";
import { SmartLink } from "./shared";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = homePageContent.nav as readonly NavItem[];

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] bg-white">
      <nav className="flex w-full items-center justify-between px-4 py-[10px] tablet:px-10 desktop:px-10">
        <SmartLink
          className="relative flex h-[36px] w-[150px] shrink-0 items-center"
          href="#hero-section"
        >
          <img
            alt="Chapeau Collective"
            className="h-full w-full object-contain object-left"
            src="/chapeau logo.png"
          />
        </SmartLink>

        <div className="hidden min-w-0 flex-[1_0_0] items-center justify-evenly tablet:flex desktop:flex">
          {navItems.map((item) => (
            <SmartLink
              key={item.label}
              className="group inline-flex h-[33px] items-center justify-center text-[14px] font-medium leading-[1.4] tracking-normal text-ink-soft transition-colors hover:text-accent-dark font-display"
              href={item.href}
            >
              <span>{item.label}</span>
              {item.count ? (
                <span className="ml-[2px] text-[14px] leading-[1.4] text-[#999]">
                  {item.count}
                </span>
              ) : null}
            </SmartLink>
          ))}
        </div>

        <SmartLink
          className="hidden items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-[14px] font-medium leading-[1.4] text-white tablet:inline-flex desktop:inline-flex"
          href="#book-a-call-section"
          style={{
            boxShadow:
              "inset 0 4px 4px 0 rgba(255,255,255,0.2), inset 4px 0 4px 0 rgba(255,255,255,0.2), inset 0 -4px 4px 0 rgba(255,255,255,0.2), inset -4px 0 4px 0 rgba(255,255,255,0.2)"
          }}
        >
          Let's Talk
        </SmartLink>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="relative ml-auto flex h-10 w-10 items-center justify-center tablet:hidden desktop:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className="relative block h-[20px] w-[20px]">
            <span
              className={`absolute left-0 top-[8px] h-[2px] w-full bg-ink transition-transform duration-300 ${
                isOpen ? "translate-y-[2px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[2px] w-full bg-ink transition-transform duration-300 ${
                isOpen ? "-translate-y-[2px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden bg-white tablet:hidden desktop:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-6 px-4 pb-6 pt-2">
              {navItems.map((item) => (
                <SmartLink
                  key={item.label}
                  className="flex items-center gap-[2px] text-[14px] font-medium leading-[1.4] text-ink-soft font-display"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.count ? (
                    <span className="text-[14px] leading-[1.4] text-[#999]">
                      {item.count}
                    </span>
                  ) : null}
                </SmartLink>
              ))}
              <SmartLink
                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent px-4 py-2 text-[14px] font-medium leading-[1.4] text-white"
                href="#book-a-call-section"
                onClick={() => setIsOpen(false)}
                style={{
                  boxShadow:
                    "inset 0 4px 4px 0 rgba(255,255,255,0.2), inset 4px 0 4px 0 rgba(255,255,255,0.2), inset 0 -4px 4px 0 rgba(255,255,255,0.2), inset -4px 0 4px 0 rgba(255,255,255,0.2)"
                }}
              >
                Let's Talk
              </SmartLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
