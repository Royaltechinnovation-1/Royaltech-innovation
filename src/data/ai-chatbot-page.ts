/**
 * Content and SEO data for /services/ai-chatbots-virtual-assistants.
 * Copy follows the approved landing page draft. Sample conversations are illustrative and labelled as such on the page.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/ai-chatbots-virtual-assistants";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "AI Chatbot Development Company | Chatbots & AI Assistants – RoyalTech";
export const SEO_H1 = "AI Chatbots & Virtual Assistants That Make Business Smarter";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation develops AI chatbots, WhatsApp chatbots, customer support bots, voice assistants, and conversational AI solutions for businesses.";
export const SEO_KEYWORDS = [
  "AI Chatbot Development Company",
  "AI Chatbot Development Services",
  "Chatbot Development Company",
  "AI Chatbot Solutions",
  "AI Virtual Assistant Development",
  "Website Chatbot Development",
  "WhatsApp Chatbot Development",
  "Customer Support Chatbot Development",
  "Conversational AI Development",
  "AI Chatbot Development Company in Mohali",
  "Chatbot Development Company in Chandigarh",
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
};

export const HERO_PILLARS = [
  "Website Chatbots",
  "WhatsApp Chatbots",
  "Customer Support Chatbots",
  "Voice Assistants",
  "Conversational AI",
];

export const HERO_LEAD =
  "We build intelligent chatbots and AI-powered virtual assistants that help businesses automate conversations, support customers, generate leads, streamline workflows, and deliver smarter digital experiences.";

export const INTRO_PARAGRAPHS = [
  "Businesses today need faster, smarter, and more accessible ways to communicate with customers and manage everyday interactions.",
  "At RoyalTech Innovation, we develop AI-powered chatbots and virtual assistants designed to help businesses automate conversations, answer customer queries, capture leads, provide support, and streamline repetitive tasks.",
  "From website chatbots and WhatsApp automation to voice assistants and conversational AI solutions, we build intelligent experiences tailored to your business requirements.",
];

export const INTRO_TAGS = ["Tailored Business Workflows", "Multi-Channel Deployment", "Human Handoff Ready"];

export type ChannelService = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items: string[];
  cta: string;
  service: string;
  tone: "light" | "dark";
};

export const SERVICES: ChannelService[] = [
  {
    id: "website-chatbots",
    number: "01",
    eyebrow: "Website Chatbots",
    title: "Website Chatbots That Turn Visitors Into Opportunities",
    paragraphs: [
      "Create interactive website experiences that help visitors find information, explore services, ask questions, and connect with your business. We develop website chatbots designed to provide instant responses, assist visitors, collect enquiries, qualify potential leads, and support customer journeys through intelligent conversations.",
    ],
    items: [
      "AI Website Chatbot Development",
      "Website Chatbot Integration",
      "Customer Query Automation",
      "Lead Generation Chatbots",
      "Lead Qualification",
      "FAQ Automation",
      "Website Visitor Assistance",
      "Appointment Booking Assistance",
      "Service Recommendations",
      "Custom Chatbot Workflows",
      "Chatbot Knowledge Base",
      "Website Chat Interface Design",
    ],
    cta: "Build Your Website Chatbot",
    service: "Website Chatbot Development",
    tone: "light",
  },
  {
    id: "whatsapp-chatbots",
    number: "02",
    eyebrow: "WhatsApp Chatbots",
    title: "WhatsApp Chatbots for Smarter Customer Communication",
    paragraphs: [
      "Automate customer communication through WhatsApp with intelligent conversational experiences designed around your business needs. We develop WhatsApp chatbot solutions that help businesses respond to enquiries, share information, collect leads, send relevant updates, assist customers, and streamline communication workflows.",
    ],
    items: [
      "WhatsApp Business Chatbot",
      "WhatsApp Automation",
      "Automated Customer Replies",
      "Lead Generation",
      "Enquiry Management",
      "Appointment Booking",
      "Customer Notifications",
      "Product & Service Information",
      "Order Status Assistance",
      "Customer Support Automation",
      "WhatsApp Business Integration",
      "Custom WhatsApp Workflows",
    ],
    cta: "Automate WhatsApp Conversations",
    service: "WhatsApp Chatbot Development",
    tone: "dark",
  },
  {
    id: "support-chatbots",
    number: "03",
    eyebrow: "Customer Support Chatbots",
    title: "AI Customer Support That Works Smarter",
    paragraphs: [
      "Help customers find answers, resolve common queries, and access support information through intelligent automated conversations. Our customer support chatbot solutions can be designed around your business knowledge, support workflows, frequently asked questions, and customer requirements to provide consistent and accessible customer assistance.",
    ],
    items: [
      "AI Customer Support Chatbots",
      "Automated FAQ Responses",
      "Customer Query Resolution",
      "Knowledge Base Integration",
      "Support Ticket Assistance",
      "Customer Service Automation",
      "Product Information Assistance",
      "Service Information",
      "Support Workflow Integration",
      "Escalation to Human Support",
      "Customer Feedback Collection",
      "Custom Support Chatbots",
    ],
    cta: "Improve Customer Support",
    service: "Customer Support Chatbot",
    tone: "light",
  },
  {
    id: "voice-assistants",
    number: "04",
    eyebrow: "Voice Assistants",
    title: "AI Voice Assistants for Natural Business Conversations",
    paragraphs: [
      "Enable businesses to interact with customers through intelligent voice-based experiences. We develop voice assistant solutions designed to support conversational interactions, answer questions, assist with enquiries, guide users through workflows, and integrate with business systems where required.",
    ],
    items: [
      "AI Voice Assistant Development",
      "Voice-Based Customer Assistance",
      "Speech Recognition Integration",
      "Text-to-Speech Integration",
      "Voice Interaction Design",
      "Automated Call Assistance",
      "Voice Query Handling",
      "Appointment Assistance",
      "Voice Workflow Automation",
      "Conversational Voice Interfaces",
      "Custom Voice Assistants",
      "Business System Integration",
    ],
    cta: "Explore Voice AI Solutions",
    service: "AI Voice Assistant Development",
    tone: "dark",
  },
  {
    id: "conversational-ai",
    number: "05",
    eyebrow: "Conversational AI",
    title: "Conversational AI Built Around Your Business",
    paragraphs: [
      "Build more intelligent conversational experiences using AI-powered systems that understand context, process user questions, and assist customers through natural interactions. We develop conversational AI solutions tailored to business use cases, knowledge sources, communication channels, workflows, and integration requirements.",
    ],
    items: [
      "Conversational AI Development",
      "AI Assistant Development",
      "Custom AI Chatbots",
      "Natural Language Processing",
      "AI Knowledge Assistants",
      "Retrieval-Based AI Assistants",
      "Business Knowledge Integration",
      "Context-Aware Conversations",
      "AI Workflow Integration",
      "Multi-Channel Conversational AI",
      "Custom AI Solutions",
      "AI System Integration",
    ],
    cta: "Build a Custom AI Assistant",
    service: "Custom Conversational AI Assistant",
    tone: "light",
  },
];

export const CAPABILITY_PIPELINE = ["Customer", "Chat Interface", "AI Engine", "Knowledge Base", "APIs & CRM", "Business Action"];

export const CAPABILITY_DOMAINS = [
  {
    n: "01",
    eyebrow: "Core AI & Intelligence",
    title: "Conversational & Knowledge Engines",
    text: "Built to understand natural phrasing and draw responses from structured business documentation.",
    items: [
      "AI Chatbot Development",
      "Custom AI Assistants",
      "Conversational AI",
      "NLP-Based Chatbots",
      "Knowledge-Based AI & AI Knowledge Base Integration",
    ],
  },
  {
    n: "02",
    eyebrow: "Business & Support Automation",
    title: "Lead & Customer Operations",
    text: "Streamline repetitive enquiries, FAQ handling, lead qualification, and operational workflows.",
    items: [
      "AI-Powered FAQ Systems",
      "Lead Generation Automation",
      "Customer Support Automation",
      "Business Workflow Automation",
      "Human Handoff",
    ],
  },
  {
    n: "03",
    eyebrow: "Experience & Connectivity",
    title: "Multi-Channel UX & Insights",
    text: "Consistent conversational interfaces across channels with system integration and visibility.",
    items: ["AI Integration", "Multi-Channel Chatbots", "Custom Conversation Design", "Chatbot Analytics"],
  },
];

export const WORKFLOW_STAGES = [
  { n: "01", title: "User Interaction", text: "Customers interact through a website, WhatsApp, or voice interface.", tag: "Web · WhatsApp · Voice" },
  { n: "02", title: "Query Understanding", text: "The system processes the user's question or request using its configured AI capabilities.", tag: "NLP & Intent Parsing" },
  { n: "03", title: "Knowledge Retrieval", text: "The chatbot retrieves relevant information from configured knowledge sources, FAQs, business information, or connected systems where supported.", tag: "Business KB Lookup" },
  { n: "04", title: "AI Response", text: "The assistant generates or provides an appropriate response based on its capabilities, available information, and configured instructions.", tag: "Context-Aware Reply" },
  { n: "05", title: "Business Action", text: "The chatbot may assist with actions such as collecting enquiries, guiding customers, capturing information, or initiating supported workflows.", tag: "Lead & Workflow Sync" },
  { n: "06", title: "Human Assistance", text: "When required, conversations can be directed to a human support representative or business team.", tag: "Human Handoff" },
];

export const INTEGRATIONS = [
  "Website Integration",
  "WhatsApp Business Integration",
  "CRM Integration",
  "Customer Database Integration",
  "Lead Management Integration",
  "Appointment & Booking Systems",
  "Ecommerce Integration",
  "Business APIs",
  "Knowledge Base Integration",
  "Support Systems",
  "Workflow Automation",
  "Third-Party Integrations",
];

export const LEAD_STEPS = [
  { n: "01", title: "Website Visitor", text: "Visitor lands on service or solution pages seeking guidance." },
  { n: "02", title: "AI Conversation", text: "Assistant greets, answers questions, and recommends relevant options." },
  { n: "03", title: "Customer Requirement", text: "Conversational prompts identify project scope, timeline, or service need." },
  { n: "04", title: "Lead Capture", text: "Contact information and enquiry summary are structured cleanly." },
  { n: "05", title: "Business Team", text: "Synced to CRM or notified to your team for timely follow-up." },
];

export const LEAD_ITEMS = [
  "Lead Capture Chatbots",
  "Enquiry Automation",
  "Lead Qualification",
  "Customer Engagement",
  "Website Visitor Assistance",
  "Service Recommendations",
  "Contact Information Collection",
  "Appointment Scheduling Assistance",
  "Product Discovery",
  "Customer Journey Assistance",
  "Conversational Forms",
  "CRM Lead Integration",
];

export const SUPPORT_ITEMS = [
  "Automated FAQs",
  "Customer Query Handling",
  "Support Workflow Automation",
  "Customer Self-Service",
  "Knowledge Base Assistance",
  "Ticket Assistance",
  "Customer Information Collection",
  "Support Categorization",
  "Human Escalation",
  "Service Information",
  "Customer Feedback",
  "Automated Notifications",
];

export const CUSTOM_ITEMS = [
  "Custom Chatbot Design",
  "AI Assistant Development",
  "Business-Specific Knowledge",
  "Custom Conversation Flows",
  "AI Model Integration",
  "Knowledge Retrieval",
  "Business Logic",
  "System Integration",
  "Multi-Channel Deployment",
  "Workflow Automation",
  "Chatbot Personalization",
  "AI Solution Development",
];

export const CONFIG_LAYERS = [
  { title: "Brand Persona & Guardrails", text: "Configured tone, response boundaries, escalation rules, and fallback behaviors.", tag: "Layer 1", tone: "blue" },
  { title: "Curated Knowledge & Business Logic", text: "Structured service data, eligibility rules, and retrieval indexing.", tag: "Layer 2", tone: "sky" },
  { title: "Custom UI & Multi-Channel Connectors", text: "Branded web widget, WhatsApp Business workflows, voice interfaces, and API hooks.", tag: "Layer 3", tone: "green" },
];

export type Industry = { name: string; title: string; desc: string; user: string; bot: string };

export const INDUSTRIES: Industry[] = [
  {
    name: "Ecommerce & Retail",
    title: "Ecommerce & Retail AI Assistant",
    desc: "Product discovery, order enquiries, customer support, and shopping assistance across website and WhatsApp channels.",
    user: "Do you have running shoes available in size 9, and what is the return policy?",
    bot: "I can check current stock in size 9 and share our return policy. Would you like me to filter by style or price?",
  },
  {
    name: "Healthcare",
    title: "Healthcare Patient Assistance Bot",
    desc: "Appointment assistance, service information, and patient enquiry support, subject to privacy and operational requirements.",
    user: "How can I book an outpatient consultation with the dermatology department?",
    bot: "I can help you request a dermatology appointment. Please select your preferred day and share a contact number for confirmation.",
  },
  {
    name: "Education",
    title: "Education & Admissions Virtual Assistant",
    desc: "Admissions enquiries, course information, student assistance, and campus information.",
    user: "What are the eligibility requirements and application dates for the upcoming semester?",
    bot: "I can share the program brochure and eligibility checklist, or connect you with an admissions counselor.",
  },
  {
    name: "Real Estate",
    title: "Real Estate Property Enquiry Chatbot",
    desc: "Property enquiries, listing information, lead collection, and site-visit appointment assistance.",
    user: "I am looking for a 3 BHK apartment near Airport Road Mohali.",
    bot: "I can share listings that match your preferred area and budget. Would you like floor plans or to schedule a property visit?",
  },
  {
    name: "IT & Technology",
    title: "IT & Technology Solutions Assistant",
    desc: "Service enquiries, technical information, lead qualification, and customer assistance.",
    user: "Can your team integrate a custom AI chatbot with our existing CRM and web app?",
    bot: "Yes. We build custom REST API and webhook integrations to sync chatbot conversations and leads with supported CRM platforms.",
  },
  {
    name: "Banking & Financial Services",
    title: "Financial Services Enquiry Assistant",
    desc: "General product information, branch or service guidance, document checklists, and structured customer enquiry routing.",
    user: "What documents are needed to apply for a business current account?",
    bot: "Requirements vary by institution. I can share a general document checklist and route your enquiry to the right team.",
  },
  {
    name: "Hospitality",
    title: "Hospitality & Guest Concierge Bot",
    desc: "Reservation enquiries, guest assistance, service information, and booking guidance.",
    user: "Do you have family suites available this weekend and airport pickup options?",
    bot: "I can check availability for your dates and note your airport transfer request. Shall I start a reservation enquiry?",
  },
  {
    name: "Manufacturing",
    title: "Manufacturing & B2B Enquiry Bot",
    desc: "Product specification lookups, dealer or distributor enquiries, catalog sharing, and quote request capture.",
    user: "Where can I download technical specifications for your industrial valves?",
    bot: "I can share the technical datasheet here, or log a bulk quotation enquiry with our sales team.",
  },
  {
    name: "Logistics",
    title: "Logistics & Shipment Support Bot",
    desc: "Shipment tracking guidance, service coverage enquiries, pickup scheduling, and customer support routing.",
    user: "How do I check the transit status of my consignment?",
    bot: "Please share your consignment reference or registered email, and I will point you to the current status or route your request to support.",
  },
  {
    name: "Professional Services",
    title: "Professional Services Intake Assistant",
    desc: "Consultation scheduling, practice area information, client intake questions, and enquiry management.",
    user: "I would like to schedule an initial consultation regarding corporate compliance.",
    bot: "I can record your consultation topic and preferred time slot so our advisory team can confirm your appointment.",
  },
  {
    name: "Startups",
    title: "Startup Growth & Onboarding Assistant",
    desc: "Product walkthrough guidance, user onboarding FAQs, demo booking, and lean customer support automation.",
    user: "Can I book a 20-minute product demo for my team?",
    bot: "Absolutely. Please share your work email and team size, and I will help schedule a tailored walkthrough.",
  },
  {
    name: "Local Businesses",
    title: "Local Business Web & WhatsApp Bot",
    desc: "Service hours, location directions, appointment bookings, pricing enquiries, and instant WhatsApp replies.",
    user: "What are your opening hours, and how can I book a service slot?",
    bot: "I can share our opening hours and help you reserve a service slot here or on WhatsApp in a few quick steps.",
  },
];

export const WHY = [
  { tag: "01 · Business-First", title: "Business-Focused AI Solutions", text: "We develop AI chatbot solutions around your business objectives, customer needs, and operational requirements." },
  { tag: "02 · Custom Built", title: "Custom Development", text: "We build chatbot experiences tailored to your business rather than relying on generic chatbot templates." },
  { tag: "03 · Practical AI", title: "Practical AI Integration", text: "We focus on implementing AI capabilities that support real business use cases and workflows." },
  { tag: "04 · UX Design", title: "Conversational Experience Design", text: "We design interactions that are clear, helpful, intuitive, and aligned with your customer journey." },
  { tag: "05 · Connected", title: "System Integration", text: "We help connect chatbot experiences with relevant business platforms, systems, and data sources where supported." },
  { tag: "06 · Growth Ready", title: "Scalable Solutions", text: "We consider future requirements, business growth, system architecture, and maintainability." },
  { tag: "07 · Human-Centered", title: "Human-Centered Automation", text: "We recognize that AI should support business teams and customers, with appropriate human assistance when necessary." },
  { tag: "08 · Ongoing Care", title: "Dedicated Development Support", text: "We support planning, development, integration, testing, and improvements according to project requirements." },
];

export const PROCESS = [
  { title: "Discovery & Consultation", text: "Understand your business, target audience, objectives, communication needs, and chatbot requirements." },
  { title: "Use Case & Strategy", text: "Identify suitable chatbot use cases, conversation scenarios, automation opportunities, and platform requirements." },
  { title: "Conversation & Experience Design", text: "Plan conversational flows, user journeys, chatbot behavior, interface design, and escalation requirements." },
  { title: "AI Development", text: "Develop the chatbot, configure AI capabilities, implement knowledge sources, and create required workflows." },
  { title: "Integration", text: "Connect the chatbot with relevant websites, platforms, business systems, APIs, or communication channels according to project requirements." },
  { title: "Testing & Refinement", text: "Test conversation flows, response quality, functionality, integrations, edge cases, and user experience." },
  { title: "Deployment", text: "Deploy the chatbot to its intended platform and configure the required environment." },
  { title: "Optimization & Support", text: "Monitor, improve, maintain, and update chatbot functionality based on business needs and user feedback." },
];

export const TECH_CATEGORIES = [
  { title: "AI & Language Models", items: ["AI Language Models", "Generative AI", "Natural Language Processing", "AI APIs"] },
  { title: "Conversational Technologies", items: ["Conversational AI", "Intent Recognition", "Conversation Management", "Knowledge-Based Responses"] },
  { title: "Integration & Backend", items: ["REST APIs", "Webhooks", "Database Integration", "Business System Integration"] },
  { title: "Knowledge & Automation", items: ["Knowledge Bases", "Retrieval-Based AI", "Workflow Automation", "Business Logic"] },
  { title: "Platforms & Channels", items: ["Websites", "WhatsApp Business", "Voice Interfaces", "Customer Support Systems"] },
];

export const ARCH_LAYERS = ["User Interface", "Conversation Layer", "AI Engine", "Knowledge Sources", "Integration Layer", "Business Systems"];

export const SECURITY_ITEMS = [
  "Secure Integration Planning",
  "Access Control Considerations",
  "Data Handling Requirements",
  "Knowledge Source Management",
  "Response Quality Testing",
  "Human Handoff",
  "AI Limitations",
  "Privacy Considerations",
  "Appropriate Workflow Controls",
  "Testing & Validation",
];

export const CONTROL_LAYERS = [
  { title: "1. Privacy & Data Access Layer", tag: "Scoped Permissions", text: "Defines which data sources and APIs the assistant can query based on user role and workflow scope." },
  { title: "2. Knowledge & Scope Guardrails", tag: "Curated Sources", text: "Grounds replies in approved business information while acknowledging AI boundaries when queries fall outside scope." },
  { title: "3. Validation & Human Oversight", tag: "Human-in-the-Loop", text: "Pre-launch scenario testing combined with seamless escalation paths to human representatives." },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an AI chatbot?",
    a: "An AI chatbot is an intelligent software application powered by artificial intelligence and natural language processing (NLP) that understands user questions, interprets intent, retrieves relevant business information, and responds naturally through text or voice interfaces.",
  },
  {
    q: "What is the difference between an AI chatbot and a virtual assistant?",
    a: "An AI chatbot typically focuses on answering queries, capturing leads, and assisting users within messaging channels like websites or WhatsApp. An AI virtual assistant expands on those capabilities by handling multi-step workflows, voice interactions, task scheduling, and deeper integrations across business software systems.",
  },
  {
    q: "What AI chatbot development services do you provide?",
    a: "RoyalTech Innovation provides end-to-end AI chatbot development services including Website Chatbots, WhatsApp Business Chatbots, Customer Support Chatbots, AI Voice Assistants, and custom Conversational AI solutions integrated with your CRM, databases, and workflows.",
  },
  {
    q: "Can you develop custom AI chatbots for businesses?",
    a: "Yes. We design and build custom AI chatbots tailored to your specific business processes, service offerings, knowledge base, brand tone, and technical integrations rather than relying on rigid one-size-fits-all templates.",
  },
  {
    q: "Do you develop website chatbots?",
    a: "Yes, we build interactive AI website chatbots that engage visitors, answer product or service questions, qualify leads, recommend solutions, and assist with appointment bookings directly on your website.",
  },
  {
    q: "Can you develop WhatsApp chatbots?",
    a: "Yes, we develop WhatsApp Business chatbots and automation workflows that handle customer enquiries, share service catalogs, collect lead details, assist with bookings, and send relevant updates via supported WhatsApp Business API integrations.",
  },
  {
    q: "What is a customer support chatbot?",
    a: "A customer support chatbot is an automated conversational assistant connected to your FAQs, help articles, and support workflows to answer routine questions, assist with order or ticket enquiries, and escalate complex cases to human support agents.",
  },
  {
    q: "Do you develop AI voice assistants?",
    a: "Yes, we build AI voice assistants integrating speech recognition and text-to-speech capabilities to guide callers, answer common enquiries, assist with bookings, and connect voice interactions with backend business systems.",
  },
  {
    q: "What is conversational AI?",
    a: "Conversational AI refers to technologies—such as natural language understanding, dialogue management, and knowledge retrieval—that enable software systems to hold context-aware, human-like conversations across web, messaging, and voice channels.",
  },
  {
    q: "Can AI chatbots integrate with CRM systems?",
    a: "Yes. AI chatbots can integrate with supported CRM platforms, databases, and lead management tools via APIs and webhooks to automatically log enquiries, sync contact records, and trigger follow-up workflows.",
  },
  {
    q: "Can chatbots help generate business leads?",
    a: "AI chatbots assist lead generation by engaging visitors proactively, asking qualifying questions in a conversational format, recommending relevant services, and capturing contact details for your sales team.",
  },
  {
    q: "Can AI chatbots automate customer support?",
    a: "AI chatbots help automate repetitive customer queries, FAQ responses, and self-service requests while routing specialized or sensitive issues to human representatives when needed.",
  },
  {
    q: "Can AI chatbots be trained on business information?",
    a: "Yes. Using retrieval-based AI and structured knowledge bases, chatbots can be configured to reference your approved documents, service descriptions, policies, and FAQs to generate relevant, context-aware answers.",
  },
  {
    q: "How much does AI chatbot development cost?",
    a: "Development cost depends on the channels required (website, WhatsApp, voice), conversation complexity, custom AI workflows, knowledge base size, and third-party API or CRM integrations. Contact RoyalTech Innovation for a tailored project estimate.",
  },
  {
    q: "How long does chatbot development take?",
    a: "A focused website or FAQ chatbot typically takes 2 to 4 weeks, while multi-channel conversational AI assistants with custom CRM integrations, WhatsApp workflows, or voice capabilities may take 4 to 8+ weeks depending on scope.",
  },
  {
    q: "Can chatbots integrate with existing websites?",
    a: "Yes. Our website chatbots can be embedded seamlessly into existing custom websites, Next.js/React applications, WordPress sites, and e-commerce platforms without disrupting your current site architecture.",
  },
  {
    q: "Do you provide chatbot maintenance and support?",
    a: "Yes. RoyalTech Innovation offers ongoing optimization, knowledge base updates, conversation flow refinements, API monitoring, and technical support after deployment.",
  },
  {
    q: "Can a chatbot transfer conversations to human staff?",
    a: "Yes. We design human-in-the-loop escalation workflows so conversations can smoothly transition to live support staff or notify your business team whenever human intervention is requested or appropriate.",
  },
  {
    q: "Which businesses can benefit from AI chatbots?",
    a: "Organizations across e-commerce, healthcare, education, real estate, IT services, financial services, hospitality, logistics, and growing startups use AI chatbots to streamline customer communication, lead capture, and support workflows.",
  },
  {
    q: "What is the difference between rule-based chatbots and AI chatbots?",
    a: "Rule-based chatbots follow fixed decision trees and scripted button paths, whereas AI chatbots use natural language processing and knowledge retrieval to understand varied phrasing, maintain context, and respond flexibly to open-ended user questions.",
  },
];
