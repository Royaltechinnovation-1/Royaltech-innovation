"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="nav-backdrop" hidden={!menuOpen} onClick={closeMenu} />
      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}
        id="top"
      >
        <div className="header-inner">
          <Link
            className="brand"
            href="#home"
            aria-label="RoyalTech Innovation home"
            onClick={closeMenu}
          >
            <Image
              className="brand-mark"
              src="/logo-mark.jpg"
              alt=""
              width={58}
              height={58}
              priority
            />
            <span className="brand-name">
              RoyalTech <span>Innovation</span>
            </span>
          </Link>

          <nav className={`nav${menuOpen ? " is-open" : ""}`} aria-label="Primary">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="nav-link" href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="nav-mobile-only">
                <Link
                  className="btn btn-soft btn-sm nav-quote"
                  href="tel:+18005550199"
                  onClick={closeMenu}
                >
                  Call Now
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link className="btn btn-soft btn-sm" href="tel:+18005550199">
              Call Now
            </Link>
            <button
              className={`menu-btn${menuOpen ? " is-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
