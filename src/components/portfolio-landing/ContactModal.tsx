"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/portfolio-landing/Icons";
import { getLenis } from "@/lib/portfolio-landing/lenis";
import { validateContact, type ContactErrors, type ContactPayload } from "@/lib/portfolio-landing/contact";
import { site } from "@/lib/portfolio-landing/site";
import { submitLead } from "@/lib/submitLead";
import { inter } from "@/components/portfolio-landing/fonts";

type Status = "idle" | "sending" | "sent" | "error";

const empty: ContactPayload = { name: "", phone: "", email: "", message: "" };

const inputBase =
  "w-full rounded-xl border bg-black/45 px-4 py-3 text-[0.95rem] text-white placeholder:text-white/40 outline-none transition focus:bg-black/60 focus:ring-2";
const inputOk = "border-white/20 focus:border-gold focus:ring-gold/30";
const inputBad = "border-red-400/80 focus:border-red-400 focus:ring-red-400/30";

/**
 * Pop-up contact form. Opens from any element with `data-open-contact`
 * or from `window.dispatchEvent(new Event("contact:open"))`.
 * Name, phone, email and message are all required.
 */
export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<ContactPayload>(empty);
  const [company, setCompany] = useState(""); // honeypot
  const [topic, setTopic] = useState(""); // project the visitor clicked from, if any
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const uid = useId();

  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const sentRef = useRef(false); // true once a message went through; the form resets on next open

  const close = useCallback(() => {
    setOpen(false);
    setServerError("");
  }, []);

  /* ---- open triggers: custom event + any [data-open-contact] element ---- */
  useEffect(() => {
    const show = (project = "") => {
      setTopic(project);
      /* After a successful send, start with a fresh form the next time it is opened. */
      if (sentRef.current) {
        sentRef.current = false;
        setValues(empty);
        setCompany("");
        setErrors({});
        setSubmitted(false);
        setStatus("idle");
      }
      // Once the form has been opened (by the visitor or automatically), do not auto-open it again this visit.
      try {
        sessionStorage.setItem("contact-auto-shown", "1");
      } catch {
        /* storage unavailable: ignore */
      }
      lastFocus.current = document.activeElement as HTMLElement | null;
      window.dispatchEvent(new Event("tour:stop"));
      setOpen(true);
    };
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest("[data-open-contact]");
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      show(el.getAttribute("data-contact-topic") ?? "");
    };
    document.addEventListener("click", onClick, true);
    const onOpen = () => show("");
    window.addEventListener("contact:open", onOpen);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("contact:open", onOpen);
    };
  }, []);

  /* ---- auto-open once when the visitor reaches the end of the page ---- */
  useEffect(() => {
    const KEY = "contact-auto-shown";
    const seen = () => {
      try {
        return sessionStorage.getItem(KEY) === "1";
      } catch {
        return false;
      }
    };
    if (seen()) return;

    let timer: number | undefined;
    const atEnd = () =>
      !!window.__siteReady &&
      window.scrollY > 400 &&
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 160;

    const onScroll = () => {
      if (atEnd()) {
        if (timer !== undefined) return;
        // Stay at the bottom for a moment first, so it does not pop up on a quick fly-by.
        timer = window.setTimeout(() => {
          timer = undefined;
          if (seen() || !atEnd() || document.querySelector('[role="dialog"]')) return;
          window.removeEventListener("scroll", onScroll);
          window.dispatchEvent(new Event("contact:open"));
        }, 1500);
      } else if (timer !== undefined) {
        window.clearTimeout(timer);
        timer = undefined;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  /* ---- scroll lock, focus, Esc + Tab trap while open ---- */
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("input, textarea, button")?.focus();
    }, 60);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      lenis?.start();
      lastFocus.current?.focus?.();
    };
  }, [open, close]);

  const setField = (key: keyof ContactPayload, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    // After the first submit attempt, re-check live so messages disappear as soon as they are fixed.
    if (submitted) setErrors(validateContact(next).errors);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setSubmitted(true);
    setServerError("");

    const result = validateContact(values);
    setErrors(result.errors);
    if (!result.ok) {
      const firstBad = (["name", "phone", "email", "message"] as const).find((k) => result.errors[k]);
      if (firstBad) dialogRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }

    /* Honeypot: real visitors never fill this hidden field. Pretend success to bots. */
    if (company.trim() !== "") {
      sentRef.current = true;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      /* Saved to the dashboard and forwarded to the Google Sheet (LEADS_WEBHOOK_URL) by /api/leads. */
      await submitLead({
        ...result.clean,
        service: topic,
        source: "portfolio-landing",
      });
      sentRef.current = true;
      setStatus("sent");
    } catch (err) {
      const offline = err instanceof TypeError; // fetch() itself failed
      setServerError(
        !offline && err instanceof Error && err.message
          ? err.message
          : "Network problem. Please check your connection and try again.",
      );
      setStatus("error");
    }
  };

  if (!open || typeof document === "undefined") return null;

  const field = (
    key: keyof ContactPayload,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement>,
  ) => {
    const id = `${uid}-${key}`;
    const err = errors[key];
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-[0.68rem] tracking-[0.2em] text-white/80 uppercase">
          {label} <span className="text-gold" aria-hidden>*</span>
        </label>
        <input
          id={id}
          name={key}
          value={values[key]}
          onChange={(e) => setField(key, e.target.value)}
          required
          aria-required="true"
          aria-invalid={err ? true : undefined}
          aria-describedby={err ? `${id}-err` : undefined}
          className={`${inputBase} ${err ? inputBad : inputOk}`}
          {...props}
        />
        {err && (
          <p id={`${id}-err`} role="alert" className="mt-1.5 text-[0.78rem] text-red-300">
            {err}
          </p>
        )}
      </div>
    );
  };

  const msgId = `${uid}-message`;
  const titleId = `${uid}-title`;

  /* The pop-up is portalled to <body>, so it carries its own `.lp` scope for the landing styles. */
  return createPortal(
    <div className={`lp ${inter.variable}`}>
    <div
      className="contact-fade fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-lenis-prevent
        className="contact-pop relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#050a14]/95 p-6 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:p-9"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        <button
          type="button"
          onClick={close}
          aria-label="Close contact form"
          className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-gold hover:text-gold"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/50 bg-gold/10 text-gold">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
            <h2 id={titleId} className="display mt-6 text-3xl text-white">
              Message sent
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed text-white/85">
              Thank you{values.name ? `, ${values.name.split(" ")[0]}` : ""}. We have received your message and will get
              back to you at {values.email}.
            </p>
            <button type="button" onClick={close} className="lp-btn lp-btn-gold mt-8">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <p className="eyebrow">Contact</p>
            {topic && (
              <p className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[0.72rem] text-gold-soft">
                <span className="text-white/70">Enquiring about</span>
                <span className="truncate font-medium text-white">{topic}</span>
              </p>
            )}
            <h2 id={titleId} className="display mt-4 pr-10 text-3xl text-white md:text-4xl">
              Let’s talk about your project
            </h2>
            <p className="mt-3 text-[0.9rem] text-white/80">
              All fields are required <span className="text-gold">*</span>
            </p>

            <div className="mt-7 grid gap-5">
              {field("name", "Full name", { type: "text", autoComplete: "name", placeholder: "Your name", maxLength: 80 })}
              <div className="grid gap-5 sm:grid-cols-2">
                {field("phone", "Phone number", {
                  type: "tel",
                  inputMode: "tel",
                  autoComplete: "tel",
                  placeholder: "+91 98765 43210",
                  maxLength: 25,
                })}
                {field("email", "Email", {
                  type: "email",
                  autoComplete: "email",
                  placeholder: "you@company.com",
                  maxLength: 120,
                })}
              </div>

              <div>
                <label htmlFor={msgId} className="mb-2 block text-[0.68rem] tracking-[0.2em] text-white/80 uppercase">
                  Message <span className="text-gold" aria-hidden>*</span>
                </label>
                <textarea
                  id={msgId}
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => setField("message", e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? `${msgId}-err` : undefined}
                  maxLength={2000}
                  placeholder="Tell us what you want to build…"
                  className={`${inputBase} resize-y ${errors.message ? inputBad : inputOk}`}
                />
                {errors.message && (
                  <p id={`${msgId}-err`} role="alert" className="mt-1.5 text-[0.78rem] text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot: hidden from people, bots tend to fill it */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </label>
              </div>
            </div>

            {status === "error" && (
              <p role="alert" className="mt-5 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-[0.85rem] text-red-200">
                {serverError}{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-white">
                  {site.email}
                </a>
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="lp-btn lp-btn-gold mt-7 w-full justify-center disabled:cursor-wait disabled:opacity-70">
              {status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  Send message <Icon name="arrow" className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
    </div>,
    document.body,
  );
}
