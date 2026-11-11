"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    question: "What does RoyalTech Innovation do?",
    answer:
      "RoyalTech Innovation is a technology and digital transformation partner for businesses of all sizes. We provide website development, custom software, mobile apps, ERP and CRM solutions, digital marketing, UI/UX design, IT consulting and business automation, all under one roof.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with startups, small and medium-sized businesses, and mid-sized and enterprise organizations. Our solutions also suit healthcare, hospitality, e-commerce, recruitment, manufacturing and other businesses preparing for digital change.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our core services are website development, custom software development, mobile app development for Android and iOS, digital marketing and SEO, UI/UX and brand design, and IT consulting. You can choose one service or combine several in a single project.",
  },
  {
    question: "Do you build custom solutions or use templates?",
    answer:
      "We build around your business. Every solution is tailored to your goals, workflows and budget, so your technology fits how you work.",
  },
  {
    question: "Do you offer end-to-end support?",
    answer:
      "Yes. We can guide your project from idea and design through development, launch, marketing and ongoing support, so you work with one partner instead of several.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="faq-copy">
        <p className="faq-label">FAQ</p>
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">Innovate. Integrate. Elevate.</p>
        <p className="faq-text">
          Everything you need to know about working with RoyalTech Innovation,
          from your first enquiry to long-term support.
        </p>

        <div className="faq-list">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <article
                key={item.question}
                className={`faq-item${open ? " is-open" : ""}`}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>
                    {index + 1}. {item.question}
                  </span>
                  <span className="faq-toggle" aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? <p className="faq-answer">{item.answer}</p> : null}
              </article>
            );
          })}
        </div>

        <div className="faq-cta">
          <h3>Still have a question?</h3>
          <p>
            Tell us about your project and we will help you find the right
            solution.
          </p>
          <div className="faq-links">
            <OpenFormButton
              className="faq-btn"
              title="Request a Quote"
              source="home-faq-quote"
            >
              Request a Quote
            </OpenFormButton>
            <OpenFormButton
              className="faq-btn faq-btn-ghost"
              title="Contact Us"
              source="home-faq-contact"
            >
              Contact Us
            </OpenFormButton>
          </div>
        </div>
      </div>

      <div className="faq-media">
        <Image
          src="/faq-side.png"
          alt="RoyalTech Innovation laptop with brand logo and technology icons"
          fill
          sizes="(max-width: 980px) 100vw, 50vw"
          className="faq-image"
        />
      </div>
    </section>
  );
}
