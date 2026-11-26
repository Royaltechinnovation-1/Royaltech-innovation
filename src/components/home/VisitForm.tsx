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
    <form onSubmit={onSubmit} className="glass tw:flex tw:h-full tw:flex-col tw:rounded-[1.4rem] tw:p-5 tw:sm:rounded-[2rem] tw:sm:p-8 tw:md:p-10">
      <p className="tw:text-xs tw:tracking-[0.3em] tw:text-accent tw:uppercase">Connect with us</p>
      <div className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-3">
        <a href={`mailto:${email}`} className="pill pill-accent">
          Email us
        </a>
        <a href={`tel:${phone.replace(/\s/g, "")}`} className="pill pill-ghost">
          {phone}
        </a>
      </div>

      <div className="tw:mt-8 tw:grid tw:gap-4 tw:sm:grid-cols-2">
        <label className="tw:block tw:text-sm tw:text-white/70">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="tw:mt-2 tw:w-full tw:rounded-2xl tw:border tw:border-white/15 tw:bg-white/5 tw:px-4 tw:py-3 tw:text-base tw:text-white tw:outline-none tw:focus:border-accent"
          />
        </label>
        <label className="tw:block tw:text-sm tw:text-white/70">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="tw:mt-2 tw:w-full tw:rounded-2xl tw:border tw:border-white/15 tw:bg-white/5 tw:px-4 tw:py-3 tw:text-base tw:text-white tw:outline-none tw:focus:border-accent"
          />
        </label>
        <label className="tw:block tw:text-sm tw:text-white/70 tw:sm:col-span-2">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="tw:mt-2 tw:w-full tw:rounded-2xl tw:border tw:border-white/15 tw:bg-white/5 tw:px-4 tw:py-3 tw:text-base tw:text-white tw:outline-none tw:focus:border-accent"
          />
        </label>
        <label className="tw:block tw:text-sm tw:text-white/70 tw:sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="tw:mt-2 tw:w-full tw:resize-y tw:rounded-2xl tw:border tw:border-white/15 tw:bg-white/5 tw:px-4 tw:py-3 tw:text-base tw:text-white tw:outline-none tw:focus:border-accent"
          />
        </label>
      </div>

      <div className="tw:mt-6">
        <button type="submit" className="pill pill-accent">
          Send message
        </button>
      </div>
    </form>
  );
}
