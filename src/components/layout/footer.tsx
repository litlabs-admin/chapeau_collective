"use client";

import { homePageContent } from "@/content/site";
import { NewsletterForm } from "../forms";
import { Reveal, SmartLink } from "@/components/ui/shared";

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
      <h4 className="card-title w-full">{title}</h4>
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

function FooterWordmark() {
  return (
    <img
      alt={homePageContent.meta.title}
      className="h-auto w-full"
      src={homePageContent.logo}
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
            <h3 className="intro-title w-full">{footer.headline}</h3>
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

      <div className="flex w-full max-w-[358px] flex-row items-center justify-between gap-[10px] tablet:max-w-[710px] desktop:max-w-[1800px]">
        <p className="font-display text-[14px] font-medium leading-[1.4] text-ink">
          {footer.copyright}
        </p>
      </div>

      <Reveal className="w-full" delay={0.12}>
        <FooterWordmark />
      </Reveal>
    </footer>
  );
}
