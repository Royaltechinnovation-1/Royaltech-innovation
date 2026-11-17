
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d606.5963093878761!2d76.72210642857482!3d30.678262440861037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9a2b8d4bbd1%3A0xff2f727b28bc64a0!2sRoyal%20Tech%20Innovation!5e0!3m2!1sen!2sin!4v1794823199475!5m2!1sen!2sin",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Gate+No.+5+Imperial+Tower+Floor+No.+10+CP+67+International+Airport+Road+Sector+67+Mohali+Punjab+160062",
};

export default function Contact() {
  const { showThanks } = useFormModal();

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const errors: Record<string, string> = {};

    // Name validation
    if (!name) {
      errors.name = "Please enter your name.";
    } else if (name.length < 2) {
      errors.name = "Name must contain at least 2 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

    if (!phone) {
      errors.phone = "Please enter your phone number.";
    } else if (
      !phoneRegex.test(phone) ||
      phone.replace(/\D/g, "").length < 7
    ) {
      errors.phone = "Please enter a valid phone number.";
    }

    // Message validation
    if (!message) {
      errors.message = "Please enter your message.";
    } else if (message.length < 10) {
      errors.message = "Message must contain at least 10 characters.";
    }

    setFieldErrors(errors);
    setError("");

    // Stop form submission if validation fails
    if (Object.keys(errors).length > 0) {
      return;
    }

    setSending(true);

    try {
      await submitLead({
        name,
        email,
        phone,
        message,
        source: "home-contact",
      });

      form.reset();
      setFieldErrors({});
      showThanks();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
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
          <a href="mailto:info@royaltechinnovation.co.in">
            info@royaltechinnovation.co.in
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
              maxLength={80}
              placeholder="Your full name"
              aria-invalid={!!fieldErrors.name}
            />
            {fieldErrors.name && (
              <small className="contact-error">
                {fieldErrors.name}
              </small>
            )}
          </label>

          <label className="contact-field" htmlFor="contact-email">
            <span>Email *</span>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@company.com"
              aria-invalid={!!fieldErrors.email}
            />
            {fieldErrors.email && (
              <small className="contact-error">
                {fieldErrors.email}
              </small>
            )}
          </label>

          <label className="contact-field" htmlFor="contact-phone">
            <span>Phone number *</span>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              maxLength={20}
              pattern="[0-9+\-\s()]{7,20}"
              placeholder="+91 86790 16505"
              aria-invalid={!!fieldErrors.phone}
            />
            {fieldErrors.phone && (
              <small className="contact-error">
                {fieldErrors.phone}
              </small>
            )}
          </label>

          <label className="contact-field" htmlFor="contact-message">
            <span>Message *</span>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              maxLength={2000}
              placeholder="What are you looking to build?"
              aria-invalid={!!fieldErrors.message}
            />
            {fieldErrors.message && (
              <small className="contact-error">
                {fieldErrors.message}
              </small>
            )}
          </label>

          <button
            className="contact-submit"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send message"}
          </button>

          {error && (
            <p
              className="contact-error"
              id="contact-error"
              role="alert"
            >
              {error}
            </p>
          )}
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
          <span
            className="contact-pin-mark"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
            >
              <path
                d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
                fill="currentColor"
              />
              <circle
                cx="12"
                cy="10"
                r="2.5"
                fill="#fff"
              />
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
