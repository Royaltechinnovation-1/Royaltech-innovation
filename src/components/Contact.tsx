"use client";

import { FormEvent, useState } from "react";

const address = {
  title: "CP67 Mall",
  lines: [
    "Site No. 252, International Airport Road",
    "Sector 67, Sahibzada Ajit Singh Nagar",
    "Mohali, Punjab 160062",
  ],
  mapSrc:
    "https://maps.google.com/maps?q=CP67%20Mall%2C%20Site%20No.%20252%2C%20International%20Airport%20Road%2C%20Sector%2067%2C%20Mohali%2C%20Punjab%20160062&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=CP67+Mall+Site+No.+252+International+Airport+Road+Sector+67+Mohali+Punjab+160062",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-copy">
        <p className="contact-label">Contact Us</p>
        <h2>Request a Quote</h2>
        <p className="contact-intro">Tell us about your project.</p>
        <p className="contact-text">
          Share a few details and we will help you find the right solution for
          your business.
        </p>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label className="contact-field">
            <span>Name *</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
            />
          </label>

          <label className="contact-field">
            <span>Email *</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
            />
          </label>

          <label className="contact-field">
            <span>Phone number *</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              pattern="[0-9+\-\s()]{7,20}"
              placeholder="+91 98765 43210"
            />
          </label>

          <label className="contact-field">
            <span>Message *</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are you looking to build?"
            />
          </label>

          <button className="contact-submit" type="submit">
            Send message
          </button>

          {submitted ? (
            <p className="contact-success" role="status">
              Thanks — we received your message and will get back to you soon.
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

        <aside className="contact-pin">
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
        </aside>
      </div>
    </section>
  );
}
