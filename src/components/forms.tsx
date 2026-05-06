"use client";

import { FormEvent, useState } from "react";

type SiteContent = typeof import("@/content/site").homePageContent;
type QuoteSection = SiteContent["quoteSection"];
type FooterSection = SiteContent["footer"];

type FormStatus = {
  kind: "idle" | "submitting" | "success" | "error";
  message: string;
};

const quoteFieldClassName = "flex w-full flex-col items-start gap-[10px]";

const quoteLabelClassName =
  "font-display text-sm font-medium leading-[1.4] tracking-normal text-ink-soft desktop:text-base";

const quoteInputClassName =
  "h-10 w-full rounded-[10px] border border-[#bababa40] bg-white px-3 [font-family:Inter,var(--font-display)] text-base font-normal leading-[1.2] text-ink outline-none placeholder:text-[#999999] focus:border-accent-dark";

const honeypotFieldNames = [
  "website",
  "company",
  "message",
  "subject",
  "title",
  "description",
  "feedback",
  "notes",
  "details",
  "remarks",
  "comments"
];

const newsletterInputClassName =
  "h-10 w-full rounded-[10px] border border-[#bababa40] bg-white px-3 [font-family:Inter,var(--font-display)] text-base font-normal leading-[1.2] text-ink outline-none placeholder:text-[#999999] focus:border-[#ff5a19]";

const initialStatus = (message: string): FormStatus => ({
  kind: "idle",
  message
});

async function submitForm<T extends Record<string, string>>(
  endpoint: string,
  payload: T
) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = (await response.json().catch(() => null)) as
    | { message?: string }
    | null;

  if (!response.ok) {
    throw new Error(data?.message ?? "Something went wrong.");
  }

  return data;
}

export function QuoteForm({ section }: { section: QuoteSection }) {
  const [status, setStatus] = useState<FormStatus>(initialStatus(section.helper));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      monthlyRevenueRange: String(formData.get("monthlyRevenueRange") ?? ""),
      brief: String(formData.get("brief") ?? ""),
      website: String(formData.get("website") ?? ""),
      sourcePath:
        typeof window !== "undefined" ? window.location.pathname : "/"
    };

    setStatus({ kind: "submitting", message: "Submitting..." });

    try {
      const data = await submitForm("/api/forms/quote", payload);
      setStatus({
        kind: "success",
        message: data?.message ?? section.helper
      });
      form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong."
      });
    }
  }

  return (
    <form className="flex w-full flex-col items-start gap-5" onSubmit={handleSubmit}>
      <label className={quoteFieldClassName} htmlFor="quote-name">
        <span className={quoteLabelClassName}>Name</span>
        <input
          id="quote-name"
          className={quoteInputClassName}
          name="name"
          placeholder={section.fields.namePlaceholder}
          required
          type="text"
        />
      </label>

      <label className={quoteFieldClassName} htmlFor="quote-email">
        <span className={quoteLabelClassName}>Email</span>
        <input
          id="quote-email"
          className={quoteInputClassName}
          name="email"
          placeholder={section.fields.emailPlaceholder}
          required
          type="email"
        />
      </label>

      <label className={quoteFieldClassName} htmlFor="quote-company">
        <span className={quoteLabelClassName}>Company</span>
        <input
          id="quote-company"
          className={quoteInputClassName}
          name="company"
          placeholder={section.fields.companyPlaceholder}
          type="text"
        />
      </label>

      <label className={quoteFieldClassName} htmlFor="quote-revenue">
        <span className={quoteLabelClassName}>{section.fields.revenueLabel}</span>
        <select
          id="quote-revenue"
          className={quoteInputClassName}
          defaultValue=""
          name="monthlyRevenueRange"
          required
        >
          <option value="" disabled>
            Select…
          </option>
          {section.fields.revenueOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className={quoteFieldClassName} htmlFor="quote-brief">
        <span className={quoteLabelClassName}>{section.fields.briefLabel}</span>
        <textarea
          id="quote-brief"
          className={`${quoteInputClassName} min-h-[100px] resize-y py-3`}
          name="brief"
          placeholder={section.fields.briefPlaceholder}
        />
      </label>

      <button
        className="h-10 w-full rounded-[10px] bg-accent font-display text-sm font-medium leading-[1.4] tracking-normal text-white shadow-button disabled:cursor-not-allowed disabled:opacity-60 desktop:text-base"
        disabled={status.kind === "submitting"}
        type="submit"
      >
        {status.kind === "submitting" ? "Submitting..." : section.submitLabel}
      </button>

      <div className="flex w-full flex-row items-start justify-start gap-4">
        <p
          className={`${quoteLabelClassName} ${
            status.kind === "error" ? "text-red-600" : "text-ink-soft"
          }`}
        >
          {status.message}
        </p>
      </div>

      {honeypotFieldNames.map((name) => (
        <input
          key={name}
          aria-hidden="true"
          autoComplete="one-time-code"
          className="absolute scale-0"
          data-1p-ignore="true"
          data-bwignore="true"
          data-form-type="other"
          data-lpignore="true"
          name={name}
          tabIndex={-1}
          type="text"
        />
      ))}
    </form>
  );
}

export function NewsletterForm({ footer }: { footer: FooterSection }) {
  const [status, setStatus] = useState<FormStatus>(
    initialStatus("Sign up for updates.")
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      email: String(formData.get("email") ?? ""),
      website: String(formData.get("website") ?? ""),
      sourcePath:
        typeof window !== "undefined" ? window.location.pathname : "/"
    };

    setStatus({ kind: "submitting", message: "Submitting..." });

    try {
      const data = await submitForm("/api/forms/newsletter", payload);
      setStatus({
        kind: "success",
        message: data?.message ?? "Thanks for signing up."
      });
      form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong."
      });
    }
  }

  return (
    <form
      className="relative flex w-full flex-row items-end justify-start gap-2"
      onSubmit={handleSubmit}
    >
      <label className="flex min-w-0 flex-1 flex-col items-start gap-2">
        <span className="font-display text-sm font-medium leading-[1.4] tracking-normal text-ink-soft desktop:text-base">
          {footer.newsletterTitle}
        </span>
        <input
          className={newsletterInputClassName}
          name="email"
          placeholder={footer.newsletterPlaceholder}
          required
          type="email"
        />
      </label>

      <button
        aria-label={footer.newsletterSubmitLabel}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#ff5a19] text-white shadow-button disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status.kind === "submitting"}
        type="submit"
      >
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="5" x2="19" y1="12" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>

      <p className="sr-only" role={status.kind === "error" ? "alert" : "status"}>
        {status.message}
      </p>

      {honeypotFieldNames.map((name) => (
        <input
          key={`newsletter-${name}`}
          aria-hidden="true"
          autoComplete="one-time-code"
          className="absolute scale-0"
          data-1p-ignore="true"
          data-bwignore="true"
          data-form-type="other"
          data-lpignore="true"
          name={name}
          tabIndex={-1}
          type="text"
        />
      ))}
    </form>
  );
}
