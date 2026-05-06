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

type AirtableFields = Record<string, string>;

const airtableApiUrl = "https://api.airtable.com/v0";

function getAirtableConfig(tableName: string | undefined) {
  const token = process.env.AIRTABLE_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!token) {
    throw new Error("Missing AIRTABLE_ACCESS_TOKEN.");
  }

  if (!baseId) {
    throw new Error("Missing AIRTABLE_BASE_ID.");
  }

  if (!tableName) {
    throw new Error("Missing Airtable table name.");
  }

  return { baseId, tableName, token };
}

export async function createAirtableRecord(
  tableName: string | undefined,
  fields: AirtableFields
) {
  const { baseId, tableName: configuredTableName, token } =
    getAirtableConfig(tableName);
  const url = `${airtableApiUrl}/${baseId}/${encodeURIComponent(configuredTableName)}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fields }),
    cache: "no-store"
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `Airtable request failed with status ${response.status}: ${errorBody}`
    );
  }

  return response.json() as Promise<{ id: string }>;
}
