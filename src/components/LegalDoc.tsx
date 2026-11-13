import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import "@/styles/legal.css";

type Section = {
  id: string;
  title: string;
  paragraphs?: ReactNode[];
  bullets?: ReactNode[];
  note?: string;
};

type LegalDocProps = {
  badge: string;
  title: string;
  intro: string;
  updated: string;
  standards: string[];
  sideImage: string;
  sideTitle: string;
  sideText: string;
  sections: Section[];
};

export default function LegalDoc({
  badge,
  title,
  intro,
  updated,
  standards,
  sideImage,
  sideTitle,
  sideText,
  sections,
}: LegalDocProps) {
  return (
    <div className="lg">
      <section className="lg-hero" aria-label={title}>
        <div className="lg-hero-bg" aria-hidden="true">
          <Image src="/legal-hero-bg.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="lg-shell lg-hero-copy">
          <p className="lg-badge">{badge}</p>
          <h1>
  {title === "Privacy Policy"
    ? "Privacy Policy | RoyalTech Innovation"
    : title}
</h1>
          <p>{intro}</p>
          <div className="lg-meta">
            <span>
  Last updated: <time dateTime="2026-10-15">{updated}</time>
</span>
            {standards.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="lg-body">
        <div className="lg-shell lg-layout">
          <aside className="lg-side">
            <div className="lg-side-card">
              <div className="lg-side-media">
                <Image
                  src={sideImage}
                  alt={sideTitle}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <strong>{sideTitle}</strong>
                <p>{sideText}</p>
              </div>
            </div>

            <nav className="lg-toc" aria-label="On this page">
              <p>On this page</p>
              <ol>
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      {String(index + 1).padStart(2, "0")}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg-doc">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="lg-block">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? <p className="lg-note">{section.note}</p> : null}
              </article>
            ))}

            <div className="lg-cta">
              <h2>Questions about this document?</h2>
              <p>
                Contact RoyalTech Innovation for clarification on privacy,
                security, or contractual terms related to our IT services.
              </p>
              <Link href="/contact">Contact us →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
