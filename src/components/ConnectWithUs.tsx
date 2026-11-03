"use client";

import { socialLinks } from "@/components/SocialIcons";
import { FormEvent, useState } from "react";

export default function ConnectWithUs() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubscribed(true);
    form.reset();
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
              <Icon size={24} />
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
        {subscribed ? (
          <p className="connect-note" role="status">
            Thanks — you are on the list.
          </p>
        ) : null}
      </div>

      <a className="connect-panel connect-quote" href="#contact">
        <p className="connect-kicker">Ready to build?</p>
        <h2>
          Request a Quote <span aria-hidden="true">→</span>
        </h2>
      </a>
    </section>
  );
}
