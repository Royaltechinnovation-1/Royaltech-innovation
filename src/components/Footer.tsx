import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#services", label: "Web Development" },
  { href: "#services", label: "Software Development" },
  { href: "#services", label: "Mobile Apps" },
  { href: "#services", label: "Marketing" },
  { href: "#services", label: "IT Consulting" },
  { href: "#services", label: "Design Solutions" },
];

function Icon({
  children,
  size = 16,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <svg
      className="footer-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  mail: (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  ),
  link: (
    <Icon>
      <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Icon>
  ),
  gear: (
    <Icon>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Icon>
  ),
  headset: (
    <Icon>
      <path d="M4 13v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M20 13v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M18 10a6 6 0 0 0-12 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 19v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Icon>
  ),
  pin: (
    <Icon>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </Icon>
  ),
  phone: (
    <Icon>
      <path d="M22 16.9v2.2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.4 2 2 0 0 1 4.1 1.2H6.3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L7.1 8.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6a2 2 0 0 1 1.7 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  ),
  chevron: (
    <Icon size={14}>
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  ),
  heart: (
    <Icon size={14}>
      <path d="M19.5 5.8a4.4 4.4 0 0 0-6.2 0L12 7.1l-1.3-1.3a4.4 4.4 0 0 0-6.2 6.2l1.3 1.3L12 20l6.2-6.7 1.3-1.3a4.4 4.4 0 0 0 0-6.2Z" fill="currentColor" />
    </Icon>
  ),
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-aurora" aria-hidden="true" />
      <div className="footer-shell">
        <div className="footer-grid footer-grid-simple">
          <div className="footer-about">
            <Link
              href="#home"
              className="footer-brand-link"
              aria-label="RoyalTech Innovation home"
            >
              <span className="footer-logo">
                <Image src="/logo-mark.jpg" alt="" width={48} height={48} />
              </span>
              <span className="footer-brand-text">
                <strong>RoyalTech Innovation</strong>
                <span className="footer-tagline">
                  Innovate. <em>Integrate.</em> <b>Elevate.</b>
                </span>
              </span>
            </Link>
            <p>
              Technology partner for startups and growing organisations —
              websites, software, apps, marketing, design, and IT consulting.
            </p>
          </div>

          <div className="footer-col">
            <h3>
              {icons.link} Quick Links
            </h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {icons.chevron} {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>
              {icons.gear} Our Services
            </h3>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {icons.chevron} {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-touch">
            <h3>
              {icons.headset} Get in Touch
            </h3>
            <ul>
              <li className="footer-pill">
                {icons.pin}
                CP67 Mall, Sector 67, Mohali
              </li>
              <li>
                <a className="footer-pill" href="mailto:hello@royaltechinnovation.com">
                  {icons.mail}
                  hello@royaltechinnovation.com
                </a>
              </li>
              <li>
                <a className="footer-pill" href="tel:+919876543210">
                  {icons.phone}
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 RoyalTech Innovation. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms & Conditions</a>
            <a href="#contact">Cookie Policy</a>
          </div>
          <p className="footer-note">
            Designed with {icons.heart} for innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
