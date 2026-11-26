"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide =
  | { type: "video"; src: string; label: string; alt: string }
  | { type: "image"; src: string; label: string; alt: string };

const slides: Slide[] = [
  { type: "image", src: "/home/hero/slide-1.jpg", label: "Our studio", alt: "RoyalTech Innovation studio" },
  { type: "image", src: "/home/hero/slide-2.jpg", label: "Client conversations", alt: "RoyalTech team in a client meeting" },
  { type: "image", src: "/home/hero/slide-3.jpg", label: "Our team", alt: "The RoyalTech team working together" },
  {
    type: "video",
    src: "/home/hero/logo-reveal.mp4",
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
      className="tw:relative tw:h-full tw:w-full tw:overflow-hidden tw:bg-slate-950 tw:[container-type:size]"
      role="region"
      aria-roledescription="carousel"
      aria-label="RoyalTech Innovation highlights"
    >
      {slides.map((s, i) => {
        const active = i === index;
        const base = `tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover tw:transition-opacity tw:duration-[1200ms] tw:ease-out ${
          active ? "tw:opacity-100" : "tw:opacity-0"
        }`;
        return s.type === "video" ? (
          /* This box is sized exactly like `object-cover` (16:9, at least as big as the panel and centred),
             so anything placed inside it by percentage lands on the same spot of the footage at any screen size. */
          <div
            key={s.src}
            aria-hidden={!active}
            className={`tw:absolute tw:top-1/2 tw:left-1/2 tw:aspect-video tw:w-[max(100cqw,177.778cqh)] tw:-translate-x-1/2 tw:-translate-y-1/2 tw:transition-opacity tw:duration-[1200ms] tw:ease-out ${
              active ? "tw:opacity-100" : "tw:opacity-0"
            }`}
          >
            <video
              ref={videoRef}
              src={s.src}
              muted
              playsInline
              preload="auto"
              onEnded={next}
              className="tw:h-full tw:w-full"
            />
            {/* Logo plate: opaque, so the clip's bottom-right watermark cannot show through the logo */}
            <div className="tw:absolute tw:top-[77%] tw:left-[86.5%] tw:w-[9%] tw:rounded-[0.5vw] tw:bg-[#050b17] tw:p-[0.6%] tw:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/royaltech-logo.png" alt="RoyalTech Innovation" draggable={false} className="tw:block tw:h-auto tw:w-full tw:select-none" />
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
      <div aria-hidden className="tw:pointer-events-none tw:absolute tw:inset-x-0 tw:top-0 tw:h-28 tw:bg-gradient-to-b tw:from-black/70 tw:to-transparent" />

      <div className="tw:absolute tw:inset-x-0 tw:top-0 tw:flex tw:items-start tw:justify-between tw:gap-4 tw:p-5 tw:md:p-6">
        <p key={index} aria-live="polite" className="hero-caption tw:text-xs tw:font-medium tw:tracking-[0.28em] tw:text-white tw:uppercase">
          <span className="tw:mr-2 tw:text-accent">0{index + 1}</span>
          {current.label}
        </p>

        <div className="tw:flex tw:items-center tw:gap-2" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${s.label}`}
              onClick={() => setIndex(i)}
              className="group/dot tw:flex tw:h-6 tw:items-center tw:border-0 tw:bg-transparent tw:p-0"
            >
              <span
                className={`tw:block tw:h-[3px] tw:rounded-full tw:transition-all tw:duration-500 ${
                  i === index ? "tw:w-9 tw:bg-accent" : "tw:w-5 tw:bg-white/45 tw:group-hover/dot:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
