/**
 * Content for /services/machine-learning-predictive-analytics.
 * Charts and dashboards on the page are illustrative layouts, not client results.
 * No accuracy figure, outcome, or ranking is promised. Cost and timeline answers stay qualitative.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/machine-learning-predictive-analytics";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "Machine Learning & Predictive Analytics Company | RoyalTech";
export const SEO_H1 = "Machine Learning & Predictive Analytics Solutions for Smarter Business Decisions";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation develops machine learning and predictive analytics solutions for forecasting, recommendation systems, customer behaviour analysis, and intelligent data processing.";
export const SEO_KEYWORDS = [
  "Machine Learning Development Company",
  "Machine Learning Development Services",
  "Predictive Analytics Services",
  "Machine Learning Solutions",
  "Predictive Analytics Company",
  "Business Forecasting Solutions",
  "Recommendation System Development",
  "Customer Behaviour Analysis",
  "Intelligent Data Processing",
  "Machine Learning Development Company in Mohali",
  "Predictive Analytics Company in Chandigarh",
  "Machine Learning Solutions in Punjab",
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
};

export const HERO_SUB = "Turn Business Data Into Predictive Intelligence";
export const HERO_LEAD =
  "We develop machine learning and predictive analytics solutions that help businesses identify patterns, forecast trends, understand customer behaviour, process data intelligently, and make informed business decisions.";
export const HERO_PILLARS = [
  "Predictive Analytics",
  "Business Forecasting",
  "Recommendation Systems",
  "Customer Behaviour Analysis",
  "Intelligent Data Processing",
];

export const INTRO_PARAGRAPHS = [
  "Businesses generate valuable data through customers, operations, transactions, applications, and digital platforms.",
  "Machine learning helps analyze this information, identify patterns, learn from historical data, and support predictions or intelligent decisions based on suitable datasets and models.",
  "At RoyalTech Innovation, we develop machine learning and predictive analytics solutions tailored to business requirements, data environments, operational challenges, and decision-making needs.",
  "From predictive analytics and business forecasting to recommendation systems, customer behaviour analysis, and intelligent data processing, we help businesses explore the potential of data-driven technology.",
];

export const RELATED_LINKS = [
  { href: "/services/ai-powered-business-intelligence", label: "AI-powered business intelligence" },
  { href: "/services/generative-ai-solutions", label: "generative AI solutions" },
  { href: "/services/ai-integration-api-solutions", label: "AI integration and API solutions" },
  { href: "/services/ai-agents-workflow-automation", label: "AI agents and workflow automation" },
  { href: "/services/ai-chatbots-virtual-assistants", label: "AI chatbots and virtual assistants" },
  { href: "/services/custom-software-development", label: "custom software development" },
  { href: "/services/website-development", label: "website development" },
  { href: "/services/mobile-app-development", label: "mobile app development" },
  { href: "/services/it-consulting", label: "IT consulting" },
  { href: "/services/digital-marketing", label: "digital marketing" },
  { href: "/services/crm", label: "CRM solutions" },
];

export const DIFFERENCES = [
  { name: "Machine learning", text: "Models learn from your own data to predict, classify, or recommend." },
  { name: "Generative AI", text: "Creates new text, images, or documents. A separate service." },
  { name: "AI integration", text: "Connects an existing AI service to your software through APIs." },
  { name: "Workflow automation", text: "Runs defined steps across systems. Rules first, models where useful." },
];

export type MlService = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items: string[];
  flow: string[];
  cta: string;
  service: string;
  tone: "light" | "dark";
  visualFirst: boolean;
};

export const SERVICES: MlService[] = [
  {
    id: "predictive-analytics",
    number: "01",
    eyebrow: "Predictive Analytics",
    title: "Predict Future Trends With Data-Driven Insights",
    paragraphs: [
      "Predictive analytics uses historical data, statistical techniques, and machine learning models to identify patterns and estimate possible future outcomes.",
      "We develop predictive analytics solutions designed to help businesses explore trends, anticipate changes, understand risks, and support data-driven decision-making. An estimate is a range with stated limits, not a promise.",
    ],
    items: [
      "Predictive Analytics Solutions",
      "Machine Learning Prediction Models",
      "Business Performance Prediction",
      "Predictive Data Analysis",
      "Trend Analysis",
      "Risk Prediction",
      "Demand Prediction",
      "Customer Prediction Models",
      "Predictive Insights",
      "Data-Driven Decision Support",
      "Predictive Analytics Applications",
      "Custom Prediction Solutions",
    ],
    flow: ["Historical data", "Machine learning model", "Predicted trends", "Business insights"],
    cta: "Build Your Predictive Analytics Solution",
    service: "Predictive Analytics",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "business-forecasting",
    number: "02",
    eyebrow: "Business Forecasting",
    title: "Make Better Business Decisions With Intelligent Forecasting",
    paragraphs: [
      "Business forecasting solutions use historical data, relevant business information, statistical methods, and machine learning techniques to estimate future trends and support planning.",
      "We develop forecasting applications tailored to business requirements, operational needs, available data, and forecasting objectives. How far ahead a forecast is useful depends on how much history exists and how stable the business is.",
    ],
    items: [
      "Business Forecasting Solutions",
      "Sales Forecasting",
      "Demand Forecasting",
      "Revenue Forecasting",
      "Inventory Forecasting",
      "Operational Forecasting",
      "Financial Forecasting Applications",
      "Trend Forecasting",
      "Business Performance Forecasting",
      "Forecasting Dashboards",
      "Forecasting Model Development",
      "Custom Forecasting Applications",
    ],
    flow: ["Historical business data", "Forecasting model", "Future estimates", "Business planning"],
    cta: "Explore Business Forecasting",
    service: "Business Forecasting",
    tone: "dark",
    visualFirst: true,
  },
  {
    id: "recommendation-systems",
    number: "03",
    eyebrow: "Recommendation Systems",
    title: "Deliver More Relevant Experiences With Intelligent Recommendations",
    paragraphs: [
      "Recommendation systems analyze relevant data, user preferences, behaviour, interactions, and contextual information to identify items, content, products, or services that may be relevant to users.",
      "We develop recommendation systems tailored to business applications, ecommerce platforms, digital products, content platforms, and personalized user experiences. A new catalog with little history is handled with simpler rules until data builds up.",
    ],
    items: [
      "Recommendation System Development",
      "Product Recommendation Systems",
      "Personalized Recommendations",
      "Ecommerce Recommendation Engines",
      "Content Recommendation Systems",
      "User Preference Analysis",
      "Recommendation Algorithms",
      "Personalized Product Suggestions",
      "AI Recommendation Applications",
      "Recommendation Engine Integration",
      "Custom Recommendation Solutions",
      "Intelligent Product Discovery",
    ],
    flow: ["User behaviour", "Recommendation model", "Relevant products", "Personalized experience"],
    cta: "Build Your Recommendation Engine",
    service: "Recommendation Systems",
    tone: "light",
    visualFirst: false,
  },
  {
    id: "customer-behaviour-analysis",
    number: "04",
    eyebrow: "Customer Behaviour Analysis",
    title: "Understand Customer Behaviour Through Data",
    paragraphs: [
      "Customer behaviour analysis helps businesses understand customer interactions, preferences, purchasing patterns, engagement, and activity across relevant data sources.",
      "We develop customer behaviour analytics solutions designed to help businesses explore customer trends, understand patterns, identify segments, and improve data-driven customer strategies. Personal data is handled according to the privacy requirements that apply to the project.",
    ],
    items: [
      "Customer Behaviour Analysis",
      "Customer Analytics Solutions",
      "Customer Segmentation",
      "Customer Preference Analysis",
      "Customer Journey Analytics",
      "Purchase Behaviour Analysis",
      "Customer Engagement Analysis",
      "User Behaviour Analytics",
      "Customer Trend Analysis",
      "Customer Data Analysis",
      "Behavioural Analytics Applications",
      "Customer Insights Solutions",
    ],
    flow: ["Customer interactions", "Behaviour analysis", "Customer insights", "Business strategy"],
    cta: "Understand Your Customer Data",
    service: "Customer Behaviour Analysis",
    tone: "dark",
    visualFirst: true,
  },
  {
    id: "intelligent-data-processing",
    number: "05",
    eyebrow: "Intelligent Data Processing",
    title: "Transform Complex Data Into Useful Business Information",
    paragraphs: [
      "Intelligent data processing combines data processing techniques, machine learning, automation, and suitable analytical approaches to help businesses manage, organize, analyze, and interpret information.",
      "We develop intelligent data processing solutions tailored to business data, application requirements, operational workflows, and information management needs. Where the output feeds a decision, a person can review it first.",
    ],
    items: [
      "Intelligent Data Processing",
      "Machine Learning Data Processing",
      "Automated Data Analysis",
      "Data Classification",
      "Data Pattern Recognition",
      "Data Extraction Solutions",
      "Data Processing Applications",
      "Intelligent Information Processing",
      "Data Transformation",
      "Data Analysis Automation",
      "Structured Data Processing",
      "Custom Data Intelligence Solutions",
    ],
    flow: ["Raw data", "Data processing", "Machine learning", "Insights", "Business output"],
    cta: "Build Your Intelligent Data Solution",
    service: "Intelligent Data Processing",
    tone: "light",
    visualFirst: true,
  },
];

export const CAPABILITY_FLOW = [
  { step: "01", title: "Data", text: "Records from the systems in scope." },
  { step: "02", title: "Processing", text: "Cleaning, joining, and feature preparation." },
  { step: "03", title: "Machine learning", text: "A model chosen for the question and the data." },
  { step: "04", title: "Prediction", text: "A forecast, class, score, or recommendation." },
  { step: "05", title: "Insights", text: "Charts and notes a person can read." },
  { step: "06", title: "Decisions", text: "People decide. The model supports the choice." },
];

export const CAPABILITIES = [
  "Machine Learning Development",
  "Predictive Analytics",
  "Predictive Model Development",
  "Business Forecasting",
  "Recommendation System Development",
  "Customer Behaviour Analytics",
  "Data Pattern Recognition",
  "Intelligent Data Processing",
  "Machine Learning Applications",
  "Data Analysis Solutions",
  "Custom ML Applications",
  "AI-Powered Analytics",
  "Data-Driven Decision Support",
  "Intelligent Business Applications",
  "Machine Learning Integration",
];

export const WORK_STAGES = [
  { title: "Data Collection", text: "Collect relevant information from suitable databases, applications, business systems, and data sources." },
  { title: "Data Preparation", text: "Organize, clean, transform, and prepare data for the intended machine learning task." },
  { title: "Data Analysis", text: "Explore patterns, relationships, trends, features, and relevant information within the prepared dataset." },
  { title: "Model Development", text: "Select suitable machine learning approaches and develop models according to the problem, data, and requirements." },
  { title: "Model Evaluation", text: "Evaluate model performance using appropriate testing methods, metrics, validation approaches, and relevant datasets." },
  { title: "Prediction & Insights", text: "Generate predictions, recommendations, classifications, or analytical outputs based on the model's capabilities." },
  { title: "Application Integration", text: "Integrate the machine learning solution into relevant applications, dashboards, workflows, or business systems." },
];

export const BI_ITEMS = [
  "Business Data Analytics",
  "Data Pattern Recognition",
  "Predictive Insights",
  "Business Performance Analytics",
  "Data Visualization",
  "Intelligent Analytics",
  "Business Intelligence Applications",
  "Data-Driven Decision Support",
  "Trend Analysis",
  "Performance Monitoring",
  "Custom Analytics Applications",
  "Machine Learning Insights",
];

export const MODEL_ITEMS = [
  "Machine Learning Model Development",
  "Predictive Model Development",
  "Classification Models",
  "Regression Models",
  "Forecasting Models",
  "Recommendation Models",
  "Data Pattern Recognition",
  "Model Evaluation",
  "Machine Learning Applications",
  "Custom ML Solutions",
  "Model Integration",
  "Predictive Software Development",
];

export const PLANNING_ITEMS = [
  "Sales Forecasting",
  "Demand Forecasting",
  "Revenue Forecasting",
  "Inventory Forecasting",
  "Business Trend Forecasting",
  "Operational Forecasting",
  "Forecasting Dashboards",
  "Business Planning Applications",
  "Predictive Business Insights",
  "Forecasting Model Development",
  "Custom Forecasting Tools",
  "Data-Driven Planning",
];

export const PERSONALIZATION_ITEMS = [
  "Recommendation Engine Development",
  "Ecommerce Product Recommendations",
  "Personalized Content",
  "Customer Preference Analysis",
  "User-Based Recommendations",
  "Product Discovery",
  "Recommendation Algorithms",
  "Personalized Experiences",
  "Customer Interaction Analysis",
  "Recommendation API Development",
  "Custom Recommendation Applications",
  "Intelligent Personalization",
];

export const CUSTOMER_ITEMS = [
  "Customer Behaviour Analytics",
  "Customer Data Analysis",
  "Customer Segmentation",
  "Customer Journey Analytics",
  "Purchase Pattern Analysis",
  "Customer Engagement Analytics",
  "User Behaviour Analysis",
  "Customer Preference Analytics",
  "Customer Trend Analysis",
  "Customer Insights Applications",
  "Behavioural Data Processing",
  "Customer Analytics Solutions",
];

export const PROCESSING_ITEMS = [
  "Intelligent Data Processing",
  "Data Classification",
  "Data Pattern Recognition",
  "Automated Data Analysis",
  "Data Transformation",
  "Data Processing Applications",
  "Information Processing",
  "Data Extraction",
  "Structured Data Processing",
  "Data Workflow Development",
  "Intelligent Analytics",
  "Custom Data Processing Solutions",
];

export const INTEGRATION_ITEMS = [
  "Machine Learning Integration",
  "Predictive Analytics Integration",
  "Model API Integration",
  "Machine Learning Application Development",
  "Website ML Integration",
  "Mobile App ML Integration",
  "Business Software Integration",
  "Predictive Dashboard Integration",
  "Data Processing Integration",
  "Recommendation System Integration",
  "ML Application Connectivity",
  "Custom ML Integration",
];
export const INTEGRATION_NODES = ["Website", "Backend", "ML model", "Database", "Business dashboard", "Application"];

export const TECH_FLOW = ["Data sources", "Data processing", "ML model", "Evaluation", "Predictions", "Application"];
export const TECH_CATEGORIES = [
  { title: "Machine Learning", items: ["Machine Learning Models", "Predictive Modelling", "Classification", "Regression", "Recommendation Algorithms"] },
  { title: "Data & Analytics", items: ["Data Processing", "Data Analysis", "Data Transformation", "Data Visualization", "Business Analytics"] },
  { title: "Predictive Intelligence", items: ["Predictive Analytics", "Forecasting Models", "Trend Analysis", "Pattern Recognition", "Intelligent Insights"] },
  { title: "Applications & Integration", items: ["Machine Learning Applications", "Predictive Dashboards", "API Integration", "Backend Development", "Application Integration"] },
  { title: "Data Workflows", items: ["Data Collection", "Data Preparation", "Feature Processing", "Model Evaluation", "Data Pipeline Development"] },
];

export const INDUSTRIES = [
  { name: "Ecommerce & Retail", desc: "Product recommendations, demand and sales forecasting, inventory forecasting, customer behaviour analysis, and purchasing patterns." },
  { name: "Healthcare", desc: "Suitable data analytics, operational forecasting, and information processing, subject to privacy and regulatory requirements." },
  { name: "Education", desc: "Enrolment and engagement analysis, resource planning, content recommendations, and institutional reporting." },
  { name: "IT & Technology", desc: "Predictive software, recommendation applications, intelligent data processing, ML integration, and analytics platforms." },
  { name: "Manufacturing", desc: "Operational forecasting, process analysis, predictive insights, data processing, and production analytics." },
  { name: "Logistics", desc: "Demand forecasting, operational analytics, planning insights, trend analysis, and data-driven workflows." },
  { name: "Finance", desc: "Suitable predictive analytics, forecasting, risk analysis, and transaction patterns, subject to relevant data and requirements." },
  { name: "Real Estate", desc: "Market trend analysis, business forecasting, customer analytics, data processing, and predictive applications." },
  { name: "Hospitality", desc: "Booking demand patterns, guest preference analysis, occupancy planning views, and personalized offers." },
  { name: "Professional Services", desc: "Workload forecasting, client behaviour analysis, document classification, and reporting support." },
  { name: "Startups", desc: "A first model on early data, recommendation or scoring features, and analytics that can grow with the product." },
  { name: "SMEs & Enterprises", desc: "Forecasting, segmentation, data processing, and ML features connected to existing business software." },
];

export const WHY = [
  { title: "Business-Focused Solutions", text: "We develop machine learning solutions around business requirements, data availability, operational needs, and practical use cases." },
  { title: "Custom Machine Learning", text: "We develop predictive models, recommendation systems, analytical applications, and intelligent data solutions tailored to project requirements." },
  { title: "Data-Driven Development", text: "We focus on relevant data, suitable analytical approaches, model evaluation, and meaningful business insights." },
  { title: "Practical Implementation", text: "We develop machine learning solutions intended to support real business applications, workflows, and decision-making." },
  { title: "Scalable Architecture", text: "We consider maintainability, future requirements, application architecture, and business growth." },
  { title: "Application Integration", text: "We help integrate machine learning functionality into websites, software applications, platforms, and business systems where appropriate." },
  { title: "Technical Planning", text: "We assess data requirements, business objectives, technical environments, model possibilities, and application needs before implementation." },
  { title: "End-to-End Development", text: "We support planning, data preparation, development, testing, integration, deployment, and maintenance according to project requirements." },
];

export const PROCESS = [
  { title: "Discovery & Consultation", text: "Understand business objectives, problems, data requirements, analytical needs, and desired outcomes." },
  { title: "Data Assessment", text: "Review available datasets, data sources, data quality, data availability, and data preparation requirements." },
  { title: "Problem Definition", text: "Define the machine learning problem, intended output, evaluation requirements, suitable approaches, and project scope." },
  { title: "Data Preparation", text: "Organize, clean, transform, and prepare relevant datasets for analysis and model development." },
  { title: "Model Development", text: "Develop suitable machine learning models, analytical workflows, forecasting approaches, or recommendation systems." },
  { title: "Evaluation & Validation", text: "Evaluate model performance using suitable testing methods, validation datasets, metrics, and project requirements." },
  { title: "Integration & Deployment", text: "Integrate the solution into relevant applications, dashboards, software platforms, workflows, or business systems." },
  { title: "Monitoring & Improvement", text: "Monitor application and model performance, review relevant data changes, refine functionality, and maintain the solution according to project requirements." },
];

export const QUALITY_ITEMS = [
  "Data Quality Assessment",
  "Data Preparation",
  "Model Evaluation",
  "Validation Methods",
  "Prediction Limitations",
  "Data Privacy Considerations",
  "Data Handling",
  "Model Monitoring",
  "Performance Review",
  "Data Quality Controls",
  "Testing & Validation",
  "Responsible Implementation",
];
export const QUALITY_STEPS = ["Data sources", "Data quality", "Processing", "Model development", "Evaluation", "Validation", "Prediction", "Human review"];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is machine learning?",
    a: "Machine learning is a way of building software that learns patterns from data instead of following only fixed rules. A model is trained on historical records and then used to estimate, classify, group, or recommend on new records. How well it works depends on the data and on how it is evaluated.",
  },
  {
    q: "What are machine learning development services?",
    a: "They cover the work of taking a business question to a working machine learning feature: assessing the data, defining the problem, preparing datasets, building and evaluating a model, integrating it into an application or dashboard, and maintaining it. RoyalTech Innovation provides these services as a machine learning development company in Mohali.",
  },
  {
    q: "What is predictive analytics?",
    a: "Predictive analytics uses historical data, statistical techniques, and machine learning to estimate what may happen next, such as demand, churn risk, or revenue range. The result is an estimate with limits, used to support planning rather than to replace judgement.",
  },
  {
    q: "What is the difference between machine learning and predictive analytics?",
    a: "Machine learning is a set of methods for learning from data. Predictive analytics is a use of those methods, often alongside statistics, to anticipate outcomes. Machine learning can also power tasks that are not predictions, such as classification or recommendations.",
  },
  {
    q: "What is business forecasting?",
    a: "Business forecasting estimates future sales, demand, revenue, inventory, or operational load from historical data and business context. A forecast is shown as a range with its assumptions so planners can see how much weight to give it.",
  },
  {
    q: "Can machine learning predict future business trends?",
    a: "It can estimate possible trends when there is enough relevant history and the business is stable enough for past patterns to say something about the future. It cannot guarantee a result, and a sudden market change can make an estimate less useful. We state those limits in the solution.",
  },
  {
    q: "What are recommendation systems?",
    a: "A recommendation system suggests products, content, or services that may be relevant to a user, based on behaviour, preferences, and context. Common uses are product suggestions in ecommerce, related content, and next-step prompts in an application.",
  },
  {
    q: "How do recommendation engines work?",
    a: "A recommendation engine looks at what users viewed, bought, or rated, and at item attributes, then ranks items for each user. Approaches range from simple popularity and rules to similarity-based and learned models. We choose the approach to match the data available, starting simple when history is limited.",
  },
  {
    q: "What is customer behaviour analysis?",
    a: "It is the study of how customers interact with a business: what they browse, buy, return, and how they move through a journey. The output is usually segments, patterns, and trends that marketing, sales, and product teams can act on, handled according to the applicable privacy requirements.",
  },
  {
    q: "What is intelligent data processing?",
    a: "It is the use of processing rules and machine learning to organize and interpret information: extracting fields from documents, classifying records, spotting patterns, and transforming data into a structured form. A person can review the output where it affects a decision.",
  },
  {
    q: "Can machine learning be developed for my business?",
    a: "Often yes, if there is a clear question and relevant data. We start with a discovery conversation and a data assessment. Sometimes the right answer is a simpler analytics or reporting solution, and we say so.",
  },
  {
    q: "What data is required for machine learning development?",
    a: "Relevant, reasonably consistent records that relate to the question, such as past orders, customer activity, or operational logs. The amount needed depends on the task. We review quality, coverage, and privacy before any model work begins.",
  },
  {
    q: "Can machine learning be integrated into existing software?",
    a: "Yes. A model can be exposed through an API or built into a website, mobile app, dashboard, CRM, or business application. The method depends on your architecture and data workflow, and it is planned at the start.",
  },
  {
    q: "Can you develop custom predictive analytics applications?",
    a: "Yes. We build predictive applications around your data and decisions, including forecasting dashboards, scoring features, and planning tools. The scope is agreed after the data review.",
  },
  {
    q: "How much does machine learning development cost?",
    a: "Cost depends on data readiness, the type of model, how it is integrated, and how it will be monitored. There is no fixed price for every project. We scope the work after discovery and share an estimate that matches that scope.",
  },
  {
    q: "How long does a machine learning project take?",
    a: "Timing depends on the state of the data, the problem, the number of integrations, and how quickly decisions are made. A first proof of value on a narrow question is different from a full production system. We outline a realistic schedule after discovery rather than quoting a single duration.",
  },
  {
    q: "Can machine learning help ecommerce businesses?",
    a: "It can support product recommendations, demand and inventory forecasting, customer segmentation, and search or discovery features, where there is enough order and browsing data. We also look at ecommerce integration so the output reaches the store.",
  },
  {
    q: "Can machine learning be used for sales forecasting?",
    a: "Yes. Sales forecasting is a common use. A model uses past sales, seasonality, and relevant business inputs to produce a forecast range. The forecast supports planning and is reviewed against actual results over time.",
  },
  {
    q: "What technologies are used in machine learning development?",
    a: "We choose methods, data processing approaches, and application and integration technologies to suit each project. A tool is used when it fits the data, the team, and the environment where it will run. The exact stack is confirmed during planning.",
  },
  {
    q: "Do you provide machine learning maintenance and support?",
    a: "Yes, according to project requirements. That can include monitoring model and application performance, reviewing data changes, retraining or refining a model when data shifts, and updating integrations and dashboards.",
  },
];
