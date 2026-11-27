// Content model for the SaaS Platform Development landing page.
// All figures used in interface mockups are illustrative sample data.

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is SaaS development?",
    answer:
      "SaaS development is the process of building software applications that are delivered as cloud-based services. A SaaS platform typically includes user accounts, application modules, dashboards, business workflows, data management, subscriptions and integrations, all designed around the requirements of the product and its users.",
  },
  {
    question: "What is custom SaaS development?",
    answer:
      "Custom SaaS development means building a software platform around your specific business model, users, workflows, product functionality and application architecture instead of adapting a generic off-the-shelf product. Scope is defined during discovery and can include dashboards, user roles, billing workflows and integrations.",
  },
  {
    question: "What is SaaS product development?",
    answer:
      "SaaS product development turns a product idea into a working cloud application. It can include product planning, architecture, UI/UX design, MVP development, application features, testing, deployment and future improvements based on the agreed project requirements.",
  },
  {
    question: "What is the difference between SaaS and traditional software?",
    answer:
      "Traditional software is usually installed and maintained on individual machines or servers. SaaS is accessed through supported interfaces, centrally managed, and organized around user accounts, subscriptions and application functionality delivered from cloud-based infrastructure.",
  },
  {
    question: "What is a multi-tenant SaaS application?",
    answer:
      "A multi-tenant SaaS application supports multiple organizations or customers through shared application infrastructure while keeping their data and configurations logically separated. Achieving appropriate separation depends on deliberate architecture, access controls, data models and implementation, not on the hosting model alone.",
  },
  {
    question: "What is subscription management software?",
    answer:
      "Subscription management software supports plans, customer subscriptions, billing workflows, plan changes, subscription status and relevant payment integrations. It can be built into a SaaS product or connected to suitable third-party billing services according to project scope.",
  },
  {
    question: "Can you develop a SaaS product from scratch?",
    answer:
      "Yes. We can support product discovery, requirement analysis, architecture planning, UI/UX design, development, testing, deployment and maintenance. The exact deliverables depend on your product vision, functionality, integrations and technical requirements.",
  },
  {
    question: "Can you develop an MVP for a SaaS startup?",
    answer:
      "Yes. We can define a focused MVP around the core problem your product solves, design the essential user journey, build the required application modules and prepare the platform for later feature development based on your roadmap.",
  },
  {
    question: "Can SaaS applications support multiple organizations?",
    answer:
      "Yes. Multi-organization support can be planned through tenant management, organization settings, role-based access and application configuration. The implementation approach is defined with your team so that tenant separation requirements are addressed explicitly.",
  },
  {
    question: "What is SaaS architecture?",
    answer:
      "SaaS architecture is the structure of the application: frontend interfaces, backend services, databases, APIs, user and tenant management, subscription workflows, integrations and cloud infrastructure. It is planned around product functionality, users, workflows and future development needs.",
  },
  {
    question: "Can SaaS platforms integrate with CRM and ERP systems?",
    answer:
      "Yes. SaaS platforms can connect with CRM, ERP and other business systems through APIs, data synchronization and workflow integrations where the required access, documentation and permissions are available.",
  },
  {
    question: "Can you integrate payment gateways into SaaS applications?",
    answer:
      "Yes. We can integrate suitable payment services into subscription and billing workflows, including plan selection, checkout, payment status, invoice records and customer subscription information, subject to the provider and scope agreed for your project.",
  },
  {
    question: "Can you develop custom SaaS dashboards?",
    answer:
      "Yes. We develop dashboards around the information your users and administrators need, such as application activity, user information, subscription status, product usage, reporting and business workflows.",
  },
  {
    question: "Can you develop subscription-based applications?",
    answer:
      "Yes. We can build subscription plans, customer accounts, plan changes, recurring billing workflows, subscription status and administrative management into a SaaS application, or connect relevant subscription services where appropriate.",
  },
  {
    question: "How much does SaaS development cost?",
    answer:
      "Cost depends on the scope of functionality, user roles, tenant requirements, subscription workflows, integrations, design work, deployment and ongoing maintenance. We review requirements first and then outline an estimate aligned to the agreed scope.",
  },
  {
    question: "How long does SaaS development take?",
    answer:
      "Timelines depend on product complexity, the number of application modules, integrations, design requirements and testing needs. After discovery, we prepare a phased plan with clear milestones rather than assuming a fixed timeline.",
  },
  {
    question: "What technologies are used for SaaS development?",
    answer:
      "Technology choices depend on the application. A project may include frontend frameworks, backend services, databases, APIs, cloud infrastructure and integrations. We confirm the stack during consultation based on product requirements rather than assuming a platform in advance.",
  },
  {
    question: "Can SaaS applications be customized for different businesses?",
    answer:
      "Yes. Application modules, workflows, roles, dashboards, settings and integrations can be shaped around different business requirements. The degree of customization is defined by the product architecture and agreed project scope.",
  },
  {
    question: "Do you provide SaaS maintenance and support?",
    answer:
      "Yes. We can support application updates, troubleshooting, maintenance, new functionality, integrations and product improvements according to the agreed scope of work.",
  },
  {
    question: "Can existing software be converted into a SaaS platform?",
    answer:
      "Yes. Existing software can be modernized into a cloud-based SaaS application after reviewing its architecture, data, workflows, users and integration requirements. The migration approach and scope are defined with your team before development begins.",
  },
];

export const coreServices = [
  {
    id: "custom-saas-development",
    number: "01",
    category: "Custom SaaS Development",
    title: "Custom SaaS Development Tailored to Your Business",
    description:
      "We develop custom SaaS applications designed around business requirements, workflows, user roles, application functionality, software architecture, and product objectives. Our custom SaaS development approach focuses on creating software platforms that support business operations, customer experiences, application functionality, and evolving product requirements.",
    items: [
      "Custom SaaS Development",
      "SaaS Application Development",
      "Cloud-Based Software Development",
      "Custom SaaS Solutions",
      "SaaS Web Application Development",
      "Business SaaS Applications",
      "SaaS Dashboard Development",
      "SaaS Backend Development",
      "SaaS Frontend Development",
      "Custom Software Platforms",
      "SaaS Architecture",
      "SaaS Application Customization",
    ],
    cta: "Build Your Custom SaaS Platform",
  },
  {
    id: "saas-product-development",
    number: "02",
    category: "SaaS Product Development",
    title: "Turn Your Software Idea Into a SaaS Product",
    description:
      "We help businesses transform software ideas, product concepts, workflows, and requirements into customized SaaS applications. Our SaaS product development approach includes product planning, application architecture, UI/UX design, development, testing, deployment, and future product improvements according to project requirements.",
    items: [
      "SaaS Product Development",
      "SaaS Startup Development",
      "SaaS MVP Development",
      "SaaS Application Design",
      "SaaS Product Architecture",
      "SaaS Web Application Development",
      "SaaS Product Prototyping",
      "SaaS Software Development",
      "Product Feature Development",
      "SaaS Product Customization",
      "SaaS Application Deployment",
      "SaaS Product Maintenance",
    ],
    cta: "Develop Your SaaS Product",
  },
  {
    id: "subscription-management",
    number: "03",
    category: "Subscription Management",
    title: "Develop Flexible Subscription Management Systems",
    description:
      "We develop subscription management functionality designed around business models, subscription plans, customer accounts, billing workflows, subscription lifecycle management, and application requirements. Our subscription management solutions can support relevant subscription workflows, plan management, billing integrations, customer management, and administrative functionality based on project scope.",
    items: [
      "Subscription Management Software",
      "Subscription Billing Development",
      "Subscription Management Systems",
      "Recurring Billing Integration",
      "Subscription Plan Management",
      "SaaS Billing Management",
      "Customer Subscription Management",
      "Subscription Lifecycle Management",
      "Subscription Dashboard Development",
      "Billing Workflow Development",
      "Subscription API Integration",
      "Subscription Software Solutions",
    ],
    cta: "Build Your Subscription Platform",
  },
  {
    id: "multi-tenant-applications",
    number: "04",
    category: "Multi-Tenant Applications",
    title: "Develop Scalable Multi-Tenant SaaS Applications",
    description:
      "We develop multi-tenant SaaS applications designed to support multiple organizations, businesses, or customers through shared application infrastructure and logically separated tenant data and configurations. Our multi-tenant application development approach considers tenant management, user permissions, organization settings, application architecture, tenant-specific functionality, and business requirements.",
    items: [
      "Multi-Tenant Application Development",
      "Multi-Tenant SaaS Architecture",
      "Multi-Tenant Software Development",
      "Tenant Management Systems",
      "Multi-Organization Applications",
      "SaaS Tenant Administration",
      "Tenant-Based User Management",
      "Organization Management",
      "Tenant Configuration",
      "Role-Based Access Control",
      "Multi-Tenant Dashboard Development",
      "Custom Multi-Tenant SaaS Solutions",
    ],
    cta: "Build Your Multi-Tenant SaaS Application",
  },
  {
    id: "saas-integration",
    number: "05",
    category: "SaaS Integration",
    title: "Connect Your SaaS Platform With Business Applications",
    description:
      "We integrate SaaS platforms with APIs, third-party applications, business software, cloud services, payment systems, CRM platforms, ERP systems, and relevant digital tools according to application requirements. Our SaaS integration approach focuses on application connectivity, data exchange, integration workflows, API functionality, system interoperability, and business requirements.",
    items: [
      "SaaS Integration Services",
      "SaaS API Integration",
      "Third-Party SaaS Integration",
      "SaaS Application Integration",
      "Cloud Application Integration",
      "CRM Integration",
      "ERP Integration",
      "Payment Integration",
      "Business Software Integration",
      "API Development & Integration",
      "Data Synchronization",
      "Custom SaaS Integrations",
    ],
    cta: "Integrate Your SaaS Platform",
  },
] as const;

export const features = [
  {
    id: "user-management",
    title: "User Management",
    text: "Manage user accounts, profiles, user roles, permissions, authentication workflows, and application access according to requirements.",
    metric: "Accounts & profiles",
  },
  {
    id: "access-control",
    title: "Role-Based Access Control",
    text: "Define access permissions, user roles, administrative access, organization-level permissions, and application functionality.",
    metric: "Roles & permissions",
  },
  {
    id: "dashboards",
    title: "SaaS Dashboard Development",
    text: "Develop dashboards with application information, reporting, analytics, user activity, business workflows, and relevant functionality.",
    metric: "Application overview",
  },
  {
    id: "subscriptions",
    title: "Subscription Management",
    text: "Support subscription plans, customer subscriptions, plan changes, billing workflows, subscription status, and relevant integrations.",
    metric: "Plans & billing",
  },
  {
    id: "tenant-management",
    title: "Tenant Management",
    text: "Support organization management, tenant configurations, organization settings, tenant administration, and application requirements.",
    metric: "Organization settings",
  },
  {
    id: "analytics",
    title: "SaaS Analytics",
    text: "Provide application analytics, user activity, product usage, reporting, subscription insights, and relevant business information.",
    metric: "Product usage",
  },
  {
    id: "administration",
    title: "SaaS Administration",
    text: "Develop administrative dashboards, application settings, user management, tenant administration, subscription workflows, and platform management.",
    metric: "Admin console",
  },
  {
    id: "api-support",
    title: "API & Integration Support",
    text: "Connect SaaS applications with relevant APIs, third-party services, business applications, integrations, and data workflows.",
    metric: "Connected services",
  },
  {
    id: "customer-portals",
    title: "Customer Portals",
    text: "Develop customer-facing application interfaces, customer accounts, dashboards, subscription information, and relevant workflows.",
    metric: "Customer workspace",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    text: "Support business workflows, application processes, automation functionality, integrations, and business-specific requirements.",
    metric: "Workflow rules",
  },
] as const;

export const businessModels = [
  {
    id: "business-apps",
    label: "Business SaaS Applications",
    title: "Business software built around operational workflows",
    text: "Business software, operational workflows, dashboards, user management, reporting, and application functionality.",
    dashboard: "Operations · Business application suite",
  },
  {
    id: "subscription-platforms",
    label: "Subscription-Based Platforms",
    title: "Applications organized around plans and recurring access",
    text: "Subscription plans, customer accounts, billing workflows, subscription management, and relevant integrations.",
    dashboard: "Subscriptions · Plans and accounts",
  },
  {
    id: "startups",
    label: "SaaS Startup Products",
    title: "Focused MVPs and products for early-stage teams",
    text: "Product concepts, MVP development, application functionality, SaaS product architecture, and development according to project requirements.",
    dashboard: "Product · MVP release board",
  },
  {
    id: "multi-organization",
    label: "Multi-Organization Software",
    title: "Shared platforms with organization-level configuration",
    text: "Organization management, tenant configuration, user roles, business-specific application settings, and relevant multi-tenant functionality.",
    dashboard: "Organizations · Tenant administration",
  },
  {
    id: "customer-apps",
    label: "Customer-Facing SaaS Applications",
    title: "Digital experiences for your customers and users",
    text: "Customer portals, dashboards, application functionality, user accounts, customer workflows, and digital experiences.",
    dashboard: "Customer portal · Workspace overview",
  },
  {
    id: "custom-products",
    label: "Custom SaaS Products",
    title: "Product-specific functionality and modules",
    text: "Business-specific applications, custom functionality, software modules, integrations, application architecture, and product requirements.",
    dashboard: "Custom product · Module library",
  },
] as const;

export const workflowSteps = [
  {
    number: "01",
    title: "User Access",
    text: "Users access the SaaS application through supported interfaces and authentication workflows.",
    visual: "access",
  },
  {
    number: "02",
    title: "Account & Organization Management",
    text: "Manage user accounts, organizations, roles, permissions, and relevant application settings.",
    visual: "accounts",
  },
  {
    number: "03",
    title: "Application Functionality",
    text: "Users interact with SaaS modules, dashboards, features, workflows, and application functionality.",
    visual: "modules",
  },
  {
    number: "04",
    title: "Data & Application Processing",
    text: "Application functionality processes information through relevant business logic, databases, services, and workflows.",
    visual: "data",
  },
  {
    number: "05",
    title: "Subscription & Billing",
    text: "Manage subscription plans, subscription information, billing workflows, and relevant payment integrations.",
    visual: "billing",
  },
  {
    number: "06",
    title: "Integrations & APIs",
    text: "Connect SaaS platforms with relevant business applications, third-party services, APIs, and data workflows.",
    visual: "api",
  },
  {
    number: "07",
    title: "Analytics & Administration",
    text: "Provide application analytics, user information, subscription data, reporting, application management, and administrative functionality.",
    visual: "analytics",
  },
] as const;

export const analyticsItems = [
  "SaaS Dashboard Development",
  "SaaS Analytics",
  "Product Usage Analytics",
  "User Activity Reporting",
  "Subscription Analytics",
  "SaaS Business Intelligence",
  "SaaS KPI Dashboards",
  "Application Performance Reporting",
  "Customer Analytics",
  "SaaS Admin Dashboard",
  "Subscription Reporting",
  "Custom SaaS Analytics",
] as const;

export const uxSteps = [
  { id: "signup", label: "Sign Up" },
  { id: "onboarding", label: "Onboarding" },
  { id: "dashboard", label: "Dashboard" },
  { id: "features", label: "Features" },
  { id: "settings", label: "Settings" },
  { id: "subscription", label: "Subscription" },
  { id: "support", label: "Support" },
] as const;

export const uxItems = [
  "SaaS UI/UX Design",
  "SaaS Dashboard Design",
  "SaaS Application Design",
  "SaaS Product Design",
  "User Onboarding Design",
  "SaaS Navigation Design",
  "SaaS Admin Panel Design",
  "Customer Portal Design",
  "SaaS User Journey Design",
  "SaaS Wireframing",
  "SaaS Prototyping",
  "Responsive SaaS Interface Design",
] as const;

export const integrationItems = [
  "SaaS API Integration",
  "CRM Integration",
  "ERP Integration",
  "Payment Integration",
  "Cloud Service Integration",
  "Third-Party Software Integration",
  "Business Application Integration",
  "Data Synchronization",
  "SaaS Application Connectivity",
  "Custom API Development",
  "Application Integration",
  "SaaS Workflow Integration",
] as const;

export const integrationNodes = [
  { id: "crm", label: "CRM", note: "Customer records" },
  { id: "erp", label: "ERP", note: "Business operations" },
  { id: "payment", label: "Payment", note: "Billing services" },
  { id: "analytics", label: "Analytics", note: "Reporting" },
  { id: "cloud", label: "Cloud", note: "App services" },
  { id: "api", label: "APIs", note: "Data exchange" },
  { id: "tools", label: "Business tools", note: "Digital workflows" },
] as const;

export const technologyGroups = [
  {
    title: "Frontend Development",
    note: "Interfaces selected for your product",
    items: [
      "SaaS interfaces",
      "Application dashboards",
      "Responsive layouts",
      "Frontend functionality",
    ],
  },
  {
    title: "Backend Development",
    note: "Application logic and services",
    items: [
      "Application logic",
      "User management",
      "Authentication",
      "Backend services",
    ],
  },
  {
    title: "Database Architecture",
    note: "Structured around application data",
    items: [
      "Application data",
      "User information",
      "Business records",
      "Tenant data structures",
    ],
  },
  {
    title: "Cloud Application Architecture",
    note: "Defined by deployment requirements",
    items: [
      "Cloud-based applications",
      "Deployment architecture",
      "Application services",
      "Infrastructure requirements",
    ],
  },
  {
    title: "API Development",
    note: "Connectivity with agreed services",
    items: [
      "API functionality",
      "Application connectivity",
      "Data exchange",
      "Third-party integrations",
    ],
  },
  {
    title: "SaaS Architecture",
    note: "Aligned to product requirements",
    items: [
      "Application modules",
      "Tenant management",
      "User access",
      "Business workflows",
    ],
  },
] as const;

export const industries = [
  {
    name: "Healthcare",
    text: "SaaS applications for patient-facing workflows, appointments, records and internal operations with carefully defined access requirements.",
    icon: "healthcare",
  },
  {
    name: "Education",
    text: "Learning platforms, student portals and administrative applications organized around users, courses and reporting.",
    icon: "education",
  },
  {
    name: "Retail",
    text: "SaaS tools for inventory, store operations, customer information and consistent application workflows across teams.",
    icon: "retail",
  },
  {
    name: "Real Estate",
    text: "Cloud applications for listings, CRM workflows, documents and customer portals with structured user management.",
    icon: "real-estate",
  },
  {
    name: "Finance & Business Services",
    text: "Business applications for reporting, client workflows and internal operations with role-based access and structured data management.",
    icon: "finance",
  },
  {
    name: "Logistics",
    text: "SaaS platforms for tracking, coordination, operations dashboards and data exchange between distributed teams.",
    icon: "logistics",
  },
  {
    name: "Manufacturing",
    text: "Applications for production monitoring, inventory systems and internal tooling with business-specific workflows.",
    icon: "manufacturing",
  },
  {
    name: "HR & Recruitment",
    text: "Hosted hiring portals, HR platforms and workflow applications with configured accounts and administration.",
    icon: "hr",
  },
  {
    name: "Technology Startups",
    text: "MVP development, SaaS architecture and product interfaces shaped around a developing software product.",
    icon: "startup",
  },
  {
    name: "Professional Services",
    text: "Client portals, document workflows and practice management applications delivered as cloud-based software.",
    icon: "professional",
  },
  {
    name: "E-commerce",
    text: "SaaS tools for storefront operations, catalogues, customer accounts and connected backend services.",
    icon: "ecommerce",
  },
  {
    name: "Enterprise Businesses",
    text: "Multi-organization SaaS platforms, application modules, integrations and administration for complex environments.",
    icon: "enterprise",
  },
] as const;

export const whyChoose = [
  {
    number: "01",
    title: "Custom SaaS Development",
    text: "Applications tailored to product requirements, business models, workflows, users, application functionality, and software architecture.",
  },
  {
    number: "02",
    title: "Business-Focused Solutions",
    text: "Develop software functionality around business objectives, product requirements, workflows, customer experiences, and operational needs.",
  },
  {
    number: "03",
    title: "Scalable Application Architecture",
    text: "Consider maintainability, application architecture, product requirements, tenant management, and future development.",
  },
  {
    number: "04",
    title: "Custom Product Functionality",
    text: "Develop application modules, software features, business workflows, integrations, and product-specific functionality.",
  },
  {
    number: "05",
    title: "SaaS Integration Capabilities",
    text: "Connect SaaS applications with relevant APIs, business applications, software services, payment systems, and third-party platforms.",
  },
  {
    number: "06",
    title: "User-Centric Interfaces",
    text: "Focus on usability, application functionality, user journeys, dashboards, onboarding, and responsive layouts.",
  },
  {
    number: "07",
    title: "End-to-End Development",
    text: "Support planning, design, development, testing, deployment, and maintenance according to project scope.",
  },
  {
    number: "08",
    title: "Future Product Development",
    text: "Support new features, integrations, application improvements, software updates, and future development according to requirements.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    text: "Understand product vision, business objectives, user requirements, SaaS models, workflows, application functionality, and project goals.",
    visual: "discovery",
  },
  {
    number: "02",
    title: "Requirement Analysis",
    text: "Define application features, user roles, tenant requirements, subscription workflows, integrations, software functionality, and project scope.",
    visual: "requirements",
  },
  {
    number: "03",
    title: "Product Strategy & Architecture",
    text: "Plan application architecture, product modules, databases, APIs, SaaS functionality, tenant management, and technical requirements.",
    visual: "architecture",
  },
  {
    number: "04",
    title: "UI/UX Design",
    text: "Design SaaS dashboards, application interfaces, user journeys, onboarding experiences, product modules, and responsive layouts.",
    visual: "design",
  },
  {
    number: "05",
    title: "SaaS Development",
    text: "Develop frontend functionality, backend systems, APIs, databases, application workflows, software modules, integrations, and relevant SaaS functionality.",
    visual: "development",
  },
  {
    number: "06",
    title: "Testing & Quality Assurance",
    text: "Test application functionality, user workflows, integrations, responsive interfaces, application behavior, usability, and relevant software requirements.",
    visual: "testing",
  },
  {
    number: "07",
    title: "Deployment & Integration",
    text: "Deploy and integrate the SaaS platform according to project requirements, application architecture, infrastructure, and scope.",
    visual: "deployment",
  },
  {
    number: "08",
    title: "Maintenance & Support",
    text: "Support updates, troubleshooting, maintenance, new functionality, integrations, application improvements, and future development according to requirements.",
    visual: "support",
  },
] as const;

export const securityItems = [
  "User Authentication",
  "Role-Based Access Control",
  "Tenant Data Separation",
  "Application Permissions",
  "SaaS Data Management",
  "API Security Considerations",
  "Data Validation",
  "Application Security",
  "Access Management",
  "Authentication Workflows",
  "Application Security Testing",
  "Database Management",
] as const;

export const benefits = [
  {
    title: "Cloud-Based Software Access",
    text: "Deliver application functionality through supported interfaces and cloud-based access.",
  },
  {
    title: "Centralized Application Management",
    text: "Organize users, modules, settings and administration in one application environment.",
  },
  {
    title: "Subscription-Based Business Models",
    text: "Support plans, customer accounts and recurring access through subscription workflows.",
  },
  {
    title: "Custom Application Functionality",
    text: "Build software features around actual business processes and product requirements.",
  },
  {
    title: "User & Organization Management",
    text: "Manage accounts, roles, permissions and organization-level configuration.",
  },
  {
    title: "Business Workflow Support",
    text: "Shape application modules and processes around day-to-day business operations.",
  },
  {
    title: "Software Integrations",
    text: "Connect the platform with relevant APIs, business tools and third-party services.",
  },
  {
    title: "Application Analytics",
    text: "Provide visibility into users, usage, subscriptions and application information.",
  },
  {
    title: "Product Development Flexibility",
    text: "Plan the platform so new features and modules can be added according to the roadmap.",
  },
  {
    title: "Centralized Administration",
    text: "Give administrators a practical view of users, organizations, plans and settings.",
  },
  {
    title: "Custom Software Modules",
    text: "Develop product-specific functionality instead of forcing workflows into generic tools.",
  },
  {
    title: "Future Product Development",
    text: "Continue application improvements, integrations and updates as requirements evolve.",
  },
] as const;

export const relatedLinks = [
  {
    label: "ERP Solutions",
    note: "Custom ERP platforms for connected business operations.",
    href: "/services/erp-solutions",
  },
  {
    label: "Management Systems",
    note: "Custom LMS platforms and online learning applications.",
    href: "/services/management-systems",
  },
  {
    label: "Custom Software Development",
    note: "Tailored business software beyond off-the-shelf applications.",
    href: "/services/software-development",
  },
  {
    label: "Website Development",
    note: "Web experiences that connect with your SaaS product.",
    href: "/services/website-development",
  },
  {
    label: "Mobile App Development",
    note: "Mobile interfaces for SaaS users and customer audiences.",
    href: "/services/mobile-app-development",
  },
  {
    label: "UI/UX Design",
    note: "Product design, user journeys and interface systems.",
    href: "/services/ui-ux-design",
  },
  {
    label: "CRM Development",
    note: "Customer relationship systems that integrate with your platform.",
    href: "/services/crm-development",
  },
  {
    label: "IT Consulting",
    note: "Technical planning and architecture guidance.",
    href: "/services/it-consulting",
  },
] as const;
