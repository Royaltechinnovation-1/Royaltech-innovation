"use client";

import { useState, type ReactNode } from "react";
import { FaArrowRight, FaCheck, FaHeart, FaComment, FaPaperPlane } from "react-icons/fa6";
import { useFormModal } from "@/components/FormModal";
import { Reveal } from "@/components/mobile-app/client";
import { FAQS, INDUSTRIES } from "@/data/mk-page";

/** Opens the shared consultation form with this page as the lead source. */
export function DmQuoteButton({
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
    <button type="button" className={className} onClick={() => openForm({ title, source: "digital-marketing-page", service })}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Industries: list on the left, campaign preview on the right         */
/* ------------------------------------------------------------------ */
export function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section id="industries" className="ma-sec ma-light" aria-labelledby="mk-ind-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Industries we serve</span>
            <h2 id="mk-ind-h" className="ma-h2 ma-h2--xl">
              Digital Marketing Solutions Across Industries
            </h2>
            <p className="ma-lead">
              Every sector has its own buyers, search behavior and rules. Choose an industry to see how our online marketing
              services adapt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mk-ind">
            <div className="mk-ind-tabs" role="tablist" aria-label="Industries" aria-orientation="vertical">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.id}
                  type="button"
                  role="tab"
                  id={`mk-ind-t-${ind.id}`}
                  aria-selected={active === i}
                  aria-controls={`mk-ind-p-${ind.id}`}
                  tabIndex={active === i ? 0 : -1}
                  className={active === i ? "on" : ""}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      setActive((active + 1) % INDUSTRIES.length);
                      (e.currentTarget.parentElement?.children[(active + 1) % INDUSTRIES.length] as HTMLElement)?.focus();
                    }
                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      const n = (active - 1 + INDUSTRIES.length) % INDUSTRIES.length;
                      setActive(n);
                      (e.currentTarget.parentElement?.children[n] as HTMLElement)?.focus();
                    }
                  }}
                >
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  {ind.name}
                </button>
              ))}
            </div>

            <div className="mk-ind-stage">
              {INDUSTRIES.map((ind, i) => (
                <div
                  key={ind.id}
                  id={`mk-ind-p-${ind.id}`}
                  role="tabpanel"
                  aria-labelledby={`mk-ind-t-${ind.id}`}
                  hidden={active !== i}
                  className="mk-ind-panel"
                >
                  <div className="mk-ind-copy">
                    <h3>{ind.name}</h3>
                    <p>{ind.text}</p>
                    <ul aria-label={`${ind.name} marketing focus`}>
                      {ind.channels.map((c) => (
                        <li key={c}>
                          <FaCheck aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mk-ind-scene" aria-hidden="true">
                    <div className="mk-sc-serp">
                      <span className="q">
                        <i />
                        {ind.query}
                      </span>
                      <span className="ad">
                        <em>Ad</em> yourbrand.com
                      </span>
                      <b>{ind.headline}</b>
                      <i className="sk" />
                      <i className="sk s" />
                    </div>
                    <div className="mk-sc-post">
                      <div className="img">
                        <span className="c1" />
                        <span className="c2" />
                        <strong>{ind.headline}</strong>
                      </div>
                      <div className="act">
                        <FaHeart />
                        <FaComment />
                        <FaPaperPlane />
                      </div>
                      <span className="bt">{ind.cta}</span>
                    </div>
                    <div className="mk-sc-mail">
                      <span className="bar" />
                      <b>{ind.name}</b>
                      <i className="sk" />
                      <i className="sk s" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="ma-sec ma-light" aria-labelledby="mk-faq-h">
      <div className="ma-wrap ma-faq">
        <Reveal>
          <div className="ma-faq-side">
            <span className="ma-eyebrow">Digital marketing FAQ</span>
            <h2 id="mk-faq-h" className="ma-h2">
              Frequently Asked Questions About Digital Marketing
            </h2>
            <p className="ma-lead">Clear answers about services, cost, timelines and results. Can&apos;t find yours? Ask our experts.</p>
            <DmQuoteButton service="Digital Marketing" className="ma-btn ma-btn--outline" title="Ask Our Experts">
              Ask Our Experts <FaArrowRight aria-hidden="true" />
            </DmQuoteButton>
          </div>
        </Reveal>

        <div className="ma-acc">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`ma-acc-i${isOpen ? " on" : ""}`}>
                <h3 className="ma-acc-h">
                  <button
                    type="button"
                    id={`mk-faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`mk-faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="ma-acc-n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ma-acc-q">{f.q}</span>
                    <span className="ma-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`mk-faq-a-${i}`} role="region" aria-labelledby={`mk-faq-q-${i}`} className="ma-acc-p" inert={!isOpen}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
