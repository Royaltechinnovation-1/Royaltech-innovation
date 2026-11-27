/**
 * Content for /services/ai-powered-business-intelligence.
 * Dashboard samples are interface layouts, not client results.
 * Cost and timeline answers stay qualitative.
 * A live or real-time view is included only when the data source can support it.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/ai-powered-business-intelligence";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "AI Business Intelligence Solutions & Analytics Company | RoyalTech";
export const SEO_H1 = "AI-Powered Business Intelligence Solutions for Smarter Business Decisions";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation develops AI-powered business intelligence solutions, analytics dashboards, automated reporting, predictive insights, and data visualization applications.";
export const SEO_KEYWORDS = [
  "AI Business Intelligence Solutions",
  "Business Intelligence Development Company",
  "AI Data Analytics Services",
  "Business Intelligence Services",
  "Business Intelligence Dashboard Development",
  "Automated Reporting Solutions",
  "Predictive Business Insights",
  "Data Visualization Services",
  "Business Intelligence Company in Mohali",
  "AI Data Analytics Company in Chandigarh",
  "Business Analytics Services in Punjab",
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
};

export const HERO_SUB = "Transform Business Data Into Intelligent Decisions";
export const HERO_LEAD =
  "We develop AI-powered business intelligence solutions that help businesses analyze data, monitor performance, automate reporting, visualize insights, and make informed decisions with greater clarity.";
export const HERO_PILLARS = [
  "AI Data Analytics",
  "Business Intelligence Dashboards",
  "Automated Reporting",
  "Predictive Insights",
  "Data Visualization",
];

export const INTRO_PARAGRAPHS = [
  "Businesses generate valuable information across sales, marketing, operations, customer interactions, financial activities, and digital platforms.",
  "Business intelligence solutions help organizations organize, analyze, visualize, and understand this information to support business decisions.",
  "At RoyalTech Innovation, we develop AI-powered business intelligence solutions tailored to business requirements, data environments, operational processes, and reporting needs.",
  "From AI data analytics and business intelligence dashboards to automated reporting, predictive insights, and data visualization, we help businesses transform information into meaningful business intelligence.",
];

export const RELATED_LINKS = [
  { href: "/services/machine-learning-predictive-analytics", label: "machine learning and predictive analytics" },
  { href: "/services/ai-integration-api-solutions", label: "AI integration and API solutions" },
  { href: "/services/generative-ai-solutions", label: "generative AI solutions" },
  { href: "/services/ai-agents-workflow-automation", label: "AI agents and workflow automation" },
  { href: "/services/ai-chatbots-virtual-assistants", label: "AI chatbots and virtual assistants" },
  { href: "/services/custom-software-development", label: "custom software development" },
  { href: "/services/website-development", label: "website development" },
  { href: "/services/mobile-app-development", label: "mobile app development" },
  { href: "/services/it-consulting", label: "IT consulting" },
  { href: "/services/digital-marketing", label: "digital marketing" },
  { href: "/services/crm", label: "CRM solutions" },
];

export const OVERVIEW_EYEBROW = "Business Intelligence & Analytics";
export const OVERVIEW_TITLE = "Intelligent Business Analytics Solutions";
export const OVERVIEW_SUB =
  "Analytics, dashboards, scheduled reports, planning views, and the charts that make the numbers readable.";

export const OVERVIEW_CARDS: { badge: string; title: string; copy: string; tags: string[] }[] = [
  {
    badge: "Diagnostic & Predictive",
    title: "Find the \"Why\" Behind Every Metric",
    copy: "Stop guessing what caused a dip or spike. We uncover hidden revenue drivers, customer churn patterns, and operational bottlenecks before they impact your bottom line.",
    tags: ["Cohort Analysis", "Trend Forecasting", "Root-Cause KPIs"],
  },
  {
    badge: "Real-Time Visibility",
    title: "One Screen. Zero Spreadsheet Chaos.",
    copy: "Consolidate scattered tools into a single source of truth. Give leadership and team leads role-based, drill-down visibility into live performance from desktop or mobile.",
    tags: ["Live Sync", "Role-Based Views", "Drill-Down Filters"],
  },
  {
    badge: "Hands-Free Delivery",
    title: "Insights Delivered Before Your Morning Coffee",
    copy: "Eliminate hours of manual weekly data pulls. Receive clean, board-ready summaries and instant anomaly alerts directly in your email, Slack, or Teams.",
    tags: ["Daily/Weekly Digests", "Slack & Email", "Smart Alerts"],
  },
  {
    badge: "Scenario Modeling",
    title: "Test Tomorrow\u2019s Decisions Today",
    copy: "Compare actuals against targets in real time. Run instant \"what-if\" scenarios on budgets, inventory, and headcount so you commit resources with confidence.",
    tags: ["Budget vs. Actuals", "Capacity Planning", "What-If Sliders"],
  },
  {
    badge: "Visual Clarity",
    title: "Charts Built for Humans, Not Data Scientists",
    copy: "Raw tables slow teams down. We design clutter-free, color-calibrated visuals that spotlight outliers and next steps at a single glance.",
    tags: ["Executive Visuals", "Custom Chart Systems", "UX-First Layouts"],
  },
];

export type BiService = {
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

export const SERVICES: BiService[] = [
  {
    id: "ai-data-analytics",
    number: "01",
    eyebrow: "AI Data Analytics",
    title: "Understand Your Business Data With AI-Powered Analytics",
    paragraphs: [
      "AI data analytics combines data analysis, intelligent technologies, visualization, and suitable analytical approaches to help businesses explore information, identify patterns, understand trends, and generate meaningful insights.",
      "We develop AI-powered data analytics solutions tailored to business requirements, data sources, reporting needs, and analytical objectives. An insight is only as useful as the data behind it, so the source and the question are agreed before the view is built.",
    ],
    items: [
      "AI Data Analytics Solutions",
      "Business Data Analytics",
      "Intelligent Data Analysis",
      "AI-Powered Data Insights",
      "Business Performance Analytics",
      "Data Pattern Analysis",
      "Sales Data Analytics",
      "Customer Data Analytics",
      "Operational Data Analytics",
      "Business Trend Analysis",
      "Data Analysis Applications",
      "Custom AI Analytics Solutions",
    ],
    cta: "Explore AI Data Analytics",
    service: "AI Data Analytics",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "bi-dashboards",
    number: "02",
    eyebrow: "Business Intelligence Dashboards",
    title: "Get a Clear View of Your Business Performance",
    paragraphs: [
      "Business intelligence dashboards bring relevant business information, KPIs, analytics, reports, and performance indicators into a centralized visual interface.",
      "We develop custom business intelligence dashboards that help businesses monitor performance, analyze information, understand trends, and access relevant insights across their operations. A live refresh is included when the data source can update at that pace.",
    ],
    items: [
      "Business Intelligence Dashboard Development",
      "Custom BI Dashboards",
      "Executive Dashboards",
      "Sales Dashboards",
      "Marketing Dashboards",
      "Financial Dashboards",
      "Operational Dashboards",
      "KPI Monitoring",
      "Business Performance Dashboards",
      "Data Visualization Dashboards",
      "Dashboard refresh where the source supports it",
      "Custom Analytics Dashboards",
    ],
    cta: "Build Your BI Dashboard",
    service: "Business Intelligence Dashboards",
    tone: "dark",
    visualFirst: true,
  },
  {
    id: "automated-reporting",
    number: "03",
    eyebrow: "Automated Reporting",
    title: "Reduce Manual Reporting With Intelligent Automation",
    paragraphs: [
      "Automated reporting solutions help businesses organize relevant data, generate reports, streamline reporting workflows, and make information easier to access.",
      "We develop reporting applications and automated reporting workflows tailored to business requirements, data sources, reporting schedules, and operational processes.",
    ],
    items: [
      "Automated Reporting Solutions",
      "Business Report Automation",
      "Automated KPI Reports",
      "Sales Reporting",
      "Marketing Reporting",
      "Financial Reporting Applications",
      "Operational Reporting",
      "Custom Report Generation",
      "Data Report Automation",
      "Reporting Dashboards",
      "Business Reporting Software",
      "Intelligent Reporting Solutions",
    ],
    cta: "Automate Your Business Reporting",
    service: "Automated Reporting",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "predictive-insights",
    number: "04",
    eyebrow: "Predictive Insights",
    title: "Discover Business Trends and Opportunities Through Data",
    paragraphs: [
      "Predictive insights use relevant historical information, analytics, and suitable models to help businesses explore trends, consider possible outcomes, and support planning.",
      "We develop predictive insight applications tailored to the data you have, the question you need to answer, and how the result will be used. A forecast is a planning aid. It is not a guaranteed outcome.",
    ],
    items: [
      "Predictive Business Insights",
      "Business Trend Analysis",
      "Predictive Analytics",
      "Sales Insights",
      "Demand Insights",
      "Customer Insights",
      "Business Performance Analysis",
      "Predictive Data Visualization",
      "Trend Monitoring",
      "Business Forecasting Insights",
      "Data-Driven Decision Support",
      "Custom Predictive Analytics",
    ],
    cta: "Explore Predictive Insights",
    service: "Predictive Insights",
    tone: "dark",
    visualFirst: true,
  },
  {
    id: "data-visualization",
    number: "05",
    eyebrow: "Data Visualization",
    title: "Make Complex Business Data Easier to Understand",
    paragraphs: [
      "Data visualization transforms business information into charts, graphs, dashboards, reports, and interactive interfaces.",
      "We develop custom data visualization solutions that help businesses explore information, monitor performance, understand patterns, and communicate insights clearly.",
    ],
    items: [
      "Data Visualization Solutions",
      "Interactive Data Visualization",
      "Business Data Visualization",
      "KPI Visualization",
      "Analytics Charts",
      "Business Performance Charts",
      "Data Visualization Dashboards",
      "Custom Graph Development",
      "Interactive Charts",
      "Data Reporting Interfaces",
      "Business Analytics Visualization",
      "Custom Data Visualization Applications",
    ],
    cta: "Visualize Your Business Data",
    service: "Data Visualization",
    tone: "light",
    visualFirst: false,
  },
];

export const CAPABILITY_FLOW = [
  { step: "01", title: "Data sources", text: "The systems that already hold the records." },
  { step: "02", title: "Integration", text: "A defined path for the fields the view needs." },
  { step: "03", title: "Analytics", text: "The measures and comparisons you agreed." },
  { step: "04", title: "Visualization", text: "Charts and tables a person can read." },
  { step: "05", title: "Insights", text: "A summary tied to those measures." },
  { step: "06", title: "Decisions", text: "The report or dashboard the team uses." },
];

export const CAPABILITIES = [
  "AI Data Analytics",
  "Business Intelligence Development",
  "Dashboard Development",
  "Automated Reporting",
  "Predictive Insights",
  "Data Visualization",
  "Business Performance Analytics",
  "KPI Monitoring",
  "Data Analysis Applications",
  "Intelligent Reporting",
  "Business Insights",
  "Data Integration",
  "Custom BI Solutions",
  "AI-Powered Analytics",
  "Decision Support Applications",
  "Business Intelligence Software",
];

export const WORK_STAGES = [
  { title: "Data Collection", text: "Collect business information from the databases, applications, and platforms that are in scope." },
  { title: "Data Integration", text: "Connect the relevant fields from those systems and organize them for analysis." },
  { title: "Data Preparation", text: "Clean, transform, and structure the data for reporting." },
  { title: "Data Analysis", text: "Explore trends, relationships, and the metrics the business wants to watch." },
  { title: "Analytical Insights", text: "Use a suitable analytical or AI step to summarize information or support a forecast where that fits the data." },
  { title: "Data Visualization", text: "Present the information in charts, tables, dashboards, and reports." },
  { title: "Decision Support", text: "Give people a view they can use to evaluate performance and plan the next step." },
];

export const PERFORMANCE_ITEMS = [
  "Business Performance Analytics",
  "KPI Monitoring",
  "Sales Performance Analytics",
  "Operational Analytics",
  "Revenue Analysis",
  "Business Trend Analysis",
  "Performance Dashboards",
  "Business Metrics Visualization",
  "Business Reporting",
  "Performance Monitoring",
  "Custom Business Analytics",
  "Decision Support Solutions",
];

export const DASHBOARD_TYPES = [
  "Executive Dashboards",
  "Sales Dashboards",
  "Marketing Dashboards",
  "Financial Dashboards",
  "Operational Dashboards",
  "Customer Analytics Dashboards",
  "Ecommerce Dashboards",
  "KPI Dashboards",
  "Custom Reporting Dashboards",
  "Business Intelligence Applications",
  "Interactive Dashboards",
  "Custom Dashboard Development",
];

export const REPORTING_ITEMS = [
  "Automated Business Reporting",
  "Report Generation Automation",
  "KPI Report Automation",
  "Sales Report Automation",
  "Marketing Report Automation",
  "Financial Report Automation",
  "Operational Reporting",
  "Custom Reporting Software",
  "Automated Data Reports",
  "Reporting Workflows",
  "Business Report Applications",
  "Intelligent Reporting Solutions",
];

export const PREDICTIVE_ITEMS = [
  "Predictive Business Analytics",
  "Predictive Insights",
  "Sales Trend Analysis",
  "Demand Insights",
  "Business Trend Prediction",
  "Customer Insights",
  "Predictive Performance Analysis",
  "Business Forecasting",
  "Predictive Dashboards",
  "Data-Driven Planning",
  "Trend Monitoring",
  "Custom Predictive Analytics Applications",
];

export const VISUAL_ITEMS = [
  "Business Data Visualization",
  "Interactive Data Visualization",
  "Data Visualization Dashboards",
  "KPI Visualization",
  "Revenue Charts",
  "Sales Analytics Charts",
  "Business Performance Graphs",
  "Custom Chart Development",
  "Interactive Reporting",
  "Data Comparison",
  "Analytics Visualization",
  "Custom Data Visualization Applications",
];

export const INTEGRATION_ITEMS = [
  "Business Data Integration",
  "Database Integration",
  "API Data Integration",
  "Business Software Integration",
  "Analytics Integration",
  "Dashboard Integration",
  "Data Connectivity",
  "Business System Integration",
  "Reporting Integration",
  "Data Workflow Development",
  "Custom BI Integration",
  "Analytics Application Integration",
];

export const INTEGRATION_NODES = ["CRM", "ERP", "Website", "Ecommerce", "Database", "Dashboard"];

export const TECH_FLOW = ["Data sources", "Integration", "Analytics", "AI summary", "Dashboards", "Reports"];

export const TECH_CATEGORIES = [
  { title: "Business Analytics", items: ["Business Data Analytics", "Business Performance Analytics", "KPI Analytics", "Trend Analysis", "Decision Support"] },
  { title: "Data Visualization", items: ["Interactive Charts", "Graphs", "KPI Dashboards", "Visual Reporting", "Visualization Applications"] },
  { title: "AI & Intelligence", items: ["AI Data Analytics", "Intelligent Analysis", "Predictive Insights", "AI-Assisted Reporting", "Analytical Summaries"] },
  { title: "Reporting & Dashboards", items: ["BI Dashboards", "Custom Dashboards", "Automated Reporting", "Business Reports", "KPI Monitoring"] },
  { title: "Data Integration", items: ["API Integration", "Database Integration", "System Integration", "Data Processing", "Data Workflows"] },
];

export const INDUSTRIES = [
  { name: "Ecommerce & Retail", desc: "Sales views, product performance, revenue reporting, and customer summaries from the store data you can connect." },
  { name: "Healthcare", desc: "Operational reporting and administrative views, planned around privacy and the records the organization is allowed to use." },
  { name: "Education", desc: "Institutional reporting, operational measures, and performance views for the data the institution already holds." },
  { name: "IT & Technology", desc: "Product and operations dashboards, application reporting, and internal performance views." },
  { name: "Manufacturing", desc: "Operational reporting, production measures, and performance dashboards from the systems on the floor and in the office." },
  { name: "Logistics", desc: "Status reporting, operational measures, and trend views across the records the operation can share." },
  { name: "Finance", desc: "Financial reporting and performance views, subject to the controls and data the finance team defines." },
  { name: "Real Estate", desc: "Sales reporting, listing performance, and market views built from the records the business keeps." },
  { name: "Hospitality", desc: "Occupancy and operations reporting, guest-related summaries, and the measures the property already tracks." },
  { name: "Professional Services", desc: "Pipeline, delivery, and utilization reporting from the CRM and project tools in use." },
  { name: "Startups", desc: "A first dashboard for the few measures that matter, connected to the tools the team already uses." },
  { name: "SMEs & Enterprises", desc: "Shared reporting across teams, with permissions and the systems each department already runs." },
];

export const WHY = [
  { title: "Business-Focused Solutions", text: "We develop business intelligence around the questions, data sources, and reports the business actually needs." },
  { title: "Custom Dashboard Development", text: "Dashboards are designed around the metrics, users, and workflows you define, not a generic template." },
  { title: "Data-Driven Development", text: "The view follows the data you can provide, the definition of each KPI, and how clearly it can be shown." },
  { title: "Practical Implementation", text: "The application is meant for reporting, monitoring, and analysis the team will use." },
  { title: "Scalable Architecture", text: "We consider how new measures, sources, and users can be added later." },
  { title: "Data Integration", text: "Relevant systems are connected when they can share data and the project includes that connection." },
  { title: "Technical Planning", text: "Objectives, sources, KPI definitions, and architecture are reviewed before the dashboard is built." },
  { title: "End-to-End Development", text: "Planning, development, testing, integration, deployment, and maintenance follow the project scope." },
];

export const PROCESS = [
  { title: "Discovery & Consultation", text: "Understand objectives, the reports people need, the KPIs, and the systems that hold the data." },
  { title: "Data Assessment", text: "Review what information exists, how complete it is, and what can be connected." },
  { title: "BI Strategy & Planning", text: "Define the dashboards, metrics, reporting rhythm, and what is in scope." },
  { title: "Data Integration & Preparation", text: "Connect the sources in scope and prepare the fields the reports will use." },
  { title: "Analytics & Development", text: "Build the measures, dashboards, charts, scheduled reports, and any AI summary the data supports." },
  { title: "Testing & Validation", text: "Check figures against the source, the filters, and whether people can read the view." },
  { title: "Deployment & Integration", text: "Put the solution where the team will use it and connect the systems in scope." },
  { title: "Maintenance & Improvement", text: "Update reports, measures, and connections according to the support arrangement." },
];

export const QUALITY_ITEMS = [
  "Data Quality Assessment",
  "Data Validation",
  "Data Integration",
  "Reporting Accuracy",
  "KPI Definition",
  "Data Processing",
  "Visualization Standards",
  "Data Handling",
  "Dashboard Testing",
  "Analytical Validation",
  "Data Consistency",
  "Reporting Quality Controls",
];

export const QUALITY_STEPS = ["Data sources", "Data quality", "Processing", "Analytics", "Validation", "Dashboard", "Insights"];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is AI-powered business intelligence?",
    a: "It is software that organizes business data into dashboards, reports, and summaries, and can add an AI step such as a written summary or a trend note when the data supports it. The purpose is clearer reporting and monitoring, not an automatic business decision.",
  },
  {
    q: "What are business intelligence development services?",
    a: "They cover planning the measures, connecting the data sources in scope, building the dashboards and reports, testing the figures, and maintaining the solution according to the project.",
  },
  {
    q: "What is AI data analytics?",
    a: "AI data analytics uses analysis and, where it fits, an AI summary or pattern check on business data so a team can see trends and comparisons. The result depends on the quality and coverage of the data.",
  },
  {
    q: "What is the difference between business intelligence and data analytics?",
    a: "Business intelligence is the reporting layer: dashboards, KPIs, and scheduled reports people use to monitor the business. Data analytics is the work of exploring that information. This page covers both inside one business intelligence build. A separate machine-learning product is a different service when prediction is the main requirement.",
  },
  {
    q: "What are business intelligence dashboards?",
    a: "They are screens that bring agreed measures, charts, and filters into one place so a team can see performance without assembling the numbers by hand each time.",
  },
  {
    q: "Can you develop custom BI dashboards for businesses?",
    a: "Yes. The layout, measures, filters, and who can see them are designed around your reporting needs and the data you can connect.",
  },
  {
    q: "What is automated reporting?",
    a: "Automated reporting prepares a defined report on a schedule or from a trigger, using the data sources and template agreed for that report, so the same pack does not have to be rebuilt manually.",
  },
  {
    q: "Can business reporting be automated?",
    a: "Yes, when the source data and the report structure are defined. The automation covers the reports in scope. A person can still review a pack before it is shared.",
  },
  {
    q: "What are predictive business insights?",
    a: "They are views that use historical data and a suitable model to show a possible trend or range for planning. They support a discussion. They do not guarantee a future result.",
  },
  {
    q: "What is data visualization?",
    a: "Data visualization turns tables of business information into charts, comparisons, and dashboards so people can see a change, a mix, or a gap more quickly.",
  },
  {
    q: "Can AI help businesses analyze their data?",
    a: "It can help summarize a defined dataset, group records, or draft a note about a trend the measures already show. What it can say is limited by the data and the checks you put around it.",
  },
  {
    q: "What data is required for business intelligence?",
    a: "You need the records that match the questions: for example sales lines for a sales dashboard, or operational events for an operations view. During assessment we look at what exists, how complete it is, and what can be connected.",
  },
  {
    q: "Can BI dashboards integrate with existing software?",
    a: "They can, when that software can share data through an API, a database, or an export the project can use. CRM, websites, and custom software are connected when they are in scope. RoyalTech also builds CRM software and AI integrations when the need is the system or the connection itself.",
  },
  {
    q: "Can you develop sales and marketing dashboards?",
    a: "Yes, when the sales or marketing data can be connected and the measures are defined. Typical views include pipeline, campaign activity, and revenue by the breakdowns you choose. Digital marketing services are separate when the need is campaign delivery.",
  },
  {
    q: "Can business intelligence solutions be customized?",
    a: "Yes. Measures, layouts, permissions, schedules, and sources are planned for your reporting, not taken from a fixed package.",
  },
  {
    q: "How much does business intelligence development cost?",
    a: "Cost depends on how many sources connect, how many dashboards and reports you need, and whether the work includes a forecast or an AI summary. We prepare an estimate after the data assessment rather than quoting a flat price.",
  },
  {
    q: "How long does a BI dashboard project take?",
    a: "Timing depends on the same factors: the sources, the number of views, and how much the data needs to be cleaned. A single well-defined dashboard is a shorter build than a multi-source reporting suite. We share a timeline after the assessment.",
  },
  {
    q: "Can you develop real-time business dashboards?",
    a: "A dashboard can refresh as often as the source allows. If the system only updates on a schedule, the dashboard follows that schedule. We confirm the possible refresh during the technical assessment rather than promising a live feed for every source.",
  },
  {
    q: "What technologies are used in BI development?",
    a: "We choose the data store, the integration method, the charting approach, and any AI summary step according to the sources and the reports. A tool is used when it fits the project.",
  },
  {
    q: "Do you provide business intelligence maintenance and support?",
    a: "Yes. After launch we can update measures, adjust reports, and maintain connections according to the support arrangement for the project.",
  },
];
