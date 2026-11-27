"use client";

import { useState } from "react";
import { techIconMap } from "@/data/services-data";

interface ServiceMarqueeProps {
  technologies: string[];
}

function TechLogo({ name }: { name: string }) {
  const slug = techIconMap[name];
  const [error, setError] = useState(false);

  if (!slug || error) {
    const initials = name
      .replace(/[^A-Za-z0-9 ]/g, "")
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-xs font-black text-accent">
        {initials}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setError(true)}
      className="h-9 w-9 object-contain  transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
      style={{ width: "2.25rem", height: "2.25rem", maxWidth: "2.25rem", maxHeight: "2.25rem", display: "inline-block" }}
    />
  );
}

export default function ServiceMarquee({ technologies }: ServiceMarqueeProps) {
  const row1 = [...technologies, ...technologies, ...technologies];
  const reversedTechs = [...technologies].reverse();
  const row2 = [...reversedTechs, ...reversedTechs, ...reversedTechs];

  return (
    <section className="border-b border-border bg-secondary py-10 overflow-hidden">
      {/* Row 1: Forward Marquee */}
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee">
          {row1.map((item, index) => (
            <span
              key={`row1-${item}-${index}`}
              className="group flex items-center gap-3 whitespace-nowrap rounded-2xl border border-border bg-card px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ring hover:shadow-glow"
            >
              <TechLogo name={item} />
              <span className="text-sm font-bold text-foreground">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] mt-4">
        <div className="flex w-max gap-4 animate-marquee-reverse">
          {row2.map((item, index) => (
            <span
              key={`row2-${item}-${index}`}
              className="group flex items-center gap-3 whitespace-nowrap rounded-2xl border border-border bg-card px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ring hover:shadow-glow"
            >
              <TechLogo name={item} />
              <span className="text-sm font-bold text-foreground">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
