import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm, ContactFormData } from "@/app/api/contact/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limit (per IP)
const rateLimit = new Map<string, number>();
const RATE_LIMIT_TIME = 10000;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";

    // Rate limiting
    const now = Date.now();
    const lastRequest = rateLimit.get(ip);
    if (lastRequest && now - lastRequest < RATE_LIMIT_TIME) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }
    rateLimit.set(ip, now);

    // Parse and validate
    const formData: ContactFormData = await req.json();

    // Honeypot spam protection
    if (formData.company) {
      return NextResponse.json({ success: true });
    }

    // Type-safe server-side validation
    const error = validateContactForm(formData);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Send email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "michaelnathan505@gmail.com",
      subject: "New message from portfolio",
      replyTo: formData.email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}