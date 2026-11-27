/**
 * Content and SEO data for /services/mobile-app-development.
 * Kept as plain data so the page (server) can build metadata + JSON-LD from the same source
 * that the visible sections render, which keeps the structured data honest.
 */

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/mobile-app-development";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "Mobile App Development Company | Android, iOS & Custom Apps – RoyalTech";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation offers Android, iOS, cross-platform and custom mobile app development services to build scalable, user-friendly applications for businesses.";

export const SEO_KEYWORDS = [
  "mobile app development company",
  "mobile app development services",
  "mobile application development company",
  "mobile application development services",
  "Android app development company",
  "iOS app development company",
  "iPhone app development",
  "cross-platform app development",
  "custom mobile app development",
  "mobile app developers",
  "React Native app development",
  "Flutter app development",
  "mobile app development company in Mohali",
  "mobile app development company in Chandigarh",
  "app development company in Punjab",
  "RoyalTech Innovation",
];

/* ------------------------------------------------------------------ */
/* Hero + intro                                                        */
/* ------------------------------------------------------------------ */

export const EXPERTISE = ["Android Apps", "iOS Apps", "Cross-Platform Apps", "Custom App Development"];

export const INTRO_POINTS = [
  { title: "Intuitive experiences", text: "Interfaces designed around how your customers actually use their phones." },
  { title: "Reliable functionality", text: "Dependable features, secure integrations and carefully tested releases." },
  { title: "Scalable architecture", text: "A foundation that can grow with your users, features and business." },
];

/* ------------------------------------------------------------------ */
/* Six service categories                                              */
/* ------------------------------------------------------------------ */

export type ServiceBlock = {
  id: string;
  num: string;
  short: string;
  blurb: string;
  title: string;
  description: string[];
  items: string[];
  tech?: string[];
  cta: string;
  ctaService: string;
};

export const SERVICES: ServiceBlock[] = [
  {
    id: "mobile-app-development",
    num: "01",
    short: "Mobile App Development",
    blurb: "Business, ecommerce and on-demand apps with seamless user experiences.",
    title: "Mobile App Development",
    description: [
      "We create feature-rich mobile applications that deliver seamless user experiences, reliable performance, and meaningful business value across mobile devices.",
    ],
    items: [
      "Business Mobile Applications",
      "Customer-Facing Applications",
      "Ecommerce Mobile Apps",
      "On-Demand Applications",
      "Enterprise Mobile Applications",
      "Booking & Appointment Apps",
      "Interactive Mobile Experiences",
      "App Integration Solutions",
    ],
    cta: "Build Your Mobile App",
    ctaService: "Mobile App Development",
  },
  {
    id: "android-app-development",
    num: "02",
    short: "Android App Development",
    blurb: "Native Android apps built for performance across a wide range of devices.",
    title: "Android App Development",
    description: [
      "Build powerful Android applications designed for performance, usability, and compatibility across a wide range of Android devices.",
      "Our Android development solutions help businesses launch reliable mobile experiences tailored to their users, workflows, and goals. As an Android app development company in Mohali, we work with startups and growing businesses that want a dependable Android presence.",
    ],
    items: [
      "Custom Android Applications",
      "Native Android App Development",
      "Business & Enterprise Apps",
      "Ecommerce Android Apps",
      "Android UI/UX Design",
      "API Integration",
      "Android Testing & Optimization",
      "Play Store Deployment Assistance",
    ],
    tech: ["Kotlin", "Java", "Android SDK"],
    cta: "Develop Your Android App",
    ctaService: "Android App Development",
  },
  {
    id: "ios-app-development",
    num: "03",
    short: "iOS App Development",
    blurb: "Elegant, secure iPhone and iPad apps for the Apple ecosystem.",
    title: "iOS App Development",
    description: [
      "Deliver premium mobile experiences for Apple users through intuitive, elegant, secure, and high-performance iOS applications.",
      "We develop iOS apps that combine refined user experience, modern functionality, and seamless integration with the Apple ecosystem. Our iOS app development company in Mohali supports everything from first release to long-term improvement.",
    ],
    items: [
      "Custom iOS Applications",
      "iPhone App Development",
      "iPad App Development",
      "Business & Enterprise Apps",
      "Ecommerce Applications",
      "iOS UI/UX Design",
      "API & Backend Integration",
      "App Store Deployment Assistance",
    ],
    tech: ["Swift", "SwiftUI", "iOS SDK"],
    cta: "Build Your iOS Application",
    ctaService: "iOS App Development",
  },
  {
    id: "cross-platform-app-development",
    num: "04",
    short: "Cross-Platform App Development",
    blurb: "One application experience across Android and iOS.",
    title: "Cross-Platform App Development",
    description: [
      "Build applications that work seamlessly across Android and iOS while maintaining a consistent user experience, efficient development, and scalable architecture.",
      "Our cross-platform solutions help businesses launch mobile applications across multiple platforms using a unified development approach.",
    ],
    items: [
      "Android & iOS Applications",
      "Shared Codebase",
      "Consistent UI/UX",
      "Faster Development Cycles",
      "Reduced Development Complexity",
      "API Integrations",
      "Scalable Architecture",
      "Cross-Platform Testing",
    ],
    tech: ["React Native", "Flutter"],
    cta: "Explore Cross-Platform Solutions",
    ctaService: "Cross-Platform App Development",
  },
  {
    id: "custom-mobile-app-development",
    num: "05",
    short: "Custom Mobile App Development",
    blurb: "Tailored apps and platforms built around your workflows and goals.",
    title: "Custom Mobile App Development Built Around Your Business",
    description: [
      "Every business has unique requirements. We develop custom mobile applications tailored to your workflows, target audience, operational needs, and long-term business objectives.",
      "From simple business apps to complex mobile platforms, our solutions are designed around functionality, flexibility, scalability, and user experience. As an app development company in Punjab, we take on projects that need far more than a template.",
    ],
    items: [
      "Custom Business Applications",
      "SaaS Mobile Applications",
      "Enterprise Mobile Solutions",
      "Customer Portals",
      "Employee Applications",
      "CRM-Integrated Apps",
      "Booking & On-Demand Apps",
      "Ecommerce & Marketplace Apps",
      "Custom API Integrations",
      "Real-Time Functionalities",
    ],
    cta: "Discuss Your Custom App",
    ctaService: "Custom Mobile App Development",
  },
  {
    id: "app-maintenance-support",
    num: "06",
    short: "App Maintenance & Support",
    blurb: "Updates, monitoring and improvements after launch.",
    title: "Reliable App Maintenance & Support",
    description: [
      "Launching your application is just the beginning. We help keep your mobile app secure, updated, optimized, and ready to meet evolving user expectations.",
      "Our maintenance and support services help businesses maintain app stability, improve performance, resolve issues, and continuously enhance their digital products.",
    ],
    items: [
      "Bug Fixes & Troubleshooting",
      "Performance Optimization",
      "OS Compatibility Updates",
      "Security Updates",
      "Feature Enhancements",
      "App Version Updates",
      "API & Backend Maintenance",
      "UI/UX Improvements",
      "Technical Monitoring",
      "Ongoing Support",
    ],
    cta: "Maintain Your Mobile App",
    ctaService: "App Maintenance & Support",
  },
];

/* ------------------------------------------------------------------ */
/* Technologies                                                        */
/* ------------------------------------------------------------------ */

export type TechKey =
  | "kotlin" | "java" | "androidsdk" | "swift" | "swiftui" | "ios"
  | "reactnative" | "flutter" | "node" | "dotnet" | "laravel" | "rest" | "graphql"
  | "mongodb" | "mysql" | "postgres" | "firebase";

export const TECH_GROUPS: { id: string; title: string; note: string; items: { name: string; key: TechKey }[] }[] = [
  {
    id: "android",
    title: "Native Android",
    note: "Platform-native apps for Android phones and tablets.",
    items: [
      { name: "Kotlin", key: "kotlin" },
      { name: "Java", key: "java" },
      { name: "Android SDK", key: "androidsdk" },
    ],
  },
  {
    id: "ios",
    title: "Native iOS",
    note: "Platform-native apps for iPhone and iPad.",
    items: [
      { name: "Swift", key: "swift" },
      { name: "SwiftUI", key: "swiftui" },
      { name: "iOS SDK", key: "ios" },
    ],
  },
  {
    id: "cross",
    title: "Cross-Platform",
    note: "One shared codebase for Android and iOS.",
    items: [
      { name: "React Native", key: "reactnative" },
      { name: "Flutter", key: "flutter" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Integration",
    note: "Servers and APIs that power your app.",
    items: [
      { name: "Node.js", key: "node" },
      { name: ".NET", key: "dotnet" },
      { name: "Laravel", key: "laravel" },
      { name: "REST APIs", key: "rest" },
      { name: "GraphQL", key: "graphql" },
    ],
  },
  {
    id: "database",
    title: "Database",
    note: "Reliable data storage for every scale.",
    items: [
      { name: "MongoDB", key: "mongodb" },
      { name: "MySQL", key: "mysql" },
      { name: "PostgreSQL", key: "postgres" },
      { name: "Firebase", key: "firebase" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Feature showcase (15 features in five groups)                       */
/* ------------------------------------------------------------------ */

export const FEATURE_GROUPS: { id: string; title: string; summary: string; features: string[] }[] = [
  {
    id: "account",
    title: "Accounts & Identity",
    summary: "Welcome users securely and let them make the app their own.",
    features: ["User Registration & Authentication", "User Profiles", "Social Media Integration"],
  },
  {
    id: "engage",
    title: "Engagement & Communication",
    summary: "Keep customers informed, connected and coming back.",
    features: ["Push Notifications", "Real-Time Communication", "In-App Messaging"],
  },
  {
    id: "commerce",
    title: "Commerce & Discovery",
    summary: "Help people find what they need and pay with confidence.",
    features: ["Ecommerce Functionality", "Secure Payment Integration", "Search & Filters"],
  },
  {
    id: "location",
    title: "Location & Scheduling",
    summary: "Connect the app to the real world and to your calendar.",
    features: ["GPS & Location Services", "Booking & Scheduling", "Cloud Connectivity"],
  },
  {
    id: "insight",
    title: "Insight & Control",
    summary: "Give your team the tools to manage and understand the app.",
    features: ["Analytics & Reporting", "Admin Dashboards", "API Integrations"],
  },
];

/* ------------------------------------------------------------------ */
/* UI/UX                                                               */
/* ------------------------------------------------------------------ */

export const DESIGN_ITEMS = [
  "Mobile UI/UX Design",
  "User Journey Mapping",
  "Wireframing",
  "App Prototyping",
  "Interactive Design",
  "User-Centered Design",
  "Responsive Layouts",
  "Accessibility",
  "Usability Testing",
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const PROCESS = [
  {
    num: "01",
    title: "Discovery & Strategy",
    text: "We understand your business goals, target audience, app requirements, features, and project vision.",
    deliverables: ["Requirement workshops", "Feature and platform planning", "Project roadmap and scope"],
  },
  {
    num: "02",
    title: "UI/UX & Prototyping",
    text: "We design user journeys, wireframes, interactive prototypes, and polished mobile interfaces.",
    deliverables: ["User journeys and wireframes", "Interactive prototypes", "Polished interface designs"],
  },
  {
    num: "03",
    title: "Development",
    text: "Our team builds the application using appropriate technologies, integrations, and scalable architecture.",
    deliverables: ["App and API development", "Backend and integrations", "Regular progress builds"],
  },
  {
    num: "04",
    title: "Testing & Quality Assurance",
    text: "We test app functionality, performance, usability, compatibility, and security across relevant devices.",
    deliverables: ["Functional and usability testing", "Device and OS compatibility", "Performance and security checks"],
  },
  {
    num: "05",
    title: "Launch & Deployment",
    text: "We prepare and assist with deployment to Google Play Store and Apple App Store, according to platform requirements.",
    deliverables: ["Store listing preparation", "Build submission support", "Release planning"],
  },
  {
    num: "06",
    title: "Maintenance & Growth",
    text: "We provide updates, improvements, technical support, and enhancements as your application evolves.",
    deliverables: ["Updates and bug fixes", "Technical support and monitoring", "Feature enhancements"],
  },
];

/* ------------------------------------------------------------------ */
/* Why RoyalTech                                                       */
/* ------------------------------------------------------------------ */

export const WHY = [
  { title: "Business-Focused Development", text: "We align app functionality with your business goals and customer needs." },
  { title: "Custom Solutions", text: "We develop applications tailored to your unique requirements." },
  { title: "Modern Technologies", text: "We use reliable, modern frameworks and development tools." },
  { title: "User-Centered Design", text: "We focus on intuitive experiences that keep users engaged." },
  { title: "Scalable Architecture", text: "We build applications designed to support future growth." },
  { title: "Quality & Testing", text: "We prioritize functionality, reliability, performance, and usability." },
  { title: "Transparent Communication", text: "We maintain clear communication throughout the development lifecycle." },
  { title: "Ongoing Support", text: "We assist with maintenance, updates, and continuous improvements." },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export const INDUSTRIES = [
  { id: "ecommerce", name: "Ecommerce & Retail", text: "Shopping apps with product catalogues, secure checkout, order tracking and customer loyalty features." },
  { id: "healthcare", name: "Healthcare", text: "Appointment booking, patient portals and secure digital workflows for clinics and care providers." },
  { id: "education", name: "Education & E-Learning", text: "Learning apps with course delivery, progress tracking and student engagement tools." },
  { id: "realestate", name: "Real Estate", text: "Property apps with search filters, map views, enquiries and tools for agents." },
  { id: "food", name: "Food & Restaurant", text: "Ordering, table booking and delivery apps that make it easier to serve customers." },
  { id: "logistics", name: "Logistics & Transportation", text: "Fleet, delivery and tracking apps with live location and status updates." },
  { id: "fintech", name: "Finance & Fintech", text: "Secure mobile experiences for payments, wallets, account management and financial services." },
  { id: "travel", name: "Travel & Hospitality", text: "Booking, itinerary and guest experience apps for travel and hospitality brands." },
  { id: "manufacturing", name: "Manufacturing", text: "Mobile tools for inventory, field teams, approvals and production workflows." },
  { id: "startups", name: "Startups", text: "MVP and product apps built to validate ideas quickly and scale as you grow." },
  { id: "professional", name: "Professional Services", text: "Client portals, appointment scheduling and secure communication for service firms." },
  { id: "ondemand", name: "On-Demand Businesses", text: "Service-on-demand apps that connect customers, providers and operators in real time." },
] as const;

export type IndustryId = (typeof INDUSTRIES)[number]["id"];

/* ------------------------------------------------------------------ */
/* Comparison                                                          */
/* ------------------------------------------------------------------ */

export const COMPARE_ROWS = ["Platform", "Technology", "Performance considerations", "Development approach", "Best suited for"] as const;

export const COMPARE = [
  {
    name: "Native Android Development",
    tag: "Android",
    values: [
      "Android phones and tablets, distributed through Google Play.",
      "Kotlin, Java and the Android SDK.",
      "Direct access to Android platform APIs and device features, with behaviour tuned to Android.",
      "A dedicated Android codebase built to Android design and platform conventions.",
      "Android-first audiences and apps that rely on Android-specific capabilities.",
    ],
  },
  {
    name: "Native iOS Development",
    tag: "iOS",
    values: [
      "iPhone and iPad, distributed through the Apple App Store.",
      "Swift, SwiftUI and the iOS SDK.",
      "Direct access to Apple platform APIs and ecosystem features, with behaviour tuned to iOS.",
      "A dedicated iOS codebase built to Apple design and platform guidelines.",
      "iOS-first audiences and experiences that integrate closely with the Apple ecosystem.",
    ],
  },
  {
    name: "Cross-Platform Development",
    tag: "Android + iOS",
    values: [
      "Android and iOS from a single project.",
      "React Native or Flutter.",
      "Well suited to most business apps. Very demanding graphics or platform-specific features may call for native modules.",
      "A shared codebase with platform-specific code added where it is needed.",
      "Reaching both platforms with a consistent interface and an efficient delivery plan.",
    ],
  },
  {
    name: "Custom Mobile App Development",
    tag: "Requirement-led",
    values: [
      "Android, iOS or both, chosen to match your users.",
      "Native, cross-platform and backend technologies selected around your requirements.",
      "Depends on the architecture, which we plan around your workflows, data and expected usage.",
      "Discovery, architecture and tailored features, integrations and admin tools.",
      "Unique workflows, system integrations, marketplaces, SaaS products and enterprise needs.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Performance, security & growth                                      */
/* ------------------------------------------------------------------ */

export const PERFORMANCE = [
  { title: "Optimized App Performance", text: "Efficient code, lean assets and smooth interactions." },
  { title: "Secure Authentication", text: "Protected sign-in flows and sensible session handling." },
  { title: "Efficient API Integration", text: "Clean, well-structured communication with your backend." },
  { title: "Responsive Mobile Interfaces", text: "Layouts that adapt to different screen sizes." },
  { title: "Scalable Backend Architecture", text: "Server design that can grow with your user base." },
  { title: "Database Optimization", text: "Thoughtful data structure and efficient queries." },
  { title: "Mobile App Testing", text: "Functional, usability and device-level testing." },
  { title: "App Store Optimization Readiness", text: "Store listing assets and metadata prepared for launch." },
  { title: "Android Compatibility", text: "Testing across relevant Android versions and devices." },
  { title: "iOS Compatibility", text: "Testing across relevant iPhone and iPad models." },
  { title: "Security Best Practices", text: "Secure coding habits and careful handling of user data." },
  { title: "Accessibility Considerations", text: "Readable text, clear contrast and usable touch targets." },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does mobile app development cost?",
    a: "The cost of mobile app development depends on the scope of your app: the number of features, the platforms you target (Android, iOS or both), UI/UX complexity, third-party integrations, backend requirements, and the support you need after launch. A focused business app costs far less than a multi-role platform or enterprise solution. After a short discovery conversation we provide a clear estimate based on your requirements, so you can plan your budget with confidence.",
  },
  {
    q: "How long does it take to develop a mobile application?",
    a: "Timelines depend on complexity. A focused app with core features may take a few weeks to a couple of months, while larger platforms with custom backends, integrations and multiple user roles take longer. During discovery we agree a milestone-based plan, so you know what to expect at each stage of design, development, testing and launch.",
  },
  {
    q: "Do you develop Android applications?",
    a: "Yes. Our Android app development services cover custom and native Android applications built with Kotlin, Java and the Android SDK, including UI/UX design, API integration, testing and Google Play Store deployment assistance. As an Android app development company in Mohali, we build Android apps for startups, growing businesses and enterprises.",
  },
  {
    q: "Do you develop iOS applications?",
    a: "Yes. We develop iPhone and iPad applications using Swift, SwiftUI and the iOS SDK, from interface design and backend integration to testing and App Store deployment assistance. Our iOS app development approach focuses on refined, secure experiences that feel at home in the Apple ecosystem.",
  },
  {
    q: "What is cross-platform app development?",
    a: "Cross-platform app development means building one application that runs on both Android and iOS, usually with frameworks such as React Native or Flutter. A shared codebase can reduce development effort and keep the experience consistent across platforms, while platform-specific code is added where a feature needs it.",
  },
  {
    q: "Which is better: native or cross-platform development?",
    a: "Neither approach is better in every situation. Native development suits apps that need deep platform features or a highly platform-specific experience. Cross-platform development suits businesses that want to reach Android and iOS users with a consistent product and an efficient delivery plan. We review your goals, audience, budget and roadmap, then recommend the approach that fits.",
  },
  {
    q: "Can you develop custom mobile applications?",
    a: "Yes. Custom mobile app development is a core part of what we do. Our mobile app developers in Mohali design and build apps around your workflows, audience and integrations, from customer apps and employee tools to SaaS products, marketplaces and enterprise solutions.",
  },
  {
    q: "Do you provide app maintenance and support?",
    a: "Yes. Our mobile application maintenance and mobile app support services include bug fixes, OS compatibility updates, security updates, performance optimization, API and backend maintenance, feature enhancements and technical monitoring, so your app stays stable and up to date after launch.",
  },
  {
    q: "Can you integrate payment gateways and APIs?",
    a: "Yes. We integrate payment gateways, maps and location services, notification services, CRM and ERP systems, social sign-in and other third-party or custom REST and GraphQL APIs. Integrations are planned during discovery and tested thoroughly before release.",
  },
  {
    q: "Do you help publish apps on Google Play and Apple App Store?",
    a: "Yes. We assist with preparing builds, store listing content and submissions for Google Play and the Apple App Store according to each platform's requirements. App review decisions and timings are controlled by the stores, so we plan releases with that in mind.",
  },
  {
    q: "Can you convert my website into a mobile app?",
    a: "In many cases, yes. Depending on your goals, we can build a native or cross-platform app that reuses your existing content and APIs, or recommend a different approach if it serves your users better. If your website needs improvements first, our website development team can help with that too.",
  },
  {
    q: "Do you provide mobile app UI/UX design?",
    a: "Yes. Mobile UI/UX design is part of our mobile app design and development process, covering user journeys, wireframes, interactive prototypes, accessible layouts and usability testing. You can also work with our UI/UX design team on a design-only engagement.",
  },
  {
    q: "Can you upgrade or redesign an existing application?",
    a: "Yes. Mobile app modernization can include refreshing the interface, improving performance, updating for newer operating systems, adding features, moving to a more scalable architecture or rebuilding on a modern framework. We begin with a review of your current app and recommend the most practical path.",
  },
  {
    q: "Do you provide backend development for mobile apps?",
    a: "Yes. We build the backend services, databases and APIs that power your app, using technologies such as Node.js, .NET and Laravel with REST or GraphQL APIs and databases including MongoDB, MySQL, PostgreSQL and Firebase, along with admin dashboards for managing your app.",
  },
];

/* ------------------------------------------------------------------ */
/* Related internal links + contact                                    */
/* ------------------------------------------------------------------ */

export const RELATED_LINKS = [
  { href: "/services/website-development", label: "Website Development" },
  { href: "/services/ui-ux-design", label: "UI/UX Design" },
  { href: "/services/software-development", label: "Custom Software Development" },
  { href: "/services/crm", label: "CRM Solutions" },
  { href: "/services/digital-marketing", label: "Digital Marketing & SEO" },
  { href: "/services/it-consulting", label: "IT Consulting" },
];

export const CONTACT = {
  phone: "+91 86790 16505",
  phoneHref: "tel:+918679016505",
  email: "info@royaltechinnovation.co.in",
  address: "Gate No. 5, Imperial Tower, CP 67, Mohali, Punjab 160062",
};
