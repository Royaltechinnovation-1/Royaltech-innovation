import LegalDoc from "@/components/LegalDoc";

const sections = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "RoyalTech Innovation provides IT services including website development, custom software, mobile applications, digital marketing, UI/UX design, and IT consulting. This Privacy Policy explains how we collect, use, store, share, and protect personal data when you use our website, contact forms, WhatsApp/SMS channels, or engage us for projects.",
      "Our privacy practices are designed to align with internationally recognised information security and privacy management principles, including guidance from ISO/IEC 27001 (Information Security Management) and ISO/IEC 27701 (Privacy Information Management), and with applicable laws such as India’s Digital Personal Data Protection Act (DPDP) framework and related IT compliance expectations.",
    ],
    note: "This policy describes our operational approach. It does not claim formal certification unless separately stated in a contract or certificate.",
  },
  {
    id: "scope",
    title: "Scope & Roles",
    paragraphs: [
      "This policy applies to personal data processed through royaltechinnovation.co.in and related service delivery channels for prospects, clients, vendors, job applicants, and website visitors.",
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
    id: "project-proposal-deliverables",
    title: "Project Proposal and Deliverables",
    paragraphs: [
      "Before commencing a project, the Parties shall agree in writing on the applicable project details,including:"
    ],
    bullets: [
      "Project description and objectives.",
      "Scope of work, deliverables.",
      "Project milestones and estimated timelines.",
      "Total project cost, payment schedule.",
      "Number of revisions ,where applicable.",
      "Maintainance,support and warranty terms, where applicable.",
      "Any specific technical requirements or exclusions.",
    ],
    

  },
  {
    id: "project-fees-payment-terms",
    title: "Project Fees and Payment Terms",
    paragraphs: [
      "The Client agrees to pay the fees specified in the approved quotation, proposal, or SOW.",
      "Unless otherwise agreed in writing, the standard payment schedule shall be:",
    ],
    bullets: [
      <>
        <strong>Advance payment:</strong> 50% of the total project fee before
        commencement.
      </>,
      <>
        <strong>Milestone payment:</strong> 30% upon completion of the agreed
        development milestone.
      </>,
      <>
        <strong>Final payment:</strong> 20% before final delivery, production
        deployment, or transfer of applicable deliverables.
      </>,
      "The Parties may agree to a different payment schedule in writing.",
      "Work shall commence after receipt of the required advance payment and necessary project information.",
      "Invoices shall be payable within [7/15/30] calendar days of the invoice date, unless another period is agreed in writing.",
      "Applicable GST and other legally required taxes shall be charged in accordance with applicable law. The Client shall provide necessary billing details and tax documentation.",
      "Third-party expenses, including hosting, domains, software licenses, paid plugins, cloud services, advertising budgets, SMS services, and other external charges, shall be payable by the Client unless expressly included in the approved quotation.",
      "If payment is overdue, the Company may provide written notice and suspend work or services after a reasonable opportunity to cure the non-payment. Any resulting timeline adjustments shall be communicated to the Client. Any late-payment interest must be expressly agreed in writing and comply with applicable law.",
    ],
  },
  {
    id: "confidentiality-data-security",
    title: "Confidentiality and Data Security",
    bullets: [
      " Each Party agrees to protect the other Party’s confidential information and use it only for purposes connected with the engagement.",
      "Confidential information shall not be disclosed to unauthorized persons, except where disclosure is authorized by the disclosing Party or required by law.",
      " Each Party shall take reasonable measures to protect credentials, business information, personal data, and other sensitive information handled in connection with the project.",
      " Confidentiality obligations shall continue after termination of this Agreement for five (5) years, except that trade secrets and information subject to longer statutory protection shall remain protected for the applicable period.",
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
      "Email info@royaltechinnovation with “Privacy Request” in the subject.",
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
      <>
        RoyalTech Innovation, Gate No. 5, CP 67, Imperial Tower, Behind CP67
        Mall, Chandigarh Int’l Airport Rd, Sahibzada Ajit Singh Nagar, Punjab
        160062. Email:{" "}
        <a href="mailto:info@royaltechinnovation">info@royaltechinnovation</a>
        {" | Phone: "}
        <a href="tel:+918679016505">+91 86790 16505</a>.
      </>,
    ],
  },
];

export default function PrivacyPageContent() {
  return (
    <LegalDoc
      badge="Legal"
      title="Privacy Policy"
      intro="How RoyalTech Innovation collects, uses, and protects personal data across our IT services—aligned with ISO-informed security and privacy practices."
      updated="15 October 2026"
      standards={[
  "ISO/IEC 27001 Informed",
  "IT Services SOW",
  "India Governing Law"
]}
      sideImage="/legal-privacy.jpg"
      sideTitle="Data protection in delivery"
      sideText="Privacy-by-design for websites, apps, software, CRM, and digital marketing engagements."
      sections={sections}
    />
  );
}
