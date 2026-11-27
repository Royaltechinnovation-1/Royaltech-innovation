import type { CSSProperties } from "react";
import type { IndustryKind, ProcessVisual } from "@/data/uiux-page";
import { Browser } from "./Sites";

/**
 * Floating design panels (palette, type, components), Figma-style cursors, persona / journey
 * visuals, process illustrations and industry previews. Panel sizes use `em`, and each stage sets
 * the base font size from its own width, so they scale with the composition they sit in.
 */

export const BRAND_COLORS = [
  { name: "Navy", hex: "#020617" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Sky", hex: "#38BDF8" },
  { name: "Cyan", hex: "#67E8F9" },
  { name: "Mist", hex: "#F3F7FF" },
];

export function PalettePanel({ className = "" }: { className?: string }) {
  return (
    <div className={`up up-pal ${className}`.trim()} aria-hidden="true">
      <div className="up-k">Color palette</div>
      <div className="up-sw">
        {BRAND_COLORS.map((c) => (
          <span key={c.hex}>
            <i style={{ background: c.hex }} />
            <em>{c.hex}</em>
          </span>
        ))}
      </div>
    </div>
  );
}

export function TypePanel({ className = "" }: { className?: string }) {
  return (
    <div className={`up up-type ${className}`.trim()} aria-hidden="true">
      <div className="up-k">Typography</div>
      <div className="up-type-row">
        <span className="up-aa">Aa</span>
        <div>
          <b>Inter</b>
          <span>Bold 700 · Regular 400</span>
        </div>
      </div>
      <div className="up-scale">
        <span style={{ fontSize: "1.5em", fontWeight: 800 }}>Heading</span>
        <span style={{ fontWeight: 600 }}>Subheading</span>
        <span style={{ opacity: 0.65 }}>Body text for interfaces</span>
      </div>
    </div>
  );
}

export function ComponentsPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`up up-comp ${className}`.trim()} aria-hidden="true">
      <div className="up-k">Components</div>
      <div className="up-btns">
        <span className="up-b p">Primary</span>
        <span className="up-b s">Secondary</span>
      </div>
      <div className="up-input">
        <label>Email address</label>
        <span>name@company.com</span>
      </div>
      <div className="up-ctrls">
        <span className="up-toggle on">
          <i />
        </span>
        <span className="up-check on" />
        <span className="up-radio on" />
        <span className="up-tab on">Tab</span>
        <span className="up-tab">Tab</span>
      </div>
    </div>
  );
}

/** Wireframe on the left, finished UI on the right, split by a draggable-looking handle. */
export function MiniCompare({ pos = 48, className = "" }: { pos?: number; className?: string }) {
  return (
    <div className={`up up-cmp ${className}`.trim()} style={{ "--pos": `${pos}%` } as CSSProperties} aria-hidden="true">
      <div className="up-cmp-k">
        <span>Wireframe</span>
        <span>Final UI</span>
      </div>
      <div className="up-cmp-view">
        <div className="up-cmp-layer final">
          <i className="h" />
          <i className="t" />
          <i className="t s" />
          <span className="b" />
          <div className="img" />
        </div>
        <div className="up-cmp-layer wire">
          <i className="h" />
          <i className="t" />
          <i className="t s" />
          <span className="b" />
          <div className="img" />
        </div>
        <span className="up-cmp-handle" />
      </div>
    </div>
  );
}

/** Figma-style multiplayer cursor with a name tag. */
export function Cursor({ label, color = "#2563eb", className = "" }: { label: string; color?: string; className?: string }) {
  return (
    <div className={`up-cursor ${className}`.trim()} style={{ "--cc": color } as CSSProperties} aria-hidden="true">
      <svg viewBox="0 0 16 20" width="1.6em" height="2em">
        <path d="M1 1l13 7.2-5.6 1.7L6.7 16 1 1z" fill="var(--cc)" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

export function PersonaCard({ className = "" }: { className?: string }) {
  return (
    <div className={`up up-persona ${className}`.trim()} aria-hidden="true">
      <div className="up-k">User persona</div>
      <div className="up-pr">
        <span className="up-pav" />
        <div>
          <b>Growth-minded founder</b>
          <span>Small business · Mobile-first</span>
        </div>
      </div>
      <div className="up-pl">
        <span>Goals</span>
        <i style={{ width: "86%" }} />
        <i style={{ width: "62%" }} />
        <span>Frustrations</span>
        <i style={{ width: "74%" }} />
        <i style={{ width: "48%" }} />
      </div>
    </div>
  );
}

export function InsightNote({ title = "Key insight", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`up up-note ${className}`.trim()} aria-hidden="true">
      <div className="up-k">{title}</div>
      <i style={{ width: "94%" }} />
      <i style={{ width: "76%" }} />
      <i style={{ width: "58%" }} />
    </div>
  );
}

/** Before / after navigation simplification, shown with bars instead of numbers. */
export function NavImprove({ className = "" }: { className?: string }) {
  return (
    <div className={`up up-nav ${className}`.trim()} aria-hidden="true">
      <div className="up-k">Navigation improved</div>
      <div className="up-nav-row">
        <div className="up-nav-col before">
          <small>Before</small>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <i key={i} />
          ))}
        </div>
        <span className="up-nav-arrow">→</span>
        <div className="up-nav-col after">
          <small>After</small>
          {[0, 1, 2].map((i) => (
            <i key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Customer journey map in a window: stages, emotion curve and opportunities. */
export function JourneyMap({ className = "" }: { className?: string }) {
  const stages = ["Discover", "Compare", "Decide", "Purchase", "Support"];
  return (
    <Browser
      className={`ur ${className}`.trim()}
      url="research.northwind.studio/journey-map"
      label="User journey map across five stages with actions, an emotion curve, pain points and design opportunities"
    >
      <div className="ur-map">
        <div className="ur-head">
          <b>Customer journey map</b>
          <span>Persona · Growth-minded founder</span>
        </div>
        <div className="ur-grid">
          <div className="ur-stages">
            <span className="ur-lbl" />
            {stages.map((s, i) => (
              <span key={s} className="ur-stage">
                <em>{String(i + 1).padStart(2, "0")}</em>
                {s}
              </span>
            ))}
          </div>
          <div className="ur-row">
            <span className="ur-lbl">Actions</span>
            {stages.map((s, i) => (
              <span key={s} className="ur-cell">
                <i style={{ width: `${88 - i * 7}%` }} />
                <i style={{ width: `${58 - i * 4}%` }} />
              </span>
            ))}
          </div>
          <div className="ur-row ur-curve">
            <span className="ur-lbl">Emotion</span>
            <svg viewBox="0 0 500 70" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C60 40 70 16 100 18 S160 56 200 52 S270 20 300 22 S380 12 410 14 S470 30 500 24" className="ur-line" />
              {[50, 150, 250, 350, 450].map((x, i) => (
                <circle key={x} cx={x} cy={[26, 54, 24, 14, 28][i]} r="5" className="ur-dot" />
              ))}
            </svg>
          </div>
          <div className="ur-row">
            <span className="ur-lbl">Pain points</span>
            {stages.map((s, i) => (
              <span key={s} className="ur-cell">
                <i className="warn" style={{ width: `${[64, 80, 52, 70, 44][i]}%` }} />
              </span>
            ))}
          </div>
          <div className="ur-row ur-opp">
            <span className="ur-lbl">Opportunities</span>
            {["Clear value", "Easy comparison", "Fewer steps", "Fast checkout", "Helpful support"].map((t) => (
              <span key={t} className="ur-cell">
                <em>{t}</em>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

/* ------------------------------------------------------------------ */
/* Process illustrations (one small SVG per stage)                     */
/* ------------------------------------------------------------------ */
export function ProcessArt({ kind }: { kind: ProcessVisual }) {
  return (
    <svg viewBox="0 0 160 112" className="pv" aria-hidden="true">
      {kind === "research" && (
        <>
          <rect x="10" y="12" width="64" height="88" rx="8" className="pv-card" />
          <circle cx="42" cy="38" r="12" className="pv-fill" />
          <rect x="22" y="58" width="40" height="5" rx="2.5" className="pv-line" />
          <rect x="26" y="70" width="32" height="5" rx="2.5" className="pv-line2" />
          <rect x="22" y="82" width="40" height="5" rx="2.5" className="pv-line2" />
          <rect x="86" y="12" width="64" height="40" rx="8" className="pv-card" />
          <rect x="94" y="22" width="30" height="5" rx="2.5" className="pv-line" />
          <rect x="94" y="33" width="46" height="5" rx="2.5" className="pv-line2" />
          <rect x="94" y="42" width="38" height="4" rx="2" className="pv-line2" />
          <rect x="86" y="60" width="64" height="40" rx="8" className="pv-card" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={95 + i * 11} y={90 - [12, 20, 15, 26, 18][i]} width="7" height={[12, 20, 15, 26, 18][i]} rx="2" className={i === 3 ? "pv-fill" : "pv-bar"} />
          ))}
        </>
      )}
      {kind === "strategy" && (
        <>
          <path d="M44 30 H70 M98 30 H116 M84 44 V62 M84 82 H52 M84 82 H116" className="pv-path" />
          <rect x="12" y="18" width="32" height="24" rx="12" className="pv-fill" />
          <rect x="70" y="18" width="28" height="24" rx="6" className="pv-card" />
          <rect x="116" y="18" width="32" height="24" rx="12" className="pv-card" />
          <path d="M84 62 L100 72 L84 82 L68 72Z" className="pv-card" />
          <rect x="22" y="70" width="30" height="24" rx="6" className="pv-card" />
          <rect x="116" y="70" width="32" height="24" rx="6" className="pv-card" />
          <circle cx="84" cy="72" r="3" className="pv-fill" />
        </>
      )}
      {kind === "wire" && (
        <>
          <rect x="14" y="10" width="132" height="92" rx="6" className="pv-wire" />
          <rect x="22" y="18" width="40" height="6" rx="3" className="pv-line2" />
          <rect x="22" y="32" width="116" height="30" rx="4" className="pv-wire" />
          <path d="M22 32 L138 62 M138 32 L22 62" className="pv-wire-x" />
          <rect x="22" y="70" width="54" height="24" rx="4" className="pv-wire" />
          <rect x="84" y="70" width="54" height="24" rx="4" className="pv-wire" />
        </>
      )}
      {kind === "ui" && (
        <>
          {["#020617", "#2563eb", "#38bdf8", "#67e8f9", "#f3f7ff"].map((c, i) => (
            <rect key={c} x={14 + i * 20} y="12" width="16" height="30" rx="5" fill={c} stroke="rgba(15,30,70,.18)" />
          ))}
          <text x="14" y="82" className="pv-aa">Aa</text>
          <rect x="62" y="56" width="84" height="12" rx="6" className="pv-fill" />
          <rect x="62" y="74" width="40" height="12" rx="6" className="pv-card" />
          <rect x="106" y="74" width="40" height="12" rx="6" className="pv-line2" />
        </>
      )}
      {kind === "proto" && (
        <>
          <rect x="12" y="10" width="46" height="92" rx="8" className="pv-card" />
          <rect x="18" y="18" width="34" height="26" rx="4" className="pv-fill" />
          <rect x="18" y="50" width="34" height="5" rx="2.5" className="pv-line" />
          <rect x="18" y="60" width="26" height="5" rx="2.5" className="pv-line2" />
          <rect x="18" y="78" width="34" height="12" rx="6" className="pv-hot" />
          <rect x="102" y="10" width="46" height="92" rx="8" className="pv-card" />
          <rect x="108" y="18" width="34" height="5" rx="2.5" className="pv-line" />
          <rect x="108" y="30" width="34" height="22" rx="4" className="pv-bar" />
          <rect x="108" y="58" width="34" height="22" rx="4" className="pv-bar" />
          <path d="M52 84 C76 84 76 50 100 50" className="pv-dash" />
          <path d="M95 46 L101 50 L95 55" className="pv-arrow" />
        </>
      )}
      {kind === "test" && (
        <>
          <rect x="12" y="12" width="76" height="88" rx="8" className="pv-card" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx="27" cy={31 + i * 20} r="6" className={i === 2 ? "pv-hot" : "pv-fill"} />
              <rect x="40" y={28 + i * 20} width={[38, 30, 34, 26][i]} height="5" rx="2.5" className={i === 2 ? "pv-line" : "pv-line2"} />
            </g>
          ))}
          <rect x="98" y="12" width="52" height="42" rx="8" className="pv-card" />
          <rect x="106" y="22" width="30" height="5" rx="2.5" className="pv-line" />
          <rect x="106" y="33" width="36" height="5" rx="2.5" className="pv-line2" />
          <rect x="106" y="43" width="24" height="4" rx="2" className="pv-line2" />
          <rect x="98" y="62" width="52" height="38" rx="8" className="pv-card" />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={108 + i * 9} cy="81" r="3.4" className={i < 4 ? "pv-fill" : "pv-line2"} />
          ))}
        </>
      )}
      {kind === "handoff" && (
        <>
          <rect x="14" y="26" width="64" height="30" rx="8" className="pv-fill" />
          <path d="M14 66 H78 M14 62 V70 M78 62 V70" className="pv-red" />
          <path d="M86 26 V56 M82 26 H90 M82 56 H90" className="pv-red" />
          <rect x="102" y="12" width="46" height="88" rx="6" className="pv-card" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x="108" y={22 + i * 16} width="12" height="5" rx="2.5" className="pv-line2" />
              <rect x="124" y={22 + i * 16} width="18" height="5" rx="2.5" className="pv-line" />
            </g>
          ))}
          <rect x="14" y="78" width="64" height="12" rx="6" className="pv-line2" />
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Industry previews                                                   */
/* ------------------------------------------------------------------ */
export function IndustryPreview({ kind }: { kind: IndustryKind }) {
  return (
    <div className={`ui-pv ui-pv--${kind}`} aria-hidden="true">
      {kind === "dash" && (
        <>
          <div className="a">
            <i />
            <i />
            <i />
          </div>
          <div className="b">
            {[40, 64, 50, 78, 58, 88, 70].map((v, i) => (
              <i key={i} style={{ height: `${v}%` }} />
            ))}
          </div>
        </>
      )}
      {kind === "store" &&
        [0, 1, 2, 3].map((i) => (
          <div key={i} className="p">
            <i className={`g${i}`} />
            <b />
          </div>
        ))}
      {kind === "list" &&
        [70, 54, 62, 46].map((v, i) => (
          <div key={i} className="r">
            <i />
            <b style={{ width: `${v}%` }} />
          </div>
        ))}
      {kind === "calendar" &&
        Array.from({ length: 21 }).map((_, i) => <i key={i} className={[4, 9, 15].includes(i) ? "on" : ""} />)}
      {kind === "form" && (
        <>
          <b />
          <b />
          <b className="s" />
          <span />
        </>
      )}
      {kind === "map" && (
        <>
          <i className="pin p1" />
          <i className="pin p2" />
          <i className="pin p3" />
        </>
      )}
      {kind === "cards" && (
        <>
          <div className="c">
            <i />
            <b />
          </div>
          <div className="c">
            <i />
            <b />
          </div>
        </>
      )}
      {kind === "chart" && (
        <svg viewBox="0 0 120 50" preserveAspectRatio="none">
          <path d="M0 40 C16 38 24 18 44 24 S74 44 92 20 S112 10 120 6 V50 H0Z" className="fill" />
          <path d="M0 40 C16 38 24 18 44 24 S74 44 92 20 S112 10 120 6" className="stroke" />
        </svg>
      )}
    </div>
  );
}
