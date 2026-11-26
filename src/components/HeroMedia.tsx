"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide =
  | { type: "video"; src: string; label: string; alt: string }
  | { type: "image"; src: string; label: string; alt: string };

const slides: Slide[] = [
  { type: "image", src: "/hero/slide-1.jpg", label: "Our studio", alt: "RoyalTech Innovation studio" },
  { type: "image", src: "/hero/slide-2.jpg", label: "Client conversations", alt: "RoyalTech team in a client meeting" },
  { type: "image", src: "/hero/slide-3.jpg", label: "Our team", alt: "The RoyalTech team working together" },
  {
    type: "video",
    src: "/hero/logo-reveal.mp4",
    label: "Inside RoyalTech",
    alt: "RoyalTech Innovation logo reveal",
  },
];

const IMAGE_MS = 5200;
/** Safety net in case the video never fires `ended` (e.g. blocked autoplay). */
const VIDEO_MAX_MS = 14000;

/**
 * Hero media card: the logo clip plays once, then three photos crossfade,
 * then it loops back to the clip.
 */
export default function HeroMedia() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    const slide = slides[index];
    if (slide.type === "video") {
      const v = videoRef.current;
      if (v) {
        v.currentTime = 0;
        v.play().catch(() => {
          /* autoplay blocked: the timeout below moves on */
        });
      }
      const t = window.setTimeout(next, VIDEO_MAX_MS);
      return () => window.clearTimeout(t);
    }
    videoRef.current?.pause();
    const t = window.setTimeout(next, IMAGE_MS);
    return () => window.clearTimeout(t);
  }, [index, next]);

  const current = slides[index];

  return (
    <div
      className="gh-media"
      role="region"
      aria-roledescription="carousel"
      aria-label="RoyalTech Innovation highlights"
    >
      {slides.map((s, i) => {
        const active = i === index;

        if (s.type === "video") {
          /* This box is sized exactly like `object-cover` (16:9, at least as big as the panel and centred),
             so the logo plate placed by percentage lands on the same spot of the footage at any screen size. */
          return (
            <div key={s.src} aria-hidden={!active} className={`gh-video-box${active ? " is-active" : ""}`}>
              <video ref={videoRef} src={s.src} muted playsInline preload="auto" onEnded={next} />
              {/* Logo plate: opaque, so the clip's bottom-right watermark cannot show through the logo */}
              <div className="gh-logo-plate">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/royaltech-logo.png" alt="RoyalTech Innovation" draggable={false} />
              </div>
            </div>
          );
        }

        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            className={`gh-img${active ? " is-active" : ""}`}
            src={s.src}
            alt={s.alt}
            aria-hidden={!active}
            loading={i === 0 ? "eager" : "lazy"}
            draggable={false}
          />
        );
      })}

      {/* readability gradient for the caption */}
      <div aria-hidden className="gh-top-shade" />

      <div className="gh-bar">
        <p key={index} aria-live="polite" className="gh-caption">
          <span className="gh-caption-num">0{index + 1}</span>
          {current.label}
        </p>

        <div className="gh-tabs" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${s.label}`}
              onClick={() => setIndex(i)}
              className="gh-tab"
            >
              <span className={`gh-tab-bar${i === index ? " is-active" : ""}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
