"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";

/**
 * Fades + lifts its children in when they scroll into view.
 * Content is fully visible on the server and for reduced-motion users; the hidden starting
 * state is applied only after mount, and only to blocks that are still below the fold.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("ic-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ic-in");
          io.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

/** Opens the shared consultation form with this page as the lead source. */
export function ConsultButton({
  service,
  className = "ic-btn ic-btn--primary",
  title = "Book a Free Consultation",
  children,
}: {
  service: string;
  className?: string;
  title?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "it-consulting-page", service })}>
      {children}
    </button>
  );
}

/** Accessible accordion. Answers stay in the DOM (closed ones are inert) so the text is always indexable. */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="ic-acc">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`ic-acc-i${isOpen ? " on" : ""}`}>
            <h3 className="ic-acc-h">
              <button
                type="button"
                id={`ic-faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`ic-faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="ic-acc-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ic-acc-q">{f.q}</span>
                <span className="ic-acc-ic" aria-hidden="true" />
              </button>
            </h3>
            <div id={`ic-faq-a-${i}`} role="region" aria-labelledby={`ic-faq-q-${i}`} className="ic-acc-p" inert={!isOpen}>
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
