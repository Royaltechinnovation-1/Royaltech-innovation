import { Abs, Gantt, Stage, Win } from "./primitives";

/* ------------------------------------------------------------------ */
/* Service 1: IT strategy & planning                                   */
/* ------------------------------------------------------------------ */

export function StrategyVisual() {
  return (
    <Stage
      label="Illustrative IT strategy board showing a phased technology roadmap with milestones, business goals mapped to initiatives, and an impact versus effort priority matrix"
      aspect="1 / 0.95"
      className="ic-sv"
    >
      <span className="ic-blob" aria-hidden="true" />
      <Abs l={0} t={0} w={100} z={2}>
        <Win title="IT strategy roadmap">
          <Gantt
            cols={["Phase 1", "Phase 2", "Phase 3", "Phase 4"]}
            rows={[
              { label: "Applications", bars: [{ s: 0, w: 28, tone: 1, text: "Assess" }, { s: 30, w: 34, tone: 2, text: "Select" }, { s: 68, w: 28, tone: 3 }], milestones: [29, 66] },
              { label: "Infrastructure", bars: [{ s: 14, w: 36, tone: 2, text: "Plan" }, { s: 54, w: 42, tone: 1, text: "Modernize" }], milestones: [52] },
              { label: "Processes", bars: [{ s: 4, w: 24, tone: 3 }, { s: 34, w: 30, tone: 1, text: "Automate" }, { s: 70, w: 26, tone: 2 }], milestones: [32, 68] },
              { label: "Governance", bars: [{ s: 0, w: 96, tone: 3, text: "Risk, budget & review" }] },
            ]}
          />
        </Win>
      </Abs>
      <Abs l={-2} b={-2} w={52} z={3} float={1}>
        <Win title="Business goals">
          <ul className="ic-goals">
            {[
              ["Serve customers faster", "Customer platform"],
              ["Reduce manual work", "Workflow automation"],
              ["Scale reliably", "Cloud foundation"],
            ].map(([g, i]) => (
              <li key={g}>
                <b>{g}</b>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </Win>
      </Abs>
      <Abs r={-2} b={-4} w={50} z={4} float={0}>
        <Win title="Priority matrix">
          <div className="ic-matrix">
            <span className="ic-matrix-y">Impact</span>
            <div className="ic-matrix-grid">
              <div>
                <em>Quick wins</em>
                <i style={{ left: "30%", top: "58%" }} className="hot" />
                <i style={{ left: "62%", top: "40%" }} />
              </div>
              <div>
                <em>Major projects</em>
                <i style={{ left: "44%", top: "56%" }} className="hot" />
              </div>
              <div>
                <em>Fill-ins</em>
                <i style={{ left: "52%", top: "50%" }} />
              </div>
              <div>
                <em>Reconsider</em>
                <i style={{ left: "36%", top: "48%" }} />
              </div>
            </div>
            <span className="ic-matrix-x">Effort</span>
          </div>
        </Win>
      </Abs>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Service 2: digital transformation (three-stage panorama)            */
/* ------------------------------------------------------------------ */

const NodeBox = ({ x, y, w, h, label, hot }: { x: number; y: number; w: number; h: number; label: string; hot?: boolean }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" className={hot ? "ic-sv-node hot" : "ic-sv-node"} />
    <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" className="ic-svg-t">
      {label}
    </text>
  </g>
);

export function TransformVisual() {
  return (
    <div
      className="ic-tv"
      role="img"
      aria-label="Digital transformation journey from traditional business processes with disconnected tools, to connected digital systems on a cloud platform, to intelligent operations with dashboards and automation"
    >
      <figure className="ic-tv-panel">
        <svg viewBox="0 0 300 220" aria-hidden="true">
          <g className="ic-tv-broken">
            <path d="M130 42 H170" />
            <path d="M70 66 V120" />
            <path d="M230 66 V120" />
            <path d="M130 142 H170" />
          </g>
          <g className="ic-tv-x">
            <circle cx="150" cy="42" r="8" />
            <path d="M146 38 l8 8 M154 38 l-8 8" />
            <circle cx="70" cy="93" r="8" />
            <path d="M66 89 l8 8 M74 89 l-8 8" />
            <circle cx="230" cy="93" r="8" />
            <path d="M226 89 l8 8 M234 89 l-8 8" />
          </g>
          <NodeBox x={10} y={20} w={120} h={44} label="Paper forms" />
          <NodeBox x={170} y={20} w={120} h={44} label="Spreadsheets" />
          <NodeBox x={10} y={120} w={120} h={44} label="Standalone software" />
          <NodeBox x={170} y={120} w={120} h={44} label="Email & chat" />
          <text x="150" y="196" textAnchor="middle" className="ic-svg-s">
            Manual re-entry between tools
          </text>
        </svg>
        <figcaption>
          <b>Traditional business processes</b>
          <span>Disconnected tools and manual hand-offs</span>
        </figcaption>
      </figure>

      <div className="ic-tv-arrow" aria-hidden="true">
        <span>Modernize</span>
      </div>

      <figure className="ic-tv-panel">
        <svg viewBox="0 0 300 220" aria-hidden="true">
          <g className="ic-tv-links">
            <path d="M100 56 L132 92" />
            <path d="M200 56 L168 92" />
            <path d="M100 164 L132 128" />
            <path d="M200 164 L168 128" />
          </g>
          <rect x="100" y="90" width="100" height="40" rx="12" className="ic-sv-hub" />
          <text x="150" y="108" textAnchor="middle" className="ic-svg-t hub">
            Cloud platform
          </text>
          <text x="150" y="122" textAnchor="middle" className="ic-svg-s">
            shared data
          </text>
          <NodeBox x={14} y={30} w={90} h={36} label="ERP" hot />
          <NodeBox x={196} y={30} w={90} h={36} label="CRM" hot />
          <NodeBox x={14} y={154} w={90} h={36} label="Workflows" hot />
          <NodeBox x={196} y={154} w={90} h={36} label="Data store" hot />
          <text x="150" y="212" textAnchor="middle" className="ic-svg-s">
            Systems share one source of truth
          </text>
        </svg>
        <figcaption>
          <b>Connected digital systems</b>
          <span>Cloud platforms, integrations and workflows</span>
        </figcaption>
      </figure>

      <div className="ic-tv-arrow" aria-hidden="true">
        <span>Automate</span>
      </div>

      <figure className="ic-tv-panel">
        <svg viewBox="0 0 300 220" aria-hidden="true">
          <rect x="10" y="8" width="280" height="168" rx="12" className="ic-sv-dash" />
          <rect x="10" y="8" width="280" height="22" rx="12" className="ic-sv-dashbar" />
          <circle cx="26" cy="19" r="3" fill="#67e8f9" />
          <circle cx="38" cy="19" r="3" fill="#38bdf8" />
          <circle cx="50" cy="19" r="3" fill="#a5b4fc" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={22 + i * 88} y="40" width="76" height="34" rx="6" className="ic-sv-kpi" />
              <rect x={30 + i * 88} y="48" width="34" height="5" rx="2.5" className="ic-sv-line" />
              <rect x={30 + i * 88} y="60" width="52" height="7" rx="3.5" className="ic-sv-line hot" />
            </g>
          ))}
          <path d="M22 150 C 60 140, 80 120, 116 126 S 176 100, 206 108 S 258 84, 278 90 V160 H22 Z" className="ic-sv-area" />
          <path d="M22 150 C 60 140, 80 120, 116 126 S 176 100, 206 108 S 258 84, 278 90" className="ic-sv-curve" />
          <g>
            <NodeBox x={14} y={186} w={72} h={26} label="Trigger" />
            <NodeBox x={114} y={186} w={72} h={26} label="Rule" />
            <NodeBox x={214} y={186} w={72} h={26} label="Action" hot />
            <path d="M88 199 H112 M188 199 H212" className="ic-tv-flow" />
          </g>
        </svg>
        <figcaption>
          <b>Intelligent operations</b>
          <span>Dashboards, automation and better visibility</span>
        </figcaption>
      </figure>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Service 3: technology consulting                                    */
/* ------------------------------------------------------------------ */

export function TechVisual() {
  return (
    <Stage
      label="Illustrative technology consulting composition: a layered technology stack, a technology selection framework and a connected software ecosystem"
      aspect="1 / 0.98"
      className="ic-tc"
    >
      <span className="ic-blob" aria-hidden="true" />
      <Abs l={0} t={0} w={54} z={2}>
        <Win title="Technology stack">
          <ul className="ic-stack">
            {[
              ["Experience", ["Web", "Mobile", "Portal"]],
              ["Application", ["Business apps", "Custom"]],
              ["Integration", ["APIs", "Middleware"]],
              ["Data", ["Database", "Analytics"]],
              ["Platform", ["Cloud", "DevOps"]],
            ].map(([k, v]) => (
              <li key={k as string}>
                <span>{k as string}</span>
                <div>
                  {(v as string[]).map((c) => (
                    <b key={c}>{c}</b>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Win>
      </Abs>
      <Abs r={-1} t={9} w={50} z={3} float={1}>
        <Win title="Selection framework">
          <ol className="ic-steps">
            <li>
              <b>1 · Requirements</b>
              <span>Needs, users, budget</span>
            </li>
            <li>
              <b>2 · Shortlist</b>
              <span>Suitable platforms</span>
            </li>
            <li className="on">
              <b>3 · Evaluate</b>
              <div>
                {["Fit", "Integration", "Scalability", "Cost", "Support"].map((c) => (
                  <em key={c}>{c}</em>
                ))}
              </div>
            </li>
            <li>
              <b>4 · Recommend</b>
              <span>Clear, justified choice</span>
            </li>
          </ol>
        </Win>
      </Abs>
      <Abs l={14} b={-2} w={64} z={4} float={0}>
        <Win title="Software ecosystem" tone="dark">
          <svg viewBox="0 0 240 110" className="ic-eco-mini" aria-hidden="true">
            <g className="ic-tv-links">
              <path d="M120 55 L40 22" />
              <path d="M120 55 L120 16" />
              <path d="M120 55 L200 22" />
              <path d="M120 55 L48 92" />
              <path d="M120 55 L194 92" />
            </g>
            <rect x="86" y="42" width="68" height="26" rx="9" className="ic-sv-hub" />
            <text x="120" y="59" textAnchor="middle" className="ic-svg-t sm hub">
              Integration
            </text>
            {[
              [40, 22, "Website"],
              [120, 14, "CRM"],
              [200, 22, "ERP"],
              [48, 94, "Mobile app"],
              [194, 94, "Analytics"],
            ].map(([x, y, l]) => (
              <g key={l as string}>
                <rect x={(x as number) - 31} y={(y as number) - 11} width="62" height="22" rx="7" className="ic-sv-node hot" />
                <text x={x as number} y={(y as number) + 3.6} textAnchor="middle" className="ic-svg-t sm">
                  {l as string}
                </text>
              </g>
            ))}
          </svg>
        </Win>
      </Abs>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Service 4: IT infrastructure                                        */
/* ------------------------------------------------------------------ */

export function InfraVisual() {
  return (
    <div
      className="ic-infra"
      role="img"
      aria-label="Illustrative enterprise infrastructure diagram: business applications protected by a security layer, a network layer, a cloud platform with compute, storage and database, on-premise servers, and a backup and recovery layer"
    >
      <svg viewBox="0 0 460 410" aria-hidden="true">
        <rect x="6" y="6" width="448" height="398" rx="20" className="ic-in-perim" />
        <rect x="22" y="-2" width="120" height="20" rx="10" className="ic-in-tab" />
        <text x="82" y="12" textAnchor="middle" className="ic-svg-s tab">
          Security perimeter
        </text>

        {/* business apps */}
        {["CRM", "ERP", "Website", "Mobile"].map((l, i) => (
          <g key={l}>
            <rect x={28 + i * 100} y="34" width="88" height="30" rx="8" className="ic-sv-node hot" />
            <text x={72 + i * 100} y="53" textAnchor="middle" className="ic-svg-t">
              {l}
            </text>
            <path d={`M${72 + i * 100} 64 V84`} className="ic-tv-flow" />
          </g>
        ))}

        {/* security layer */}
        <rect x="28" y="84" width="404" height="28" rx="8" className="ic-in-sec" />
        <text x="230" y="103" textAnchor="middle" className="ic-svg-t">
          Identity & access · Firewall · Encryption
        </text>

        {/* network */}
        <path d="M44 148 H416" className="ic-in-net" />
        {[
          [70, "VPN"],
          [170, "Segmentation"],
          [290, "Load balancing"],
          [386, "Monitoring"],
        ].map(([x, l]) => (
          <g key={l as string}>
            <circle cx={x as number} cy="148" r="6" className="ic-in-dot" />
            <text x={x as number} y="136" textAnchor="middle" className="ic-svg-s">
              {l as string}
            </text>
          </g>
        ))}
        <text x="230" y="176" textAnchor="middle" className="ic-svg-s">
          Network architecture
        </text>

        {/* cloud */}
        <rect x="28" y="190" width="214" height="128" rx="14" className="ic-in-box" />
        <text x="44" y="210" className="ic-svg-t">
          Cloud platform
        </text>
        {["Compute", "Storage", "Database"].map((l, i) => (
          <g key={l}>
            <rect x={40 + i * 66} y="226" width="58" height="62" rx="8" className="ic-sv-node" />
            <rect x={48 + i * 66} y="236" width="42" height="5" rx="2.5" className="ic-sv-line hot" />
            <rect x={48 + i * 66} y="246" width="30" height="5" rx="2.5" className="ic-sv-line" />
            <text x={69 + i * 66} y="276" textAnchor="middle" className="ic-svg-s">
              {l}
            </text>
          </g>
        ))}
        <text x="135" y="306" textAnchor="middle" className="ic-svg-s">
          Scalable, managed services
        </text>

        {/* servers */}
        <rect x="258" y="190" width="174" height="128" rx="14" className="ic-in-box" />
        <text x="274" y="210" className="ic-svg-t">
          Server infrastructure
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="274" y={222 + i * 22} width="142" height="17" rx="4" className="ic-in-rack" />
            <circle cx="286" cy={230.5 + i * 22} r="2.6" fill={i === 1 ? "#fbbf24" : "#34d399"} />
            <circle cx="296" cy={230.5 + i * 22} r="2.6" fill="#67e8f9" />
            <rect x="346" y={227 + i * 22} width="58" height="3" rx="1.5" className="ic-sv-line" />
            <rect x="346" y={233 + i * 22} width="40" height="3" rx="1.5" className="ic-sv-line" />
          </g>
        ))}

        {/* backup */}
        <path d="M135 318 V338 M345 318 V338" className="ic-tv-flow" />
        <rect x="28" y="338" width="404" height="46" rx="12" className="ic-in-backup" />
        <text x="230" y="358" textAnchor="middle" className="ic-svg-t">
          Backup & recovery
        </text>
        <text x="230" y="373" textAnchor="middle" className="ic-svg-s">
          Redundancy · Restore planning · Continuity
        </text>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Service 5: business process optimization                            */
/* ------------------------------------------------------------------ */

const FlowNode = ({ x, y, w = 62, label, tone }: { x: number; y: number; w?: number; label: string; tone?: "warn" | "ok" | "hot" }) => (
  <g>
    <rect x={x} y={y} width={w} height="26" rx="7" className={`ic-pf-node${tone ? ` ${tone}` : ""}`} />
    <text x={x + w / 2} y={y + 16.5} textAnchor="middle" className="ic-svg-t sm">
      {label}
    </text>
  </g>
);

export function ProcessFlowVisual() {
  const panels = [
    { title: "Existing process", sub: "Hand-offs, loops and rework" },
    { title: "Bottleneck analysis", sub: "Where time and effort build up" },
    { title: "Optimized workflow", sub: "Simpler, standardized steps" },
    { title: "Connected digital operations", sub: "Systems, automation, visibility" },
  ];
  return (
    <div
      className="ic-pf"
      role="img"
      aria-label="Business process transformation in four stages: an existing manual process, bottleneck analysis, an optimized workflow, and connected digital operations with automation and dashboards"
    >
      {panels.map((p, idx) => (
        <figure key={p.title} className="ic-pf-panel">
          <span className="ic-pf-n" aria-hidden="true">
            {idx + 1}
          </span>
          <svg viewBox="0 0 240 176" aria-hidden="true">
            {idx === 0 && (
              <g>
                <g className="ic-pf-lines loop">
                  <path d="M45 42 L120 80" />
                  <path d="M120 38 L195 80" />
                  <path d="M195 106 L45 118" />
                  <path d="M120 106 L58 142" />
                  <path d="M45 42 C 20 70, 20 100, 45 118" />
                  <path d="M195 42 L120 80" />
                </g>
                <FlowNode x={14} y={28} label="Request" />
                <FlowNode x={89} y={24} label="Review" />
                <FlowNode x={164} y={28} label="Re-enter" tone="warn" />
                <FlowNode x={14} y={106} label="Approve" />
                <FlowNode x={89} y={92} label="Check" />
                <FlowNode x={164} y={106} label="Update" tone="warn" />
                <FlowNode x={89} y={142} label="Report" />
              </g>
            )}
            {idx === 1 && (
              <g>
                <g className="ic-pf-lines dim">
                  <path d="M45 42 L120 80" />
                  <path d="M120 38 L195 80" />
                  <path d="M195 106 L45 118" />
                  <path d="M45 42 C 20 70, 20 100, 45 118" />
                </g>
                <FlowNode x={14} y={28} label="Request" />
                <FlowNode x={89} y={24} label="Review" />
                <FlowNode x={164} y={28} label="Re-enter" />
                <circle cx="120" cy="105" r="30" className="ic-pf-ring" />
                <FlowNode x={89} y={92} label="Check" tone="warn" />
                <FlowNode x={14} y={106} label="Approve" />
                <FlowNode x={164} y={106} label="Update" />
                <rect x="132" y="68" width="76" height="18" rx="9" className="ic-pf-tag" />
                <text x="170" y="80.5" textAnchor="middle" className="ic-svg-s tag">
                  Bottleneck
                </text>
                <text x="120" y="160" textAnchor="middle" className="ic-svg-s">
                  Delay · duplicate entry · rework
                </text>
              </g>
            )}
            {idx === 2 && (
              <g>
                <g className="ic-pf-lines ok">
                  <path d="M76 58 H90" />
                  <path d="M152 58 H166" />
                  <path d="M120 84 V102" />
                </g>
                <FlowNode x={14} y={45} w={62} label="Request" tone="ok" />
                <FlowNode x={90} y={45} w={62} label="Auto-check" tone="hot" />
                <FlowNode x={166} y={45} w={62} label="Approve" tone="ok" />
                <FlowNode x={89} y={102} w={62} label="Complete" tone="ok" />
                <rect x="14" y="132" width="212" height="24" rx="8" className="ic-pf-note" />
                <text x="120" y="148" textAnchor="middle" className="ic-svg-s">
                  Standardized steps · fewer hand-offs
                </text>
              </g>
            )}
            {idx === 3 && (
              <g>
                <rect x="14" y="14" width="212" height="94" rx="10" className="ic-sv-dash" />
                {[0, 1, 2].map((i) => (
                  <rect key={i} x={24 + i * 68} y="24" width="58" height="22" rx="5" className="ic-sv-kpi" />
                ))}
                {[34, 52, 40, 64, 48, 70, 56].map((h, i) => (
                  <rect key={i} x={26 + i * 29} y={104 - h * 0.78} width="18" height={h * 0.78 - 4} rx="3" className="ic-sv-bar" />
                ))}
                <g className="ic-pf-lines ok">
                  <path d="M46 130 H100 M140 130 H194" />
                </g>
                <FlowNode x={14} y={120} w={64} label="ERP" tone="hot" />
                <FlowNode x={88} y={120} w={64} label="Automation" tone="hot" />
                <FlowNode x={162} y={120} w={64} label="CRM" tone="hot" />
                <text x="120" y="164" textAnchor="middle" className="ic-svg-s">
                  Live visibility across systems
                </text>
              </g>
            )}
          </svg>
          <figcaption>
            <b>{p.title}</b>
            <span>{p.sub}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
