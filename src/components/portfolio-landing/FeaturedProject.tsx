"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/portfolio-landing/Icons";

export type FeaturedProjectData = {
  title: string;
  /** Short label above the title, e.g. "Featured case study" */
  eyebrow?: string;
  description: string;
  highlights: string[];
  /** Full live URL to open when the visitor clicks the button. Omit to hide the button. */
  url?: string;
  video: string;
  poster: string;
  /** Aspect ratio of the source video, e.g. "1550/1016" */
  aspect: string;
  /** Reverse the layout so the video sits on the right (for alternating rows) */
  reverse?: boolean;
  /** Small pill above the title. Defaults to "Live demo". */
  badge?: string;
  /** Button label. Defaults to "Visit live project". */
  ctaLabel?: string;
};

/**
 * Featured case study: a real product demo shown in a browser frame.
 * The video only plays while it is on screen, to save battery and bandwidth.
 */
export default function FeaturedProject({
  title,
  eyebrow = "Featured case study",
  description,
  highlights,
  url,
  video,
  poster,
  aspect,
  reverse = false,
  badge = "Live demo",
  ctaLabel = "Visit live project",
}: FeaturedProjectData) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const host = url ? new URL(url).host : "Dynamic UI/UX design";

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: [0, 0.2], rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      data-reveal
      data-tour="true"
      data-tour-offset="-110"
      data-tour-dwell="3800"
      className="glass group grid lg:grid-cols-12"
    >
      {/* Browser-framed demo */}
      <div
        className={`relative z-10 p-4 [perspective:1400px] md:p-6 lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
      >
        <div
          data-tilt-in
          className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(214,179,112,0.08)] transition-transform duration-700 ease-out group-hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            </span>
            <span className="mx-auto flex max-w-xs flex-1 items-center justify-center gap-2 truncate rounded-md bg-black/40 px-3 py-1 text-[0.7rem] text-white/80">
              <span className="text-gold">●</span>
              {host}
            </span>
            <span className="hidden w-10 sm:block" />
          </div>
          <button
            type="button"
            data-open-contact
            data-contact-topic={title}
            aria-label={`Enquire about a project like ${title}`}
            className="group/video relative block w-full cursor-pointer text-left"
          >
            <video
              ref={videoRef}
              src={video}
              poster={poster}
              className="block w-full object-cover"
              style={{ aspectRatio: aspect }}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`Demo of ${title}`}
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center bg-gradient-to-t from-black/75 via-black/20 to-transparent px-4 pb-4 pt-16 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover/video:opacity-100 md:group-focus-visible/video:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-[#03060d]/85 px-4 py-2 text-[0.68rem] tracking-[0.2em] text-white uppercase backdrop-blur">
                Click to enquire about a similar project <Icon name="arrow" className="h-3.5 w-3.5 text-gold" />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Copy */}
      <div
        className={`relative z-10 flex flex-col justify-center p-7 md:p-10 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[0.62rem] tracking-[0.22em] text-gold-soft uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          {badge}
        </span>
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h3 className="display mt-5 text-3xl md:text-4xl">{title}</h3>
        <p className="mt-4 text-[0.97rem] leading-relaxed text-white/92">{description}</p>

        <ul data-feature-list className="mt-7 grid gap-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 text-[0.92rem] text-white/95"
            >
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-3">
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn-gold">
                {ctaLabel} <Icon name="arrow" className="h-4 w-4" />
              </a>
            )}
            <button
              type="button"
              data-open-contact
              data-contact-topic={title}
              className={`lp-btn ${url ? "lp-btn-ghost" : "lp-btn-gold"}`}
            >
              Start a similar project <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-[0.8rem] text-white/78 transition-colors hover:text-gold"
            >
              {host}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
