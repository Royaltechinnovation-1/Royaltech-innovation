"use client";

import { useState } from "react";
import { techIconMap } from "@/data/services-data";

interface ServiceTechGridProps {
  serviceTitle: string;
  technologies: string[];
  eyebrow?: string;
  text?: string;
}

function TechBadge({ name }: { name: string }) {
  const slug = techIconMap[name];
  const [error, setError] = useState(false);

  return (
    <span className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:rotate-[-2deg] hover:border-ring hover:shadow-glow">
      {!slug || error ? (
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-xs font-bold text-accent">
          {name.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={`${name} icon`}
          loading="lazy"
          onError={() => setError(true)}
          className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-125"
          style={{ width: "1.75rem", height: "1.75rem", maxWidth: "1.75rem", maxHeight: "1.75rem", display: "inline-block" }}
        />
      )}
      <span className="text-sm font-bold text-foreground">{name}</span>
    </span>
  );
}

export default function ServiceTechGrid({
  serviceTitle,
  technologies,
  eyebrow = "Technologies",
  text,
}: ServiceTechGridProps) {
  const description =
    text || `Proven, modern technology for reliable ${serviceTitle.toLowerCase()} projects.`;

  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
          — {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
          Tools & technologies we use
        </h2>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          {description}
        </p>
      </div>

      {/* Tech Badges Grid */}
      <div className="mt-12 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </section>
  );
}
