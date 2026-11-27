"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { FaArrowRight, FaCubes, FaMagnifyingGlassChart, FaPlay, FaUsers } from "react-icons/fa6";
import { SiFigma } from "react-icons/si";
import { useFormModal } from "@/components/FormModal";
import { FAQS, TOOLS, type ToolKey } from "@/data/uiux-page";
import { Reveal } from "@/components/mobile-app/client";
import { Browser, SiteBefore, SiteLanding } from "./Sites";

/** Opens the shared consultation form with this page as the lead source. */
export function UxQuoteButton({
  service,
  className = "ma-btn ma-btn--primary",
  title = "Start Your Design Project",
  children,
}: {
  service: string;
  className?: string;
  title?: string;
  children: ReactNode;
}) {
  const { openForm } = useFormModal();
  return (
    <button type="button" className={className} onClick={() => openForm({ title, source: "ui-ux-design-page", service })}>
      {children}
    </button>
  );
}

/** Drag to reveal the finished design over its wireframe. */
export function WireCompare() {
  const [pos, setPos] = useState(52);
  return (
    <div className="ux-cmp" style={{ "--pos": `${pos}%` } as CSSProperties}>
      <div className="ux-cmp-stage">
        <Browser
          url="northwind.studio"
          label="Website design shown as a grayscale wireframe on the left and the finished high-fidelity interface on the right"
        >
          <div className="ux-cmp-stack">
            <SiteLanding />
            <div className="ux-cmp-wire">
              <SiteLanding wire />
            </div>
          </div>
        </Browser>
        <span className="ux-cmp-handle" aria-hidden="true">
          <i />
        </span>
        <span className="ux-cmp-tag l" aria-hidden="true">
          Wireframe
        </span>
        <span className="ux-cmp-tag r" aria-hidden="true">
          High-fidelity UI
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare the wireframe with the finished design"
          className="ux-cmp-range"
        />
      </div>
      <p className="ux-cmp-hint">Drag the handle to compare wireframe and final UI</p>
    </div>
  );
}

/** Drag to reveal an improved interface over a cluttered one. Illustrative sample, not a client result. */
export function AuditCompare() {
  const [pos, setPos] = useState(50);
  return (
    <div className="ux-cmp ux-cmp--audit" style={{ "--pos": `${pos}%` } as CSSProperties}>
      <div className="ux-cmp-stage">
        <Browser
          url="sample-website.com"
          label="Before and after interface comparison: a cluttered layout with confusing navigation on the left and a clean layout with clear hierarchy and simple navigation on the right"
        >
          <div className="ux-cmp-stack">
            <SiteLanding />
            <div className="ux-cmp-wire ux-cmp-before">
              <SiteBefore />
            </div>
          </div>
        </Browser>
        <span className="ux-cmp-handle" aria-hidden="true">
          <i />
        </span>
        <span className="ux-cmp-tag l" aria-hidden="true">
          Before
        </span>
        <span className="ux-cmp-tag r" aria-hidden="true">
          After
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare the cluttered interface with the improved interface"
          className="ux-cmp-range"
        />
      </div>
      <p className="ux-cmp-hint">Drag to compare. Illustrative sample interface, not a client result.</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tools ecosystem                                                     */
/* ------------------------------------------------------------------ */
function ToolMark({ k }: { k: ToolKey }) {
  const cls = `ux-mark ux-mark--${k}`;
  if (k === "figma") {
    return (
      <span className={cls} aria-hidden="true">
        <SiFigma />
      </span>
    );
  }
  if (k === "system") {
    return (
      <span className={cls} aria-hidden="true">
        <FaCubes />
      </span>
    );
  }
  if (k === "proto") {
    return (
      <span className={cls} aria-hidden="true">
        <FaPlay />
      </span>
    );
  }
  if (k === "research") {
    return (
      <span className={cls} aria-hidden="true">
        <FaMagnifyingGlassChart />
      </span>
    );
  }
  if (k === "collab") {
    return (
      <span className={cls} aria-hidden="true">
        <FaUsers />
      </span>
    );
  }
  const txt = { ps: "Ps", ai: "Ai", xd: "Xd", figjam: "FJ" }[k];
  return (
    <span className={cls} aria-hidden="true">
      {txt}
    </span>
  );
}

export function ToolsEcosystem() {
  const [active, setActive] = useState<ToolKey | null>(null);
  return (
    <div className="ux-tools" data-active={active ?? ""}>
      <Reveal>
        <div className="ux-ws" role="img" aria-label="Figma-style design workspace showing layers, desktop and mobile artboards, a component library, prototype links and a properties panel">
          <div className="ux-ws-in" aria-hidden="true">
            <div className="ux-ws-bar">
              <span className="ux-ws-tools">
                {["▲", "▭", "○", "T", "✎"].map((t) => (
                  <i key={t}>{t}</i>
                ))}
              </span>
              <b>Northwind · Design file</b>
              <span className="ux-ws-share">Share</span>
            </div>
            <div className="ux-ws-body">
              <aside className="ux-ws-layers">
                <span className="ux-ws-h">Layers</span>
                {["Cover", "Desktop / Home", "Mobile / Home", "Components", "Assets"].map((l, i) => (
                  <span key={l} className={i === 1 ? "on" : ""}>
                    <i />
                    {l}
                  </span>
                ))}
              </aside>
              <div className="ux-ws-canvas">
                <div className="ux-ws-art" data-tool="figma">
                  <span className="ux-ws-name">Desktop / Home</span>
                  <div className="ux-ws-site">
                    <i className="n" />
                    <i className="h" />
                    <i className="t" />
                    <span className="b" />
                    <div className="im" />
                  </div>
                </div>
                <div className="ux-ws-art ux-ws-art--m" data-tool="figma">
                  <span className="ux-ws-name">Mobile / Home</span>
                  <div className="ux-ws-site m">
                    <i className="h" />
                    <i className="t" />
                    <span className="b" />
                    <div className="im" />
                  </div>
                </div>
                <div className="ux-ws-asset" data-tool="ps">
                  <i />
                  <span>hero-photo</span>
                </div>
                <div className="ux-ws-vector" data-tool="ai">
                  <svg viewBox="0 0 60 40">
                    <path d="M6 32 C14 4 32 4 38 20 S50 34 54 10" />
                    {[
                      [6, 32],
                      [38, 20],
                      [54, 10],
                    ].map(([x, y]) => (
                      <rect key={x} x={x - 2.5} y={y - 2.5} width="5" height="5" />
                    ))}
                  </svg>
                  <span>vector icon</span>
                </div>
                <div className="ux-ws-legacy" data-tool="xd">
                  <b>legacy.xd</b>
                  <span>Imported</span>
                </div>
                <div className="ux-ws-flow" data-tool="figjam">
                  <span>Start</span>
                  <i />
                  <span>Browse</span>
                  <i />
                  <span>Buy</span>
                </div>
                <svg className="ux-ws-links" data-tool="proto" viewBox="0 0 100 60" preserveAspectRatio="none">
                  <path d="M54 30 C64 30 66 20 74 20" />
                </svg>
                <div className="ux-ws-note" data-tool="research">
                  <b>Interview note</b>
                  <i />
                  <i />
                </div>
                <div className="ux-ws-cursor a" data-tool="collab">
                  <span>UI Designer</span>
                </div>
                <div className="ux-ws-cursor b" data-tool="collab">
                  <span>Developer</span>
                </div>
              </div>
              <aside className="ux-ws-props">
                <span className="ux-ws-h">Design</span>
                <div className="ux-ws-sec" data-tool="system">
                  <small>Components</small>
                  <div className="ux-ws-comps">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="ux-ws-sec">
                  <small>Fill</small>
                  <div className="ux-ws-sw">
                    {["#020617", "#2563eb", "#38bdf8", "#67e8f9"].map((c) => (
                      <i key={c} style={{ background: c }} />
                    ))}
                  </div>
                </div>
                <div className="ux-ws-sec">
                  <small>Typography</small>
                  <b>Inter · Bold</b>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Reveal>

      <ul className="ux-tool-list" aria-label="Design tools we use">
        {TOOLS.map((t) => (
          <li key={t.key}>
            <button
              type="button"
              className={active === t.key ? "on" : ""}
              aria-pressed={active === t.key}
              onMouseEnter={() => setActive(t.key)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(t.key)}
              onBlur={() => setActive(null)}
            >
              <ToolMark k={t.key} />
              <span>
                <b>{t.name}</b>
                <em>{t.role}</em>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="ma-sec ma-tint" aria-labelledby="ux-faq-h">
      <div className="ma-wrap ma-faq">
        <Reveal>
          <div className="ma-faq-side">
            <span className="ma-eyebrow">UI/UX design FAQ</span>
            <h2 id="ux-faq-h" className="ma-h2">
              Frequently Asked Questions About UI/UX Design
            </h2>
            <p className="ma-lead">Clear answers about process, tools, timelines and cost. Can&apos;t find yours? Ask our designers.</p>
            <UxQuoteButton service="UI/UX Design" className="ma-btn ma-btn--outline" title="Ask Our Designers">
              Ask Our Designers <FaArrowRight aria-hidden="true" />
            </UxQuoteButton>
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
                    id={`ux-faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`ux-faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="ma-acc-n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ma-acc-q">{f.q}</span>
                    <span className="ma-acc-ic" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`ux-faq-a-${i}`} role="region" aria-labelledby={`ux-faq-q-${i}`} className="ma-acc-p" inert={!isOpen}>
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
