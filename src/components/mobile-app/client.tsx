"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useFormModal } from "@/components/FormModal";

/**
 * Fades + lifts its children in when they scroll into view.
 * Content is fully visible on the server and for reduced-motion users; the hidden starting
 * state is only applied after mount, and only to blocks that are still below the fold.
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

    el.classList.add("ma-pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ma-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
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
export function QuoteButton({
  service,
  className = "ma-btn ma-btn--primary",
  title = "Request a Free Consultation",
  children,
}: {
  service: string;
  className?: string;
  title?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button
      type="button"
      className={className}
      onClick={() => openForm({ title, source: "mobile-app-development-page", service })}
    >
      {children}
    </button>
  );
}
