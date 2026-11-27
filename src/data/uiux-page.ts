/**
 * Content + SEO constants for /services/ui-ux-design.
 * Keywords are woven into the copy below; nothing here is a guarantee of rankings and the
 * page deliberately contains no invented statistics, clients, awards or testimonials.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/ui-ux-design";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "UI/UX Design Company | Website, App & Product Design – RoyalTech";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation offers professional UI/UX design services for websites, mobile apps, dashboards, wireframes, prototypes, and digital products.";

export const SEO_KEYWORDS = [
  "UI UX design company",
  "UI UX design services",
  "UI/UX design agency",
  "UI UX designer",
  "user experience design services",
  "website UI UX design",
  "website UX design",
  "website UI design",
  "mobile app UI UX design",
  "mobile app design services",
  "dashboard UI UX design",
  "dashboard design services",
  "wireframing and prototyping",
  "product design services",
  "digital product design",
  "user interface design services",
  "responsive UI design",
  "SaaS product design",
  "UX research services",
  "user journey mapping",
  "UI design company",
  "UX audit services",
  "Figma UI UX design",
  "website redesign UI UX",
  "design system development",
  "UI UX design company in Mohali",
  "UI UX design company in Chandigarh",
  "UI UX design services in Punjab",
  "product design company in Chandigarh",
  "RoyalTech Innovation",
];

export const HERO_SERVICES = ["Website UI/UX", "Mobile App UI/UX", "Dashboard Design", "Wireframing", "Product Design"];

export const INTRO_POINTS = [
  { title: "Research-led", text: "Decisions start with how people actually think and behave." },
  { title: "Business-aware", text: "Every screen supports a goal, not just a look." },
  { title: "Build-ready", text: "Organized files your developers can start from." },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
export type DesignServiceId = "ui-ux" | "mobile" | "dashboard" | "prototyping" | "product";

export type DesignService = {
  id: DesignServiceId;
  anchor: string;
  num: string;
  short: string;
  /** Small label shown above the H3. */
  tag: string;
  /** One-line summary used in the services index. */
  blurb: string;
  heading: string;
  description: string[];
  items: string[];
  cta: string;
  /** Local / supporting copy with natural keyword usage. */
  local: string;
};

export const SERVICES: DesignService[] = [
  {
    id: "ui-ux",
    anchor: "website-ui-ux-design",
    num: "01",
    short: "Website UI/UX Design",
    tag: "Websites",
    blurb: "Modern, conversion-focused websites designed around real users and clear goals.",
    heading: "Website UI/UX Design",
    description: [
      "We design modern, intuitive, and visually compelling websites that create meaningful user experiences, strengthen brand identity, and guide visitors toward valuable actions.",
      "Our website UI/UX design approach combines user-centered thinking, visual hierarchy, responsive layouts, and conversion-focused design principles.",
    ],
    items: [
      "Business Website UI/UX",
      "Corporate Website Design",
      "Landing Page Design",
      "Ecommerce Website Design",
      "Responsive Web Design",
      "Website Redesign",
      "User Journey Design",
      "Conversion-Focused Interfaces",
      "Website Navigation Design",
      "Visual Design Systems",
    ],
    cta: "Design Your Website",
    local:
      "Looking for website UI UX design in Chandigarh or Mohali? Our designers hand over layouts that pair naturally with a fast, SEO-friendly website build.",
  },
  {
    id: "mobile",
    anchor: "mobile-app-ui-ux-design",
    num: "02",
    short: "Mobile App UI/UX Design",
    tag: "Mobile apps",
    blurb: "Android and iOS app interfaces, from onboarding and navigation to polished screens.",
    heading: "Mobile App UI/UX Design",
    description: [
      "We create intuitive and visually engaging mobile app experiences designed around user needs, device interactions, usability, and seamless navigation.",
      "Our mobile app design solutions help businesses deliver consistent, enjoyable, and user-friendly experiences across mobile devices.",
    ],
    items: [
      "Android App UI/UX Design",
      "iOS App UI/UX Design",
      "Mobile App Wireframes",
      "App User Journey Mapping",
      "Mobile Prototyping",
      "App Navigation Design",
      "Mobile Design Systems",
      "Ecommerce App Design",
      "Business App Design",
      "User-Centered Mobile Interfaces",
    ],
    cta: "Design Your Mobile App",
    local:
      "As a mobile app UI UX design company in Mohali, we design app interfaces that your developers, or our own mobile app development team, can build with confidence.",
  },
  {
    id: "dashboard",
    anchor: "dashboard-ui-ux-design",
    num: "03",
    short: "Dashboard UI/UX Design",
    tag: "Dashboards",
    blurb: "Admin, SaaS, CRM and analytics interfaces that turn complex data into clear insight.",
    heading: "Dashboard UI/UX Design",
    description: [
      "We design intuitive dashboards and data-driven interfaces that transform complex information into clear, actionable insights.",
      "From admin panels and business dashboards to analytics platforms and management systems, we create interfaces that improve visibility, usability, and decision-making.",
    ],
    items: [
      "Admin Dashboard Design",
      "SaaS Dashboard Design",
      "Analytics Dashboard",
      "CRM Dashboard UI",
      "ERP Dashboard UI",
      "Management Dashboard",
      "Data Visualization",
      "Reporting Interfaces",
      "User Management",
      "Dashboard UX Optimization",
    ],
    cta: "Design Your Dashboard",
    local:
      "Our dashboard design services in Punjab and beyond cover web application UI, admin dashboard design and reporting screens, ready to connect to your CRM or custom software.",
  },
  {
    id: "prototyping",
    anchor: "wireframing-prototyping",
    num: "04",
    short: "Wireframing & Prototyping",
    tag: "Prototyping",
    blurb: "Structured wireframes and clickable prototypes that validate ideas before development.",
    heading: "Wireframing & Interactive Prototyping",
    description: [
      "Turn ideas into structured digital experiences before development begins.",
      "We create wireframes and interactive prototypes that help visualize user journeys, validate functionality, explore layouts, and improve the product experience before investing in full development.",
    ],
    items: [
      "Website Wireframes",
      "Mobile App Wireframes",
      "Low-Fidelity Wireframes",
      "High-Fidelity Wireframes",
      "Interactive Prototypes",
      "Clickable Prototypes",
      "User Flow Mapping",
      "Navigation Planning",
      "UX Validation",
      "Prototype Testing",
    ],
    cta: "Visualize Your Product",
    local:
      "Our wireframing and prototyping work helps startups and growing businesses agree on structure early, so development starts from a clear, tested direction.",
  },
  {
    id: "product",
    anchor: "digital-product-design",
    num: "05",
    short: "Digital Product Design",
    tag: "Products",
    blurb: "End-to-end product design for SaaS platforms, startup products and enterprise applications.",
    heading: "Digital Product Design",
    description: [
      "We design digital products that combine business strategy, user experience, functionality, and visual design.",
      "From SaaS platforms and startup products to enterprise applications, our product design approach helps transform ideas into intuitive, scalable, and user-focused digital solutions.",
    ],
    items: [
      "Digital Product Design",
      "SaaS Product Design",
      "Product UI/UX",
      "Product Strategy",
      "User Research",
      "Product Discovery",
      "User Journey Mapping",
      "Design Systems",
      "Product Prototyping",
      "UX Improvement",
      "Product Usability",
      "Design for Scalability",
    ],
    cta: "Design Your Digital Product",
    local:
      "As a product design company in Chandigarh and Mohali, we support SaaS product design and startup products from the first idea through to a build-ready MVP.",
  },
];

/* ------------------------------------------------------------------ */
/* Capabilities: 15 skills grouped into three design boards            */
/* ------------------------------------------------------------------ */
export type CapabilityGroup = {
  id: "research" | "design" | "deliver";
  label: string;
  title: string;
  items: { name: string; text: string }[];
};

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "research",
    label: "Understand",
    title: "Research & Strategy",
    items: [
      { name: "UX Research", text: "Learn how users think and what they need" },
      { name: "User Personas", text: "Clear profiles that guide decisions" },
      { name: "User Journey Mapping", text: "Every step, touchpoint and friction point" },
      { name: "Information Architecture", text: "Content organized so it is easy to find" },
      { name: "UX Audits", text: "Expert review of an existing experience" },
    ],
  },
  {
    id: "design",
    label: "Create",
    title: "Interface & Interaction",
    items: [
      { name: "UI Design", text: "Polished, consistent interfaces" },
      { name: "Interaction Design", text: "Clear feedback, states and transitions" },
      { name: "Visual Design", text: "Typography, color and layout with purpose" },
      { name: "Wireframing", text: "Structure and hierarchy before visuals" },
      { name: "Responsive Design", text: "Layouts that adapt to every screen" },
    ],
  },
  {
    id: "deliver",
    label: "Validate & deliver",
    title: "Testing & Handoff",
    items: [
      { name: "Prototyping", text: "Clickable flows you can try early" },
      { name: "Usability Testing", text: "Find friction before launch" },
      { name: "Design Systems", text: "Reusable components and guidelines" },
      { name: "Accessibility", text: "Readable, usable, inclusive by design" },
      { name: "Design Handoff", text: "Organized specs and assets for developers" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */
export type ProcessVisual = "research" | "strategy" | "wire" | "ui" | "proto" | "test" | "handoff";

export const PROCESS: {
  num: string;
  title: string;
  text: string;
  activities: string[];
  visual: ProcessVisual;
}[] = [
  {
    num: "01",
    title: "Discovery & Research",
    text: "Understand your business, target audience, goals, users, requirements, and existing challenges.",
    activities: ["Business goals", "Audience & users", "Requirements", "Existing challenges"],
    visual: "research",
  },
  {
    num: "02",
    title: "User Research & Strategy",
    text: "Explore user behaviors, expectations, user journeys, information architecture, and experience opportunities.",
    activities: ["User behavior", "User journeys", "Information architecture", "Opportunities"],
    visual: "strategy",
  },
  {
    num: "03",
    title: "Wireframing",
    text: "Create structured layouts, screen architecture, content hierarchy, and user flows.",
    activities: ["Screen architecture", "Content hierarchy", "User flows"],
    visual: "wire",
  },
  {
    num: "04",
    title: "UI Design",
    text: "Develop polished visual interfaces, typography, color systems, components, and responsive layouts.",
    activities: ["Typography", "Color systems", "Components", "Responsive layouts"],
    visual: "ui",
  },
  {
    num: "05",
    title: "Prototyping",
    text: "Create interactive prototypes to visualize interactions, navigation, and complete user journeys.",
    activities: ["Interactions", "Navigation", "Full user journeys"],
    visual: "proto",
  },
  {
    num: "06",
    title: "Testing & Refinement",
    text: "Evaluate usability, identify friction points, collect feedback, and improve the experience.",
    activities: ["Usability review", "Friction points", "Feedback", "Improvements"],
    visual: "test",
  },
  {
    num: "07",
    title: "Design Handoff",
    text: "Prepare design specifications, components, assets, and documentation for development.",
    activities: ["Specifications", "Components", "Assets", "Documentation"],
    visual: "handoff",
  },
];

/* ------------------------------------------------------------------ */
/* Design systems + tools                                              */
/* ------------------------------------------------------------------ */
export const SYSTEM_ITEMS = [
  "Color Systems",
  "Typography Systems",
  "UI Components",
  "Buttons & Forms",
  "Design Tokens",
  "Spacing Guidelines",
  "Iconography",
  "Interaction Patterns",
  "Component Libraries",
  "Brand Guidelines",
];

export type ToolKey = "figma" | "ps" | "ai" | "xd" | "figjam" | "system" | "proto" | "research" | "collab";

export const TOOLS: { key: ToolKey; name: string; role: string }[] = [
  { key: "figma", name: "Figma", role: "Interface design, prototyping and developer handoff" },
  { key: "ps", name: "Adobe Photoshop", role: "Image editing and visual assets" },
  { key: "ai", name: "Adobe Illustrator", role: "Icons, illustrations and vector assets" },
  { key: "xd", name: "Adobe XD", role: "Where relevant to existing workflows and files" },
  { key: "figjam", name: "FigJam", role: "Workshops, user flows and collaborative planning" },
  { key: "system", name: "Design Systems", role: "Shared components, tokens and guidelines" },
  { key: "proto", name: "Interactive Prototyping Tools", role: "Clickable flows to validate ideas before development" },
  { key: "research", name: "User Research Tools", role: "Interviews, surveys and usability feedback" },
  { key: "collab", name: "Collaboration & Handoff Tools", role: "Comments, specs and assets shared with your team" },
];

/* ------------------------------------------------------------------ */
/* UX audit                                                            */
/* ------------------------------------------------------------------ */
export const AUDIT_ITEMS = [
  "UX Audits",
  "Website Usability Analysis",
  "Mobile App UX Review",
  "Navigation Improvements",
  "User Journey Analysis",
  "UI Modernization",
  "Conversion Experience Improvements",
  "Accessibility Review",
  "Visual Consistency Improvements",
  "Design Recommendations",
];

/* ------------------------------------------------------------------ */
/* Responsive + accessible                                             */
/* ------------------------------------------------------------------ */
export const RESPONSIVE_ITEMS = [
  "Mobile-First Design",
  "Responsive Layouts",
  "Tablet Optimization",
  "Desktop Experiences",
  "Accessibility Considerations",
  "Readable Typography",
  "Clear Navigation",
  "Touch-Friendly Interfaces",
  "Consistent Interactions",
  "Usability Principles",
];

/* ------------------------------------------------------------------ */
/* UI vs UX                                                            */
/* ------------------------------------------------------------------ */
export const UX_POINTS = [
  "User Research",
  "User Journey Mapping",
  "Information Architecture",
  "Wireframing",
  "Usability Testing",
  "Interaction Planning",
];

export const UI_POINTS = [
  "Typography",
  "Colors",
  "Layout",
  "Buttons",
  "Components",
  "Icons",
  "Visual Hierarchy",
  "Responsive Interfaces",
];

/* ------------------------------------------------------------------ */
/* Why RoyalTech                                                       */
/* ------------------------------------------------------------------ */
export const WHY = [
  { title: "User-Centered Approach", text: "We prioritize user needs, behaviors, and expectations throughout the design process." },
  { title: "Business-Focused Design", text: "We align design decisions with your business objectives and customer goals." },
  { title: "Modern Visual Experiences", text: "We create clean, engaging, and contemporary digital interfaces." },
  { title: "Functional & Intuitive Interfaces", text: "We simplify complex interactions and make digital experiences easier to use." },
  { title: "Consistent Design Systems", text: "We create reusable components and scalable design foundations." },
  { title: "Collaborative Process", text: "We work closely with clients and development teams throughout the design journey." },
  { title: "Responsive Design", text: "We create experiences that work seamlessly across mobile, tablet, and desktop." },
  {
    title: "Development-Ready Designs",
    text: "We prepare organized designs, reusable components, specifications, and assets for smooth development handoff.",
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */
export type IndustryKind = "dash" | "store" | "list" | "calendar" | "form" | "map" | "cards" | "chart";

export const INDUSTRIES: { name: string; text: string; kind: IndustryKind; span: string; photo?: string }[] = [
  { name: "Ecommerce & Retail", text: "Storefronts, product pages and checkout flows designed to help shoppers find, compare and buy with confidence.", kind: "store", span: "tall", photo: "/op-ind-ecommerce.jpg" },
  { name: "Healthcare", text: "Clear, accessible patient portals, appointment booking and care-provider interfaces.", kind: "calendar", span: "", photo: "/op-ind-healthcare.jpg" },
  { name: "Education", text: "Learning platforms, course dashboards and student experiences that keep learners oriented.", kind: "list", span: "", photo: "/op-ind-education.jpg" },
  { name: "Finance & Fintech", text: "Trustworthy account, payment and reporting interfaces where clarity and security come first.", kind: "chart", span: "wide", photo: "/op-ind-finance.jpg" },
  { name: "Real Estate", text: "Property search, listings and enquiry journeys with maps, filters and strong visual presentation.", kind: "map", span: "" },
  { name: "SaaS & Technology", text: "Product dashboards, onboarding flows and subscription experiences that make complex software feel simple.", kind: "dash", span: "" },
  { name: "Manufacturing", text: "Operational dashboards and field tools that simplify inventory, approvals and production workflows.", kind: "dash", span: "", photo: "/op-ind-manufacturing.jpg" },
  { name: "Hospitality", text: "Booking, itinerary and guest experiences that feel effortless from search to stay.", kind: "cards", span: "tall" },
  { name: "Logistics", text: "Tracking, dispatch and fleet interfaces that keep teams and customers informed in real time.", kind: "map", span: "", photo: "/op-ind-logistics.jpg" },
  { name: "Professional Services", text: "Client portals, scheduling and service websites that communicate expertise clearly.", kind: "form", span: "" },
  { name: "Startups", text: "Product discovery, MVP design and investor-ready interfaces built to validate ideas quickly.", kind: "cards", span: "wide" },
  { name: "Enterprise Businesses", text: "Scalable design systems and internal tools that bring consistency to large, multi-team products.", kind: "list", span: "" },
];

/* ------------------------------------------------------------------ */
/* FAQ (rendered visibly on the page; the same text feeds FAQPage schema) */
/* ------------------------------------------------------------------ */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is UI/UX design?",
    a: "UI/UX design is the practice of shaping how a digital product looks (user interface) and how it works and feels to use (user experience). It covers research, structure, user flows, wireframes, visual design and prototypes so websites, mobile apps and dashboards are easy to understand and pleasant to use.",
  },
  {
    q: "What is the difference between UI and UX?",
    a: "UX design focuses on the overall experience: understanding users, planning journeys, structuring content and making tasks simple. UI design focuses on the visual interface: layout, typography, colors, components and interactions. The best results come from UI and UX working together, which is how our UI UX designers approach every project.",
  },
  {
    q: "How much does UI/UX design cost?",
    a: "The cost of UI/UX design services depends on the number of screens, platforms, level of research, prototyping and design system work involved. Share your requirements and we will provide a clear estimate based on your project, with no one-size-fits-all pricing.",
  },
  {
    q: "How long does a UI/UX design project take?",
    a: "Timelines depend on scope: a focused landing page needs far less time than a multi-role dashboard or a full SaaS product. After a short discovery conversation we share a clear, milestone-based schedule for your project.",
  },
  {
    q: "Do you provide website UI/UX design?",
    a: "Yes. Our website UI/UX design services cover research, information architecture, wireframes, responsive interface design and polished layouts for corporate sites, ecommerce stores, landing pages and web applications. We can also build the design with our website development team.",
  },
  {
    q: "Do you design mobile applications?",
    a: "Yes. We provide mobile app UI UX design for Android and iOS, including user flows, wireframes, app navigation, interactive prototypes and final screens. The designs can be handed to your developers or to our mobile app development team.",
  },
  {
    q: "Do you provide dashboard design services?",
    a: "Yes. Our dashboard design services include admin, SaaS, analytics, CRM and ERP dashboards, with a focus on information hierarchy, data visualization, navigation, user management screens and reporting interfaces.",
  },
  {
    q: "What is wireframing and prototyping?",
    a: "Wireframing sketches the structure and layout of a page or screen without final colors or imagery, so teams can agree on hierarchy, navigation and functionality early. Prototyping turns those layouts into clickable simulations that let stakeholders and test users try real flows before development begins.",
  },
  {
    q: "Do you provide Figma designs?",
    a: "Yes. Figma is our primary tool for interface design, prototyping, design systems and developer handoff. We also use FigJam for planning and flows, and Adobe tools for image and vector assets where they are useful.",
  },
  {
    q: "Can you redesign an existing website or application?",
    a: "Yes. We regularly work on website redesign UI UX and app redesign projects. We start with a UX audit to understand what is and is not working, then improve navigation, layouts, visuals and flows while keeping your business goals in view.",
  },
  {
    q: "Do you provide UX audits?",
    a: "Yes. Our UX audit services review usability, navigation, user journeys, accessibility and visual consistency, then deliver clear, prioritised design recommendations you can act on.",
  },
  {
    q: "Do you create design systems?",
    a: "Yes. We develop design systems with color and typography systems, reusable UI components, design tokens, spacing guidelines and interaction patterns so your product stays consistent as it grows.",
  },
  {
    q: "Can your designs be implemented by developers?",
    a: "Yes. We prepare organized Figma files with components, specifications, assets and responsive guidelines so developers can build accurately and efficiently. If you also work with RoyalTech Innovation for development, design and engineering stay closely aligned.",
  },
  {
    q: "Do you provide responsive UI/UX design?",
    a: "Yes. Every design is planned for mobile, tablet and desktop, with readable typography, clear navigation, touch-friendly controls and accessibility considerations so the experience stays consistent on every screen.",
  },
  {
    q: "Do you design SaaS and digital products?",
    a: "Yes. Our digital product design and SaaS product design work covers discovery, product strategy, user journeys, dashboards, design systems and prototypes, so ideas become intuitive, scalable products that are ready to build.",
  },
];

export const RELATED_LINKS = [
  { href: "/services/website-development", label: "Website Development" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/software-development", label: "Custom Software Development" },
  { href: "/services/crm", label: "CRM Solutions" },
  { href: "/services/digital-marketing", label: "Digital Marketing & SEO" },
  { href: "/services/it-consulting", label: "IT Consulting" },
];

export { CONTACT } from "./mobile-app-page";
