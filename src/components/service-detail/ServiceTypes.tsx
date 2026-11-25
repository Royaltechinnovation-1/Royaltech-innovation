import { ArrowUpRight } from "lucide-react";
import type { ServiceSpecializedItem } from "@/data/services-data";

interface ServiceTypesProps {
  eyebrow: string;
  title: string;
  text: string;
  items: ServiceSpecializedItem[];
}

export default function ServiceTypes({
  eyebrow,
  title,
  text,
  items,
}: ServiceTypesProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      {/* Section Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
          — {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
          {title}
        </h2>
        {text && (
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            {text}
          </p>
        )}
      </div>

      {/* Grid of Interactive Cards */}
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="hover-lift group relative overflow-hidden rounded-3xl border border-border bg-card p-7"
          >
            {/* Expanding circular background on hover */}
            <span className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-secondary transition-transform duration-700 group-hover:scale-[2.5] pointer-events-none" />

            {/* Tag Pill & Arrow */}
            <div className="relative flex items-center justify-between">
              <span className="rounded-full border border-ring/40 bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                {item.tag}
              </span>
              <ArrowUpRight className="h-5 w-5 -rotate-45 text-primary transition-transform duration-500 group-hover:rotate-0" />
            </div>

            {/* Card Content */}
            <h3 className="relative mt-6 text-xl font-bold text-foreground">
              {item.title}
            </h3>
            <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
