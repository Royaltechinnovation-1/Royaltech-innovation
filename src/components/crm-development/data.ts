// Content model for the CRM Development landing page.
// All figures used in interface mockups are illustrative sample data.

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is CRM software development?",
    answer:
      "CRM software development is the process of planning, designing and building customer relationship management software around your business requirements. It can include lead and customer records, sales pipeline workflows, follow-up tasks, dashboards, integrations and user access tailored to the organisation.",
  },
  {
    question: "What is custom CRM development?",
    answer:
      "Custom CRM development means building CRM software around your sales processes, customer workflows and reporting needs instead of adapting a generic product. Scope can include custom modules, pipeline stages, automation, dashboards and integrations.",
  },
  {
    question: "What are CRM development services?",
    answer:
      "CRM development services cover requirements analysis, CRM architecture, module development, database design, integrations, interface design, testing, deployment and support. The exact scope depends on the features, workflows and business requirements agreed for the project.",
  },
  {
    question: "What is a customer relationship management system?",
    answer:
      "A customer relationship management system is software that organises customer and prospect information through connected modules. It helps centralise leads, customer records, sales activities, communication history and reporting across sales and service teams.",
  },
  {
    question: "Can you develop custom CRM software for my business?",
    answer:
      "Yes. We develop CRM software for businesses, from startups and small teams to enterprises. We first review your sales process, customer workflows and requirements, then plan the modules, interfaces and integrations that fit your business.",
  },
  {
    question: "What features can be included in a custom CRM?",
    answer:
      "A custom CRM can include customer database management, lead management, sales pipeline management, task and follow-up tracking, interaction history, dashboards, workflow automation, role-based access and integrations. Features are selected and designed around the workflows your teams need to manage.",
  },
  {
    question: "What is lead management software?",
    answer:
      "Lead management software helps businesses capture, organise, qualify and track prospects through the sales pipeline. It can support lead assignment, follow-up management, status tracking and conversion reporting.",
  },
  {
    question: "What is sales management software?",
    answer:
      "Sales management software helps organise sales activities, pipelines, opportunities, team tasks and performance reporting. It can support deal tracking, sales workflow automation, activity management and custom sales processes.",
  },
  {
    question: "Can CRM software manage leads and customers?",
    answer:
      "Yes. CRM software can keep lead and customer information in one system, with records, interaction history, pipeline stages and follow-up tasks. Access and visibility can be structured around user roles and team responsibilities.",
  },
  {
    question: "Can you integrate CRM with an existing website?",
    answer:
      "Yes. A CRM can be connected with a website so that enquiry and lead form submissions reach the right records or workflows. Integration scope depends on the website platform, available APIs, permissions and the agreed data flow.",
  },
  {
    question: "Can CRM be integrated with other business applications?",
    answer:
      "Yes. CRM software can connect with relevant business applications, databases, APIs, email systems, ERP software, marketing tools and support platforms where access and documentation are available. Integration scope is agreed during planning.",
  },
  {
    question: "Can you develop CRM dashboards?",
    answer:
      "Yes. We develop CRM dashboards that present relevant lead, sales, customer and activity information based on user roles and reporting requirements. Dashboards can cover pipeline views, conversion reports, team activity and custom KPIs.",
  },
  {
    question: "Can CRM automate follow-up tasks?",
    answer:
      "Yes. CRM workflow automation can create follow-up reminders, lead assignment rules, status updates and task notifications based on your processes. The exact rules and triggers are defined during requirements planning.",
  },
  {
    question: "What industries can use CRM software?",
    answer:
      "CRM software can be used by IT and technology companies, real estate businesses, retail and ecommerce teams, education institutions, healthcare organisations, manufacturers, logistics providers and professional service firms, among others.",
  },
  {
    question: "How much does custom CRM development cost?",
    answer:
      "Cost depends on the number of modules, user roles, workflow complexity, data migration, integrations, dashboards and support needs. We review the requirements first and then prepare an estimate aligned to the agreed scope.",
  },
  {
    question: "How long does CRM development take?",
    answer:
      "Timelines depend on feature complexity, workflow rules, data readiness, integrations, the number of interfaces and testing requirements. After discovery, we prepare a phased delivery plan with clear milestones.",
  },
  {
    question: "Can CRM software be customized according to business workflows?",
    answer:
      "Yes. Custom CRM development can shape pipeline stages, approvals, business rules, data structures, interfaces and reports around the workflows your teams already follow. The system can also remain organised and maintainable as requirements develop.",
  },
  {
    question: "Do you provide CRM maintenance and support?",
    answer:
      "Yes. We can support updates, troubleshooting, functionality changes, module enhancements, integrations and future CRM development according to the agreed maintenance scope.",
  },
  {
    question: "Can you migrate existing customer data into a CRM?",
    answer:
      "Yes. Existing customer, lead and interaction data can be reviewed, mapped and imported into the new CRM structure where source data is accessible. We plan field mapping, data cleanup and validation as part of the migration scope.",
  },
  {
    question: "What technologies are used for CRM development?",
    answer:
      "Technology choices depend on the project. A CRM system may include a responsive frontend, backend services, databases, APIs, cloud infrastructure and relevant integrations. We confirm the stack during consultation based on your requirements.",
  },
];

export const coreServices = [
  {
    id: "custom-crm-development",
    number: "01",
    category: "Custom CRM Development",
    title: "Custom CRM Development Tailored to Your Business",
    description:
      "We develop custom CRM software designed around your sales processes, customer workflows, team requirements and reporting needs. Our CRM development approach helps businesses centralise customer information, organise lead and sales activities, connect relevant modules and create software tailored to the way your teams work.",
    items: [
      "Custom CRM Software Development",
      "CRM Application Development",
      "Tailored CRM Solutions",
      "CRM Software for Businesses",
      "CRM Platform Development",
      "CRM Web Application Development",
      "CRM Dashboard Development",
      "CRM Workflow Customization",
      "Custom CRM Features",
      "CRM Database Development",
      "Business CRM Applications",
      "Scalable CRM Architecture",
    ],
    cta: "Build Your Custom CRM",
  },
  {
    id: "sales-management-systems",
    number: "02",
    category: "Sales Management Systems",
    title: "Manage Your Sales Pipeline With Better Visibility",
    description:
      "Sales management systems help businesses organise sales activities, manage pipelines, track opportunities, monitor team activities and review performance information. We develop sales management software tailored to sales processes, team structures, reporting requirements and business workflows.",
    items: [
      "Sales Management Software",
      "Sales CRM Development",
      "Sales Pipeline Management",
      "Deal Tracking Systems",
      "Sales Performance Dashboards",
      "Sales Team Management",
      "Sales Activity Management",
      "Opportunity Management",
      "Sales Reporting",
      "Sales Forecasting Applications",
      "Sales Workflow Automation",
      "Custom Sales Management Systems",
    ],
    cta: "Develop Your Sales Management System",
  },
  {
    id: "lead-management-systems",
    number: "03",
    category: "Lead Management Systems",
    title: "Capture, Track, and Manage Leads More Efficiently",
    description:
      "Lead management systems help businesses capture enquiries, organise prospect information, qualify leads, manage assignments and track follow-up activities. We develop lead management software tailored to lead sources, qualification rules, sales workflows and conversion reporting needs.",
    items: [
      "Lead Management Software",
      "Lead Tracking Systems",
      "Lead Capture Applications",
      "Lead Qualification Systems",
      "Lead Assignment",
      "Lead Follow-Up Management",
      "Lead Pipeline Management",
      "Lead Conversion Tracking",
      "Lead Status Management",
      "Sales Lead Management",
      "Lead Management Dashboards",
      "Custom Lead Management Solutions",
    ],
    cta: "Build Your Lead Management System",
  },
  {
    id: "customer-management-systems",
    number: "04",
    category: "Customer Management Systems",
    title: "Build Better Customer Relationships With Centralized Management",
    description:
      "Customer management systems help businesses organise customer records, profile information, communication history, service activities and customer lifecycle information. We develop customer management applications tailored to customer workflows, team requirements, data structures and reporting needs.",
    items: [
      "Customer Management Software",
      "Customer Database Systems",
      "Customer Relationship Management",
      "Customer Profiles",
      "Customer Interaction Tracking",
      "Customer Communication History",
      "Customer Activity Management",
      "Customer Lifecycle Management",
      "Customer Service Management",
      "Customer Information Systems",
      "Customer Management Dashboards",
      "Custom Customer Management Applications",
    ],
    cta: "Develop Your Customer Management System",
  },
  {
    id: "crm-integration",
    number: "05",
    category: "CRM Integration",
    title: "Connect Your CRM With the Business Tools You Already Use",
    description:
      "CRM integration connects your CRM with the applications, websites, databases and platforms already used in your business. We develop integrations around available APIs, permissions, data flows and agreed requirements to support connected sales, marketing and customer workflows.",
    items: [
      "CRM API Integration",
      "CRM Software Integration",
      "Website CRM Integration",
      "Lead Form Integration",
      "Email Integration",
      "Business Application Integration",
      "Database Integration",
      "Third-Party CRM Integration",
      "Sales Software Integration",
      "Marketing Integration",
      "CRM Data Synchronization",
      "Custom CRM Integrations",
    ],
    cta: "Connect Your Business Systems",
  },
] as const;

export const features = [
  {
    id: "customer-database-management",
    title: "Customer Database Management",
    text: "Keep customer records, contact details, account information and related notes organised in one central database. Customer information can be structured around the fields and relationships your teams use.",
    metric: "Customer records",
  },
  {
    id: "lead-management",
    title: "Lead Management",
    text: "Capture leads from relevant sources, organise prospect information and track qualification and status through the pipeline. Lead records can be assigned and updated as your process moves forward.",
    metric: "Lead records",
  },
  {
    id: "sales-pipeline-management",
    title: "Sales Pipeline Management",
    text: "Manage opportunities through defined pipeline stages with deal information, expected value and responsible owners. Stage changes and activity updates can be reflected in pipeline views and reports.",
    metric: "Pipeline stages",
  },
  {
    id: "task-follow-up-management",
    title: "Task & Follow-Up Management",
    text: "Plan follow-up tasks, reminders and activities against leads, opportunities and customer records. Task ownership and due dates can be configured around the way your sales and service teams work.",
    metric: "Follow-up tasks",
  },
  {
    id: "customer-interaction-tracking",
    title: "Customer Interaction Tracking",
    text: "Record calls, emails, meetings and other interactions against the relevant customer or lead record. A shared activity history helps teams understand previous conversations and next steps.",
    metric: "Interactions logged",
  },
  {
    id: "crm-analytics-reporting",
    title: "CRM Analytics & Reporting",
    text: "Build dashboards and reports around lead conversion, sales activity, pipeline movement and customer information. Metrics and views can be defined to match the requirements of different user roles.",
    metric: "CRM reports",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    text: "Define rules that handle lead assignment, status updates, follow-up reminders and routine CRM tasks. Workflows are configured around the business processes agreed during planning.",
    metric: "Workflow rules",
  },
  {
    id: "role-based-access",
    title: "Role-Based Access",
    text: "Give users access to the records, modules and actions relevant to their responsibilities. Permissions and visibility can be structured for sales teams, managers, service staff and administrators.",
    metric: "User roles",
  },
  {
    id: "custom-crm-modules",
    title: "Custom CRM Modules",
    text: "Add modules and fields tailored to specific business processes, industry requirements or team structures. Custom functionality can be planned alongside standard CRM features.",
    metric: "Custom modules",
  },
  {
    id: "crm-integration",
    title: "CRM Integration",
    text: "Connect the CRM with websites, email, databases, ERP systems and other business applications where access and APIs are available. Integration scope is agreed around the data flows your business needs.",
    metric: "Connected apps",
  },
] as const;

export const environments = [
  {
    id: "sales-crm",
    label: "Sales CRM",
    title: "Sales CRM Software for Growing Teams",
    text: "Pipeline management, opportunity tracking, sales activities, team tasks, performance dashboards and sales reporting in one application.",
    dashboard: "Sales pipeline overview",
  },
  {
    id: "lead-crm",
    label: "Lead Management CRM",
    title: "Lead Management CRM for Enquiry Handling",
    text: "Lead capture, qualification, assignment, follow-up tracking, status management and conversion reporting across your sales process.",
    dashboard: "Lead pipeline dashboard",
  },
  {
    id: "relationship-crm",
    label: "Customer Relationship CRM",
    title: "Customer Relationship CRM for Centralised Records",
    text: "Customer profiles, communication history, interaction tracking, lifecycle information and relationship management workflows.",
    dashboard: "Customer relationship view",
  },
  {
    id: "service-crm",
    label: "Service CRM",
    title: "Service CRM for Customer Support Workflows",
    text: "Customer service requests, support activities, follow-up tasks, communication history and service reporting connected to customer records.",
    dashboard: "Customer service console",
  },
  {
    id: "business-crm",
    label: "Business CRM",
    title: "Business CRM for Connected Customer Operations",
    text: "Leads, customers, sales activities, workflows, dashboards and integrations organised around your business requirements.",
    dashboard: "Business CRM workspace",
  },
  {
    id: "custom-crm",
    label: "Custom CRM",
    title: "Custom CRM for Specific Business Requirements",
    text: "Custom modules, fields, pipeline stages, workflows, dashboards and integrations tailored to the way your organisation works.",
    dashboard: "Configurable CRM workspace",
  },
] as const;

export const workflowSteps = [
  {
    number: "01",
    title: "Lead Capture",
    text: "Collect enquiries from website forms, campaigns, manual entry and connected sources into the CRM. Lead information can be captured with the fields relevant to your qualification process.",
    visual: "capture",
  },
  {
    number: "02",
    title: "Lead Organization",
    text: "Structure lead records, contact information, source details and custom fields so prospects are easy to review and update. Duplicate and incomplete records can be reviewed as part of data management.",
    visual: "organize",
  },
  {
    number: "03",
    title: "Lead Assignment",
    text: "Route leads to the right sales owner or team based on agreed rules such as source, region or product interest. Assignment helps make sure follow-up responsibility is clear.",
    visual: "assign",
  },
  {
    number: "04",
    title: "Sales Follow-Up",
    text: "Schedule calls, emails, meetings and reminders against lead and opportunity records. Follow-up activities and outcomes can be recorded against the customer timeline.",
    visual: "followup",
  },
  {
    number: "05",
    title: "Opportunity Management",
    text: "Move qualified leads into defined pipeline stages with deal details, owners and expected value. Stage updates help teams review active opportunities and prioritise work.",
    visual: "opportunity",
  },
  {
    number: "06",
    title: "Customer Conversion",
    text: "Convert successful opportunities into customer records with the relevant account, contact and activity information. The handover can be structured around the workflows your teams follow.",
    visual: "conversion",
  },
  {
    number: "07",
    title: "Customer Relationship Management",
    text: "Maintain customer profiles, communication history, service activities and ongoing interactions in one place. Teams can review previous conversations and plan the next engagement.",
    visual: "relationship",
  },
  {
    number: "08",
    title: "Analytics & Reporting",
    text: "Review lead conversion, sales performance, pipeline movement and customer activity through dashboards and reports. Reporting views can be tailored to different roles and management requirements.",
    visual: "analytics",
  },
] as const;

export const analyticsItems = [
  "CRM Dashboard Development",
  "Sales Analytics",
  "Lead Analytics",
  "Customer Analytics",
  "Sales Pipeline Reports",
  "Lead Conversion Reports",
  "Sales Performance Reports",
  "Customer Activity Reports",
  "CRM KPI Monitoring",
  "Custom CRM Reports",
  "Business Performance Dashboards",
  "CRM Data Visualization",
] as const;

export const automationItems = [
  "CRM Workflow Automation",
  "Automated Lead Assignment",
  "Follow-Up Reminders",
  "Lead Status Workflows",
  "Sales Workflow Automation",
  "Task Automation",
  "Customer Notification Workflows",
  "CRM Process Automation",
  "Business Workflow Integration",
  "Custom CRM Automation",
  "Automated Customer Activities",
  "CRM Workflow Development",
] as const;

export const integrationItems = [
  "Website Integration",
  "Lead Form Integration",
  "Email Integration",
  "API Integration",
  "Database Integration",
  "Business Application Integration",
  "Marketing Integration",
  "Sales Integration",
  "Customer Communication Integration",
  "Third-Party Platform Integration",
  "CRM Data Synchronization",
  "Custom CRM Integration",
] as const;

export const industries = [
  { name: "IT & Technology", icon: "technology", text: "Track software enquiries, manage sales pipelines, organise client communications and maintain customer records for technology businesses." },
  { name: "Real Estate", icon: "realestate", text: "Manage property enquiries, track site visits, organise client records and follow up on leads across projects." },
  { name: "Ecommerce & Retail", icon: "retail", text: "Capture online enquiries, manage customer profiles, track purchase interactions and support retention workflows for retail businesses." },
  { name: "Education", icon: "education", text: "Handle admission enquiries, manage student and parent records, track follow-ups and organise communication history for institutions." },
  { name: "Healthcare", icon: "healthcare", text: "Organise patient enquiries, appointments and communication records with access and data handling designed around applicable privacy requirements." },
  { name: "Manufacturing", icon: "manufacturing", text: "Manage distributor and buyer enquiries, track sales opportunities, organise customer records and support order-related follow-ups." },
  { name: "Logistics", icon: "logistics", text: "Track client enquiries, manage service opportunities, organise shipper and consignee records and follow up on customer requests." },
  { name: "Professional Services", icon: "services", text: "Manage client enquiries, track proposals and engagements, record interactions and organise long-term client relationships." },
  { name: "Financial Services", icon: "financial", text: "Organise client enquiries, manage advisory pipelines, record interactions and maintain customer records with access controls suited to sensitive information." },
  { name: "Hospitality", icon: "hospitality", text: "Capture booking and event enquiries, manage guest records, track interactions and organise follow-ups for repeat business." },
  { name: "Startups", icon: "startup", text: "Use flexible lead, customer and pipeline management that can adapt as sales processes and teams develop." },
  { name: "Small & Medium Businesses", icon: "smb", text: "Keep leads, customer records, sales activities and follow-ups organised in one practical system for growing teams." },
  { name: "Enterprises", icon: "enterprise", text: "Structure customer information, role-based access, sales workflows, reporting and integration with existing business systems across teams." },
] as const;

export const whyChoose = [
  {
    number: "01",
    title: "Customized CRM Development",
    text: "CRM functionality designed around your sales processes, customer workflows, team structure and management requirements.",
  },
  {
    number: "02",
    title: "Business-Focused Architecture",
    text: "We plan CRM systems around customer processes, team activities, software functionality and technical requirements.",
  },
  {
    number: "03",
    title: "Scalable Development",
    text: "We consider maintainability, future requirements, architecture, functionality and business growth.",
  },
  {
    number: "04",
    title: "CRM Integration",
    text: "We develop integrations connecting CRM systems with relevant applications, databases, APIs, platforms and business tools.",
  },
  {
    number: "05",
    title: "User-Friendly Interfaces",
    text: "We focus on usability, organised information, intuitive navigation, dashboards, responsive interfaces and practical software experiences.",
  },
  {
    number: "06",
    title: "Data Management",
    text: "We structure lead, customer and interaction data with appropriate fields, records, validation and organisation.",
  },
  {
    number: "07",
    title: "End-to-End Development",
    text: "We support planning, design, development, testing, integration, deployment and maintenance according to project scope.",
  },
  {
    number: "08",
    title: "Ongoing Support",
    text: "We can support updates, troubleshooting, functionality changes and future CRM development under the agreed maintenance scope.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    text: "Understand business objectives, sales teams, customer processes, CRM requirements, workflows and business challenges.",
    visual: "discovery",
  },
  {
    number: "02",
    title: "Requirement Analysis",
    text: "Define CRM modules, functionality, user roles, pipeline stages, data requirements, integrations and project scope.",
    visual: "requirements",
  },
  {
    number: "03",
    title: "CRM Strategy & Architecture",
    text: "Plan CRM architecture, modules, database structure, integrations, technical requirements, business logic and application structure.",
    visual: "architecture",
  },
  {
    number: "04",
    title: "UI/UX Design",
    text: "Design CRM interfaces, dashboards, module navigation, workflows, management screens and responsive layouts.",
    visual: "design",
  },
  {
    number: "05",
    title: "CRM Development",
    text: "Develop CRM modules, business logic, customer functionality, data management, integrations and relevant workflows.",
    visual: "development",
  },
  {
    number: "06",
    title: "Testing & Quality Assurance",
    text: "Test CRM functionality, module integration, workflows, data management, application performance, responsiveness and user access.",
    visual: "testing",
  },
  {
    number: "07",
    title: "Deployment & Integration",
    text: "Deploy and integrate the CRM system into the relevant business environment according to project requirements.",
    visual: "deployment",
  },
  {
    number: "08",
    title: "Maintenance & Support",
    text: "Support updates, functionality enhancements, maintenance, troubleshooting and future CRM development according to requirements.",
    visual: "support",
  },
] as const;

export const technologyGroups = [
  {
    title: "Frontend Development",
    note: "Responsive CRM interfaces, sales dashboards, customer portals, management screens and module interfaces.",
    items: ["Responsive interfaces", "CRM dashboards", "Customer portals", "Module screens"],
  },
  {
    title: "Backend Development",
    note: "Business logic, CRM modules, workflows, APIs, data processing and application services.",
    items: ["Business logic", "CRM modules", "Workflow services", "Application APIs"],
  },
  {
    title: "Database Architecture",
    note: "Customer records, lead information, sales activities, interaction history and structured data management.",
    items: ["Customer records", "Lead information", "Activity data", "Interaction history"],
  },
  {
    title: "API & Integrations",
    note: "CRM integration, business system connectivity, application APIs, data synchronization and third-party integrations.",
    items: ["CRM APIs", "System connectivity", "Data synchronization", "Third-party apps"],
  },
  {
    title: "Cloud & Deployment",
    note: "Deployment architecture, hosting, application availability, maintenance, infrastructure and business requirements.",
    items: ["Deployment planning", "Application hosting", "Infrastructure", "Maintenance"],
  },
  {
    title: "Security & Access",
    note: "Authentication, permissions, role-based access, application security and data handling according to project requirements.",
    items: ["Authentication", "User roles", "Permissions", "Data handling"],
  },
] as const;

export const securityItems = [
  "User Authentication",
  "Role-Based Access",
  "Permissions Management",
  "Customer Data Management",
  "Database Architecture",
  "Data Validation",
  "Secure API Architecture",
  "Application Security Testing",
  "Data Backup Planning where supported",
  "CRM Data Organization",
  "Access Management",
  "Data Handling Considerations",
] as const;

export const benefits = [
  { title: "Centralized Customer Information", text: "Keep customer records, contact details and module information organised in one application." },
  { title: "Connected CRM Modules", text: "Connect leads, customers, sales activities and service workflows through relevant processes." },
  { title: "Organized Sales Workflows", text: "Structure pipeline stages, tasks, approvals and team activities within the CRM system." },
  { title: "Lead Visibility", text: "Maintain lead records, source information, qualification status and conversion reports." },
  { title: "Customer Management", text: "Organise customer profiles, account records and communication history." },
  { title: "Pipeline Management", text: "Review opportunities, deal information and stage movement through structured pipeline views." },
  { title: "Task & Follow-Up Management", text: "Plan reminders, activities and follow-up tasks against leads and customer records." },
  { title: "Customer Interaction Tracking", text: "Record calls, emails, meetings and interactions against the relevant customer timeline." },
  { title: "CRM Reporting", text: "Present sales, lead and customer information through dashboards, reports and metrics." },
  { title: "Activity Monitoring", text: "Review relevant team activities and customer interactions through structured dashboards." },
  { title: "Process Management", text: "Define workflows and business rules that match the way your sales and service teams operate." },
  { title: "Custom CRM Functionality", text: "Add functionality tailored to specific teams, processes and management requirements." },
] as const;

export const relatedLinks = [
  { href: "/services/software-development", label: "Custom Software Development", note: "Tailored business applications and connected software systems" },
  { href: "/services/erp-solutions", label: "ERP Solutions", note: "Connected business modules for finance, inventory and operations" },
  { href: "/services/website-development", label: "Website Development", note: "Business websites, portals and lead capture pages" },
  { href: "/services/ecommerce-development", label: "Ecommerce Development", note: "Online stores, customer accounts and order workflows" },
  { href: "/services/mobile-app-development", label: "Mobile App Development", note: "CRM access and customer tools for mobile teams" },
  { href: "/services#ai-agents", label: "AI Agents & Workflow Automation", note: "Automated customer tasks and operational processes" },
  { href: "/services#ai-chatbots", label: "AI Chatbots & Virtual Assistants", note: "Website enquiry handling and customer assistance" },
  { href: "/services#ai-integration", label: "AI Integration & API Solutions", note: "Connected business services and application APIs" },
  { href: "/services#ai-bi", label: "AI-Powered Business Intelligence", note: "CRM dashboards, reporting and business insights" },
  { href: "/services/it-consulting", label: "IT Consulting", note: "Technology planning and CRM guidance" },
  { href: "/services/digital-marketing", label: "Digital Marketing", note: "Lead generation and customer acquisition support" },
] as const;
