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
      className="relative h-full w-full overflow-hidden bg-slate-950 [container-type:size]"
      role="region"
      aria-roledescription="carousel"
      aria-label="RoyalTech Innovation highlights"
    >
      {slides.map((s, i) => {
        const active = i === index;
        const base = `absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
          active ? "opacity-100" : "opacity-0"
        }`;
        return s.type === "video" ? (
          /* This box is sized exactly like `object-cover` (16:9, at least as big as the panel and centred),
             so anything placed inside it by percentage lands on the same spot of the footage at any screen size. */
          <div
            key={s.src}
            aria-hidden={!active}
            className={`absolute top-1/2 left-1/2 aspect-video w-[max(100cqw,177.778cqh)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[1200ms] ease-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              ref={videoRef}
              src={s.src}
              muted
              playsInline
              preload="auto"
              onEnded={next}
              className="h-full w-full"
            />
            {/* Logo plate: opaque, so the clip's bottom-right watermark cannot show through the logo */}
            <div className="absolute top-[77%] left-[86.5%] w-[9%] rounded-[0.5vw] bg-[#050b17] p-[0.6%] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/royaltech-logo.png" alt="RoyalTech Innovation" draggable={false} className="block h-auto w-full select-none" />
            </div>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            aria-hidden={!active}
            loading={i === 0 ? "eager" : "lazy"}
            draggable={false}
            className={`${base} ${active ? "hero-kenburns" : ""}`}
          />
        );
      })}

      {/* readability gradient for the caption */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 md:p-6">
        <p key={index} aria-live="polite" className="hero-caption text-xs font-medium tracking-[0.28em] text-white uppercase">
          <span className="mr-2 text-accent">0{index + 1}</span>
          {current.label}
        </p>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${s.label}`}
              onClick={() => setIndex(i)}
              className="group/dot flex h-6 items-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  i === index ? "w-9 bg-accent" : "w-5 bg-white/45 group-hover/dot:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
