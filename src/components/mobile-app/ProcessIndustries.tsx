"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { INDUSTRIES, PROCESS, type IndustryId } from "@/data/mobile-app-page";
import { Abs, FloatCard, Phone } from "./Phone";
import { Reveal } from "./client";
import {
  BuildScreen,
  DesignScreen,
  DeviceTestScreen,
  DiscoveryScreen,
  IndustryScreen,
  LaunchScreen,
  UpdateScreen,
} from "./Screens";

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

const STAGE_SCREENS = [
  <DiscoveryScreen key="1" />,
  <DesignScreen key="2" level={3} />,
  <BuildScreen key="3" />,
  <DeviceTestScreen key="4" />,
  <LaunchScreen key="5" />,
  <UpdateScreen key="6" />,
];

const STAGE_NOTES = [
  { t: "Brief captured", s: "Goals and audience defined", dot: "blue" },
  { t: "Interface designed", s: "Prototype ready to review", dot: "cyan" },
  { t: "Build in progress", s: "Progress builds shared", dot: "blue" },
  { t: "Device testing", s: "Compatibility checks", dot: "green" },
  { t: "Ready for store review", s: "Submission support", dot: "green" },
  { t: "Update available", s: "Ongoing improvements", dot: "amber" },
] as const;

export function Process() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % PROCESS.length), 4800);
    return () => window.clearInterval(id);
  }, [auto, inView]);

  const select = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  const step = PROCESS[active];
  const note = STAGE_NOTES[active];

  return (
    <section id="process" className="ma-sec ma-light" aria-labelledby="ma-proc-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Mobile app development process</span>
            <h2 id="ma-proc-h" className="ma-h2">
              From Idea to App Store — Our Development Process
            </h2>
            <p className="ma-lead">
              A clear, milestone-based workflow so you always know what is being designed, built and tested.
            </p>
          </div>
        </Reveal>

        <div ref={ref} className="ma-proc">
          <ol className="ma-tl" style={{ "--p": active } as CSSProperties}>
            {PROCESS.map((p, i) => (
              <li
                key={p.num}
                className={`ma-tl-i${i === active ? " on" : ""}${i < active ? " done" : ""}`}
                onClick={() => select(i)}
              >
                <span className="ma-tl-node" aria-hidden="true">
                  {p.num}
                </span>
                <div className="ma-tl-body">
                  <h3 className="ma-tl-t">
                    <button type="button" onClick={() => select(i)} aria-current={i === active ? "step" : undefined}>
                      {p.title}
                    </button>
                  </h3>
                  <p className="ma-tl-p">{p.text}</p>
                  <ul className="ma-tl-d">
                    {p.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="ma-proc-stage">
            <div className="ma-proc-panel">
              <span className="ma-proc-k">Stage {step.num}</span>
              <div className="ma-proc-title">{step.title}</div>
              <ul className="ma-proc-d">
                {step.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="ma-stage ma-proc-phone" style={{ aspectRatio: "1 / 0.92" }}>
              <span className="ma-blob" aria-hidden="true" />
              <Abs l={29} t={0} w={42} z={2} float={0}>
                <Phone variant="ios" label={`Mobile app at stage ${step.num}: ${step.title}`}>
                  <div className="ma-xfade">
                    {STAGE_SCREENS.map((s, i) => (
                      <div key={i} className={`ma-xfade-i${i === active ? " on" : ""}`}>
                        {s}
                      </div>
                    ))}
                  </div>
                </Phone>
              </Abs>
              <Abs key={active} r={0} t={30} w={38} z={5} float={1} className="ma-pop">
                <FloatCard tone="light" title={note.t} text={note.s} dot={note.dot} />
              </Abs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export function Industries() {
  const [active, setActive] = useState<IndustryId>("ecommerce");
  const current = INDUSTRIES.find((i) => i.id === active)!;

  return (
    <section id="industries" className="ma-sec ma-light" aria-labelledby="ma-ind-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head">
            <span className="ma-eyebrow">Industries we serve</span>
            <h2 id="ma-ind-h" className="ma-h2">
              Mobile Solutions for Businesses Across Industries
            </h2>
            <p className="ma-lead">
              Every sector has its own users, rules and workflows. Our mobile app developers adapt interfaces, integrations and
              features to the way your industry works.
            </p>
          </div>
        </Reveal>

        <div className="ma-ind">
          <div className="ma-ind-visual">
            <div className="ma-ind-phone">
              <Phone variant="ios" label={`${current.name} mobile app preview`}>
                <div key={active} className="ma-fade">
                  <IndustryScreen id={active} />
                </div>
              </Phone>
              <span className="ma-ind-badge" aria-hidden="true">
                {current.name}
              </span>
            </div>
          </div>

          <ul className="ma-ind-list">
            {INDUSTRIES.map((ind, i) => (
              <li key={ind.id}>
                <button
                  type="button"
                  className={`ma-ind-item${ind.id === active ? " on" : ""}`}
                  aria-pressed={ind.id === active}
                  onClick={() => setActive(ind.id)}
                  onMouseEnter={() => setActive(ind.id)}
                  onFocus={() => setActive(ind.id)}
                >
                  <span className="ma-ind-n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="ma-ind-main">
                    <span className="ma-ind-t">{ind.name}</span>
                    <span className="ma-ind-s">{ind.text}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
