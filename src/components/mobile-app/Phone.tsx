import type { CSSProperties, ReactNode } from "react";

/**
 * Device mockup. The frame is a CSS container, so every measurement inside it uses `cqw`
 * and the whole screen scales with the width the parent gives it.
 * The outer element is exposed to assistive tech as a single described image.
 */
type PhoneProps = {
  variant?: "ios" | "android";
  tone?: "light" | "dark";
  label: string;
  className?: string;
  children: ReactNode;
};

export function Phone({ variant = "ios", tone = "light", label, className = "", children }: PhoneProps) {
  return (
    <div className={`ma-phone ma-phone--${variant} ${className}`.trim()} role="img" aria-label={label}>
      <div className="ma-phone-body" aria-hidden="true">
        <div className={`ma-phone-screen tone-${tone}`}>
          <span className={variant === "ios" ? "ma-island" : "ma-punch"} />
          <div className="mp-status">
            <span>9:41</span>
            <span className="mp-sig">
              <i />
              <i />
              <i />
              <b />
            </span>
          </div>
          {children}
          <span className="mp-home" />
          <span className="ma-phone-gloss" />
        </div>
      </div>
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

/** Absolutely positions a child inside a `.ma-stage` using percentages of the stage. */
export function Abs({ l, t, r, b, w, z = 1, rot, float, className = "", children }: AbsProps) {
  const pct = (n?: number) => (n === undefined ? undefined : `${n}%`);
  const style: CSSProperties = {
    left: pct(l),
    top: pct(t),
    right: pct(r),
    bottom: pct(b),
    width: pct(w),
    zIndex: z,
    transform: rot,
  };
  return (
    <div className={`ma-abs ${className}`.trim()} style={style}>
      {float === undefined ? children : <div className={`ma-float ma-float--${float}`}>{children}</div>}
    </div>
  );
}

type FloatCardProps = {
  title: string;
  text?: string;
  tone?: "glass" | "light" | "navy";
  dot?: "blue" | "cyan" | "green" | "amber";
  className?: string;
};

/** Small notification-style card that floats near a device. Sized in `cqw` of its stage. */
export function FloatCard({ title, text, tone = "glass", dot = "blue", className = "" }: FloatCardProps) {
  return (
    <div className={`ma-fcard ma-fcard--${tone} ${className}`.trim()} aria-hidden="true">
      <span className={`ma-fcard-dot ma-fcard-dot--${dot}`} />
      <div className="ma-fcard-copy">
        <div className="ma-fcard-t">{title}</div>
        {text ? <div className="ma-fcard-s">{text}</div> : null}
      </div>
    </div>
  );
}

/** Desktop-style window used for admin / dashboard visuals. Sized in `cqw`. */
export function Win({ label, title, children, className = "" }: { label: string; title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`ma-win ${className}`.trim()} role="img" aria-label={label}>
      <div className="ma-win-inner" aria-hidden="true">
        <div className="ma-win-bar">
          <span className="ma-win-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="ma-win-title">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
