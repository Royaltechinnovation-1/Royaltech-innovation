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
    src: "/crm-service/crm-1.jpg",
    alt: "RTE CRM dashboard with recent leads, sales funnel and active deals",
    badge: "Leads & Deals",
  },
  {
    src: "/crm-service/crm-2.jpg",
    alt: "CRM analytics dashboard with learner growth and revenue charts",
    badge: "Growth Analytics",
  },
  {
    src: "/crm-service/crm-3.jpg",
    alt: "RTE CRM overview with organizations, team members and platform trends",
    badge: "Team Overview",
  },
  {
    src: "/crm-service/crm-4.jpg",
    alt: "CRM performance dashboard with tasks, quality score and rankings",
    badge: "Performance Hub",
  },
];

export default function PowerfulFeatures() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [active, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      setActive((prev) => (prev + 1) % slides.length);
    } else if (diff < -45) {
      setActive((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setTouchStart(null);
  };

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
            <div
              className="pf-carousel-viewport"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              aria-label="CRM dashboard views carousel"
            >
              <div
                className="pf-carousel-track"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={`pf-carousel-slide${active === index ? " is-active" : ""}`}
                    aria-hidden={active !== index}
                  >
                    <span className="pf-splash-badge">{slide.badge}</span>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={1024}
                      height={1024}
                      className="pf-splash-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 760px"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pf-carousel-dots" role="tablist" aria-label="Dashboard views">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`pf-carousel-dot${active === index ? " is-active" : ""}`}
                  aria-label={`Slide ${index + 1}: ${slide.badge}`}
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>

            <p className="pf-splash-note">
              <Sparkles size={15} aria-hidden="true" />
              Live CRM dashboard views — leads, analytics, teams and performance.
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
