/**
 * Content and SEO data for /services/ai-agents-workflow-automation.
 * Copy follows the approved landing page brief. Workflow samples are illustrative.
 * Cost and timeline answers stay qualitative because they depend on scope.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/ai-agents-workflow-automation";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "AI Agents & Workflow Automation Company | RoyalTech Innovation";
export const SEO_H1 = "AI Agents & Workflow Automation for Smarter Business Operations";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation develops AI agents, workflow automation, business process automation, intelligent integrations, and custom AI automation solutions.";
export const SEO_KEYWORDS = [
  "AI Agent Development Company",
  "AI Agents Development Services",
  "AI Automation Company",
  "Workflow Automation Services",
  "Business Process Automation Services",
  "AI Workflow Automation",
  "Intelligent Automation Solutions",
  "AI Agent Development Company in Mohali",
  "Workflow Automation Services in Mohali",
  "Business Automation Company in Chandigarh",
  "AI Agent Development Services in Punjab",
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
};

export const HERO_PILLARS = [
  "AI Agent Development",
  "Workflow Automation",
  "Business Process Automation",
  "AI-Powered Automation",
  "AI Agent Integration",
];

export const HERO_LEAD =
  "We build AI agents and intelligent automation solutions that help businesses automate repetitive tasks, connect systems, streamline workflows, manage processes, and improve operational efficiency.";

export const INTRO_PARAGRAPHS = [
  "Modern businesses manage multiple systems, repetitive tasks, workflows, communication channels, and operational processes every day.",
  "At RoyalTech Innovation, we build AI agents and workflow automation solutions designed to help businesses simplify operations, connect applications, automate repetitive work, and create more efficient digital processes.",
  "From intelligent AI agents and automated business workflows to custom integrations and process automation, we help organizations explore practical ways to use AI and automation in their operations.",
];

export const RELATED_LINKS = [
  { href: "/services/ai-chatbots-virtual-assistants", label: "AI chatbots and virtual assistants" },
  { href: "/services/custom-software-development", label: "custom software development" },
  { href: "/services/website-development", label: "website development" },
  { href: "/services/mobile-app-development", label: "mobile app development" },
  { href: "/services/it-consulting", label: "IT consulting" },
  { href: "/services/crm", label: "CRM solutions" },
];

export type AgentService = {
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

export const SERVICES: AgentService[] = [
  {
    id: "ai-agent-development",
    number: "01",
    eyebrow: "AI Agent Development",
    title: "Custom AI Agents That Understand Tasks and Take Action",
    paragraphs: [
      "AI agents can be designed to perform defined tasks, interact with business systems, process information, follow workflows, and assist teams with operational activities.",
      "We develop custom AI agent solutions tailored to business requirements, task execution, available systems, workflows, and integration needs.",
    ],
    items: [
      "Custom AI Agent Development",
      "Business AI Agents",
      "Task-Oriented AI Agents",
      "Intelligent Task Execution",
      "AI Decision Support",
      "AI Agent Workflows",
      "Multi-Step Task Automation",
      "AI-Powered Research Assistants",
      "AI Data Processing Agents",
      "AI Business Assistants",
      "Agent-Based Automation",
      "Custom AI Agent Solutions",
    ],
    cta: "Build Your AI Agent",
    service: "Custom AI Agent Development",
    tone: "light",
  },
  {
    id: "workflow-automation",
    number: "02",
    eyebrow: "Workflow Automation",
    title: "Automate Workflows and Connect Your Business Processes",
    paragraphs: [
      "Streamline repetitive workflows by connecting applications, automating task sequences, managing information flow, and reducing unnecessary manual interactions.",
      "We build workflow automation solutions tailored to your business operations, systems, triggers, rules, and process requirements.",
    ],
    items: [
      "Workflow Automation Development",
      "Automated Task Workflows",
      "Application Integration",
      "Trigger-Based Automation",
      "Data Synchronization",
      "Workflow Management",
      "Approval Workflows",
      "Notification Automation",
      "Task Assignment Automation",
      "Business Workflow Integration",
      "Automated Data Processing",
      "Custom Workflow Solutions",
    ],
    cta: "Automate Your Workflows",
    service: "Workflow Automation",
    tone: "dark",
  },
  {
    id: "business-process-automation",
    number: "03",
    eyebrow: "Business Process Automation",
    title: "Transform Manual Business Processes Into Automated Operations",
    paragraphs: [
      "Business process automation helps organizations simplify repetitive operational activities, improve workflow consistency, connect business systems, and reduce manual task dependency.",
      "We design and implement automation solutions around business processes, operational requirements, workflows, and technology environments.",
    ],
    items: [
      "Business Process Automation",
      "Operational Workflow Automation",
      "Process Digitization",
      "Task Automation",
      "Document Workflow Automation",
      "Data Entry Automation",
      "Business Operations Automation",
      "Approval Process Automation",
      "Process Integration",
      "Repetitive Task Automation",
      "Operational Workflow Improvement",
      "Custom Business Automation",
    ],
    cta: "Optimize Your Business Operations",
    service: "Business Process Automation",
    tone: "light",
  },
  {
    id: "ai-powered-automation",
    number: "04",
    eyebrow: "AI-Powered Automation",
    title: "Combine Artificial Intelligence With Business Automation",
    paragraphs: [
      "AI-powered automation combines intelligent processing, AI capabilities, business logic, and workflow automation to support more flexible and intelligent business operations.",
      "We help businesses explore automation opportunities involving AI-assisted information processing, classification, content generation, data analysis, decision support, and task workflows.",
    ],
    items: [
      "AI-Powered Workflow Automation",
      "Intelligent Document Processing",
      "AI Data Processing",
      "AI Information Classification",
      "AI Content Workflows",
      "AI-Based Task Assistance",
      "Intelligent Business Automation",
      "AI Workflow Integration",
      "AI Decision Support",
      "AI-Assisted Operations",
      "Intelligent Process Automation",
      "AI Automation Development",
    ],
    cta: "Explore AI Automation",
    service: "AI-Powered Automation",
    tone: "dark",
  },
  {
    id: "ai-agent-integration",
    number: "05",
    eyebrow: "AI Agent Integration",
    title: "Connect AI Agents With Your Business Systems",
    paragraphs: [
      "AI agents become more useful when they can interact with the systems, tools, information, and workflows your business already uses.",
      "We help businesses plan and implement AI agent integrations with relevant software, APIs, databases, business applications, and automation workflows based on project requirements. A connection is included when that system can be integrated and the project scope covers it.",
    ],
    items: [
      "AI Agent Integration",
      "API Integration",
      "CRM Integration",
      "ERP Integration",
      "Database Integration",
      "Business Application Integration",
      "AI Workflow Connections",
      "Third-Party Integrations",
      "Custom API Development",
      "System Interoperability",
      "Data Synchronization",
      "AI Automation Architecture",
    ],
    cta: "Connect Your Business Systems",
    service: "AI Agent Integration",
    tone: "light",
  },
];

export const CAPABILITY_PIPELINE = ["User Request", "AI Agent", "Planning", "Tools & Systems", "Action", "Result"];

export const CAPABILITIES = [
  "AI Task Execution",
  "Multi-Step Workflows",
  "AI Planning Assistance",
  "Information Retrieval",
  "Data Processing",
  "Business Research Assistance",
  "Task Coordination",
  "Tool & API Interaction",
  "Workflow Execution",
  "Intelligent Routing",
  "AI Decision Support",
  "Human Approval Workflows",
  "Business System Interaction",
  "Custom Agent Development",
];

export const WORK_STAGES = [
  { n: "01", title: "User Instruction", text: "The user or business workflow initiates a request or task.", tag: "Request in" },
  { n: "02", title: "Task Understanding", text: "The agent interprets the request, context, and defined requirements.", tag: "Intent & context" },
  { n: "03", title: "Planning", text: "The system determines the steps needed to complete the task within its configured capabilities.", tag: "Allowed steps" },
  { n: "04", title: "Tool & System Interaction", text: "The agent interacts with supported APIs, applications, data sources, or tools.", tag: "APIs & tools" },
  { n: "05", title: "Task Execution", text: "The agent performs supported actions according to the workflow, permissions, and defined controls.", tag: "Controlled action" },
  { n: "06", title: "Review & Completion", text: "The task result is returned, reviewed, recorded, or passed to the next workflow stage.", tag: "Review" },
];

export const WORKFLOW_ITEMS = [
  "Automated Workflow Design",
  "Process Triggers",
  "Conditional Workflows",
  "Task Routing",
  "Approval Workflows",
  "Data Transfer",
  "System Synchronization",
  "Notifications",
  "Workflow Monitoring",
  "Process Tracking",
  "Task Assignment",
  "Workflow Management",
];

export const USE_CASES = [
  {
    id: "leads",
    title: "Lead Management Automation",
    text: "Automate lead capture, information collection, categorization, assignment, and workflow initiation.",
    steps: ["Form or inbox", "Categorize", "Assign owner", "Open CRM record"],
  },
  {
    id: "communication",
    title: "Customer Communication",
    text: "Assist with communication workflows, enquiry routing, notifications, and response preparation.",
    steps: ["Incoming enquiry", "Route by topic", "Draft reply", "Notify the team"],
  },
  {
    id: "data",
    title: "Data Processing",
    text: "Automate suitable data collection, transformation, classification, and processing tasks.",
    steps: ["Collect records", "Validate fields", "Transform", "Write to system"],
  },
  {
    id: "documents",
    title: "Document Processing",
    text: "Support document workflows, information extraction, categorization, and structured data processing.",
    steps: ["Receive file", "Extract fields", "Classify", "File the record"],
  },
  {
    id: "reporting",
    title: "Reporting & Business Insights",
    text: "Assist with information collection, report preparation, data summaries, and business analysis workflows.",
    steps: ["Pull sources", "Summarize", "Draft report", "Share for review"],
  },
  {
    id: "employee",
    title: "Employee Workflows",
    text: "Automate repetitive internal processes, approvals, notifications, task assignments, and administrative workflows.",
    steps: ["Request raised", "Route approval", "Notify", "Close the task"],
  },
  {
    id: "ecommerce",
    title: "Ecommerce Automation",
    text: "Support order-related workflows, product information processes, customer requests, and system connections.",
    steps: ["Order event", "Update status", "Notify customer", "Sync systems"],
  },
  {
    id: "sales",
    title: "Sales Operations",
    text: "Assist with lead workflows, CRM data processing, follow-ups, information organization, and task management.",
    steps: ["New opportunity", "Update CRM", "Schedule follow-up", "Log the activity"],
  },
];

export const AGENT_ROLES = [
  "AI Business Assistants",
  "Sales Workflow Agents",
  "Operations Agents",
  "Research Assistants",
  "Data Processing Agents",
  "Document Processing Agents",
  "Internal Knowledge Assistants",
  "Administrative Task Automation",
  "Workflow Coordination",
  "Customer Enquiry Assistance",
  "Reporting Assistance",
  "Custom AI Agents",
];

export const INTEGRATION_ITEMS = [
  "API Integration",
  "CRM Automation",
  "ERP Automation",
  "Database Connections",
  "Business Application Integration",
  "Ecommerce Automation",
  "Email Workflow Automation",
  "Webhook Integration",
  "Data Synchronization",
  "Third-Party Integration",
  "System Integration",
  "Custom Automation Architecture",
];

export const INTEGRATION_NODES = ["CRM", "ERP", "Website", "Database", "Dashboard", "Email", "APIs", "Internal apps"];

export const TECH_CATEGORIES = [
  { title: "AI Technologies", items: ["AI Language Models", "Generative AI", "AI Agents", "Natural Language Processing", "AI APIs"] },
  { title: "Automation", items: ["Workflow Automation", "Trigger-Based Automation", "Business Rules", "Process Orchestration", "Task Automation"] },
  { title: "Integration", items: ["REST APIs", "Webhooks", "API Integration", "Third-Party Systems", "Application Connections"] },
  { title: "Data", items: ["Databases", "Data Processing", "Data Synchronization", "Knowledge Sources", "Structured Data Workflows"] },
  { title: "Business Systems", items: ["CRM", "ERP", "Ecommerce", "Business Applications", "Internal Dashboards"] },
];

export const ARCH_LAYERS = ["AI Layer", "Agent Layer", "Automation Layer", "Integration Layer", "Business Systems"];

export const INDUSTRIES = [
  { name: "Ecommerce & Retail", title: "Order and catalogue workflows", desc: "Order workflows, inventory-related processes, customer enquiry routing, and business system connections." },
  { name: "Healthcare", title: "Administrative workflow assistance", desc: "Administrative workflow assistance, information processing, appointment-related processes, and system integration, subject to privacy and operational requirements." },
  { name: "Education", title: "Admissions and student operations", desc: "Admissions workflows, student enquiries, document processing, and administrative task automation." },
  { name: "IT & Technology", title: "Delivery and support operations", desc: "Ticket routing, internal task coordination, release checklists, and connections between delivery tools." },
  { name: "Manufacturing", title: "Operations and reporting", desc: "Operational workflow coordination, information processing, reporting, and process automation." },
  { name: "Logistics", title: "Status and task coordination", desc: "Task coordination, information processing, status workflows, and system connections." },
  { name: "Finance", title: "Review and document workflows", desc: "Document intake, classification, approval routing, and record updates, with human review where the process requires it." },
  { name: "Real Estate", title: "Enquiry and CRM workflows", desc: "Lead routing, property enquiry workflows, CRM automation, and appointment coordination." },
  { name: "Hospitality", title: "Guest request workflows", desc: "Reservation-related requests, internal task assignment, and notification workflows across the tools the property already uses." },
  { name: "Professional Services", title: "Intake and delivery workflows", desc: "Client intake, document collection, approval steps, and internal task assignment." },
  { name: "Startups", title: "Lean operating workflows", desc: "Early CRM, inbox, and reporting workflows that remove repeated manual steps without a large operations team." },
  { name: "SMEs & Enterprises", title: "Cross-team process automation", desc: "Shared workflows across departments, with permissions, approvals, and connections between the systems each team already uses." },
];

export const WHY = [
  { tag: "01", title: "Business-Focused Automation", text: "We build automation solutions around business requirements, operational challenges, and practical use cases." },
  { tag: "02", title: "Custom AI Development", text: "We develop AI agents and automation systems tailored to your workflows and technology environment." },
  { tag: "03", title: "Connected Systems", text: "We help connect applications, platforms, APIs, and business systems to support smoother operations." },
  { tag: "04", title: "Practical AI Implementation", text: "We focus on AI solutions that serve clear business purposes rather than unnecessary complexity." },
  { tag: "05", title: "Scalable Architecture", text: "We consider maintainability, future requirements, workflow expansion, and system architecture." },
  { tag: "06", title: "Human-Controlled Workflows", text: "We consider approval processes, permissions, oversight, and human intervention where required." },
  { tag: "07", title: "Integration Expertise", text: "We combine AI capabilities with software development, APIs, databases, and business applications." },
  { tag: "08", title: "End-to-End Development", text: "We support planning, development, integration, testing, deployment, and maintenance according to project requirements." },
];

export const PROCESS = [
  { title: "Discovery & Consultation", text: "Understand your business operations, objectives, challenges, workflows, systems, and automation requirements." },
  { title: "Workflow Analysis", text: "Analyze existing processes, repetitive tasks, dependencies, data flow, and potential automation opportunities." },
  { title: "Automation Strategy", text: "Define automation use cases, AI agent requirements, workflows, integrations, and implementation priorities." },
  { title: "Solution Architecture", text: "Plan the AI agent architecture, automation workflows, business logic, tools, APIs, and system connections." },
  { title: "Development & Integration", text: "Develop the automation system, AI agents, workflows, and integrations according to the project requirements." },
  { title: "Testing & Validation", text: "Test task execution, workflow logic, integrations, edge cases, permissions, and system reliability." },
  { title: "Deployment", text: "Deploy the automation solution and configure the required environments, workflows, and systems." },
  { title: "Optimization & Support", text: "Review workflows, refine automation, update integrations, and maintain the system according to business needs." },
];

export const SECURITY_ITEMS = [
  "Permission-Based Access",
  "Workflow Controls",
  "Human Approval",
  "Task Validation",
  "Integration Security",
  "Data Handling",
  "Monitoring",
  "Error Handling",
  "AI Limitations",
  "Process Logging",
  "Workflow Testing",
  "Controlled Execution",
];

export const CONTROL_LAYERS = [
  { title: "Permissions", tag: "Scoped access", text: "The agent can only reach the systems and actions the workflow allows." },
  { title: "Workflow controls", tag: "Rules", text: "Triggers, conditions, and stops are defined before a task runs." },
  { title: "Human approval", tag: "Review", text: "Steps that need a decision wait for a person instead of completing on their own." },
  { title: "Monitoring", tag: "Visibility", text: "Runs, failures, and handoffs stay visible so the team can check what happened." },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What are AI agents?",
    a: "An AI agent is software configured to interpret a request, plan the steps it is allowed to take, and carry out those steps through tools, APIs, or workflows. It works inside the instructions, permissions, and systems you connect. It is not an autonomous employee.",
  },
  {
    q: "What is AI agent development?",
    a: "AI agent development is the work of designing and building an agent around a defined business task: the instructions, the tools it may use, the workflow it follows, and the points where a person reviews or approves the result.",
  },
  {
    q: "What is workflow automation?",
    a: "Workflow automation connects the steps of a process so a trigger can move information, assign a task, send a notification, or update a system according to rules you define.",
  },
  {
    q: "What is business process automation?",
    a: "Business process automation applies that approach across an operational process, such as approvals, document handling, or repeated data entry, so the same steps happen in a consistent order with less manual repetition.",
  },
  {
    q: "What is the difference between AI agents and chatbots?",
    a: "A chatbot is built to hold a conversation, answer questions, and collect information. An AI agent is built to carry a defined task through steps, which can include calling a tool or updating a system. An agent may include conversation, but its purpose is task execution within configured limits. RoyalTech also builds AI chatbots and virtual assistants when the need is conversational.",
  },
  {
    q: "How do AI agents automate business tasks?",
    a: "They follow a configured path: understand the request, plan the allowed steps, interact with the tools and systems you permit, and return a result for review, recording, or the next workflow stage.",
  },
  {
    q: "Can AI agents connect with existing business software?",
    a: "They can, when that software exposes an API, webhook, or another connection the project can use. Each connection is planned around the systems you already run and the actions the workflow needs.",
  },
  {
    q: "Can AI agents integrate with CRM and ERP systems?",
    a: "Yes, when those platforms provide an API or another supported connection and the project includes it. Typical actions include creating or updating a record and moving a status, within the permissions that system allows.",
  },
  {
    q: "What business processes can be automated?",
    a: "Repetitive work with clear rules is the usual starting point: lead routing, approvals, notifications, document handling, data transfer between systems, and internal task assignment. Whether a process should be automated depends on its exceptions and where a person still needs to decide.",
  },
  {
    q: "What is AI-powered automation?",
    a: "AI-powered automation adds an AI step to a workflow, such as classifying a document, summarizing information, or suggesting a next action, while the surrounding process still follows your rules and approvals.",
  },
  {
    q: "Can AI agents perform multiple tasks?",
    a: "An agent can be configured for more than one task when those tasks are defined, permissioned, and tested. The scope is set during discovery. It is not unlimited.",
  },
  {
    q: "Can AI agents automate repetitive workflows?",
    a: "Yes. Repetitive workflows with a clear trigger and a known sequence are a common fit, especially when the same information moves between the same systems.",
  },
  {
    q: "Do AI agents require human supervision?",
    a: "They should include supervision where the task needs a decision, a permission, or a check. We design approval steps and limits so a person can review work the agent should not finish on its own.",
  },
  {
    q: "How much does AI automation development cost?",
    a: "Cost depends on how many workflows you need, which systems must connect, whether the flow includes AI steps, and how much review the process requires. We prepare an estimate after a discovery conversation rather than quoting a flat price.",
  },
  {
    q: "How long does it take to develop an AI agent?",
    a: "Timing depends on the same factors: the number of workflows, the systems involved, and the approval rules. A single, well-defined workflow is a shorter build than a multi-system agent. We share a timeline after the workflow analysis.",
  },
  {
    q: "Can AI automation be customized for my business?",
    a: "Yes. Agents, rules, and integrations are built around your processes and systems rather than a fixed template.",
  },
  {
    q: "Do you provide workflow automation integration?",
    a: "Yes. Connecting your applications, APIs, or databases is part of the build when the project scope includes those systems.",
  },
  {
    q: "Can AI agents work with APIs?",
    a: "Yes. API and webhook connections are how an agent reads from or writes to another system, within the permissions that system allows.",
  },
  {
    q: "What is the difference between automation and intelligent automation?",
    a: "Automation follows rules you set, such as creating a record when a form is submitted. Intelligent automation adds an AI step, such as classifying that submission or drafting a summary, before or during the same workflow.",
  },
  {
    q: "Do you provide maintenance and support for AI automation systems?",
    a: "Yes. After launch we can maintain workflows, update integrations, and adjust agent instructions according to the support arrangement for the project.",
  },
];
