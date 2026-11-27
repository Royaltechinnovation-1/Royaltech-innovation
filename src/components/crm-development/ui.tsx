import { OpenFormButton } from "@/components/FormModal";
import { ArrowRight, CircleCheck } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`crm-eyebrow${light ? " is-light" : ""}`}>{children}</span>;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`crm-section-heading${center ? " is-center" : ""}${light ? " is-light" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function PrimaryCta({
  children,
  service,
  source,
  href,
  variant = "solid",
}: {
  children: ReactNode;
  service?: string;
  source: string;
  href?: string;
  variant?: "solid" | "outline" | "quiet" | "light";
}) {
  const className = `crm-btn crm-btn-${variant}`;
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
        <ArrowRight aria-hidden="true" />
      </Link>
    );
  }
  return (
    <OpenFormButton className={className} title={typeof children === "string" ? children : undefined} source={source} service={service}>
      {children}
      <ArrowRight aria-hidden="true" />
    </OpenFormButton>
  );
}

export function IconCta({ children, service, source }: { children: ReactNode; service?: string; source: string }) {
  return (
    <OpenFormButton className="crm-text-cta" title={typeof children === "string" ? children : undefined} source={source} service={service}>
      {children}
      <ArrowRight aria-hidden="true" />
    </OpenFormButton>
  );
}

export function TagList({ items, light = false }: { items: readonly string[]; light?: boolean }) {
  return (
    <ul className={`crm-tags${light ? " is-light" : ""}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Dot({ tone = "cyan" }: { tone?: "cyan" | "green" | "amber" | "blue" | "violet" | "muted" }) {
  return <span className={`crm-dot crm-dot-${tone}`} aria-hidden="true" />;
}

export function Window({
  title,
  meta,
  children,
  className = "",
  dense = false,
}: {
  title: string;
  meta?: string;
  children: ReactNode;
  className?: string;
  dense?: boolean;
}) {
  return (
    <div className={`crm-window${dense ? " is-dense" : ""} ${className}`}>
      <div className="crm-window-bar">
        <span className="crm-window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="crm-window-title">{title}</span>
        {meta ? <span className="crm-window-meta">{meta}</span> : null}
      </div>
      <div className="crm-window-body">{children}</div>
    </div>
  );
}

export function Metric({
  label,
  value,
  unit,
  note,
  tone = "cyan",
}: {
  label: string;
  value: string;
  unit?: string;
  note?: string;
  tone?: "cyan" | "blue" | "green" | "violet";
}) {
  return (
    <div className={`crm-metric crm-metric-${tone}`}>
      <span className="crm-metric-label">{label}</span>
      <strong>
        {value}
        {unit ? <small>{unit}</small> : null}
      </strong>
      {note ? <span className="crm-metric-note">{note}</span> : null}
    </div>
  );
}

export function Bar({ value, tone = "cyan" }: { value: number; tone?: "cyan" | "blue" | "green" | "violet" }) {
  return (
    <span className="crm-bar" aria-hidden="true">
      <span className={`crm-bar-fill is-${tone}`} style={{ width: `${value}%` }} />
    </span>
  );
}

export function ResourceRow({
  name,
  value,
  tone = "cyan",
  detail,
}: {
  name: string;
  value: number;
  tone?: "cyan" | "blue" | "green" | "violet";
  detail?: string;
}) {
  return (
    <div className="crm-resource-row">
      <div className="crm-resource-top">
        <span>{name}</span>
        <span className="crm-mono">{detail ?? `${value}%`}</span>
      </div>
      <Bar value={value} tone={tone} />
    </div>
  );
}

export function StatusLine({
  label,
  value,
  state = "ok",
}: {
  label: string;
  value: string;
  state?: "ok" | "run" | "warn";
}) {
  return (
    <div className="crm-status-line">
      <Dot tone={state === "ok" ? "green" : state === "run" ? "cyan" : "amber"} />
      <span>{label}</span>
      <b className="crm-mono">{value}</b>
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="crm-check-item">
      <CircleCheck size={15} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export function FlowSteps({ steps, compact = false }: { steps: readonly string[]; compact?: boolean }) {
  return (
    <div className={`crm-flow${compact ? " is-compact" : ""}`}>
      {steps.map((step, index) => (
        <div className="crm-flow-part" key={step}>
          <span className="crm-flow-step">
            <span className="crm-mono">{String(index + 1).padStart(2, "0")}</span>
            {step}
          </span>
          {index < steps.length - 1 ? <ArrowRight className="crm-flow-arrow" aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}

export function TinyChart({ line, fillId, tone = "cyan" }: { line: string; fillId: string; tone?: "cyan" | "violet" }) {
  return (
    <svg className={`crm-chart-svg is-${tone}`} viewBox="0 0 320 90" preserveAspectRatio="none" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L320 90 L0 90 Z`} fill={`url(#${fillId})`} />
      <path d={line} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function IllustrationNote({ children = "Illustrative interface · sample data" }: { children?: ReactNode }) {
  return <span className="crm-illustration-note">{children}</span>;
}

export function PanelLabel({ children }: { children: ReactNode }) {
  return <p className="crm-panel-label">{children}</p>;
}

export function MiniNode({
  icon,
  label,
  meta,
  tone = "cyan",
}: {
  icon: ReactNode;
  label: string;
  meta?: string;
  tone?: "cyan" | "blue" | "green" | "violet" | "amber";
}) {
  return (
    <div className={`crm-mini-node is-${tone}`}>
      <span className="crm-mini-node-icon">{icon}</span>
      <span>
        <strong>{label}</strong>
        {meta ? <small>{meta}</small> : null}
      </span>
    </div>
  );
}


