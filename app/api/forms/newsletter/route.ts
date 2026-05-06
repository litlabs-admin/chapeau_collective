import { NextResponse } from "next/server";
import { createAirtableRecord, newsletterFormSchema } from "@/lib/forms";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = newsletterFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message:
          parsed.error.issues[0]?.message ?? "Please enter a valid email."
      },
      { status: 400 }
    );
  }

  const { website, ...submission } = parsed.data;

  if (website) {
    return NextResponse.json({ message: "Thanks for signing up." });
  }

  try {
    await createAirtableRecord(process.env.AIRTABLE_NEWSLETTER_TABLE_NAME, {
      Email: submission.email,
      "Source Path": submission.sourcePath
    });

    return NextResponse.json({ message: "Thanks for signing up." });
  } catch {
    return NextResponse.json(
      { message: "We couldn't submit the form right now. Please try again." },
      { status: 500 }
    );
  }
}
