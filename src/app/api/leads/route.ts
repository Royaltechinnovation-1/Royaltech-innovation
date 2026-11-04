import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Lead webhook is not configured." },
      { status: 500 },
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  const service = String(body.service || "").trim();
  const source = String(body.source || "website").trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        message,
        source,
      }),
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Could not save your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach the lead service. Please try again." },
      { status: 502 },
    );
  }
}
