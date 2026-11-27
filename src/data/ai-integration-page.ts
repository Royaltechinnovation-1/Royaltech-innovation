/**
 * Content and SEO data for /services/ai-integration-api-solutions.
 * Copy follows the approved landing page brief. Interface samples are illustrative.
 * Cost and timeline answers stay qualitative because they depend on scope.
 * A provider or system is named as something we can connect when the project uses its API.
 * This page does not claim an official partnership with any AI provider.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/ai-integration-api-solutions";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "AI Integration Services & API Development Company | RoyalTech";
export const SEO_H1 = "AI Integration & API Solutions for Connected Digital Systems";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation provides AI integration services, OpenAI and Gemini integration, custom AI APIs, third-party AI integration, and AI application development.";
export const SEO_KEYWORDS = [
  "AI Integration Services",
  "AI Integration Company",
  "AI Integration Solutions",
  "AI Integration Development",
  "AI API Integration Services",
  "AI Model Integration",
  "OpenAI Integration Services",
  "Gemini Integration Services",
  "Custom AI API Development",
  "AI Application Integration",
  "Third-Party AI Integration",
  "AI Software Integration",
  "AI API Development",
  "AI Integration Company in Mohali",
  "AI Integration Services in Chandigarh",
  "AI Application Integration Company in Punjab",
  "Custom AI API Development in Mohali",
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
};

export const HERO_PILLARS = [
  "AI Model Integration",
  "OpenAI & Gemini Integration",
  "Custom AI APIs",
  "Third-Party AI Integration",
  "AI Application Integration",
];

export const HERO_LEAD =
  "Connect AI with your business and build smarter digital systems. We integrate AI models, APIs, applications, and intelligent technologies into websites, software platforms, and business systems to help organizations build connected, AI-powered digital experiences.";

export const INTRO_PARAGRAPHS = [
  "Businesses are increasingly adopting AI technologies to improve software functionality, automate information processing, enhance digital experiences, and introduce intelligent capabilities into existing systems.",
  "At RoyalTech Innovation, we develop AI integration solutions that connect AI models, APIs, applications, databases, and business software based on your technical environment and business requirements.",
  "From integrating AI models and connecting OpenAI or Gemini APIs to building custom AI APIs and integrating AI into existing applications, we help businesses implement connected and intelligent digital solutions.",
];

export const INTRO_NOTE =
  "AI integration connects a model or an API to software you already run. It is separate from an AI agent that carries out a defined task, and separate from a product whose main job is to generate content. Those are different services when that is what the project needs.";

/** Only routes that exist as dedicated pages. */
export const RELATED_LINKS = [
  { href: "/services/ai-chatbots-virtual-assistants", label: "AI chatbots and virtual assistants" },
  { href: "/services/ai-agents-workflow-automation", label: "AI agents and workflow automation" },
  { href: "/services/generative-ai-solutions", label: "generative AI solutions" },
  { href: "/services/custom-software-development", label: "custom software development" },
  { href: "/services/website-development", label: "website development" },
  { href: "/services/mobile-app-development", label: "mobile app development" },
  { href: "/services/it-consulting", label: "IT consulting" },
  { href: "/services/crm", label: "CRM solutions" },
];

export type IntegrationService = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items: string[];
  cta: string;
  service: string;
  tone: "light" | "dark";
  visualFirst: boolean;
};

export const SERVICES: IntegrationService[] = [
  {
    id: "ai-model-integration",
    number: "01",
    eyebrow: "AI Model Integration",
    title: "Integrate Powerful AI Models Into Your Applications",
    paragraphs: [
      "AI model integration enables businesses to introduce intelligent capabilities into websites, software platforms, business tools, and digital products.",
      "We help integrate suitable AI models into applications based on project requirements, technical architecture, use cases, data workflows, and desired functionality.",
    ],
    items: [
      "AI Model Integration Services",
      "Large Language Model Integration",
      "Generative AI Model Integration",
      "AI API Integration",
      "AI Model Implementation",
      "AI Application Integration",
      "AI-Powered Software Integration",
      "AI Model Connectivity",
      "AI Model Configuration",
      "AI Model Deployment Support",
      "AI Integration Development",
      "Custom AI Integration Solutions",
    ],
    cta: "Integrate AI Into Your Application",
    service: "AI Model Integration",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "openai-gemini-integration",
    number: "02",
    eyebrow: "OpenAI & Gemini Integration",
    title: "Integrate OpenAI and Gemini AI Into Your Software",
    paragraphs: [
      "Integrate AI capabilities from suitable providers into your websites, applications, business platforms, and digital products.",
      "We help implement AI-powered functionality using OpenAI, Gemini, and other AI services according to project requirements, API availability, technical compatibility, and intended use cases. This is an API integration. It is not an official partnership with the provider.",
    ],
    items: [
      "OpenAI API Integration",
      "Gemini API Integration",
      "AI Model API Integration",
      "AI Text Generation Integration",
      "AI Content Generation Integration",
      "AI Assistant Integration",
      "AI Application Integration",
      "AI Model Switching",
      "AI-Powered Features",
      "AI API Development",
      "AI Service Integration",
      "Custom AI Implementations",
    ],
    cta: "Integrate OpenAI or Gemini",
    service: "OpenAI and Gemini Integration",
    tone: "dark",
    visualFirst: true,
  },
  {
    id: "custom-ai-apis",
    number: "03",
    eyebrow: "Custom AI APIs",
    title: "Build Custom AI APIs for Your Business Applications",
    paragraphs: [
      "Custom AI APIs enable applications, software platforms, and business systems to access AI-powered functionality through structured interfaces.",
      "We develop custom AI API solutions designed around application requirements, AI functionality, business logic, data workflows, and integration architecture.",
    ],
    items: [
      "Custom AI API Development",
      "AI API Integration",
      "AI Backend Development",
      "AI Service Development",
      "AI Endpoint Development",
      "AI Application APIs",
      "AI Data Processing APIs",
      "AI Content Generation APIs",
      "AI Model API Connections",
      "API Authentication",
      "API Documentation",
      "Custom AI Backend Solutions",
    ],
    cta: "Build Your Custom AI API",
    service: "Custom AI API Development",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "third-party-ai-integration",
    number: "04",
    eyebrow: "Third-Party AI Integration",
    title: "Connect Your Software With Third-Party AI Services",
    paragraphs: [
      "Third-party AI integration allows businesses to introduce external AI services, APIs, tools, and intelligent technologies into their software environments.",
      "We help businesses integrate suitable third-party AI services into applications, platforms, workflows, and digital products according to project requirements and supported functionality. A service is connected only when its API or interface can be used and the scope includes it.",
    ],
    items: [
      "Third-Party AI Integration",
      "AI Service Integration",
      "External AI API Integration",
      "AI Tool Integration",
      "AI Platform Integration",
      "AI Software Integration",
      "AI Application Connectivity",
      "AI Service Configuration",
      "API-Based AI Integration",
      "AI Workflow Connections",
      "AI Technology Integration",
      "Custom AI Service Integration",
    ],
    cta: "Connect Your AI Services",
    service: "Third-Party AI Integration",
    tone: "dark",
    visualFirst: true,
  },
  {
    id: "ai-application-integration",
    number: "05",
    eyebrow: "AI Application Integration",
    title: "Integrate AI Into Websites, Software & Digital Products",
    paragraphs: [
      "AI application integration introduces intelligent capabilities into existing websites, software platforms, business applications, and digital products.",
      "We help businesses integrate AI functionality into their technology environment to support content processing, information retrieval, intelligent assistance, data workflows, and application-specific AI features.",
    ],
    items: [
      "AI Application Integration",
      "Website AI Integration",
      "Custom Software AI Integration",
      "AI Mobile Application Integration",
      "AI Business Application Integration",
      "AI SaaS Integration",
      "AI Application Development",
      "AI Feature Integration",
      "AI Workflow Integration",
      "AI Database Integration",
      "AI System Integration",
      "Custom AI Application Solutions",
    ],
    cta: "Integrate AI Into Your Software",
    service: "AI Application Integration",
    tone: "light",
    visualFirst: false,
  },
];

export const CAPABILITIES = [
  "AI Model Integration",
  "AI API Development",
  "AI API Integration",
  "AI Application Integration",
  "AI Backend Development",
  "AI Software Integration",
  "AI Website Integration",
  "AI Mobile App Integration",
  "AI SaaS Integration",
  "AI Database Connections",
  "AI Workflow Integration",
  "Third-Party AI Integration",
  "Custom AI Development",
  "AI System Architecture",
  "AI Data Processing",
  "AI Application Connectivity",
];

export const CAPABILITY_FLOW = ["Website", "Backend", "AI API", "AI Model", "Database", "Business app"];

export const WORK_STAGES = [
  { title: "Business Requirement", text: "Identify the business requirement, application, workflow, or AI capability that needs to be integrated." },
  { title: "Technical Assessment", text: "Review the existing application architecture, APIs, systems, data requirements, and integration environment." },
  { title: "AI & API Selection", text: "Select suitable AI models, APIs, providers, services, and integration approaches according to project requirements." },
  { title: "Integration Architecture", text: "Design the connection between applications, backend systems, AI services, data sources, and workflows." },
  { title: "Development & Connection", text: "Implement APIs, backend logic, application connections, AI functionality, and required integrations." },
  { title: "Testing & Validation", text: "Test API communication, AI responses, application functionality, error handling, data flow, and integration behavior." },
  { title: "Deployment", text: "Deploy the integration and configure the required systems, environments, APIs, and application functionality." },
  { title: "Monitoring & Optimization", text: "Monitor integration behavior, troubleshoot issues, refine functionality, and maintain connections according to project requirements." },
];

export const APP_FEATURES = [
  "AI Website Integration",
  "AI Software Integration",
  "AI Mobile Application Integration",
  "AI SaaS Integration",
  "AI Dashboard Integration",
  "AI Business Tools",
  "AI Content Features",
  "Intelligent Information Processing",
  "AI-Powered Search",
  "AI Application Features",
  "AI Data Processing",
  "AI User Experience Integration",
];

export const API_ITEMS = [
  "Custom API Development",
  "AI API Integration",
  "REST API Development",
  "Backend API Development",
  "API Authentication",
  "API Documentation",
  "API Data Processing",
  "Webhook Integration",
  "Application Connectivity",
  "API Error Handling",
  "API Testing",
  "Custom Integration Architecture",
];

export const BUSINESS_ITEMS = [
  "CRM AI Integration",
  "ERP AI Integration",
  "Ecommerce AI Integration",
  "Business Software AI Integration",
  "Database AI Integration",
  "Website AI Integration",
  "Internal Application Integration",
  "AI Workflow Integration",
  "API Connectivity",
  "Third-Party Integration",
  "Data Synchronization",
  "Custom Business AI Integration",
];

export const BUSINESS_NODES = ["CRM", "AI layer", "ERP", "Database", "Website", "Dashboard"];

export const USE_CASES = [
  { id: "search", title: "AI-Powered Search", text: "Integrate AI-powered information retrieval into websites, applications, and business platforms." },
  { id: "content", title: "Content Generation", text: "Introduce AI content generation capabilities into content management systems, marketing applications, and business tools." },
  { id: "processing", title: "Intelligent Information Processing", text: "Integrate AI functionality for suitable data processing, classification, extraction, and information workflows." },
  { id: "assistants", title: "AI Business Assistants", text: "Integrate AI-powered assistants into applications to help users access information and interact with business functionality." },
  { id: "documents", title: "AI Document Processing", text: "Connect AI services to document workflows for suitable information extraction, summarization, and document processing tasks." },
  { id: "features", title: "AI Application Features", text: "Introduce AI-powered capabilities into existing applications, software products, and digital platforms." },
  { id: "systems", title: "Business System Integration", text: "Connect AI services with CRM, ERP, databases, internal applications, and business systems where appropriate." },
  { id: "reporting", title: "AI-Powered Reporting", text: "Integrate AI functionality into reporting systems to assist with summaries, information processing, and analysis workflows." },
];

export const ARCH_STACK = [
  "User interface",
  "Application backend",
  "AI integration layer",
  "API layer",
  "AI models and external services",
  "Database and business systems",
];

export const ARCH_ITEMS = [
  "AI Integration Layer",
  "API Architecture",
  "AI Model Connectivity",
  "Application Integration",
  "Backend Services",
  "Database Connections",
  "Third-Party Services",
  "AI Data Processing",
  "API Authentication",
  "Application Workflows",
  "Integration Monitoring",
  "Custom AI Architecture",
];

export const TECH_FLOW = ["AI provider", "API layer", "Backend", "Application", "Database", "Business workflow"];

export const TECH_CATEGORIES = [
  { title: "AI Providers & Models", items: ["OpenAI Integration", "Gemini Integration", "AI Model APIs", "Generative AI Services", "Large Language Models"] },
  { title: "API Development", items: ["REST APIs", "API Development", "API Integration", "Webhooks", "API Authentication"] },
  { title: "Application Development", items: ["Web Applications", "Mobile Applications", "Custom Software", "SaaS Platforms", "Business Applications"] },
  { title: "Data & Backend", items: ["Database Integration", "Backend Services", "Data Processing", "Application Data", "Structured Data"] },
  { title: "Integration Architecture", items: ["Third-Party Integration", "Application Connectivity", "AI Workflow Integration", "System Integration", "Custom AI Architecture"] },
];

export const INDUSTRIES = [
  { name: "Ecommerce & Retail", title: "Catalog, search, and content", desc: "Integrate AI content generation, product information processing, search functionality, business applications, and ecommerce workflows." },
  { name: "Healthcare", title: "Administrative applications", desc: "Integrate suitable AI technologies with applications and administrative workflows while considering privacy, security, and operational requirements." },
  { name: "Education", title: "Learning and information tools", desc: "Integrate AI-powered learning tools, content generation, information retrieval, and educational applications." },
  { name: "IT & Technology", title: "Products and knowledge systems", desc: "Integrate AI models, APIs, custom applications, software products, knowledge systems, and technical workflows." },
  { name: "Manufacturing", title: "Operations applications", desc: "Connect AI features to operational software, reporting, and internal applications where the systems can exchange data." },
  { name: "Logistics", title: "Status and information flows", desc: "Add AI-assisted information processing to the applications that already track tasks, status, and operational data." },
  { name: "Finance", title: "Records and review tools", desc: "Integrate document and information features into finance applications, with access controls and review where the process requires them." },
  { name: "Real Estate", title: "Property platforms and leads", desc: "Integrate AI functionality into property platforms, lead systems, business applications, and content workflows." },
  { name: "Hospitality", title: "Guest-facing applications", desc: "Connect AI assistance and information features to booking, guest, and internal applications the property already uses." },
  { name: "Professional Services", title: "Documents and delivery tools", desc: "Integrate AI document processing, business applications, content workflows, reporting, and productivity tools." },
  { name: "Startups", title: "Early product features", desc: "Add a defined AI feature to a website, app, or SaaS product through an API, without replacing the product you are already building." },
  { name: "SMEs & Enterprises", title: "Cross-system connectivity", desc: "Connect AI services across the websites, business software, and databases a larger organization already runs, scoped to the systems in the project." },
];

export const WHY = [
  { tag: "01", title: "Business-Focused Integration", text: "We plan AI integration solutions around business requirements, technical environments, workflows, and practical use cases." },
  { tag: "02", title: "Custom Development", text: "We develop integration solutions tailored to applications, systems, APIs, functionality, and technical requirements." },
  { tag: "03", title: "Application Connectivity", text: "We help connect AI technologies with websites, software platforms, mobile applications, databases, and business systems." },
  { tag: "04", title: "Practical AI Implementation", text: "We focus on useful AI functionality that supports actual business and application requirements." },
  { tag: "05", title: "Scalable Architecture", text: "We consider maintainability, integration expansion, future requirements, and application architecture." },
  { tag: "06", title: "API & Software Expertise", text: "We combine AI technologies with backend development, API integration, application development, and system connectivity." },
  { tag: "07", title: "Technical Planning", text: "We assess integration requirements, systems, APIs, data flow, and architecture before implementation." },
  { tag: "08", title: "End-to-End Development", text: "We support planning, development, integration, testing, deployment, and maintenance according to project requirements." },
];

export const PROCESS = [
  { title: "Discovery & Consultation", text: "Understand your business requirements, applications, existing systems, AI goals, and integration challenges." },
  { title: "Technical Assessment", text: "Review existing software, APIs, architecture, databases, data workflows, and integration possibilities." },
  { title: "Integration Strategy", text: "Define suitable AI models, providers, APIs, integration approaches, workflows, and implementation priorities." },
  { title: "Solution Architecture", text: "Plan the AI integration layer, application architecture, backend logic, API connections, data flow, and system interactions." },
  { title: "Development & Integration", text: "Develop the APIs, integration logic, AI functionality, backend components, and application connections." },
  { title: "Testing & Validation", text: "Test integrations, API communication, data exchange, AI responses, functionality, error handling, and application behavior." },
  { title: "Deployment", text: "Deploy the integration and configure the required applications, systems, APIs, and environments." },
  { title: "Optimization & Support", text: "Monitor integration functionality, refine the solution, troubleshoot issues, and maintain systems according to project requirements." },
];

export const SECURITY_ITEMS = [
  "API Authentication",
  "Access Permissions",
  "Data Handling",
  "Integration Security",
  "Error Handling",
  "API Validation",
  "System Monitoring",
  "Integration Testing",
  "Data Flow Controls",
  "Application Permissions",
  "AI Limitations",
  "Maintenance & Updates",
];

export const CONTROL_LAYERS = [
  { title: "Authentication", tag: "API access", text: "Calls are authenticated so only the applications you allow can reach the integration." },
  { title: "Permissions", tag: "Scoped data", text: "Each connection can read or write only the records the feature needs." },
  { title: "Validation", tag: "Requests", text: "Payloads are checked before they are sent to a model or written back to an application." },
  { title: "Monitoring", tag: "Status", text: "Errors, timeouts, and response behavior stay visible so the connection can be maintained." },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is AI integration?",
    a: "AI integration connects an AI model or AI service to an application, website, or business system through an API or another defined interface. The software sends a request and uses the response inside a feature you already have.",
  },
  {
    q: "What are AI integration services?",
    a: "They cover planning and building that connection: choosing a suitable model or provider, designing the API and data flow, implementing it in your application, and testing requests, responses, errors, and permissions.",
  },
  {
    q: "What is AI model integration?",
    a: "AI model integration places a model behind your application so a feature such as search, summarization, classification, or content assistance can call it. The model is chosen for the use case, the data you can send, and the shape of the result the application needs.",
  },
  {
    q: "Can you integrate OpenAI into my website or application?",
    a: "Yes, when the project uses the OpenAI API and the feature fits what that API provides. We implement authentication, the request, and how the response is shown or stored. Model availability and behavior follow the provider’s API. This is not an official partnership, and we do not guarantee a specific model result.",
  },
  {
    q: "Can you integrate Gemini AI into custom software?",
    a: "Yes, when Gemini’s API matches the feature and the project includes it. The integration is scoped to the endpoints, data, and application behavior you need. Compatibility is confirmed during the technical assessment.",
  },
  {
    q: "What is custom AI API development?",
    a: "It is an API your own applications call when they need an AI feature. The API can hold authentication, business rules, the request structure, and a consistent response, so each application does not talk to the model on its own.",
  },
  {
    q: "What is third-party AI integration?",
    a: "It connects your software to an external AI service through that service’s API or supported interface. A service is included only when it can be connected and the project scope covers it.",
  },
  {
    q: "Can AI be integrated into existing software?",
    a: "Yes, when the software can call an API, accept a webhook, or otherwise exchange data. The aim is to add a defined AI feature without replacing the system you already use.",
  },
  {
    q: "Can AI be integrated into mobile applications?",
    a: "Yes. A mobile app can call the same AI API or backend that a website uses, so authentication and data handling stay on the server when that is the right design.",
  },
  {
    q: "Can AI integrate with CRM and ERP systems?",
    a: "It can, when those systems expose an API or another connection the project can use. Typical uses include reading a record, writing a summary back, or starting a workflow. Compatibility is confirmed in the assessment, not assumed for every product. RoyalTech also builds CRM software when you need the system itself.",
  },
  {
    q: "What applications can be integrated with AI?",
    a: "Websites, custom software, mobile apps, SaaS products, dashboards, and business systems such as CRM or ecommerce platforms, when they can exchange data through an API or a similar interface.",
  },
  {
    q: "What is the difference between AI integration and AI development?",
    a: "AI integration connects an existing model or AI service to your software. Building an AI agent that carries out tasks, or a product whose main function is generated content, is a different kind of work. RoyalTech offers those as separate services, including AI agents and workflow automation and AI chatbots, when that is the requirement.",
  },
  {
    q: "Can AI APIs connect with databases?",
    a: "Yes. An API can read or write application data when the database and the permissions allow it. What is sent to an external model is decided in the integration design, including what should stay inside your systems.",
  },
  {
    q: "Can AI integration be customized for my business?",
    a: "Yes. Models, endpoints, data mapping, and application features are planned around your systems and the feature you want, rather than a fixed package.",
  },
  {
    q: "How much does AI integration development cost?",
    a: "Cost depends on how many applications connect, which providers or models are involved, whether you need a custom API, and how much data mapping and testing the flow requires. We prepare an estimate after discovery rather than quoting a flat price.",
  },
  {
    q: "How long does AI integration take?",
    a: "Timing depends on the systems involved, the API work, and how the feature is tested. A single, well-defined connection is a shorter build than a multi-system integration. We share a timeline after the technical assessment.",
  },
  {
    q: "Can you integrate multiple AI models into one application?",
    a: "Yes, when the application needs more than one model and each one has a defined role. Routing or switching between them is part of the integration design. The set of models is scoped during planning.",
  },
  {
    q: "Do you provide AI API development?",
    a: "Yes. Custom AI APIs, including endpoints, authentication, and a documented request and response, are part of this service when the project includes them.",
  },
  {
    q: "Can AI integration improve existing applications?",
    a: "It can add a defined capability, such as assisted search, content help, document processing, or a business assistant, inside the application you already have. Whether that helps depends on the feature and how people use it. We do not promise a specific business result.",
  },
  {
    q: "Do you provide maintenance and support for AI integrations?",
    a: "Yes. After launch we can monitor the connection, update it when an API changes, and adjust the integration according to the support arrangement for the project.",
  },
];
