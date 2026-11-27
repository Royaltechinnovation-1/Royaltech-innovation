import { Check } from "lucide-react";
import type { ServiceFeature } from "@/data/services-data";

interface ServiceOverviewProps {
  serviceTitle: string;
  overview: string[];
  features: ServiceFeature[];
  eyebrow?: string;
}

export default function ServiceOverview({
  serviceTitle,
  overview,
  features,
  eyebrow = "Overview",
}: ServiceOverviewProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2">
      {/* Left: Heading & Eyebrow */}
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
          — {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl leading-tight">
          {serviceTitle} services that deliver results
        </h2>
      </div>

      {/* Right: Paragraphs and Checkpoint Badges */}
      <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
        {overview.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Feature Checkpoints Grid */}
        <ul className="grid gap-3 pt-2 sm:grid-cols-2">
          {features.slice(0, 4).map((feature) => (
            <li
              key={feature.title}
              className="flex items-center gap-2 text-base font-semibold text-foreground"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{feature.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
