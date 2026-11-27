"use client";

import { ArrowRight } from "lucide-react";
import { useFormModal } from "@/components/FormModal";

interface ServiceCtaBandProps {
  serviceTitle: string;
  customTitle?: string;
  customText?: string;
}

export default function ServiceCtaBand({
  serviceTitle,
  customTitle,
  customText,
}: ServiceCtaBandProps) {
  const { openForm } = useFormModal();

  const title =
    customTitle || `Let's discuss your ${serviceTitle.toLowerCase()} project`;
  const text =
    customText ||
    "Tell us about your project and get a free consultation and estimate within 24 hours.";

  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-deep-gradient p-10 text-deep-foreground md:p-16">
        {/* Decorative Grid Lines */}
        <div className="grid-lines absolute inset-0 opacity-60 pointer-events-none" />

        {/* Rotating Dashed Circle */}
        <div className="absolute -right-20 -top-20 h-72 w-72 animate-spin-slow rounded-full border-2 border-dashed border-accent/30 pointer-events-none" />

        {/* Content Row */}
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-deep-foreground/70 text-lg leading-relaxed">
              {text}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              openForm({
                title: `Request a ${serviceTitle} Quote`,
                service: serviceTitle,
                source: "cta-band",
              })
            }
            className="shine group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-gradient px-7 py-4 font-bold text-accent-foreground shadow-glow transition-transform hover:scale-105 cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
