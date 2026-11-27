"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function FaqAccordion({ items }: { items: readonly { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="ms-faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div className={`ms-faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                className="ms-faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="ms-faq-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="ms-faq-question">{item.question}</span>
                <ChevronDown className="ms-faq-chevron" size={18} aria-hidden="true" />
              </button>
            </h3>
            <div className="ms-faq-panel" id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen}>
              <div className="ms-faq-panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export function TabShowcase({
  items,
  label,
  variant = "capabilities",
}: {
  items: readonly TabItem[];
  label: string;
  variant?: "capabilities" | "solutions";
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabsRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? items.length - 1
          : event.key === "ArrowRight"
            ? (index + 1) % items.length
            : (index - 1 + items.length) % items.length;
    setActive(next);
    const buttons = tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[next]?.focus();
  };

  return (
    <div className={`ms-tabs ms-tabs-${variant}`}>
      <div className="ms-tab-list" role="tablist" aria-label={label} ref={tabsRef}>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`${baseId}-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            className={`ms-tab${active === index ? " is-active" : ""}`}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className="ms-tab-index">{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, index) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${index}`}
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={active !== index}
          className="ms-tab-panel"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

export function ScrollReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ms-page");
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("js-reveal");
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return null;
}

