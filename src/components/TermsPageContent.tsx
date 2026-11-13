import LegalDoc from "@/components/LegalDoc";

const sections = [
  {
    id: "agreement",
    title: "Agreement to Terms",
    paragraphs: [
      "These Terms & Conditions (“Terms”) govern access to the RoyalTech Innovation website and the IT services we provide, including website development, custom software, mobile apps, UI/UX design, digital marketing/SEO, CRM/ERP solutions, and IT consulting.",
      "By using our website, submitting an enquiry, or signing a proposal/statement of work (SOW), you agree to these Terms. If you do not agree, please do not use our services.",
    ],
  },
  {
    id: "services",
    title: "Services Description",
    paragraphs: [
      "Service scope, deliverables, timelines, assumptions, and fees are defined in the applicable proposal, SOW, invoice, or master services agreement. Marketing pages are informational and not a binding offer until confirmed in writing.",
    ],
    bullets: [
      "Discovery, design, development, testing, deployment, and support as agreed.",
      "Third-party tools/licenses (domains, hosting, plugins, ads accounts) may be billed separately or procured by the client.",
      "Change requests outside original scope require written approval and may affect cost/timeline.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    paragraphs: [
      "Successful IT delivery depends on timely collaboration. Clients agree to:",
    ],
    bullets: [
      "Provide accurate requirements, content, brand assets, and access credentials when needed.",
      "Review deliverables within agreed acceptance windows.",
      "Ensure they have rights to materials supplied to us (text, images, trademarks, data).",
      "Maintain their own backups and access policies for systems outside our managed scope.",
      "Comply with applicable laws when using software, marketing, or customer data we help implement.",
    ],
  },
  {
    id: "iso-quality",
    title: "Quality & Security Expectations (ISO-Informed)",
    paragraphs: [
      "We structure delivery with quality and information security practices informed by ISO/IEC 27001 and related IT service discipline—covering confidentiality, integrity, availability, and controlled change.",
    ],
    bullets: [
      "Documented requirements and milestone-based delivery where agreed.",
      "Secure handling of credentials and production access on a least-privilege basis.",
      "Testing and QA before go-live according to the project plan.",
      "Clear handover, training notes, and post-launch support terms when included.",
      "Incident communication if a security issue under our control affects client systems.",
    ],
    note: "Unless a contract states otherwise, we do not warrant uninterrupted or error-free operation of third-party platforms, internet providers, or client-managed environments.",
  },
  {
    id: "ip",
    title: "Intellectual Property",
    paragraphs: [
      "Upon full payment, clients typically receive ownership or a perpetual license to custom deliverables created specifically for them, as stated in the SOW. RoyalTech Innovation retains ownership of pre-existing tools, frameworks, libraries, templates, and know-how used to deliver work.",
    ],
    bullets: [
      "Open-source components remain under their respective licenses.",
      "Portfolio rights: we may showcase non-confidential work (screenshots/case summaries) unless an NDA prohibits it.",
      "Client brand assets remain client property.",
    ],
  },
  {
    id: "fees",
    title: "Fees, Payment & Suspension",
    paragraphs: [
      "Fees, payment schedules, taxes, and late-payment terms are specified in the proposal/invoice. Work may be paused if invoices remain unpaid beyond agreed terms. Hosting, ad spend, and third-party renewals are the client’s responsibility unless we manage them under a separate retainer.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Data",
    paragraphs: [
      "Each party agrees to protect confidential information received from the other and use it only for performing the engagement. Personal data is handled under our Privacy Policy and any project DPA. Clients remain responsible for lawful collection of their end-user data.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use of Website & Systems",
    paragraphs: [
      "You must not misuse our website or delivered systems to:",
    ],
    bullets: [
      "Attempt unauthorised access, malware distribution, or service disruption.",
      "Upload unlawful, infringing, or harmful content.",
      "Scrape or overload services beyond fair use without permission.",
      "Violate export, privacy, advertising, or industry regulations applicable to your business.",
    ],
  },
  {
    id: "warranties",
    title: "Warranties & Disclaimers",
    paragraphs: [
      "We provide professional IT services with reasonable skill and care. Except as expressly stated in a signed contract, services and website content are provided “as is” without implied warranties of merchantability or fitness for a particular purpose. SEO and marketing results depend on market factors and are not guaranteed rankings or revenue outcomes.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, RoyalTech Innovation is not liable for indirect, incidental, special, consequential, or lost-profit damages. Our aggregate liability for a claim relating to a project is limited to fees paid for that project in the three (3) months preceding the claim, unless a signed agreement sets a different cap.",
    ],
  },
  {
    id: "termination",
    title: "Term, Termination & Exit",
    paragraphs: [
      "Either party may terminate an engagement as allowed by the SOW (for convenience with notice, or for material breach if uncured). Upon termination, client pays for work completed and approved expenses. We will reasonably assist with handover of paid deliverables and revoke temporary access.",
    ],
  },
  {
    id: "law",
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India. Courts in Punjab / Chandigarh region shall have exclusive jurisdiction, unless a signed contract specifies otherwise for an international engagement.",
    ],
  },
  {
    id: "changes-contact",
    title: "Changes & Contact",
    paragraphs: [
      "We may update these Terms for legal or operational reasons. Continued use of the website after updates constitutes acceptance of the revised Terms for website use. Project contracts control over website Terms if there is a conflict.",
      "RoyalTech Innovation — info@royaltechinnovation | +91 86790 16505 | Gate No. 5, CP 67, Imperial Tower, Mohali / SAS Nagar, Punjab 160062.",
    ],
  },
];

export default function TermsPageContent() {
  return (
    <LegalDoc
      badge="Legal"
      title="Terms & Conditions"
      intro="Clear terms for using RoyalTech Innovation’s website and engaging our IT services—structured for professional delivery and ISO-informed security expectations."
      updated="7 November 2026"
      standards={["ISO/IEC 27001 informed", "IT services SOW", "India governing law"]}
      sideImage="/legal-terms.jpg"
      sideTitle="Clear delivery terms"
      sideText="Scope, IP, confidentiality, and acceptance defined for websites, software, apps, and consulting."
      sections={sections}
    />
  );
}
