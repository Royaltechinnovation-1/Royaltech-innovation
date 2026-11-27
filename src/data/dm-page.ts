/**
 * Content and SEO data for /services/digital-marketing.
 * The page (server) builds metadata and JSON-LD from the same data the visible sections render,
 * so structured data only ever describes content a visitor can actually see.
 * No statistics, rankings, client names or results are claimed anywhere on this page.
 */
import { CONTACT } from "./mobile-app-page";

export { CONTACT };

export const SITE_URL = "https://www.royaltechinnovation.co.in";
export const PAGE_PATH = "/services/digital-marketing";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "Digital Marketing Company | SEO, Social Media & PPC – RoyalTech";
export const SEO_DESCRIPTION =
  "RoyalTech Innovation provides SEO, social media marketing, Google Ads, PPC, content marketing, and email marketing services to help businesses grow online.";

export const SEO_H1 = "Digital Marketing Services That Drive Business Growth";

export const HERO_LEAD =
  "SEO, social media, Google Ads, content and email marketing, planned together around your goals so every channel supports the next.";

export const SEO_KEYWORDS = [
  "digital marketing company",
  "digital marketing agency",
  "digital marketing services",
  "online marketing services",
  "SEO services",
  "search engine optimization services",
  "social media marketing services",
  "Google Ads management",
  "PPC management services",
  "content marketing services",
  "email marketing services",
  "digital marketing strategy",
  "performance marketing",
  "lead generation services",
  "digital marketing company in Mohali",
  "digital marketing agency in Mohali",
  "digital marketing company in Chandigarh",
  "SEO company in Mohali",
  "SEO services in Chandigarh",
  "digital marketing services in Punjab",
  "RoyalTech Innovation",
];

/* ------------------------------------------------------------------ */
/* Hero + intro                                                        */
/* ------------------------------------------------------------------ */

export const HERO_SERVICES = ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Email Marketing"];

export const HERO_NOTES = ["Strategy before spend", "Transparent reporting", "Five channels, one plan"];

export const INTRO_POINTS = [
  { title: "Business-led", text: "Every channel is planned around your goals, not around trends." },
  { title: "Creative + data", text: "Campaign ideas shaped by audience behaviour and search intent." },
  { title: "Joined-up", text: "SEO, social, ads, content and email working from one plan." },
];

/* ------------------------------------------------------------------ */
/* Five service categories                                             */
/* ------------------------------------------------------------------ */

export type MarketingServiceId = "seo" | "social" | "ads" | "content" | "email";

export type MarketingService = {
  id: MarketingServiceId;
  anchor: string;
  num: string;
  short: string;
  blurb: string;
  heading: string;
  description: string[];
  items: string[];
  cta: string;
  local: string;
};

export const SERVICES: MarketingService[] = [
  {
    id: "seo",
    anchor: "search-engine-optimization-services",
    num: "01",
    short: "Search Engine Optimization",
    blurb: "Organic visibility built on technical SEO, content and authority.",
    heading: "Search Engine Optimization That Builds Long-Term Visibility",
    description: [
      "We help businesses improve their organic search visibility, attract relevant website traffic, and build a stronger presence across search engines through strategic and technically sound SEO practices.",
      "Our SEO approach combines keyword research, technical optimization, content strategy, on-page SEO, and authority building to help businesses improve their search visibility over time.",
    ],
    items: [
      "SEO Strategy & Planning",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "Local SEO",
      "Content Optimization",
      "Website SEO Audits",
      "Competitor Analysis",
      "Internal Linking",
      "SEO-Friendly Website Structure",
      "Performance Optimization",
    ],
    cta: "Improve Your Search Visibility",
    local:
      "Looking for an SEO company in Mohali or SEO services in Chandigarh? As an SEO agency, we use sustainable, search-engine-friendly practices and never promise specific rankings.",
  },
  {
    id: "social",
    anchor: "social-media-marketing-services",
    num: "02",
    short: "Social Media Marketing",
    blurb: "Platform-specific content and campaigns that build your brand.",
    heading: "Social Media Marketing That Builds Your Brand",
    description: [
      "Build meaningful connections with your audience, strengthen brand awareness, and create engaging social media experiences through strategic content and platform-specific marketing.",
      "We help businesses establish a consistent social media presence, create engaging campaigns, and connect with the right audience across relevant social platforms.",
    ],
    items: [
      "Social Media Strategy",
      "Social Media Management",
      "Instagram Marketing",
      "Facebook Marketing",
      "LinkedIn Marketing",
      "Social Media Content Creation",
      "Creative Design",
      "Reels & Short-Form Content",
      "Audience Engagement",
      "Social Media Campaigns",
      "Brand Awareness",
      "Social Media Analytics",
    ],
    cta: "Build Your Social Presence",
    local:
      "As a social media marketing company in Mohali, we plan Instagram, Facebook and LinkedIn marketing for businesses across Chandigarh, Punjab and beyond.",
  },
  {
    id: "ads",
    anchor: "google-ads-ppc-management",
    num: "03",
    short: "Google Ads & PPC",
    blurb: "Targeted paid campaigns that reach people already searching.",
    heading: "Google Ads & PPC Campaigns Focused on Growth",
    description: [
      "Reach potential customers when they are actively searching for your products or services.",
      "We create and manage targeted paid advertising campaigns designed to connect businesses with relevant audiences, improve campaign efficiency, and generate valuable marketing opportunities.",
    ],
    items: [
      "Google Search Ads",
      "Google Display Ads",
      "Google Shopping Ads",
      "YouTube Advertising",
      "PPC Campaign Management",
      "Keyword Targeting",
      "Ad Copywriting",
      "Landing Page Optimization",
      "Conversion Tracking",
      "Campaign Optimization",
      "Audience Targeting",
      "Remarketing Campaigns",
    ],
    cta: "Launch Your Advertising Campaign",
    local:
      "Searching for a PPC agency in Mohali? We handle Google Ads management and PPC management services with clear budgets and reporting. Results depend on your market, budget and offer, and are never guaranteed.",
  },
  {
    id: "content",
    anchor: "content-marketing-services",
    num: "04",
    short: "Content Marketing",
    blurb: "Useful, search-aware content that educates and converts.",
    heading: "Content Marketing That Educates, Engages & Converts",
    description: [
      "Create valuable content that attracts your audience, builds trust, communicates your expertise, and supports your digital marketing goals.",
      "Our content marketing approach combines strategic planning, audience-focused content, SEO, creative storytelling, and consistent publishing to help businesses build meaningful digital connections.",
    ],
    items: [
      "Content Marketing Strategy",
      "SEO Blog Writing",
      "Website Content",
      "Landing Page Copywriting",
      "Article & Blog Creation",
      "Content Planning",
      "Content Calendars",
      "Social Media Content",
      "Brand Storytelling",
      "Content Optimization",
      "Lead Generation Content",
      "Educational Content",
    ],
    cta: "Build Your Content Strategy",
    local:
      "Our SEO content writing and content strategy work supports businesses in Mohali, Chandigarh and across India, always written for people first and search engines second.",
  },
  {
    id: "email",
    anchor: "email-marketing-services",
    num: "05",
    short: "Email Marketing",
    blurb: "Segmented, automated campaigns that nurture relationships.",
    heading: "Email Marketing That Builds Customer Relationships",
    description: [
      "Connect with your audience through personalized, relevant, and strategic email campaigns that nurture relationships, encourage engagement, and support customer retention.",
      "We help businesses create targeted email marketing campaigns designed around audience behavior, business objectives, and customer journeys.",
    ],
    items: [
      "Email Marketing Strategy",
      "Newsletter Campaigns",
      "Promotional Emails",
      "Automated Email Campaigns",
      "Lead Nurturing",
      "Email Segmentation",
      "Customer Retention Campaigns",
      "Welcome Email Sequences",
      "Campaign Design",
      "Email Copywriting",
      "Performance Analytics",
      "Email Automation",
    ],
    cta: "Start Your Email Campaign",
    local:
      "Our email campaign management covers strategy, design, copy and automation, so your emails reach the right people with the right message.",
  },
];

/* ------------------------------------------------------------------ */
/* Capabilities (ecosystem)                                            */
/* ------------------------------------------------------------------ */

export const CAPABILITIES = [
  "Digital Marketing Strategy",
  "Audience Research",
  "Competitor Analysis",
  "Keyword Research",
  "SEO Optimization",
  "Content Strategy",
  "Social Media Management",
  "Paid Advertising",
  "Campaign Management",
  "Lead Generation",
  "Conversion Optimization",
  "Analytics & Reporting",
  "Marketing Automation",
  "Brand Positioning",
];

export type EcoKey = "search" | "content" | "social" | "ads" | "website" | "leads" | "analytics";

export const ECOSYSTEM: { key: EcoKey; title: string; text: string }[] = [
  { key: "search", title: "Search", text: "Be found when people look for what you offer." },
  { key: "content", title: "Content", text: "Answer questions and build authority." },
  { key: "social", title: "Social Media", text: "Stay visible and start conversations." },
  { key: "ads", title: "Advertising", text: "Reach targeted audiences faster." },
  { key: "website", title: "Website", text: "Turn visits into enquiries." },
  { key: "leads", title: "Leads", text: "Capture and nurture real interest." },
  { key: "analytics", title: "Analytics", text: "Learn what works and refine the plan." },
];

/* ------------------------------------------------------------------ */
/* Strategy (six stages)                                               */
/* ------------------------------------------------------------------ */

export type StrategyArtKind = "audience" | "competitor" | "plan" | "execute" | "analyse" | "optimise";

export const STRATEGY: { n: string; title: string; text: string; art: StrategyArtKind }[] = [
  {
    n: "01",
    title: "Audience Research",
    text: "Understand your target audience, interests, behavior, search intent, and customer needs.",
    art: "audience",
  },
  {
    n: "02",
    title: "Competitor Analysis",
    text: "Analyze market positioning, competing brands, marketing strategies, and growth opportunities.",
    art: "competitor",
  },
  {
    n: "03",
    title: "Strategy Development",
    text: "Create a tailored marketing strategy aligned with your objectives, audience, and budget.",
    art: "plan",
  },
  {
    n: "04",
    title: "Campaign Execution",
    text: "Implement SEO, social media, content, advertising, and marketing campaigns.",
    art: "execute",
  },
  {
    n: "05",
    title: "Performance Analysis",
    text: "Monitor campaign performance, traffic, engagement, conversions, and relevant KPIs.",
    art: "analyse",
  },
  {
    n: "06",
    title: "Optimization",
    text: "Refine strategies, campaigns, targeting, and content based on performance insights.",
    art: "optimise",
  },
];

/* ------------------------------------------------------------------ */
/* Deep-dive sections                                                  */
/* ------------------------------------------------------------------ */

export const SEO_ITEMS = [
  "Technical SEO",
  "On-Page SEO",
  "Off-Page SEO",
  "Local SEO",
  "Keyword Research",
  "Competitor Analysis",
  "Content Optimization",
  "SEO Audits",
  "Internal Linking",
  "Schema Implementation",
  "Website Performance",
  "Search Intent Analysis",
];

export const SOCIAL_ITEMS = [
  "Content Strategy",
  "Monthly Content Planning",
  "Creative Design",
  "Reels & Video Content",
  "Social Media Campaigns",
  "Audience Engagement",
  "Community Management",
  "Platform Optimization",
  "Brand Consistency",
  "Social Analytics",
];

export const PLATFORMS = ["Instagram", "Facebook", "LinkedIn", "YouTube", "Other platforms, depending on your objectives"];

export const PAID_ITEMS = [
  "Google Search Advertising",
  "Google Display Advertising",
  "YouTube Ads",
  "PPC Campaign Management",
  "Campaign Strategy",
  "Audience Targeting",
  "Keyword Targeting",
  "Landing Page Optimization",
  "Conversion Tracking",
  "Remarketing",
  "Campaign Reporting",
  "Performance Optimization",
];

export const CONTENT_ITEMS = [
  "Blog Strategy",
  "SEO Content",
  "Website Copywriting",
  "Landing Page Content",
  "Educational Articles",
  "Social Media Content",
  "Brand Storytelling",
  "Content Calendars",
  "Topic Research",
  "Content Optimization",
  "Lead Magnets",
  "Content Distribution",
];

export const EMAIL_ITEMS = [
  "Email Campaign Strategy",
  "Newsletter Design",
  "Promotional Campaigns",
  "Email Automation",
  "Welcome Sequences",
  "Lead Nurturing",
  "Audience Segmentation",
  "Customer Retention",
  "Personalized Email Campaigns",
  "Campaign Analytics",
];

export const EMAIL_FLOW: { title: string; text: string }[] = [
  { title: "Subscriber", text: "Joins through a form, offer or checkout." },
  { title: "Welcome Email", text: "Introduces your brand and sets expectations." },
  { title: "Audience Segment", text: "Grouped by interest, behavior or stage." },
  { title: "Campaign", text: "Relevant newsletter or promotion sent." },
  { title: "Engagement", text: "Opens, clicks and replies are tracked." },
  { title: "Follow-Up", text: "Next message depends on what they did." },
];

export const ANALYTICS_ITEMS = [
  "Website Analytics",
  "Campaign Performance",
  "Traffic Analysis",
  "Engagement Metrics",
  "Conversion Tracking",
  "Lead Tracking",
  "Campaign Reporting",
  "Audience Insights",
  "SEO Performance",
  "Advertising Analysis",
  "Performance Optimization",
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export type Industry = {
  id: string;
  name: string;
  text: string;
  query: string;
  headline: string;
  cta: string;
  channels: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "ecommerce",
    name: "Ecommerce & Retail",
    text: "Product-led SEO, Shopping and remarketing ads, social storefront content and email flows that bring shoppers back to the cart.",
    query: "buy running shoes online",
    headline: "New season, now in store",
    cta: "Shop the collection",
    channels: ["Shopping ads", "Product SEO", "Cart emails"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    text: "Trust-first local SEO, clear educational content and appointment-focused campaigns that follow healthcare advertising rules.",
    query: "dental clinic near me",
    headline: "Care that fits your day",
    cta: "Book an appointment",
    channels: ["Local SEO", "Health content", "Appointment ads"],
  },
  {
    id: "education",
    name: "Education",
    text: "Enquiry-driven campaigns for admissions, course pages built around search intent and nurture emails for prospective students.",
    query: "best online design course",
    headline: "Start learning this term",
    cta: "Apply now",
    channels: ["Course SEO", "Admission ads", "Nurture emails"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    text: "Location-based SEO and ads, project showcase content and lead follow-up sequences for buyers, renters and investors.",
    query: "3 bhk apartments in Mohali",
    headline: "Find your next address",
    cta: "Schedule a visit",
    channels: ["Local SEO", "Lead-gen ads", "Follow-ups"],
  },
  {
    id: "it-technology",
    name: "IT & Technology",
    text: "Thought-leadership content, technical SEO and LinkedIn marketing that speak to decision makers evaluating software and services.",
    query: "custom software development company",
    headline: "Build faster with the right team",
    cta: "Talk to an expert",
    channels: ["Technical SEO", "LinkedIn", "Case-study content"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    text: "B2B search visibility for products and capabilities, catalogue content and targeted ads for procurement and distribution teams.",
    query: "industrial parts supplier",
    headline: "Precision parts, reliably delivered",
    cta: "Request a quote",
    channels: ["B2B SEO", "Catalogue content", "Search ads"],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    text: "Visual social media, local discovery, seasonal offers and email campaigns that turn browsers into bookings.",
    query: "boutique hotel with spa",
    headline: "A weekend worth remembering",
    cta: "Reserve your stay",
    channels: ["Social content", "Local SEO", "Offer emails"],
  },
  {
    id: "finance",
    name: "Finance",
    text: "Compliance-aware content, educational SEO and carefully targeted campaigns that build credibility before asking for action.",
    query: "business loan eligibility",
    headline: "Plan with confidence",
    cta: "Check eligibility",
    channels: ["Educational SEO", "Search ads", "Trust content"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    text: "Authority-building content, local search presence and LinkedIn visibility for consultants, agencies, firms and practitioners.",
    query: "chartered accountant in Chandigarh",
    headline: "Advice you can act on",
    cta: "Book a consultation",
    channels: ["Local SEO", "Authority content", "LinkedIn"],
  },
  {
    id: "startups",
    name: "Startups",
    text: "Lean, flexible marketing: a focused SEO foundation, launch content, early paid tests and email onboarding while you find product-market fit.",
    query: "project management app for teams",
    headline: "Launching soon. Join early.",
    cta: "Get early access",
    channels: ["Launch content", "Paid tests", "Onboarding emails"],
  },
  {
    id: "logistics",
    name: "Logistics",
    text: "Service-page SEO for routes and capabilities, B2B lead generation and clear content for shippers and operations teams.",
    query: "freight forwarding services India",
    headline: "Freight moved on schedule",
    cta: "Get a freight quote",
    channels: ["Service SEO", "B2B leads", "Search ads"],
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    text: "Google Business Profile support, local SEO, reviews-led content and simple ads that put you in front of nearby customers.",
    query: "salon near me open now",
    headline: "Right around the corner",
    cta: "Call or visit today",
    channels: ["Local SEO", "Profile updates", "Local ads"],
  },
];

/* ------------------------------------------------------------------ */
/* Why RoyalTech + process                                             */
/* ------------------------------------------------------------------ */

export const WHY = [
  {
    title: "Business-Focused Strategies",
    text: "We align digital marketing campaigns with your business objectives and target audience.",
  },
  { title: "Data-Driven Decisions", text: "We use relevant insights and analytics to inform marketing strategies." },
  { title: "Creative Marketing", text: "We combine strategic thinking with engaging creative content." },
  {
    title: "Integrated Marketing Approach",
    text: "We connect SEO, social media, content, paid advertising, and email marketing.",
  },
  {
    title: "Audience-Focused Campaigns",
    text: "We create strategies designed around customer behavior and search intent.",
  },
  { title: "Transparent Reporting", text: "We provide clear insights into relevant campaign activities and performance." },
  {
    title: "Continuous Optimization",
    text: "We refine campaigns and strategies based on data, feedback, and evolving opportunities.",
  },
  {
    title: "Dedicated Support",
    text: "We maintain communication and provide support throughout marketing activities.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Discovery & Business Analysis",
    text: "Understand your business, objectives, target audience, services, market, and competitive landscape.",
  },
  {
    n: "02",
    title: "Research & Strategy",
    text: "Conduct keyword research, competitor analysis, audience research, and channel planning.",
  },
  {
    n: "03",
    title: "Campaign Planning",
    text: "Create marketing plans, content strategies, campaign structures, advertising plans, and timelines.",
  },
  {
    n: "04",
    title: "Execution",
    text: "Implement SEO, content marketing, social media, PPC campaigns, and email marketing.",
  },
  {
    n: "05",
    title: "Monitoring & Reporting",
    text: "Track relevant marketing performance, traffic, engagement, campaign activity, and conversions.",
  },
  {
    n: "06",
    title: "Optimization",
    text: "Refine marketing strategies, campaigns, content, targeting, and performance based on insights.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQs (all visible on the page and mirrored into FAQPage JSON-LD)    */
/* ------------------------------------------------------------------ */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is digital marketing?",
    a: "Digital marketing is the promotion of a business through online channels such as search engines, social media, paid advertising, content and email. The aim is to reach the right audience, build trust and turn interest into enquiries or sales. A good digital marketing strategy connects these channels around clear business goals.",
  },
  {
    q: "Which digital marketing services do you provide?",
    a: "As a digital marketing company, RoyalTech Innovation provides search engine optimization, social media marketing, Google Ads and PPC management, content marketing and email marketing. We also support related work such as conversion optimization, marketing automation, analytics and reporting, so the channels work together.",
  },
  {
    q: "How much do digital marketing services cost?",
    a: "Cost depends on the services you need, the competitiveness of your market, the size of your goals and, for paid advertising, your media budget. After understanding your business we recommend a plan and share a clear scope and quotation, so you know what you are paying for. Contact us for a tailored proposal.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term channel. Technical fixes and content improvements can be picked up in weeks, but meaningful gains in organic visibility usually build over several months and depend on competition, website health and consistent work. No reputable SEO agency can guarantee rankings or a fixed timeline.",
  },
  {
    q: "What is the difference between SEO and PPC?",
    a: "SEO improves your visibility in unpaid search results and compounds over time. PPC, such as Google Ads, places paid ads in front of people searching for specific terms and can start sooner, but visibility stops when the budget stops. Many businesses use both: PPC to learn quickly and SEO to build lasting visibility.",
  },
  {
    q: "Do you provide social media marketing?",
    a: "Yes. Our social media marketing services include strategy, content planning, creative design, Reels and short-form content, community management and analytics. We manage Instagram, Facebook and LinkedIn marketing, and other platforms where your audience is active.",
  },
  {
    q: "Do you manage Google Ads campaigns?",
    a: "Yes. Our Google Ads management covers Search, Display, Shopping and YouTube campaigns, from keyword and audience targeting to ad copy, landing page optimization, conversion tracking and ongoing optimization. You stay in control of your budget and receive clear reporting.",
  },
  {
    q: "Do you provide content marketing services?",
    a: "Yes. We plan and create SEO blog content, website copy, landing page copy, educational articles and lead magnets, supported by content calendars and topic research. Content is written around search intent and your brand voice, then distributed across your channels.",
  },
  {
    q: "Do you provide email marketing?",
    a: "Yes. We build email marketing strategy, design newsletters and promotional campaigns, write the copy and set up automated sequences such as welcome and nurture flows. Audience segmentation and performance analytics help improve each campaign over time.",
  },
  {
    q: "Can digital marketing help generate leads?",
    a: "Digital marketing can support lead generation by attracting relevant visitors, directing them to focused landing pages and following up through email and remarketing. Results depend on your offer, market, website and budget, so we never guarantee a number of leads, but we do track the lead activity that matters to you.",
  },
  {
    q: "How do you measure digital marketing performance?",
    a: "We agree on the KPIs that match your goals, then track them with analytics and conversion tracking. Depending on the channel that can include website traffic, search visibility, engagement, leads and conversions. You receive regular, easy-to-read reports along with the actions we recommend next.",
  },
  {
    q: "Do you provide local SEO services?",
    a: "Yes. Our local SEO services include Google Business Profile optimization, local keyword targeting, location pages, citations and review strategy. They are especially useful for businesses in Mohali, Chandigarh and across Punjab that serve customers in a specific area.",
  },
  {
    q: "Can you help improve website traffic?",
    a: "We can help with website traffic growth by improving technical SEO, publishing content that matches search intent, running targeted campaigns and promoting your content on social media and email. Traffic growth takes time and varies by industry, so we focus on relevant visitors rather than raw numbers.",
  },
  {
    q: "Do you provide monthly digital marketing services?",
    a: "Yes. Most digital marketing work is ongoing, so we offer monthly plans covering the channels you choose, with a defined scope, content or campaign schedule and regular reporting. We can also run one-off projects such as an SEO audit or a campaign launch.",
  },
  {
    q: "Which digital marketing services are best for my business?",
    a: "It depends on your goals, audience and budget. Businesses that need steady, lower-cost visibility often start with SEO and content, brands that need faster reach combine paid advertising, and relationship-led businesses benefit from social media and email. We review your situation and recommend the right mix as a digital marketing consultant would.",
  },
  {
    q: "Do you provide digital marketing services for startups?",
    a: "Yes. For startups we keep things lean: a focused SEO foundation, launch content, small paid tests and email onboarding that you can scale as you learn what works. We work with startups in Mohali, Chandigarh and beyond, and the plan is adjusted as your product and budget grow.",
  },
];

export const RELATED_LINKS = [
  { href: "/services/website-development", label: "Website Development" },
  { href: "/services/ui-ux-design", label: "UI/UX Design" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/crm", label: "CRM Solutions" },
  { href: "/services/software-development", label: "Custom Software Development" },
  { href: "/services/it-consulting", label: "IT Consulting" },
];
