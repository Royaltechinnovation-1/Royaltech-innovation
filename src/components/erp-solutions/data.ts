// Content model for the ERP Solutions landing page.
// All figures used in interface mockups are illustrative sample data.

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is ERP software development?",
    answer:
      "ERP software development is the process of planning, designing and building enterprise resource planning software around business requirements. It can include connected modules for inventory, finance, HR, procurement, sales, operations and reporting, along with integrations and user access tailored to the organization.",
  },
  {
    question: "What is an Enterprise Resource Planning system?",
    answer:
      "An Enterprise Resource Planning system is business software that organizes core operations through connected modules. It helps centralize information, structure workflows and provide relevant business reporting across departments such as inventory, finance, human resources and procurement.",
  },
  {
    question: "What are ERP development services?",
    answer:
      "ERP development services cover requirements analysis, ERP architecture, module development, database design, integrations, interface design, testing, deployment and support. The exact scope depends on the modules, workflows and business requirements agreed for the project.",
  },
  {
    question: "What is custom ERP development?",
    answer:
      "Custom ERP development means building ERP software around your business processes, departmental structure, operational requirements and management needs instead of adapting a generic product. Scope can include custom modules, workflows, dashboards, integrations and reporting.",
  },
  {
    question: "Can you develop ERP software for my business?",
    answer:
      "Yes. We develop ERP software for businesses, from small and medium organizations to enterprises. We first review your departments, processes and requirements, then plan the modules, interfaces and integrations that fit your business.",
  },
  {
    question: "What modules can be included in a custom ERP system?",
    answer:
      "A custom ERP system can include modules for inventory management, HR management, finance management, procurement, sales, supply chain, operations and business reporting. Modules are selected and designed around the workflows your business needs to manage.",
  },
  {
    question: "What is inventory management software?",
    answer:
      "Inventory management software helps businesses organize product records, stock information, inventory movement, warehouse activities and inventory reporting. It can support stock monitoring, product management and multi-warehouse workflows.",
  },
  {
    question: "What is an HR management system?",
    answer:
      "An HR management system organizes employee information and HR activities such as employee records, attendance, leave management, onboarding, workforce information and HR reporting, according to the processes your organization follows.",
  },
  {
    question: "What is finance management software?",
    answer:
      "Finance management software helps organize financial information, business transactions, expenses, invoices, budgets and financial reporting. It can be connected with other ERP modules and relevant accounting or payment systems where applicable.",
  },
  {
    question: "What is supply chain management software?",
    answer:
      "Supply chain management software supports procurement, supplier information, purchase orders, inventory coordination, order management, logistics information and supply chain reporting through connected business workflows.",
  },
  {
    question: "Can ERP integrate with existing business applications?",
    answer:
      "Yes. ERP software can connect with relevant business applications, databases, APIs, CRM systems, ecommerce platforms, accounting tools and operational systems where access, documentation and permissions are available. Integration scope is agreed during planning.",
  },
  {
    question: "Can you develop ERP dashboards?",
    answer:
      "Yes. We develop ERP dashboards that present relevant business information, operational metrics, inventory data, finance information, HR overviews and management reports based on user roles and reporting requirements.",
  },
  {
    question: "Can ERP software manage multiple departments?",
    answer:
      "Yes. ERP software can be structured around multiple departments, with connected modules and role-based interfaces for operations such as inventory, finance, HR, procurement, sales and supply chain management.",
  },
  {
    question: "Can ERP software be customized according to business workflows?",
    answer:
      "Yes. Custom ERP development can shape modules, approvals, business rules, data structures, interfaces and reports around the workflows your teams already follow, while keeping the system organized and maintainable.",
  },
  {
    question: "What industries can use ERP software?",
    answer:
      "ERP software can be used by manufacturing companies, retail and ecommerce businesses, logistics providers, healthcare organizations, education institutions, construction firms, wholesalers, technology companies and professional service businesses, among others.",
  },
  {
    question: "How much does custom ERP development cost?",
    answer:
      "Cost depends on the number of modules, user roles, workflow complexity, data migration, integrations, reporting requirements and support needs. We review the requirements first and then prepare an estimate aligned to the agreed scope.",
  },
  {
    question: "How long does ERP software development take?",
    answer:
      "Timelines depend on module complexity, business rules, data readiness, integrations, the number of interfaces and testing requirements. After discovery, we prepare a phased delivery plan with clear milestones.",
  },
  {
    question: "Can ERP software integrate with CRM?",
    answer:
      "Yes. ERP and CRM systems can be connected to share relevant customer, order, sales and business information, depending on the applications involved and the agreed integration approach.",
  },
  {
    question: "Do you provide ERP maintenance and support?",
    answer:
      "Yes. We can support updates, troubleshooting, functionality changes, module enhancements, integrations and future ERP development according to the agreed maintenance scope.",
  },
  {
    question: "What technologies are used for ERP development?",
    answer:
      "Technology choices depend on the project. An ERP system may include a responsive frontend, backend services, databases, APIs, cloud infrastructure and relevant integrations. We confirm the stack during consultation based on your requirements.",
  },
];

export const coreServices = [
  {
    id: "custom-erp-development",
    number: "01",
    category: "Custom ERP Development",
    title: "Custom ERP Software Development Tailored to Your Business",
    description:
      "We develop custom ERP software designed around your business processes, operational requirements, management workflows, industry needs, and organizational structure. Our ERP development approach helps businesses centralize relevant operations, connect business modules, organize information, and create software solutions tailored to their requirements.",
    items: [
      "Custom ERP Software Development",
      "ERP Application Development",
      "Enterprise Resource Planning Software",
      "Custom ERP Solutions",
      "ERP System Development",
      "ERP Web Application Development",
      "ERP Software for Businesses",
      "ERP Module Development",
      "Business Management Software",
      "ERP Workflow Customization",
      "ERP Dashboard Development",
      "Scalable ERP Architecture",
    ],
    cta: "Build Your Custom ERP",
  },
  {
    id: "inventory-management",
    number: "02",
    category: "Inventory Management",
    title: "Manage Inventory, Stock, and Business Resources More Efficiently",
    description:
      "Inventory management systems help businesses organize stock information, monitor inventory movement, manage warehouse activities, track product availability, and support inventory-related business processes. We develop inventory management software tailored to product structures, stock workflows, warehouse requirements, business operations, and reporting needs.",
    items: [
      "Inventory Management Software",
      "Inventory Management Systems",
      "Stock Management Software",
      "Warehouse Management Applications",
      "Inventory Tracking Systems",
      "Stock Monitoring",
      "Product Management",
      "Inventory Reporting",
      "Stock Movement Tracking",
      "Inventory Control Systems",
      "Multi-Warehouse Inventory Management",
      "Custom Inventory Solutions",
    ],
    cta: "Develop Your Inventory Management System",
  },
  {
    id: "hr-management-systems",
    number: "03",
    category: "HR Management Systems",
    title: "Organize Your Workforce With Integrated HR Management Software",
    description:
      "HR management systems help businesses organize employee information, manage HR activities, streamline administrative workflows, maintain employee records, and support workforce management processes. We develop HR management applications tailored to organizational structure, employee management requirements, HR workflows, and business operations.",
    items: [
      "HR Management Software",
      "Human Resource Management Systems",
      "Employee Management Software",
      "Employee Database Management",
      "Employee Records",
      "Attendance Management",
      "Leave Management",
      "Workforce Management",
      "Employee Onboarding",
      "HR Reporting",
      "Payroll Integration where applicable",
      "Custom HR Management Solutions",
    ],
    cta: "Build Your HR Management System",
  },
  {
    id: "finance-management-systems",
    number: "04",
    category: "Finance Management Systems",
    title: "Manage Financial Operations Through Connected Business Systems",
    description:
      "Finance management systems help businesses organize financial information, manage business transactions, monitor expenses, support accounting workflows, and access financial reporting. We develop finance management applications tailored to financial workflows, business requirements, reporting needs, operational processes, and relevant integrations.",
    items: [
      "Finance Management Software",
      "Financial Management Systems",
      "Expense Management",
      "Financial Reporting",
      "Budget Management",
      "Invoice Management",
      "Accounts Management",
      "Financial Dashboard Development",
      "Revenue Tracking",
      "Business Expense Tracking",
      "Financial Data Management",
      "Custom Finance Management Solutions",
    ],
    cta: "Develop Your Finance Management System",
  },
  {
    id: "supply-chain-management",
    number: "05",
    category: "Supply Chain Management",
    title: "Connect Supply Chain Operations Across Your Business",
    description:
      "Supply chain management systems help businesses organize procurement, suppliers, inventory movement, order processing, logistics information, and relevant operational workflows. We develop supply chain management solutions tailored to business requirements, procurement workflows, supply chain operations, inventory processes, and integration needs.",
    items: [
      "Supply Chain Management Software",
      "Supply Chain Management Systems",
      "Procurement Management",
      "Supplier Management",
      "Purchase Order Management",
      "Order Management",
      "Supply Chain Tracking",
      "Logistics Management",
      "Inventory Coordination",
      "Supply Chain Reporting",
      "Procurement Workflow Management",
      "Custom Supply Chain Solutions",
    ],
    cta: "Build Your Supply Chain Management System",
  },
] as const;

export const features = [
  {
    id: "centralized-business-management",
    title: "Centralized Business Management",
    text: "Organize relevant business information, processes, modules, and operational workflows within a connected ERP environment.",
    metric: "Business records",
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    text: "Manage product records, stock information, inventory movement, warehouse workflows, and inventory reporting.",
    metric: "Stock records",
  },
  {
    id: "hr-management",
    title: "HR Management",
    text: "Organize employee records, HR workflows, attendance, leave management, employee activities, and workforce information.",
    metric: "Employee records",
  },
  {
    id: "finance-management",
    title: "Finance Management",
    text: "Support financial information management, expense workflows, invoices, business reporting, and finance-related processes.",
    metric: "Financial records",
  },
  {
    id: "procurement-management",
    title: "Procurement Management",
    text: "Manage procurement activities, supplier information, purchase orders, purchasing workflows, and relevant business processes.",
    metric: "Purchase records",
  },
  {
    id: "sales-management",
    title: "Sales Management",
    text: "Organize sales information, customer records, order workflows, sales activities, and business reporting.",
    metric: "Sales records",
  },
  {
    id: "supply-chain-management",
    title: "Supply Chain Management",
    text: "Support procurement, inventory coordination, supplier workflows, order management, logistics information, and supply chain reporting.",
    metric: "Supply workflows",
  },
  {
    id: "business-reporting",
    title: "Business Reporting",
    text: "Create relevant reports, dashboards, business metrics, operational summaries, and performance visualizations.",
    metric: "Business reports",
  },
  {
    id: "workflow-management",
    title: "Workflow Management",
    text: "Develop business workflows, process management functionality, operational task management, and relevant automation according to business requirements.",
    metric: "Workflow rules",
  },
  {
    id: "erp-integration",
    title: "ERP Integration",
    text: "Connect relevant business systems, applications, APIs, databases, and operational platforms.",
    metric: "Connected apps",
  },
] as const;

export const environments = [
  {
    id: "manufacturing-erp",
    label: "Manufacturing ERP",
    title: "ERP Software for Manufacturing Operations",
    text: "Production-related workflows, inventory management, procurement, operational reporting, business information, and relevant manufacturing processes.",
    dashboard: "Production operations overview",
  },
  {
    id: "inventory-erp",
    label: "Inventory ERP",
    title: "Inventory Management ERP Software",
    text: "Stock management, product records, warehouse workflows, inventory reporting, and stock movement across business locations.",
    dashboard: "Inventory control dashboard",
  },
  {
    id: "hr-erp",
    label: "HR ERP",
    title: "HR Management ERP Systems",
    text: "Employee management, HR records, attendance, leave, workforce information, and HR workflows in one application.",
    dashboard: "Workforce overview",
  },
  {
    id: "finance-erp",
    label: "Finance ERP",
    title: "Finance Management ERP Solutions",
    text: "Financial information, expense management, invoice workflows, reporting, and financial operations connected to business processes.",
    dashboard: "Financial performance console",
  },
  {
    id: "supply-chain-erp",
    label: "Supply Chain ERP",
    title: "Supply Chain Management ERP Software",
    text: "Procurement, suppliers, inventory coordination, order management, logistics workflows, and operational reporting.",
    dashboard: "Supply chain operations view",
  },
  {
    id: "custom-business-erp",
    label: "Custom Business ERP",
    title: "Custom ERP for Specific Business Requirements",
    text: "Custom modules, connected business operations, workflow management, business information, and ERP functionality tailored to specific requirements.",
    dashboard: "Configurable business workspace",
  },
] as const;

export const workflowSteps = [
  {
    number: "01",
    title: "Business Data Collection",
    text: "Collect relevant information from business departments, applications, operational systems, and data sources.",
    visual: "data",
  },
  {
    number: "02",
    title: "Centralized Information Management",
    text: "Organize business information through appropriate ERP modules, records, data structures, and business workflows.",
    visual: "central",
  },
  {
    number: "03",
    title: "Module Integration",
    text: "Connect relevant business functions such as inventory, finance, HR, procurement, sales, and operations.",
    visual: "modules",
  },
  {
    number: "04",
    title: "Process Management",
    text: "Support business workflows, operational activities, transactions, approvals, and process requirements.",
    visual: "process",
  },
  {
    number: "05",
    title: "Data Processing",
    text: "Process relevant information according to ERP functionality, business rules, and operational requirements.",
    visual: "processing",
  },
  {
    number: "06",
    title: "Business Reporting",
    text: "Present relevant business information through dashboards, reports, metrics, and operational summaries.",
    visual: "report",
  },
  {
    number: "07",
    title: "Management Visibility",
    text: "Provide relevant information to support business monitoring, operational management, and decision-making.",
    visual: "visibility",
  },
] as const;

export const analyticsItems = [
  "ERP Dashboard Development",
  "Business Performance Dashboards",
  "Inventory Analytics",
  "Finance Dashboards",
  "HR Dashboards",
  "Supply Chain Dashboards",
  "Operational Analytics",
  "Business KPI Monitoring",
  "ERP Reporting",
  "Management Reports",
  "Data Visualization",
  "Custom ERP Analytics",
] as const;

export const processItems = [
  "ERP Workflow Development",
  "Business Process Management",
  "Approval Workflow Management",
  "Procurement Workflows",
  "Inventory Workflows",
  "HR Workflows",
  "Finance Workflows",
  "Operational Workflow Management",
  "Business Process Automation",
  "ERP Process Customization",
  "ERP Workflow Integration",
  "Custom ERP Automation",
] as const;

export const integrationItems = [
  "ERP API Integration",
  "ERP Software Integration",
  "CRM Integration",
  "Ecommerce Integration",
  "Website Integration",
  "Database Integration",
  "Accounting Integration",
  "Inventory Integration",
  "HR Integration",
  "Business Application Integration",
  "Third-Party ERP Integration",
  "ERP Data Synchronization",
] as const;

export const industries = [
  { name: "Manufacturing", icon: "manufacturing", text: "Inventory management, production workflows, procurement, operational reporting, resource management, and relevant manufacturing processes." },
  { name: "Ecommerce & Retail", icon: "retail", text: "Inventory, product information, sales operations, order management, reporting, and business workflows for online and retail businesses." },
  { name: "Logistics", icon: "logistics", text: "Supply chain workflows, procurement, inventory coordination, order management, logistics information, and operational reporting." },
  { name: "Healthcare", icon: "healthcare", text: "Administrative ERP workflows, workforce management, financial operations, inventory, and reporting subject to applicable privacy requirements." },
  { name: "Education", icon: "education", text: "Administrative management, employee records, finance, procurement, operational information, and business reporting for institutions." },
  { name: "Real Estate", icon: "realestate", text: "Property information, client records, financial workflows, procurement, administrative operations, and management reporting." },
  { name: "IT & Technology", icon: "technology", text: "Business management, finance, employee management, procurement, operations, and reporting for technology organizations." },
  { name: "Construction", icon: "construction", text: "Resource management, procurement, financial workflows, project-related operations, inventory, and reporting." },
  { name: "Wholesale & Distribution", icon: "distribution", text: "Inventory management, purchasing, suppliers, order management, stock workflows, and business analytics." },
  { name: "Professional Services", icon: "services", text: "Client information, employee management, finance, operational workflows, resource information, and business reporting." },
  { name: "Hospitality", icon: "hospitality", text: "Inventory, procurement, workforce management, financial operations, administrative workflows, and reporting." },
  { name: "Startups", icon: "startup", text: "Flexible ERP modules, business information, finance, inventory and workflow management that can develop with the organization." },
  { name: "Small & Medium Businesses", icon: "business", text: "Practical ERP functionality for growing operations, including inventory, finance, HR, procurement and reporting." },
  { name: "Enterprises", icon: "enterprise", text: "Structured ERP architecture, connected modules, role-based access, operational reporting and integration with business systems." },
] as const;

export const whyChoose = [
  {
    number: "01",
    title: "Customized ERP Development",
    text: "ERP functionality designed around business workflows, operational requirements, departmental structure, and management needs.",
  },
  {
    number: "02",
    title: "Business-Focused Architecture",
    text: "We plan ERP systems around business processes, organizational structure, operational activities, software functionality, and technical requirements.",
  },
  {
    number: "03",
    title: "Integrated ERP Modules",
    text: "Develop connected modules for inventory, finance, HR, procurement, sales, operations, and other relevant business requirements.",
  },
  {
    number: "04",
    title: "Scalable Development",
    text: "We consider maintainability, future requirements, architecture, functionality, and business growth.",
  },
  {
    number: "05",
    title: "ERP Integration",
    text: "We develop integrations connecting ERP systems with relevant applications, databases, APIs, platforms, and business tools.",
  },
  {
    number: "06",
    title: "User-Friendly Interfaces",
    text: "We focus on usability, organized information, intuitive navigation, dashboards, responsive interfaces, and practical software experiences.",
  },
  {
    number: "07",
    title: "Business Workflow Development",
    text: "We develop business workflows, operational processes, approvals, task management, and relevant ERP functionality.",
  },
  {
    number: "08",
    title: "End-to-End Development",
    text: "We support planning, design, development, testing, integration, deployment, and maintenance according to project scope.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    text: "Understand business objectives, departments, operational processes, ERP requirements, workflows, and business challenges.",
    visual: "discovery",
  },
  {
    number: "02",
    title: "Requirement Analysis",
    text: "Define ERP modules, functionality, user roles, business workflows, data requirements, integrations, and project scope.",
    visual: "requirements",
  },
  {
    number: "03",
    title: "ERP Strategy & Architecture",
    text: "Plan ERP architecture, modules, database structure, integrations, technical requirements, business logic, and application structure.",
    visual: "architecture",
  },
  {
    number: "04",
    title: "UI/UX Design",
    text: "Design ERP interfaces, dashboards, module navigation, workflows, management screens, and responsive layouts.",
    visual: "design",
  },
  {
    number: "05",
    title: "ERP Development",
    text: "Develop ERP modules, business logic, operational functionality, data management, integrations, and relevant workflows.",
    visual: "development",
  },
  {
    number: "06",
    title: "Testing & Quality Assurance",
    text: "Test ERP functionality, module integration, workflows, data management, application performance, responsiveness, and user access.",
    visual: "testing",
  },
  {
    number: "07",
    title: "Deployment & Integration",
    text: "Deploy and integrate the ERP system into the relevant business environment according to project requirements.",
    visual: "deployment",
  },
  {
    number: "08",
    title: "Maintenance & Support",
    text: "Support updates, functionality enhancements, maintenance, troubleshooting, and future ERP development according to requirements.",
    visual: "support",
  },
] as const;

export const technologyGroups = [
  {
    title: "Frontend Development",
    note: "Modern responsive interfaces, ERP dashboards, management portals, enterprise web applications, and module interfaces.",
    items: ["Responsive interfaces", "ERP dashboards", "Management portals", "Module screens"],
  },
  {
    title: "Backend Development",
    note: "Business logic, ERP modules, workflows, APIs, operational functionality, data processing, and application services.",
    items: ["Business logic", "ERP modules", "Workflow services", "Application APIs"],
  },
  {
    title: "Database Architecture",
    note: "Business records, inventory, finance, HR, procurement, supply chain information, operational data, and structured data management.",
    items: ["Business records", "Inventory data", "Finance records", "HR information"],
  },
  {
    title: "API & Integration",
    note: "ERP integration, business system connectivity, application APIs, data synchronization, and third-party integrations.",
    items: ["ERP APIs", "System connectivity", "Data synchronization", "Third-party apps"],
  },
  {
    title: "Cloud & Deployment",
    note: "Deployment architecture, hosting, application availability, maintenance, infrastructure, and business requirements.",
    items: ["Deployment planning", "Application hosting", "Infrastructure", "Maintenance"],
  },
  {
    title: "Security & Access Management",
    note: "Authentication, permissions, role-based access, application security, and data handling according to project requirements.",
    items: ["Authentication", "User roles", "Permissions", "Data handling"],
  },
] as const;

export const securityItems = [
  "User Authentication",
  "Role-Based Access",
  "Permissions Management",
  "ERP Data Management",
  "Database Architecture",
  "Data Validation",
  "Secure API Architecture",
  "Application Security Testing",
  "Data Backup Planning where supported",
  "Business Data Organization",
  "Access Management",
  "Data Handling Considerations",
] as const;

export const benefits = [
  { title: "Centralized Business Information", text: "Keep business records, operational information and module data organized in one application." },
  { title: "Connected Business Modules", text: "Connect inventory, finance, HR, procurement, sales and operations through relevant workflows." },
  { title: "Organized Operational Workflows", text: "Structure approvals, transactions, tasks and departmental processes within the ERP system." },
  { title: "Inventory Visibility", text: "Maintain product information, stock records, warehouse data and inventory reports." },
  { title: "Finance Management", text: "Organize expenses, invoices, budgets, financial information and reporting." },
  { title: "Workforce Information Management", text: "Maintain employee records, attendance, leave information and HR workflows." },
  { title: "Procurement Management", text: "Manage suppliers, purchase orders and procurement activities through connected processes." },
  { title: "Supply Chain Visibility", text: "Connect procurement, inventory coordination, orders and logistics information." },
  { title: "Business Reporting", text: "Present operational information through dashboards, management reports and business metrics." },
  { title: "Operational Monitoring", text: "Review relevant business activities and module information through structured dashboards." },
  { title: "Process Management", text: "Define workflows and business rules that match the way your organization operates." },
  { title: "Custom Business Functionality", text: "Add functionality tailored to specific departments, processes and management requirements." },
] as const;

export const relatedLinks = [
  { href: "/services/software-development", label: "Custom Software Development", note: "Tailored enterprise applications and business systems" },
  { href: "/services/crm-development", label: "CRM Development", note: "Customer information, sales workflows and ERP connectivity" },
  { href: "/services/website-development", label: "Website Development", note: "Business websites, portals and web applications" },
  { href: "/services/ecommerce-development", label: "Ecommerce Development", note: "Online stores, order systems and inventory connections" },
  { href: "/services/mobile-app-development", label: "Mobile App Development", note: "ERP access and business tools for mobile teams" },
  { href: "/services#ai-agents", label: "AI Agents & Workflow Automation", note: "Automated business processes and operational tasks" },
  { href: "/services#ai-chatbots", label: "AI Chatbots & Virtual Assistants", note: "Internal support and business assistance" },
  { href: "/services#ai-integration", label: "AI Integration & API Solutions", note: "Connected business services and enterprise APIs" },
  { href: "/services#ai-bi", label: "AI-Powered Business Intelligence", note: "Business dashboards, reporting and operational insights" },
  { href: "/services/management-systems", label: "Management Systems", note: "Education and business management platforms" },
  { href: "/services/it-consulting", label: "IT Consulting", note: "Enterprise technology planning and ERP guidance" },
  { href: "/services/digital-marketing", label: "Digital Marketing", note: "Brand visibility and customer acquisition support" },
] as const;
