import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { cleanTopic, validateContact } from "@/lib/contact";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Very small in-memory throttle: 5 messages / 10 minutes per IP (per server instance). */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  /* Honeypot: real visitors never fill this hidden field. Pretend success to bots. */
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { ok, errors, clean } = validateContact(body);
  const topic = cleanTopic(body.topic);
  if (!ok) return NextResponse.json({ error: "Please check the highlighted fields.", errors }, { status: 422 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    if (process.env.NODE_ENV !== "production") {
      // Local development only: show the enquiry in the terminal so the form can be tested.
      console.log("[contact] SMTP is not configured; enquiry (dev only, NOT emailed):", { ...clean, topic });
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[contact] SMTP_HOST / SMTP_USER / SMTP_PASS are not set; message was not delivered.");
    return NextResponse.json(
      { error: "Our message service is not available right now. Please email us directly." },
      { status: 503 },
    );
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.CONTACT_FROM || user;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${site.name} website" <${from}>`,
      to,
      replyTo: `"${clean.name}" <${clean.email}>`,
      subject: topic ? `New enquiry about ${topic} from ${clean.name}` : `New website enquiry from ${clean.name}`,
      text: `${topic ? `Project: ${topic}\n` : ""}Name: ${clean.name}\nPhone: ${clean.phone}\nEmail: ${clean.email}\n\nMessage:\n${clean.message}\n`,
      html: `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">New website enquiry</h2>
        <p>${topic ? `<strong>Project:</strong> ${esc(topic)}<br/>` : ""}<strong>Name:</strong> ${esc(clean.name)}<br/>
        <strong>Phone:</strong> ${esc(clean.phone)}<br/>
        <strong>Email:</strong> ${esc(clean.email)}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${esc(clean.message)}</p>
      </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] failed to send email:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again or email us directly." },
      { status: 502 },
    );
  }
}
