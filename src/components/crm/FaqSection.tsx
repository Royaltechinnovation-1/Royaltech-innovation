import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import "./faq-section.css";

const faqs = [
  {
    q: "What is CRM software and why does my business need one?",
    a: "CRM (Customer Relationship Management) software keeps every lead, customer conversation and deal in one place. It replaces scattered spreadsheets and chat threads, so follow-ups aren’t missed and your team always knows what to do next.",
  },
  {
    q: "How is RoyalTech CRM different from other CRM software?",
    a: "RoyalTech CRM is built around your sales process, comes with dedicated support and uses transparent pricing. Your business doesn’t have to adapt to a generic tool.",
  },
  {
    q: "Can the CRM be customized for my business?",
    a: "Yes. Lead stages, pipelines, fields, reports and automations can be set up to match how your team actually sells.",
  },
  {
    q: "Can I move my existing data into the CRM?",
    a: "Yes. Leads and contacts from spreadsheets or your current tool can be imported, so you don’t start from zero.",
  },
  {
    q: "Does it connect with my website and other tools?",
    a: "The CRM can connect with your website forms, marketing platforms and communication tools, so new leads land in one place automatically.",
  },
  {
    q: "Is my customer data safe?",
    a: "Protecting customer data is a core part of how the CRM is built and managed. Ask us about access controls and backups during your free demo.",
  },
  {
    q: "How do I get started with RoyalTech CRM?",
    a: "Book a free CRM demo. We’ll learn how your team sells, show you how the CRM fits it and help you plan the setup.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqSection() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="faq-grid">
        <div className="faq-side">
          <span className="faq-tag">
            <span className="faq-tag-dot" />
            FAQ
          </span>

          <h2 id="faq-title">Common questions about choosing a CRM</h2>

          <p>
            Still deciding which CRM fits your business? Here are clear
            answers to the questions we hear most often.
          </p>

          <div className="faq-box" aria-hidden="true">
            <Image
              src="/crm/faq.jpg"
              alt=""
              width={320}
              height={240}
              className="faq-img"
            />
          </div>

          <a href="/contact" className="faq-link">
            Talk to our CRM experts{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}