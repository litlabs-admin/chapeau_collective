"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { NavItem } from "@/content/site";
import { homePageContent } from "@/content/site";
import { SmartLink } from "@/components/ui/shared";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = homePageContent.nav as readonly NavItem[];
  const homeHash = (href: string) => (href.startsWith("#") ? `/${href}` : href);

  useEffect(() => {
    const html = document.documentElement;
    let frame = 0;

    const compute = () => {
      if (isOpen) return false;
      if (pathname !== "/") return false;
      return window.scrollY <= window.innerHeight - 100;
    };

    const apply = () => {
      frame = 0;
      html.toggleAttribute("data-hero-visible", compute());
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", apply, { passive: true });
    window.addEventListener("pageshow", apply);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", apply);
      window.removeEventListener("pageshow", apply);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname, isOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[1000] bg-white transition-colors duration-300"
      data-chapeau-header
    >
      <nav className="flex w-full items-center justify-between px-4 py-[10px] tablet:px-10 desktop:px-10">
        <SmartLink
          className="relative flex h-[42px] w-[200px] shrink-0 items-center"
          href="/#hero-section"
        >
          <img
            alt={homePageContent.meta.title}
            className="h-full w-full object-contain object-left transition duration-300"
            data-header-logo
            src={homePageContent.headerLogo}
          />
        </SmartLink>

        <div className="hidden min-w-0 flex-[1_0_0] items-center justify-evenly tablet:flex desktop:flex">
          {navItems.map((item) => (
            <SmartLink
              key={item.label}
              className="group inline-flex h-[33px] items-center justify-center font-display text-[14px] font-medium leading-[1.4] tracking-normal text-ink-soft transition-colors hover:text-accent-dark"
              data-nav-link
              href={homeHash(item.href)}
            >
              <span>{item.label}</span>
            </SmartLink>
          ))}
        </div>

        <SmartLink
          className="hidden items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-[14px] font-medium leading-[1.4] text-white shadow-button tablet:inline-flex desktop:inline-flex"
          href="/#book-a-call-section"
        >
          Let&apos;s Talk
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
              className={`absolute left-0 top-[8px] h-[2px] w-full bg-ink transition-all duration-300 ${
                isOpen ? "translate-y-[2px] rotate-45" : ""
              }`}
              data-burger-line
            />
            <span
              className={`absolute left-0 top-[12px] h-[2px] w-full bg-ink transition-all duration-300 ${
                isOpen ? "-translate-y-[2px] -rotate-45" : ""
              }`}
              data-burger-line
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
                  className="flex items-center gap-[2px] font-display text-[14px] font-medium leading-[1.4] text-ink-soft"
                  href={homeHash(item.href)}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                </SmartLink>
              ))}
              <SmartLink
                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent px-4 py-2 text-[14px] font-medium leading-[1.4] text-white shadow-button"
                href="/#book-a-call-section"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </SmartLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
