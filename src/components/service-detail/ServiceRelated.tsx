import Link from "next/link";
import { ArrowUpRight, Globe, Code, Smartphone, BarChart3, Palette, Headphones } from "lucide-react";
import { getRelatedServices } from "@/data/services-data";

interface ServiceRelatedProps {
  currentSlug: string;
  eyebrow?: string;
  title?: string;
}

function getServiceIcon(slug: string) {
  switch (slug) {
    case "crm-software":
      return <Headphones className="h-6 w-6 text-current" />;
    case "mobile-app-development":
      return <Smartphone className="h-6 w-6 text-current" />;
    case "digital-marketing-seo":
      return <BarChart3 className="h-6 w-6 text-current" />;
    case "ui-ux-graphic-design":
      return <Palette className="h-6 w-6 text-current" />;
    case "it-consulting":
      return <Headphones className="h-6 w-6 text-current" />;
    case "software-development":
      return <Code className="h-6 w-6 text-current" />;
    default:
      return <Globe className="h-6 w-6 text-current" />;
  }
}

export default function ServiceRelated({
  currentSlug,
  eyebrow = "Explore more",
  title = "Related services",
}: ServiceRelatedProps) {
  const related = getRelatedServices(currentSlug, 3);

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
          — {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
          {title}
        </h2>

        {/* 3 Related Service Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {related.map((service, index) => {
            const num = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8"
              >
                {/* Expanding background on hover */}
                <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 transition-all duration-500 group-hover:scale-[3] group-hover:bg-secondary pointer-events-none" />

                {/* Top: Icon + Number */}
                <div className="relative flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-accent transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    {getServiceIcon(service.slug)}
                  </span>
                  <span className="text-5xl font-black text-border transition-colors group-hover:text-accent">
                    {num}
                  </span>
                </div>

                {/* Title & Short Summary */}
                <h3 className="relative mt-6 text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="relative mt-3 flex-1 text-muted-foreground text-sm leading-relaxed">
                  {service.short}
                </p>

                {/* Link Text */}
                <span className="relative mt-6 inline-flex items-center gap-2 font-bold text-primary">
                  <span>Explore service</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
