/**
 * Content for /services/generative-ai-solutions.
 * Copy follows the approved landing page. Studio samples are illustrative.
 * A model or API is used when the project selects it. This is not a claim of
 * an official partnership with any AI provider.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/generative-ai-solutions";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "Generative AI Development Company | AI Solutions – RoyalTech Innovation";
export const SEO_H1 = "Generative AI Solutions for Smarter Digital Innovation";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation develops generative AI solutions for content, images, documents, custom GPT applications, and intelligent AI-powered business software.";
export const SEO_KEYWORDS = [
  "Generative AI Development Company",
  "Generative AI Development Services",
  "Generative AI Solutions",
  "AI Content Generation Solutions",
  "AI Image Generation Solutions",
  "AI Document Generation",
  "Custom GPT Development",
  "Generative AI Applications",
  "Generative AI Development Company in Mohali",
  "Generative AI Solutions in Chandigarh",
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
};

export const HERO_SUB = "Transform Ideas Into Intelligent AI-Powered Experiences";
export const HERO_LEAD =
  "We build generative AI solutions that help businesses create content, generate images, automate documents, develop custom AI assistants, and transform ideas into intelligent digital applications.";
export const HERO_PILLARS = [
  "AI Content Generation",
  "AI Image Generation",
  "AI Document Generation",
  "Custom GPT Solutions",
  "Generative AI Applications",
];

export const INTRO_PARAGRAPHS = [
  "Generative AI is transforming how businesses create content, develop digital experiences, process information, and build intelligent applications.",
  "At RoyalTech Innovation, we develop generative AI solutions tailored to business requirements, creative workflows, operational needs, and digital innovation goals.",
  "From AI-generated content and images to intelligent document generation, custom GPT solutions, and business-specific generative AI applications, we help businesses explore and implement practical AI technologies.",
];

export const RELATED_LINKS = [
  { href: "/services/ai-chatbots-virtual-assistants", label: "AI chatbots and virtual assistants" },
  { href: "/services/ai-agents-workflow-automation", label: "AI agents and workflow automation" },
  { href: "/services/ai-integration-api-solutions", label: "AI integration and API solutions" },
  { href: "/services/custom-software-development", label: "custom software development" },
  { href: "/services/website-development", label: "website development" },
  { href: "/services/mobile-app-development", label: "mobile app development" },
  { href: "/services/ui-ux-design", label: "UI/UX design" },
  { href: "/services/it-consulting", label: "IT consulting" },
  { href: "/services/crm", label: "CRM solutions" },
];

export type GenService = {
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

export const SERVICES: GenService[] = [
  {
    id: "ai-content-generation",
    number: "01",
    eyebrow: "AI Content Generation",
    title: "Create High-Quality Content With AI",
    paragraphs: [
      "Generative AI can help businesses create, organize, refine, and adapt content for different communication channels, business requirements, and audiences.",
      "We develop AI-powered content generation solutions designed to support content workflows, marketing activities, business communication, and content production. Drafts are for review. The tool does not replace editorial judgment.",
    ],
    items: [
      "AI Content Generation Solutions",
      "AI Blog Writing Tools",
      "AI Marketing Content Generation",
      "AI Website Content Generation",
      "AI Product Description Generation",
      "AI Social Media Content",
      "AI Email Content Generation",
      "AI Copywriting Applications",
      "AI Content Repurposing",
      "AI Content Assistant Development",
      "Custom Content Generation Workflows",
      "AI Writing Applications",
    ],
    cta: "Build Your AI Content Solution",
    service: "AI Content Generation",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "ai-image-generation",
    number: "02",
    eyebrow: "AI Image Generation",
    title: "Turn Ideas Into AI-Generated Visual Experiences",
    paragraphs: [
      "AI image generation enables businesses to create visual concepts, creative assets, marketing imagery, product visuals, and customized digital content using AI-powered technologies.",
      "We develop AI image generation solutions and applications tailored to creative workflows, business requirements, and visual content needs. Outputs are concepts for review, not a guarantee of a finished brand asset.",
    ],
    items: [
      "AI Image Generation Solutions",
      "Custom AI Image Generation Applications",
      "AI Creative Tools",
      "AI Product Image Generation",
      "Marketing Image Generation",
      "AI Visual Content Creation",
      "AI Design Applications",
      "Image Generation Integration",
      "AI Image Workflow Automation",
      "Custom Image Generation Interfaces",
      "AI Creative Applications",
      "Visual Content Generation",
    ],
    cta: "Explore AI Image Generation",
    service: "AI Image Generation",
    tone: "dark",
    visualFirst: true,
  },
  {
    id: "ai-document-generation",
    number: "03",
    eyebrow: "AI Document Generation",
    title: "Generate Smarter Documents With AI",
    paragraphs: [
      "Automate document creation using AI-powered systems that generate structured content, business documents, reports, templates, and customized information based on defined inputs and requirements.",
      "We develop AI document generation solutions designed to simplify document workflows, improve consistency, and support business processes.",
    ],
    items: [
      "AI Document Generation",
      "Automated Business Documents",
      "AI Report Generation",
      "Proposal Generation",
      "AI Contract Drafting Assistance",
      "Business Document Automation",
      "Document Template Automation",
      "AI Content Summarization",
      "Personalized Document Generation",
      "AI Document Processing",
      "Structured Document Generation",
      "Custom Document Applications",
    ],
    cta: "Automate Document Creation",
    service: "AI Document Generation",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "custom-gpt-solutions",
    number: "04",
    eyebrow: "Custom GPT Solutions",
    title: "Custom GPT Solutions Built Around Your Business",
    paragraphs: [
      "Custom GPT solutions can be designed to assist with specific business tasks, knowledge requirements, communication workflows, content generation, and information retrieval.",
      "We develop custom GPT-powered applications and AI assistants tailored to your business requirements, knowledge sources, workflows, and user experiences. A knowledge source is included when you can provide it and the project covers it.",
    ],
    items: [
      "Custom GPT Development",
      "Business GPT Solutions",
      "Custom AI Assistants",
      "Knowledge-Based GPT Applications",
      "Internal AI Assistants",
      "AI Knowledge Management",
      "Custom GPT Integration",
      "AI Business Applications",
      "GPT-Powered Tools",
      "AI Content Assistants",
      "Custom AI Workspaces",
      "Business-Specific AI Solutions",
    ],
    cta: "Build Your Custom GPT",
    service: "Custom GPT Solutions",
    tone: "light",
    visualFirst: true,
  },
  {
    id: "generative-ai-applications",
    number: "05",
    eyebrow: "Generative AI Applications",
    title: "Build Custom Applications Powered by Generative AI",
    paragraphs: [
      "Generative AI applications combine AI capabilities, software development, user experiences, business logic, data, and integrations to create intelligent digital products.",
      "We develop custom generative AI applications tailored to business use cases, product ideas, workflows, creative requirements, and operational needs.",
    ],
    items: [
      "Generative AI Application Development",
      "Custom AI Software Development",
      "AI-Powered Web Applications",
      "AI Business Applications",
      "AI SaaS Applications",
      "AI Content Platforms",
      "AI Creative Applications",
      "AI Productivity Tools",
      "AI Application Integration",
      "Custom Generative AI Tools",
      "AI Application Prototyping",
      "AI Product Development",
    ],
    cta: "Build Your Generative AI Application",
    service: "Generative AI Application Development",
    tone: "light",
    visualFirst: false,
  },
];

export const CAPABILITY_FLOW = [
  { step: "01", title: "Prompt and context", text: "Structured user forms, instructions, and parameters." },
  { step: "02", title: "AI model layer", text: "The text or image model selected for the feature." },
  { step: "03", title: "Business knowledge", text: "Approved documents and data the feature is allowed to use." },
  { step: "04", title: "Generation", text: "Drafted copy, a visual concept, a document, or an answer." },
  { step: "05", title: "Application", text: "Editing, review, and the business rules around the output." },
  { step: "06", title: "Delivery", text: "A result the team can review, save, or export." },
];

export const CAPABILITIES = [
  "Generative AI Development",
  "Custom AI Application Development",
  "AI Content Generation",
  "AI Image Generation",
  "AI Document Generation",
  "Custom GPT Development",
  "AI Assistant Development",
  "Generative AI Integration",
  "AI API Integration",
  "AI Workflow Development",
  "Knowledge-Based AI Solutions",
  "AI-Powered Software",
  "Custom AI Tools",
  "AI Application Prototyping",
  "AI Product Development",
];

export const WORK_STAGES = [
  { title: "User Input", text: "Users provide prompts, questions, content, data, images, or requirements." },
  { title: "Input Processing", text: "The system processes the input and prepares the information for the relevant AI task." },
  { title: "AI Model Processing", text: "The configured AI model processes the input based on its capabilities, instructions, and context." },
  { title: "AI Generation", text: "The system generates relevant content, images, documents, responses, or other outputs." },
  { title: "Output Refinement", text: "The output can be reviewed, refined, formatted, or processed according to the application workflow." },
  { title: "Delivery & Integration", text: "The generated output is displayed, exported, saved, or integrated into the relevant business workflow." },
];

export const CREATIVE_ITEMS = [
  "Content Creation Workflows",
  "AI Writing Assistance",
  "Marketing Content Generation",
  "Product Content Generation",
  "AI Visual Creation",
  "Image Generation Workflows",
  "Content Repurposing",
  "Creative AI Applications",
  "Content Personalization",
  "AI Content Tools",
  "Marketing Workflow Integration",
  "Custom Creative Solutions",
];

export const DOCUMENT_ITEMS = [
  "Business Document Generation",
  "AI Report Creation",
  "Proposal Generation",
  "Document Templates",
  "AI Summarization",
  "Structured Content Generation",
  "Business Content Automation",
  "Personalized Documents",
  "Document Workflow Integration",
  "AI Writing Assistance",
  "Information Formatting",
  "Document Automation Applications",
];

export const KNOWLEDGE_ITEMS = [
  "Custom GPT Development",
  "Business Knowledge Assistants",
  "AI Knowledge Applications",
  "Internal AI Assistants",
  "AI Information Retrieval",
  "Knowledge-Based Generation",
  "Custom Instructions",
  "Business AI Workspaces",
  "AI Assistant Integration",
  "Custom GPT Applications",
  "AI Knowledge Solutions",
  "Custom AI Tools",
];

export const APP_ITEMS = [
  "AI Web Application Development",
  "Generative AI Software Development",
  "AI SaaS Development",
  "AI-Powered Platforms",
  "AI Content Applications",
  "AI Creative Software",
  "AI Productivity Applications",
  "Custom AI Products",
  "AI Application Prototyping",
  "AI User Experience Design",
  "AI Application Integration",
  "AI Product Development",
];

export const APP_MODULES = [
  { title: "AI writing application", text: "A workspace with prompt templates and tone controls." },
  { title: "AI image studio", text: "A prompt builder, format presets, and an asset gallery." },
  { title: "AI document generator", text: "Form inputs that produce a structured document for review." },
  { title: "Custom GPT workspace", text: "An assistant connected to the knowledge you approve." },
  { title: "AI productivity suite", text: "Users, workflows, and exports in one product." },
];

export const INTEGRATION_ITEMS = [
  "AI API Integration",
  "Website Integration",
  "Custom Software Integration",
  "CRM Integration",
  "ERP Integration",
  "Database Integration",
  "AI Application Integration",
  "Business Workflow Integration",
  "Content Management Integration",
  "Ecommerce Integration",
  "Third-Party APIs",
  "Custom AI Integrations",
];

export const INTEGRATION_NODES = [
  { title: "AI model and APIs", text: "Text or image endpoints selected for the feature." },
  { title: "Application layer", text: "Prompts, checks, and the rules around the output." },
  { title: "Websites and CMS", text: "Publishing and tools on the site you already run." },
  { title: "CRM and ERP", text: "Connected when those systems expose an API the project can use." },
  { title: "Databases and documents", text: "Storage and the knowledge the feature may read." },
  { title: "Business dashboard", text: "Where the team reviews, edits, and exports." },
];

export const TECH_FLOW = ["User interface", "AI application", "AI model", "Knowledge and data", "Generation", "Business workflow"];

export const TECH_CATEGORIES = [
  { title: "Generative AI", items: ["Large Language Models", "Generative AI Models", "AI APIs", "Text Generation", "Image Generation"] },
  { title: "AI Applications", items: ["Custom GPT Solutions", "AI Assistants", "AI-Powered Applications", "Generative AI Workflows", "AI Application Development"] },
  { title: "Data & Knowledge", items: ["Knowledge Bases", "AI Context", "Data Processing", "Document Processing", "Knowledge Retrieval"] },
  { title: "Integration & Development", items: ["REST APIs", "Backend Integration", "Database Integration", "Application Integration", "Custom Software"] },
  { title: "AI Workflows", items: ["Prompt Engineering", "AI Content Workflows", "AI Document Workflows", "AI Image Workflows", "AI Application Workflows"] },
];

export const INDUSTRIES = [
  { name: "Ecommerce & Retail", desc: "Product descriptions, catalog content, marketing visuals, customer-facing copy, and shopping tools." },
  { name: "Marketing & Advertising", desc: "Content generation, creative ideation, campaign copy variations, visual concepts, and multi-channel workflows." },
  { name: "Healthcare", desc: "Education materials, administrative templates, and knowledge assistants, with privacy and review requirements considered." },
  { name: "Education", desc: "Educational content, study summaries, structured documents, and learning applications." },
  { name: "IT & Technology", desc: "Custom AI applications, custom GPT solutions, technical documentation, and knowledge assistants." },
  { name: "Real Estate", desc: "Property descriptions, marketing content, brochure copy, and listing tools." },
  { name: "Manufacturing", desc: "Manuals, SOP drafts, specification sheets, and internal knowledge assistants." },
  { name: "Finance", desc: "Report drafts, document summaries, and communication templates, with review where the process requires it." },
  { name: "Hospitality", desc: "Guest communications, promotional concepts, and content workflows for the property." },
  { name: "Professional Services", desc: "Proposals, reports, knowledge applications, and productivity tools." },
  { name: "Startups", desc: "An early generative AI product, a custom assistant, or a focused prototype around one workflow." },
  { name: "SMEs & Enterprises", desc: "Department workspaces, document workflows, knowledge tools, and connections to software the organization already uses." },
];

export const WHY = [
  { title: "Business-Focused AI", text: "We build generative AI solutions around your business objectives, creative requirements, workflows, and practical use cases." },
  { title: "Custom AI Development", text: "We develop AI applications, assistants, and tools tailored to your business requirements." },
  { title: "Practical AI Implementation", text: "We focus on AI capabilities that serve real business needs rather than unnecessary complexity." },
  { title: "Creative Technology", text: "We combine AI capabilities, software development, and user experience design to build useful AI-powered solutions." },
  { title: "Integration Expertise", text: "We help integrate AI capabilities into applications, workflows, and business systems where appropriate." },
  { title: "Scalable Applications", text: "We consider maintainability, future requirements, application architecture, and business growth." },
  { title: "User-Focused Design", text: "We create AI-powered experiences that are intuitive, accessible, and easy to use." },
  { title: "End-to-End Development", text: "We support planning, development, integration, testing, deployment, and maintenance according to project requirements." },
];

export const PROCESS = [
  { title: "Discovery & Consultation", text: "Understand your business objectives, AI ideas, users, requirements, challenges, and desired outcomes." },
  { title: "Use Case & Strategy", text: "Identify appropriate generative AI use cases, workflows, application requirements, and technology possibilities." },
  { title: "Solution Architecture", text: "Plan AI capabilities, application architecture, models, APIs, knowledge sources, workflows, and integration requirements." },
  { title: "Experience & Interface Design", text: "Design AI interaction experiences, application interfaces, prompts, workflows, and user journeys." },
  { title: "AI Development", text: "Develop the AI application, integrate AI capabilities, configure generation workflows, and implement required business logic." },
  { title: "Integration", text: "Connect AI functionality with relevant applications, databases, APIs, business systems, and workflows where required." },
  { title: "Testing & Refinement", text: "Test AI functionality, output quality, usability, integrations, edge cases, and application behavior." },
  { title: "Deployment & Support", text: "Deploy the solution and provide ongoing improvements, maintenance, and support according to project requirements." },
];

export const QUALITY_ITEMS = [
  "AI Output Validation",
  "Prompt & Context Design",
  "Knowledge Source Management",
  "Human Review",
  "Data Handling Requirements",
  "AI Limitations",
  "Application Testing",
  "Response Quality",
  "Privacy Considerations",
  "Content Review",
  "AI Workflow Controls",
  "Responsible AI Implementation",
];

export const QUALITY_STEPS = [
  { title: "Context and rules", text: "Instructions and format limits for the feature." },
  { title: "Knowledge sources", text: "Only the documents and data you approve." },
  { title: "Generation", text: "A draft produced inside those limits." },
  { title: "Checks", text: "Format and required fields before a person sees it." },
  { title: "Human review", text: "A place to edit before anything is published." },
  { title: "Final output", text: "Approved content exported or saved to the workflow." },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is generative AI?",
    a: "Generative AI refers to models and systems designed to produce new material, such as text, images, structured documents, or conversational responses, from a prompt, instructions, and the context you provide.",
  },
  {
    q: "What are generative AI solutions?",
    a: "They are tools, workflows, and applications that put a generative model into a business task: drafting content, exploring visual concepts, preparing documents, retrieving approved knowledge, or powering a product feature.",
  },
  {
    q: "What generative AI development services do you provide?",
    a: "RoyalTech Innovation provides five generative AI services: AI content generation, AI image generation, AI document generation, custom GPT solutions, and custom generative AI applications.",
  },
  {
    q: "What is AI content generation?",
    a: "AI content generation uses a language model and a defined prompt workflow to draft, organize, adapt, or refine written material such as articles, product descriptions, marketing copy, emails, and social posts. The draft is for a person to review.",
  },
  {
    q: "Can AI generate images for businesses?",
    a: "Yes. An image workflow can produce visual concepts, campaign explorations, and product mockups from a text prompt and the creative direction you set. The result is a starting point for review, not a finished brand asset by default.",
  },
  {
    q: "What is AI document generation?",
    a: "It creates a structured business document, such as a proposal, report, summary, or template, from the inputs and format you define. A person can review the draft before it is used.",
  },
  {
    q: "What are custom GPT solutions?",
    a: "They are assistants configured with instructions, a defined task, and the business knowledge you approve, so a team or a customer-facing workflow can ask questions and receive answers grounded in that material.",
  },
  {
    q: "Can you develop custom generative AI applications?",
    a: "Yes. We design and build web applications and internal tools that combine a generative AI API with your interface, data, and business rules.",
  },
  {
    q: "What is the difference between generative AI and traditional AI?",
    a: "Traditional AI is usually built to classify, predict, or find a pattern in data. Generative AI produces a new output, such as text, an image, or a document, from a prompt and context. RoyalTech also builds AI agents and AI integrations when the need is task execution or connecting a model to existing software.",
  },
  {
    q: "Can generative AI be integrated into existing software?",
    a: "Yes, when that software can call an API or accept the output another way. Websites, CRM and ERP systems, content tools, and custom software can be connected when the project includes that system and the connection is available.",
  },
  {
    q: "Can AI generate business documents and reports?",
    a: "Yes. A document workflow can turn structured inputs, notes, or a data summary into a formatted report, proposal, or operational document for the team to review.",
  },
  {
    q: "Can generative AI help with marketing content?",
    a: "It can speed up campaign drafts, channel variations, repurposed articles, and visual concepts. Publishing still depends on your review and brand rules.",
  },
  {
    q: "Can you build AI-powered web applications?",
    a: "Yes. We build web applications that include a generative AI feature, using the application stack that fits the product, including React and Next.js when that is the right fit.",
  },
  {
    q: "How much does generative AI development cost?",
    a: "Cost depends on the scope, the interface, the workflows, whether a knowledge source is included, and which AI APIs the feature uses. We prepare an estimate after reviewing the requirements rather than quoting a flat price.",
  },
  {
    q: "How long does it take to develop a generative AI application?",
    a: "Timing depends on the same factors. A focused assistant or a single workflow is a shorter build than a multi-user application with several integrations. We share a timeline after the use-case and architecture work, rather than promising a fixed number of weeks.",
  },
  {
    q: "Can generative AI solutions be customized for my business?",
    a: "Yes. Workflows, tone, output formats, user roles, and the data the feature may use are planned around your business.",
  },
  {
    q: "Do you develop AI-powered SaaS applications?",
    a: "Yes, when the product needs accounts, workspaces, prompt workflows, and API connections. The scope is set during discovery.",
  },
  {
    q: "Can custom GPT solutions use business knowledge?",
    a: "Yes. An assistant can be set up to use approved documents, catalogs, and guidelines so answers stay tied to that material. What it can read is decided in the project.",
  },
  {
    q: "What technologies are used in generative AI development?",
    a: "We choose the language model, image API, retrieval approach, REST APIs, data store, and application framework according to the feature. A technology is used when it fits the project.",
  },
  {
    q: "Do you provide maintenance and support for generative AI applications?",
    a: "Yes. After launch we can maintain the application, refine prompts and workflows, update API connections, and add features according to the support arrangement.",
  },
];
