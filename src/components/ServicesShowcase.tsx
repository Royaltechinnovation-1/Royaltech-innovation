"use client";

import { useFormModal } from "@/components/FormModal";
import {
  FAQ_ITEMS,
  SERVICES,
  TECH_ECOSYSTEM,
  type Pillar,
  type Service,
  type TechTab,
} from "@/data/services-catalog";
import "@/styles/services-showcase.css";
import { useEffect, useMemo, useState, type KeyboardEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaAws,
  FaBagShopping,
  FaBolt,
  FaBrain,
  FaBriefcase,
  FaBuildingColumns,
  FaBuildingShield,
  FaBullhorn,
  FaCartShopping,
  FaChartLine,
  FaCheck,
  FaChevronDown,
  FaCircleCheck,
  FaCircleQuestion,
  FaCity,
  FaCloudArrowUp,
  FaCode,
  FaComments,
  FaCompass,
  FaCompassDrafting,
  FaCubes,
  FaDatabase,
  FaDiagramProject,
  FaDocker,
  FaFire,
  FaGears,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaHeadset,
  FaHeartPulse,
  FaInfinity,
  FaLandmark,
  FaLayerGroup,
  FaLock,
  FaMagnifyingGlass,
  FaMagnifyingGlassChart,
  FaMicrochip,
  FaMicrosoft,
  FaMobileScreen,
  FaMobileScreenButton,
  FaNodeJs,
  FaPalette,
  FaPenNib,
  FaPlugCircleBolt,
  FaPython,
  FaReact,
  FaRobot,
  FaRoute,
  FaShieldHalved,
  FaSnowflake,
  FaStar,
  FaTruckFast,
  FaUserGraduate,
  FaUsersGear,
  FaWandMagicSparkles,
  FaXmark,
} from "react-icons/fa6";

/** Icon lookup used by the catalogue data (keys are Font Awesome names). */
const ICONS: Record<string, IconType> = {
  "arrow-right": FaArrowRight,
  aws: FaAws,
  "bag-shopping": FaBagShopping,
  bolt: FaBolt,
  brain: FaBrain,
  briefcase: FaBriefcase,
  "building-columns": FaBuildingColumns,
  "building-shield": FaBuildingShield,
  bullhorn: FaBullhorn,
  "cart-shopping": FaCartShopping,
  "chart-line": FaChartLine,
  check: FaCheck,
  "chevron-down": FaChevronDown,
  "circle-check": FaCircleCheck,
  "circle-question": FaCircleQuestion,
  city: FaCity,
  "cloud-arrow-up": FaCloudArrowUp,
  code: FaCode,
  comments: FaComments,
  compass: FaCompass,
  "compass-drafting": FaCompassDrafting,
  cubes: FaCubes,
  database: FaDatabase,
  "diagram-project": FaDiagramProject,
  docker: FaDocker,
  fire: FaFire,
  gears: FaGears,
  globe: FaGlobe,
  "graduation-cap": FaGraduationCap,
  handshake: FaHandshake,
  headset: FaHeadset,
  "heart-pulse": FaHeartPulse,
  infinity: FaInfinity,
  landmark: FaLandmark,
  "layer-group": FaLayerGroup,
  lock: FaLock,
  "magnifying-glass-chart": FaMagnifyingGlassChart,
  microchip: FaMicrochip,
  microsoft: FaMicrosoft,
  "mobile-screen": FaMobileScreen,
  "mobile-screen-button": FaMobileScreenButton,
  "node-js": FaNodeJs,
  palette: FaPalette,
  "pen-nib": FaPenNib,
  "plug-circle-bolt": FaPlugCircleBolt,
  python: FaPython,
  react: FaReact,
  robot: FaRobot,
  route: FaRoute,
  "shield-halved": FaShieldHalved,
  snowflake: FaSnowflake,
  star: FaStar,
  "truck-fast": FaTruckFast,
  "user-graduate": FaUserGraduate,
  "users-gear": FaUsersGear,
  "wand-magic-sparkles": FaWandMagicSparkles,
  xmark: FaXmark,
};

function Ico({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}

type Filter = "all" | Pillar;

/* ------------------------------------------------------------------ */
/* Static copy                                                         */
/* ------------------------------------------------------------------ */

const PILLARS: {
  id: Pillar;
  sectionId: string;
  icon: string;
  eyebrow: string;
  title: string;
  blurb: string;
  eyebrowClass: string;
  ruleClass: string;
  blurbClass: string;
  gridClass: string;
  wrapClass: string;
}[] = [
  {
    id: "core",
    sectionId: "core-services",
    icon: "layer-group",
    eyebrow: "Pillar 01 • Digital Engineering",
    title: "Core Services",
    blurb:
      "Foundational software engineering, product design, and strategic IT consulting built to launch, modernize, and scale your digital operations.",
    eyebrowClass: "tw:text-cyanGlow",
    ruleClass: "tw:border-white/10",
    blurbClass: "tw:text-slate-400",
    gridClass: "tw:xl:grid-cols-4",
    wrapClass: "tw:mb-20",
  },
  {
    id: "ai",
    sectionId: "ai-services",
    icon: "microchip",
    eyebrow: "Pillar 02 • Intelligent Automation",
    title: "AI Services",
    blurb:
      "Next-generation artificial intelligence, custom LLMs, and autonomous agents engineered to turn enterprise data into decisive action.",
    eyebrowClass: "tw:text-cyanGlow",
    ruleClass: "tw:border-cyanGlow/25",
    blurbClass: "tw:text-slate-300",
    gridClass: "tw:lg:grid-cols-3",
    wrapClass: "tw:mb-20 tw:relative",
  },
  {
    id: "business",
    sectionId: "business-solutions",
    icon: "briefcase",
    eyebrow: "Pillar 03 • Enterprise Platforms",
    title: "Business Solutions",
    blurb:
      "Scalable, multi-tenant platforms and cloud-native infrastructure tailored to streamline operations, commerce, and learning.",
    eyebrowClass: "tw:text-warmGold",
    ruleClass: "tw:border-warmGold/25",
    blurbClass: "tw:text-slate-400",
    gridClass: "tw:lg:grid-cols-3",
    wrapClass: "",
  },
];

const CARD_STYLES: Record<
  Pillar,
  {
    card: string;
    iconBox: string;
    action: string;
    check: string;
    badge?: { label: string; className: string };
  }
> = {
  core: {
    card: "svx-card-core",
    iconBox: "tw:bg-cyanGlow/10 tw:border-cyanGlow/30 tw:text-cyanGlow tw:group-hover:bg-cyanGlow tw:group-hover:text-obsidian",
    action: "tw:text-cyanGlow",
    check: "tw:text-cyanGlow",
  },
  ai: {
    card: "svx-card-ai",
    iconBox: "tw:bg-cyanGlow/15 tw:border-cyanGlow/40 tw:text-cyanGlow tw:group-hover:bg-cyanGlow tw:group-hover:text-obsidian",
    action: "tw:text-cyanGlow",
    check: "tw:text-cyanGlow",
    badge: {
      label: "AI",
      className: "tw:bg-cyanGlow/15 tw:text-cyanGlow tw:border-cyanGlow/30",
    },
  },
  business: {
    card: "svx-card-business",
    iconBox: "tw:bg-warmGold/15 tw:border-warmGold/35 tw:text-warmGold tw:group-hover:bg-warmGold tw:group-hover:text-obsidian",
    action: "tw:text-warmGold",
    check: "tw:text-warmGold",
    badge: {
      label: "Enterprise",
      className: "tw:bg-warmGold/15 tw:text-warmGold tw:border-warmGold/30",
    },
  },
};

const HERO_METRICS = [
  { value: "150", suffix: "+", suffixClass: "tw:text-cyanGlow", label: "Projects Delivered Globally" },
  { value: "99.9", suffix: "%", suffixClass: "tw:text-warmGold", label: "Cloud & SaaS Uptime SLA" },
  { value: "40", suffix: "+", suffixClass: "tw:text-cyanGlow", label: "Enterprise & Scale-Up Clients" },
  { value: "3.5", suffix: "x", suffixClass: "tw:text-warmGold", label: "Avg. AI Automation ROI" },
];

const DIFFERENTIATORS = [
  {
    icon: "brain",
    gold: false,
    title: "AI-First Architecture",
    text: "We embed intelligent automation, vector search, and predictive models directly into your core product data layer rather than bolting on superficial wrappers.",
  },
  {
    icon: "lock",
    gold: true,
    title: "Enterprise Security & Compliance",
    text: "SOC2-aligned SDLC, zero-trust RBAC, end-to-end TLS/AES encryption, and private LLM isolation ensure your proprietary data never leaks into public training sets.",
  },
  {
    icon: "bolt",
    gold: false,
    title: "Agile & Transparent Delivery",
    text: "Bi-weekly sprint demos, dedicated Slack/Jira channels, and live staging environments give your leadership real-time visibility from day one.",
  },
  {
    icon: "infinity",
    gold: true,
    title: "Full-Lifecycle Ownership",
    text: "From discovery workshops and UI/UX wireframes to Kubernetes orchestration, load testing, and 24/7 SLA monitoring—100% IP belongs to you.",
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    when: "Week 1–2",
    title: "Discovery & Technical Architecture",
    text: "Stakeholder workshops, workflow audits, system architecture diagrams, data schema modeling, and ROI milestone mapping.",
    topClass: "tw:border-t-cyanGlow",
    numClass: "tw:text-cyanGlow",
  },
  {
    n: "02",
    when: "Week 2–4",
    title: "UI/UX Prototyping & Validation",
    text: "Interactive Figma prototypes, user flow validation, design token systems, and early stakeholder usability sign-off.",
    topClass: "tw:border-t-cyanGlow/70",
    numClass: "tw:text-cyanGlow",
  },
  {
    n: "03",
    when: "Sprints",
    title: "Agile Engineering & AI Training",
    text: "Full-stack development, RAG/LLM fine-tuning, API orchestration, and bi-weekly live sprint releases on staging servers.",
    topClass: "tw:border-t-warmGold",
    numClass: "tw:text-warmGold",
  },
  {
    n: "04",
    when: "Pre-Launch",
    title: "QA Testing, Security & Optimization",
    text: "Automated E2E testing, penetration audits, AI hallucination guardrails, and sub-second latency tuning.",
    topClass: "tw:border-t-cyanGlow/70",
    numClass: "tw:text-cyanGlow",
  },
  {
    n: "05",
    when: "Ongoing",
    title: "Cloud Deployment & 24/7 Support",
    text: "Zero-downtime CI/CD launch, team onboarding documentation, real-time telemetry, and proactive SLA maintenance.",
    topClass: "tw:border-t-warmGold",
    numClass: "tw:text-warmGold",
  },
];

const TECH_TABS: { id: TechTab; label: string }[] = [
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "backend", label: "Backend & Cloud DevOps" },
  { id: "ai", label: "AI, LLMs & Data Engineering" },
];

const INDUSTRIES = [
  {
    icon: "landmark",
    gold: false,
    title: "FinTech & Banking",
    text: "Real-time payment orchestration, automated KYC/AML onboarding, AI fraud scoring, and wealth analytics portals with bank-grade encryption.",
    uses: "Use Cases: Fraud ML • Automated Underwriting • Client Portals",
  },
  {
    icon: "heart-pulse",
    gold: false,
    title: "Healthcare & MedTech",
    text: "HIPAA-ready telehealth apps, AI patient triage assistants, EHR interoperability APIs, and automated clinical documentation workflows.",
    uses: "Use Cases: AI Triage Bots • Telemedicine • EHR Sync",
  },
  {
    icon: "bag-shopping",
    gold: true,
    title: "E-Commerce & Retail",
    text: "Headless omnichannel storefronts, AI visual search & shopping concierges, dynamic pricing engines, and multi-warehouse ERP inventory sync.",
    uses: "Use Cases: Headless Commerce • AI Shopping Assistants",
  },
  {
    icon: "user-graduate",
    gold: false,
    title: "EdTech & Corporate Learning",
    text: "Custom multi-tenant LMS platforms, AI personalized study tutors, automated grading pipelines, and interactive cohort video environments.",
    uses: "Use Cases: Enterprise LMS • AI Tutoring Copilots",
  },
  {
    icon: "truck-fast",
    gold: true,
    title: "Logistics & Supply Chain",
    text: "Predictive demand forecasting, fleet route optimization, automated bill-of-lading OCR extraction, and real-time supplier ERP portals.",
    uses: "Use Cases: Demand ML • Document OCR • Fleet Tracking",
  },
  {
    icon: "city",
    gold: false,
    title: "Real Estate & PropTech",
    text: "24/7 AI property leasing concierges, automated tenant CRM portals, predictive property valuation models, and smart lease management.",
    uses: "Use Cases: AI Leasing Agents • Custom PropTech CRMs",
  },
];

const AI_STACK = [
  {
    icon: "robot",
    title: "Autonomous AI Agents",
    text: "Multi-step CRM & ERP task execution",
    stat: "+78% Efficiency",
    gold: false,
  },
  {
    icon: "brain",
    title: "Enterprise RAG & GenAI",
    text: "Private knowledge base & API pipelines",
    stat: "SOC2 Ready",
    gold: true,
  },
  {
    icon: "chart-line",
    title: "Predictive BI Dashboards",
    text: "Real-time forecasting & anomaly alerts",
    stat: "Real-Time",
    gold: false,
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function ServicesShowcase({ rootClass = "" }: { rootClass?: string }) {
  const { openForm } = useFormModal();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [techTab, setTechTab] = useState<TechTab>("frontend");
  const [openFaq, setOpenFaq] = useState<number[]>([0]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeService = useMemo(
    () => SERVICES.find((s) => s.id === activeId) ?? null,
    [activeId],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const inCategory = filter === "all" || s.pillar === filter;
      const inSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q) ||
        s.tech.some((t) => t.toLowerCase().includes(q));
      return inCategory && inSearch;
    });
  }, [filter, query]);

  const counts = useMemo(
    () => ({
      all: SERVICES.length,
      core: SERVICES.filter((s) => s.pillar === "core").length,
      ai: SERVICES.filter((s) => s.pillar === "ai").length,
      business: SERVICES.filter((s) => s.pillar === "business").length,
    }),
    [],
  );

  const openQuote = (topic: string) =>
    openForm({
      title: topic.includes("Consultation") ? "Request a Consultation" : "Get a Tailored Quote",
      source: "services-page",
      service: topic,
    });

  const jumpToAI = () => {
    setFilter("ai");
    setQuery("");
    document
      .getElementById("services-explorer")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const resetFilters = () => {
    setQuery("");
    setFilter("all");
  };

  const toggleFaq = (index: number) =>
    setOpenFaq((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
    );

  // Header / footer links such as /services#web-dev: show every card, scroll to it, flash it and open its details.
  // Next.js can change the hash without a scroll event, so this handles anchors on this page ourselves.
  useEffect(() => {
    let flashTimer: number | undefined;
    const serviceIds = new Set(SERVICES.map((service) => service.id));

    const goTo = (id: string) => {
      setFilter("all");
      setQuery("");
      setActiveId(null);
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.classList.remove("svx-flash");
          void el.offsetWidth;
          el.classList.add("svx-flash");
          window.clearTimeout(flashTimer);
          flashTimer = window.setTimeout(() => el.classList.remove("svx-flash"), 2200);
        }
        if (serviceIds.has(id)) setActiveId(id);
      }, 60);
    };

    const idFromHref = (href: string) => {
      const match = href.match(/^(?:https?:\/\/[^/]+)?\/services\/?#(.+)$/);
      return match ? decodeURIComponent(match[1]) : null;
    };

    const onClick = (event: globalThis.MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      const id = anchor ? idFromHref(anchor.getAttribute("href") ?? "") : null;
      if (!anchor || !id) return;
      // Keep the event flowing so the header can close its mega menu before we scroll.
      event.preventDefault();
      window.history.pushState(null, "", `/services#${id}`);
      goTo(id);
    };

    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) goTo(decodeURIComponent(id));
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onHashChange);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onHashChange);
      window.removeEventListener("hashchange", onHashChange);
      window.clearTimeout(flashTimer);
    };
  }, []);

  // Close the detail dialog with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!activeId) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [activeId]);

  const onCardKey = (event: KeyboardEvent<HTMLElement>, id: string) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveId(id);
    }
  };

  const rootClassName = `svx-root ${rootClass}`.trim();

  return (
    <div className={rootClassName}>
      {/* ==================== HERO ==================== */}
      <section className="svx-hero tw:relative svx-ambient-grid tw:border-b tw:border-white/10">
        <div className="svx-wrap">
          <div className="svx-measure-lg tw:mx-auto tw:text-center">
            <div className="tw:inline-flex tw:flex-wrap tw:justify-center tw:items-center tw:gap-2.5 tw:px-4 tw:py-1.5 tw:rounded-full tw:bg-white/[0.04] tw:border tw:border-cyanGlow/30 tw:mb-7">
              <span className="tw:w-2 tw:h-2 tw:rounded-full tw:bg-cyanGlow tw:animate-pulse" />
              <span className="tw:text-xs tw:font-semibold tw:tracking-widest tw:uppercase tw:text-cyanGlow">
                RoyalTech Innovation
              </span>
              <span className="tw:text-slate-600 tw:hidden tw:sm:inline">|</span>
              <span className="tw:text-xs tw:font-medium tw:text-warmGold">
                Enterprise Digital & AI Engineering
              </span>
            </div>

            <h1 className="svx-display tw:font-extrabold svx-h1 tw:text-white tw:tracking-tight tw:leading-[1.12]">
              Build Smarter, Grow Faster with{" "}
              <span className="tw:bg-linear-to-r tw:from-cyanGlow tw:via-cyan-200 tw:to-goldLight tw:bg-clip-text tw:text-transparent">
                End-to-End Digital & AI Solutions
              </span>
            </h1>

            <p className="tw:mt-6 svx-lead tw:text-slate-300/90 svx-measure-md tw:mx-auto tw:leading-relaxed tw:font-normal">
              From bespoke web & mobile platforms to autonomous AI agents and enterprise SaaS
              architecture, we engineer high-velocity software that automates workflows and
              unlocks measurable revenue growth.
            </p>

            <div className="tw:mt-10 tw:flex tw:flex-col tw:sm:flex-row tw:items-center tw:justify-center tw:gap-4">
              <button
                type="button"
                onClick={() => openQuote("Project Quote Request")}
                className="tw:w-full tw:sm:w-auto tw:px-8 tw:py-4 tw:rounded-full tw:bg-cyanGlow tw:text-obsidian svx-display tw:font-bold tw:text-sm tw:tracking-wide svx-btn-glow tw:hover:bg-white tw:flex tw:items-center tw:justify-center tw:gap-2.5"
              >
                <span>Get a Free Project Quote</span>
                <Ico name="arrow-right" />
              </button>
              <button
                type="button"
                onClick={jumpToAI}
                className="tw:w-full tw:sm:w-auto tw:px-8 tw:py-4 tw:rounded-full tw:bg-white/[0.04] tw:hover:bg-white/[0.09] tw:text-white tw:border tw:border-warmGold/50 tw:hover:border-warmGold svx-display tw:font-semibold tw:text-sm tw:tracking-wide tw:transition-all tw:flex tw:items-center tw:justify-center tw:gap-2.5"
              >
                <Ico name="microchip" className="tw:text-warmGold" />
                <span>Explore AI Services →</span>
              </button>
            </div>

            <div className="tw:mt-14 tw:grid tw:grid-cols-2 tw:md:grid-cols-4 tw:gap-4 svx-measure-lg tw:mx-auto">
              {HERO_METRICS.map((m) => (
                <div key={m.label} className="svx-glass-panel tw:rounded-2xl tw:p-4 tw:text-center">
                  <div className="svx-display tw:font-extrabold tw:text-2xl tw:sm:text-3xl tw:text-white">
                    {m.value}
                    <span className={m.suffixClass}>{m.suffix}</span>
                  </div>
                  <div className="tw:text-xs tw:text-slate-400 tw:mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES EXPLORER ==================== */}
      <section id="services-explorer" className="svx-section tw:scroll-mt-24">
        <div className="svx-wrap">
          <div className="svx-glass-panel tw:rounded-2xl tw:p-4 tw:sm:p-5 tw:mb-14 tw:flex tw:flex-col tw:lg:flex-row tw:items-stretch tw:lg:items-center tw:justify-between tw:gap-4">
            <div
              className="tw:flex tw:flex-wrap tw:items-center tw:gap-2"
              role="group"
              aria-label="Service categories"
            >
              <FilterTab
                active={filter === "all"}
                onClick={() => setFilter("all")}
                label="All Services"
                count={counts.all}
              />
              <FilterTab
                active={filter === "core"}
                onClick={() => setFilter("core")}
                icon={<Ico name="layer-group" className="tw:text-cyanGlow tw:mr-1.5" />}
                label="Core Services"
                count={counts.core}
              />
              <FilterTab
                active={filter === "ai"}
                onClick={() => setFilter("ai")}
                icon={<Ico name="microchip" className="tw:text-cyanGlow tw:mr-1.5" />}
                label="AI Services"
                count={counts.ai}
              />
              <FilterTab
                active={filter === "business"}
                onClick={() => setFilter("business")}
                icon={<Ico name="briefcase" className="tw:text-warmGold tw:mr-1.5" />}
                label="Business Solutions"
                count={counts.business}
              />
            </div>

            <div className="tw:relative tw:w-full tw:lg:w-72">
              <FaMagnifyingGlass
                aria-hidden="true"
                className="tw:absolute tw:left-3.5 tw:top-1/2 tw:-translate-y-1/2 tw:text-slate-400 tw:text-xs"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services, AI, ERP, SaaS..."
                aria-label="Search services"
                className="tw:w-full tw:pl-9 tw:pr-4 tw:py-2.5 tw:rounded-xl tw:bg-[#020617]/90 tw:border tw:border-white/15 tw:text-xs tw:sm:text-sm tw:text-white tw:placeholder:text-slate-400 tw:focus:outline-none tw:focus:border-cyanGlow tw:transition-colors"
              />
            </div>
          </div>

          {visible.length === 0 ? (
            <div className="svx-glass-panel tw:rounded-3xl tw:p-12 tw:text-center tw:my-8" role="status">
              <div className="tw:w-14 tw:h-14 tw:rounded-2xl tw:bg-cyanGlow/10 tw:border tw:border-cyanGlow/30 tw:text-cyanGlow tw:flex tw:items-center tw:justify-center tw:mx-auto tw:mb-4 tw:text-xl">
                <Ico name="compass" />
              </div>
              <h3 className="svx-display tw:font-bold tw:text-xl tw:text-white">No matching services found</h3>
              <p className="tw:text-slate-400 tw:text-sm tw:mt-2 tw:max-w-md tw:mx-auto">
                Try clearing your search term or selecting &quot;All Services&quot; to view our full
                engineering catalog.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="tw:mt-5 tw:px-5 tw:py-2.5 tw:rounded-full tw:bg-cyanGlow tw:text-obsidian tw:font-bold tw:text-xs tw:uppercase tw:tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : null}

          {PILLARS.map((pillar) => {
            const items = visible.filter((s) => s.pillar === pillar.id);
            if (items.length === 0) return null;
            return (
              <div
                key={pillar.id}
                id={pillar.sectionId}
                className={`${pillar.wrapClass} tw:scroll-mt-24`}
              >
                {pillar.id === "ai" ? (
                  <div className="tw:absolute tw:-inset-4 tw:rounded-3xl tw:bg-linear-to-b tw:from-cyanGlow/[0.04] tw:to-transparent tw:pointer-events-none tw:-z-10" />
                ) : null}

                <div
                  className={`${pillar.ruleClass} tw:flex tw:flex-col tw:md:flex-row tw:md:items-end tw:justify-between tw:mb-8 tw:pb-4 tw:border-b`}
                >
                  <div>
                    <div
                      className={`${pillar.eyebrowClass} tw:inline-flex tw:items-center tw:gap-2 tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:mb-2`}
                    >
                      <Ico name={pillar.icon} />
                      <span>{pillar.eyebrow}</span>
                    </div>
                    <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white tw:flex tw:items-center tw:gap-3">
                      <span>{pillar.title}</span>
                      {pillar.id === "ai" ? (
                        <span className="tw:text-[11px] tw:font-bold tw:uppercase tw:tracking-wider tw:px-3 tw:py-1 tw:rounded-full tw:bg-cyanGlow/15 tw:border tw:border-cyanGlow/40 tw:text-cyanGlow">
                          High Impact
                        </span>
                      ) : null}
                    </h2>
                  </div>
                  <p className={`${pillar.blurbClass} tw:text-sm tw:max-w-xl tw:mt-2 tw:md:mt-0`}>
                    {pillar.blurb}
                  </p>
                </div>

                <div className={`${pillar.gridClass} tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-6`}>
                  {items.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onOpen={() => setActiveId(service.id)}
                      onKeyDown={(event) => onCardKey(event, service.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== WHY ROYALTECH ==================== */}
      <section id="why-royaltech" className="svx-section tw:border-t tw:border-white/10 tw:bg-[#050b18]/70">
        <div className="svx-wrap">
          <div className="svx-measure-md tw:mx-auto tw:text-center tw:mb-14">
            <div className="tw:inline-flex tw:items-center tw:gap-2 tw:text-warmGold tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:mb-3">
              <Ico name="shield-halved" />
              <span>Engineering Standards & Differentiators</span>
            </div>
            <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white">
              Why Forward-Thinking Enterprises Build With RoyalTech
            </h2>
            <p className="tw:text-slate-400 tw:text-sm tw:sm:text-base tw:mt-3 tw:leading-relaxed">
              We combine disciplined enterprise software architecture with rapid AI
              experimentation—ensuring every platform we ship is secure, maintainable, and built
              for measurable commercial return.
            </p>
          </div>

          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-4 tw:gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className={`${
                  d.gold
                    ? "tw:border-warmGold/25 tw:hover:border-warmGold/60"
                    : "tw:border-cyanGlow/25 tw:hover:border-cyanGlow/60"
                } svx-glass-panel tw:rounded-2xl tw:p-6 tw:border tw:transition-all`}
              >
                <div
                  className={`${
                    d.gold
                      ? "tw:bg-warmGold/15 tw:border-warmGold/35 tw:text-warmGold"
                      : "tw:bg-cyanGlow/15 tw:border-cyanGlow/35 tw:text-cyanGlow"
                  } tw:w-12 tw:h-12 tw:rounded-xl tw:border tw:flex tw:items-center tw:justify-center tw:text-xl tw:mb-5`}
                >
                  <Ico name={d.icon} />
                </div>
                <h3 className="svx-display tw:font-bold tw:text-lg tw:text-white tw:mb-2">{d.title}</h3>
                <p className="tw:text-xs tw:sm:text-sm tw:text-slate-400 tw:leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section id="process-strip" className="svx-section tw:border-t tw:border-white/10">
        <div className="svx-wrap">
          <div className="tw:flex tw:flex-col tw:lg:flex-row tw:lg:items-end tw:justify-between tw:mb-14 tw:gap-4">
            <div>
              <div className="tw:inline-flex tw:items-center tw:gap-2 tw:text-cyanGlow tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:mb-2">
                <Ico name="route" />
                <span>Execution Blueprint</span>
              </div>
              <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white">
                Our 5-Step Delivery Process
              </h2>
            </div>
            <p className="tw:text-slate-400 tw:text-sm tw:max-w-xl">
              A predictable, milestone-driven framework designed to eliminate scope creep, de-risk
              complex integrations, and accelerate time-to-market.
            </p>
          </div>

          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-5 tw:gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.n}
                className={`${step.topClass} svx-glass-panel tw:rounded-2xl tw:p-6 tw:relative tw:border-t-2`}
              >
                <div className="tw:flex tw:items-center tw:justify-between tw:mb-4">
                  <span className={`${step.numClass} svx-display tw:font-extrabold tw:text-2xl`}>
                    {step.n}
                  </span>
                  <span className="tw:text-[11px] tw:px-2.5 tw:py-0.5 tw:rounded-full tw:bg-white/5 tw:text-slate-400">
                    {step.when}
                  </span>
                </div>
                <h3 className="svx-display tw:font-bold tw:text-base tw:text-white tw:mb-2">{step.title}</h3>
                <p className="tw:text-xs tw:text-slate-400 tw:leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK ==================== */}
      <section className="svx-section tw:border-t tw:border-white/10 tw:bg-[#050b18]/70">
        <div className="svx-wrap">
          <div className="tw:text-center svx-measure-md tw:mx-auto tw:mb-12">
            <div className="tw:inline-flex tw:items-center tw:gap-2 tw:text-cyanGlow tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:mb-2">
              <Ico name="microchip" />
              <span>Modern Engineering Ecosystem</span>
            </div>
            <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white">
              Technology Stack & Ecosystem
            </h2>
            <p className="tw:text-slate-400 tw:text-sm tw:sm:text-base tw:mt-3">
              We build with battle-tested, enterprise-supported frameworks and frontier AI
              infrastructure so your platform scales without technical debt.
            </p>
          </div>

          <div className="tw:flex tw:flex-wrap tw:justify-center tw:gap-2.5 tw:mb-8" role="group" aria-label="Technology categories">
            {TECH_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={techTab === tab.id}
                onClick={() => setTechTab(tab.id)}
                className={`${
                  techTab === tab.id
                    ? "tw:font-bold tw:bg-cyanGlow tw:text-obsidian"
                    : "tw:font-semibold tw:bg-white/5 tw:text-slate-300 tw:hover:bg-white/10"
                } tw:px-5 tw:py-2.5 tw:rounded-full tw:text-xs tw:sm:text-sm tw:transition-all`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tw:grid tw:grid-cols-2 tw:sm:grid-cols-3 tw:lg:grid-cols-6 tw:gap-4">
            {TECH_ECOSYSTEM[techTab].map((item) => (
              <div
                key={item.name}
                className="svx-glass-panel tw:rounded-2xl tw:p-5 tw:text-center tw:hover:border-cyanGlow/40 tw:transition-all"
              >
                <div
                  className={`${item.color} tw:w-11 tw:h-11 tw:rounded-xl tw:bg-white/5 tw:border tw:border-white/10 tw:flex tw:items-center tw:justify-center tw:mx-auto tw:mb-3 tw:text-xl`}
                >
                  <Ico name={item.icon} />
                </div>
                <div className="svx-display tw:font-bold tw:text-sm tw:text-white">{item.name}</div>
                <div className="tw:text-[11px] tw:text-slate-400 tw:mt-1">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="svx-section tw:border-t tw:border-white/10">
        <div className="svx-wrap">
          <div className="tw:flex tw:flex-col tw:md:flex-row tw:md:items-end tw:justify-between tw:mb-12 tw:gap-4">
            <div>
              <div className="tw:inline-flex tw:items-center tw:gap-2 tw:text-warmGold tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:mb-2">
                <Ico name="building-columns" />
                <span>Domain Expertise</span>
              </div>
              <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white">
                Industries We Transform
              </h2>
            </div>
            <p className="tw:text-slate-400 tw:text-sm tw:max-w-xl">
              Tailored digital platforms and vertical AI automations engineered for the regulatory,
              operational, and scaling demands of your sector.
            </p>
          </div>

          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-6">
            {INDUSTRIES.map((item) => (
              <div
                key={item.title}
                className={`${
                  item.gold ? "tw:hover:border-warmGold/40" : "tw:hover:border-cyanGlow/40"
                } svx-glass-panel tw:rounded-2xl tw:p-6 tw:transition-all`}
              >
                <div className="tw:flex tw:items-center tw:gap-3.5 tw:mb-4">
                  <div
                    className={`${
                      item.gold
                        ? "tw:bg-warmGold/15 tw:text-warmGold"
                        : "tw:bg-cyanGlow/15 tw:text-cyanGlow"
                    } tw:w-11 tw:h-11 tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:text-lg`}
                  >
                    <Ico name={item.icon} />
                  </div>
                  <h3 className="svx-display tw:font-bold tw:text-lg tw:text-white">{item.title}</h3>
                </div>
                <p className="tw:text-xs tw:sm:text-sm tw:text-slate-400 tw:leading-relaxed tw:mb-4">{item.text}</p>
                <div
                  className={`${
                    item.gold ? "tw:text-warmGold" : "tw:text-cyanGlow"
                  } tw:text-[11px] tw:font-semibold`}
                >
                  {item.uses}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ENGAGEMENT MODELS ==================== */}
      <section className="svx-section tw:border-t tw:border-white/10 tw:bg-[#050b18]/70">
        <div className="svx-wrap">
          <div className="tw:text-center svx-measure-md tw:mx-auto tw:mb-14">
            <div className="tw:inline-flex tw:items-center tw:gap-2 tw:text-warmGold tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:mb-2">
              <Ico name="handshake" />
              <span>Flexible Collaboration</span>
            </div>
            <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white">
              Engagement Models Tailored to Your Velocity
            </h2>
            <p className="tw:text-slate-400 tw:text-sm tw:sm:text-base tw:mt-3">
              Whether launching a defined MVP, scaling a dedicated engineering pod, or rolling out
              continuous AI automation, choose the structure that fits your roadmap.
            </p>
          </div>

          <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-3 tw:gap-7 tw:items-stretch">
            {/* Fixed scope */}
            <div className="svx-glass-panel tw:rounded-3xl tw:p-8 tw:flex tw:flex-col tw:justify-between tw:border tw:border-white/10">
              <div>
                <span className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-slate-400">
                  Best for MVPs & Defined Launches
                </span>
                <h3 className="svx-display tw:font-extrabold tw:text-2xl tw:text-white tw:mt-2">
                  Fixed-Scope Project Delivery
                </h3>
                <p className="tw:text-xs tw:sm:text-sm tw:text-slate-400 tw:mt-3 tw:leading-relaxed">
                  Clear deliverables, locked milestone pricing, and guaranteed launch dates for
                  well-scoped web, mobile, or AI integration initiatives.
                </p>
                <ul className="tw:mt-6 tw:space-y-3 tw:text-xs tw:sm:text-sm tw:text-slate-200 tw:border-t tw:border-white/10 tw:pt-6">
                  {[
                    "Detailed Technical Specification & Wireframes",
                    "Milestone-Based Transparent Billing",
                    "Dedicated Project Manager & QA Lead",
                    "30-Day Post-Launch Warranty Included",
                  ].map((line) => (
                    <li key={line} className="tw:flex tw:items-center tw:gap-2.5">
                      <Ico name="check" className="tw:text-cyanGlow" /> {line}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => openQuote("Fixed-Scope Project Inquiry")}
                className="tw:mt-8 tw:w-full tw:py-3.5 tw:rounded-full tw:border tw:border-white/25 tw:hover:border-cyanGlow tw:text-white tw:hover:text-cyanGlow svx-display tw:font-bold tw:text-xs tw:uppercase tw:tracking-wider tw:transition-colors"
              >
                Scope Your Project
              </button>
            </div>

            {/* Dedicated team (highlighted) */}
            <div className="tw:rounded-3xl tw:p-8 tw:flex tw:flex-col tw:justify-between tw:bg-linear-to-b tw:from-[#111b2e] tw:to-[#0b1220] tw:border-2 tw:border-cyanGlow tw:shadow-2xl tw:shadow-cyanGlow/15 tw:relative">
              <div className="tw:absolute tw:-top-3.5 tw:right-6 tw:px-3.5 tw:py-1 tw:rounded-full tw:bg-cyanGlow tw:text-obsidian svx-display tw:font-extrabold tw:text-[10px] tw:uppercase tw:tracking-wider">
                Most Popular
              </div>
              <div>
                <span className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-cyanGlow">
                  Best for Scaling SaaS & Enterprises
                </span>
                <h3 className="svx-display tw:font-extrabold tw:text-2xl tw:text-white tw:mt-2">
                  Dedicated Engineering Team
                </h3>
                <p className="tw:text-xs tw:sm:text-sm tw:text-slate-300 tw:mt-3 tw:leading-relaxed">
                  Full-time senior full-stack engineers, AI specialists, and UI/UX designers
                  embedded directly into your Slack, GitHub, and sprint rituals.
                </p>
                <ul className="tw:mt-6 tw:space-y-3 tw:text-xs tw:sm:text-sm tw:text-white tw:border-t tw:border-cyanGlow/25 tw:pt-6">
                  {[
                    "Hand-Picked Senior Engineers & AI Architects",
                    "Direct Daily Standups & Full Sprint Control",
                    "Scale Team Capacity Up or Down Monthly",
                    "Complete Code & Model IP Ownership",
                  ].map((line) => (
                    <li key={line} className="tw:flex tw:items-center tw:gap-2.5">
                      <Ico name="check" className="tw:text-cyanGlow" /> {line}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => openQuote("Dedicated Engineering Team")}
                className="tw:mt-8 tw:w-full tw:py-3.5 tw:rounded-full tw:bg-cyanGlow tw:text-obsidian svx-display tw:font-bold tw:text-xs tw:uppercase tw:tracking-wider svx-btn-glow tw:hover:bg-white"
              >
                Assemble Your Team
              </button>
            </div>

            {/* Retainer */}
            <div className="svx-glass-panel tw:rounded-3xl tw:p-8 tw:flex tw:flex-col tw:justify-between tw:border tw:border-warmGold/35">
              <div>
                <span className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-warmGold">
                  Best for Continuous Automation
                </span>
                <h3 className="svx-display tw:font-extrabold tw:text-2xl tw:text-white tw:mt-2">
                  AI & Growth Retainer
                </h3>
                <p className="tw:text-xs tw:sm:text-sm tw:text-slate-400 tw:mt-3 tw:leading-relaxed">
                  Ongoing workflow automation, custom AI agent rollouts, cloud DevOps optimization,
                  and performance marketing under one unified partner.
                </p>
                <ul className="tw:mt-6 tw:space-y-3 tw:text-xs tw:sm:text-sm tw:text-slate-200 tw:border-t tw:border-white/10 tw:pt-6">
                  {[
                    "Monthly AI Agent & Automation Releases",
                    "24/7 Cloud Monitoring & Model Tuning",
                    "Priority 2-Hour SLA Incident Response",
                    "Quarterly Executive Technology Audits",
                  ].map((line) => (
                    <li key={line} className="tw:flex tw:items-center tw:gap-2.5">
                      <Ico name="check" className="tw:text-warmGold" /> {line}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => openQuote("AI & Growth Retainer")}
                className="tw:mt-8 tw:w-full tw:py-3.5 tw:rounded-full tw:bg-linear-to-r tw:from-warmGold tw:to-goldLight tw:text-obsidian svx-display tw:font-bold tw:text-xs tw:uppercase tw:tracking-wider tw:hover:brightness-110 tw:transition-all"
              >
                Book Advisory Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="svx-section tw:border-t tw:border-white/10">
        <div className="svx-wrap-narrow">
          <div className="tw:text-center tw:mb-12">
            <div className="tw:inline-flex tw:items-center tw:gap-2 tw:text-cyanGlow tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:mb-2">
              <Ico name="circle-question" />
              <span>Answers & Transparency</span>
            </div>
            <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white">
              Frequently Asked Questions
            </h2>
            <p className="tw:text-slate-400 tw:text-sm tw:sm:text-base tw:mt-3">
              Everything you need to know about our engineering workflow, AI data security, IP
              ownership, and support commitments.
            </p>
          </div>

          <div className="tw:space-y-3.5">
            {FAQ_ITEMS.map((item, index) => {
              const open = openFaq.includes(index);
              return (
                <div
                  key={item.q}
                  className="svx-glass-panel tw:rounded-2xl tw:border tw:border-white/10 tw:overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`svx-faq-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="tw:w-full tw:px-6 tw:py-5 tw:text-left tw:flex tw:items-center tw:justify-between tw:gap-4 tw:hover:bg-white/[0.02] tw:transition-colors"
                  >
                    <span className="svx-display tw:font-bold tw:text-sm tw:sm:text-base tw:text-white">
                      {item.q}
                    </span>
                    <span
                      className={`${
                        open ? "tw:rotate-180" : ""
                      } tw:w-8 tw:h-8 tw:rounded-lg tw:bg-white/5 tw:text-cyanGlow tw:flex tw:items-center tw:justify-center tw:shrink-0 tw:transition-transform tw:duration-200`}
                    >
                      <Ico name="chevron-down" className="tw:text-xs" />
                    </span>
                  </button>
                  {open ? (
                    <div
                      id={`svx-faq-${index}`}
                      className="tw:px-6 tw:pb-5 tw:text-xs tw:sm:text-sm tw:text-slate-300 tw:leading-relaxed tw:border-t tw:border-white/5 tw:pt-3.5"
                    >
                      {item.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED AI ==================== */}
      <section id="featured-ai" className="svx-section-sm">
        <div className="svx-wrap">
          <div className="tw:relative tw:rounded-3xl tw:overflow-hidden tw:border tw:border-cyanGlow/35 tw:bg-linear-to-r tw:from-[#0b1220] tw:via-[#0f1a2c] tw:to-[#0b1220] tw:p-8 tw:sm:p-12 tw:lg:p-14 tw:shadow-2xl">
            <div className="tw:absolute tw:-right-20 tw:-top-20 tw:w-80 tw:h-80 tw:rounded-full tw:bg-cyanGlow/20 tw:blur-[90px] tw:pointer-events-none" />
            <div className="tw:absolute tw:left-1/3 tw:-bottom-24 tw:w-72 tw:h-72 tw:rounded-full tw:bg-warmGold/15 tw:blur-[90px] tw:pointer-events-none" />

            <div className="tw:relative tw:grid tw:grid-cols-1 tw:lg:grid-cols-12 tw:gap-10 tw:items-center">
              <div className="tw:lg:col-span-7 tw:space-y-5">
                <div className="tw:inline-flex tw:items-center tw:gap-2 tw:px-3.5 tw:py-1.5 tw:rounded-full tw:bg-cyanGlow/15 tw:border tw:border-cyanGlow/40 tw:text-cyanGlow tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider">
                  <Ico name="star" />
                  <span>Featured Innovation Suite</span>
                </div>
                <h2 className="svx-display tw:font-extrabold svx-h2 tw:text-white tw:leading-tight">
                  Build Smarter, Grow Faster
                </h2>
                <p className="tw:text-slate-300 tw:text-base tw:sm:text-lg tw:leading-relaxed tw:max-w-2xl">
                  Digital solutions, website development, and intelligent AI software architectures
                  that automate repetitive workflows, elevate customer engagement, and unlock new
                  revenue growth.
                </p>
                <div className="tw:pt-2 tw:flex tw:flex-wrap tw:items-center tw:gap-4">
                  <button
                    type="button"
                    onClick={jumpToAI}
                    className="tw:px-7 tw:py-3.5 tw:rounded-full tw:bg-cyanGlow tw:text-obsidian svx-display tw:font-bold tw:text-sm svx-btn-glow tw:hover:bg-white tw:inline-flex tw:items-center tw:gap-2"
                  >
                    <span>Explore AI Services</span>
                    <Ico name="arrow-right" />
                  </button>
                  <button
                    type="button"
                    onClick={() => openQuote("AI Readiness Assessment")}
                    className="tw:px-6 tw:py-3.5 tw:rounded-full tw:border tw:border-white/20 tw:hover:border-warmGold tw:text-white tw:hover:text-warmGold tw:font-semibold tw:text-sm tw:transition-colors"
                  >
                    Book an AI Demo
                  </button>
                </div>
              </div>

              <div className="tw:lg:col-span-5">
                <div className="tw:rounded-2xl tw:bg-[#020617]/85 tw:border tw:border-white/15 tw:p-6 tw:backdrop-blur-xl tw:space-y-4">
                  <div className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-white/10 tw:pb-3">
                    <span className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-warmGold">
                      RoyalTech AI Stack
                    </span>
                    <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:text-cyanGlow tw:font-semibold">
                      <span className="tw:w-2 tw:h-2 tw:rounded-full tw:bg-cyanGlow tw:animate-ping" /> Production
                      Ready
                    </span>
                  </div>
                  <div className="tw:space-y-3">
                    {AI_STACK.map((row) => (
                      <div
                        key={row.title}
                        className={`${
                          row.gold ? "tw:border-white/10" : "tw:border-cyanGlow/25"
                        } tw:p-3 tw:rounded-xl tw:bg-white/[0.04] tw:border tw:flex tw:items-center tw:justify-between tw:gap-3`}
                      >
                        <div className="tw:flex tw:items-center tw:gap-3">
                          <div
                            className={`${
                              row.gold
                                ? "tw:bg-warmGold/15 tw:text-warmGold"
                                : "tw:bg-cyanGlow/15 tw:text-cyanGlow"
                            } tw:w-9 tw:h-9 tw:rounded-lg tw:flex tw:items-center tw:justify-center tw:shrink-0`}
                          >
                            <Ico name={row.icon} />
                          </div>
                          <div>
                            <div className="tw:text-xs tw:font-bold tw:text-white">{row.title}</div>
                            <div className="tw:text-[11px] tw:text-slate-400">{row.text}</div>
                          </div>
                        </div>
                        <span
                          className={`${
                            row.gold ? "tw:text-warmGold" : "tw:text-cyanGlow"
                          } tw:text-xs tw:font-bold tw:text-right`}
                        >
                          {row.stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section id="consultation-banner" className="svx-section-sm">
        <div className="svx-wrap">
          <div className="svx-glass-panel tw:rounded-3xl tw:p-8 tw:sm:p-12 tw:border tw:border-warmGold/35 tw:flex tw:flex-col tw:lg:flex-row tw:items-center tw:justify-between tw:gap-8">
            <div className="tw:flex tw:items-start tw:sm:items-center tw:gap-5 tw:text-center tw:sm:text-left tw:flex-col tw:sm:flex-row">
              <div className="tw:w-16 tw:h-16 tw:rounded-2xl tw:bg-linear-to-br tw:from-cyanGlow/20 tw:to-warmGold/20 tw:border tw:border-warmGold/40 tw:flex tw:items-center tw:justify-center tw:shrink-0 tw:mx-auto tw:sm:mx-0">
                <Ico name="headset" className="tw:text-2xl tw:text-warmGold" />
              </div>
              <div>
                <h2 className="svx-display tw:font-extrabold tw:text-2xl tw:sm:text-3xl tw:text-white">
                  Not Sure What You Need?{" "}
                  <span className="tw:text-cyanGlow">Talk to our experts.</span>
                </h2>
                <p className="tw:text-slate-300 tw:text-sm tw:sm:text-base tw:mt-2 tw:max-w-2xl">
                  Schedule a complimentary 30-minute technical discovery call. Our solution
                  architects will evaluate your workflows and recommend the highest-ROI roadmap.
                </p>
              </div>
            </div>

            <div className="tw:shrink-0 tw:w-full tw:sm:w-auto">
              <button
                type="button"
                onClick={() => openQuote("Expert Consultation Request")}
                className="tw:w-full tw:sm:w-auto tw:px-8 tw:py-4 tw:rounded-full tw:bg-linear-to-r tw:from-warmGold tw:to-goldLight tw:text-obsidian svx-display tw:font-extrabold tw:text-sm tw:tracking-wide tw:hover:brightness-110 tw:transition-all tw:shadow-lg tw:shadow-warmGold/20 tw:flex tw:items-center tw:justify-center tw:gap-2.5"
              >
                <span>Request a Consultation</span>
                <Ico name="arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE DETAIL DIALOG ==================== */}
      {activeService
        ? createPortal(
            <div className={rootClassName.replace("svx-root", "svx-portal")}>
              <ServiceDialog
                service={activeService}
                onClose={() => setActiveId(null)}
                onQuote={() => {
                  const title = activeService.title;
                  setActiveId(null);
                  openQuote(title);
                }}
              />
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

function FilterTab({
  active,
  onClick,
  label,
  count,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  icon?: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`${
        active
          ? "tw:font-bold tw:bg-cyanGlow tw:text-obsidian tw:shadow-lg"
          : "tw:font-semibold tw:bg-white/5 tw:text-slate-300 tw:hover:text-white tw:hover:bg-white/10"
      } tw:px-4 tw:py-2.5 tw:rounded-xl tw:text-xs tw:sm:text-sm tw:transition-all`}
    >
      {icon}
      {label}{" "}
      <span className={`${active ? "tw:opacity-80" : "tw:opacity-70"} tw:ml-1`}>({count})</span>
    </button>
  );
}

function ServiceCard({
  service,
  onOpen,
  onKeyDown,
}: {
  service: Service;
  onOpen: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
}) {
  const style = CARD_STYLES[service.pillar];
  return (
    <article
      id={service.id}
      role="button"
      tabIndex={0}
      aria-label={`${service.title} – view details`}
      onClick={onOpen}
      onKeyDown={onKeyDown}
      className={`${style.card} tw:scroll-mt-36 tw:group tw:cursor-pointer tw:rounded-2xl tw:p-6 tw:flex tw:flex-col tw:justify-between tw:text-left`}
    >
      <div>
        <div className="tw:flex tw:items-center tw:justify-between tw:mb-4">
          <div
            className={`${style.iconBox} tw:w-12 tw:h-12 tw:rounded-xl tw:border tw:flex tw:items-center tw:justify-center tw:text-lg tw:transition-all tw:duration-300`}
          >
            <Ico name={service.icon} />
          </div>
          {style.badge ? (
            <span
              className={`${style.badge.className} tw:text-[10px] tw:font-bold tw:uppercase tw:tracking-wider tw:px-2.5 tw:py-0.5 tw:rounded-full tw:border`}
            >
              {style.badge.label}
            </span>
          ) : null}
        </div>

        <h3 className="svx-display tw:font-bold tw:text-lg tw:text-white tw:group-hover:text-cyanGlow tw:transition-colors tw:leading-snug">
          {service.title}
        </h3>

        <p className="tw:mt-2 tw:text-xs tw:sm:text-sm tw:text-slate-400 tw:leading-relaxed">{service.shortDesc}</p>

        <ul className="tw:mt-4 tw:pt-3.5 tw:border-t tw:border-white/10 tw:space-y-1.5">
          {service.deliverables.slice(0, 3).map((item) => (
            <li key={item} className="tw:flex tw:items-start tw:gap-2 tw:text-[11px] tw:sm:text-xs tw:text-slate-300">
              <Ico name="check" className={`${style.check} tw:mt-0.5 tw:text-[10px]`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="tw:mt-4 tw:flex tw:flex-wrap tw:gap-1.5">
          {service.tech.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="tw:px-2 tw:py-0.5 tw:rounded-md tw:bg-white/[0.04] tw:border tw:border-white/10 tw:text-[10px] tw:font-medium tw:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="tw:mt-5 tw:pt-3.5 tw:border-t tw:border-white/10 tw:flex tw:items-center tw:justify-between tw:gap-2">
        <span
          className={`${style.action} tw:text-xs tw:font-bold tw:inline-flex tw:items-center tw:gap-1.5 tw:group-hover:translate-x-1 tw:transition-transform`}
        >
          Explore Details <Ico name="arrow-right" className="tw:text-[11px]" />
        </span>
        <span className="tw:text-[11px] tw:px-2.5 tw:py-0.5 tw:rounded-full tw:bg-white/5 tw:text-slate-400 tw:font-medium">
          {service.timeline}
        </span>
      </div>
    </article>
  );
}

function ServiceDialog({
  service,
  onClose,
  onQuote,
}: {
  service: Service;
  onClose: () => void;
  onQuote: () => void;
}) {
  return (
    <div
      className="tw:fixed tw:inset-0 tw:z-[1100] tw:flex tw:items-center tw:justify-center tw:p-4 tw:bg-black/80 tw:backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="svx-dialog-title"
        className="svx-modal-in tw:relative tw:w-full tw:max-w-2xl tw:rounded-3xl tw:bg-[#0b1220] tw:border tw:border-cyanGlow/40 tw:shadow-2xl tw:overflow-hidden"
      >
        <div className="tw:h-1.5 tw:w-full tw:bg-linear-to-r tw:from-cyanGlow tw:to-warmGold" />

        <div className="tw:p-6 tw:sm:p-8 tw:max-h-[88vh] tw:overflow-y-auto">
          <div className="tw:flex tw:items-start tw:justify-between tw:gap-4">
            <div>
              <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:px-3 tw:py-1 tw:rounded-full tw:text-[11px] tw:font-bold tw:uppercase tw:tracking-wider tw:bg-cyanGlow/15 tw:text-cyanGlow tw:border tw:border-cyanGlow/30 tw:mb-3">
                {service.pillarLabel}
              </span>
              <h3
                id="svx-dialog-title"
                className="svx-display tw:font-extrabold tw:text-2xl tw:sm:text-3xl tw:text-white"
              >
                {service.title}
              </h3>
            </div>
            <button
              type="button"
              autoFocus
              onClick={onClose}
              aria-label="Close"
              className="tw:w-10 tw:h-10 tw:shrink-0 tw:rounded-xl tw:bg-white/5 tw:hover:bg-white/15 tw:text-slate-300 tw:hover:text-white tw:flex tw:items-center tw:justify-center tw:transition-colors"
            >
              <Ico name="xmark" className="tw:text-lg" />
            </button>
          </div>

          <p className="tw:mt-4 tw:text-slate-300 tw:text-sm tw:sm:text-base tw:leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="tw:mt-6">
            <h4 className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-warmGold tw:mb-3 tw:flex tw:items-center tw:gap-2">
              <Ico name="circle-check" /> Key Deliverables & Capabilities
            </h4>
            <ul className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:gap-2.5 tw:text-xs tw:sm:text-sm tw:text-slate-200">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="tw:flex tw:items-start tw:gap-2 tw:bg-white/[0.03] tw:border tw:border-white/10 tw:rounded-xl tw:p-2.5"
                >
                  <Ico name="check" className="tw:text-cyanGlow tw:mt-0.5 tw:text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tw:mt-6">
            <h4 className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-cyanGlow tw:mb-3 tw:flex tw:items-center tw:gap-2">
              <Ico name="code" /> Technologies & Frameworks
            </h4>
            <div className="tw:flex tw:flex-wrap tw:gap-2">
              {service.tech.map((tag) => (
                <span
                  key={tag}
                  className="tw:px-3 tw:py-1 tw:rounded-lg tw:bg-[#020617] tw:border tw:border-white/15 tw:text-xs tw:font-medium tw:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="tw:mt-8 tw:pt-5 tw:border-t tw:border-white/10 tw:flex tw:flex-col tw:sm:flex-row tw:items-center tw:justify-between tw:gap-4">
            <div className="tw:text-xs tw:text-slate-400">
              Typical Delivery:{" "}
              <span className="tw:text-white tw:font-semibold">{service.timeline}</span>
            </div>
            <div className="tw:flex tw:items-center tw:gap-3 tw:w-full tw:sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="tw:w-1/2 tw:sm:w-auto tw:px-5 tw:py-3 tw:rounded-full tw:border tw:border-white/15 tw:text-slate-300 tw:hover:text-white tw:text-xs tw:font-semibold"
              >
                Close
              </button>
              <button
                type="button"
                onClick={onQuote}
                className="tw:w-1/2 tw:sm:w-auto tw:px-6 tw:py-3 tw:rounded-full tw:bg-cyanGlow tw:text-obsidian svx-display tw:font-bold tw:text-xs tw:uppercase tw:tracking-wider svx-btn-glow tw:hover:bg-white"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
