"use client";

import { OpenFormButton, useFormModal } from "@/components/FormModal";
import { FormEvent } from "react";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61596431871796",
    label: "Facebook",
    className: "is-facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/royaltechinnovat/",
    label: "Instagram",
    className: "is-instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/company/143923623/",
    label: "LinkedIn",
    className: "is-linkedin",
    Icon: LinkedInIcon,
  },
] as const;

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.414c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.765v2.316h3.59l-.467 3.696h-3.123V24h6.117C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

export default function ConnectWithUs() {
  const { showThanks } = useFormModal();

  const onSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
    showThanks();
  };

  return (
    <section className="connect" id="connect">
      <div className="connect-panel connect-social">
        <p className="connect-kicker">Get Social</p>
        <h2>Connect with us</h2>
        <div className="connect-icons">
          {socialLinks.map(({ href, label, className, Icon }) => (
            <a
              key={label}
              className={`connect-social-link ${className}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="connect-panel connect-tips">
        <p className="connect-kicker">Stay updated</p>
        <h2>Get the tips you need in your inbox</h2>
        <form className="connect-form" onSubmit={onSubscribe}>
          <label className="visually-hidden" htmlFor="connect-email">
            Email address
          </label>
          <input
            id="connect-email"
            type="email"
            name="email"
            required
            placeholder="Email address"
            autoComplete="email"
          />
          <button type="submit" aria-label="Subscribe">
            →
          </button>
        </form>
      </div>

      <OpenFormButton
        className="connect-panel connect-quote"
        title="Request a Quote"
        source="home-connect-quote"
      >
        <p className="connect-kicker">Ready to build?</p>
        <h2>
          Request a Quote <span aria-hidden="true">→</span>
        </h2>
      </OpenFormButton>
    </section>
  );
}
