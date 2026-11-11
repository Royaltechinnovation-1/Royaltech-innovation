"use client";

import { OpenFormButton, useFormModal } from "@/components/FormModal";
import { submitLead } from "@/lib/submitLead";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const address = [
  "Gate No. 5, CP 67, Imperial Tower",
  "Chandigarh Int'l Airport Rd, behind CP67 Mall",
  "Sahibzada Ajit Singh Nagar, Punjab 160062",
];

const mapQuery =
  "Gate No. 5, Imperial Tower, CP 67, Chandigarh International Airport Road, behind CP67 Mall, Sahibzada Ajit Singh Nagar, Punjab 160062";
const mapSrc =
  "https://maps.google.com/maps?q=30.678057,76.723018&z=17&output=embed";
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 3.5h3l1.2 3-2 1.2a12 12 0 0 0 5.1 5.1l1.2-2 3 1.2v3A2 2 0 0 1 17.5 17 14.5 14.5 0 0 1 7 6.5 2 2 0 0 1 8 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPageContent() {
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
    const first = String(data.get("firstName") || "").trim();
    const last = String(data.get("lastName") || "").trim();
    setSending(true);
    setError("");

    try {
      await submitLead({
        name: `${first} ${last}`.trim(),
        email: String(data.get("workEmail") || ""),
        phone: String(data.get("contactNumber") || ""),
        message: String(data.get("aboutProject") || ""),
        source: "contact-page",
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
    <div className="cu">
      <section className="cu-hero" aria-label="Contact RoyalTech Innovation">
        <div className="cu-hero-inner">
          <p className="cu-badge">Contact Us</p>
          <h1>Let&apos;s talk about what you want to build</h1>
          <p>
            Tell us your goals and we will help you find a clear, practical next step.
          </p>
          <OpenFormButton
            className="cu-hero-btn"
            title="Send a message"
            source="contact-hero"
          >
            Send a message <span aria-hidden="true">→</span>
          </OpenFormButton>
        </div>
      </section>

      <section className="cu-wrap" id="contact" aria-label="Contact form">
        <div className="cu-layout">
          <aside className="cu-info">
            <div>
              <h2 className="cu-title">Our friendly team is here to help</h2>
              <a className="cu-mail" href="mailto:sales@royaltechinnovation.co.in">
                <MailIcon />
                <span>sales@royaltechinnovation.co.in</span>
              </a>
              <div className="cu-brand">
                <Image
                  src="/royaltech-logo.png"
                  alt="RoyalTech Innovation"
                  width={180}
                  height={56}
                  className="cu-brand-logo"
                />
              </div>
            </div>
            <div className="cu-blocks">
              <div>
                <h2>Come say hello to us at our HQs</h2>
                <p className="cu-place">
                  <strong>RoyalTech Innovation</strong>
                  Gate No. 5, CP 67, Imperial Tower
                  <br />
                  Behind CP67 Mall, Chandigarh Int&apos;l Airport Rd
                  <br />
                  Sahibzada Ajit Singh Nagar, Punjab 160062
                </p>
                <div className="cu-row">
                  <PinIcon />
                  <span>
                    Gate No. 5, Imperial Tower
                    <br />
                    Chandigarh Int&apos;l Airport Rd, behind CP67 Mall
                    <br />
                    Sahibzada Ajit Singh Nagar, Punjab 160062
                  </span>
                </div>
              </div>
              <div>
                <h2>Call us any time from Mon - Fri</h2>
                <div className="cu-row">
                  <PhoneIcon />
                  <div>
                    <p>We are available Monday to Friday, 10:00 am to 6:30 pm. Call or WhatsApp and we will confirm a time before you travel.</p>
                    <a href="tel:+918570871522">+91 85708 71522</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <form className="cu-form" onSubmit={onSubmit}>
            <span className="cu-pill">Connect with us</span>
            <h2>Got Ideas? We’ve Got The Skills. Let’s Team Up!</h2>
            <p className="cu-lead">
              Share a short brief — what you want to build, who it is for, and when you hope to start. We reply with a clear next step, usually within one working day.
            </p>

            <div className="cu-grid">
              <label className="cu-box">
                <span>First Name</span>
                <input id="firstName" name="firstName" autoComplete="given-name" required />
              </label>
              <label className="cu-box">
                <span>Last Name</span>
                <input id="lastName" name="lastName" autoComplete="family-name" required />
              </label>
              <label className="cu-box">
                <span>Work Email</span>
                <input id="workEmail" name="workEmail" type="email" autoComplete="email" required />
              </label>
              <label className="cu-box">
                <span>Contact Number</span>
                <input id="contactNumber" name="contactNumber" type="tel" autoComplete="tel" required />
              </label>
              <label className="cu-box cu-wide">
                <span>About Project</span>
                <textarea id="aboutProject" name="aboutProject" rows={3} required />
              </label>
            </div>

            <div className="cu-notes">
              <label>
                <input type="checkbox" name="smsConsent" />
                <span>
                  By checking this box, you agree to receive SMS notifications from RoyalTech Innovation. Reply “STOP” anytime to unsubscribe.
                </span>
              </label>
              <label>
                <input type="checkbox" name="termsAccepted" required />
                <span>
                  By clicking “Submit,” you confirm your agreement to RoyalTech
                  Innovation’s{" "}
                  <Link href="/terms">Terms of Use</Link> and{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </span>
              </label>
              <p className="cu-privacy">
                Your Privacy Matters – We value your trust and are committed to protecting your personal information. Your data, including phone numbers and SMS consent, will never be shared, sold, or traded with third parties. Rest assured, your information remains 100% secure with us.
              </p>
            </div>

            {error ? (
              <p className="cu-status is-error" role="alert">
                {error}
              </p>
            ) : null}

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Book a free consultation"} <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="cu-map">
            <iframe
              title="Imperial Tower, Gate No. 5, CP 67 map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <aside className="cu-visit">
            <p>Visit us</p>
            <h2>Gate No. 5, Imperial Tower</h2>
            <p className="cu-note">
              The pin marks the CP67 complex on Chandigarh International Airport Road. Imperial Tower is the office building behind CP67 Mall. Enter at Gate No. 5 and come up to RoyalTech Innovation.
            </p>
            <div className="cu-row">
              <PinIcon />
              <span>
                {address[0]}
                <br />
                {address[1]}
                <br />
                {address[2]}
              </span>
            </div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </aside>
        </div>
      </section>

      <section className="cu-book" id="booking" aria-label="Book a session">
        <span>Let&apos;s Work Together</span>
        <h2>Book a Session with Our Experts!</h2>
        <p>
          Have an idea, a website, or a problem you want to solve? Book a first conversation and we will walk through scope, timeline, and a practical way to start. There is no charge for that session.
        </p>
        <Link href="tel:+918570871522">Call now →</Link>
      </section>
    </div>
  );
}
