"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/Icons";
import { SocialIcon, platformMeta, platforms, type SocialPlatform } from "@/components/SocialIcon";
import { socialLinks } from "@/lib/site";

export type SocialItem = {
  platform: SocialPlatform;
  title: string;
  description: string;
  video: string;
  poster: string;
  aspect: string;
};

/** Social profile recordings with a follow button for each platform. */
export default function SocialShowcase({ items }: { items: SocialItem[] }) {
  return (
    <div data-stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <SocialCard key={item.platform} item={item} />
      ))}
    </div>
  );
}

function SocialCard({ item }: { item: SocialItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const meta = platformMeta[item.platform];
  const url = socialLinks[item.platform];
  const host = new URL(url).host.replace(/^www\./, "");

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
    <article className="glass group flex flex-col p-4">
      <div className="[perspective:1200px]">
        <div
          data-tilt-in
          className="overflow-hidden rounded-xl border border-white/15 bg-black/40 transition-transform duration-700 ease-out group-hover:-translate-y-1"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
            </span>
            <span className="mx-auto truncate rounded-md bg-black/40 px-3 py-0.5 text-[0.65rem] text-white/78">
              {host}
            </span>
          </div>
          <video
            ref={videoRef}
            src={item.video}
            poster={item.poster}
            className="block w-full object-cover"
            style={{ aspectRatio: item.aspect }}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${meta.label} profile recording`}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-3 pt-6">
        <span className="eyebrow text-[0.6rem]">
          <SocialIcon platform={item.platform} className="h-4 w-4 text-white" /> {meta.label}
        </span>
        <h3 className="display mt-3 text-xl">{item.title}</h3>
        <p className="mt-2 text-[0.92rem] leading-relaxed text-white/90">{item.description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost mt-6 w-fit !py-2.5 !text-[0.68rem]"
        >
          <SocialIcon platform={item.platform} className="h-4 w-4" /> {meta.cta}{" "}
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

/** Compact row of follow links, used in the contact and footer areas. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {platforms.map((p) => (
        <li key={p}>
          <a
            href={socialLinks[p]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-4 py-2 text-[0.7rem] tracking-[0.18em] text-white/95 uppercase backdrop-blur transition-colors hover:border-gold hover:text-gold"
          >
            <SocialIcon platform={p} className="h-4 w-4" />
            {platformMeta[p].label}
          </a>
        </li>
      ))}
    </ul>
  );
}
