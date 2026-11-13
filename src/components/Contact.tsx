"use client";

import { useFormModal } from "@/components/FormModal";
import { submitLead } from "@/lib/submitLead";
import { useState } from "react";
import type { FormEvent } from "react";

const address = {
  title: "CP67 Mall",
  lines: [
    "Gate No. 5, Imperial Tower, Floor No. 10",
    "International Airport Road",
    "Sector 67, Sahibzada Ajit Singh Nagar, Mohali, Punjab 160062",
  ],
  mapSrc:
    "https://maps.google.com/maps?q=Gate%20No.%205%2C%20Imperial%20Tower%2C%20Floor%20No.%2010%2C%20CP%2067%2C%20International%20Airport%20Road%2C%20Sector%2067%2C%20Mohali%2C%20Punjab%20160062&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Gate+No.+5+Imperial+Tower+Floor+No.+10+CP+67+International+Airport+Road+Sector+67+Mohali+Punjab+160062",
};

export default function Contact() {
  const { showThanks } = useFormModal();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    setSending(true);
    setError("");

    try {
      await submitLead({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        message: String(data.get("message") || ""),
        source: "home-contact",
      });
      form.reset();
      showThanks();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <p className="contact-label">Contact Us</p>
        <h2 id="contact-heading">
          Request a Quote
        </h2>
        <p className="contact-intro">Tell us about your project.</p>
        <p className="contact-text">
          Share a few details and we will help you find the right solution for
          your business.
        </p>

        <address className="contact-business-info">
          <strong>RoyalTech Innovation</strong>
          <a href="tel:+918679016505">+91 86790 16505</a>
          <a href="mailto:info@royaltechinnovation">
            info@royaltechinnovation
          </a>
        </address>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label className="contact-field" htmlFor="contact-name">
            <span>Name *</span>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
            />
          </label>

          <label className="contact-field" htmlFor="contact-email">
            <span>Email *</span>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
            />
          </label>

          <label className="contact-field" htmlFor="contact-phone">
            <span>Phone number *</span>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              pattern="[0-9+\-\s()]{7,20}"
              placeholder="+91 86790 16505"
            />
          </label>

          <label className="contact-field" htmlFor="contact-message">
            <span>Message *</span>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="What are you looking to build?"
            />
          </label>

          <button className="contact-submit" type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>

          {error ? (
            <p className="contact-error" id="contact-error" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      </div>

      <div className="contact-media">
        <iframe
          className="contact-map"
          title="CP67 Mall exact location map"
          src={address.mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <address className="contact-pin">
          <span className="contact-pin-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path
                d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
                fill="currentColor"
              />
              <circle cx="12" cy="10" r="2.5" fill="#fff" />
            </svg>
          </span>
          <div className="contact-pin-body">
            <p className="contact-pin-kicker">Visit us</p>
            <h3>{address.title}</h3>
            <p>
              {address.lines[0]}
              <br />
              {address.lines[1]}
              <br />
              {address.lines[2]}
            </p>
            <a
              className="contact-directions"
              href={address.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}
