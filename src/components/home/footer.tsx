"use client";

import { homePageContent } from "@/content/site";
import { NewsletterForm } from "../forms";
import { Reveal, SmartLink } from "./shared";

type FooterLink = {
  label: string;
  href: string;
};

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex w-full flex-col items-start gap-2 overflow-hidden desktop:w-[200px]">
      <h4 className="ad-card-title w-full">
        {title}
      </h4>
      <div className="flex w-full flex-col items-start gap-2">
        {links.map((link) => (
          <div
            key={`${title}-${link.label}`}
            className="flex w-full cursor-pointer items-center justify-start overflow-hidden"
          >
              <SmartLink
                className="w-full font-display text-[14px] font-medium leading-[1.4] text-ink-soft hover:text-accent-dark"
                href={link.href}
              >
                {link.label}
              </SmartLink>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" className="h-full w-full shrink-0 select-none fill-current" focusable="false" viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" className="h-full w-full shrink-0 select-none fill-current" focusable="false" viewBox="0 0 24 24">
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-full w-full shrink-0 select-none fill-current" focusable="false" viewBox="0 0 24 24">
      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
    </svg>
  );
}

function SocialLink({ social }: { social: { label: string; href: string } }) {
  return (
    <SmartLink
      className="flex h-min w-min items-center justify-center gap-[10px] overflow-hidden text-ink no-underline"
      href={social.href}
    >
      <span className="sr-only">{social.label}</span>
      <span className="relative block h-6 w-6 shrink-0">
        <SocialIcon label={social.label} />
      </span>
    </SmartLink>
  );
}

function FooterWordmark() {
  return (
    <img
      alt="Chapeau Collective"
      className="h-auto w-full"
      src="/chapeau-collective-logo.svg"
    />
  );
}

export function Footer() {
  const footer = homePageContent.footer;

  return (
    <footer className="relative flex w-full flex-col items-center gap-6 overflow-hidden border-t border-[#bababa40] bg-[#f2f2f2] px-4 pb-4 pt-10 tablet:px-10 desktop:px-10">
      <div className="flex w-full max-w-[358px] flex-col items-start justify-start gap-6 tablet:max-w-[710px] tablet:flex-row desktop:max-w-[1800px] desktop:flex-row desktop:justify-between">
        <div className="flex w-full flex-col items-center gap-6 tablet:w-px tablet:flex-1 desktop:w-[30%] desktop:flex-none">
          <Reveal className="w-full">
            <h3 className="ad-intro-title w-full">
              {footer.headline}
            </h3>
          </Reveal>

          <Reveal className="w-full" delay={0.04}>
            <NewsletterForm footer={footer} />
          </Reveal>
        </div>

        <Reveal
          className="flex w-full flex-col items-start justify-start gap-6 tablet:w-px tablet:flex-1 desktop:w-px desktop:flex-1 desktop:flex-row desktop:justify-end desktop:gap-[10px]"
          delay={0.08}
        >
          <FooterColumn links={footer.sections} title="Sections" />
          <FooterColumn links={footer.pages} title="Pages" />
        </Reveal>
      </div>

      <div className="flex w-full max-w-[358px] flex-col items-start justify-start gap-[10px] tablet:max-w-[710px] tablet:flex-row tablet:items-center tablet:justify-start desktop:max-w-[1800px]">
        <div className="order-1 flex w-full items-center justify-start gap-[10px] overflow-hidden tablet:order-none tablet:w-px tablet:flex-1">
          <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
            {footer.copyright}
          </p>
        </div>

        <div className="order-0 flex h-min w-min items-center justify-center gap-[10px] overflow-hidden tablet:order-none">
          {footer.socials.map((social) => (
            <SocialLink key={social.label} social={social} />
          ))}
        </div>
      </div>

      <Reveal className="w-full" delay={0.12}>
        <FooterWordmark />
      </Reveal>
    </footer>
  );
}
