"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  BellRing,
  Bot,
  Building2,
  CalendarDays,
  ChartColumnIncreasing,
  ClipboardList,
  Filter,
  Handshake,
  Mail,
  MessageSquare,
  Plug,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./powerful-features.css";

function useSplashSpread() {
  const [spread, setSpread] = useState({ x: 78, y: 12, rot: 3.5, scale: 0.07 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSpread({ x: 28, y: 8, rot: 2, scale: 0.05 });
      else if (w < 720) setSpread({ x: 42, y: 10, rot: 2.5, scale: 0.06 });
      else if (w < 980) setSpread({ x: 56, y: 11, rot: 3, scale: 0.065 });
      else if (w < 1200) setSpread({ x: 66, y: 12, rot: 3.2, scale: 0.07 });
      else setSpread({ x: 78, y: 12, rot: 3.5, scale: 0.07 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return spread;
}

const features = [
  {
    title: "Contact Management",
    description: "Manage all customer information with ease.",
    detail: "Store profiles, notes, history and follow-ups in one clean workspace.",
    icon: Users,
  },
  {
    title: "Sales Pipeline",
    description: "Track leads and sales opportunities.",
    detail: "Move deals stage by stage and never lose sight of next actions.",
    icon: Filter,
  },
  {
    title: "Reports & Analytics",
    description: "Monitor performance with real-time insights.",
    detail: "See conversion, revenue and team activity with clear live dashboards.",
    icon: BarChart3,
  },
  {
    title: "Task Management",
    description: "Organize tasks and boost team productivity.",
    detail: "Assign work, set reminders and keep every follow-up on schedule.",
    icon: ClipboardList,
  },
];

const modules = [
  { title: "Lead Capture", text: "Website forms, WhatsApp and ads sync into one inbox.", icon: Target },
  { title: "Deal Tracking", text: "Know deal value, owner and close probability instantly.", icon: Handshake },
  { title: "Smart Automation", text: "Auto reminders, stage updates and assignment rules.", icon: Bot },
  { title: "Team Collaboration", text: "Comments, shared notes and activity timelines.", icon: MessageSquare },
  { title: "Email & Calling", text: "Log outreach and keep communication history ready.", icon: Mail },
  { title: "Secure Access", text: "Role-based permissions for sales, support and admin.", icon: ShieldCheck },
  { title: "Meeting Planner", text: "Schedule demos and sync follow-ups with your calendar.", icon: CalendarDays },
  { title: "Smart Alerts", text: "Get notified on hot leads, overdue tasks and wins.", icon: BellRing },
  { title: "Growth Insights", text: "Spot bottlenecks early with funnel and cohort views.", icon: ChartColumnIncreasing },
];

const stats = [
  { value: "360°", label: "Customer View", icon: Building2 },
  { value: "2x", label: "Faster Follow-ups", icon: Zap },
  { value: "Real-time", label: "Sales Insights", icon: ChartColumnIncreasing },
  { value: "24/7", label: "Workflow Ready", icon: Workflow },
];

const slides = [
  {
    src: "/crm/dashboards/crm-1.jpg",
    alt: "RTE CRM dashboard with recent leads, sales funnel and active deals",
    badge: "Leads & Deals",
  },
  {
    src: "/crm/dashboards/crm-2.jpg",
    alt: "CRM analytics dashboard with learner growth and revenue charts",
    badge: "Growth Analytics",
  },
  {
    src: "/crm/dashboards/crm-3.jpg",
    alt: "RTE CRM overview with organizations, team members and platform trends",
    badge: "Team Overview",
  },
  {
    src: "/crm/dashboards/crm-4.jpg",
    alt: "CRM performance dashboard with tasks, quality score and rankings",
    badge: "Performance Hub",
  },
];

export default function PowerfulFeatures() {
  const [active, setActive] = useState(1);
  const spread = useSplashSpread();

  return (
    <section className="pf-section" id="powerful-features" aria-labelledby="pf-title">
      <div className="pf-container">
        <div className="pf-heading">
          <p className="pf-label">— Powerful Features —</p>
          <h2 id="pf-title">A Complete CRM Solution for Your Business</h2>
          <p className="pf-sub">
            Powerful tools, intuitive design, and real-time insights — all in
            one place. Built for sales teams that want clarity, speed and better
            customer relationships from first lead to closed deal.
          </p>
        </div>

        <div className="pf-stats" aria-label="CRM highlights">
          {stats.map(({ value, label, icon: Icon }) => (
            <div className="pf-stat" key={label}>
              <span className="pf-stat-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pf-body">
          <ul className="pf-features" aria-label="CRM feature highlights">
            {features.map(({ title, description, detail, icon: Icon }, index) => (
              <li className="pf-feature" key={title}>
                <span className="pf-feature-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2.1} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <small>{detail}</small>
                  <button
                    type="button"
                    className="pf-feature-link"
                    onClick={() => setActive(index)}
                  >
                    View dashboard
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="pf-splash-wrap">
            <div className="pf-splash" aria-label="CRM dashboard splash cards">
              {slides.map((slide, index) => {
                const offset = index - active;
                const depth = Math.abs(offset);
                return (
                  <button
                    key={slide.src}
                    type="button"
                    className={`pf-splash-card${active === index ? " is-active" : ""}`}
                    style={{
                      transform: `translateX(${offset * spread.x}px) translateY(${depth * spread.y}px) rotate(${offset * spread.rot}deg) scale(${1 - depth * spread.scale})`,
                      zIndex: 10 - depth + (active === index ? 10 : 0),
                      opacity: 1 - depth * 0.1,
                    }}
                    aria-label={`Show ${slide.alt}`}
                    aria-pressed={active === index}
                    onClick={() => setActive(index)}
                  >
                    <span className="pf-splash-badge">{slide.badge}</span>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={1100}
                      height={1300}
                      className="pf-splash-image"
                      sizes="(max-width: 480px) 78vw, (max-width: 900px) 70vw, 520px"
                      priority={index === 0}
                    />
                  </button>
                );
              })}
            </div>
            <p className="pf-splash-note">
              <Sparkles size={15} aria-hidden="true" />
              Click any card to explore live CRM views — leads, analytics, teams
              and performance.
            </p>
          </div>
        </div>

        <div className="pf-modules">
          <div className="pf-modules-head">
            <h3>Everything your growth team needs</h3>
            <p>
              From first lead to closed deal, RoyalTech CRM keeps your pipeline,
              conversations and reporting connected.
            </p>
          </div>
          <ul className="pf-module-grid">
            {modules.map(({ title, text, icon: Icon }) => (
              <li className="pf-module" key={title}>
                <span className="pf-module-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.1} />
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="pf-cta">
          <div className="pf-cta-copy">
            <span className="pf-cta-icons" aria-hidden="true">
              <BellRing size={16} />
              <CalendarDays size={16} />
              <Plug size={16} />
            </span>
            <h3>Ready to run sales with clarity?</h3>
            <p>
              Get a walkthrough of dashboards, automation and reporting tailored
              to your process.
            </p>
          </div>
          <a href="/contact" className="pf-cta-btn">
            Book a Free CRM Demo
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
