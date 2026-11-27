"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FAQS } from "@/data/mobile-app-page";
import { QuoteButton, Reveal } from "./client";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="ma-sec ma-light" aria-labelledby="ma-faq-h">
      <div className="ma-wrap ma-faq">
        <Reveal>
          <div className="ma-faq-side">
            <span className="ma-eyebrow">FAQ</span>
            <h2 id="ma-faq-h" className="ma-h2">
              Frequently Asked Questions About Mobile App Development
            </h2>
            <p className="ma-lead">
              Straight answers about cost, timelines, platforms, publishing and support. Can&apos;t find yours? Ask us directly.
            </p>
            <QuoteButton service="Mobile App Development" className="ma-btn ma-btn--outline">
              Ask Our Team <FaArrowRight aria-hidden="true" />
            </QuoteButton>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dwnnakrrh/image/upload/v1795681192/FAQ3_2_s4amwg.png"
              alt="Frequently asked questions about mobile app development"
              width={1080}
              height={1080}
              loading="lazy"
              draggable={false}
              className="ma-faq-img"
            />
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
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="ma-acc-n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ma-acc-q">{f.q}</span>
                    <span className="ma-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="ma-acc-p" inert={!isOpen}>
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
