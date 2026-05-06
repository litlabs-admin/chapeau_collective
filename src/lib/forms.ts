import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z.string().trim().min(1, "Please add your name."),
  email: z.string().trim().email("Please enter a valid email."),
  company: z.string().trim().optional().default(""),
  monthlyRevenueRange: z
    .string()
    .trim()
    .min(1, "Please select a monthly revenue range."),
  brief: z.string().trim().optional().default(""),
  website: z.string().trim().optional().default(""),
  sourcePath: z.string().trim().optional().default("/")
});

export const newsletterFormSchema = z.object({
  email: z.string().trim().email("Please enter a valid email."),
  website: z.string().trim().optional().default(""),
  sourcePath: z.string().trim().optional().default("/")
});

const buildHeaders = () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json"
  };

  if (process.env.FORM_WEBHOOK_AUTH_HEADER && process.env.FORM_WEBHOOK_AUTH_TOKEN) {
    headers[process.env.FORM_WEBHOOK_AUTH_HEADER] =
      process.env.FORM_WEBHOOK_AUTH_TOKEN;
  }

  return headers;
};

export async function forwardFormSubmission(
  webhookUrl: string | undefined,
  payload: Record<string, string>
) {
  if (!webhookUrl) {
    throw new Error("Missing webhook URL.");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify(payload),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}.`);
  }

  return response;
}
