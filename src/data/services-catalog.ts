/**
 * Catalogue data for the /services page.
 * 20 services across 3 pillars: Core (8), AI (6) and Business (6).
 */

export type Pillar = "core" | "ai" | "business";

export type Service = {
  id: string;
  pillar: Pillar;
  pillarLabel: string;
  title: string;
  /** Key into the icon map in ServicesShowcase. */
  icon: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tech: string[];
  timeline: string;
};

export const SERVICES: Service[] = [
    // --- PILLAR 1: CORE SERVICES (8) ---
    {
        id: 'web-dev',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'Web Development',
        icon: 'globe',
        shortDesc: 'High-speed, SEO-engineered web applications and enterprise portals built with modern reactive architectures.',
        fullDesc: 'We design and engineer ultra-responsive websites, progressive web apps, and enterprise customer portals that deliver sub-second load times, rock-solid security, and seamless cross-device experiences.',
        deliverables: [
            'Custom Frontend & Full-Stack Architecture',
            'Headless CMS & API Integrations',
            'Technical SEO & Core Web Vitals Optimization',
            'WCAG Accessibility & Enterprise Security'
        ],
        tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
        timeline: '4–8 Weeks'
    },
    {
        id: 'mobile-dev',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'Mobile App Development',
        icon: 'mobile-screen-button',
        shortDesc: 'Native and cross-platform iOS & Android applications crafted for intuitive engagement and offline reliability.',
        fullDesc: 'From consumer-facing mobile products to field-force enterprise apps, we build smooth, high-retention iOS and Android applications backed by scalable cloud APIs.',
        deliverables: [
            'iOS & Android Cross-Platform Development',
            'Push Notifications & Real-Time Sync',
            'Biometric Auth & Secure Payment Gateways',
            'App Store & Google Play Deployment'
        ],
        tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
        timeline: '6–12 Weeks'
    },
    {
        id: 'custom-software',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'Custom Software',
        icon: 'code',
        shortDesc: 'Bespoke software systems engineered around your proprietary business logic and operational workflows.',
        fullDesc: 'Off-the-shelf tools limit differentiation. We build tailored software platforms from the ground up that unify legacy databases, automate complex rules, and scale effortlessly.',
        deliverables: [
            'End-to-End System Architecture & Blueprint',
            'Legacy System Modernization & Migration',
            'Microservices & Event-Driven Backends',
            'Automated QA Testing & Documentation'
        ],
        tech: ['Python', 'Node.js', '.NET Core', 'Go', 'Docker', 'PostgreSQL'],
        timeline: '8–16 Weeks'
    },
    {
        id: 'ui-ux-design',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'UI/UX & Product Design',
        icon: 'pen-nib',
        shortDesc: 'Research-backed user interfaces, interactive prototypes, and cohesive design systems that convert.',
        fullDesc: 'We translate complex workflows into effortless digital experiences through user research, interactive wireframing, and modular component libraries.',
        deliverables: [
            'User Journey Mapping & UX Audits',
            'Interactive High-Fidelity Prototypes',
            'Scalable Design Systems & UI Kits',
            'Usability Testing & Conversion Optimization'
        ],
        tech: ['Figma', 'Design Tokens', 'Prototyping', 'Design Systems', 'WCAG 2.2'],
        timeline: '2–5 Weeks'
    },
    {
        id: 'erp-crm-solutions',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'ERP & CRM Solutions',
        icon: 'diagram-project',
        shortDesc: 'Unified customer and resource management integrations that eliminate data silos across departments.',
        fullDesc: 'We configure, customize, and interconnect your CRM and ERP ecosystems so sales, finance, and operations operate from a single real-time source of truth.',
        deliverables: [
            'Custom Pipeline & Workflow Configuration',
            'Bi-Directional ERP-CRM Data Sync',
            'Automated Lead Scoring & Billing Triggers',
            'Role-Based Permissions & Audit Trails'
        ],
        tech: ['Salesforce', 'HubSpot', 'Odoo', 'SAP APIs', 'REST / Webhooks'],
        timeline: '4–10 Weeks'
    },
    {
        id: 'digital-marketing',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'Digital Marketing',
        icon: 'bullhorn',
        shortDesc: 'Data-driven SEO, performance acquisition, and conversion funnels engineered for measurable pipeline ROI.',
        fullDesc: 'Combine technical search dominance with targeted paid acquisition and analytics attribution to attract qualified enterprise buyers and lower acquisition costs.',
        deliverables: [
            'Technical SEO & Content Authority Strategy',
            'High-Converting Landing Page Funnels',
            'Paid Search & Social Performance Campaigns',
            'GA4 & Multi-Touch Attribution Dashboards'
        ],
        tech: ['GA4', 'Search Console', 'HubSpot', 'Ahrefs', 'Conversion Rate Opt.'],
        timeline: 'Ongoing / Monthly'
    },
    {
        id: 'it-consulting',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'IT Consulting',
        icon: 'compass-drafting',
        shortDesc: 'Strategic technology roadmaps, security audits, and digital transformation leadership from senior architects.',
        fullDesc: 'Make confident technology investments. Our principal consultants assess your infrastructure, eliminate technical debt, and design phased modernization roadmaps.',
        deliverables: [
            'Architecture & Codebase Health Audits',
            'Cloud Cost & Performance Optimization',
            'Vendor Selection & Build-vs-Buy Analysis',
            'Cybersecurity & Compliance Readiness'
        ],
        tech: ['Enterprise Architecture', 'ISO / SOC2', 'Cloud Strategy', 'Agile Delivery'],
        timeline: '1–4 Weeks'
    },
    {
        id: 'business-automation',
        pillar: 'core',
        pillarLabel: 'Core Services',
        title: 'Business Automation',
        icon: 'gears',
        shortDesc: 'Eliminate repetitive manual processes across finance, HR, and operations with automated digital pipelines.',
        fullDesc: 'Connect your disconnected SaaS tools and internal spreadsheets into reliable, zero-touch automated workflows that save hundreds of staff hours every month.',
        deliverables: [
            'Process Bottleneck Discovery & Mapping',
            'Automated Document & Invoice Processing',
            'Cross-App API & Webhook Orchestration',
            'Real-Time Exception Monitoring & Alerts'
        ],
        tech: ['n8n', 'Make', 'Python RPA', 'Zapier Enterprise', 'Webhooks'],
        timeline: '2–6 Weeks'
    },

    // --- PILLAR 2: AI SERVICES (6) ---
    {
        id: 'ai-chatbots',
        pillar: 'ai',
        pillarLabel: 'AI Services',
        title: 'AI Chatbots & Virtual Assistants',
        icon: 'comments',
        shortDesc: '24/7 intelligent conversational assistants trained on your proprietary knowledge base to resolve queries and book leads.',
        fullDesc: 'Deploy context-aware AI assistants across your website, WhatsApp, Slack, and mobile apps that answer complex customer questions accurately using your live business data.',
        deliverables: [
            'Custom RAG Knowledge Base Ingestion',
            'Omnichannel Deployment (Web, WhatsApp, Slack)',
            'Automated Lead Capture & Calendar Booking',
            'Seamless Human-Agent Handoff Protocols'
        ],
        tech: ['OpenAI', 'Claude', 'LangChain', 'Pinecone', 'WhatsApp API'],
        timeline: '2–4 Weeks'
    },
    {
        id: 'ai-agents',
        pillar: 'ai',
        pillarLabel: 'AI Services',
        title: 'AI Agents & Workflow Automation',
        icon: 'robot',
        shortDesc: 'Autonomous multi-step AI agents capable of reasoning, researching, and executing tasks across your software stack.',
        fullDesc: 'Move beyond simple chat. We engineer goal-driven AI agents that autonomously triage tickets, enrich CRM records, generate proposals, and coordinate multi-system operations.',
        deliverables: [
            'Multi-Agent Orchestration & Tool Calling',
            'Human-in-the-Loop Approval Guardrails',
            'CRM, Email & Database Action Connectors',
            'Execution Logs & Accuracy Evaluation Suite'
        ],
        tech: ['LangGraph', 'CrewAI', 'OpenAI Assistants', 'Python', 'FastAPI'],
        timeline: '3–6 Weeks'
    },
    {
        id: 'generative-ai',
        pillar: 'ai',
        pillarLabel: 'AI Services',
        title: 'Generative AI Solutions',
        icon: 'wand-magic-sparkles',
        shortDesc: 'Enterprise LLM applications, internal knowledge copilots, and automated content engines built with strict data privacy.',
        fullDesc: 'Harness foundation models safely inside your organization. We build custom copilots for legal, marketing, engineering, and support teams with zero data leakage.',
        deliverables: [
            'Private Enterprise Knowledge Copilots',
            'Automated Report & Proposal Synthesis',
            'Prompt Engineering & Fine-Tuning Pipelines',
            'PII Redaction & Governance Guardrails'
        ],
        tech: ['GPT-4o', 'Claude 3.5', 'Llama 3', 'Vector DBs', 'Azure OpenAI'],
        timeline: '4–8 Weeks'
    },
    {
        id: 'ml-predictive',
        pillar: 'ai',
        pillarLabel: 'AI Services',
        title: 'Machine Learning & Predictive Analytics',
        icon: 'chart-line',
        shortDesc: 'Custom ML models that forecast demand, predict churn, detect fraud, and optimize pricing from historical data.',
        fullDesc: 'Turn raw historical records into forward-looking competitive advantage with custom-trained machine learning models embedded directly into your operational workflows.',
        deliverables: [
            'Demand Forecasting & Inventory Models',
            'Customer Churn & Lifetime Value Scoring',
            'Real-Time Anomaly & Fraud Detection',
            'MLOps Model Monitoring & Retraining'
        ],
        tech: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'Snowflake', 'MLflow'],
        timeline: '6–10 Weeks'
    },
    {
        id: 'ai-integration',
        pillar: 'ai',
        pillarLabel: 'AI Services',
        title: 'AI Integration & API Solutions',
        icon: 'plug-circle-bolt',
        shortDesc: 'Seamlessly embed intelligent vision, voice, and LLM capabilities into your existing applications via resilient APIs.',
        fullDesc: 'Upgrade your existing software product with AI features—without rewriting your core platform. We build low-latency AI microservices, semantic search, and voice interfaces.',
        deliverables: [
            'Low-Latency AI Microservice Gateways',
            'Semantic Search & Vector Embeddings',
            'Speech-to-Text & Document OCR Pipelines',
            'Token Cost Caching & Rate-Limit Controls'
        ],
        tech: ['FastAPI', 'Redis', 'pgvector', 'Whisper', 'AWS Bedrock'],
        timeline: '2–5 Weeks'
    },
    {
        id: 'ai-bi',
        pillar: 'ai',
        pillarLabel: 'AI Services',
        title: 'AI-Powered Business Intelligence',
        icon: 'magnifying-glass-chart',
        shortDesc: 'Conversational analytics dashboards that let executives query live SQL data in plain English and spot anomalies early.',
        fullDesc: 'Empower every decision-maker to ask natural-language questions of your company metrics and receive instant charts, root-cause narratives, and automated alerts.',
        deliverables: [
            'Natural-Language-to-SQL Query Engine',
            'Automated Executive KPI Summaries',
            'Unified Data Warehouse Modeling',
            'Proactive Revenue & Cost Anomaly Alerts'
        ],
        tech: ['BigQuery', 'Snowflake', 'dbt', 'LangChain SQL', 'PowerBI / Custom UI'],
        timeline: '4–8 Weeks'
    },

    // --- PILLAR 3: BUSINESS SOLUTIONS (6) ---
    {
        id: 'crm-dev',
        pillar: 'business',
        pillarLabel: 'Business Solutions',
        title: 'CRM Development',
        icon: 'users-gear',
        shortDesc: 'Tailor-made CRM platforms built around your exact sales methodology, partner channels, and customer lifecycle.',
        fullDesc: 'When rigid CRM licensing holds you back, we build custom relationship platforms with tailored deal pipelines, automated follow-ups, and zero per-seat bloat.',
        deliverables: [
            'Custom Deal Stages & Territory Management',
            'Automated Email, Call & WhatsApp Logging',
            'Client Self-Service Portals & Ticketing',
            'Executive Revenue Forecasting Dashboards'
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
        timeline: '6–12 Weeks'
    },
    {
        id: 'erp-dev',
        pillar: 'business',
        pillarLabel: 'Business Solutions',
        title: 'ERP Development',
        icon: 'building-shield',
        shortDesc: 'Unified enterprise resource planning software connecting inventory, procurement, finance, HR, and manufacturing.',
        fullDesc: 'Gain total operational visibility across warehouses, branches, and finance teams with a modular ERP engineered for your exact compliance and reporting workflows.',
        deliverables: [
            'Inventory, Supply Chain & Procurement Modules',
            'Automated Invoicing, Ledger & Tax Engines',
            'HR, Payroll & Shift Management Suites',
            'Multi-Branch Role-Based Access Control'
        ],
        tech: ['TypeScript', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
        timeline: '10–20 Weeks'
    },
    {
        id: 'lms-platforms',
        pillar: 'business',
        pillarLabel: 'Business Solutions',
        title: 'Learning Management Systems',
        icon: 'graduation-cap',
        shortDesc: 'Interactive, scalable e-learning platforms for corporate training, academies, and certification programs.',
        fullDesc: 'Deliver engaging video courses, live cohorts, AI-graded assessments, and verifiable digital certificates on a branded, mobile-ready learning platform.',
        deliverables: [
            'Course Builder, Video Streaming & Quizzes',
            'Cohort Scheduling & Live Class Integrations',
            'Automated Certificates & Progress Analytics',
            'Multi-Tenant Enterprise Academy Portals'
        ],
        tech: ['Next.js', 'Video CDN', 'SCORM / xAPI', 'Stripe', 'PostgreSQL'],
        timeline: '6–10 Weeks'
    },
    {
        id: 'ecommerce-mgmt',
        pillar: 'business',
        pillarLabel: 'Business Solutions',
        title: 'E-commerce Management',
        icon: 'cart-shopping',
        shortDesc: 'High-converting headless storefronts, omnichannel inventory sync, and automated fulfillment architectures.',
        fullDesc: 'Maximize average order value and checkout speed with custom e-commerce ecosystems integrated with your ERP, logistics carriers, and global payment gateways.',
        deliverables: [
            'Custom Headless Storefronts & One-Click Checkout',
            'Multi-Warehouse Inventory & Order Sync',
            'AI Product Recommendations & Smart Search',
            'Subscription Billing & Loyalty Engines'
        ],
        tech: ['Shopify Plus', 'Next.js Commerce', 'Stripe', 'Algolia', 'ERP APIs'],
        timeline: '4–9 Weeks'
    },
    {
        id: 'saas-platforms',
        pillar: 'business',
        pillarLabel: 'Business Solutions',
        title: 'SaaS Platforms',
        icon: 'cubes',
        shortDesc: 'Multi-tenant, cloud-native SaaS products engineered from MVP to enterprise scale with usage-based billing.',
        fullDesc: 'Launch and scale your SaaS product with battle-tested multi-tenancy, SSO authentication, tiered subscription billing, and public developer APIs.',
        deliverables: [
            'Isolated Multi-Tenant Database Architecture',
            'Stripe Metered & Tiered Subscription Billing',
            'Enterprise SSO (SAML / OAuth) & Team RBAC',
            'Admin Analytics & Tenant Health Console'
        ],
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Billing', 'AWS'],
        timeline: '8–14 Weeks'
    },
    {
        id: 'cloud-devops',
        pillar: 'business',
        pillarLabel: 'Business Solutions',
        title: 'Cloud & DevOps',
        icon: 'cloud-arrow-up',
        shortDesc: 'Automated CI/CD pipelines, Kubernetes orchestration, cloud migration, and 24/7 infrastructure hardening.',
        fullDesc: 'Ship code faster with zero-downtime deployments, auto-scaling cloud clusters, infrastructure-as-code, and continuous security observability.',
        deliverables: [
            'AWS / GCP / Azure Cloud Architecture & Migration',
            'Zero-Downtime CI/CD Deployment Pipelines',
            'Kubernetes & Docker Container Orchestration',
            '24/7 Uptime Monitoring & Automated Backups'
        ],
        tech: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
        timeline: '2–6 Weeks'
    }
];

export type TechTab = "frontend" | "backend" | "ai";

export type TechItem = {
  name: string;
  role: string;
  icon: string;
  color: string;
};

export const TECH_ECOSYSTEM: Record<TechTab, TechItem[]> = {
    frontend: [
        { name: 'React 19', role: 'Component UI Architecture', icon: 'react', color: 'tw:text-cyanGlow' },
        { name: 'Next.js', role: 'SSR & Edge Web Apps', icon: 'bolt', color: 'tw:text-white' },
        { name: 'TypeScript', role: 'Type-Safe Engineering', icon: 'code', color: 'tw:text-cyan-300' },
        { name: 'React Native', role: 'Cross-Platform Mobile', icon: 'mobile-screen', color: 'tw:text-cyanGlow' },
        { name: 'Flutter', role: 'High-FPS iOS & Android', icon: 'layer-group', color: 'tw:text-cyan-300' },
        { name: 'Tailwind CSS', role: 'Scalable Design Systems', icon: 'palette', color: 'tw:text-cyan-300' }
    ],
    backend: [
        { name: 'Node.js', role: 'Event-Driven Microservices', icon: 'node-js', color: 'tw:text-cyan-300' },
        { name: 'Python / FastAPI', role: 'High-Speed API & AI Backends', icon: 'python', color: 'tw:text-warmGold' },
        { name: 'AWS Cloud', role: 'Enterprise Infrastructure', icon: 'aws', color: 'tw:text-cyan-300' },
        { name: 'Microsoft Azure', role: 'Hybrid Enterprise Cloud', icon: 'microsoft', color: 'tw:text-cyan-300' },
        { name: 'Docker & K8s', role: 'Auto-Scaling Containers', icon: 'docker', color: 'tw:text-cyanGlow' },
        { name: 'PostgreSQL', role: 'Relational & Vector Storage', icon: 'database', color: 'tw:text-cyan-300' }
    ],
    ai: [
        { name: 'OpenAI GPT-4o', role: 'Reasoning & Multimodal LLMs', icon: 'brain', color: 'tw:text-cyanGlow' },
        { name: 'Anthropic Claude', role: 'Enterprise Context & Agents', icon: 'robot', color: 'tw:text-warmGold' },
        { name: 'LangChain / Graph', role: 'Multi-Agent Orchestration', icon: 'diagram-project', color: 'tw:text-cyan-300' },
        { name: 'PyTorch', role: 'Custom Deep Learning Models', icon: 'fire', color: 'tw:text-cyan-300' },
        { name: 'Pinecone & pgvector', role: 'Semantic RAG Knowledge', icon: 'magnifying-glass-chart', color: 'tw:text-cyanGlow' },
        { name: 'Snowflake & dbt', role: 'Predictive BI Pipelines', icon: 'snowflake', color: 'tw:text-cyan-300' }
  ]
};

export const FAQ_ITEMS: { q: string; a: string }[] = [
    {
        q: 'How long does it typically take to build a custom software platform or AI solution?',
        a: 'Focused AI chatbots, workflow automations, and UI/UX prototypes typically launch within 2 to 5 weeks. Full-scale web/mobile applications, custom CRMs, and multi-tenant SaaS platforms generally take 6 to 14 weeks depending on integration complexity, with working sprint demos delivered every two weeks.'
    },
    {
        q: 'Is our company data kept private when you build Generative AI or RAG solutions?',
        a: 'Absolutely. We deploy zero-data-retention enterprise API endpoints (such as Azure OpenAI, AWS Bedrock, or private VPC-hosted models) with strict role-based access controls and PII redaction—ensuring your proprietary documents are never stored or used to train public foundation models.'
    },
    {
        q: 'Do we receive 100% ownership of the source code and custom AI models?',
        a: 'Yes. Upon project completion and milestone sign-off, you receive full intellectual property rights, clean Git repositories, infrastructure-as-code scripts, technical documentation, and trained model weights with zero vendor lock-in.'
    },
    {
        q: 'Can RoyalTech integrate AI agents and new software into our existing legacy ERP or CRM?',
        a: 'Yes—system interoperability is one of our core strengths. We build secure REST/GraphQL middleware, webhook listeners, and custom connectors for Salesforce, HubSpot, SAP, Odoo, Shopify, and legacy SQL databases without disrupting your daily operations.'
    },
    {
        q: 'How can we validate an idea before committing to a full enterprise build?',
        a: 'We offer a rapid 2-to-3 week Discovery & Proof-of-Concept (PoC) sprint. During this phase, our architects deliver interactive UI/UX prototypes, a working AI or technical feasibility demo, and a fixed-milestone roadmap so you can validate ROI with stakeholders first.'
    },
    {
        q: 'What post-launch support, cloud monitoring, and maintenance do you provide?',
        a: 'Every launch includes a complimentary 30-day hypercare warranty. Beyond launch, our Cloud & DevOps and AI Retainer plans provide 24/7 uptime monitoring, automated security patching, LLM accuracy tuning, and guaranteed SLA response times.'
    }
];
