"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide =
  | { type: "video"; src: string; poster: string; label: string; alt: string }
  | { type: "image"; src: string; label: string; alt: string };

const slides: Slide[] = [
  {
    type: "video",
    src: "/hero/logo-reveal.mp4",
    poster: "/hero/logo-reveal-poster.jpg",
    label: "Inside RoyalTech",
    alt: "A walk through the RoyalTech Innovation office",
  },
  {
    type: "image",
    src: "/hero/slide-1.jpg",
    label: "Our studio",
    alt: "RoyalTech Innovation reception with the illuminated logo",
  },
  {
    type: "image",
    src: "/hero/slide-2.jpg",
    label: "Client conversations",
    alt: "RoyalTech team in a client meeting",
  },
  {
    type: "image",
    src: "/hero/slide-3.jpg",
    label: "Our team",
    alt: "The RoyalTech team working together at their desks",
  },
];

const IMAGE_MS = 5200;
/** Safety net in case the video never fires `ended` (e.g. blocked autoplay). */
const VIDEO_MAX_MS = 14000;

/**
 * Hero media card: the office clip plays once, then three photos crossfade,
 * then it loops back to the clip.
 */
export default function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);

  /* Advance: images on a timer, the clip when it ends (with a safety timeout). */
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
      data-reveal
      data-delay="0.5"
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="RoyalTech Innovation highlights"
    >
      {/* soft gold glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_30%_40%,rgba(201,162,75,0.22),transparent_70%)] blur-2xl"
      />

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/25 bg-[#03060d] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]">
        {slides.map((s, i) => {
          const active = i === index;
          const base = `absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            active ? "opacity-100" : "opacity-0"
          }`;
          return s.type === "video" ? (
            <video
              key={s.src}
              ref={videoRef}
              src={s.src}
              poster={s.poster}
              muted
              playsInline
              preload="auto"
              aria-hidden={!active}
              onEnded={next}
              /* slight zoom from the top-left crops the generator watermark in the bottom-right corner */
              className={`${base} origin-top-left scale-[1.12]`}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              aria-hidden={!active}
              loading={i === 1 ? "eager" : "lazy"}
              draggable={false}
              className={`${base} ${active ? "hero-kenburns" : ""}`}
            />
          );
        })}

        {/* readability gradient for the caption */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-5">
          <p
            key={index}
            aria-live="polite"
            className="hero-caption text-[0.65rem] font-medium tracking-[0.28em] text-white uppercase"
          >
            <span className="mr-2 text-[var(--color-gold)]">0{index + 1}</span>
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
                    i === index
                      ? "w-9 bg-[var(--color-gold)]"
                      : "w-5 bg-white/45 group-hover/dot:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
