/**
 * Content and SEO data for /services/custom-software-development.
 * Copy follows the approved landing page draft. Illustrative product screens are labelled as examples on the page.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/custom-software-development";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "Custom Software Development Company | Business & Enterprise Solutions – RoyalTech";
export const SEO_H1 = "Custom Software Solutions Designed Around Your Business";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation develops custom business software, enterprise solutions, web applications, workflow automation, and software integrations tailored to your business needs.";
export const SEO_KEYWORDS = [
  "Custom Software Development Company",
  "Custom Software Development Services",
  "Software Development Company",
  "Business Software Development",
  "Enterprise Software Development",
  "Web Application Development",
  "Workflow Management Software Development",
  "Software Integration Services",
  "Custom Software Development Company in Mohali",
  "Software Development Company in Mohali",
  "Software Development Company in Chandigarh",
  "Custom Software Development Services in Chandigarh",
  "Software Development Company in Punjab",
  "Business Software Development Company in Mohali",
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
  address:
    "CP67 Mall, Gate No. 5, Imperial Tower, Floor No. 10, International Airport Road, Sector 67, Sahibzada Ajit Singh Nagar, Mohali, Punjab 160062",
};

export const HERO_PILLARS = [
  "Business Software",
  "Enterprise Solutions",
  "Web Applications",
  "Workflow Automation",
  "Software Integration",
];

export const HERO_LEAD =
  "We design and develop intelligent, scalable, and business-focused software solutions that streamline operations, automate workflows, and help organizations achieve sustainable digital growth.";

export const INTRO_PARAGRAPHS = [
  "Every business operates differently. Off-the-shelf software may not always meet your operational requirements, workflows, or long-term objectives.",
  "At RoyalTech Innovation, we develop custom software solutions designed around your business processes, helping organizations improve productivity, simplify operations, connect systems, and make better use of technology.",
  "From business management software and enterprise platforms to web-based applications and workflow automation, we create software tailored to your unique requirements.",
];

export const RELATED_LINKS = [
  { href: "/services/website-development", label: "website development" },
  { href: "/services/mobile-app-development", label: "mobile app development" },
  { href: "/services/ui-ux-design", label: "UI/UX design" },
  { href: "/services/crm", label: "CRM software" },
  { href: "/services/ai-powered-business-intelligence", label: "business intelligence dashboards" },
  { href: "/services/it-consulting", label: "IT consulting" },
];

export const INTRO_POINTS = [
  { n: "01", title: "Process-First Architecture", text: "Designed directly from your internal operational rules and reporting needs." },
  { n: "02", title: "Unified Data Visibility", text: "Eliminate disconnected spreadsheets and manual duplicate data entry." },
];

export type ServiceBlock = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items: string[];
  cta: string;
  service: string;
  tone: "light" | "dark" | "plain";
};

export const SERVICES: ServiceBlock[] = [
  {
    id: "business-software",
    number: "01",
    eyebrow: "Operational Systems",
    title: "Business Software Development",
    paragraphs: [
      "We develop customized business software that helps organizations manage daily operations, simplify processes, improve productivity, and make business activities more efficient.",
      "Our business software solutions are designed around your workflows, requirements, and operational objectives.",
    ],
    items: [
      "Business Management Software",
      "CRM Software",
      "ERP Software",
      "Inventory Management Systems",
      "Billing & Invoicing Software",
      "Employee Management Systems",
      "Business Reporting & Analytics",
      "Sales Management Software",
      "Customer Management Platforms",
      "Business Automation Solutions",
    ],
    cta: "Build Your Business Software",
    service: "Business Software Development",
    tone: "light",
  },
  {
    id: "enterprise-software",
    number: "02",
    eyebrow: "Organization-Wide Platforms",
    title: "Enterprise Software Development",
    paragraphs: [
      "Build powerful, scalable, and secure enterprise software designed to support complex business operations, organizational workflows, and growing business demands.",
      "We develop enterprise solutions that connect departments, simplify management, improve visibility, and support digital transformation.",
    ],
    items: [
      "Enterprise Resource Planning Systems",
      "Enterprise Management Software",
      "HR Management Systems",
      "CRM Platforms",
      "Enterprise Dashboards",
      "Internal Management Systems",
      "Data Management Solutions",
      "Multi-Department Software",
      "Enterprise Integrations",
      "Scalable Enterprise Applications",
    ],
    cta: "Explore Enterprise Solutions",
    service: "Enterprise Software Development",
    tone: "dark",
  },
  {
    id: "web-applications",
    number: "03",
    eyebrow: "Cloud & Browser Platforms",
    title: "Web-Based Application Development",
    paragraphs: [
      "We develop powerful web-based applications that allow businesses and users to access software functionality securely through modern browsers.",
      "From customer portals and SaaS platforms to internal business applications, we create responsive web applications tailored to your specific requirements.",
    ],
    items: [
      "Custom Web Applications",
      "SaaS Application Development",
      "Customer Portals",
      "Admin Dashboards",
      "Management Applications",
      "Online Booking Systems",
      "Business Portals",
      "Interactive Platforms",
      "Cloud-Based Applications",
      "API-Driven Applications",
    ],
    cta: "Develop Your Web Application",
    service: "Web-Based Application Development",
    tone: "plain",
  },
  {
    id: "workflow-automation",
    number: "04",
    eyebrow: "Process Digitalization",
    title: "Workflow Management & Business Automation Software",
    paragraphs: [
      "Transform repetitive business processes into streamlined digital workflows.",
      "We develop workflow management systems that help businesses organize tasks, automate processes, manage approvals, improve collaboration, and increase operational visibility.",
    ],
    items: [
      "Workflow Automation",
      "Task Management Systems",
      "Approval Management",
      "Process Automation",
      "Employee Workflow Systems",
      "Project Management Tools",
      "Automated Notifications",
      "Scheduling & Task Assignment",
      "Reporting & Monitoring",
      "Business Process Optimization",
    ],
    cta: "Automate Your Business Processes",
    service: "Workflow Management & Automation Software",
    tone: "light",
  },
  {
    id: "software-integration",
    number: "05",
    eyebrow: "Unified Ecosystem",
    title: "Software Integration & System Connectivity",
    paragraphs: [
      "Connect your existing software, business systems, APIs, and digital tools into a unified technology ecosystem.",
      "Our integration solutions help businesses reduce manual data entry, improve communication between systems, automate information exchange, and create more connected operations.",
    ],
    items: [
      "API Integration",
      "Third-Party Software Integration",
      "CRM Integration",
      "ERP Integration",
      "Payment Gateway Integration",
      "Ecommerce Integration",
      "Cloud Software Integration",
      "Database Integration",
      "Webhook Integration",
      "Legacy Software Integration",
      "Data Synchronization",
      "System Connectivity",
    ],
    cta: "Connect Your Business Systems",
    service: "Software Integration & System Connectivity",
    tone: "plain",
  },
];

export const CAPABILITIES = [
  "User Authentication & Authorization",
  "Role-Based Access Control",
  "Admin Dashboards",
  "Data Management",
  "Reporting & Analytics",
  "Workflow Automation",
  "Notifications",
  "API Integration",
  "Document Management",
  "Customer Management",
  "Employee Management",
  "Payment Integration",
  "Search & Filtering",
  "Real-Time Data",
  "Cloud Integration",
  "Custom Business Logic",
];

export const CAPABILITY_TABS = [
  { key: "access", label: "Access, Security & Admin", title: "Role-Based Access Control & Admin Governance" },
  { key: "data", label: "Data, Search & Analytics", title: "Real-Time Data Management, Filtering & Analytics" },
  { key: "operations", label: "Customers, Staff & Documents", title: "Customer, Employee & Document Management Suite" },
  { key: "automation", label: "Automation, Payments & Cloud", title: "Workflow Automation, Payments & Cloud Integration" },
];

export const TECH_LAYERS = [
  { label: "Layer 01", title: "Frontend Technologies", note: "Responsive Interfaces & Dashboards", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { label: "Layer 02", title: "Backend Technologies", note: "Business Logic & Application Servers", items: ["Node.js", ".NET", "C#", "ASP.NET Core", "Laravel", "PHP"] },
  { label: "Layer 03", title: "Databases", note: "Relational & Document Persistence", items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"] },
];

export const TECH_EXTRA = [
  { title: "Integrations", items: ["REST APIs", "GraphQL", "Webhooks", "Third-Party APIs"] },
  { title: "Cloud & Deployment", items: ["Cloud Infrastructure", "Cloud Hosting", "CI/CD", "Application Deployment", "Scalable Infrastructure"] },
];

export const OFF_THE_SHELF = [
  "Fixed feature sets requiring teams to adapt their workflows around software limitations.",
  "Unused bloated modules alongside missing industry-specific or regional business rules.",
  "Limited integration depth with legacy databases or internal proprietary tools.",
  "Product roadmap controlled externally by third-party software vendors.",
];

export const CUSTOM_PILLARS = [
  { title: "Tailored Functionality", text: "Software designed around your actual business processes and requirements." },
  { title: "Flexible Workflows", text: "Create workflows that match the way your organization operates." },
  { title: "Scalable Architecture", text: "Expand software functionality as your business grows." },
  { title: "Integration Capabilities", text: "Connect existing tools, systems, databases, and business applications." },
  { title: "Greater Control", text: "Manage software functionality and future improvements according to your needs." },
  { title: "Business-Focused Design", text: "Build interfaces and features around your team's daily operations." },
];

export const INDUSTRIES = [
  { name: "Healthcare", tag: "Clinical & Ops", text: "Patient management, appointment systems, healthcare portals, and operational software." },
  { name: "Manufacturing", tag: "Plant & Supply", text: "Production management, inventory tracking, operational dashboards, and workflow systems." },
  { name: "Retail & Ecommerce", tag: "Omnichannel", text: "Inventory management, order processing, customer management, and integrated business platforms." },
  { name: "Education", tag: "EdTech & Campus", text: "Learning platforms, student management, administration systems, and education portals." },
  { name: "Real Estate", tag: "Property & Sales", text: "Property listing portals, broker CRM systems, lease management, and client booking workflows." },
  { name: "Logistics & Transportation", tag: "Fleet & Dispatch", text: "Fleet management, shipment tracking, scheduling, and operational management." },
  { name: "Finance", tag: "FinOps & Advisory", text: "Billing engines, loan and portfolio administration, financial reporting dashboards, and client portals." },
  { name: "Hospitality", tag: "Reservations", text: "Reservation management, front-desk operations, guest portals, and vendor procurement software." },
  { name: "IT & Technology", tag: "SaaS & Platforms", text: "Multi-tenant SaaS products, API middleware, internal ticketing systems, and cloud control panels." },
  { name: "Professional Services", tag: "Client Delivery", text: "Project tracking, timesheet and billing automation, document collaboration, and client portals." },
  { name: "Startups", tag: "MVP & Scale", text: "Custom web applications, SaaS MVPs, scalable backend architecture, and rapid product iteration." },
  { name: "Enterprises", tag: "Multi-Unit", text: "Custom ERP modules, cross-department workflow automation, legacy modernization, and BI dashboards." },
];

export const PROCESS = [
  { title: "Discovery & Requirement Analysis", text: "We understand your business processes, challenges, goals, users, software requirements, and technical expectations." },
  { title: "Planning & Architecture", text: "We define the system architecture, functionality, technology stack, database structure, and development roadmap." },
  { title: "UI/UX & Prototyping", text: "We design intuitive interfaces, workflows, wireframes, and interactive prototypes." },
  { title: "Software Development", text: "Our team develops the software functionality, backend systems, frontend interfaces, integrations, and business logic." },
  { title: "Testing & Quality Assurance", text: "We test functionality, usability, security, performance, integrations, and reliability." },
  { title: "Deployment & Implementation", text: "We deploy the software, configure systems, and assist with implementation according to project requirements." },
  { title: "Maintenance & Continuous Improvement", text: "We provide ongoing support, updates, improvements, and feature enhancements." },
];

export const WHY = [
  { tag: "01 / STRATEGY", title: "Business-Driven Solutions", text: "We develop software around your business goals and operational requirements." },
  { tag: "02 / PRECISION", title: "Custom Development", text: "Our solutions are tailored to your workflows, features, and business processes." },
  { tag: "03 / ENGINEERING", title: "Modern Technology", text: "We use modern development technologies and reliable architecture." },
  { tag: "04 / GROWTH", title: "Scalable Solutions", text: "Software designed to accommodate future business growth." },
  { tag: "05 / ECOSYSTEM", title: "Integration Expertise", text: "Connect systems, platforms, and business tools through custom integrations." },
  { tag: "06 / USABILITY", title: "User-Friendly Interfaces", text: "We focus on intuitive interfaces that simplify complex operations." },
  { tag: "07 / CLARITY", title: "Transparent Development", text: "Clear communication and structured project workflows." },
  { tag: "08 / CONTINUITY", title: "Ongoing Support", text: "Technical assistance, updates, maintenance, and future improvements." },
];

export const SAFEGUARDS = [
  "Secure Authentication",
  "Role-Based Permissions",
  "Data Protection",
  "Database Optimization",
  "Scalable Architecture",
  "Performance Optimization",
  "API Security",
  "Error Monitoring",
  "Software Testing",
  "Backup Strategies",
  "Maintainable Code",
  "Infrastructure Planning",
];

export const MAINTENANCE_ITEMS = [
  "Bug Fixes",
  "Technical Support",
  "Software Updates",
  "Security Improvements",
  "Performance Optimization",
  "Feature Enhancements",
  "API Maintenance",
  "Database Maintenance",
  "System Upgrades",
  "Application Modernization",
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is custom software development?",
    a: "Custom software development is the process of designing, engineering, deploying, and maintaining software applications built specifically for an organization's unique workflows, operational rules, and business goals rather than relying on generic off-the-shelf software.",
  },
  {
    q: "How much does custom software development cost?",
    a: "Cost depends on the modules, user roles, integrations, and how much of the workflow is specific to the business. We review the requirements first and then share a scoped estimate. There is no single price that fits every custom software project.",
  },
  {
    q: "How long does it take to develop custom software?",
    a: "Timing depends on scope, the data involved, integrations, and how decisions are made during the project. A focused internal tool and a multi-department platform are different engagements. We outline a realistic schedule after discovery rather than quoting one duration for every build.",
  },
  {
    q: "What types of business software do you develop?",
    a: "We develop business management software, custom CRM and ERP systems, inventory and billing software, employee and HR management tools, sales tracking applications, customer portals, SaaS products, workflow automation systems, and software integrations.",
  },
  {
    q: "Do you develop enterprise software?",
    a: "Yes. We architect scalable, secure enterprise software solutions designed to unify multiple departments, enforce role-based access permissions, consolidate executive reporting, and integrate smoothly with existing corporate systems.",
  },
  {
    q: "Can you build web-based applications?",
    a: "Yes. We develop responsive, browser-based web applications including SaaS platforms, admin dashboards, customer and vendor portals, online booking platforms, and cloud-hosted operational tools accessible across desktop, tablet, and mobile browsers.",
  },
  {
    q: "Can you automate our business workflows?",
    a: "Yes. We build workflow management and process automation software for approvals, task routing, notifications, scheduling, and status tracking. What can update automatically depends on the systems and data in the project.",
  },
  {
    q: "Can you integrate our existing software?",
    a: "Yes. Using REST APIs, GraphQL, webhooks, and secure database connectors, we connect your existing CRM, ERP, accounting software, payment gateways, e-commerce platforms, and legacy applications to eliminate manual data entry.",
  },
  {
    q: "Which technologies do you use for software development?",
    a: "We work with React.js, Next.js, TypeScript, JavaScript, Node.js, .NET, C#, ASP.NET Core, Laravel, PHP, PostgreSQL, MySQL, MongoDB, SQL Server, REST/GraphQL APIs, and modern cloud hosting and CI/CD pipelines.",
  },
  {
    q: "Can you develop software for our specific industry?",
    a: "Yes. We develop tailored software solutions across healthcare, manufacturing, retail and e-commerce, education, real estate, logistics and transportation, finance, hospitality, IT, professional services, startups, and enterprises.",
  },
  {
    q: "Do you provide software maintenance and support?",
    a: "Yes. We provide ongoing maintenance and technical support including bug resolution, security improvements, database optimization, API maintenance, server updates, and new feature development as your operational needs grow.",
  },
  {
    q: "Can you upgrade or modernize existing software?",
    a: "Yes. We help organizations modernize outdated software by redesigning user interfaces, refactoring backend architecture, migrating databases, improving performance, and connecting legacy systems with modern cloud APIs.",
  },
  {
    q: "Will the software be scalable as our business grows?",
    a: "Yes. We design modular architectures with clean API layers and optimized database schemas so your application can smoothly accommodate additional users, branches, transactions, and future modules.",
  },
  {
    q: "Do you provide custom CRM and ERP solutions?",
    a: "Yes. We develop custom CRM and ERP systems tailored specifically to your sales pipeline, customer lifecycle, inventory workflows, billing rules, HR operations, and management reporting dashboards.",
  },
];
