import type { ReactNode } from "react";
import { ASSESSMENT_AREAS, ROADMAP_PHASES } from "@/data/it-consulting-page";
import { ArchLayers, type ArchLayer } from "./primitives";

/* ------------------------------------------------------------------ */
/* Digital transformation: four small stage glyphs                     */
/* ------------------------------------------------------------------ */

export function StageGlyph({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 160 84" className="ic-glyph" aria-hidden="true">
      {index === 0 && (
        <g>
          <rect x="10" y="8" width="84" height="68" rx="6" className="ic-g-box" />
          {[0, 1, 2, 3].map((r) => (
            <path key={r} d={`M10 ${24 + r * 13} H94`} className="ic-g-line" />
          ))}
          {[0, 1, 2].map((c) => (
            <path key={c} d={`M${38 + c * 20} 8 V76`} className="ic-g-line" />
          ))}
          <rect x="108" y="18" width="42" height="52" rx="4" className="ic-g-box dashed" />
          <path d="M116 32 H142 M116 42 H138 M116 52 H134" className="ic-g-line" />
        </g>
      )}
      {index === 1 && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={10 + i * 50} y="12" width="42" height="28" rx="6" className="ic-g-box hot" />
              <rect x={17 + i * 50} y="20" width="18" height="4" rx="2" className="ic-g-fill" />
              <rect x={17 + i * 50} y="28" width="26" height="4" rx="2" className="ic-g-line-f" />
            </g>
          ))}
          <rect x="10" y="50" width="142" height="26" rx="8" className="ic-g-box" />
          <text x="81" y="67" textAnchor="middle" className="ic-g-t">
            Cloud platform
          </text>
        </g>
      )}
      {index === 2 && (
        <g>
          <path d="M30 22 L80 42 L130 22 M30 64 L80 42 L130 64" className="ic-g-link" />
          <circle cx="80" cy="42" r="14" className="ic-g-box hot" />
          {[
            [30, 22],
            [130, 22],
            [30, 64],
            [130, 64],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="9" className="ic-g-box" />
          ))}
        </g>
      )}
      {index === 3 && (
        <g>
          <rect x="10" y="6" width="140" height="72" rx="8" className="ic-g-box" />
          {[16, 28, 20, 38, 30, 46, 36].map((h, i) => (
            <rect key={i} x={20 + i * 19} y={68 - h} width="12" height={h} rx="2.5" className="ic-g-fill" />
          ))}
          <path d="M20 40 C 44 32, 60 36, 84 24 S 124 18, 140 12" className="ic-g-curve" />
        </g>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Roadmap board (decorative swim-lanes under the phase list)          */
/* ------------------------------------------------------------------ */

const LANES: { label: string; bars: { from: number; to: number; text: string; tone?: 1 | 2 | 3 }[] }[] = [
  {
    label: "Software & systems",
    bars: [
      { from: 1, to: 3, text: "Review & select", tone: 1 },
      { from: 3, to: 4, text: "Integrate", tone: 2 },
      { from: 4, to: 5, text: "Optimize", tone: 3 },
    ],
  },
  {
    label: "Infrastructure",
    bars: [
      { from: 1, to: 2, text: "Assess", tone: 3 },
      { from: 2, to: 4, text: "Plan & migrate", tone: 1 },
      { from: 4, to: 5, text: "Scale", tone: 2 },
    ],
  },
  {
    label: "Process & automation",
    bars: [
      { from: 2, to: 3, text: "Map workflows", tone: 2 },
      { from: 3, to: 5, text: "Automate & digitize", tone: 1 },
    ],
  },
  {
    label: "Risk & budget",
    bars: [{ from: 1, to: 5, text: "Technology risk, investment and budget review", tone: 3 }],
  },
];

export function RoadmapBoard() {
  return (
    <div className="ic-rb" role="img" aria-label="Technology roadmap board with four phases (current state, short-term, mid-term and long-term) and swim-lanes for software, infrastructure, process automation, and risk and budget">
      <div className="ic-rb-head">
        <span />
        {ROADMAP_PHASES.map((p, i) => (
          <div key={p.id} className="ic-rb-ph">
            <i aria-hidden="true">{i === 3 ? "◆" : "●"}</i>
            <b>{p.label}</b>
          </div>
        ))}
      </div>
      <div className="ic-rb-line" aria-hidden="true" />
      {LANES.map((l) => (
        <div key={l.label} className="ic-rb-lane">
          <span className="ic-rb-lbl">{l.label}</span>
          {l.bars.map((b) => (
            <div key={b.text} className={`ic-rb-bar t${b.tone ?? 1}`} style={{ gridColumn: `${b.from + 1} / ${b.to + 1}` }}>
              {b.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Infrastructure & architecture: layered diagram + numbered legend    */
/* ------------------------------------------------------------------ */

export const ARCH_DIAGRAM_LAYERS: ArchLayer[] = [
  { label: "Users & channels", chips: ["Web portal", "Mobile app", "Partners", "Branches"] },
  { label: "Business applications", chips: ["CRM", "ERP", "Website", "Custom apps"] },
  { label: "Integration layer", band: "APIs · Middleware · Workflow automation", glow: true },
  { label: "Data systems", chips: ["Databases", "Data warehouse", "Analytics"] },
  { label: "Cloud platform", chips: ["Compute", "Storage", "Cloud migration"] },
  { label: "Network & servers", chips: ["Network layers", "Server estate", "Backup"] },
];

export function ArchitectureDiagram() {
  return (
    <div
      className="ic-arch-wrap"
      role="img"
      aria-label="Layered enterprise architecture diagram showing users and channels, business applications, an integration layer, data systems, a cloud platform and network and servers, with a security layer spanning all of them"
    >
      <div className="ic-arch-head">
        <span>Enterprise architecture</span>
        <span>Illustrative reference model</span>
      </div>
      <ArchLayers layers={ARCH_DIAGRAM_LAYERS} security="Security & governance across every layer" className="ic-arch--big" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Business process: before / after                                    */
/* ------------------------------------------------------------------ */

const Box = ({ x, y, w = 86, h = 32, label, cls = "" }: { x: number; y: number; w?: number; h?: number; label: string; cls?: string }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" className={`ic-ba-node ${cls}`.trim()} />
    <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" className="ic-svg-t sm">
      {label}
    </text>
  </g>
);

export function BeforeAfterVisual({ side }: { side: "before" | "after" }) {
  if (side === "before") {
    return (
      <svg viewBox="0 0 320 250" className="ic-ba-svg" role="img" aria-label="Before: disconnected systems and manual tasks feeding into a single approval bottleneck">
        <g className="ic-ba-lines bad">
          <path d="M96 48 C 130 48, 130 112, 146 118" />
          <path d="M96 122 C 120 122, 130 124, 146 126" />
          <path d="M96 196 C 130 196, 130 140, 146 132" />
          <path d="M96 48 C 118 80, 112 160, 96 196" className="cross" />
        </g>
        <Box x={10} y={32} label="Spreadsheet" />
        <Box x={10} y={106} label="Email" />
        <Box x={10} y={180} label="Legacy app" />
        <rect x="146" y="98" width="68" height="52" rx="10" className="ic-ba-node warn" />
        <text x="180" y="120" textAnchor="middle" className="ic-svg-t sm">
          Approval
        </text>
        <text x="180" y="135" textAnchor="middle" className="ic-svg-t sm">
          queue
        </text>
        <rect x="148" y="70" width="64" height="18" rx="9" className="ic-pf-tag" />
        <text x="180" y="82.5" textAnchor="middle" className="ic-svg-s tag">
          Bottleneck
        </text>
        <path d="M214 124 H238" className="ic-ba-slow" />
        <Box x={238} y={108} w={72} label="Report" cls="dim" />
        <text x="160" y="240" textAnchor="middle" className="ic-svg-s">
          Manual re-entry · delays · no shared view
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 250" className="ic-ba-svg" role="img" aria-label="After: connected systems feeding an automated workflow and a live dashboard">
      <g className="ic-ba-lines good">
        <path d="M96 48 C 126 48, 126 112, 146 120" />
        <path d="M96 122 H146" />
        <path d="M96 196 C 126 196, 126 132, 146 126" />
        <path d="M214 124 H236" />
      </g>
      <Box x={10} y={32} label="Spreadsheet" cls="hot" />
      <Box x={10} y={106} label="CRM / ERP" cls="hot" />
      <Box x={10} y={180} label="Modern app" cls="hot" />
      <rect x="146" y="98" width="68" height="52" rx="10" className="ic-ba-node core" />
      <text x="180" y="120" textAnchor="middle" className="ic-svg-t sm hub">
        Automated
      </text>
      <text x="180" y="135" textAnchor="middle" className="ic-svg-t sm hub">
        workflow
      </text>
      <rect x="238" y="78" width="74" height="92" rx="9" className="ic-sv-dash" />
      {[26, 44, 34, 54].map((h, i) => (
        <rect key={i} x={246 + i * 16} y={160 - h} width="10" height={h} rx="2.5" className="ic-sv-bar" />
      ))}
      <rect x="246" y="86" width="40" height="5" rx="2.5" className="ic-sv-line hot" />
      <text x="160" y="240" textAnchor="middle" className="ic-svg-s">
        Connected systems · standard steps · live visibility
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Technology ecosystem hub                                            */
/* ------------------------------------------------------------------ */

function MiniUi({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 120 64" className="ic-mini" aria-hidden="true">
      {kind === "crm" && (
        <g>
          {[0, 1, 2].map((c) => (
            <g key={c}>
              <rect x={6 + c * 38} y="6" width="32" height="52" rx="4" className="ic-m-box" />
              <rect x={10 + c * 38} y="12" width="16" height="3" rx="1.5" className="ic-m-fill" />
              <rect x={10 + c * 38} y="20" width="24" height="9" rx="2.5" className="ic-m-card" />
              {c !== 2 && <rect x={10 + c * 38} y="33" width="24" height="9" rx="2.5" className="ic-m-card" />}
              {c === 0 && <rect x={10} y="46" width="24" height="7" rx="2.5" className="ic-m-card" />}
            </g>
          ))}
        </g>
      )}
      {kind === "erp" && (
        <g>
          <rect x="6" y="6" width="108" height="52" rx="5" className="ic-m-box" />
          <rect x="6" y="6" width="108" height="11" rx="5" className="ic-m-bar" />
          {[0, 1, 2, 3].map((r) => (
            <g key={r}>
              <rect x="12" y={22 + r * 9} width="22" height="3.5" rx="1.7" className="ic-m-fill" />
              <rect x="42" y={22 + r * 9} width="30" height="3.5" rx="1.7" className="ic-m-line" />
              <rect x="82" y={22 + r * 9} width="24" height="3.5" rx="1.7" className="ic-m-line" />
            </g>
          ))}
        </g>
      )}
      {kind === "web" && (
        <g>
          <rect x="6" y="6" width="108" height="52" rx="5" className="ic-m-box" />
          <rect x="6" y="6" width="108" height="10" rx="5" className="ic-m-bar" />
          <circle cx="13" cy="11" r="1.8" className="ic-m-fill" />
          <circle cx="19" cy="11" r="1.8" className="ic-m-fill" />
          <rect x="14" y="22" width="46" height="5" rx="2.5" className="ic-m-fill" />
          <rect x="14" y="31" width="34" height="3.5" rx="1.7" className="ic-m-line" />
          <rect x="14" y="40" width="22" height="8" rx="4" className="ic-m-card hot" />
          <rect x="68" y="22" width="38" height="28" rx="4" className="ic-m-card" />
        </g>
      )}
      {kind === "mobile" && (
        <g>
          <rect x="40" y="3" width="40" height="58" rx="7" className="ic-m-box" />
          <rect x="52" y="7" width="16" height="3" rx="1.5" className="ic-m-line" />
          <rect x="45" y="16" width="30" height="10" rx="3" className="ic-m-card hot" />
          <rect x="45" y="30" width="30" height="7" rx="3" className="ic-m-card" />
          <rect x="45" y="40" width="30" height="7" rx="3" className="ic-m-card" />
          <rect x="45" y="50" width="30" height="7" rx="3" className="ic-m-card" />
        </g>
      )}
      {kind === "dash" && (
        <g>
          <rect x="6" y="6" width="108" height="52" rx="5" className="ic-m-box" />
          {[20, 32, 24, 40, 30].map((h, i) => (
            <rect key={i} x={14 + i * 11} y={52 - h} width="7" height={h} rx="2" className="ic-m-fill" />
          ))}
          <circle cx="86" cy="32" r="14" className="ic-m-ring" />
          <path d="M86 18 A14 14 0 0 1 100 32" className="ic-m-arc" />
        </g>
      )}
      {kind === "cloud" && (
        <g>
          <circle cx="46" cy="36" r="12" className="ic-m-cloud" />
          <circle cx="62" cy="28" r="16" className="ic-m-cloud" />
          <circle cx="80" cy="36" r="12" className="ic-m-cloud" />
          <rect x="46" y="34" width="34" height="14" className="ic-m-cloud" />
          <path d="M50 54 V60 M62 54 V60 M74 54 V60" className="ic-m-link" />
        </g>
      )}
      {kind === "analytics" && (
        <g>
          <rect x="6" y="6" width="108" height="52" rx="5" className="ic-m-box" />
          <path d="M14 14 V50 H106" className="ic-m-line s" />
          <path d="M16 44 C 30 38, 38 28, 52 32 S 76 22, 90 18 S 100 20, 104 14" className="ic-m-curve" />
          <circle cx="90" cy="18" r="2.6" className="ic-m-fill" />
        </g>
      )}
      {kind === "auto" && (
        <g>
          <rect x="6" y="22" width="26" height="20" rx="5" className="ic-m-card hot" />
          <rect x="48" y="8" width="26" height="16" rx="5" className="ic-m-card" />
          <rect x="48" y="40" width="26" height="16" rx="5" className="ic-m-card" />
          <rect x="90" y="22" width="24" height="20" rx="5" className="ic-m-card hot" />
          <path d="M32 32 C 40 32, 40 16, 48 16 M32 32 C 40 32, 40 48, 48 48 M74 16 C 82 16, 82 32, 90 32 M74 48 C 82 48, 82 32, 90 32" className="ic-m-link s" />
        </g>
      )}
    </svg>
  );
}

const ECO_CELLS: { kind: string; label: string }[] = [
  { kind: "crm", label: "CRM" },
  { kind: "web", label: "Website" },
  { kind: "dash", label: "Business dashboard" },
  { kind: "erp", label: "ERP" },
  { kind: "hub", label: "" },
  { kind: "cloud", label: "Cloud" },
  { kind: "mobile", label: "Mobile app" },
  { kind: "analytics", label: "Analytics" },
  { kind: "auto", label: "Automation" },
];

export function EcosystemHub() {
  return (
    <div
      className="ic-eco"
      role="img"
      aria-label="Technology ecosystem diagram connecting CRM, ERP, website, mobile app, business dashboard, cloud, analytics and automation around a planned integration layer"
    >
      <svg className="ic-eco-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {[
          [16.5, 17],
          [50, 17],
          [83.5, 17],
          [16.5, 50],
          [83.5, 50],
          [16.5, 83],
          [50, 83],
          [83.5, 83],
        ].map(([x, y]) => (
          <path key={`${x}-${y}`} d={`M50 50 L${x} ${y}`} />
        ))}
      </svg>
      {ECO_CELLS.map((c) =>
        c.kind === "hub" ? (
          <div key="hub" className="ic-eco-hub">
            <b>Your business</b>
            <span>Joined through a planned integration layer</span>
          </div>
        ) : (
          <div key={c.kind} className="ic-eco-c">
            <MiniUi kind={c.kind} />
            <span>{c.label}</span>
          </div>
        ),
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Assessment dashboard                                                */
/* ------------------------------------------------------------------ */

export function AssessmentBoard({ footer }: { footer?: ReactNode }) {
  const groups = Array.from(new Set(ASSESSMENT_AREAS.map((a) => a.group)));
  return (
    <div className="ic-win ic-win--light ic-win--static ic-ab-win">
      <div className="ic-win-bar">
        <i />
        <i />
        <i />
        <span>Business technology assessment</span>
      </div>
      <div className="ic-ab">
        <div className="ic-ab-map" role="img" aria-label="Map of a technology environment: infrastructure, software, integrations and workflows connected around the business">
          <svg viewBox="0 0 280 270" aria-hidden="true">
            <circle cx="140" cy="135" r="104" className="ic-ab-ring" />
            <circle cx="140" cy="135" r="64" className="ic-ab-ring dashed" />
            <g className="ic-tv-links">
              <path d="M140 98 V54" />
              <path d="M177 135 H220" />
              <path d="M140 172 V216" />
              <path d="M103 135 H60" />
            </g>
            <circle cx="140" cy="135" r="36" className="ic-ab-core" />
            <text x="140" y="132" textAnchor="middle" className="ic-svg-t hub">
              Your
            </text>
            <text x="140" y="146" textAnchor="middle" className="ic-svg-t hub">
              business
            </text>
            {[
              [140, 38, "Infrastructure"],
              [236, 135, "Software"],
              [140, 232, "Integrations"],
              [44, 135, "Workflows"],
            ].map(([x, y, l]) => (
              <g key={l as string}>
                <rect x={(x as number) - 42} y={(y as number) - 14} width="84" height="28" rx="9" className="ic-sv-node hot light" />
                <text x={x as number} y={(y as number) + 4} textAnchor="middle" className="ic-svg-t sm light">
                  {l as string}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="ic-ab-groups">
          {groups.map((g) => (
            <section key={g} className="ic-ab-g">
              <h3>{g}</h3>
              <ul>
                {ASSESSMENT_AREAS.filter((a) => a.group === g).map((a) => (
                  <li key={a.title}>
                    <b>{a.title}</b>
                    <span>{a.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <ol className="ic-ab-flow" aria-label="Assessment stages">
          <li>
            <b>Review</b>
            <span>Collect the facts</span>
          </li>
          <li>
            <b>Analyze</b>
            <span>Find gaps and risks</span>
          </li>
          <li>
            <b>Recommend</b>
            <span>Prioritize next steps</span>
          </li>
        </ol>
        {footer}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Why RoyalTech: overlap diagram                                      */
/* ------------------------------------------------------------------ */

export function WhyDiagram() {
  return (
    <div className="ic-why-d" role="img" aria-label="Diagram showing business goals, technology and operations overlapping to form a practical technology roadmap">
      <svg viewBox="0 0 360 330" aria-hidden="true">
        <circle cx="132" cy="120" r="98" className="ic-venn a" />
        <circle cx="228" cy="120" r="98" className="ic-venn b" />
        <circle cx="180" cy="204" r="98" className="ic-venn c" />
        <text x="96" y="92" textAnchor="middle" className="ic-venn-t">
          Business
        </text>
        <text x="96" y="108" textAnchor="middle" className="ic-venn-t">
          goals
        </text>
        <text x="264" y="92" textAnchor="middle" className="ic-venn-t">
          Technology
        </text>
        <text x="264" y="108" textAnchor="middle" className="ic-venn-t">
          expertise
        </text>
        <text x="180" y="266" textAnchor="middle" className="ic-venn-t">
          Operations
        </text>
        <circle cx="180" cy="152" r="34" className="ic-venn-core" />
        <text x="180" y="150" textAnchor="middle" className="ic-venn-t core">
          Practical
        </text>
        <text x="180" y="164" textAnchor="middle" className="ic-venn-t core">
          roadmap
        </text>
      </svg>
    </div>
  );
}
