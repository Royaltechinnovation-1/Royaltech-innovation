"use client";

import { OpenFormButton, useFormModal } from "@/components/FormModal";
import { submitLead } from "@/lib/submitLead";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function AboutConsult() {
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
    const name = `${String(data.get("firstName") || "").trim()} ${String(data.get("lastName") || "").trim()}`.trim();

    setSending(true);
    setError("");

    try {
      await submitLead({
        name,
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        message: String(data.get("project") || ""),
        source: "about-consultation",
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
    <div className="ax">
      <section className="ax-panel" aria-label="Book a consultation">
        <div className="ax-inner">
          <div className="ax-heading">
            <p>Let&apos;s bring your ideas to life!</p>
            <h2>Let&apos;s Create, Innovate, and Lead!</h2>
            <p className="ax-lead">
              Every great project starts with a simple conversation. Let&apos;s
              bring your ideas to life! Your next big success starts here—let&apos;s
              talk! Simply drop us a message, and our experts will reach out to
              you shortly.
            </p>
          </div>

          <div className="ax-grid">
            <form className="ax-form" onSubmit={onSubmit} noValidate>
              <div className="ax-fields">
                <label>
                  First name
                  <span className="ax-field">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <circle cx="12" cy="8" r="3.1" />
                      <path d="M6.2 19.2c1.2-2.6 3.2-3.8 5.8-3.8s4.6 1.2 5.8 3.8" />
                    </svg>
                    <input name="firstName" type="text" autoComplete="given-name" placeholder="e.g. John " required />
                  </span>
                </label>
                <label>
                  Last name
                  <span className="ax-field">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <circle cx="12" cy="8" r="3.1" />
                      <path d="M6.2 19.2c1.2-2.6 3.2-3.8 5.8-3.8s4.6 1.2 5.8 3.8" />
                    </svg>
                    <input name="lastName" type="text" autoComplete="family-name" placeholder="e.g. Doe " required />
                  </span>
                </label>
                <label>
                  Work email
                  <span className="ax-field">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                    <input name="email" type="email" autoComplete="email" placeholder="e.g. john@gmail.com" required />
                  </span>
                </label>
                <label>
                  Contact number
                  <span className="ax-field">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <path d="M8.2 4.8h2.2l1.2 3-1.6 1a12 12 0 0 0 5.2 5.2l1-1.6 3 1.2v2.2c0 .8-.7 1.5-1.5 1.4A14.5 14.5 0 0 1 6.8 6.3c-.1-.8.6-1.5 1.4-1.5Z" />
                    </svg>
                    <input name="phone" type="tel" autoComplete="tel"  placeholder="e.g. 9876543210" required />
                  </span>
                </label>
                <label className="ax-wide">
                  About project
                  <span className="ax-field ax-field-area">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <path d="M7 3.5h7.2L19 8.2V20.5H7V3.5Z" />
                      <path d="M14 3.8V8.4h4.4M9.2 12.2h6.2M9.2 16h4.4" />
                    </svg>
                    <textarea name="project" rows={3} placeholder="e.g. Write your message here..." required />
                  </span>
                </label>
              </div>

              <div className="ax-notes">
                <label className="ax-check">
                  <input type="checkbox" name="sms" />
                  <span>
                    By checking this box, you agree to receive SMS notifications
                    from RoyalTech. Reply STOP anytime to unsubscribe.
                  </span>
                </label>
                <label className="ax-check">
                  <input type="checkbox" name="terms" required />
                  <span>
                    By checking Submit, you confirm your agreement to
                    RoyalTech&apos;s{" "}
                    <Link href="/terms">Terms of Use</Link> and{" "}
                    <Link href="/privacy">Privacy Policy</Link>.
                  </span>
                </label>
                <p className="ax-privacy">
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <rect x="5" y="10.5" width="14" height="9" rx="1.6" />
                      <path d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5" />
                    </svg>
                  </span>
                  <span>
                    Your Privacy Matters – We value your trust and are committed to
                    protecting your personal information. Your data, including phone
                    numbers and SMS consent, will never be shared, sold, or traded
                    with third parties. Rest assured, your information remains 100%
                    secure with us.
                  </span>
                </p>
              </div>

              {error ? <p className="ax-status ax-status-error">{error}</p> : null}

              <button className="ax-submit" type="submit" disabled={sending}>
                {sending ? "Sending…" : "Book consultation"}{" "}
                <span aria-hidden="true">→</span>
              </button>
            </form>

            <aside className="ax-info">
              <p className="ax-label">
                <span className="ax-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 3.2 19 6v5.2c0 4-2.7 6.9-7 8.6-4.3-1.7-7-4.6-7-8.6V6l7-2.8Z" />
                    <path d="M9.2 12.1 11 13.9 14.8 10" />
                  </svg>
                </span>
                Authorized Representative &amp; Technical Head
              </p>
              <h3>RoyalTech Innovation</h3>
              <ul className="ax-people">
                <li>
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <circle cx="12" cy="8" r="3.1" />
                      <path d="M6.2 19.2c1.2-2.6 3.2-3.8 5.8-3.8s4.6 1.2 5.8 3.8" />
                    </svg>
                  </span>
                  Founder &amp; CEO
                </li>
                <li>
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <circle cx="12" cy="8" r="3.1" />
                      <path d="M6.2 19.2c1.2-2.6 3.2-3.8 5.8-3.8s4.6 1.2 5.8 3.8" />
                    </svg>
                  </span>
                  Shreya
                </li>
                <li>
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <circle cx="12" cy="8" r="3.1" />
                      <path d="M6.2 19.2c1.2-2.6 3.2-3.8 5.8-3.8s4.6 1.2 5.8 3.8" />
                    </svg>
                  </span>
                  Mayank Royal
                </li>
              </ul>

              <ul className="ax-steps">
                <li>
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v4.2l2.6 1.6" />
                    </svg>
                  </span>
                  <strong>We&apos;ll respond within 24 hours.</strong>
                </li>
                <li>
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M8 6h11M8 12h11M8 18h11" />
                      <path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" />
                    </svg>
                  </span>
                  <strong>Next Steps</strong>
                </li>
                <li>
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M7 3.5h7.2L19 8.2V20.5H7V3.5Z" />
                      <path d="M14 3.8V8.4h4.4M9.2 12.2h6.2M9.2 16h4.4" />
                    </svg>
                  </span>
                  Our UX Expert will collect project details and create a brief.
                </li>
                <li>
                  <span className="ax-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M7 4.5h10v15l-5-2.4-5 2.4v-15Z" />
                      <path d="M9.5 9h5M9.5 12.2h5" />
                    </svg>
                  </span>
                  We&apos;ll prepare estimates and share a project proposal.
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="ax-session" aria-label="Book a session">
        <div className="ax-session-card">
          <div className="ax-session-copy-col">
            <p className="ax-session-label">Free Consultation</p>
            <h2>Book a Session with Our Experts!</h2>
            <p className="ax-session-copy">
              Have a project in mind? Let&apos;s discuss your goals and find the
              right solution together.
            </p>
            <OpenFormButton
              className="ax-session-btn"
              title="Book a Session"
              source="about-book-session"
            >
              Book a Session <span aria-hidden="true">→</span>
            </OpenFormButton>
          </div>

          <ul className="ax-session-benefits">
            <li>
              <span className="ax-session-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 4.5h8a2 2 0 0 1 2 2V19l-3-1.6L12 19l-3-1.6L6 19V6.5a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path d="M9.5 9h5M9.5 12h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <strong>Free Consultation</strong>
                <span>Discuss your ideas with our experts.</span>
              </div>
            </li>
            <li>
              <span className="ax-session-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 16.5 10 11l3.2 3.2L19 8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15.5 8H19v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <strong>Tailored Solutions</strong>
                <span>Get a plan that fits your business.</span>
              </div>
            </li>
            <li>
              <span className="ax-session-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="4.5" y="6" width="15" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 4.5v3M16 4.5v3M4.5 10.5h15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="m9.2 14.2 1.7 1.7 3.6-3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <strong>No Commitment</strong>
                <span>Just honest advice and guidance.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
