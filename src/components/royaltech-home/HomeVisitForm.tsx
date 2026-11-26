"use client";

import { FormEvent } from "react";

/** Opens the visitor's email app with the enquiry filled in. There is no form backend. */
export default function VisitForm({ email, phone }: { email: string; phone: string }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${from}`, `Phone: ${phone}`, "", message].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="glass flex h-full flex-col rounded-[1.4rem] p-5 sm:rounded-[2rem] sm:p-8 md:p-10">
      <p className="text-xs tracking-[0.3em] text-accent uppercase">Connect with us</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={`mailto:${email}`} className="pill pill-accent">
          Email us
        </a>
        <a href={`tel:${phone.replace(/\s/g, "")}`} className="pill pill-ghost">
          {phone}
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-white/70">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-accent"
          />
        </label>
        <label className="block text-sm text-white/70">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-accent"
          />
        </label>
        <label className="block text-sm text-white/70 sm:col-span-2">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-accent"
          />
        </label>
        <label className="block text-sm text-white/70 sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-accent"
          />
        </label>
      </div>

      <div className="mt-6">
        <button type="submit" className="pill pill-accent">
          Send message
        </button>
      </div>
    </form>
  );
}
