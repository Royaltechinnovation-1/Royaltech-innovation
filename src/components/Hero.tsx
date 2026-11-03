"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    type: "image" as const,
    src: "/hero-office.jpg",
    alt: "RoyalTech Innovation modern office",
  },
  {
    type: "image" as const,
    src: "/hero-slide-2.jpg",
    alt: "RoyalTech Innovation workplace",
  },
  {
    type: "video" as const,
    src: "/kling_20261103_VIDEO_founder_wo_4110_0.mp4",
    alt: "RoyalTech Innovation cinematic brand video",
  },
];

const SLIDE_MS = 4500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (slides[active].type === "video") {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
      return;
    }

    video.pause();
  }, [active]);

  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => {
          const isActive = active === index;
          return (
            <div
              key={`${slide.type}-${slide.src}`}
              className={`hero-slide${isActive ? " is-active" : ""}`}
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              {slide.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="hero-bg" src={slide.src} alt="" />
              ) : (
                <video
                  ref={videoRef}
                  className="hero-bg"
                  src={slide.src}
                  muted
                  playsInline
                  loop
                  preload="auto"
                />
              )}
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
