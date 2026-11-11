import LegalDoc from "@/components/LegalDoc";

const sections = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "RoyalTech Innovation (“we”, “us”, “our”) provides IT services including website development, custom software, mobile applications, digital marketing, UI/UX design, and IT consulting. This Privacy Policy explains how we collect, use, store, share, and protect personal data when you use our website, contact forms, WhatsApp/SMS channels, or engage us for projects.",
      "Our privacy practices are designed to align with internationally recognised information security and privacy management principles, including guidance from ISO/IEC 27001 (Information Security Management) and ISO/IEC 27701 (Privacy Information Management), and with applicable laws such as India’s Digital Personal Data Protection Act (DPDP) framework and related IT compliance expectations.",
    ],
    note: "This policy describes our operational approach. It does not claim formal certification unless separately stated in a contract or certificate.",
  },
  {
    id: "scope",
    title: "Scope & Roles",
    paragraphs: [
      "This policy applies to personal data processed through royaltechinnovation.com and related service delivery channels for prospects, clients, vendors, job applicants, and website visitors.",
    ],
    bullets: [
      "Controller role: for website enquiries, marketing communications, and our own CRM records.",
      "Processor role: when we process client-owned end-user data strictly under a client’s documented instructions as part of an IT project.",
      "Project contracts may include a Data Processing Addendum (DPA) for ISO-aligned accountability.",
    ],
  },
  {
    id: "data-we-collect",
    title: "Data We Collect",
    paragraphs: [
      "We collect only what is needed to respond to enquiries, deliver IT services, and improve security and performance.",
    ],
    bullets: [
      "Identity & contact: name, email, phone, company, role, and message content from forms.",
      "Project information: requirements, files, credentials shared for delivery (handled under access control).",
      "Technical data: IP address, device/browser type, pages visited, approximate location, and cookies/analytics events.",
      "Communication records: emails, call notes, WhatsApp/SMS consent logs where required.",
      "Billing & contracts: invoices, payment references, and signed agreements.",
    ],
  },
  {
    id: "purpose-lawful-basis",
    title: "Purpose & Lawful Use",
    paragraphs: [
      "We process personal data for clear business purposes consistent with privacy-by-design and need-to-know access.",
    ],
    bullets: [
      "Respond to consultation requests and provide quotes for IT services.",
      "Deliver, test, deploy, and support websites, apps, software, CRM/ERP, and marketing campaigns.",
      "Improve site reliability, SEO performance, and user experience.",
      "Send service updates or marketing messages only with appropriate consent or legitimate interest where permitted.",
      "Detect, prevent, and investigate security incidents, fraud, or misuse.",
      "Meet legal, tax, audit, and contractual obligations.",
    ],
  },
  {
    id: "iso-controls",
    title: "ISO-Aligned Security Controls",
    paragraphs: [
      "We apply information security controls inspired by ISO/IEC 27001 Annex A domains and privacy controls aligned with ISO/IEC 27701 to protect confidentiality, integrity, and availability of systems and data.",
    ],
    bullets: [
      "Access control: role-based access, least privilege, and credential hygiene for project environments.",
      "Cryptography: HTTPS/TLS in transit for website and production services where under our control.",
      "Operations security: protected repositories, environment separation, and change tracking for delivery work.",
      "Communications security: secure channels for sharing sensitive project materials whenever practical.",
      "Supplier security: careful selection of hosting, email, analytics, and SaaS tools used in delivery.",
      "Incident readiness: containment, client notification, and remediation steps for confirmed breaches affecting personal data.",
      "Privacy by design: collect minimum necessary data and limit retention to business and legal need.",
    ],
    note: "Exact technical controls vary by project stack (e.g., Vercel, AWS, client-hosted servers) and are defined in the statement of work.",
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
    paragraphs: [
      "Our website may use essential cookies for basic functionality and optional analytics cookies to understand traffic and improve content.",
    ],
    bullets: [
      "Essential cookies: session/security functions required for the site to work.",
      "Analytics cookies: aggregated usage insights (for example Google Analytics equivalents) to improve SEO and UX.",
      "You can control non-essential cookies through your browser settings.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing & Subprocessors",
    paragraphs: [
      "We do not sell personal data. We share data only with trusted processors needed to operate our IT business, under confidentiality and security expectations.",
    ],
    bullets: [
      "Hosting, email, CRM, analytics, advertising, and collaboration platforms.",
      "Payment processors and professional advisors (legal/accounting) when required.",
      "Authorities when legally compelled.",
      "Client-authorised third parties for integrations during project delivery.",
    ],
  },
  {
    id: "retention",
    title: "Retention & Deletion",
    paragraphs: [
      "We retain personal data only as long as needed for the stated purpose, contract lifecycle, dispute handling, and legal retention requirements. Project credentials and temporary access are revoked after delivery phases end, unless a support agreement requires continued access.",
    ],
  },
  {
    id: "rights",
    title: "Your Rights",
    paragraphs: [
      "Subject to applicable law, you may request access, correction, deletion, restriction, or withdrawal of consent for personal data we hold as a controller.",
    ],
    bullets: [
      "Email sales@royaltechinnovation.co.in with “Privacy Request” in the subject.",
      "We may need to verify identity before fulfilling requests.",
      "Some records may be retained where law or legitimate business need requires it.",
    ],
  },
  {
    id: "children",
    title: "Children’s Data",
    paragraphs: [
      "Our services are directed to businesses and professionals. We do not knowingly collect personal data from children. If you believe a child has provided data, contact us for removal.",
    ],
  },
  {
    id: "international",
    title: "Cross-Border Processing",
    paragraphs: [
      "As an IT company serving clients in India and internationally (including the UK and UAE), data may be processed on infrastructure or tools located in other regions. We take reasonable contractual and technical measures appropriate to the transfer context.",
    ],
  },
  {
    id: "changes-contact",
    title: "Changes & Contact",
    paragraphs: [
      "We may update this Privacy Policy to reflect process, technology, or legal changes. The “Last updated” date will change when we publish revisions.",
      "RoyalTech Innovation, Gate No. 5, CP 67, Imperial Tower, Behind CP67 Mall, Chandigarh Int’l Airport Rd, Sahibzada Ajit Singh Nagar, Punjab 160062. Email: sales@royaltechinnovation.co.in | Phone: +91 85708 71522.",
    ],
  },
];

export default function PrivacyPageContent() {
  return (
    <LegalDoc
      badge="Legal"
      title="Privacy Policy"
      intro="How RoyalTech Innovation collects, uses, and protects personal data across our IT services—aligned with ISO-informed security and privacy practices."
      updated="7 November 2026"
      standards={["ISO/IEC 27001 aligned", "ISO/IEC 27701 aligned", "IT sector"]}
      sideImage="/legal-privacy.jpg"
      sideTitle="Data protection in delivery"
      sideText="Privacy-by-design for websites, apps, software, CRM, and digital marketing engagements."
      sections={sections}
    />
  );
}
