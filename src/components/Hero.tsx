"use client";

import "@/styles/hero-glass.css";
import HeroMedia from "@/components/HeroMedia";
import { OpenFormButton } from "@/components/FormModal";
import Link from "next/link";
import type { PointerEvent } from "react";

/* Cursor-follow spotlight on the glass panel (fine pointers only). */
function trackSpotlight(event: PointerEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export default function Hero() {
  return (
    <section className="gh-hero" id="home" aria-label="Hero">
      <div className="gh-wrap">
        <div className="gh-glass" onPointerMove={trackSpotlight}>
          <div className="gh-media-layer">
            <HeroMedia />
          </div>
          {/* dark wash from the left so the copy stays readable over the media */}
          <div aria-hidden className="gh-wash" />

          <div className="gh-copy">
            <p className="gh-brand">RoyalTech Innovation</p>
            <h1>
              Build Your <span className="gh-accent-text">Digital Future</span> with Custom Software &amp; IT Solutions
            </h1>
            <p className="gh-sub">
              RoyalTech Innovation helps businesses grow through custom website development, mobile applications,
              software solutions, UI/UX design, digital marketing and IT consulting.
            </p>
            <div className="gh-actions">
              <Link href="/services" className="gh-pill gh-pill-accent">
                Explore Services →
              </Link>
              <OpenFormButton className="gh-pill gh-pill-ghost" title="Contact Us" source="home-hero">
                Contact
              </OpenFormButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
