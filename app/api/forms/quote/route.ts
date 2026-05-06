import { NextResponse } from "next/server";
import { forwardFormSubmission, quoteFormSchema } from "@/lib/forms";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = quoteFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message:
          parsed.error.issues[0]?.message ?? "Please complete all required fields."
      },
      { status: 400 }
    );
  }

  const { website, ...submission } = parsed.data;

  if (website) {
    return NextResponse.json({ message: "We'll reach out shortly." });
  }

  try {
    await forwardFormSubmission(process.env.QUOTE_FORM_WEBHOOK_URL, {
      ...submission,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json({ message: "We'll reach out shortly." });
  } catch {
    return NextResponse.json(
      { message: "We couldn't submit the form right now. Please try again." },
      { status: 500 }
    );
  }
}
