"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Globe, Code, Smartphone, BarChart3, Palette, Headphones } from "lucide-react";
import { useFormModal } from "@/components/FormModal";
import { serviceImageBySlug, type ServiceStat } from "@/data/services-data";

interface ServiceHeroProps {
  slug: string;
  title: string;
  tagline: string;
  heroTitle: string;
  heroHighlight: string;
  heroText: string;
  stats: ServiceStat[];
  iconSlug?: string;
}

export default function ServiceHero({
  slug,
  title,
  tagline,
  heroTitle,
  heroHighlight,
  heroText,
  stats,
  iconSlug = "web",
}: ServiceHeroProps) {
  const { openForm } = useFormModal();
  const bgImage = serviceImageBySlug[slug];

  const renderIcon = () => {
    switch (iconSlug) {
      case "mobile":
        return <Smartphone className="h-8 w-8 text-current" />;
      case "marketing":
        return <BarChart3 className="h-8 w-8 text-current" />;
      case "design":
        return <Palette className="h-8 w-8 text-current" />;
      case "consulting":
        return <Headphones className="h-8 w-8 text-current" />;
      case "software":
        return <Code className="h-8 w-8 text-current" />;
      default:
        return <Globe className="h-8 w-8 text-current" />;
    }
  };

  return (
    <section className="service-hero-section relative overflow-hidden bg-deep-gradient pb-24 pt-44 text-deep-foreground">
      {/* Background Grids & Glow */}
      <div className="grid-lines absolute inset-0 pointer-events-none" />

      {/* Photo background with dark overlay for legibility */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover pointer-events-none"
            style={{ opacity: 0.4 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, color-mix(in oklab, var(--deep) 96%, transparent) 0%, color-mix(in oklab, var(--deep) 85%, transparent) 50%, color-mix(in oklab, var(--deep) 55%, transparent) 100%)",
            }}
          />
        </>
      )}
      <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        {/* Left Column: Eyebrow, Title, Description, Breadcrumbs & CTAs */}
        <div>
          {/* Eyebrow Badge with pulse dot */}
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            {tagline}
          </span>

          {/* Heading with Gradient Highlight */}
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
            {heroTitle} <span className="text-gradient">{heroHighlight}</span>
          </h1>

          {/* Hero text */}
          <p className="mt-6 max-w-xl text-lg text-deep-foreground/70 leading-relaxed">
            {heroText}
          </p>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mt-6 flex items-center gap-1.5 text-sm text-deep-foreground/60">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 opacity-60" />
            <Link href="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 opacity-60" />
            <span className="text-accent font-medium">{title}</span>
          </nav>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() =>
                openForm({
                  title: `Request a ${title} Quote`,
                  service: title,
                  source: `${slug}-hero`,
                })
              }
              className="shine inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-bold text-accent-foreground shadow-glow transition-transform hover:scale-105 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-deep-foreground/30 px-6 py-3 font-bold transition-colors hover:border-accent hover:text-accent"
            >
              What's included
            </a>
          </div>
        </div>

        {/* Right Column: Hero Graphic Card with Rotating Dashed Border & Stats */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Rotating dashed border ring */}
          <div className="absolute -inset-4 animate-spin-slow rounded-[2.5rem] border-2 border-dashed border-accent/20 pointer-events-none" />

          {/* Glass Card */}
          <div className="relative rounded-[2rem] border border-deep-foreground/10 bg-deep/60 p-6 backdrop-blur">
            {/* Card Header */}
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 animate-float place-items-center rounded-2xl bg-accent-gradient text-accent-foreground shadow-glow">
                {renderIcon()}
              </span>
              <div>
                <p className="text-sm text-deep-foreground/60 font-semibold">
                  RoyalTech Innovation
                </p>
                <p className="text-xl font-bold text-white">{title}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-deep-foreground/10 bg-deep-foreground/5 p-4 transition-colors hover:border-accent/50 hover:bg-accent/10"
                >
                  <p className="text-2xl font-black text-accent md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-deep-foreground/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
