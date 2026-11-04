"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/hero-slide-1.jpg",
    alt: "RoyalTech Innovation team of three collaborating",
  },
  {
    src: "/hero-slide-2.jpg",
    alt: "RoyalTech Innovation team of three in a meeting",
  },
  {
    src: "/hero-slide-3.jpg",
    alt: "RoyalTech Innovation specialist",
  },
];

const SLIDE_MS = 4500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
  }, []);

  const goTo = (index: number) => {
    setActive(index);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer]);

  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => {
          const isActive = active === index;
          return (
            <div
              key={slide.src}
              className={`hero-slide${isActive ? " is-active" : ""}`}
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-bg" src={slide.src} alt="" />
            </div>
          );
        })}
      </div>

      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-brand">RoyalTech Innovation</p>
          <h1>Build your digital future with a partner you can trust</h1>
          <p className="hero-sub">
            An IT solutions company and technology and digital transformation
            partner delivering end-to-end digital solutions, software development,
            and business technology solutions for startups, SMEs, and enterprises.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-outline" href="#about">
              Explore
            </Link>
            <Link className="btn btn-soft" href="#contact">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            key={`dot-${slide.src}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Show slide ${index + 1}`}
            className={`hero-dot${active === index ? " is-active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
