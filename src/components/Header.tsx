"use client";

import "@/styles/site-header.css";
import { OpenFormButton } from "@/components/FormModal";
import SocialLinks from "@/components/SocialLinks";
import { FaBriefcase, FaChartLine, FaCircleQuestion, FaLayerGroup, FaStar } from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const serviceColumns = [
  {
    key: "core",
    title: "Core Services",
    items: [
      { href: "/services/website-development", label: "Web Development" },
      { href: "/services", label: "Mobile App Development" },
      { href: "/services", label: "Custom Software" },
      { href: "/services", label: "UI/UX & Product Design" },
      { href: "/services/crm", label: "ERP & CRM Solutions" },
      { href: "/services", label: "Digital Marketing" },
      { href: "/services", label: "IT Consulting" },
      { href: "/services", label: "Business Automation" },
    ],
  },
  {
    key: "ai",
    title: "AI Services",
    items: [
      { href: "/services", label: "AI Chatbots & Virtual Assistants" },
      { href: "/services", label: "AI Agents & Workflow Automation" },
      { href: "/services", label: "Generative AI Solutions" },
      { href: "/services", label: "Machine Learning & Predictive Analytics" },
      { href: "/services", label: "AI Integration & API Solutions" },
      { href: "/services", label: "AI-powered Business Intelligence" },
    ],
  },
  {
    key: "business",
    title: "Business Solutions",
    items: [
      { href: "/services/crm", label: "CRM Development" },
      { href: "/services/crm", label: "ERP Development" },
      { href: "/services", label: "Learning Management Systems" },
      { href: "/services/website-development", label: "E-commerce Management" },
      { href: "/services", label: "SaaS Platforms" },
      { href: "/services", label: "Cloud & DevOps" },
    ],
  },
];

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  // { href: "/crm", label: "CRM" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/process", label: "Our Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/* Pages whose hero sits under the header: the header starts transparent and turns solid on scroll. */
const heroOverlayPaths = new Set([
  "/",
  "/about",
  "/services",
  "/services/crm",
  "/contact",
  "/careers",
  "/process",
  "/portfolio",
  "/gallery",
  "/privacy",
  "/terms",
]);

const LOGO_SRC = "/portfolio/brand/royaltech-logo.png";
const EMAIL = "info@royaltechinnovation.co.in";
const PHONE_LABEL = "+91 86790 16505";
const PHONE_HREF = "tel:+918679016505";

/** Pages the search box can open. */
const searchPages: { href: string; title: string; keywords: string }[] = [
  { href: "/", title: "Home", keywords: "home royaltech" },
  { href: "/about", title: "About Us", keywords: "about company team" },
  { href: "/services", title: "Services", keywords: "services what we do" },
  { href: "/services/crm", title: "CRM Software", keywords: "crm software leads" },
  { href: "/services/website-development", title: "Website Development", keywords: "website web design" },
  { href: "/services/software-development", title: "Software Development", keywords: "software custom" },
  { href: "/services/mobile-app-development", title: "Mobile App Development", keywords: "mobile app android ios" },
  { href: "/services/digital-marketing", title: "Digital Marketing & SEO", keywords: "seo marketing ads" },
  { href: "/services/ui-ux-design", title: "UI/UX & Graphic Design", keywords: "ui ux design logo" },
  { href: "/services/it-consulting", title: "IT Consulting", keywords: "consulting it" },
  { href: "/portfolio", title: "Portfolio", keywords: "portfolio work projects case studies" },
  { href: "/careers", title: "Careers", keywords: "careers jobs hiring" },
  { href: "/process", title: "Our Process", keywords: "process how we work" },
  { href: "/gallery", title: "Gallery", keywords: "gallery photos" },
  { href: "/contact", title: "Contact", keywords: "contact email phone call quote" },
  { href: "/crm", title: "CRM", keywords: "crm landing" },
];

function searchSite(query: string) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return searchPages
    .filter((page) => {
      const hay = `${page.title} ${page.keywords}`.toLowerCase();
      return words.every((word) => hay.includes(word));
    })
    .slice(0, 6);
}

function Chevron() {
  return (
    <svg className="sh-dd-arrow" viewBox="0 0 10 6" width="9" height="6" fill="none" aria-hidden="true">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const columnIcons = {
  core: FaLayerGroup,
  ai: FaChartLine,
  business: FaBriefcase,
} as const;

function ColumnIcon({ name }: { name: string }) {
  const Icon = columnIcons[name as keyof typeof columnIcons];
  return <Icon aria-hidden="true" />;
}

function ServiceMega({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  return (
    <div className="sh-mega">
      <div className="sh-mega-panel">
        <div className="sh-mega-grid">
          {serviceColumns.map((column) => (
            <div key={column.key} className={`sh-mega-col is-${column.key}`}>
              <p className="sh-mega-title">
                <ColumnIcon name={column.key} />
                {column.title}
              </p>
              <ul>
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? "is-active" : undefined}
                      onClick={onNavigate}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <aside className="sh-mega-feature">
            <p className="sh-mega-title">
              <FaStar aria-hidden="true" />
              Featured
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="sh-mega-art"
              src="/featured/robot-team.png"
              alt="RoyalTech Innovation robot mascot shaking hands with a client and holding the company sign"
            />
            <strong>Build Smarter, Grow Faster</strong>
            <p>
              Digital solutions, website development, and software development that automate workflows and unlock new growth.
            </p>
            <Link href="/services" className="sh-mega-cta" onClick={onNavigate}>
              Explore AI Services
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
        <div className="sh-mega-foot">
          <p>
            <FaCircleQuestion aria-hidden="true" />
            Not sure what you need?
            <Link href="/contact" onClick={onNavigate}>Talk to our experts</Link>
          </p>
          <OpenFormButton className="sh-mega-consult" title="Request a consultation" source="services-menu" onClick={onNavigate}>
            Request a consultation
          </OpenFormButton>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const overlaysHero = heroOverlayPaths.has(pathname) || pathname.startsWith("/services/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const results = useMemo(() => searchSite(query), [query]);

  /* Close the menu whenever the visitor changes page (adjusted during render, not in an effect). */
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!overlaysHero) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlaysHero]);

  /* Lock page scroll while the menu is open, and close it on Escape. */
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) setSearchOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [searchOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goToResult = (href: string) => {
    setQuery("");
    setSearchOpen(false);
    router.push(href);
  };

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (results[0]) goToResult(results[0].href);
    else setSearchOpen(true);
  };
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
  /* Pages without a hero under the header are always solid. Hero pages turn solid after scrolling. */
  const solid = !overlaysHero || scrolled || menuOpen;

  return (
    <>
      <div className="sh-top">
        <div className="sh-top-inner">
          <SocialLinks className="sh-social" />

          <div className="sh-top-right">
          <div className="sh-search" ref={searchRef}>
            <form className="sh-search-form" role="search" onSubmit={onSearch}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                placeholder="Search pages"
                aria-label="Search the site"
                aria-controls="sh-search-results"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
              />
            </form>
            {searchOpen && query.trim() && (
              <ul id="sh-search-results" className="sh-search-results" role="listbox">
                {results.length ? (
                  results.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        onClick={(event) => {
                          event.preventDefault();
                          goToResult(page.href);
                        }}
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="sh-search-empty">No matching pages</li>
                )}
              </ul>
            )}
          </div>

          <a className="sh-top-link" href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="sh-top-link" href={PHONE_HREF} aria-label={`Call ${PHONE_LABEL}`}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M8 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L17 12l4 1.5V17a2 2 0 0 1-2 2A15 15 0 0 1 5 5a2 2 0 0 1 2-2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          </div>
        </div>
      </div>

      <header id="top" className={`sh-header${solid ? " is-solid" : ""}`}>
        <div className="sh-bar">
          <Link href="/" className="sh-brand" aria-label="RoyalTech Innovation home" onClick={closeMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_SRC} alt="RoyalTech Innovation" className="sh-logo" draggable={false} />
          </Link>

          <nav className="sh-nav" aria-label="Primary">
            {links.map((link) =>
              link.href === "/services" ? (
                <div key={link.href} className="sh-dd">
                  <Link
                    href={link.href}
                    aria-haspopup="true"
                    className={`sh-link${isActive(link.href) ? " is-active" : ""}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                    <Chevron />
                  </Link>
                  <ServiceMega pathname={pathname} onNavigate={closeMenu} />
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`sh-link${isActive(link.href) ? " is-active" : ""}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <OpenFormButton className="sh-btn sh-cta" title="Get a Quote" source="header">
            Get a Quote
          </OpenFormButton>

          <button
            type="button"
            className={`sh-toggle${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="sh-mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sh-toggle-lines">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile / tablet menu. `inert` keeps its links out of the tab order while it is closed. */}
      <div id="sh-mobile-menu" className={`sh-mobile${menuOpen ? " is-open" : ""}`} inert={!menuOpen}>
        <ul className="sh-mobile-list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`sh-mobile-link${isActive(link.href) ? " is-active" : ""}`}
              >
                {link.label}
              </Link>
              {link.href === "/services" && (
                <div className="sh-mobile-groups">
                  {serviceColumns.map((column) => (
                    <div key={column.key}>
                      <p>{column.title}</p>
                      <ul className="sh-mobile-sub">
                        {column.items.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} onClick={closeMenu}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="sh-mobile-cta-wrap">
          <OpenFormButton className="sh-btn sh-btn-gold" title="Get a Quote" source="header-mobile" onClick={closeMenu}>
            Get a Quote
          </OpenFormButton>
        </div>
      </div>
    </>
  );
}
