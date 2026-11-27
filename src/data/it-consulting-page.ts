/**
 * Content and SEO data for /services/it-consulting.
 * Kept as plain data so the page (server) builds metadata + JSON-LD from the same source that the
 * visible sections render, which keeps the structured data honest.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/it-consulting";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "IT Consulting Company | Technology & Digital Transformation – RoyalTech";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation offers IT consulting, technology strategy, digital transformation, infrastructure consulting, and business process optimization services.";

export const SEO_KEYWORDS = [
  "IT consulting company",
  "IT consulting services",
  "IT consultant",
  "technology consulting company",
  "technology consulting services",
  "IT strategy consulting",
  "digital transformation consulting",
  "IT infrastructure consulting",
  "business technology consulting",
  "business process optimization services",
  "technology advisory services",
  "IT planning services",
  "technology roadmap",
  "IT assessment",
  "IT consulting company in Mohali",
  "IT consulting services in Mohali",
  "IT consulting company in Chandigarh",
  "technology consulting company in Mohali",
  "digital transformation consulting in Chandigarh",
  "IT infrastructure consulting in Mohali",
  "business technology consulting in Chandigarh",
  "IT consultant in Mohali",
  "technology consulting services in Punjab",
  "RoyalTech Innovation",
];

/** Recommended on-page H1 from the SEO brief; also used as the WebPage headline in the schema. */
export const SEO_H1 = "IT Consulting Services for Smarter Business Growth";

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
  address: "Gate No. 5, Imperial Tower, CP 67, Mohali, Punjab 160062",
};

/* ------------------------------------------------------------------ */
/* Hero + intro                                                        */
/* ------------------------------------------------------------------ */

export const EXPERTISE = [
  "IT Strategy & Planning",
  "Digital Transformation",
  "Technology Consulting",
  "IT Infrastructure",
  "Business Process Optimization",
];

export const HERO_NOTES = ["Business-first recommendations", "Startups, SMEs & growing enterprises", "Based in Mohali, Punjab"];

export const INTRO_POINTS = [
  { title: "Business understanding", text: "We start with your goals, operations and constraints, not with a product." },
  { title: "Technical expertise", text: "Architecture, infrastructure and software judgement from hands-on delivery." },
  { title: "Operational improvement", text: "Practical plans that simplify how your teams work every day." },
];

/* ------------------------------------------------------------------ */
/* Five service categories                                             */
/* ------------------------------------------------------------------ */

export type ConsultingService = {
  id: string;
  num: string;
  short: string;
  blurb: string;
  title: string;
  description: string[];
  items: string[];
  cta: string;
  ctaService: string;
};

export const SERVICES: ConsultingService[] = [
  {
    id: "it-strategy-planning",
    num: "01",
    short: "IT Strategy & Planning",
    blurb: "A technology roadmap aligned with your objectives, budget and growth plans.",
    title: "IT Strategy & Planning",
    description: [
      "Build a technology roadmap aligned with your business objectives, growth plans, operational requirements, and long-term vision.",
      "We help businesses assess their existing technology, identify priorities, evaluate opportunities, and develop strategic IT plans that support sustainable business growth.",
    ],
    items: [
      "IT Strategy Development",
      "Technology Roadmap Planning",
      "IT Assessment",
      "Technology Gap Analysis",
      "Business Technology Alignment",
      "IT Budget Planning",
      "Technology Investment Planning",
      "Software Selection Guidance",
      "IT Modernization Planning",
      "Digital Strategy",
      "Risk Assessment",
      "Technology Prioritization",
    ],
    cta: "Plan Your IT Strategy",
    ctaService: "IT Strategy & Planning",
  },
  {
    id: "digital-transformation-consulting",
    num: "02",
    short: "Digital Transformation",
    blurb: "Modernize operations with connected systems, automation and smarter workflows.",
    title: "Digital Transformation Consulting",
    description: [
      "Transform traditional business operations through modern digital technologies, connected systems, automation, and smarter workflows.",
      "We help businesses identify digital transformation opportunities, modernize processes, improve operational efficiency, and create more connected digital experiences.",
    ],
    items: [
      "Digital Transformation Strategy",
      "Business Digitalization",
      "Legacy System Modernization",
      "Workflow Digitization",
      "Business Automation Planning",
      "Cloud Adoption Strategy",
      "Digital Process Improvement",
      "Technology Integration",
      "Digital Operations",
      "Modernization Roadmaps",
      "Digital Transformation Assessment",
      "Scalable Digital Solutions",
    ],
    cta: "Transform Your Business",
    ctaService: "Digital Transformation Consulting",
  },
  {
    id: "technology-consulting",
    num: "03",
    short: "Technology Consulting",
    blurb: "Expert guidance to evaluate, select and architect the right technology.",
    title: "Technology Consulting for Smarter Decisions",
    description: [
      "Make informed technology decisions with expert guidance tailored to your business requirements.",
      "We help organizations evaluate technologies, identify suitable solutions, plan implementation, improve technical architecture, and align technology investments with business needs.",
    ],
    items: [
      "Technology Assessment",
      "Software Consulting",
      "Solution Architecture",
      "Technology Selection",
      "Application Consulting",
      "Software Integration Planning",
      "Technical Feasibility",
      "System Modernization",
      "Technology Evaluation",
      "Cloud Consulting",
      "Application Architecture",
      "IT Decision Support",
    ],
    cta: "Get Technology Guidance",
    ctaService: "Technology Consulting",
  },
  {
    id: "it-infrastructure-consulting",
    num: "04",
    short: "IT Infrastructure Consulting",
    blurb: "Reliable, secure and scalable infrastructure planned around your operations.",
    title: "IT Infrastructure Consulting",
    description: [
      "Build a reliable, secure, scalable, and efficient technology infrastructure that supports your business operations.",
      "We help businesses evaluate their infrastructure, plan modernization, improve system architecture, and identify suitable infrastructure solutions for their operational and growth requirements.",
    ],
    items: [
      "IT Infrastructure Assessment",
      "Infrastructure Planning",
      "Cloud Infrastructure Consulting",
      "Network Architecture Planning",
      "Server Infrastructure",
      "Infrastructure Modernization",
      "Cloud Migration Planning",
      "IT Security Planning",
      "Infrastructure Scalability",
      "Backup & Recovery Planning",
      "Infrastructure Optimization",
      "IT Infrastructure Strategy",
    ],
    cta: "Plan Your Infrastructure",
    ctaService: "IT Infrastructure Consulting",
  },
  {
    id: "business-process-optimization",
    num: "05",
    short: "Business Process Optimization",
    blurb: "Find bottlenecks, simplify workflows and connect the systems behind them.",
    title: "Business Process Optimization",
    description: [
      "Improve how your business operates by identifying inefficiencies, simplifying workflows, reducing unnecessary complexity, and implementing smarter technology-driven processes.",
      "We help businesses analyze their operational workflows, identify bottlenecks, and explore opportunities to improve productivity, consistency, and efficiency.",
    ],
    items: [
      "Business Process Analysis",
      "Workflow Optimization",
      "Process Mapping",
      "Operational Assessment",
      "Business Automation",
      "Workflow Digitization",
      "Bottleneck Identification",
      "Process Improvement",
      "System Integration",
      "Productivity Optimization",
      "Operational Efficiency",
      "Business Process Modernization",
    ],
    cta: "Optimize Your Business Processes",
    ctaService: "Business Process Optimization",
  },
];

/* ------------------------------------------------------------------ */
/* Capabilities (14), grouped into six connected business areas        */
/* ------------------------------------------------------------------ */

export const CAPABILITY_DOMAINS = [
  { id: "strategy", label: "Business Strategy", items: ["IT Strategy", "Technology Roadmaps", "IT Project Planning"] },
  { id: "technology", label: "Technology", items: ["Technology Assessment", "Technical Advisory", "Architecture Planning"] },
  { id: "infrastructure", label: "Infrastructure", items: ["IT Infrastructure Planning", "Cloud Consulting"] },
  { id: "software", label: "Software", items: ["Software Consulting", "Digital Modernization"] },
  { id: "automation", label: "Automation", items: ["Business Automation", "System Integration"] },
  { id: "operations", label: "Operations", items: ["Process Optimization", "Digital Transformation"] },
];

/* ------------------------------------------------------------------ */
/* Consulting approach (6)                                             */
/* ------------------------------------------------------------------ */

export const APPROACH = [
  {
    title: "Business Understanding",
    text: "Understand your business model, goals, challenges, operations, users, and future plans.",
    tags: ["Goals", "Operations", "Users"],
  },
  {
    title: "Technology Assessment",
    text: "Evaluate existing software, infrastructure, systems, processes, and technology limitations.",
    tags: ["Software", "Infrastructure", "Limits"],
  },
  {
    title: "Opportunity Identification",
    text: "Identify inefficiencies, modernization opportunities, technology gaps, and potential improvements.",
    tags: ["Gaps", "Inefficiencies", "Options"],
  },
  {
    title: "Strategic Planning",
    text: "Develop a roadmap of recommended solutions, priorities, implementation stages, and technology direction.",
    tags: ["Roadmap", "Priorities", "Stages"],
  },
  {
    title: "Solution Recommendations",
    text: "Recommend appropriate technologies, platforms, architectures, integrations, and improvement strategies.",
    tags: ["Platforms", "Architecture", "Integrations"],
  },
  {
    title: "Implementation Planning",
    text: "Define practical next steps, project requirements, technical considerations, and implementation priorities.",
    tags: ["Next steps", "Requirements", "Priorities"],
  },
];

/* ------------------------------------------------------------------ */
/* Digital transformation strategy                                     */
/* ------------------------------------------------------------------ */

export const DT_ITEMS = [
  "Digital Transformation Assessment",
  "Business Digitization",
  "Legacy System Modernization",
  "Workflow Automation",
  "Digital Platform Planning",
  "Cloud Adoption",
  "Data-Driven Operations",
  "Technology Integration",
  "Digital Experience Improvement",
  "Transformation Roadmaps",
];

export const DT_STAGES = [
  { title: "Traditional Operations", text: "Paper trails, spreadsheets and disconnected tools.", points: ["Manual hand-offs", "Siloed data", "Legacy software"] },
  { title: "Modern Technology", text: "Right-sized platforms replace ageing tools.", points: ["Cloud platforms", "Modern applications", "Secure access"] },
  { title: "Connected Systems", text: "Systems share data and trigger each other.", points: ["Integrations", "Workflow automation", "Single source of truth"] },
  { title: "Digital Business", text: "Decisions guided by timely, joined-up information.", points: ["Live dashboards", "Digital customer journeys", "Scalable operations"] },
];

/* ------------------------------------------------------------------ */
/* Roadmap & planning                                                  */
/* ------------------------------------------------------------------ */

export const ROADMAP_ITEMS = [
  "Technology Roadmap",
  "IT Prioritization",
  "Technology Investment Planning",
  "Software Planning",
  "Infrastructure Planning",
  "Digital Initiative Planning",
  "Technology Risk Assessment",
  "Modernization Strategy",
  "IT Budget Considerations",
  "Implementation Planning",
];

export const ROADMAP_PHASES = [
  {
    id: "current",
    label: "Current state",
    caption: "Where you are",
    items: ["Systems inventory", "Process review", "Known pain points"],
  },
  {
    id: "short",
    label: "Short-term priorities",
    caption: "Quick, low-risk wins",
    items: ["Fix critical gaps", "Prioritize initiatives", "Select tools"],
  },
  {
    id: "mid",
    label: "Mid-term initiatives",
    caption: "Planned modernization",
    items: ["Integrate systems", "Migrate workloads", "Automate workflows"],
  },
  {
    id: "long",
    label: "Long-term vision",
    caption: "Scalable foundation",
    items: ["Scalable architecture", "Data-driven operations", "Continuous review"],
  },
];

/* ------------------------------------------------------------------ */
/* Infrastructure & architecture                                       */
/* ------------------------------------------------------------------ */

export const INFRA_ITEMS = [
  "Infrastructure Assessment",
  "Cloud Architecture Planning",
  "Network Architecture",
  "Server Planning",
  "System Architecture",
  "Infrastructure Scalability",
  "Application Architecture",
  "Infrastructure Modernization",
  "Cloud Migration Planning",
  "Technology Integration",
  "Security Considerations",
  "Infrastructure Optimization",
];

/* ------------------------------------------------------------------ */
/* Business process & operational optimization                         */
/* ------------------------------------------------------------------ */

export const BPO_ITEMS = [
  "Process Analysis",
  "Workflow Mapping",
  "Process Optimization",
  "Operational Assessment",
  "Automation Opportunities",
  "System Integration",
  "Workflow Digitization",
  "Bottleneck Analysis",
  "Business Efficiency",
  "Process Standardization",
  "Operational Modernization",
];

export const BPO_BEFORE = ["Disconnected systems", "Manual tasks", "Multiple workflows", "Process bottlenecks"];
export const BPO_AFTER = ["Connected systems", "Optimized workflows", "Digital processes", "Better visibility"];

/* ------------------------------------------------------------------ */
/* Technology ecosystem & solution planning                            */
/* ------------------------------------------------------------------ */

export const ECOSYSTEM_ITEMS = [
  "Software Selection",
  "Technology Evaluation",
  "Platform Consulting",
  "System Integration",
  "Cloud Solutions",
  "Application Architecture",
  "Enterprise Software Planning",
  "Custom Software Advisory",
  "CRM & ERP Consulting",
  "Business Technology Solutions",
  "Technical Feasibility",
  "Technology Recommendations",
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export type Industry = {
  id: string;
  name: string;
  challenge: string;
  opportunity: string;
  flow: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "startups",
    name: "Startups & Emerging Businesses",
    challenge: "Limited budgets, fast-changing requirements and the risk of choosing tools that will not scale.",
    opportunity: "Right-size the first technology stack, plan an MVP path and set a foundation that can grow with the business.",
    flow: ["Idea", "MVP scope", "Stack choice", "Scale plan"],
  },
  {
    id: "it-technology",
    name: "IT & Technology Companies",
    challenge: "Growing product portfolios, technical debt and inconsistent delivery or tooling practices.",
    opportunity: "Review architecture, modernize legacy components and align engineering tooling with delivery goals.",
    flow: ["Architecture review", "Tech debt", "Tooling", "Delivery plan"],
  },
  {
    id: "ecommerce",
    name: "Ecommerce & Retail",
    challenge: "Disconnected storefronts, inventory, payment and fulfilment systems that slow operations.",
    opportunity: "Plan integrations between commerce platforms, ERP and logistics so orders and stock stay in sync.",
    flow: ["Catalog", "Orders", "Inventory", "Fulfilment"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    challenge: "Paper-based shop-floor records, siloed production data and limited visibility across plants.",
    opportunity: "Map production workflows, plan ERP and reporting improvements, and digitize manual records.",
    flow: ["Procurement", "Production", "Quality", "Dispatch"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    challenge: "Sensitive data, scheduling complexity and systems that do not share information.",
    opportunity: "Plan secure, well-structured systems for appointments, records and reporting with privacy in mind.",
    flow: ["Booking", "Records", "Billing", "Reporting"],
  },
  {
    id: "education",
    name: "Education",
    challenge: "Admissions, fees, learning and communication handled across separate tools.",
    opportunity: "Consolidate admissions, learning and administration into a coherent digital platform roadmap.",
    flow: ["Admissions", "Learning", "Fees", "Communication"],
  },
  {
    id: "finance",
    name: "Finance",
    challenge: "Compliance obligations, legacy platforms and a high bar for security and auditability.",
    opportunity: "Assess risk, plan secure infrastructure and modernize reporting and customer-facing workflows.",
    flow: ["Onboarding", "Processing", "Compliance", "Reporting"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    challenge: "Leads, listings, site visits and documents tracked across spreadsheets and chat.",
    opportunity: "Plan CRM, listing and document workflows that give sales teams a single view of every opportunity.",
    flow: ["Leads", "Site visits", "Deals", "Documents"],
  },
  {
    id: "logistics",
    name: "Logistics",
    challenge: "Limited shipment visibility, manual dispatching and fragmented partner systems.",
    opportunity: "Map the dispatch-to-delivery flow and plan integrations and tracking that improve visibility.",
    flow: ["Order", "Dispatch", "Tracking", "Delivery"],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    challenge: "Bookings, front-desk, inventory and guest feedback spread across multiple tools.",
    opportunity: "Plan connected reservation, operations and guest-experience systems for smoother service.",
    flow: ["Booking", "Check-in", "Services", "Feedback"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    challenge: "Time tracking, project delivery and client communication handled by hand.",
    opportunity: "Streamline project, billing and client-collaboration workflows with the right tooling.",
    flow: ["Enquiry", "Project", "Delivery", "Billing"],
  },
  {
    id: "smes-enterprises",
    name: "SMEs & Enterprises",
    challenge: "Growth has outpaced systems, leaving duplicate data, manual reporting and rising IT complexity.",
    opportunity: "Create an IT roadmap, consolidate systems and plan infrastructure that supports the next stage of growth.",
    flow: ["Assess", "Prioritize", "Modernize", "Govern"],
  },
];

/* ------------------------------------------------------------------ */
/* Why RoyalTech (8)                                                   */
/* ------------------------------------------------------------------ */

export const WHY = [
  { title: "Business-Aligned Technology", text: "We align technology recommendations with your business goals, operational requirements, and growth plans." },
  { title: "Practical Solutions", text: "We focus on realistic, actionable technology recommendations rather than unnecessary complexity." },
  { title: "Strategic Thinking", text: "We help businesses evaluate their current technology and plan future initiatives." },
  { title: "Technology Expertise", text: "We combine technical knowledge with business understanding and digital experience." },
  { title: "Scalable Planning", text: "We help businesses consider future growth, infrastructure, systems, and technology requirements." },
  { title: "Process Improvement", text: "We identify opportunities to simplify workflows and improve operational efficiency." },
  { title: "Collaborative Consulting", text: "We work closely with stakeholders to understand challenges and develop suitable recommendations." },
  { title: "Long-Term Perspective", text: "We consider sustainability, scalability, maintainability, and future technology needs." },
];

/* ------------------------------------------------------------------ */
/* Consulting process (7)                                              */
/* ------------------------------------------------------------------ */

export const PROCESS = [
  { num: "01", title: "Discovery & Consultation", text: "Understand your business goals, challenges, operational needs, and technology requirements." },
  { num: "02", title: "Assessment & Analysis", text: "Evaluate existing systems, infrastructure, processes, technology, and potential limitations." },
  { num: "03", title: "Opportunity Identification", text: "Identify technology gaps, inefficiencies, modernization opportunities, and strategic priorities." },
  { num: "04", title: "Strategy & Roadmap", text: "Develop recommendations, technology roadmaps, priorities, and strategic plans." },
  { num: "05", title: "Solution Planning", text: "Define suitable technology solutions, architecture, integrations, implementation considerations, and next steps." },
  { num: "06", title: "Implementation Guidance", text: "Support planning, technical coordination, solution implementation, and technology adoption where required." },
  { num: "07", title: "Review & Optimization", text: "Evaluate progress, identify improvements, and refine technology strategies as business needs evolve." },
];

/* ------------------------------------------------------------------ */
/* Business technology assessment                                      */
/* ------------------------------------------------------------------ */

export const ASSESSMENT_AREAS = [
  { title: "IT Assessment", text: "A structured view of your current technology environment.", group: "Foundation" },
  { title: "Infrastructure Review", text: "Hosting, network, devices, backup and access.", group: "Foundation" },
  { title: "Software Evaluation", text: "Fit, overlap and gaps across the applications you run.", group: "Applications" },
  { title: "System Integration Review", text: "How systems share data, and where they do not.", group: "Applications" },
  { title: "Workflow Assessment", text: "How work actually moves between people and systems.", group: "Operations" },
  { title: "Operational Analysis", text: "Where effort, delay and rework build up.", group: "Operations" },
  { title: "Technology Gap Analysis", text: "Capabilities the business needs but does not yet have.", group: "Direction" },
  { title: "Technology Risk Considerations", text: "Security, continuity and dependency exposure.", group: "Direction" },
  { title: "Modernization Opportunities", text: "Where upgrades or replacement make sense.", group: "Direction" },
  { title: "Strategic Recommendations", text: "A prioritized, practical set of next steps.", group: "Direction" },
];

/* ------------------------------------------------------------------ */
/* FAQs (16): all rendered visibly and mirrored in FAQPage schema      */
/* ------------------------------------------------------------------ */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is IT consulting?",
    a: "IT consulting is expert advice on how technology can support your business. A consultant reviews your goals, systems, infrastructure and processes, then recommends practical improvements, technology choices and a plan for putting them in place. At RoyalTech Innovation, our IT consulting services focus on helping you make confident technology decisions before you commit budget.",
  },
  {
    q: "What IT consulting services do you provide?",
    a: "We provide IT strategy and planning, digital transformation consulting, technology consulting, IT infrastructure consulting and business process optimization. Within these we cover technology assessments, roadmaps, software selection guidance, cloud consulting, system integration planning, workflow optimization and technical advisory.",
  },
  {
    q: "How can IT consulting help my business?",
    a: "IT consulting can bring clarity to technology decisions, highlight gaps and inefficiencies, help you prioritize investments, and give your team a realistic roadmap. The benefit depends on your starting point and what you implement, so we focus on practical recommendations rather than promising specific outcomes.",
  },
  {
    q: "What is digital transformation consulting?",
    a: "Digital transformation consulting helps a business improve how it operates using modern technology, such as moving to cloud platforms, connecting systems, automating manual workflows and making better use of data. We assess where you are today and build a transformation roadmap that fits your priorities and capacity for change.",
  },
  {
    q: "What is the difference between IT consulting and technology consulting?",
    a: "The terms overlap. IT consulting usually covers the day-to-day technology environment, such as infrastructure, systems, security and IT planning. Technology consulting leans towards choosing and designing solutions, such as software, platforms and architecture. We offer both as a business technology consulting service so you get joined-up advice.",
  },
  {
    q: "Do you provide IT strategy and planning?",
    a: "Yes. Our IT strategy consulting covers technology assessments, gap analysis, budget and investment planning, prioritization and a roadmap that connects your technology to business objectives. It is designed to give leadership a clear, practical plan to work from.",
  },
  {
    q: "Do you help businesses choose software and technology?",
    a: "Yes. We evaluate options against your actual requirements, budget, integrations and growth plans, then recommend suitable platforms, whether that is off-the-shelf software, a CRM or ERP, or a custom solution. Our goal is a recommendation you can justify, not the most complex option.",
  },
  {
    q: "Do you provide IT infrastructure consulting?",
    a: "Yes. Our IT infrastructure consulting covers infrastructure assessment, cloud and network architecture planning, server planning, cloud migration planning, security planning, and backup and recovery planning. If you are looking for IT infrastructure consulting in Mohali or the wider Chandigarh region, our team is based locally.",
  },
  {
    q: "Can IT consulting help improve business processes?",
    a: "Often, yes. By mapping your workflows we can identify bottlenecks, duplicated effort and manual steps, then recommend process improvements, integrations or automation where they make sense. Not every problem needs software, so we also recommend simplifying a process before digitizing it.",
  },
  {
    q: "Do you provide digital transformation services?",
    a: "Yes. Our digital transformation services range from assessment and roadmap planning to implementation guidance, supported by our website, software, mobile app, CRM and automation teams where you need delivery as well as advice.",
  },
  {
    q: "How much do IT consulting services cost?",
    a: "Cost depends on scope, depth and duration, so we do not publish a fixed price. A short assessment costs less than an ongoing advisory engagement or a wider transformation programme. After an initial conversation about your needs we provide a clear proposal so you know what is included before you start.",
  },
  {
    q: "How long does an IT consulting project take?",
    a: "A focused assessment or roadmap can take a few weeks, while larger transformation or infrastructure planning engagements take longer. Timelines depend on the size of your organization, the number of systems involved and how quickly information and stakeholders are available. We agree on an expected timeline up front.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. We work with startups, SMEs and growing enterprises. For smaller businesses we keep recommendations proportionate, focusing on the technology that supports your current stage and leaves room to grow, instead of enterprise-scale complexity you do not need.",
  },
  {
    q: "Can you help modernize existing systems?",
    a: "Yes. We review legacy applications, infrastructure and integrations, then recommend whether to upgrade, re-platform, integrate or replace. We plan modernization in stages to limit disruption to day-to-day operations.",
  },
  {
    q: "Do you provide technology roadmaps?",
    a: "Yes. A technology roadmap is a core deliverable. It sets out your current state and priorities for the short, mid and long term, with the dependencies, risks and budget considerations that affect each initiative, so you can plan investments in a sensible order.",
  },
  {
    q: "How do I know which IT consulting services my business needs?",
    a: "Start with the problem you are trying to solve. If you are unsure which technology to adopt, technology consulting fits. If systems are outdated or disconnected, digital transformation or infrastructure consulting may help. If work is slow or manual, process optimization is a good starting point. A short discovery call with our IT consultants will help you decide.",
  },
];

/* ------------------------------------------------------------------ */
/* Related internal links                                              */
/* ------------------------------------------------------------------ */

export const RELATED_LINKS = [
  { href: "/services/website-development", label: "Website Development" },
  { href: "/services/software-development", label: "Custom Software Development" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services#erp-dev", label: "ERP Solutions" },
  { href: "/services/crm", label: "CRM Solutions" },
  { href: "/services#business-automation", label: "Business Automation" },
  { href: "/services/ui-ux-design", label: "UI/UX Design" },
  { href: "/services/digital-marketing", label: "Digital Marketing & SEO" },
  { href: "/services#cloud-devops", label: "Cloud & Technology Services" },
];
