import { NextResponse } from "next/server";
import { createLead } from "@/lib/dashboard/store";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
};

export async function POST(request: Request) {
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

  // Always store for Sales + Development dashboards.
  let leadId: string | null = null;
  try {
    const lead = await createLead({
      name,
      email,
      phone,
      service,
      message,
      source,
    });
    leadId = lead.id;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not save your message. Please try again." },
      { status: 500 },
    );
  }

  // Keep Google Sheets / Apps Script webhook as optional sync.
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
          source,
          leadId,
        }),
        redirect: "follow",
      });
    } catch {
      // Dashboard store already saved the lead.
    }
  }

  return NextResponse.json({ ok: true, id: leadId });
}
