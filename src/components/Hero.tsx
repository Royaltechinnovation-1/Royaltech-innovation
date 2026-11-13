"use client";

import { OpenFormButton } from "@/components/FormModal";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    type: "image" as const,
    src: "/hero-slide-1.jpg",
    alt: "RoyalTech Innovation reception lobby with brand logo wall",
  },
  {
    type: "image" as const,
    src: "/hero-slide-2.jpg",
    alt: "RoyalTech Innovation team meeting in the branded conference room",
  },
  {
    type: "image" as const,
    src: "/hero-slide-3.jpg",
    alt: "RoyalTech Innovation team collaborating at the office",
  },
  {
    type: "video" as const,
    src: "https://res.cloudinary.com/ugqc5gb8/video/upload/v1794308976/Royal_Tech_logo_reveal_20b3f653_1080p.mp4",
    poster: "/hero-slide-3.jpg",
    alt: "RoyalTech Innovation logo reveal animation",
  },
];

const IMAGE_SLIDE_MS = 4500;
const VIDEO_SLIDE_MS = 12000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback((index: number) => {
    clearTimer();
    const delay =
      slides[index]?.type === "video" ? VIDEO_SLIDE_MS : IMAGE_SLIDE_MS;
    timerRef.current = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, delay);
  }, []);

  const goTo = (index: number) => {
    setActive(index);
    startTimer(index);
  };

  useEffect(() => {
    startTimer(active);
    return clearTimer;
  }, [active, startTimer]);

  useEffect(() => {
    slides.forEach((slide, index) => {
      if (slide.type !== "video") return;
      const video = videoRefs.current.get(index);
      if (!video) return;
      if (active === index) {
        video.currentTime = 0;
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

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
              {slide.type === "video" ? (
                <video
                  ref={(node) => {
                    if (node) videoRefs.current.set(index, node);
                    else videoRefs.current.delete(index);
                  }}
                  className="hero-bg hero-bg-video"
                  src={slide.src}
                  poster={slide.poster}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="hero-bg" src={slide.src} alt={slide.alt} />
              )}
            </div>
          );
        })}
      </div>

      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-brand">RoyalTech Innovation</p>
          <h1>Build Your Digital Future with Custom Software & IT Solutions </h1>
          <p className="hero-sub">
            RoyalTech Innovation helps businesses grow through custom website development, mobile applications, software solutions, UI/UX design, digital marketing and IT consulting.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-outline" href="#about">
              Explore
            </Link>
            <OpenFormButton
              className="btn btn-soft"
              title="Request a Quote"
              source="home-hero"
            >
              Request a Quote
            </OpenFormButton>
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
            aria-label={`Show slide ${index + 1}${slide.type === "video" ? " video" : ""}`}
            className={`hero-dot${active === index ? " is-active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
