export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  title: string;
  desc: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceSpecializedItem {
  tag: string;
  title: string;
  desc: string;
}

export interface ServiceSpecializedSection {
  eyebrow: string;
  title: string;
  text: string;
  items: ServiceSpecializedItem[];
}

export interface IndustryDetail {
  img: string;
  text: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
heroTitle: string;
  heroHighlight: string;
  heroText: string;
  overview: string[];
  features: ServiceFeature[];
  technologies: string[];
  process: ServiceProcessStep[];
  stats: ServiceStat[];
  industries: string[];
  faqs: ServiceFaq[];
}

export const servicesData: ServiceDetail[] = [
  {
    "slug": "crm-software",
    "title": "CRM Software",
    "icon": "crm",
    "tagline": "Custom CRM Development",
    "short": "Custom CRM systems that centralise leads, automate follow-ups and give your sales team a single source of truth.",
    "metaTitle": "Custom CRM Software Development Company | RoyalTech Innovation",
    "metaDescription": "RoyalTech Innovation builds custom CRM software with lead management, sales pipelines, automation and analytics tailored to your business workflow.",
    "heroTitle": "Custom CRM Software that",
    "heroHighlight": "closes more deals",
    "heroText": "Stop juggling spreadsheets and scattered chats. We design CRM platforms around how your team actually sells, supports and grows customers.",
    "overview": [
      "Off-the-shelf CRMs force your process into their template. A custom CRM from RoyalTech Innovation mirrors your exact sales stages, approval flows and reporting needs, so adoption is natural and data stays clean.",
      "From lead capture on your website and WhatsApp to invoicing and after-sales support, we connect every customer touchpoint into one secure dashboard accessible on web and mobile."
    ],
    "features": [
      {
        "title": "Lead & Pipeline Management",
        "desc": "Capture leads from website, ads, calls and WhatsApp, then track them through drag-and-drop sales stages."
      },
      {
        "title": "Workflow Automation",
        "desc": "Auto-assign leads, trigger reminders, send emails and SMS follow-ups without manual effort."
      },
      {
        "title": "Role-Based Access",
        "desc": "Granular permissions for admins, managers and executives keep sensitive data protected."
      },
      {
        "title": "Reports & Dashboards",
        "desc": "Real-time revenue, conversion and team performance insights with exportable reports."
      },
      {
        "title": "Third-Party Integrations",
        "desc": "Connect payment gateways, accounting tools, email, telephony and marketing platforms."
      },
      {
        "title": "Mobile CRM Access",
        "desc": "Field teams update deals, log visits and check customer history from any device."
      }
    ],
    "technologies": [
      "React",
      "Next.js",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS",
      "REST APIs",
      "WhatsApp API",
      "Twilio",
      "Power BI"
    ],
    "process": [
      {
        "title": "Process Audit",
        "desc": "We map your sales, support and operations workflows with your team."
      },
      {
        "title": "CRM Blueprint",
        "desc": "Modules, data model, user roles and automations are defined and approved."
      },
      {
        "title": "Agile Development",
        "desc": "Built in sprints with demos every two weeks for early feedback."
      },
      {
        "title": "Data Migration",
        "desc": "Existing contacts and deals are cleaned and imported safely."
      },
      {
        "title": "Training & Support",
        "desc": "Team onboarding, documentation and ongoing maintenance."
      }
    ],
    "stats": [
      {
        "value": "40%",
        "label": "Faster lead response"
      },
      {
        "value": "3x",
        "label": "Better follow-up rate"
      },
      {
        "value": "100%",
        "label": "Data ownership"
      },
      {
        "value": "24/7",
        "label": "Secure cloud access"
      }
    ],
    "industries": [
      "Real Estate",
      "Education",
      "Healthcare",
      "Manufacturing",
      "Finance",
      "Travel"
    ],
    "faqs": [
      {
        "q": "Why choose a custom CRM over Salesforce or Zoho?",
        "a": "A custom CRM has no per-user licence fees, fits your exact workflow and you own the code and data. It scales with your business without paying for features you never use."
      },
      {
        "q": "How long does CRM development take?",
        "a": "A focused CRM MVP typically takes 6 to 10 weeks. Larger systems with multiple integrations may take 3 to 5 months, delivered in phases."
      },
      {
        "q": "Can you migrate data from our existing CRM or Excel?",
        "a": "Yes. We clean, de-duplicate and migrate data from Excel, Google Sheets, Zoho, HubSpot and other systems."
      },
      {
        "q": "Do you provide support after launch?",
        "a": "Yes, we offer maintenance plans covering bug fixes, updates, backups, security patches and new feature development."
      }
    ]
  },
  {
    "slug": "website-development",
    "title": "Website Development",
    "icon": "web",
    "tagline": "Fast, SEO-Ready Websites",
    "short": "High-performance, responsive websites built for speed, search rankings and conversions.",
    "metaTitle": "Website Development Company | Responsive & SEO-Friendly Websites | RoyalTech",
    "metaDescription": "Get fast, responsive and SEO-friendly websites from RoyalTech Innovation. Corporate sites, eCommerce, landing pages and CMS development using Next.js and React.",
    "heroTitle": "Websites engineered for",
    "heroHighlight": "speed & growth",
    "heroText": "Your website is your best salesperson. We build fast, secure and search-optimised websites that turn visitors into enquiries.",
    "overview": [
      "We combine strategic UX, clean code and technical SEO to deliver websites that load in under two seconds, rank on Google and look stunning on every screen size.",
      "Whether you need a corporate website, an eCommerce store or a high-converting landing page, our team handles design, development, hosting and maintenance end to end."
    ],
    "features": [
      {
        "title": "Corporate Websites",
        "desc": "Professional, brand-focused websites that build trust and credibility."
      },
      {
        "title": "eCommerce Development",
        "desc": "Secure online stores with payment gateways, inventory and order management."
      },
      {
        "title": "CMS Websites",
        "desc": "Easily update content with WordPress, headless CMS or custom admin panels."
      },
      {
        "title": "Landing Pages",
        "desc": "Conversion-focused pages for ads, launches and lead generation campaigns."
      },
      {
        "title": "Technical SEO Built-in",
        "desc": "Schema, meta tags, sitemaps, Core Web Vitals and clean URL structure."
      },
      {
        "title": "Website Maintenance",
        "desc": "Regular updates, backups, uptime monitoring and security hardening."
      }
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "Shopify",
      "Node.js",
      "Strapi",
      "Vercel",
      "Cloudflare",
      "GSAP",
      "Framer Motion"
    ],
    "process": [
      {
        "title": "Discovery",
        "desc": "Goals, audience, competitors and content strategy are defined."
      },
      {
        "title": "Wireframe & Design",
        "desc": "Sitemap, wireframes and pixel-perfect UI designs for approval."
      },
      {
        "title": "Development",
        "desc": "Responsive, accessible and performance-optimised coding."
      },
      {
        "title": "Testing & SEO",
        "desc": "Cross-browser QA, speed optimisation and on-page SEO setup."
      },
      {
        "title": "Launch & Care",
        "desc": "Deployment, analytics setup and ongoing support."
      }
    ],
    "stats": [
      {
        "value": "<2s",
        "label": "Average load time"
      },
      {
        "value": "95+",
        "label": "Lighthouse score"
      },
      {
        "value": "100%",
        "label": "Mobile responsive"
      },
      {
        "value": "150+",
        "label": "Websites delivered"
      }
    ],
    "industries": [
      "Startups",
      "Retail & eCommerce",
      "Hospitality",
      "Healthcare",
      "Education",
      "Real Estate"
    ],
    "faqs": [
      {
        "q": "How much does a website cost?",
        "a": "Cost depends on pages, features and integrations. A business website starts affordably, while eCommerce and custom portals are quoted after a requirement call."
      },
      {
        "q": "Will my website be SEO-friendly?",
        "a": "Yes. Every website includes technical SEO foundations: optimised meta tags, schema markup, sitemap, fast loading and mobile-first design."
      },
      {
        "q": "Can I update the website myself?",
        "a": "Absolutely. We provide an easy CMS or admin panel and train your team to edit content, images and blogs."
      },
      {
        "q": "Do you provide hosting and domain?",
        "a": "We can set up and manage hosting, domain, SSL and business email for you."
      }
    ]
  },
  {
    "slug": "software-development",
    "title": "Software Development",
    "icon": "software",
    "tagline": "Custom Software Solutions",
    "short": "Scalable custom software, SaaS platforms and ERP systems that automate operations and reduce costs.",
    "metaTitle": "Custom Software Development Services | SaaS & ERP | RoyalTech Innovation",
    "metaDescription": "RoyalTech Innovation delivers custom software development, SaaS products, ERP systems and enterprise applications with secure, scalable cloud architecture.",
    "heroTitle": "Custom software built to",
    "heroHighlight": "scale your business",
    "heroText": "From internal tools to full SaaS products, we engineer secure and scalable software that automates work and unlocks growth.",
    "overview": [
      "Every business has unique operations. Our software engineers translate your processes into robust applications with clean architecture, automated testing and cloud-native deployment.",
      "We build ERP systems, billing and inventory platforms, SaaS products, dashboards and API integrations that grow with your users and data."
    ],
    "features": [
      {
        "title": "SaaS Product Development",
        "desc": "Multi-tenant platforms with subscriptions, billing and admin panels."
      },
      {
        "title": "ERP Systems",
        "desc": "Inventory, HR, accounts and production modules in one connected system."
      },
      {
        "title": "API Development & Integration",
        "desc": "Secure REST and GraphQL APIs connecting your apps and third-party services."
      },
      {
        "title": "Cloud & DevOps",
        "desc": "CI/CD pipelines, containerisation and auto-scaling on AWS, Azure or GCP."
      },
      {
        "title": "Legacy Modernisation",
        "desc": "Upgrade outdated systems to modern, maintainable technology stacks."
      },
      {
        "title": "QA & Testing",
        "desc": "Automated and manual testing for reliable, bug-free releases."
      }
    ],
    "technologies": [
      "Node.js",
      "Python",
      "Django",
      "Laravel",
      ".NET",
      "Java",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "GraphQL"
    ],
    "process": [
      {
        "title": "Requirement Analysis",
        "desc": "Business goals and technical requirements documented in detail."
      },
      {
        "title": "Architecture",
        "desc": "Scalable system design, tech stack and security planning."
      },
      {
        "title": "Sprint Development",
        "desc": "Agile sprints with transparent progress tracking."
      },
      {
        "title": "Quality Assurance",
        "desc": "Unit, integration, performance and security testing."
      },
      {
        "title": "Deploy & Scale",
        "desc": "Cloud deployment, monitoring and continuous improvement."
      }
    ],
    "stats": [
      {
        "value": "60%",
        "label": "Manual work reduced"
      },
      {
        "value": "99.9%",
        "label": "Uptime target"
      },
      {
        "value": "50+",
        "label": "Products shipped"
      },
      {
        "value": "100%",
        "label": "IP ownership"
      }
    ],
    "industries": [
      "Logistics",
      "Manufacturing",
      "Fintech",
      "Healthcare",
      "EdTech",
      "Retail"
    ],
    "faqs": [
      {
        "q": "Which technology do you use for custom software?",
        "a": "We choose the stack based on your needs, commonly Node.js, Python, Laravel or .NET with React frontends and PostgreSQL or MongoDB databases."
      },
      {
        "q": "Do I own the source code?",
        "a": "Yes. You receive full intellectual property rights and source code ownership after project completion."
      },
      {
        "q": "Do you sign an NDA?",
        "a": "Yes, we sign NDAs before discussing project details to protect your ideas and data."
      },
      {
        "q": "Which engagement models do you offer?",
        "a": "Fixed price for well-defined scope, time and material for evolving projects, and dedicated developer teams."
      }
    ]
  },
  {
    "slug": "mobile-app-development",
    "title": "Mobile App Development",
    "icon": "mobile",
    "tagline": "iOS & Android Apps",
    "short": "Native and cross-platform mobile apps with smooth UX, offline support and secure backends.",
    "metaTitle": "Mobile App Development Company | Android, iOS & Flutter | RoyalTech",
    "metaDescription": "Build Android and iOS apps with RoyalTech Innovation. Flutter, React Native and native app development with intuitive UX, secure APIs and Play Store launch.",
    "heroTitle": "Mobile apps your users",
    "heroHighlight": "love to open",
    "heroText": "We design and develop high-performance Android and iOS apps, from idea and UI to App Store launch and growth.",
    "overview": [
      "Our mobile team builds cross-platform apps with Flutter and React Native, and native apps with Swift and Kotlin when performance demands it, sharing one reliable backend.",
      "We focus on intuitive navigation, fast load times, push notifications, offline sync and analytics so your app earns great reviews and high retention."
    ],
    "features": [
      {
        "title": "Android App Development",
        "desc": "Kotlin and cross-platform apps optimised for every Android device."
      },
      {
        "title": "iOS App Development",
        "desc": "Swift and SwiftUI apps following Apple Human Interface Guidelines."
      },
      {
        "title": "Cross-Platform Apps",
        "desc": "Flutter and React Native apps from one codebase to cut cost and time."
      },
      {
        "title": "On-Demand & eCommerce Apps",
        "desc": "Booking, delivery, marketplace and shopping apps with live tracking."
      },
      {
        "title": "Backend & Admin Panel",
        "desc": "Secure APIs, real-time database and powerful admin dashboards."
      },
      {
        "title": "App Store Launch",
        "desc": "Play Store and App Store submission, ASO and post-launch updates."
      }
    ],
    "technologies": [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
      "Node.js",
      "Dart",
      "SwiftUI",
      "Jetpack Compose",
      "GraphQL",
      "Stripe",
      "Google Maps"
    ],
    "process": [
      {
        "title": "Idea Validation",
        "desc": "Market research, user personas and feature prioritisation."
      },
      {
        "title": "UI/UX Prototyping",
        "desc": "Clickable prototypes for real user feedback."
      },
      {
        "title": "App Development",
        "desc": "Frontend, backend and API development in sprints."
      },
      {
        "title": "Device Testing",
        "desc": "Testing on real devices for performance and stability."
      },
      {
        "title": "Launch & Growth",
        "desc": "Store publishing, analytics and feature updates."
      }
    ],
    "stats": [
      {
        "value": "4.8★",
        "label": "Average app rating"
      },
      {
        "value": "40%",
        "label": "Lower cost with cross-platform"
      },
      {
        "value": "1M+",
        "label": "End users served"
      },
      {
        "value": "60fps",
        "label": "Smooth performance"
      }
    ],
    "industries": [
      "Food Delivery",
      "Healthcare",
      "Fitness",
      "Education",
      "Travel",
      "Fintech"
    ],
    "faqs": [
      {
        "q": "Flutter or native: which is better?",
        "a": "Flutter suits most business apps with faster delivery and lower cost. Native is recommended for heavy graphics, AR or deep hardware integration."
      },
      {
        "q": "How long does it take to build an app?",
        "a": "A simple app takes 6 to 8 weeks; feature-rich apps with admin panels usually take 3 to 6 months."
      },
      {
        "q": "Will you publish the app on Play Store and App Store?",
        "a": "Yes, we handle the full submission process including screenshots, descriptions and compliance."
      },
      {
        "q": "Do you maintain the app after launch?",
        "a": "Yes, we provide OS compatibility updates, bug fixes, performance monitoring and new features."
      }
    ]
  },
  {
    "slug": "digital-marketing-seo",
    "title": "Digital Marketing & SEO",
    "icon": "marketing",
    "tagline": "Search, Social & Performance",
    "short": "Data-driven SEO, social media and paid campaigns that grow traffic, leads and revenue.",
    "metaTitle": "Digital Marketing & SEO Services | Rank Higher on Google | RoyalTech",
    "metaDescription": "Grow traffic and leads with RoyalTech Innovation's SEO, local SEO, Google Ads, social media marketing and content strategy services with transparent reporting.",
    "heroTitle": "Get found, get clicks,",
    "heroHighlight": "get customers",
    "heroText": "Result-driven SEO and digital marketing that puts your brand in front of buyers when they are ready to act.",
    "overview": [
      "We blend technical SEO, high-quality content and performance marketing to build sustainable organic growth and predictable lead flow.",
      "Every campaign is tracked with clear KPIs: rankings, traffic, cost per lead and ROI, shared through monthly transparent reports."
    ],
    "features": [
      {
        "title": "Search Engine Optimisation",
        "desc": "Keyword research, on-page, technical SEO and quality link building."
      },
      {
        "title": "Local SEO",
        "desc": "Google Business Profile optimisation to win the local map pack."
      },
      {
        "title": "Google & Meta Ads",
        "desc": "PPC campaigns focused on high-intent leads and lower cost per acquisition."
      },
      {
        "title": "Social Media Marketing",
        "desc": "Content calendars, reels and community management across platforms."
      },
      {
        "title": "Content Marketing",
        "desc": "Blogs, landing pages and copy that rank and convert."
      },
      {
        "title": "Analytics & CRO",
        "desc": "GA4, Search Console and conversion rate optimisation."
      }
    ],
    "technologies": [
      "Google Analytics 4",
      "Search Console",
      "Semrush",
      "Ahrefs",
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Tag Manager",
      "Hotjar",
      "Looker Studio",
      "Mailchimp",
      "Canva"
    ],
    "process": [
      {
        "title": "Audit",
        "desc": "Website, competitor and keyword gap analysis."
      },
      {
        "title": "Strategy",
        "desc": "Channel mix, content plan and KPI targets."
      },
      {
        "title": "Execution",
        "desc": "SEO fixes, content publishing and campaign launch."
      },
      {
        "title": "Optimisation",
        "desc": "A/B testing, bid tuning and content refresh."
      },
      {
        "title": "Reporting",
        "desc": "Monthly reports with insights and next steps."
      }
    ],
    "stats": [
      {
        "value": "250%",
        "label": "Avg. organic traffic growth"
      },
      {
        "value": "35%",
        "label": "Lower cost per lead"
      },
      {
        "value": "Top 10",
        "label": "Rankings for target keywords"
      },
      {
        "value": "Monthly",
        "label": "Transparent reports"
      }
    ],
    "industries": [
      "Local Businesses",
      "eCommerce",
      "Clinics",
      "Real Estate",
      "Coaching",
      "B2B Services"
    ],
    "faqs": [
      {
        "q": "How long does SEO take to show results?",
        "a": "Most websites see measurable ranking and traffic improvements within 3 to 6 months, depending on competition and site health."
      },
      {
        "q": "Do you guarantee first position on Google?",
        "a": "No ethical agency can guarantee position one. We guarantee white-hat practices, consistent work and transparent progress reporting."
      },
      {
        "q": "What is included in local SEO?",
        "a": "Google Business Profile optimisation, local citations, reviews strategy, location pages and local keyword targeting."
      },
      {
        "q": "Can you manage our ad budget?",
        "a": "Yes, we plan, run and optimise Google and Meta ad campaigns, with spend paid directly to the platform from your account."
      }
    ]
  },
  {
    "slug": "ui-ux-graphic-design",
    "title": "UI/UX & Graphic Design",
    "icon": "design",
    "tagline": "Design That Converts",
    "short": "User-centred interfaces and brand visuals that look premium and make every interaction effortless.",
    "metaTitle": "UI/UX Design & Graphic Design Services | RoyalTech Innovation",
    "metaDescription": "RoyalTech Innovation offers UI/UX design, wireframing, prototyping, branding, logo and graphic design services that improve usability and brand recall.",
    "heroTitle": "Design experiences that",
    "heroHighlight": "feel effortless",
    "heroText": "Research-led UI/UX and bold graphic design that makes your product easy to use and your brand impossible to forget.",
    "overview": [
      "Great design is how it works, not just how it looks. We start with user research and journeys, then craft wireframes, prototypes and polished interfaces validated through testing.",
      "Our graphic design team builds cohesive brand identities: logos, colour systems, social creatives, brochures and pitch decks that tell your story consistently."
    ],
    "features": [
      {
        "title": "User Research",
        "desc": "Interviews, personas and journey maps to understand real needs."
      },
      {
        "title": "Wireframing & Prototyping",
        "desc": "Interactive Figma prototypes to validate ideas before development."
      },
      {
        "title": "Web & App UI Design",
        "desc": "Modern, accessible interfaces with consistent design systems."
      },
      {
        "title": "Branding & Logo Design",
        "desc": "Memorable logos, typography and brand guidelines."
      },
      {
        "title": "Marketing Creatives",
        "desc": "Social posts, banners, brochures and ad creatives."
      },
      {
        "title": "Usability Testing",
        "desc": "Data-backed improvements to reduce friction and drop-offs."
      }
    ],
    "technologies": [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Framer",
      "Spline",
      "Lottie",
      "Miro",
      "Maze",
      "Blender",
      "Canva"
    ],
    "process": [
      {
        "title": "Research",
        "desc": "Understand users, business goals and competitors."
      },
      {
        "title": "Information Architecture",
        "desc": "User flows and content structure."
      },
      {
        "title": "Wireframes",
        "desc": "Low-fidelity layouts focused on usability."
      },
      {
        "title": "Visual Design",
        "desc": "High-fidelity UI with design system."
      },
      {
        "title": "Prototype & Handoff",
        "desc": "Testing and developer-ready handoff."
      }
    ],
    "stats": [
      {
        "value": "2x",
        "label": "Higher conversion"
      },
      {
        "value": "45%",
        "label": "Fewer support queries"
      },
      {
        "value": "300+",
        "label": "Screens designed"
      },
      {
        "value": "100%",
        "label": "Developer-ready files"
      }
    ],
    "industries": [
      "SaaS",
      "Fintech",
      "eCommerce",
      "Healthcare",
      "Startups",
      "Lifestyle Brands"
    ],
    "faqs": [
      {
        "q": "What is the difference between UI and UX?",
        "a": "UX is about how a product works and feels for users; UI is the visual layer, including layout, colours, typography and interactions. We deliver both."
      },
      {
        "q": "Which tools do you use for design?",
        "a": "Primarily Figma for UI/UX, with Adobe Illustrator, Photoshop and After Effects for branding and motion."
      },
      {
        "q": "Will I get the source files?",
        "a": "Yes, you receive editable Figma, AI and PSD source files along with exported assets."
      },
      {
        "q": "Can you redesign our existing app or website?",
        "a": "Yes. We audit your current UX, identify pain points and deliver a modern redesign that keeps what works."
      }
    ]
  },
  {
    "slug": "it-consulting",
    "title": "IT Consulting",
    "icon": "consulting",
    "tagline": "Strategy & Digital Transformation",
    "short": "Expert technology advice, cloud strategy and digital transformation roadmaps for smarter decisions.",
    "metaTitle": "IT Consulting Services | Digital Transformation & Cloud Strategy | RoyalTech",
    "metaDescription": "RoyalTech Innovation's IT consulting helps businesses with technology strategy, cloud migration, cybersecurity, architecture review and digital transformation.",
    "heroTitle": "Technology decisions made",
    "heroHighlight": "with confidence",
    "heroText": "Our consultants align technology with your business goals, reducing risk, controlling costs and accelerating transformation.",
    "overview": [
      "Choosing the right tech stack, cloud provider or vendor can make or break growth. We provide unbiased advice backed by hands-on engineering experience.",
      "From IT audits and cloud migration to security reviews and CTO-as-a-service, we give you a clear roadmap and help execute it."
    ],
    "features": [
      {
        "title": "Technology Strategy",
        "desc": "Roadmaps aligning IT investment with business goals."
      },
      {
        "title": "Cloud Migration",
        "desc": "Plan and execute moves to AWS, Azure or Google Cloud safely."
      },
      {
        "title": "Cybersecurity Assessment",
        "desc": "Vulnerability audits, compliance and security best practices."
      },
      {
        "title": "Architecture Review",
        "desc": "Evaluate scalability, performance and cost of existing systems."
      },
      {
        "title": "Digital Transformation",
        "desc": "Automate manual processes and modernise operations."
      },
      {
        "title": "CTO as a Service",
        "desc": "Fractional tech leadership for startups and SMEs."
      }
    ],
    "technologies": [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Microsoft 365",
      "Google Workspace",
      "Jira",
      "ServiceNow",
      "Okta",
      "Cloudflare"
    ],
    "process": [
      {
        "title": "Assessment",
        "desc": "Review current infrastructure, tools and pain points."
      },
      {
        "title": "Gap Analysis",
        "desc": "Identify risks, inefficiencies and opportunities."
      },
      {
        "title": "Roadmap",
        "desc": "Prioritised plan with budgets and timelines."
      },
      {
        "title": "Implementation",
        "desc": "Hands-on execution or vendor guidance."
      },
      {
        "title": "Review",
        "desc": "Measure outcomes and continuously optimise."
      }
    ],
    "stats": [
      {
        "value": "30%",
        "label": "IT cost reduction"
      },
      {
        "value": "Zero",
        "label": "Downtime migrations"
      },
      {
        "value": "10+",
        "label": "Years of expertise"
      },
      {
        "value": "360°",
        "label": "Technology view"
      }
    ],
    "industries": [
      "SMEs",
      "Enterprises",
      "Startups",
      "Healthcare",
      "Finance",
      "Government"
    ],
    "faqs": [
      {
        "q": "Who needs IT consulting?",
        "a": "Any business planning new software, cloud migration, scaling infrastructure or struggling with slow, costly or insecure systems."
      },
      {
        "q": "Is IT consulting only for large companies?",
        "a": "No. Startups and SMEs benefit greatly by avoiding costly technology mistakes early on."
      },
      {
        "q": "Do you also implement the recommendations?",
        "a": "Yes. Our development and cloud teams can execute the roadmap end to end, or support your internal team."
      },
      {
        "q": "How is consulting billed?",
        "a": "We offer fixed-price audits, monthly retainers and hourly advisory, depending on your needs."
      }
    ]
  }
];

export const serviceSpecializedMap: Record<string, ServiceSpecializedSection> = {
  "crm-software": {
    "eyebrow": "CRM modules",
    "title": "Pick the modules your team needs",
    "text": "Start with the essentials and add modules as your business grows — every module shares the same customer data.",
    "items": [
      {
        "tag": "Sales",
        "title": "Sales CRM",
        "desc": "Leads, deals, quotations and targets with a visual pipeline."
      },
      {
        "tag": "Support",
        "title": "Helpdesk & Tickets",
        "desc": "Ticket queues, SLAs and customer history in one view."
      },
      {
        "tag": "Marketing",
        "title": "Campaign Manager",
        "desc": "Bulk WhatsApp, email and SMS campaigns with tracking."
      },
      {
        "tag": "Finance",
        "title": "Billing & Invoices",
        "desc": "GST-ready invoices, payment links and dues reminders."
      },
      {
        "tag": "HR",
        "title": "Team & Attendance",
        "desc": "Field staff check-ins, tasks and performance scores."
      },
      {
        "tag": "Insights",
        "title": "Analytics Hub",
        "desc": "Revenue forecasts, funnel drop-offs and source ROI."
      }
    ]
  },
  "website-development": {
    "eyebrow": "Website types",
    "title": "Websites we build every month",
    "text": "Each website is fast, mobile-first and SEO-ready from day one.",
    "items": [
      {
        "tag": "Business",
        "title": "Corporate Websites",
        "desc": "Credible multi-page sites that explain your services clearly."
      },
      {
        "tag": "Store",
        "title": "eCommerce Stores",
        "desc": "Shopify and custom stores with secure payments and inventory."
      },
      {
        "tag": "Leads",
        "title": "Landing Pages",
        "desc": "Campaign pages designed to convert ad traffic into enquiries."
      },
      {
        "tag": "Portal",
        "title": "Web Portals",
        "desc": "Member, vendor and customer portals with secure logins."
      },
      {
        "tag": "Content",
        "title": "Blogs & CMS Sites",
        "desc": "Easy-to-edit sites your team updates without a developer."
      },
      {
        "tag": "Speed",
        "title": "Website Redesign",
        "desc": "Modernise old sites and improve Core Web Vitals scores."
      }
    ]
  },
  "software-development": {
    "eyebrow": "Solutions",
    "title": "Software we engineer",
    "text": "Custom systems that replace manual work, spreadsheets and disconnected tools.",
    "items": [
      {
        "tag": "ERP",
        "title": "ERP Systems",
        "desc": "Purchase, inventory, production and accounts in one platform."
      },
      {
        "tag": "SaaS",
        "title": "SaaS Products",
        "desc": "Multi-tenant products with subscriptions and admin panels."
      },
      {
        "tag": "Ops",
        "title": "Inventory & POS",
        "desc": "Barcode billing, multi-store stock and supplier management."
      },
      {
        "tag": "HR",
        "title": "HRMS & Payroll",
        "desc": "Attendance, leave, payroll and employee self-service."
      },
      {
        "tag": "API",
        "title": "Integrations & APIs",
        "desc": "Connect legacy software, payment gateways and third-party tools."
      },
      {
        "tag": "AI",
        "title": "AI Automation",
        "desc": "Document reading, chatbots and smart recommendations."
      }
    ]
  },
  "mobile-app-development": {
    "eyebrow": "App types",
    "title": "Apps that people keep using",
    "text": "Native-quality Android and iOS apps from one efficient codebase.",
    "items": [
      {
        "tag": "Commerce",
        "title": "Shopping Apps",
        "desc": "Catalogues, carts, wallets and push-notification offers."
      },
      {
        "tag": "On-demand",
        "title": "Delivery & Booking",
        "desc": "Real-time tracking, slot booking and partner apps."
      },
      {
        "tag": "Health",
        "title": "Healthcare Apps",
        "desc": "Appointments, video consults and digital prescriptions."
      },
      {
        "tag": "Learn",
        "title": "eLearning Apps",
        "desc": "Video courses, quizzes and offline downloads."
      },
      {
        "tag": "Social",
        "title": "Community Apps",
        "desc": "Chat, feeds, profiles and moderation tools."
      },
      {
        "tag": "Business",
        "title": "Field Force Apps",
        "desc": "GPS attendance, orders and visit reports for sales teams."
      }
    ]
  },
  "digital-marketing-seo": {
    "eyebrow": "Growth channels",
    "title": "Every channel, one growth plan",
    "text": "We combine organic and paid channels so you get leads today and rankings tomorrow.",
    "items": [
      {
        "tag": "SEO",
        "title": "Search Engine Optimisation",
        "desc": "Technical fixes, keyword content and quality backlinks."
      },
      {
        "tag": "Local",
        "title": "Google Business Profile",
        "desc": "Rank in the map pack and collect more 5-star reviews."
      },
      {
        "tag": "PPC",
        "title": "Google Ads",
        "desc": "Search, Performance Max and YouTube campaigns tracked to leads."
      },
      {
        "tag": "Social",
        "title": "Meta & Instagram Ads",
        "desc": "Creative-led ads with retargeting and lead forms."
      },
      {
        "tag": "Content",
        "title": "Content Marketing",
        "desc": "Blogs, reels and case studies that build trust."
      },
      {
        "tag": "CRO",
        "title": "Conversion Optimisation",
        "desc": "Heatmaps and A/B tests that turn visitors into buyers."
      }
    ]
  },
  "ui-ux-graphic-design": {
    "eyebrow": "Deliverables",
    "title": "What you get from our studio",
    "text": "Editable source files, a clear design system and assets ready for developers.",
    "items": [
      {
        "tag": "Brand",
        "title": "Logo & Brand Identity",
        "desc": "Logo, colour palette, typography and brand guidelines."
      },
      {
        "tag": "UX",
        "title": "Wireframes & Prototypes",
        "desc": "Clickable Figma prototypes tested with real users."
      },
      {
        "tag": "UI",
        "title": "App & Web UI",
        "desc": "Pixel-perfect screens for every device and state."
      },
      {
        "tag": "System",
        "title": "Design Systems",
        "desc": "Reusable components that keep products consistent."
      },
      {
        "tag": "Social",
        "title": "Social Media Creatives",
        "desc": "Post, story and ad templates in your brand style."
      },
      {
        "tag": "Motion",
        "title": "Motion & 3D",
        "desc": "Lottie animations, explainer videos and 3D visuals."
      }
    ]
  },
  "it-consulting": {
    "eyebrow": "Engagements",
    "title": "How we can work together",
    "text": "Flexible consulting models — from a one-time audit to an ongoing virtual CTO.",
    "items": [
      {
        "tag": "Audit",
        "title": "IT & Security Audit",
        "desc": "A clear report on risks, costs and quick wins in 2 weeks."
      },
      {
        "tag": "Cloud",
        "title": "Cloud Migration",
        "desc": "Move servers and apps to AWS, Azure or GCP with zero data loss."
      },
      {
        "tag": "Strategy",
        "title": "Digital Roadmap",
        "desc": "A 12-month technology plan aligned to business goals."
      },
      {
        "tag": "CTO",
        "title": "Virtual CTO",
        "desc": "Senior tech leadership on a monthly retainer."
      },
      {
        "tag": "Vendor",
        "title": "Vendor Selection",
        "desc": "Unbiased evaluation of software and service providers."
      },
      {
        "tag": "Support",
        "title": "Managed IT Support",
        "desc": "Monitoring, backups and helpdesk for your team."
      }
    ]
  }
};

export const industriesMap: Record<string, IndustryDetail> = {
  "Real Estate": {
    "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=70",
    "text": "Listings, site-visit tracking and buyer follow-ups."
  },
  "Education": {
    "img": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=70",
    "text": "Admissions, student portals and parent communication."
  },
  "EdTech": {
    "img": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=70",
    "text": "Learning platforms, live classes and assessments."
  },
  "Healthcare": {
    "img": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=70",
    "text": "Patient records, appointments and telemedicine."
  },
  "Clinics": {
    "img": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=70",
    "text": "Local SEO and booking funnels that fill appointment slots."
  },
  "Manufacturing": {
    "img": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=70",
    "text": "Production planning, inventory and dealer networks."
  },
  "Finance": {
    "img": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=70",
    "text": "Secure portals, compliance workflows and reporting."
  },
  "Fintech": {
    "img": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=70",
    "text": "Payments, wallets and KYC-ready digital products."
  },
  "Travel": {
    "img": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=70",
    "text": "Booking engines, itineraries and customer support."
  },
  "Startups": {
    "img": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=700&q=70",
    "text": "MVPs and launch-ready products built for speed."
  },
  "Retail & eCommerce": {
    "img": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=70",
    "text": "High-converting stores with smooth checkout."
  },
  "eCommerce": {
    "img": "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=700&q=70",
    "text": "Product discovery, carts and repeat-purchase journeys."
  },
  "Retail": {
    "img": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=70",
    "text": "POS, stock sync and omnichannel customer data."
  },
  "Hospitality": {
    "img": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=70",
    "text": "Direct bookings, menus and guest experiences."
  },
  "Logistics": {
    "img": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=70",
    "text": "Fleet tracking, dispatch and delivery visibility."
  },
  "Food Delivery": {
    "img": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=70",
    "text": "Ordering apps with live tracking and payments."
  },
  "Fitness": {
    "img": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=70",
    "text": "Workout, membership and trainer booking apps."
  },
  "Local Businesses": {
    "img": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=70",
    "text": "Google Maps ranking and nearby customer leads."
  },
  "Coaching": {
    "img": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=70",
    "text": "Lead funnels, webinars and course enrolments."
  },
  "B2B Services": {
    "img": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=70",
    "text": "LinkedIn, content and account-based lead generation."
  },
  "SaaS": {
    "img": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=70",
    "text": "Dashboards and onboarding flows users love."
  },
  "Lifestyle Brands": {
    "img": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=70",
    "text": "Bold identities and scroll-stopping social creatives."
  },
  "SMEs": {
    "img": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=70",
    "text": "Right-sized IT roadmaps that control costs."
  },
  "Enterprises": {
    "img": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=70",
    "text": "Cloud migration, security and governance at scale."
  },
  "Government": {
    "img": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=700&q=70",
    "text": "Citizen services, digitisation and secure systems."
  }
};

export const techIconMap: Record<string, string> = {
  "React": "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  "Laravel": "laravel",
  "PostgreSQL": "postgresql",
  "MySQL": "mysql",
  "Redis": "redis",
  "WhatsApp API": "whatsapp",
  "TypeScript": "typescript",
  "Tailwind CSS": "tailwindcss",
  "WordPress": "wordpress",
  "Shopify": "shopify",
  "Strapi": "strapi",
  "Vercel": "vercel",
  "Cloudflare": "cloudflare",
  "GSAP": "greensock",
  "Framer Motion": "framer",
  "Framer": "framer",
  "Python": "python",
  "Django": "django",
  ".NET": "dotnet",
  "Java": "openjdk",
  "MongoDB": "mongodb",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "GraphQL": "graphql",
  "Flutter": "flutter",
  "React Native": "react",
  "Swift": "swift",
  "SwiftUI": "swift",
  "Kotlin": "kotlin",
  "Firebase": "firebase",
  "Dart": "dart",
  "Jetpack Compose": "jetpackcompose",
  "Stripe": "stripe",
  "Google Maps": "googlemaps",
  "Google Analytics 4": "googleanalytics",
  "Search Console": "googlesearchconsole",
  "Semrush": "semrush",
  "Google Ads": "googleads",
  "Meta Ads": "meta",
  "Tag Manager": "googletagmanager",
  "Hotjar": "hotjar",
  "Looker Studio": "looker",
  "Mailchimp": "mailchimp",
  "Figma": "figma",
  "Spline": "spline",
  "Lottie": "lottiefiles",
  "Miro": "miro",
  "Maze": "maze",
  "Blender": "blender",
  "Google Cloud": "googlecloud",
  "Terraform": "terraform",
  "Jira": "jira",
  "Okta": "okta",
  "REST APIs": "swagger"
};

// Photos used for hero backgrounds and related-service cards (keyed by service slug)
export const serviceImageBySlug: Record<string, string> = {
  "crm-software": "/svc-crm.jpg",
  "website-development": "/home-services/web development.png",
  "software-development": "/home-services/Software Development.jpg",
  "mobile-app-development": "/home-services/App Development.jpg",
  "digital-marketing-seo": "/digital-marketing-seo.png",
  "ui-ux-graphic-design": "/home-services/UI UX Design.jpg",
  "it-consulting": "/it consultant.jpeg",
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, count: number = 3): ServiceDetail[] {
  return servicesData.filter((s) => s.slug !== currentSlug).slice(0, count);
}
