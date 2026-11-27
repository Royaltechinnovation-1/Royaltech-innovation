// Content model for the Cloud & DevOps landing page.
// All dashboard figures used in the UI mockups are illustrative sample data.

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'What are cloud computing services?',
    answer:
      'Cloud computing services provide computing resources such as servers, storage, databases, networking and application environments over the internet. RoyalTech Innovation helps plan, configure and manage these resources around the requirements of your applications and business workflows.',
  },
  {
    question: 'What is cloud infrastructure?',
    answer:
      'Cloud infrastructure is the combination of compute resources, storage, databases, networking, server environments and deployment configuration that an application runs on. It can be arranged in public, private or hybrid cloud environments depending on project needs.',
  },
  {
    question: 'What is cloud infrastructure management?',
    answer:
      'Cloud infrastructure management covers the ongoing configuration, monitoring, maintenance, resource management, updates and troubleshooting of cloud environments. It helps keep application environments organized and visible to the teams responsible for them.',
  },
  {
    question: 'What is cloud migration?',
    answer:
      'Cloud migration moves applications, databases, servers and workloads from existing infrastructure into a suitable cloud environment. A typical project includes assessment, migration planning, data transfer, deployment, testing and post-migration validation.',
  },
  {
    question: 'What is cloud application development?',
    answer:
      'Cloud application development is the process of building software designed to run in cloud environments. It can include web applications, backend services, APIs, databases, integrations and deployment configuration shaped around your product requirements.',
  },
  {
    question: 'What is the difference between cloud computing and traditional hosting?',
    answer:
      'Traditional hosting usually means renting a fixed server environment that you configure and maintain. Cloud computing provides configurable, on-demand infrastructure resources that can be provisioned and organized around changing application requirements, with management and monitoring built into the workflow.',
  },
  {
    question: 'What are DevOps services?',
    answer:
      'DevOps services connect development, testing, deployment and operations through shared workflows and automation. They can include CI/CD pipeline setup, build automation, environment configuration, release management, monitoring and infrastructure maintenance.',
  },
  {
    question: 'What is CI/CD?',
    answer:
      'CI/CD stands for continuous integration and continuous delivery or continuous deployment. It describes automated workflows that build, test and release application changes in a consistent way, reducing manual steps in the path from code to deployment.',
  },
  {
    question: 'What is continuous integration?',
    answer:
      'Continuous integration is the practice of merging code changes into a shared repository where automated builds and tests check each change. It helps teams identify integration issues early and maintain a reliable application baseline.',
  },
  {
    question: 'What is continuous deployment?',
    answer:
      'Continuous deployment automatically releases code changes that pass the required build and test stages into a target environment. Continuous delivery is similar but keeps a release-ready build and can include an approval step before deployment.',
  },
  {
    question: 'What is deployment automation?',
    answer:
      'Deployment automation uses scripts and pipeline configuration to build, test and release applications with repeated, documented steps. It replaces error-prone manual release tasks with a workflow that can be reviewed and reused.',
  },
  {
    question: 'What is server management?',
    answer:
      'Server management includes server configuration, administration, monitoring, maintenance, updates, access configuration and troubleshooting. It covers the ongoing operational work required to keep application hosting environments usable and supported.',
  },
  {
    question: 'Can you migrate existing applications to the cloud?',
    answer:
      'Yes. We assess the existing application, database and infrastructure setup, prepare a migration plan, move the relevant workloads, test the new environment and support post-migration validation. Scope depends on application complexity and data requirements.',
  },
  {
    question: 'Can you manage cloud servers?',
    answer:
      'Yes. We provide cloud server management covering configuration, monitoring, maintenance, updates and troubleshooting. The server environment and operating system are confirmed during discovery based on your application requirements.',
  },
  {
    question: 'Can you develop cloud-based applications?',
    answer:
      'Yes. We develop cloud-based web applications, backend services, APIs and software modules designed around your business functionality, integration needs and application architecture.',
  },
  {
    question: 'Can you configure CI/CD pipelines?',
    answer:
      'Yes. We configure build, test and deployment pipelines around your repository, application architecture and target environments, including release workflow and environment management.',
  },
  {
    question: 'Can cloud applications be integrated with APIs and third-party services?',
    answer:
      'Yes. Cloud applications can connect to internal services, public APIs, databases and business platforms where the relevant credentials, documentation and access permissions are available.',
  },
  {
    question: 'What technologies are used for cloud development?',
    answer:
      'The technology stack depends on your application and infrastructure requirements. Engagements can include cloud platforms, server environments, databases, APIs, containers, CI/CD tools and monitoring stacks, all confirmed during consultation rather than assumed in advance.',
  },
  {
    question: 'How much does cloud infrastructure setup cost?',
    answer:
      'Cost depends on the scope of infrastructure, the number of environments, migration complexity, application requirements, hosting usage and the level of ongoing management. We review requirements first and then provide an estimate aligned to the agreed scope.',
  },
  {
    question: 'How long does cloud migration take?',
    answer:
      'Migration timelines depend on the number of applications, data volume, integrations, testing needs and cutover windows. After assessment, we outline a phased plan with clear milestones for your project.',
  },
  {
    question: 'Do you provide cloud maintenance and support?',
    answer:
      'Yes. We can support infrastructure maintenance, monitoring, updates, configuration changes, troubleshooting and application improvements according to the agreed scope of work.',
  },
  {
    question: 'Can you help with cloud infrastructure monitoring?',
    answer:
      'Yes. We configure monitoring dashboards for server status, resource usage, application availability, deployment activity and relevant alerts based on the systems in scope.',
  },
]

export const coreServices = [
  {
    id: 'cloud-infrastructure',
    number: '01',
    category: 'Cloud Infrastructure',
    title: 'Design Reliable & Scalable Cloud Infrastructure',
    description:
      'We design and configure cloud infrastructure according to application requirements, workloads, business needs, infrastructure architecture, deployment environments and operational objectives. Our cloud infrastructure services focus on cloud environments, application hosting, infrastructure configuration, networking, storage, compute resources, environment setup and infrastructure management according to project scope.',
    items: [
      'Cloud Infrastructure Services',
      'Cloud Infrastructure Management',
      'Cloud Architecture Design',
      'Cloud Server Configuration',
      'Cloud Hosting Infrastructure',
      'Cloud Networking',
      'Cloud Storage Solutions',
      'Cloud Resource Management',
      'Infrastructure Provisioning',
      'Cloud Environment Setup',
      'Cloud Infrastructure Optimization',
      'Cloud Computing Solutions',
    ],
    cta: 'Build Your Cloud Infrastructure',
    href: '/contact?service=cloud-infrastructure',
  },
  {
    id: 'cloud-migration',
    number: '02',
    category: 'Cloud Migration',
    title: 'Move Your Applications & Business Systems to the Cloud',
    description:
      'We help businesses plan and execute cloud migration projects according to existing infrastructure, application architecture, database requirements, business operations, compatibility and deployment objectives. Our cloud migration approach considers application assessment, migration planning, infrastructure requirements, data migration, application deployment, testing and post-migration validation according to project scope.',
    items: [
      'Cloud Migration Services',
      'Cloud Migration Consulting',
      'Application Migration',
      'Server Migration',
      'Database Migration',
      'Cloud Infrastructure Migration',
      'Website Migration to Cloud',
      'Cloud Environment Migration',
      'Legacy Application Migration',
      'Cloud Migration Planning',
      'Data Migration',
      'Cloud Migration Support',
    ],
    cta: 'Plan Your Cloud Migration',
    href: '/contact?service=cloud-migration',
  },
  {
    id: 'cloud-application-development',
    number: '03',
    category: 'Cloud Application Development',
    title: 'Develop Modern Cloud-Based Applications',
    description:
      'We develop cloud-based applications designed around business requirements, application functionality, software architecture, infrastructure needs, integration requirements and product objectives. Our cloud application development approach focuses on application functionality, cloud architecture, backend services, APIs, database systems, application deployment and relevant cloud capabilities according to project requirements.',
    items: [
      'Cloud Application Development',
      'Cloud-Based Application Development',
      'Cloud-Native Application Development',
      'Cloud Software Development',
      'Cloud Web Application Development',
      'Cloud Backend Development',
      'Cloud API Development',
      'Cloud Application Architecture',
      'Cloud Application Integration',
      'Cloud Application Deployment',
      'Cloud Application Modernization',
      'Custom Cloud Applications',
    ],
    cta: 'Develop Your Cloud Application',
    href: '/contact?service=cloud-application-development',
  },
  {
    id: 'cicd-deployment',
    number: '04',
    category: 'CI/CD & Deployment',
    title: 'Automate Application Delivery With CI/CD & DevOps',
    description:
      'We implement CI/CD and deployment workflows designed to support application development, testing, build processes, deployment environments, release management and software delivery requirements. Our CI/CD approach focuses on automation, workflow configuration, deployment processes, testing integration, environment management, application releases and development requirements according to project scope.',
    items: [
      'CI/CD Pipeline Development',
      'DevOps Automation',
      'Continuous Integration',
      'Continuous Deployment',
      'Continuous Delivery',
      'Automated Build Processes',
      'Application Deployment',
      'Deployment Pipeline Configuration',
      'Release Management',
      'Testing Automation Integration',
      'DevOps Workflow Automation',
      'Deployment Environment Management',
    ],
    cta: 'Automate Your Deployment Workflow',
    href: '/contact?service=cicd-deployment',
  },
  {
    id: 'server-management',
    number: '05',
    category: 'Server Management',
    title: 'Manage, Monitor & Maintain Your Server Infrastructure',
    description:
      'We provide server management services designed around infrastructure requirements, application environments, system configuration, monitoring, maintenance, deployment needs and operational support. Our server management approach focuses on server configuration, infrastructure monitoring, system maintenance, application hosting environments, server administration, troubleshooting, updates and relevant operational requirements.',
    items: [
      'Server Management Services',
      'Server Administration',
      'Cloud Server Management',
      'Linux Server Management',
      'Windows Server Management',
      'Server Configuration',
      'Server Monitoring',
      'Server Maintenance',
      'Application Server Management',
      'Server Performance Monitoring',
      'Server Troubleshooting',
      'Infrastructure Maintenance',
    ],
    cta: 'Manage Your Server Infrastructure',
    href: '/contact?service=server-management',
  },
] as const

export const capabilities = [
  {
    id: 'architecture',
    label: 'Cloud Infrastructure Architecture',
    description:
      'Plan cloud infrastructure, application environments, compute resources, storage, networking, infrastructure configuration and deployment requirements.',
    metricLabel: 'Architecture blueprint',
    metricValue: '3 environments',
    detail: ['Compute', 'Networking', 'Storage', 'Environments'],
  },
  {
    id: 'provisioning',
    label: 'Infrastructure Provisioning',
    description:
      'Configure infrastructure resources, cloud environments, application hosting, server environments and infrastructure requirements.',
    metricLabel: 'Provisioning queue',
    metricValue: '4 resources',
    detail: ['Server nodes', 'Databases', 'Network rules', 'Access roles'],
  },
  {
    id: 'environment',
    label: 'Cloud Environment Management',
    description:
      'Manage cloud environments, infrastructure configurations, application environments, deployment requirements and operational workflows.',
    metricLabel: 'Environments',
    metricValue: 'dev · stage · prod',
    detail: ['Configuration', 'Variables', 'Access', 'Changes'],
  },
  {
    id: 'automation',
    label: 'Deployment Automation',
    description:
      'Automate relevant application build processes, testing workflows, deployment pipelines, release processes and application delivery.',
    metricLabel: 'Pipeline stages',
    metricValue: '7 steps',
    detail: ['Build', 'Test', 'Stage', 'Release'],
  },
  {
    id: 'monitoring',
    label: 'Application Monitoring',
    description:
      'Monitor application environments, infrastructure resources, server status, application availability, operational information and relevant metrics.',
    metricLabel: 'Live overview',
    metricValue: '12 services',
    detail: ['Availability', 'Resources', 'Logs', 'Alerts'],
  },
  {
    id: 'administration',
    label: 'Server Administration',
    description:
      'Manage server configuration, application hosting environments, system maintenance, server monitoring, infrastructure operations and troubleshooting.',
    metricLabel: 'Server queue',
    metricValue: '2 to review',
    detail: ['Updates', 'Users', 'Services', 'Backups'],
  },
  {
    id: 'integration',
    label: 'Application Integration',
    description:
      'Connect application environments, APIs, databases, cloud services, software platforms and relevant business applications.',
    metricLabel: 'Connected services',
    metricValue: '8 endpoints',
    detail: ['APIs', 'Databases', 'Webhooks', 'Storage'],
  },
  {
    id: 'maintenance',
    label: 'Infrastructure Maintenance',
    description:
      'Support infrastructure updates, application environment improvements, configuration changes, troubleshooting and operational maintenance according to project scope.',
    metricLabel: 'Maintenance log',
    metricValue: '3 updates',
    detail: ['Patches', 'Backups', 'Reviews', 'Fixes'],
  },
] as const

export const solutionGroups = [
  {
    id: 'hosting',
    label: 'Business Application Hosting',
    title: 'Cloud environments for day-to-day business applications',
    description:
      'Cloud environments for business applications, application hosting, infrastructure requirements and relevant deployment workflows.',
    dashboard: 'Business apps · Operations overview',
  },
  {
    id: 'web',
    label: 'Web Application Infrastructure',
    title: 'Infrastructure for websites, web apps, APIs and services',
    description:
      'Infrastructure and cloud environments for websites, web applications, backend services, APIs and application functionality.',
    dashboard: 'Web apps · Edge and application layers',
  },
  {
    id: 'product',
    label: 'Software Product Infrastructure',
    title: 'Environments for software products and SaaS platforms',
    description:
      'Cloud infrastructure and application environments for software products, SaaS platforms, application modules and product requirements.',
    dashboard: 'Product platform · Module status',
  },
  {
    id: 'migration',
    label: 'Cloud Migration Projects',
    title: 'Move existing applications, servers and databases',
    description:
      'Migration planning and execution for existing applications, infrastructure, servers, databases and relevant software environments.',
    dashboard: 'Migration · Workload progress',
  },
  {
    id: 'devops',
    label: 'DevOps Automation',
    title: 'Automated builds, tests, releases and pipelines',
    description:
      'Automated build, testing, deployment, release workflows, CI/CD pipelines and application delivery processes.',
    dashboard: 'Delivery · Pipeline activity',
  },
  {
    id: 'operations',
    label: 'Server & Application Operations',
    title: 'Server management, monitoring and maintenance',
    description:
      'Server management, application monitoring, maintenance, system configuration, infrastructure operations and troubleshooting.',
    dashboard: 'Operations · Server health',
  },
] as const

export const infrastructureWorkflow = [
  {
    number: '01',
    title: 'Application Requirements',
    text: 'Understand application functionality, workloads, infrastructure needs, deployment environments and business objectives.',
    visual: 'requirements',
  },
  {
    number: '02',
    title: 'Cloud Architecture',
    text: 'Plan cloud environments, application architecture, infrastructure components, networking, storage, compute resources and relevant configurations.',
    visual: 'architecture',
  },
  {
    number: '03',
    title: 'Infrastructure Provisioning',
    text: 'Configure cloud infrastructure, server environments, application resources, databases, networking and deployment requirements.',
    visual: 'provisioning',
  },
  {
    number: '04',
    title: 'Application Deployment',
    text: 'Deploy applications, backend services, APIs, databases and relevant software functionality into configured environments.',
    visual: 'deployment',
  },
  {
    number: '05',
    title: 'CI/CD Automation',
    text: 'Configure build workflows, testing processes, deployment pipelines, application releases and software delivery automation.',
    visual: 'pipeline',
  },
  {
    number: '06',
    title: 'Monitoring & Operations',
    text: 'Monitor infrastructure, applications, server environments, operational information, application performance and relevant alerts.',
    visual: 'monitoring',
  },
  {
    number: '07',
    title: 'Maintenance & Optimization',
    text: 'Support infrastructure maintenance, configuration improvements, application updates, operational troubleshooting and relevant optimization according to scope.',
    visual: 'maintenance',
  },
] as const

export const monitoringItems = [
  'Cloud Infrastructure Monitoring',
  'Server Monitoring',
  'Application Monitoring',
  'Cloud Resource Monitoring',
  'Infrastructure Health Monitoring',
  'Application Performance Monitoring',
  'Deployment Monitoring',
  'Server Resource Monitoring',
  'System Status Dashboards',
  'Cloud Operations Dashboards',
  'Monitoring & Alert Configuration',
  'Infrastructure Reporting',
] as const

export const devopsItems = [
  'DevOps Consulting',
  'CI/CD Pipeline Development',
  'DevOps Automation',
  'Continuous Integration',
  'Continuous Delivery',
  'Continuous Deployment',
  'Build Automation',
  'Deployment Automation',
  'Release Workflow Management',
  'Testing Workflow Integration',
  'Development Environment Configuration',
  'DevOps Workflow Design',
] as const

export const migrationItems = [
  'Cloud Migration Planning',
  'Application Migration',
  'Server Migration',
  'Database Migration',
  'Infrastructure Migration',
  'Cloud Environment Setup',
  'Application Compatibility Assessment',
  'Migration Testing',
  'Cloud Deployment',
  'Post-Migration Validation',
  'Cloud Application Modernization',
  'Cloud Migration Support',
] as const

export const technologyGroups = [
  {
    title: 'Cloud Platforms',
    note: 'Selected with you during discovery',
    items: [
      'Public cloud infrastructure',
      'Private cloud environments',
      'Hybrid cloud architecture',
      'Multi-environment setups',
    ],
  },
  {
    title: 'Server Infrastructure',
    note: 'Based on application compatibility',
    items: [
      'Linux server environments',
      'Windows Server environments',
      'Virtual machines',
      'Cloud server configuration',
    ],
  },
  {
    title: 'Containerization',
    note: 'Where applicable to the project',
    items: [
      'Container-based deployments',
      'Container image builds',
      'Container orchestration',
      'Runtime configuration',
    ],
  },
  {
    title: 'CI/CD & Automation',
    note: 'Aligned to your source control',
    items: [
      'Source control workflows',
      'Build automation',
      'Test automation',
      'Release pipelines',
    ],
  },
  {
    title: 'Monitoring',
    note: 'Defined by the systems in scope',
    items: [
      'Infrastructure monitoring',
      'Application performance monitoring',
      'Log dashboards',
      'Alert configuration',
    ],
  },
  {
    title: 'Infrastructure & Application Services',
    note: 'Configured around requirements',
    items: [
      'Cloud databases & APIs',
      'Application servers',
      'Cloud storage & networking',
      'Provisioning & operations',
    ],
  },
] as const

export const industries = [
  {
    name: 'Healthcare',
    text: 'Cloud environments for patient-facing applications, appointment systems and internal tools with carefully managed access and availability requirements.',
    icon: 'healthcare',
  },
  {
    name: 'Education',
    text: 'Hosting and infrastructure for learning platforms, student portals and administrative applications used by distributed teams.',
    icon: 'education',
  },
  {
    name: 'Retail',
    text: 'Application infrastructure for online stores, inventory systems and customer services that need consistent deployment workflows.',
    icon: 'retail',
  },
  {
    name: 'Real Estate',
    text: 'Cloud-hosted listing platforms, CRM tools and document workflows supported by reliable server and database environments.',
    icon: 'real-estate',
  },
  {
    name: 'Finance & Business Services',
    text: 'Managed infrastructure for business applications, reporting tools and internal systems with structured monitoring and access controls.',
    icon: 'finance',
  },
  {
    name: 'Logistics',
    text: 'Cloud applications and server environments for tracking, operations dashboards and data exchange between distributed teams.',
    icon: 'logistics',
  },
  {
    name: 'Manufacturing',
    text: 'Infrastructure for production monitoring applications, inventory systems and internal tooling with planned maintenance windows.',
    icon: 'manufacturing',
  },
  {
    name: 'HR & Recruitment',
    text: 'Hosted hiring portals, HR platforms and workflow applications with configured environments and ongoing operational support.',
    icon: 'hr',
  },
  {
    name: 'Technology Startups',
    text: 'Cloud architecture, CI/CD and application environments that can be shaped around a product as it develops.',
    icon: 'startup',
  },
  {
    name: 'Professional Services',
    text: 'Cloud hosting and application environments for client portals, document workflows and practice management software.',
    icon: 'professional',
  },
  {
    name: 'E-commerce',
    text: 'Web application infrastructure, deployment automation and monitoring for storefronts, catalogues and backend services.',
    icon: 'ecommerce',
  },
  {
    name: 'Enterprise Businesses',
    text: 'Cloud infrastructure management, migration support and server operations for multi-team applications and complex environments.',
    icon: 'enterprise',
  },
] as const

export const whyChoose = [
  {
    number: '01',
    title: 'Business-Focused Infrastructure',
    text: 'Configure infrastructure according to business objectives, application requirements, workloads, deployment needs and technical specifications.',
  },
  {
    number: '02',
    title: 'Custom Cloud Solutions',
    text: 'Develop cloud environments and application infrastructure according to software functionality, application architecture, operational needs and project scope.',
  },
  {
    number: '03',
    title: 'Deployment Automation',
    text: 'Configure CI/CD pipelines, application delivery workflows, build processes, testing integration, deployment environments and release management.',
  },
  {
    number: '04',
    title: 'Cloud Migration Support',
    text: 'Support migration planning, infrastructure migration, application migration, database migration, testing and deployment according to requirements.',
  },
  {
    number: '05',
    title: 'Application-Focused Architecture',
    text: 'Plan cloud architecture around application functionality, infrastructure needs, application environments, software requirements and deployment workflows.',
  },
  {
    number: '06',
    title: 'Infrastructure Monitoring',
    text: 'Configure monitoring, dashboards, server information, application status, infrastructure metrics and relevant alerts.',
  },
  {
    number: '07',
    title: 'Server Management',
    text: 'Support server administration, maintenance, configuration, monitoring, troubleshooting and operational requirements.',
  },
  {
    number: '08',
    title: 'Ongoing Development & Maintenance',
    text: 'Support infrastructure updates, application improvements, deployment changes, maintenance, troubleshooting and future development according to project scope.',
  },
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    text: 'Understand application requirements, business objectives, workloads, infrastructure needs, cloud requirements, deployment environments and project goals.',
    visual: 'discovery',
  },
  {
    number: '02',
    title: 'Infrastructure Assessment',
    text: 'Review relevant infrastructure, application architecture, server environments, databases, deployment workflows, workloads and migration requirements.',
    visual: 'assessment',
  },
  {
    number: '03',
    title: 'Cloud Architecture & Planning',
    text: 'Plan cloud infrastructure, application environments, compute resources, databases, networking, storage, deployment requirements and technical architecture.',
    visual: 'architecture',
  },
  {
    number: '04',
    title: 'Infrastructure Configuration',
    text: 'Configure cloud environments, server systems, infrastructure components, application resources, databases, networking and relevant services.',
    visual: 'configuration',
  },
  {
    number: '05',
    title: 'Application & CI/CD Setup',
    text: 'Configure application deployment, build processes, testing workflows, deployment pipelines, release workflows and relevant DevOps automation.',
    visual: 'cicd',
  },
  {
    number: '06',
    title: 'Testing & Validation',
    text: 'Test application deployment, infrastructure configuration, application functionality, server environments, deployment workflows, integrations and relevant requirements.',
    visual: 'testing',
  },
  {
    number: '07',
    title: 'Deployment & Launch',
    text: 'Deploy applications and infrastructure according to project scope, cloud architecture, deployment environments, application requirements and operational needs.',
    visual: 'launch',
  },
  {
    number: '08',
    title: 'Monitoring & Maintenance',
    text: 'Support monitoring, infrastructure maintenance, troubleshooting, application updates, configuration improvements, operational requirements and future development.',
    visual: 'monitoring',
  },
] as const

export const securityItems = [
  'Cloud Access Management',
  'Server Access Configuration',
  'Infrastructure Permissions',
  'Network Configuration',
  'Server Security Configuration',
  'Application Environment Management',
  'Database Access Management',
  'Infrastructure Monitoring',
  'Backup Configuration',
  'Server Maintenance',
  'Cloud Environment Management',
  'Security Updates',
] as const

export const benefits = [
  {
    title: 'Flexible Cloud Infrastructure',
    text: 'Infrastructure can be configured around application workloads and adjusted as project requirements change.',
  },
  {
    title: 'Application Deployment Automation',
    text: 'Repeatable build, test and release workflows reduce manual steps in application delivery.',
  },
  {
    title: 'Centralized Infrastructure Management',
    text: 'Environments, resources and configurations can be viewed and managed from organized dashboards.',
  },
  {
    title: 'Cloud-Based Application Hosting',
    text: 'Applications can be hosted in environments planned around their functionality and usage patterns.',
  },
  {
    title: 'Modern Application Environments',
    text: 'Development, staging and production environments can be structured to support cleaner release processes.',
  },
  {
    title: 'Infrastructure Monitoring',
    text: 'Server status, application availability and resource information can be brought into a single operational view.',
  },
  {
    title: 'Deployment Workflow Automation',
    text: 'CI/CD pipelines provide documented paths from code changes through testing to deployment.',
  },
  {
    title: 'Application Environment Management',
    text: 'Configuration, access and environment changes can be tracked against the systems they affect.',
  },
  {
    title: 'Cloud Migration Support',
    text: 'Existing applications and infrastructure can move into cloud environments with planning and validation.',
  },
  {
    title: 'Server Management',
    text: 'Ongoing administration, maintenance and troubleshooting support the environments your applications rely on.',
  },
  {
    title: 'Application Maintenance',
    text: 'Updates and improvements can be handled as part of a longer-term application and infrastructure plan.',
  },
  {
    title: 'Infrastructure Flexibility',
    text: 'Architecture can evolve as application requirements, integrations and operational processes develop.',
  },
] as const

export const relatedLinks = [
  {
    href: '/services/erp-solutions',
    label: 'ERP Solutions',
    note: 'Connected inventory, finance, HR and supply chain systems',
  },
  {
    href: '/services/management-systems',
    label: 'Management Systems',
    note: 'Education platforms and LMS applications on cloud infrastructure',
  },
  {
    href: '/services/website-development',
    label: 'Website Development',
    note: 'Cloud-ready business websites and web platforms',
  },
  {
    href: '/services/software-development',
    label: 'Custom Software Development',
    note: 'Custom applications and SaaS platform infrastructure',
  },
  {
    href: '/services/mobile-app-development',
    label: 'Mobile App Development',
    note: 'Mobile products connected to cloud backends and APIs',
  },
  {
    href: '/services/it-consulting',
    label: 'IT Consulting',
    note: 'Technology planning and infrastructure guidance',
  },
  {
    href: '/services/crm-development',
    label: 'CRM Development',
    note: 'Business systems hosted in managed environments',
  },
  {
    href: '/services/digital-marketing',
    label: 'Digital Marketing',
    note: 'Growth support alongside your technology roadmap',
  },
] as const
