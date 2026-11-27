import { Abs, ArchLayers, Chip, Gantt, MiniDash, Stage, Win } from "./primitives";

/** Hero: enterprise architecture + roadmap + analytics, layered with depth on the right of the hero. */
export function HeroVisual() {
  return (
    <Stage
      label="Illustrative enterprise technology architecture with a technology roadmap, connected business systems and an operations analytics dashboard"
      aspect="1 / 0.98"
      className="ic-hv"
    >
      <span className="ic-hv-glow" aria-hidden="true" />
      <svg className="ic-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M30 56 C 28 50, 26 46, 25 42" />
        <path d="M72 40 C 76 42, 78 46, 78 50" className="mid" />
        <path d="M44 66 C 52 66, 56 62, 60 58" className="mid" />
      </svg>

      <Abs l={6} t={2} w={80} z={2} rot="rotateY(-7deg) rotateX(2deg)">
        <Win title="Enterprise architecture" tone="dark">
          <ArchLayers
            layers={[
              { label: "Business", band: "Strategy · Goals · Operations" },
              { label: "Applications", chips: ["CRM", "ERP", "Website", "Mobile"] },
              { label: "Integration", band: "APIs & system integration", glow: true },
              { label: "Data", chips: ["Databases", "Analytics", "Backup"] },
              { label: "Cloud", chips: ["Compute", "Network", "Storage"] },
            ]}
          />
        </Win>
      </Abs>

      <Abs l={-4} t={56} w={54} z={4} float={1}>
        <Win title="Technology roadmap">
          <Gantt
            cols={["Now", "Next", "Later"]}
            rows={[
              { label: "Systems", bars: [{ s: 0, w: 34, tone: 1 }, { s: 38, w: 30, tone: 2 }], milestones: [34] },
              { label: "Cloud", bars: [{ s: 14, w: 36, tone: 2 }, { s: 54, w: 40, tone: 3 }], milestones: [50] },
              { label: "Process", bars: [{ s: 30, w: 30, tone: 1 }, { s: 64, w: 30, tone: 3 }], milestones: [62] },
            ]}
          />
        </Win>
      </Abs>

      <Abs r={-3} t={50} w={44} z={3} float={0}>
        <Win title="Business analytics">
          <MiniDash />
        </Win>
      </Abs>

      <Abs l={-3} t={-3} w={32} z={5} float={2}>
        <Chip title="Cloud infrastructure" text="Planned & connected" dot="cyan" />
      </Abs>
      <Abs r={6} b={0} w={36} z={5} float={2}>
        <Chip title="Roadmap approved" text="Phase 1 ready to start" dot="green" tone="light" />
      </Abs>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Intro: isometric business technology stack                          */
/* ------------------------------------------------------------------ */

const CX = 190;
const A = 112;
const B = 65;
const T = 11;

function Plate({
  cy,
  top,
  left,
  right,
  tiles,
}: {
  cy: number;
  top: string;
  left: string;
  right: string;
  tiles: { x: number; y: number; w: number; h: number; hot?: boolean }[];
}) {
  return (
    <g>
      <polygon points={`${CX - A},${cy} ${CX},${cy + B} ${CX},${cy + B + T} ${CX - A},${cy + T}`} fill={left} />
      <polygon points={`${CX + A},${cy} ${CX},${cy + B} ${CX},${cy + B + T} ${CX + A},${cy + T}`} fill={right} />
      <polygon
        points={`${CX},${cy - B} ${CX + A},${cy} ${CX},${cy + B} ${CX - A},${cy}`}
        fill={top}
        stroke="rgba(37,99,235,0.35)"
        strokeWidth="1.2"
      />
      <g transform={`translate(${CX} ${cy - B}) matrix(0.866 0.5 -0.866 0.5 0 0)`}>
        {tiles.map((t, i) => (
          <rect key={i} x={t.x} y={t.y} width={t.w} height={t.h} rx="4" fill={t.hot ? "#2563eb" : "#fff"} fillOpacity={t.hot ? 0.92 : 0.9} stroke="rgba(37,99,235,0.35)" strokeWidth="0.8" />
        ))}
      </g>
    </g>
  );
}

const PLATES = [
  { cy: 96, label: "Business goals", sub: "Strategy & growth plans" },
  { cy: 204, label: "Applications", sub: "CRM · ERP · Web · Mobile" },
  { cy: 312, label: "Data & integration", sub: "APIs, analytics, workflows" },
  { cy: 420, label: "Infrastructure", sub: "Cloud, network, security" },
];

export function IntroVisual() {
  return (
    <Stage
      label="Isometric diagram of a business technology architecture: business goals, applications, data and integration, and infrastructure, with a technology planning roadmap and dashboard"
      aspect="1 / 0.93"
      className="ic-intro-v"
    >
      <span className="ic-blob" aria-hidden="true" />
      <svg className="ic-iso" viewBox="0 0 560 520" aria-hidden="true">
        <defs>
          <linearGradient id="ic-iso-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f4f8ff" />
            <stop offset="1" stopColor="#dbe8ff" />
          </linearGradient>
        </defs>
        {/* vertical connectors */}
        <g stroke="#2563eb" strokeWidth="1.6" strokeDasharray="3 5" className="ic-iso-link">
          <line x1={CX} y1="110" x2={CX} y2="432" />
        </g>
        <Plate cy={420} top="url(#ic-iso-top)" left="#8fb0ee" right="#6f97e6" tiles={[{ x: 22, y: 22, w: 36, h: 36 }, { x: 70, y: 22, w: 36, h: 36 }, { x: 22, y: 70, w: 84, h: 22, hot: true }]} />
        <Plate cy={312} top="url(#ic-iso-top)" left="#8fb0ee" right="#6f97e6" tiles={[{ x: 20, y: 20, w: 28, h: 28 }, { x: 56, y: 20, w: 28, h: 28 }, { x: 92, y: 20, w: 28, h: 28 }, { x: 20, y: 64, w: 100, h: 18, hot: true }]} />
        <Plate cy={204} top="url(#ic-iso-top)" left="#8fb0ee" right="#6f97e6" tiles={[{ x: 20, y: 20, w: 44, h: 28, hot: true }, { x: 74, y: 20, w: 44, h: 28 }, { x: 20, y: 62, w: 44, h: 28 }, { x: 74, y: 62, w: 44, h: 28 }]} />
        <Plate cy={96} top="url(#ic-iso-top)" left="#8fb0ee" right="#6f97e6" tiles={[{ x: 20, y: 24, w: 100, h: 26, hot: true }, { x: 20, y: 62, w: 46, h: 22 }, { x: 74, y: 62, w: 46, h: 22 }]} />

        {PLATES.map((p) => (
          <g key={p.label}>
            <line x1={CX + A - 6} y1={p.cy + 6} x2="352" y2={p.cy + 6} stroke="#2563eb" strokeOpacity="0.45" strokeWidth="1.2" />
            <circle cx={CX + A - 6} cy={p.cy + 6} r="3.5" fill="#2563eb" />
            <text x="360" y={p.cy + 2} className="ic-iso-t">
              {p.label}
            </text>
            <text x="360" y={p.cy + 24} className="ic-iso-s">
              {p.sub}
            </text>
          </g>
        ))}
      </svg>
      <Abs r={0} t={0} w={36} z={3} float={1}>
        <Chip title="Technology roadmap" text="Priorities mapped to goals" dot="blue" tone="light" />
      </Abs>
      <Abs l={-1} b={3} w={36} z={3} float={2}>
        <Chip title="Connected systems" text="One view of operations" dot="green" tone="light" />
      </Abs>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export function CtaVisual() {
  return (
    <Stage
      label="Illustrative technology roadmap, enterprise architecture and business dashboard representing a connected technology strategy"
      aspect="1 / 0.96"
      className="ic-cta-v"
    >
      <span className="ic-cta-light" aria-hidden="true" />
      <Abs l={0} t={8} w={68} z={2} rot="rotateY(8deg)">
        <Win title="Technology roadmap">
          <Gantt
            cols={["Phase 1", "Phase 2", "Phase 3"]}
            rows={[
              { label: "Strategy", bars: [{ s: 0, w: 38, tone: 1 }, { s: 42, w: 30, tone: 2 }], milestones: [38] },
              { label: "Systems", bars: [{ s: 20, w: 36, tone: 2 }, { s: 60, w: 34, tone: 3 }], milestones: [56] },
              { label: "Cloud", bars: [{ s: 34, w: 30, tone: 1 }, { s: 68, w: 26, tone: 3 }], milestones: [66] },
              { label: "Process", bars: [{ s: 10, w: 28, tone: 3 }, { s: 46, w: 40, tone: 1 }], milestones: [44] },
            ]}
          />
        </Win>
      </Abs>
      <Abs r={0} t={0} w={44} z={3} float={0}>
        <Win title="Business dashboard">
          <MiniDash title="Operations" />
        </Win>
      </Abs>
      <Abs r={2} b={0} w={60} z={4} float={1}>
        <Win title="System architecture" tone="dark">
          <ArchLayers
            layers={[
              { label: "Apps", chips: ["CRM", "ERP", "Web"] },
              { label: "Integration", band: "Connected systems", glow: true },
              { label: "Cloud", chips: ["Compute", "Data"] },
            ]}
            security="Security"
          />
        </Win>
      </Abs>
      <Abs l={2} b={6} w={34} z={5} float={2}>
        <Chip title="Strategy aligned" text="Goals → technology" dot="green" tone="light" />
      </Abs>
    </Stage>
  );
}
