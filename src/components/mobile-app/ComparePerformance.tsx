import { FaArrowRight } from "react-icons/fa6";
import { COMPARE, COMPARE_ROWS, PERFORMANCE } from "@/data/mobile-app-page";
import { Abs, FloatCard, Phone } from "./Phone";
import { QuoteButton, Reveal } from "./client";
import { ChecklistScreen } from "./Screens";
import { QualityWindow } from "./Windows";

/** One table that restacks into labelled groups on phones (no duplicated markup). */
export function Compare() {
  return (
    <section id="compare" className="ma-sec ma-tint" aria-labelledby="ma-cmp-h">
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head ma-sec-head--center">
            <span className="ma-eyebrow">Native vs cross-platform</span>
            <h2 id="ma-cmp-h" className="ma-h2">
              Choosing the Right Mobile App Development Approach
            </h2>
            <p className="ma-lead">
              Every approach has strengths. This overview explains how native Android, native iOS, cross-platform and custom
              mobile app development differ, so you can choose with confidence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="ma-table-wrap">
            <table className="ma-table">
              <caption className="ma-sr">Comparison of native Android, native iOS, cross-platform and custom mobile app development</caption>
              <thead>
                <tr>
                  <td className="ma-table-corner" />
                  {COMPARE.map((c) => (
                    <th key={c.name} scope="col">
                      <span className="ma-table-tag">{c.tag}</span>
                      <span className="ma-table-name">{c.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, ri) => (
                  <tr key={row}>
                    <th scope="row">{row}</th>
                    {COMPARE.map((c) => (
                      <td key={c.name} data-label={c.name}>
                        {c.values[ri]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ma-compare-foot">
            <p>
              There is no single best choice for every project. The right approach depends on your audience, features, budget
              and roadmap, and we will recommend the one that fits.
            </p>
            <QuoteButton service="Mobile App Development" className="ma-btn ma-btn--outline">
              Get a Recommendation <FaArrowRight aria-hidden="true" />
            </QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Quality dashboard made of checklists only: no invented scores or guarantees. */
export function PerformanceSection() {
  return (
    <section id="performance" className="ma-sec ma-navy ma-dark" aria-labelledby="ma-perf-h">
      <div className="ma-grid-bg" aria-hidden="true" />
      <div className="ma-wrap">
        <Reveal>
          <div className="ma-sec-head">
            <span className="ma-eyebrow">Quality &amp; security</span>
            <h2 id="ma-perf-h" className="ma-h2">
              Built for Performance, Security &amp; Growth
            </h2>
            <p className="ma-lead">
              We develop mobile applications with a focus on performance, usability, technical quality, and long-term
              scalability.
            </p>
          </div>
        </Reveal>

        <div className="ma-perf">
          <Reveal delay={80}>
            <div className="ma-split-visual">
              <div className="ma-stage" style={{ aspectRatio: "1 / 0.84" }}>
                <span className="ma-hv-glow" aria-hidden="true" />
                <Abs l={0} t={4} w={86} z={1} float={0}>
                  <QualityWindow />
                </Abs>
                <Abs r={0} t={20} w={27} z={3} rot="rotateZ(3deg)" float={1}>
                  <Phone variant="android" tone="dark" label="Release checklist on an Android phone">
                    <ChecklistScreen />
                  </Phone>
                </Abs>
                <Abs l={2} b={0} w={38} z={5} float={2}>
                  <FloatCard tone="glass" title="Testing workflow" text="Planned for every release" dot="cyan" />
                </Abs>
              </div>
            </div>
          </Reveal>

          <ul className="ma-perf-list">
            {PERFORMANCE.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={(i % 4) * 50}>
                  <span className="ma-perf-t">{p.title}</span>
                  <span className="ma-perf-s">{p.text}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
