"use client";

import PageHero from "@/components/PageHero";
import { submitLead } from "@/lib/submitLead";
import Link from "next/link";
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

const channels = [
  {
    title: "Email",
    text: "Share project details, documents, or questions anytime. We review enquiries carefully and respond with next steps.",
    actionLabel: "sales@royaltechinnovation.co.in",
    href: "mailto:sales@royaltechinnovation.co.in",
  },
  {
    title: "Phone / WhatsApp",
    text: "Prefer a quick conversation? Call or message us to discuss scope, timelines, and the best starting point for your project.",
    actionLabel: "+91 85708 71522",
    href: "tel:+918570871522",
  },
  {
    title: "Visit the office",
    text: "Meet us at CP67 Mall, Mohali. Bring your brief, goals, and questions—we can map a practical path together.",
    actionLabel: "Get directions",
    href: address.mapsLink,
    external: true,
  },
];

const reasons = [
  {
    title: "Clear recommendations",
    text: "We help you choose the right mix of design, development, marketing, or consulting—based on goals, not guesswork.",
  },
  {
    title: "Transparent next steps",
    text: "After your enquiry, you get a practical response: what we understood, what we recommend, and how engagement could work.",
  },
  {
    title: "One accountable partner",
    text: "From first conversation to delivery, you work with a team focused on outcomes your business can measure.",
  },
];

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(false);

    try {
      await submitLead({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        service: String(data.get("service") || ""),
        message: String(data.get("message") || ""),
        source: "contact-page",
      });
      setSubmitted(true);
      form.reset();
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
    <div className="ap">
      <PageHero
        kicker="Contact Us"
        title="Let's talk about what you want to build"
        lead="Whether you need a website, custom software, a mobile app, digital marketing, design support, or IT consulting—tell us your goals and we will help you find a clear, practical next step."
        image="/hero-contact-v2.jpg"
        imageAlt="Welcoming RoyalTech Innovation reception space"
        primaryHref="mailto:sales@royaltechinnovation.co.in"
        primaryLabel="Email sales"
        secondaryHref="tel:+918570871522"
        secondaryLabel="Call now"
      />

      <section className="ap-section">
        <div className="ap-wrap">
          <div className="ap-section-head">
            <p className="ap-kicker">Ways to reach us</p>
            <h2>Choose the channel that works best for you</h2>
            <p className="ap-section-intro">
              Send a detailed brief by email, speak with us directly, or visit
              our Mohali office. We respond with clarity—what we heard, what we
              recommend, and how we can help.
            </p>
          </div>
          <div className="ap-goals">
            {channels.map((channel, index) => (
              <article key={channel.title} className="ap-goal">
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
                <a
                  className="ap-service-link"
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {channel.actionLabel} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-section-alt">
        <div className="ap-wrap ap-contact-grid">
          <div className="ap-copy">
            <p className="ap-kicker">Request a quote</p>
            <h2>Tell us about your project</h2>
            <p>
              Share a few details—what you want to achieve, your timeline, and
              any constraints. The more context you provide, the more useful our
              first response will be.
            </p>
            <p>
              Looking for UI/UX, web or app development, custom software,
              marketing, or consulting? Mention that too. We will help you
              define scope without overcomplicating the start.
            </p>

            <form className="ap-form" onSubmit={onSubmit} noValidate>
              <label className="ap-field">
                <span>Name *</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                />
              </label>

              <label className="ap-field">
                <span>Email *</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                />
              </label>

              <label className="ap-field">
                <span>Phone number *</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  pattern="[0-9+\-\s()]{7,20}"
                  placeholder="+91 85708 71522"
                />
              </label>

              <label className="ap-field">
                <span>Service interest</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service (optional)
                  </option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Software Development</option>
                  <option>Digital Marketing</option>
                  <option>IT Consulting</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label className="ap-field">
                <span>Message *</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="What are you looking to build? Goals, timeline, and any useful context..."
                />
              </label>

              <button
                className="btn btn-soft ap-form-submit"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send message"}
              </button>

              {submitted ? (
                <p className="ap-form-success" role="status">
                  Thanks—we received your message and will get back to you soon
                  with clear next steps.
                </p>
              ) : null}

              {error ? (
                <p className="ap-form-success" role="alert" style={{ color: "#b42318" }}>
                  {error}
                </p>
              ) : null}
            </form>
          </div>

          <aside className="ap-contact-side">
            <div className="ap-contact-map-wrap">
              <iframe
                className="ap-contact-map"
                title="CP67 Mall exact location map"
                src={address.mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="ap-panel ap-contact-card">
              <p className="ap-panel-line">Visit us</p>
              <h3>{address.title}</h3>
              <p>
                {address.lines[0]}
                <br />
                {address.lines[1]}
                <br />
                {address.lines[2]}
              </p>
              <a
                className="ap-service-link"
                href={address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps <span aria-hidden="true">→</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="ap-section">
        <div className="ap-wrap">
          <div className="ap-section-head">
            <p className="ap-kicker">What happens next</p>
            <h2>A clear response—not a generic reply</h2>
            <p className="ap-section-intro">
              When you contact RoyalTech Innovation, we focus on understanding
              your goal first, then recommending a practical path forward.
            </p>
          </div>
          <div className="ap-goals">
            {reasons.map((item, index) => (
              <article key={item.title} className="ap-goal">
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-cta">
        <div className="ap-wrap ap-cta-inner">
          <h2>Prefer to explore before you write?</h2>
          <p>
            Learn more about how we work, or review the services we deliver—
            then come back with a clearer brief when you are ready.
          </p>
          <div className="ap-cta-actions">
            <Link className="btn btn-soft" href="/services">
              View services
            </Link>
            <Link className="ap-link-btn" href="/about">
              About RoyalTech
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
