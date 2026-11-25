"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceFaq as FaqItem } from "@/data/services-data";

interface ServiceFaqProps {
  serviceTitle: string;
  faqs: FaqItem[];
  eyebrow?: string;
  text?: string;
}

export default function ServiceFaq({
  serviceTitle,
  faqs,
  eyebrow = "FAQ",
  text,
}: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const description =
    text || "Answers to common questions from our clients.";

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 lg:grid-cols-[1fr_1.4fr]">
      {/* Left Column: Heading */}
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
          — {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
          {serviceTitle} FAQs
        </h2>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          {description}
        </p>
      </div>

      {/* Right Column: Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border bg-card px-6 transition-colors ${
                isOpen ? "border-ring shadow-card" : "border-border"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold cursor-pointer text-foreground hover:no-underline"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-4 pt-0 text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
