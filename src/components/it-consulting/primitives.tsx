import type { CSSProperties, ReactNode } from "react";

/**
 * Building blocks for the diagrams on /services/it-consulting.
 * Every diagram is drawn with HTML / CSS / SVG (no stock imagery) and is exposed to assistive tech
 * as a single described image. The content shown inside is illustrative: no figures or client data.
 */

type VisualProps = {
  label: string;
  className?: string;
  aspect?: string;
  children: ReactNode;
};

/** Positioning canvas. It is a CSS container, so children can size text with `cqw`. */
export function Stage({ label, className = "", aspect, children }: VisualProps) {
  return (
    <div
      className={`ic-stage ${className}`.trim()}
      role="img"
      aria-label={label}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {children}
    </div>
  );
}

type AbsProps = {
  l?: number;
  t?: number;
  r?: number;
  b?: number;
  w?: number;
  z?: number;
  rot?: string;
  float?: 0 | 1 | 2;
  className?: string;
  children: ReactNode;
};

/** Absolutely positions a child inside a `.ic-stage` using percentages of the stage. */
export function Abs({ l, t, r, b, w, z = 1, rot, float, className = "", children }: AbsProps) {
  const pct = (n?: number) => (n === undefined ? undefined : `${n}%`);
  const style: CSSProperties = { left: pct(l), top: pct(t), right: pct(r), bottom: pct(b), width: pct(w), zIndex: z, transform: rot };
  return (
    <div className={`ic-abs ${className}`.trim()} style={style}>
      {float === undefined ? children : <div className={`ic-float ic-float--${float}`}>{children}</div>}
    </div>
  );
}

/** An application window. Its width is a container, so inner text scales with it. */
export function Win({
  title,
  tone = "light",
  className = "",
  children,
}: {
  title: string;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`ic-win ic-win--${tone} ${className}`.trim()}>
      <div className="ic-win-bar">
        <i />
        <i />
        <i />
        <span>{title}</span>
      </div>
      <div className="ic-win-body">{children}</div>
    </div>
  );
}

/** Small floating status chip. */
export function Chip({ title, text, dot = "blue", tone = "glass" }: { title: string; text?: string; dot?: "blue" | "cyan" | "green" | "amber"; tone?: "glass" | "light" | "navy" }) {
  return (
    <div className={`ic-chip ic-chip--${tone}`}>
      <span className={`ic-chip-dot ic-chip-dot--${dot}`} />
      <div>
        <div className="ic-chip-t">{title}</div>
        {text ? <div className="ic-chip-s">{text}</div> : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable diagram pieces                                             */
/* ------------------------------------------------------------------ */

export type ArchLayer = {
  label: string;
  chips?: string[];
  band?: string;
  /** numbered callout shown on the layer (used with a legend) */
  badge?: number;
  glow?: boolean;
};

/** Layered enterprise architecture: business → applications → integration → data → cloud. */
export function ArchLayers({ layers, security = "Security & governance", className = "" }: { layers: ArchLayer[]; security?: string; className?: string }) {
  return (
    <div className={`ic-arch ${className}`.trim()}>
      <div className="ic-arch-layers">
        {layers.map((l) => (
          <div className="ic-arch-row" key={l.label}>
            <span className="ic-arch-lbl">
              {l.badge ? <b className="ic-badge">{l.badge}</b> : null}
              {l.label}
            </span>
            {l.chips ? (
              <div className="ic-arch-chips">
                {l.chips.map((c) => (
                  <b key={c}>{c}</b>
                ))}
              </div>
            ) : (
              <div className={`ic-arch-band${l.glow ? " ic-arch-band--glow" : ""}`}>{l.band}</div>
            )}
          </div>
        ))}
      </div>
      <div className="ic-arch-sec">
        <span>{security}</span>
      </div>
    </div>
  );
}

export type GanttRow = {
  label: string;
  bars: { s: number; w: number; text?: string; tone?: 1 | 2 | 3 }[];
  milestones?: number[];
};

/** Roadmap timeline with lanes, bars and milestones. `cols` labels the time axis. */
export function Gantt({ rows, cols, className = "" }: { rows: GanttRow[]; cols: string[]; className?: string }) {
  return (
    <div className={`ic-gantt ${className}`.trim()} style={{ ["--n" as string]: cols.length } as CSSProperties}>
      <div className="ic-gantt-head">
        <span />
        <div>
          {cols.map((c) => (
            <em key={c}>{c}</em>
          ))}
        </div>
      </div>
      {rows.map((r) => (
        <div className="ic-gantt-row" key={r.label}>
          <span className="ic-gantt-lbl">{r.label}</span>
          <div className="ic-gantt-track">
            {r.bars.map((b, i) => (
              <i key={i} className={`ic-gantt-bar t${b.tone ?? 1}`} style={{ left: `${b.s}%`, width: `${b.w}%` }}>
                {b.text}
              </i>
            ))}
            {r.milestones?.map((m) => (
              <u key={m} className="ic-gantt-ms" style={{ left: `${m}%` }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Abstract analytics panel. Bars and lines are illustrative only (no values). */
export function MiniDash({ title = "Operations overview", tiles = ["Workflow flow", "Connected systems", "Open tasks"] }: { title?: string; tiles?: string[] }) {
  return (
    <div className="ic-dash">
      <div className="ic-dash-title">{title}</div>
      <div className="ic-dash-tiles">
        {tiles.map((t, i) => (
          <div key={t} className="ic-dash-tile">
            <span>{t}</span>
            <svg viewBox="0 0 60 18" preserveAspectRatio="none" aria-hidden="true">
              <polyline
                points={["0,14 10,10 20,12 30,6 40,8 50,3 60,5", "0,12 10,13 20,8 30,9 40,5 50,6 60,2", "0,6 10,9 20,5 30,11 40,8 50,12 60,9"][i % 3]}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="ic-dash-bars" aria-hidden="true">
        {[42, 60, 48, 72, 58, 84, 68, 92].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="ic-dash-foot">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
