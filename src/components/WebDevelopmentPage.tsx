"use client";

import { useFormModal } from "@/components/FormModal";
import "@/styles/services-showcase.css";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  FaArrowRight,
  FaBagShopping,
  FaCartShopping,
  FaCheck,
  FaChartLine,
  FaCircleQuestion,
  FaCode,
  FaDesktop,
  FaEnvelope,
  FaGaugeHigh,
  FaGraduationCap,
  FaHeartPulse,
  FaHouse,
  FaIndustry,
  FaLink,
  FaLocationDot,
  FaMagnifyingGlass,
  FaMinus,
  FaMobileScreen,
  FaPhone,
  FaPlane,
  FaPlus,
  FaRocket,
  FaScaleBalanced,
  FaShieldHalved,
  FaShopify,
  FaStar,
  FaTabletScreenButton,
  FaUserTie,
  FaWordpress,
  FaBolt,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

/* ------------------------------------------------------------------ */
/* Shared class strings (dark navy + cyan, same as the services page)  */
/* ------------------------------------------------------------------ */

const EYEBROW =
  "tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-cyanGlow/30 tw:bg-cyanGlow/10 tw:px-3.5 tw:py-1 tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-cyanGlow";
const BTN_PRIMARY =
  "svx-btn-glow tw:inline-flex tw:items-center tw:justify-center tw:gap-2.5 tw:rounded-xl tw:bg-cyanGlow tw:px-7 tw:py-4 tw:text-base tw:font-bold tw:text-[#020617] tw:hover:bg-[#a5f3fc] tw:transition-colors tw:cursor-pointer";
const BTN_GHOST =
  "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-xl tw:border tw:border-white/20 tw:bg-white/[0.04] tw:px-7 tw:py-4 tw:text-base tw:font-semibold tw:text-white tw:hover:border-cyanGlow tw:transition-colors tw:cursor-pointer";
const CARD = "svx-glass-panel tw:rounded-3xl tw:shadow-2xl";
const LINK_CTA =
  "tw:inline-flex tw:items-center tw:gap-2 tw:text-sm tw:font-bold tw:text-cyanGlow tw:hover:text-[#a5f3fc] tw:transition-colors";
const CHECK_ITEM = "tw:flex tw:items-start tw:gap-2.5 tw:text-sm tw:font-medium tw:text-slate-200";
const DOT_ITEM = "tw:flex tw:items-center tw:gap-2 tw:text-sm tw:font-medium tw:text-slate-200";
const TILE = "tw:rounded-xl tw:border tw:border-white/10 tw:bg-white/[0.03] tw:p-4 tw:text-center tw:text-xs tw:font-bold tw:text-white";
const MOCK_BAR = "tw:flex tw:items-center tw:justify-between tw:border-b tw:border-white/10 tw:bg-[#0b1220] tw:px-4 tw:py-2.5";
const DOTS = "tw:flex tw:items-center tw:gap-1.5";
const DOT = "tw:h-2.5 tw:w-2.5 tw:rounded-full";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const WORDPRESS_FEATURES = [
  "Custom WordPress Website Development",
  "Business & Corporate Websites",
  "WordPress Landing Pages",
  "Elementor Website Development",
  "Custom WordPress Themes",
  "Plugin Integration & Customization",
  "WordPress Website Redesign",
  "Speed Optimization & Security",
  "SEO-Friendly Website Structure",
  "Maintenance & Support",
];

const SHOPIFY_FEATURES = [
  "Custom Shopify Store Design",
  "Shopify Theme Customization",
  "Shopify 2.0 Development",
  "Product & Collection Setup",
  "Payment Gateway Integration",
  "Shipping & Tax Configuration",
  "App & Third-Party Integrations",
  "Shopify Store Migration",
  "Conversion Rate Optimization",
  "Mobile Shopping Optimization",
];

const ECOM_CAPS = [
  "Product Management",
  "Product Categories",
  "Variants & Pricing",
  "Secure Payments",
  "Shopping Cart",
  "Wishlist",
  "Search & Filters",
  "Order Management",
  "Inventory Management",
  "Customer Accounts",
  "Shipping Integration",
  "Analytics",
];

const CUSTOM_TYPES = [
  "Business & Corporate Websites",
  "Custom Web Applications",
  "SaaS Platforms",
  "Customer Portals",
  "Admin Dashboards",
  "Booking & Appointment Platforms",
  "CRM-Integrated Websites",
  "Interactive Digital Platforms",
];

const CUSTOM_STACK = ["React.js", "Next.js", "TypeScript", "Node.js", "Laravel", "PHP", "MongoDB", "MySQL"];

const SEO_POINTS = [
  "SEO-Friendly URL Structure",
  "Responsive & Mobile-Friendly Design",
  "Fast Loading Performance",
  "Semantic HTML Structure",
  "Optimized Images",
  "Core Web Vitals Considerations",
  "Schema Markup Implementation",
  "Canonical URL Configuration",
  "Metadata Optimization",
  "Sitemap & Robots Configuration",
  "Technical SEO Best Practices",
];

const PROCESS = [
  { n: "01", title: "Discovery & Strategy", text: "Understand your business, target audience, objectives, requirements, and project scope." },
  { n: "02", title: "UI/UX & Planning", text: "Create wireframes, layouts, design concepts, and a clear user experience." },
  { n: "03", title: "Development", text: "Transform approved designs into functional, responsive, and scalable websites." },
  { n: "04", title: "Testing & Optimization", text: "Test functionality, responsiveness, performance, browser compatibility, and security." },
  { n: "05", title: "Launch & Support", text: "Deploy your website, configure essential systems, and provide ongoing support when required." },
];

const WHY = [
  ["Business-Focused Approach", "We build around your business goals, not just design trends."],
  ["Custom Solutions", "Every project is tailored to your specific requirements."],
  ["Modern Technology", "We use reliable and modern development technologies."],
  ["SEO-Ready Development", "Search-friendly architecture from the beginning."],
  ["Responsive Experiences", "Seamless performance across mobile, tablet, and desktop."],
  ["Scalable Architecture", "Solutions designed to grow with your business."],
  ["Transparent Process", "Clear communication throughout development."],
  ["Ongoing Support", "Assistance beyond launch to keep your website evolving."],
];

const INDUSTRIES: { icon: IconType; title: string; text: string }[] = [
  { icon: FaBagShopping, title: "Ecommerce & Retail", text: "High-converting D2C storefronts, multi-vendor catalogs, and omnichannel checkout." },
  { icon: FaHeartPulse, title: "Healthcare", text: "Clinic portals, appointment scheduling, patient resources, and secure digital workflows." },
  { icon: FaGraduationCap, title: "Education", text: "Institutional websites, course catalogs, student admission funnels, and LMS portals." },
  { icon: FaHouse, title: "Real Estate", text: "Interactive property listings, map search filters, virtual tours, and broker CRM sync." },
  { icon: FaIndustry, title: "Manufacturing", text: "B2B product specification catalogs, RFQ inquiry workflows, and distributor portals." },
  { icon: FaCode, title: "IT & Technology", text: "SaaS product websites, technical documentation hubs, and demo conversion funnels." },
  { icon: FaPlane, title: "Hospitality", text: "Direct booking engines, visual showcase galleries, and table or room reservation systems." },
  { icon: FaUserTie, title: "Professional Services", text: "Authority websites for law firms, agencies, and corporate service providers." },
  { icon: FaRocket, title: "Startups", text: "Rapid MVP web platforms, investor-ready brand launches, and modular growth stacks." },
  { icon: FaScaleBalanced, title: "Finance & Consulting", text: "Trust-centered advisory portals, calculators, gated reports, and client onboarding." },
];

const FAQS = [
  {
    q: "How much does website development cost?",
    a: "Website development pricing depends on your project scope, platform choice (WordPress, Shopify, or custom code), design requirements, number of pages, and custom integrations. RoyalTech Innovation provides clear, itemized proposals tailored to startups, growing businesses, and enterprises so you invest only in the capabilities your business needs.",
  },
  {
    q: "How long does it take to develop a website?",
    a: "A streamlined business website typically takes 1–2 weeks, while a custom corporate website or Shopify store generally takes 3–6 weeks. Complex ecommerce platforms and custom web applications with bespoke APIs or dashboards may take 6–12 weeks depending on functional complexity.",
  },
  {
    q: "Do you develop WordPress websites?",
    a: "Yes. We build custom WordPress websites, corporate portals, Elementor and block-based sites, custom themes, and plugin integrations engineered for speed, security, and effortless in-house content management.",
  },
  {
    q: "Do you provide Shopify development services?",
    a: "Yes. Our Shopify development services cover custom Shopify 2.0 store design, theme customization, product and collection architecture, payment and shipping setup, third-party app integrations, and full store migrations.",
  },
  {
    q: "Can you build a custom ecommerce website?",
    a: "Yes. Beyond Shopify and WooCommerce, we engineer custom ecommerce websites with tailored product configurators, multi-tier pricing, custom checkout workflows, inventory management, and ERP or logistics integrations.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Every website we build follows a mobile-first responsive web design approach, ensuring clean typography, touch-friendly navigation, and fast performance across smartphones, tablets, laptops, and large desktop displays.",
  },
  {
    q: "Do you provide website redesign services?",
    a: "Yes. We modernize outdated websites by upgrading UI/UX design, improving page load speed, restructuring navigation for higher conversions, and preserving existing SEO equity through proper redirects and metadata migration.",
  },
  {
    q: "Do you provide website maintenance?",
    a: "Yes. Our ongoing website maintenance and technical support plans cover security patches, core and plugin updates, uptime monitoring, regular backups, bug resolution, and continuous feature enhancements.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. We build every site with semantic HTML, clean URL hierarchies, optimized images, schema markup, canonical tags, XML sitemaps, and Core Web Vitals best practices so your website has a strong technical SEO foundation from day one.",
  },
  {
    q: "Can you integrate payment gateways and third-party APIs?",
    a: "Yes. We integrate Razorpay, Stripe, PayPal, UPI, shipping and logistics APIs, CRM and ERP platforms, marketing automation tools, and custom REST/GraphQL endpoints seamlessly into your website.",
  },
];

const VALUE_PROPS: { icon: IconType; title: string; text: string }[] = [
  { icon: FaBolt, title: "Performance-Driven", text: "Clean, lightweight code" },
  { icon: FaShieldHalved, title: "Enterprise Reliability", text: "Built to scale securely" },
];

const AUDIT_ITEMS: { icon: IconType; label: string; badge: string }[] = [
  { icon: FaGaugeHigh, label: "Core Web Vitals", badge: "Optimized Assets" },
  { icon: FaMagnifyingGlass, label: "Image Delivery", badge: "WebP & Lazy Load" },
  { icon: FaLink, label: "URL Architecture", badge: "Clean Slugs" },
  { icon: FaChartLine, label: "XML Sitemap", badge: "Auto-Generated" },
];

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

function SectionHeader({
  eyebrow,
  title,
  text,
  id,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  id?: string;
}) {
  return (
    <div id={id} className="svx-measure-md tw:mx-auto tw:mb-14 tw:space-y-4 tw:text-center tw:scroll-mt-36">
      <span className={EYEBROW}>{eyebrow}</span>
      <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">{title}</h2>
      {text && <p className="svx-lead tw:text-slate-400">{text}</p>}
    </div>
  );
}

function Mock({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`tw:overflow-hidden tw:rounded-xl tw:border tw:border-white/10 tw:bg-[#050b18] ${className}`}>{children}</div>
  );
}

function Chrome({ left, right }: { left?: ReactNode; right?: ReactNode }) {
  return (
    <div className={MOCK_BAR}>
      <div className={DOTS}>
        <span className={`${DOT} tw:bg-rose-500`} />
        <span className={`${DOT} tw:bg-amber-400`} />
        <span className={`${DOT} tw:bg-emerald-500`} />
      </div>
      <div className="tw:text-[11px] tw:font-mono tw:text-slate-400">{left}</div>
      <div className="tw:text-[10px] tw:font-semibold tw:text-cyanGlow">{right}</div>
    </div>
  );
}

function ServiceBlock({
  reverse,
  eyebrow,
  title,
  text,
  items,
  ctaLabel,
  onCta,
  visual,
}: {
  reverse?: boolean;
  eyebrow: string;
  title: string;
  text: string;
  items: string[];
  ctaLabel: string;
  onCta: () => void;
  visual: ReactNode;
}) {
  return (
    <div className="tw:overflow-hidden tw:rounded-3xl tw:border tw:border-white/10 tw:bg-[#0b1220]/70 tw:shadow-2xl">
      <div className="tw:grid tw:grid-cols-1 tw:items-center tw:lg:grid-cols-12">
        <div className={`tw:space-y-6 tw:p-8 tw:sm:p-10 tw:lg:col-span-6 tw:lg:p-12 ${reverse ? "tw:order-1 tw:lg:order-2" : ""}`}>
          <span className="tw:inline-flex tw:rounded-lg tw:bg-cyanGlow/10 tw:px-3 tw:py-1 tw:text-xs tw:font-bold tw:text-cyanGlow">
            {eyebrow}
          </span>
          <h3 className="tw:text-2xl tw:font-extrabold tw:tracking-tight tw:text-white tw:sm:text-3xl">{title}</h3>
          <p className="tw:leading-relaxed tw:text-slate-400">{text}</p>
          <div className="tw:grid tw:grid-cols-1 tw:gap-x-4 tw:gap-y-2.5 tw:pt-1 tw:sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className={DOT_ITEM}>
                <span className="tw:h-1.5 tw:w-1.5 tw:shrink-0 tw:rounded-full tw:bg-cyanGlow" />
                {item}
              </div>
            ))}
          </div>
          <div className="tw:pt-3">
            <button type="button" onClick={onCta} className={LINK_CTA}>
              {ctaLabel}
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          className={`tw:relative tw:border-t tw:border-white/10 tw:bg-linear-to-br tw:from-[#0b1a2c] tw:to-[#050b18] tw:p-6 tw:sm:p-10 tw:lg:col-span-6 tw:lg:border-t-0 ${
            reverse ? "tw:order-2 tw:lg:order-1 tw:lg:border-r" : "tw:lg:border-l"
          } tw:border-white/10`}
        >
          {visual}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function WebDevelopmentPage({ rootClass = "" }: { rootClass?: string }) {
  const { openForm } = useFormModal();
  const [introTab, setIntroTab] = useState<"lead" | "cms">("lead");
  const [ecomView, setEcomView] = useState<"storefront" | "admin">("storefront");
  const [cartCount, setCartCount] = useState(2);
  const [viewport, setViewport] = useState<"all" | "desktop" | "tablet" | "mobile">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openQuote = (service: string) =>
    openForm({ title: "Request a Free Consultation", source: "web-development-page", service });

  const tabClass = (active: boolean) =>
    `tw:rounded-md tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:transition-all tw:cursor-pointer ${
      active ? "tw:bg-cyanGlow tw:text-[#020617]" : "tw:text-slate-400 tw:hover:text-white"
    }`;

  const showDesktop = viewport === "all" || viewport === "desktop";
  const showTablet = viewport === "all" || viewport === "tablet";
  const showMobile = viewport === "all" || viewport === "mobile";

  const rootClassName = `svx-root ${rootClass}`.trim();

  return (
    <div className={rootClassName}>
      {/* ==================== HERO ==================== */}
      <section className="svx-hero svx-ambient-grid tw:relative tw:overflow-hidden tw:border-b tw:border-white/10">
        <div className="tw:pointer-events-none tw:absolute tw:inset-0">
          <Image
            src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1600/v1795777389/Gemini_Generated_Image_huk7szhuk7szhuk7.png"
            alt="Developer designing website wireframes on a monitor while coding on a laptop in a modern office"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="tw:object-cover tw:object-left"
          />
          <div className="tw:absolute tw:inset-0 tw:bg-[#020617]/75 tw:lg:bg-transparent" />
          <div className="tw:absolute tw:inset-0 tw:bg-linear-to-l tw:from-[#020617] tw:via-[#020617]/80 tw:to-[#020617]/10" />
          <div className="tw:absolute tw:inset-0 tw:bg-linear-to-t tw:from-[#020617] tw:via-transparent tw:to-transparent" />
        </div>
        <div className="tw:pointer-events-none tw:absolute tw:-top-24 tw:right-0 tw:h-[560px] tw:w-[560px] tw:rounded-full tw:bg-cyanGlow/10 tw:blur-3xl" />
        <div className="tw:pointer-events-none tw:absolute tw:bottom-0 tw:left-10 tw:h-[400px] tw:w-[400px] tw:rounded-full tw:bg-cyanDeep/10 tw:blur-3xl" />

        <div className="svx-wrap tw:relative">
          <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-10">
            {/* RIGHT: copy & CTAs (image sits behind on the left) */}
            <div className="tw:flex tw:flex-col tw:items-start tw:space-y-7 tw:text-left tw:lg:col-span-6 tw:lg:col-start-7">
              <nav aria-label="Breadcrumb" className="tw:flex tw:flex-wrap tw:items-center tw:gap-2 tw:text-xs tw:font-medium tw:text-slate-400">
                <Link href="/" className="tw:hover:text-cyanGlow tw:transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="tw:hover:text-cyanGlow tw:transition-colors">Services</Link>
                <span>/</span>
                <span className="tw:font-semibold tw:text-cyanGlow">Web Development</span>
              </nav>
              <span className={EYEBROW}>
                <span className="tw:h-2 tw:w-2 tw:animate-pulse tw:rounded-full tw:bg-cyanGlow" />
                Web Development &amp; Digital Experiences
              </span>

              <h1 className="svx-h1 tw:font-extrabold tw:leading-[1.1] tw:tracking-tight tw:text-white">
                Web Development Solutions Built to{" "}
                <span className="tw:bg-linear-to-r tw:from-cyanGlow tw:to-cyanDeep tw:bg-clip-text tw:text-transparent">
                  Grow Your Business
                </span>
              </h1>

              <p className="svx-lead tw:max-w-xl tw:leading-relaxed tw:text-slate-400">
                We design and develop high-performance websites, ecommerce stores, and custom digital platforms that help
                businesses build a powerful online presence, attract customers, and scale confidently.
              </p>

              <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-start tw:gap-x-3 tw:gap-y-2 tw:pt-1 tw:text-sm tw:font-semibold tw:text-slate-200">
                {["WordPress", "Shopify", "Ecommerce", "Custom Development"].map((chip, i) => (
                  <span key={chip} className="tw:flex tw:items-center tw:gap-3">
                    {i > 0 && <span className="tw:font-bold tw:text-cyanGlow">·</span>}
                    <span className="tw:rounded-md tw:border tw:border-white/10 tw:bg-white/[0.04] tw:px-3 tw:py-1">{chip}</span>
                  </span>
                ))}
              </div>

              <div className="tw:flex tw:flex-col tw:items-stretch tw:justify-start tw:gap-4 tw:pt-2 tw:sm:flex-row tw:sm:items-center">
                <button type="button" onClick={() => openQuote("General Web Development")} className={BTN_PRIMARY}>
                  Get a Free Consultation
                  <FaArrowRight aria-hidden="true" />
                </button>
                <Link href="#services" className={BTN_GHOST}>
                  Explore Our Work
                </Link>
              </div>

              <div className="tw:grid tw:w-full tw:max-w-lg tw:grid-cols-3 tw:gap-4 tw:border-t tw:border-white/10 tw:pt-4 tw:text-left">
                {[
                  ["Architecture", "SEO & Speed First"],
                  ["Experience", "Mobile-First UI/UX"],
                  ["Delivery", "Scalable & Secure"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="tw:text-xs tw:font-semibold tw:uppercase tw:tracking-wider tw:text-slate-500">{label}</div>
                    <div className="tw:mt-0.5 tw:text-sm tw:font-bold tw:text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTRODUCTION ==================== */}
      <section id="overview" className="svx-section tw:scroll-mt-36 tw:bg-[#020617]">
        <div className="svx-wrap">
          <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-16">
            {/* LEFT: interactive blueprint mockup */}
            <div className={`${CARD} tw:order-2 tw:p-4 tw:sm:p-6 tw:lg:order-1 tw:lg:col-span-6`}>
              <div className="tw:mb-4 tw:flex tw:items-center tw:justify-between tw:rounded-xl tw:border tw:border-white/10 tw:bg-[#0b1220] tw:px-4 tw:py-2.5">
                <div className="tw:flex tw:items-center tw:gap-2">
                  <span className="tw:h-2.5 tw:w-2.5 tw:rounded-full tw:bg-cyanGlow" />
                  <span className="tw:text-xs tw:font-bold tw:text-white">Interactive Business Blueprint</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-1.5 tw:rounded-lg tw:bg-white/[0.05] tw:p-1">
                  <button type="button" onClick={() => setIntroTab("lead")} className={tabClass(introTab === "lead")}>
                    Lead Capture
                  </button>
                  <button type="button" onClick={() => setIntroTab("cms")} className={tabClass(introTab === "cms")}>
                    CMS Control
                  </button>
                </div>
              </div>

              {introTab === "lead" ? (
                <div className="tw:space-y-5 tw:rounded-xl tw:border tw:border-white/10 tw:bg-[#0b1220] tw:p-5 tw:sm:p-6">
                  <div className="tw:flex tw:items-start tw:justify-between tw:gap-4">
                    <div>
                      <span className="tw:text-[11px] tw:font-bold tw:uppercase tw:tracking-wider tw:text-cyanGlow">Conversion Architecture</span>
                      <h3 className="tw:mt-0.5 tw:text-lg tw:font-extrabold tw:text-white">Strategic User Journey &amp; Inquiry Flow</h3>
                    </div>
                    <span className="tw:shrink-0 tw:rounded-full tw:border tw:border-emerald-400/30 tw:bg-emerald-500/10 tw:px-2.5 tw:py-1 tw:text-xs tw:font-semibold tw:text-emerald-300">
                      Active Funnel
                    </span>
                  </div>
                  <div className="tw:grid tw:grid-cols-3 tw:gap-3">
                    {[
                      ["Step 01", "Clear Value Proposition", "w-full"],
                      ["Step 02", "Trust & Case Proof", "w-4/5"],
                      ["Step 03", "Qualified Lead Action", "w-3/4"],
                    ].map(([step, label, w], i) => (
                      <div
                        key={step}
                        className={`tw:rounded-xl tw:border tw:p-3.5 ${
                          i === 2 ? "tw:border-cyanGlow/40 tw:bg-cyanGlow/5" : "tw:border-white/10 tw:bg-white/[0.03]"
                        }`}
                      >
                        <div className={`tw:text-[11px] tw:font-semibold ${i === 2 ? "tw:text-cyanGlow" : "tw:text-slate-500"}`}>{step}</div>
                        <div className="tw:mt-1 tw:text-xs tw:font-bold tw:text-white">{label}</div>
                        <div className="tw:mt-2 tw:h-1.5 tw:w-full tw:overflow-hidden tw:rounded-full tw:bg-white/10">
                          <div className={`tw:h-full tw:rounded-full tw:bg-cyanGlow ${w}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tw:flex tw:items-center tw:justify-between tw:rounded-xl tw:bg-linear-to-r tw:from-cyanGlow tw:to-cyanDeep tw:p-3.5 tw:text-[#020617]">
                    <div className="tw:flex tw:items-center tw:gap-3">
                      <div className="tw:flex tw:h-8 tw:w-8 tw:items-center tw:justify-center tw:rounded-lg tw:bg-[#020617] tw:text-cyanGlow">
                        <FaCheck aria-hidden="true" />
                      </div>
                      <div>
                        <div className="tw:text-xs tw:font-bold">New Consultation Request Synced</div>
                        <div className="tw:text-[11px] tw:opacity-80">Automated webhook → CRM &amp; Email Alert</div>
                      </div>
                    </div>
                    <span className="tw:font-mono tw:text-[11px] tw:font-semibold">Just now</span>
                  </div>
                </div>
              ) : (
                <div className="tw:space-y-4 tw:rounded-xl tw:border tw:border-white/10 tw:bg-[#0b1220] tw:p-5 tw:sm:p-6">
                  <div className="tw:flex tw:items-center tw:justify-between tw:gap-4">
                    <div>
                      <span className="tw:text-[11px] tw:font-bold tw:uppercase tw:tracking-wider tw:text-cyanGlow">Content Management</span>
                      <h3 className="tw:mt-0.5 tw:text-lg tw:font-extrabold tw:text-white">Effortless Page &amp; Catalog Publishing</h3>
                    </div>
                    <span className="tw:shrink-0 tw:rounded-full tw:border tw:border-cyanGlow/30 tw:bg-cyanGlow/10 tw:px-2.5 tw:py-1 tw:text-xs tw:font-semibold tw:text-cyanGlow">
                      Role-Based Access
                    </span>
                  </div>
                  {[
                    ["Homepage Hero & Campaign Banner", "Published", "text-emerald-300 bg-emerald-500/10"],
                    ["Services & Solution Landing Pages", "SEO Indexed", "text-emerald-300 bg-emerald-500/10"],
                    ["Dynamic Case Studies & Blog Hub", "Editable Block", "text-cyanGlow bg-cyanGlow/10"],
                  ].map(([label, badge, tone]) => (
                    <div key={label} className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-lg tw:border tw:border-white/10 tw:bg-white/[0.03] tw:p-3">
                      <span className="tw:text-xs tw:font-semibold tw:text-white">{label}</span>
                      <span className={`tw:shrink-0 tw:rounded tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold ${tone}`}>{badge}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: narrative */}
            <div className="tw:order-1 tw:space-y-6 tw:lg:order-2 tw:lg:col-span-6">
              <div className="tw:flex tw:items-center tw:gap-2 tw:text-xs tw:font-bold tw:uppercase tw:tracking-widest tw:text-cyanGlow">
                <span className="tw:h-[2px] tw:w-6 tw:bg-cyanGlow" />
                Strategic Web Engineering
              </div>
              <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">
                Websites That Do More Than Look Good
              </h2>
              <div className="tw:space-y-4 tw:text-base tw:leading-relaxed tw:text-slate-400">
                <p>
                  Your website is more than your digital storefront—it&apos;s a powerful business tool that helps you connect with
                  customers, communicate your value, and convert visitors into opportunities.
                </p>
                <p>
                  At <strong className="tw:font-semibold tw:text-white">RoyalTech Innovation</strong>, we combine modern design, advanced
                  development, and strategic thinking to build websites that are fast, scalable, user-friendly, and aligned with your
                  business objectives.
                </p>
                <p>
                  Whether you need a professional business website, an online store, or a custom web application, our team delivers
                  solutions designed for performance, usability, and long-term growth.
                </p>
              </div>
              <div className="tw:flex tw:flex-wrap tw:gap-6 tw:pt-2">
                {VALUE_PROPS.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="tw:flex tw:items-center tw:gap-3">
                    <div className="tw:flex tw:h-10 tw:w-10 tw:shrink-0 tw:items-center tw:justify-center tw:rounded-xl tw:bg-cyanGlow/10 tw:text-cyanGlow">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <div className="tw:text-sm tw:font-bold tw:text-white">{title}</div>
                      <div className="tw:text-xs tw:text-slate-500">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE SERVICES (4 blocks) ==================== */}
      <section id="services" className="svx-section tw:scroll-mt-36 tw:border-y tw:border-white/10 tw:bg-[#050b18]">
        <div className="svx-wrap">
          <SectionHeader
            eyebrow="Core Web Development Services"
            title="Web Development Services Tailored to Your Business"
            text="From agile CMS platforms to high-converting online stores and bespoke web applications, every solution is engineered around your operational goals."
          />

          <div className="tw:space-y-12">
            <ServiceBlock
              eyebrow="01 · CMS & Corporate Web"
              title="WordPress Website Development"
              text="Flexible, SEO-friendly websites designed for easy content management, business growth, and complete control over your digital presence."
              items={["Custom WordPress Websites", "Business & Corporate Websites", "Landing Pages", "Elementor Development", "Custom Themes", "Plugin Integration", "Website Redesign", "Speed Optimization"]}
              ctaLabel="Explore WordPress Solutions"
              onCta={() => document.getElementById("wordpress")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              visual={
                <Image
                  src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795774261/Gemini_Generated_Image_dpba8ldpba8ldpba.png"
                  alt="WordPress website development by RoyalTech Innovation"
                  width={1200}
                  height={597}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  unoptimized
                  className="tw:h-auto tw:w-full tw:rounded-xl tw:border tw:border-white/10 tw:object-cover tw:shadow-2xl"
                />
              }
            />

            <div id="shopify" className="tw:scroll-mt-36">
              <ServiceBlock
                reverse
                eyebrow="02 · D2C & Retail Commerce"
                title="Shopify Store Development"
                text="Conversion-focused Shopify stores with seamless shopping experiences, secure checkout, and scalable ecommerce functionality."
                items={["Custom Shopify Store Design", "Theme Customization", "Shopify 2.0", "Product & Collection Setup", "Payment Integration", "Shipping Configuration", "App Integrations", "Shopify Migration"]}
                ctaLabel="Explore Shopify Capabilities"
                onCta={() => document.getElementById("shopify")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                visual={
                  <Image
                    src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795774631/Screenshot_2026-11-27_at_3.46.45_PM.png"
                    alt="Shopify store development by RoyalTech Innovation"
                    width={1200}
                    height={603}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    unoptimized
                    className="tw:h-auto tw:w-full tw:rounded-xl tw:border tw:border-white/10 tw:object-cover tw:shadow-2xl"
                  />
                }
              />
            </div>

            <ServiceBlock
              eyebrow="03 · Multi-Channel Online Stores"
              title="Ecommerce Website Development"
              text="Powerful online stores with product management, payment integrations, inventory systems, and optimized customer journeys."
              items={["Product Catalogs", "Shopping Cart", "Secure Checkout", "Payment Gateways", "Inventory Management", "Order Tracking", "Customer Accounts", "Ecommerce Integrations"]}
              ctaLabel="Discover Ecommerce Systems"
              onCta={() => document.getElementById("ecommerce")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              visual={
                <Image
                  src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795774888/Screenshot_2026-11-27_at_3.50.15_PM.png"
                  alt="Ecommerce website development by RoyalTech Innovation"
                  width={1200}
                  height={614}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  unoptimized
                  className="tw:h-auto tw:w-full tw:rounded-xl tw:border tw:border-white/10 tw:object-cover tw:shadow-2xl"
                />
              }
            />

            <div id="custom-dev" className="tw:scroll-mt-36">
              <ServiceBlock
                reverse
                eyebrow="04 · Bespoke Web Engineering"
                title="Custom Website Development"
                text="Tailor-made websites built around your unique requirements using modern technologies, custom functionality, and scalable architecture."
                items={["Custom Business Websites", "Web Applications", "SaaS Platforms", "Customer Portals", "Admin Dashboards", "Booking Platforms", "CRM Integrations", "Custom APIs"]}
                ctaLabel="Explore Custom Web Stack"
                onCta={() => document.getElementById("custom-dev")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                visual={
                <Image
                  src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795774888/Screenshot_2026-11-27_at_3.50.15_PM.png"
                  alt="Custom website development by RoyalTech Innovation"
                  width={1200}
                  height={614}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  unoptimized
                  className="tw:h-auto tw:w-full tw:rounded-xl tw:border tw:border-white/10 tw:object-cover tw:shadow-2xl"
                />
              }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORDPRESS FEATURES ==================== */}
      <section id="wordpress" className="svx-section tw:scroll-mt-36 tw:bg-[#020617]">
        <div className="svx-wrap">
          <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-14">
            <div className="tw:space-y-6 tw:lg:col-span-6">
              <span className={EYEBROW}>WordPress Web Design &amp; Engineering</span>
              <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">
                WordPress Website Development for Modern Businesses
              </h2>
              <p className="svx-lead tw:leading-relaxed tw:text-slate-400">
                Build a website that&apos;s easy to manage, flexible to expand, and designed to make your brand stand out. Our WordPress
                development services help businesses create professional websites with powerful functionality, intuitive content
                management, and search-engine-friendly architecture.
              </p>
              <div className="tw:grid tw:grid-cols-1 tw:gap-3 tw:pt-2 tw:sm:grid-cols-2">
                {WORDPRESS_FEATURES.map((f) => (
                  <div key={f} className={CHECK_ITEM}>
                    <FaCheck className="tw:mt-1 tw:shrink-0 tw:text-cyanGlow" aria-hidden="true" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="tw:pt-4">
                <button type="button" onClick={() => openQuote("WordPress Website Development")} className={BTN_PRIMARY}>
                  Build Your WordPress Website
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="tw:lg:col-span-6">
              <Image
                src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795776989/Screenshot_2026-11-27_at_4.24.52_PM.png"
                alt="WordPress website development by RoyalTech Innovation"
                width={1200}
                height={712}
                sizes="(min-width: 1024px) 50vw, 100vw"
                unoptimized
                className="tw:h-auto tw:w-full tw:rounded-2xl tw:border tw:border-white/10 tw:object-cover tw:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SHOPIFY FEATURES ==================== */}
      <section className="svx-section tw:scroll-mt-36 tw:border-t tw:border-white/10 tw:bg-[#050b18]">
        <div className="svx-wrap">
          <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-14">
            <div className="tw:order-2 tw:lg:order-1 tw:lg:col-span-6">
              <Image
                src="https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_1200/v1795775459/Screenshot_2026-11-27_at_4.00.13_PM.png"
                alt="Shopify storefront built by RoyalTech Innovation"
                width={1200}
                height={580}
                sizes="(min-width: 1024px) 50vw, 100vw"
                unoptimized
                className="tw:h-auto tw:w-full tw:rounded-2xl tw:border tw:border-white/10 tw:object-cover tw:shadow-2xl"
              />
            </div>

            <div className="tw:order-1 tw:space-y-6 tw:lg:order-2 tw:lg:col-span-6">
              <span className={EYEBROW}>Shopify Store Development</span>
              <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">
                Shopify Store Development That Converts
              </h2>
              <p className="svx-lead tw:leading-relaxed tw:text-slate-400">
                Launch, manage, and scale your online business with a Shopify store designed to deliver seamless shopping experiences.
                We create visually compelling Shopify storefronts with intuitive navigation, product discovery, optimized checkout
                experiences, and features that help turn visitors into paying customers.
              </p>
              <div className="tw:grid tw:grid-cols-1 tw:gap-3 tw:pt-2 tw:sm:grid-cols-2">
                {SHOPIFY_FEATURES.map((f) => (
                  <div key={f} className={CHECK_ITEM}>
                    <FaCheck className="tw:mt-1 tw:shrink-0 tw:text-cyanGlow" aria-hidden="true" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="tw:pt-4">
                <button type="button" onClick={() => openQuote("Shopify Store Development")} className={BTN_PRIMARY}>
                  Launch Your Shopify Store
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ECOMMERCE ==================== */}
      <section id="ecommerce" className="svx-section tw:scroll-mt-36 tw:bg-[#020617]">
        <div className="svx-wrap">
          <SectionHeader
            eyebrow="End-to-End Online Store Development"
            title="Ecommerce Website Development for Online Growth"
            text="Create an online shopping experience that makes buying simple and builds customer trust. We develop ecommerce websites tailored to your products, audience, business model, and operational requirements—from small online stores to complex ecommerce platforms."
          />

          <div className="tw:mb-12 tw:rounded-3xl tw:border tw:border-white/10 tw:bg-[#0b1220]/70 tw:p-5 tw:shadow-2xl tw:sm:p-8 tw:lg:p-10">
            <div className="tw:mb-6 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4 tw:border-b tw:border-white/10 tw:pb-6">
              <div className="tw:flex tw:items-center tw:gap-3">
                <div className="tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:rounded-xl tw:bg-cyanGlow tw:text-sm tw:font-bold tw:text-[#020617]">EC</div>
                <div>
                  <div className="tw:text-sm tw:font-bold tw:text-white">Interactive Commerce Architecture</div>
                  <div className="tw:text-xs tw:text-slate-400">Explore both the customer storefront and merchant operations view</div>
                </div>
              </div>
              <div className="tw:inline-flex tw:rounded-xl tw:border tw:border-white/10 tw:bg-white/[0.04] tw:p-1">
                <button
                  type="button"
                  onClick={() => setEcomView("storefront")}
                  className={`tw:rounded-lg tw:px-4 tw:py-2 tw:text-xs tw:font-bold tw:transition-all tw:cursor-pointer ${
                    ecomView === "storefront" ? "tw:bg-cyanGlow tw:text-[#020617]" : "tw:text-slate-400 tw:hover:text-white"
                  }`}
                >
                  Customer Storefront
                </button>
                <button
                  type="button"
                  onClick={() => setEcomView("admin")}
                  className={`tw:rounded-lg tw:px-4 tw:py-2 tw:text-xs tw:font-bold tw:transition-all tw:cursor-pointer ${
                    ecomView === "admin" ? "tw:bg-cyanGlow tw:text-[#020617]" : "tw:text-slate-400 tw:hover:text-white"
                  }`}
                >
                  Merchant Dashboard
                </button>
              </div>
            </div>

            {ecomView === "storefront" ? (
              <div className="tw:grid tw:grid-cols-1 tw:items-start tw:gap-6 tw:lg:grid-cols-12">
                <div className="tw:space-y-4 tw:rounded-2xl tw:border tw:border-white/10 tw:bg-[#050b18] tw:p-4 tw:lg:col-span-3">
                  <div className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-white">Smart Search &amp; Filters</div>
                  <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-lg tw:border tw:border-white/10 tw:bg-white/[0.03] tw:px-3 tw:py-2 tw:text-xs tw:text-slate-500">
                    <FaMagnifyingGlass aria-hidden="true" />
                    <span>Search SKU or product...</span>
                  </div>
                  <div className="tw:space-y-2 tw:text-xs">
                    <div className="tw:font-semibold tw:text-slate-200">Categories</div>
                    {[
                      ["Electronics & Audio", true],
                      ["Smart Accessories", true],
                      ["Workspace Gear", false],
                    ].map(([label, checked]) => (
                      <label key={label as string} className="tw:flex tw:items-center tw:gap-2 tw:text-slate-400">
                        <input type="checkbox" defaultChecked={checked as boolean} className="tw:accent-cyan-400" />
                        {label as string}
                      </label>
                    ))}
                  </div>
                  <div className="tw:flex tw:items-center tw:justify-between tw:border-t tw:border-white/10 tw:pt-3 tw:text-xs">
                    <span className="tw:text-slate-400">Wishlist Saved</span>
                    <span className="tw:font-bold tw:text-cyanGlow">4 Items</span>
                  </div>
                </div>

                <div className="tw:grid tw:grid-cols-1 tw:gap-4 tw:sm:grid-cols-3 tw:lg:col-span-9">
                  {[
                    ["UltraBook Pro Sleeve", "$64.00", "3 Variants Available", "tw:text-cyanGlow", "https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_800/v1795775837/shopping.webp", 800, 717, "Laptop sleeve product photo"],
                    ["Studio Wireless ANC", "$229.00", "In Stock · Fast Ship", "tw:text-emerald-300", "https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_800/v1795775830/download.webp", 800, 800, "Multi-port charger product photo"],
                    ["GaN 140W Power Hub", "$95.00", "Bundle Pricing", "tw:text-cyanGlow", "https://res.cloudinary.com/ugqc5gb8/image/upload/f_auto,q_auto,w_800/v1795775884/download.jpg", 800, 800, "Desktop charger product photo"],
                  ].map(([name, price, tag, tone, src, width, height, alt]) => (
                    <div key={name} className="tw:flex tw:flex-col tw:justify-between tw:space-y-3 tw:rounded-2xl tw:border tw:border-white/10 tw:bg-[#050b18] tw:p-4 tw:transition-all tw:hover:border-cyanGlow/50">
                      <div>
                        <div className="tw:relative tw:mb-3 tw:flex tw:h-40 tw:items-center tw:justify-center tw:overflow-hidden tw:rounded-xl tw:bg-white">
                          <Image src={src as string} alt={alt as string} width={width as number} height={height as number} unoptimized className="tw:h-full tw:w-full tw:object-contain" />
                          <span className="tw:absolute tw:left-2 tw:top-2 tw:rounded-lg tw:bg-[#050b18]/90 tw:p-1.5 tw:shadow-lg">
                            <Image src="/portfolio/brand/royaltech-logo.png" alt="RoyalTech Innovation" width={1111} height={700} className="tw:h-auto tw:w-16 tw:object-contain" />
                          </span>
                        </div>
                        <span className={`tw:text-[10px] tw:font-semibold ${tone}`}>{tag}</span>
                        <h4 className="tw:mt-0.5 tw:text-sm tw:font-bold tw:text-white">{name}</h4>
                      </div>
                      <div className="tw:flex tw:items-center tw:justify-between tw:border-t tw:border-white/10 tw:pt-3">
                        <span className="tw:text-sm tw:font-extrabold tw:text-white">{price}</span>
                        <button
                          type="button"
                          onClick={() => setCartCount((c) => c + 1)}
                          className="tw:cursor-pointer tw:rounded-lg tw:bg-cyanGlow tw:px-3 tw:py-1.5 tw:text-xs tw:font-semibold tw:text-[#020617] tw:hover:bg-[#a5f3fc]"
                        >
                          + Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4 tw:rounded-xl tw:border tw:border-cyanGlow/25 tw:bg-[#020617] tw:px-5 tw:py-3.5 tw:sm:col-span-3">
                    <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3 tw:text-xs tw:text-slate-300">
                      <span className="tw:rounded tw:bg-cyanGlow tw:px-2.5 tw:py-1 tw:font-bold tw:text-[#020617]">{cartCount} Items in Cart</span>
                      <span>Secure Checkout · Guest or Customer Account · Real-time Shipping Rates</span>
                    </div>
                    <button type="button" onClick={() => openQuote("Ecommerce Website Development")} className="tw:cursor-pointer tw:text-xs tw:font-bold tw:text-cyanGlow tw:underline tw:hover:text-white">
                      Build Your Online Store →
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="tw:grid tw:grid-cols-1 tw:gap-4 tw:md:grid-cols-3">
                {[
                  ["Order & Fulfillment", "Automated Dispatch", "Automated invoice generation, courier tracking webhooks, and instant customer SMS/email notifications."],
                  ["Inventory & Variants", "Multi-SKU Control", "Real-time stock deduction across size, color, and bundle variants with low-stock alerts."],
                  ["Commerce Analytics", "Funnel & AOV Insights", "Track cart abandonment, repeat buyer cohorts, and payment gateway settlement reports."],
                ].map(([eyebrow, title, text]) => (
                  <div key={title} className="tw:space-y-2 tw:rounded-2xl tw:border tw:border-white/10 tw:bg-[#050b18] tw:p-5">
                    <div className="tw:text-xs tw:font-semibold tw:text-slate-500">{eyebrow}</div>
                    <div className="tw:text-lg tw:font-extrabold tw:text-white">{title}</div>
                    <p className="tw:text-xs tw:leading-relaxed tw:text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="tw:grid tw:grid-cols-2 tw:gap-3.5 tw:sm:grid-cols-3 tw:lg:grid-cols-6">
            {ECOM_CAPS.map((c) => (
              <div key={c} className={`${TILE} tw:flex tw:min-h-[64px] tw:items-center tw:justify-center`}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CUSTOM WEB DEVELOPMENT ==================== */}
      <section className="svx-section svx-ambient-grid tw:relative tw:overflow-hidden tw:border-y tw:border-white/10 tw:bg-[#050b18]">
        <div className="tw:pointer-events-none tw:absolute tw:right-1/4 tw:top-0 tw:h-[500px] tw:w-[500px] tw:rounded-full tw:bg-cyanGlow/10 tw:blur-3xl" />
        <div className="svx-wrap tw:relative">
          <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-16">
            <div className="tw:space-y-6 tw:lg:col-span-6">
              <span className={EYEBROW}>Custom Web Solutions &amp; Architecture</span>
              <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">
                Custom Websites Built Around Your Business
              </h2>
              <p className="svx-lead tw:leading-relaxed tw:text-slate-400">
                Not every business fits into a ready-made template. When your business requires unique functionality, tailored
                workflows, or greater flexibility, custom website development provides the foundation to build exactly what you need.
              </p>
              <p className="tw:leading-relaxed tw:text-slate-400">
                Our developers build scalable digital solutions using modern technologies, creating websites that combine performance,
                flexibility, functionality, and a unique user experience.
              </p>

              <div className="tw:pt-2">
                <div className="tw:mb-3 tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-cyanGlow">Modern Engineering Stack</div>
                <div className="tw:flex tw:flex-wrap tw:gap-2.5">
                  {CUSTOM_STACK.map((s) => (
                    <span key={s} className="tw:rounded-lg tw:border tw:border-white/15 tw:bg-white/[0.05] tw:px-3.5 tw:py-1.5 tw:font-mono tw:text-xs tw:font-semibold tw:text-white tw:hover:border-cyanGlow">
                      {s}
                    </span>
                  ))}
                  <span className="tw:rounded-lg tw:border tw:border-cyanGlow/40 tw:bg-cyanGlow/10 tw:px-3.5 tw:py-1.5 tw:font-mono tw:text-xs tw:font-semibold tw:text-cyanGlow">
                    API Integrations
                  </span>
                </div>
              </div>

              <div className="tw:grid tw:grid-cols-1 tw:gap-3 tw:border-t tw:border-white/10 tw:pt-5 tw:sm:grid-cols-2">
                {CUSTOM_TYPES.map((t) => (
                  <div key={t} className={DOT_ITEM}>
                    <span className="tw:h-1.5 tw:w-1.5 tw:rounded-full tw:bg-cyanGlow" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="tw:lg:col-span-6">
              <div className="svx-glass-panel tw:relative tw:space-y-5 tw:rounded-2xl tw:p-5 tw:shadow-2xl tw:sm:p-7">
                <Mock>
                  <div className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-white/10 tw:bg-[#0b1220] tw:px-4 tw:py-2.5 tw:font-mono tw:text-xs">
                    <div className="tw:flex tw:items-center tw:gap-2">
                      <span className={`${DOT} tw:bg-rose-500`} />
                      <span className={`${DOT} tw:bg-amber-400`} />
                      <span className={`${DOT} tw:bg-emerald-500`} />
                      <span className="tw:ml-2 tw:text-slate-400">portal-workflow.ts</span>
                    </div>
                    <span className="tw:text-[11px] tw:text-emerald-400">Compiled</span>
                  </div>
                  <pre className="tw:overflow-x-auto tw:p-4 tw:font-mono tw:text-xs tw:leading-relaxed tw:text-slate-300">
                    <code>{`import { createPortal, syncCRM } from '@royaltech/core';

export const platform = createPortal({
  auth: 'SSO / Role-Based Access',
  database: 'MySQL + MongoDB Cluster',
  onBookingConfirmed: async (client) => {
    await syncCRM(client);
  }
});`}</code>
                  </pre>
                </Mock>

                <div className="tw:flex tw:items-center tw:justify-center tw:gap-3 tw:font-mono tw:text-[11px] tw:text-cyanGlow">
                  <span className="tw:h-px tw:w-12 tw:bg-cyanGlow/50" />
                  <span className="tw:rounded-full tw:border tw:border-cyanGlow/30 tw:bg-cyanGlow/10 tw:px-3 tw:py-1">REST / Webhook Data Layer</span>
                  <span className="tw:h-px tw:w-12 tw:bg-cyanGlow/50" />
                </div>

                <div className="tw:rounded-xl tw:border tw:border-white/10 tw:bg-[#020617] tw:p-4 tw:shadow-lg tw:sm:p-5">
                  <div className="tw:mb-3 tw:flex tw:items-center tw:justify-between tw:border-b tw:border-white/10 tw:pb-3">
                    <div>
                      <div className="tw:text-xs tw:font-extrabold tw:text-white">Enterprise Client Portal</div>
                      <div className="tw:text-[11px] tw:text-slate-400">Custom Dashboard &amp; Automated Scheduling</div>
                    </div>
                    <span className="tw:rounded-md tw:bg-cyanGlow tw:px-2.5 tw:py-1 tw:text-[10px] tw:font-bold tw:text-[#020617]">Live Workspace</span>
                  </div>
                  <div className="tw:grid tw:grid-cols-3 tw:gap-3 tw:text-center">
                    {[
                      ["CRM Sync", "Connected", "text-emerald-300"],
                      ["User Roles", "Admin · Staff", "text-cyanGlow"],
                      ["Custom API", "JSON / REST", "text-slate-400"],
                    ].map(([t, s, tone]) => (
                      <div key={t} className="tw:rounded-lg tw:border tw:border-white/10 tw:bg-white/[0.03] tw:p-3">
                        <div className="tw:text-xs tw:font-extrabold tw:text-white">{t}</div>
                        <div className={`tw:mt-0.5 tw:text-[10px] tw:font-semibold ${tone}`}>{s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== UI/UX & RESPONSIVE ==================== */}
      <section className="svx-section tw:bg-[#020617]">
        <div className="svx-wrap">
          <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-16">
            <div className="tw:space-y-6 tw:lg:col-span-5">
              <span className={EYEBROW}>Responsive Web Design &amp; UI/UX</span>
              <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">
                Designed for Users. Built for Results.
              </h2>
              <p className="svx-lead tw:leading-relaxed tw:text-slate-400">
                A successful website combines aesthetics with functionality. Every layout, interaction, and user journey is designed to
                make your website intuitive, engaging, and effective.
              </p>
              <div className="tw:grid tw:grid-cols-1 tw:gap-3 tw:pt-2 tw:sm:grid-cols-2">
                {[
                  "UI/UX Design",
                  "Mobile-First Responsive Design",
                  "User Journey Planning",
                  "Conversion-Focused Layouts",
                  "Interactive Elements",
                  "Accessibility Considerations",
                  "Modern Visual Design",
                  "Brand Consistency",
                ].map((item) => (
                  <div key={item} className={DOT_ITEM}>
                    <span className="tw:h-2 tw:w-2 tw:rounded-full tw:bg-cyanGlow" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="tw:lg:col-span-7">
              <div className="tw:rounded-3xl tw:border tw:border-white/10 tw:bg-[#0b1220]/70 tw:p-6 tw:shadow-2xl tw:sm:p-8">
                <div className="tw:mb-6 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3">
                  <span className="tw:text-xs tw:font-bold tw:uppercase tw:tracking-wider tw:text-slate-400">Adaptive Breakpoint Preview</span>
                  <div className="tw:inline-flex tw:rounded-xl tw:border tw:border-white/10 tw:bg-white/[0.04] tw:p-1">
                    {(["all", "desktop", "tablet", "mobile"] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setViewport(m)}
                        className={`tw:rounded-lg tw:px-3 tw:py-1.5 tw:text-xs tw:font-bold tw:capitalize tw:transition-all tw:cursor-pointer ${
                          viewport === m ? "tw:bg-cyanGlow tw:text-[#020617]" : "tw:text-slate-400 tw:hover:text-white"
                        }`}
                      >
                        {m === "all" ? "All Devices" : m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="tw:relative tw:flex tw:min-h-[300px] tw:items-end tw:justify-center tw:gap-4 tw:pt-4">
                  <div
                    className={`tw:w-full tw:max-w-md tw:overflow-hidden tw:rounded-xl tw:border-2 tw:border-white/20 tw:bg-[#050b18] tw:shadow-lg tw:transition-all ${
                      showDesktop ? "tw:block" : "tw:hidden"
                    }`}
                  >
                    <div className="tw:flex tw:items-center tw:gap-1.5 tw:bg-[#0b1220] tw:px-3 tw:py-1.5">
                      <FaDesktop className="tw:text-[10px] tw:text-cyanGlow" aria-hidden="true" />
                      <span className="tw:ml-1 tw:font-mono tw:text-[10px] tw:text-slate-400">1440px Desktop</span>
                    </div>
                    <Image
                      src="/services/website-development/device-desktop.jpg"
                      alt="Sample desktop website layout"
                      width={1280}
                      height={560}
                      className="tw:h-44 tw:w-full tw:object-cover tw:object-top"
                    />
                  </div>

                  <div
                    className={`tw:w-36 tw:shrink-0 tw:overflow-hidden tw:rounded-xl tw:border-2 tw:border-white/20 tw:bg-[#050b18] tw:shadow-xl tw:transition-all ${
                      showTablet ? (viewport === "all" ? "tw:hidden tw:sm:block" : "tw:block") : "tw:hidden"
                    }`}
                  >
                    <div className="tw:bg-[#0b1220] tw:px-2.5 tw:py-1 tw:text-center tw:font-mono tw:text-[9px] tw:text-slate-400">768px Tablet</div>
                    <Image
                      src="/services/website-development/device-tablet.jpg"
                      alt="Sample tablet website layout"
                      width={864}
                      height={1152}
                      className="tw:h-52 tw:w-full tw:bg-white tw:object-contain tw:object-top"
                    />
                  </div>

                  <div
                    className={`tw:w-28 tw:shrink-0 tw:overflow-hidden tw:rounded-2xl tw:border-2 tw:border-cyanGlow/50 tw:bg-[#050b18] tw:shadow-2xl tw:transition-all ${
                      showMobile ? "tw:block" : "tw:hidden"
                    }`}
                  >
                    <div className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:bg-[#0b1220] tw:px-2 tw:py-1 tw:font-mono tw:text-[8px] tw:text-cyanGlow">
                      <FaMobileScreen aria-hidden="true" />
                      390px Mobile
                    </div>
                    <Image
                      src="/services/website-development/device-mobile.jpg"
                      alt="Sample mobile website layout"
                      width={720}
                      height={760}
                      className="tw:h-52 tw:w-full tw:bg-white tw:object-contain tw:object-top"
                    />
                  </div>
                </div>
                <p className="tw:mt-4 tw:text-center tw:text-[11px] tw:text-slate-500">Sample layout · not a live website</p>
                <div className="tw:mt-3 tw:flex tw:justify-center tw:gap-6 tw:text-[11px] tw:text-slate-500">
                  <span className="tw:flex tw:items-center tw:gap-1.5"><FaDesktop aria-hidden="true" /> Desktop</span>
                  <span className="tw:flex tw:items-center tw:gap-1.5"><FaTabletScreenButton aria-hidden="true" /> Tablet</span>
                  <span className="tw:flex tw:items-center tw:gap-1.5"><FaMobileScreen aria-hidden="true" /> Mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEO & PERFORMANCE ==================== */}
      <section className="svx-section tw:border-y tw:border-white/10 tw:bg-[#050b18]">
        <div className="svx-wrap">
          <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-14">
            <div className="tw:order-2 tw:lg:order-1 tw:lg:col-span-6">
              <div className={`${CARD} tw:space-y-6 tw:p-6 tw:sm:p-8`}>
                <div className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-white/10 tw:pb-4">
                  <div>
                    <span className="tw:text-[11px] tw:font-bold tw:uppercase tw:tracking-wider tw:text-cyanGlow">Technical Architecture Audit</span>
                    <h3 className="tw:text-lg tw:font-extrabold tw:text-white">Search &amp; Speed Foundation</h3>
                  </div>
                  <span className="tw:rounded-full tw:border tw:border-emerald-400/30 tw:bg-emerald-500/10 tw:px-3 tw:py-1 tw:text-xs tw:font-bold tw:text-emerald-300">
                    Crawl &amp; Index Ready
                  </span>
                </div>

                <div className="tw:space-y-2 tw:rounded-xl tw:border tw:border-white/10 tw:bg-[#020617] tw:p-4 tw:font-mono tw:text-xs">
                  <div className="tw:flex tw:items-center tw:justify-between tw:text-[11px] tw:text-cyanGlow">
                    <span>&lt;head&gt; Semantic &amp; Schema Layer</span>
                    <span>JSON-LD + Canonical</span>
                  </div>
                  <div className="tw:text-[11px] tw:leading-relaxed tw:text-slate-300">
                    &lt;link rel=&quot;canonical&quot; href=&quot;.../services/website-development&quot; /&gt;
                    <br />
                    &lt;script type=&quot;application/ld+json&quot;&gt;{"{ \"@type\": \"Service\" }"}&lt;/script&gt;
                    <br />
                    &lt;meta name=&quot;robots&quot; content=&quot;index, follow&quot; /&gt;
                  </div>
                </div>

                <div className="tw:grid tw:grid-cols-1 tw:gap-3 tw:sm:grid-cols-2">
                  {AUDIT_ITEMS.map(({ icon: Icon, label, badge }) => (
                    <div key={label} className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-xl tw:border tw:border-white/10 tw:bg-white/[0.03] tw:p-3.5">
                      <div className="tw:flex tw:items-center tw:gap-2.5">
                        <Icon className="tw:text-cyanGlow" aria-hidden="true" />
                        <span className="tw:text-xs tw:font-bold tw:text-white">{label}</span>
                      </div>
                      <span className="tw:rounded tw:bg-cyanGlow/10 tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold tw:text-cyanGlow">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="tw:order-1 tw:space-y-6 tw:lg:order-2 tw:lg:col-span-6">
              <span className={EYEBROW}>SEO-Friendly Website Development</span>
              <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">
                Websites Ready for Search Engines and Growth
              </h2>
              <p className="svx-lead tw:leading-relaxed tw:text-slate-400">
                Your website should be built with search visibility in mind from the beginning. We follow development practices that
                create a technically strong foundation for search engines, users, and future marketing campaigns.
              </p>
              <div className="tw:grid tw:grid-cols-1 tw:gap-3 tw:pt-2 tw:sm:grid-cols-2">
                {SEO_POINTS.map((p, i) => (
                  <div key={p} className={`${CHECK_ITEM} ${i === SEO_POINTS.length - 1 ? "tw:sm:col-span-2" : ""}`}>
                    <FaCheck className="tw:mt-1 tw:shrink-0 tw:text-cyanGlow" aria-hidden="true" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section id="process" className="svx-section tw:scroll-mt-36 tw:bg-[#020617]">
        <div className="svx-wrap">
          <SectionHeader
            eyebrow="Structured Delivery Methodology"
            title="From Concept to Launch — A Clear Development Process"
            text="Every engagement follows a transparent, milestone-driven workflow so you always know what is being designed, built, and tested."
          />
          <div className="tw:relative">
            <div className="tw:absolute tw:left-10 tw:right-10 tw:top-8 tw:hidden tw:h-0.5 tw:bg-linear-to-r tw:from-cyanGlow/30 tw:via-cyanGlow tw:to-cyanDeep/30 tw:lg:block" />
            <div className="tw:grid tw:grid-cols-1 tw:gap-8 tw:lg:grid-cols-5">
              {PROCESS.map((step) => (
                <div key={step.n} className="tw:group tw:relative tw:pl-12 tw:lg:pl-0 tw:lg:pt-16">
                  <div className="tw:absolute tw:left-0 tw:top-0 tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:rounded-xl tw:bg-cyanGlow tw:font-extrabold tw:text-[#020617] tw:text-sm tw:lg:h-16 tw:lg:w-16 tw:lg:rounded-2xl tw:lg:border-2 tw:lg:border-cyanGlow tw:lg:bg-[#020617] tw:lg:text-lg tw:lg:text-cyanGlow tw:lg:shadow-lg tw:lg:group-hover:bg-cyanGlow tw:lg:group-hover:text-[#020617] tw:transition-all">
                    {step.n}
                  </div>
                  <h3 className="tw:text-lg tw:font-extrabold tw:text-white">{step.title}</h3>
                  <p className="tw:mt-2 tw:text-sm tw:leading-relaxed tw:text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE ==================== */}
      <section className="svx-section tw:border-y tw:border-white/10 tw:bg-[#050b18]">
        <div className="svx-wrap">
          <div className="tw:grid tw:grid-cols-1 tw:items-start tw:gap-12 tw:lg:grid-cols-12 tw:lg:gap-16">
            <div className="tw:space-y-6 tw:lg:sticky tw:lg:top-28 tw:lg:col-span-5">
              <span className={EYEBROW}>Why RoyalTech Innovation</span>
              <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:tracking-tight tw:text-white">
                Your Technology Partner for Digital Growth
              </h2>
              <p className="svx-lead tw:leading-relaxed tw:text-slate-400">
                Based in Mohali and serving businesses across Punjab, Chandigarh, India, and global markets, RoyalTech Innovation
                combines practical engineering with clear business communication.
              </p>
              <div className={`${CARD} tw:space-y-4 tw:p-6`}>
                <div className="tw:flex tw:items-center tw:justify-between">
                  <span className="tw:font-mono tw:text-xs tw:text-cyanGlow">ROYALTECH ENGINEERING STANDARD</span>
                  <span className="tw:h-2.5 tw:w-2.5 tw:rounded-full tw:bg-emerald-400" />
                </div>
                <blockquote className="tw:text-lg tw:font-bold tw:leading-snug tw:text-white">
                  “Innovate. Integrate. Elevate. — We build digital platforms your team can rely on every single day.”
                </blockquote>
                <div className="tw:flex tw:items-center tw:justify-between tw:border-t tw:border-white/10 tw:pt-4 tw:text-xs tw:text-slate-400">
                  <span>CP67 Mall, Sector 67, Mohali</span>
                  <button type="button" onClick={() => openQuote("Partner Consultation")} className="tw:cursor-pointer tw:font-semibold tw:text-cyanGlow tw:hover:text-white">
                    Work With Us →
                  </button>
                </div>
              </div>
            </div>

            <div className="tw:divide-y tw:divide-white/10 tw:rounded-3xl tw:border tw:border-white/10 tw:bg-[#0b1220]/70 tw:px-6 tw:shadow-2xl tw:sm:px-10 tw:lg:col-span-7">
              {WHY.map(([title, text], i) => (
                <div key={title} className="tw:flex tw:flex-col tw:justify-between tw:gap-2 tw:py-6 tw:sm:flex-row tw:sm:items-center">
                  <div className="tw:flex tw:items-center tw:gap-4">
                    <span className="tw:font-mono tw:text-xs tw:font-bold tw:text-cyanGlow">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="tw:text-lg tw:font-extrabold tw:text-white">{title}</h3>
                  </div>
                  <p className="tw:text-sm tw:text-slate-400 tw:sm:max-w-xs tw:sm:text-right">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="svx-section tw:bg-[#020617]">
        <div className="svx-wrap">
          <SectionHeader
            eyebrow="Domain Versatility"
            title="Web Development Solutions Across Industries"
            text="We tailor user journeys, compliance standards, and integrations to match the realities of your sector."
          />
          <div className="tw:grid tw:grid-cols-1 tw:gap-4 tw:sm:grid-cols-2 tw:lg:grid-cols-5">
            {INDUSTRIES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="tw:group tw:flex tw:min-h-[200px] tw:flex-col tw:justify-between tw:rounded-2xl tw:border tw:border-white/10 tw:bg-[#0b1220]/70 tw:p-6 tw:transition-all tw:duration-300 tw:hover:-translate-y-1 tw:hover:border-cyanGlow/50"
              >
                <div className="tw:flex tw:h-10 tw:w-10 tw:items-center tw:justify-center tw:rounded-xl tw:bg-cyanGlow/10 tw:text-cyanGlow tw:transition-colors tw:group-hover:bg-cyanGlow tw:group-hover:text-[#020617]">
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <h3 className="tw:text-base tw:font-extrabold tw:text-white">{title}</h3>
                  <p className="tw:mt-1.5 tw:text-xs tw:leading-relaxed tw:text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="svx-section tw:scroll-mt-36 tw:border-t tw:border-white/10 tw:bg-[#050b18]">
        <div className="svx-wrap-narrow">
          <SectionHeader
            eyebrow="Answers & Transparency"
            title="Frequently Asked Questions"
            text="Everything you need to know about our website development services, timelines, platforms, and ongoing support."
          />
          <div className="tw:space-y-3.5">
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className={`tw:overflow-hidden tw:rounded-2xl tw:border tw:bg-[#0b1220]/80 ${isOpen ? "tw:border-cyanGlow/40" : "tw:border-white/10"}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="tw:flex tw:w-full tw:cursor-pointer tw:items-center tw:justify-between tw:gap-4 tw:px-6 tw:py-5 tw:text-left"
                  >
                    <span className="tw:text-base tw:font-bold tw:text-white">
                      {i + 1}. {item.q}
                    </span>
                    <span className={`tw:flex tw:h-8 tw:w-8 tw:shrink-0 tw:items-center tw:justify-center tw:rounded-lg tw:transition-colors ${isOpen ? "tw:bg-cyanGlow tw:text-[#020617]" : "tw:bg-cyanGlow/10 tw:text-cyanGlow"}`}>
                      {isOpen ? <FaMinus aria-hidden="true" /> : <FaPlus aria-hidden="true" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="tw:border-t tw:border-white/10 tw:px-6 tw:pb-5 tw:pt-3.5 tw:text-sm tw:leading-relaxed tw:text-slate-400">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="svx-section tw:bg-[#020617]">
        <div className="svx-wrap">
          <div className="tw:relative tw:overflow-hidden tw:rounded-3xl tw:border tw:border-cyanGlow/25 tw:bg-linear-to-br tw:from-[#0b1a2c] tw:via-[#0b2a3d] tw:to-[#050b18] tw:shadow-2xl">
            <div className="tw:pointer-events-none tw:absolute tw:-right-24 tw:-top-24 tw:h-96 tw:w-96 tw:rounded-full tw:bg-cyanGlow/20 tw:blur-3xl" />
            <div className="tw:pointer-events-none tw:absolute tw:-bottom-24 tw:left-10 tw:h-80 tw:w-80 tw:rounded-full tw:bg-cyanDeep/10 tw:blur-3xl" />

            <div className="tw:relative tw:z-10 tw:grid tw:grid-cols-1 tw:items-center tw:gap-10 tw:p-8 tw:sm:p-12 tw:lg:grid-cols-12 tw:lg:gap-8 tw:lg:p-16">
              <div className="tw:space-y-6 tw:lg:col-span-6">
                <span className={EYEBROW}>Start Your Digital Transformation</span>
                <h2 className="svx-h2 tw:font-extrabold tw:leading-tight tw:text-white">Ready to Build Your Next Website?</h2>
                <p className="svx-lead tw:max-w-xl tw:leading-relaxed tw:text-slate-300">
                  Let&apos;s transform your ideas into a powerful digital experience that helps your business stand out, connect with
                  customers, and grow online.
                </p>
                <div className="tw:flex tw:flex-col tw:items-stretch tw:gap-4 tw:pt-2 tw:sm:flex-row tw:sm:items-center">
                  <button type="button" onClick={() => openQuote("Start Your Website Project")} className={BTN_PRIMARY}>
                    Start Your Project
                    <FaArrowRight aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => openQuote("Talk to Web Experts")} className={BTN_GHOST}>
                    Talk to Our Experts
                  </button>
                </div>
              </div>

              <div className="tw:lg:col-span-6">
                <div className="tw:mx-auto tw:max-w-2xl">
                  <Image
                    src="/services/website-development/laptop-ecommerce.png"
                    alt="Ecommerce website on a laptop built by RoyalTech Innovation"
                    width={886}
                    height={566}
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="tw:h-auto tw:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT STRIP ==================== */}
      <section className="tw:border-t tw:border-white/10 tw:bg-[#050b18]">
        <div className="svx-wrap tw:flex tw:flex-col tw:items-center tw:justify-between tw:gap-4 tw:py-8 tw:text-sm tw:text-slate-400 tw:sm:flex-row">
          <div className="tw:flex tw:items-center tw:gap-2">
            <FaLocationDot className="tw:text-cyanGlow" aria-hidden="true" />
            CP67 Mall, Gate No. 5, Imperial Tower, Sector 67, Mohali, Punjab 160062
          </div>
          <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-6">
            <a href="tel:+918679016505" className="tw:flex tw:items-center tw:gap-2 tw:font-medium tw:text-cyanGlow tw:hover:text-white">
              <FaPhone aria-hidden="true" /> +91 86790 16505
            </a>
            <a href="mailto:info@royaltechinnovation.co.in" className="tw:flex tw:items-center tw:gap-2 tw:font-medium tw:text-cyanGlow tw:hover:text-white">
              <FaEnvelope aria-hidden="true" /> info@royaltechinnovation.co.in
            </a>
            <Link href="#faq" className="tw:flex tw:items-center tw:gap-2 tw:hover:text-white">
              <FaCircleQuestion aria-hidden="true" /> FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
