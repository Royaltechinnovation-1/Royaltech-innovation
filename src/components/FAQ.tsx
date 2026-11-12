"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    question: "What services does RoyalTech Innovation provide?",
    
answer:
  "RoyalTech Innovation provides professional IT solutions and digital transformation services to help businesses grow and improve their online presence. Our services include custom website development, web application development, mobile app development, custom software development, ERP and CRM solutions, UI/UX design, digital marketing, IT consulting, and business process automation. We deliver secure, scalable, and user-friendly digital solutions tailored to startups, small businesses, and enterprises across different industries.",

  },
  {
    question: "Does RoyalTech Innovation develop custom websites?",
    answer:
  "Yes, RoyalTech Innovation provides professional custom website development services tailored to your business goals and requirements. We create responsive, SEO-friendly, and user-friendly websites that help businesses establish a strong online presence. Our services include business website development, e-commerce website development, portfolio websites, web applications, custom UI/UX design, API integration, and website performance optimization. We focus on building secure, mobile-friendly, and scalable websites that deliver excellent user experiences and support business growth.",

  },
  {
    question: "Does RoyalTech Innovation provide mobile app development services?",
    
answer:
  "Yes, RoyalTech Innovation offers custom mobile app development services for businesses looking to build reliable Android and iOS applications. We develop user-friendly mobile apps with modern UI/UX design, API integration, database management, third-party integrations, and performance optimization. Our development process includes planning, design, development, testing, and deployment. Whether you are a startup or an established enterprise, we create secure, scalable, and feature-rich mobile applications tailored to your business requirements.",
  }, 
  {
    question: "How much does custom website development cost?",
    answer:
      "The cost of custom website development depends on your business requirements, website complexity, design preferences, features, and functionality. At RoyalTech Innovation, we offer affordable and scalable custom website development solutions tailored to startups, small businesses, and established enterprises. Whether you need a professional business website, e-commerce website, portfolio website, or a complex web application, our team provides customized solutions that align with your budget and business goals. Website development pricing may vary based on UI/UX design, responsive web development, custom functionality, database integration, API integration, content management systems, SEO-friendly structure, and ongoing maintenance requirements. We focus on delivering high-quality, secure, mobile-friendly, and performance-optimized websites that provide long-term value for your investment. Contact RoyalTech Innovation today to discuss your project requirements and get a customized website development quote that fits your business needs."
},
  {
    question: "How long does custom website development take?",
    
answer:
  "The time required for website development depends on the project's complexity, design, features, and functionality. At RoyalTech Innovation, a basic business website may take approximately 1–2 weeks, while a custom business website may take 3–6 weeks. Complex e-commerce websites and custom web applications may require 6–12 weeks or more. Our website development process includes requirement analysis, planning, UI/UX design, frontend and backend development, testing, and deployment. We follow a structured development approach to deliver responsive, secure, and high-performing websites within the agreed project timeline.",
 },

  {
    question:" Does RoyalTech Innovation provide website maintenance and technical support services?",
    
answer:
  "Yes, RoyalTech Innovation provides ongoing website maintenance and technical support services to keep websites and web applications secure, updated, and running smoothly. Our services include bug fixing, security updates, website performance optimization, troubleshooting, database management, backups, software updates, and functionality improvements. We help businesses minimize downtime, maintain website security, and ensure a smooth user experience. Our website maintenance and technical support solutions can be customized according to your project requirements and ongoing business needs.",

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
  id={`faq-question-${index}`}
  aria-expanded={open}
  aria-controls={`faq-answer-${index}`}
  onClick={() => setOpenIndex(open ? -1 : index)}
>
  <h3 className="faq-question-heading">
    {index + 1}. {item.question}
  </h3>

  <span className="faq-toggle" aria-hidden="true">
    {open ? "−" : "+"}
  </span>
</button>

<div
  id={`faq-answer-${index}`}
  className="faq-answer-wrap"
  role="region"
  aria-labelledby={`faq-question-${index}`}
  hidden={!open}
>
  <p className="faq-answer">{item.answer}</p>
</div>

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
          src="https://res.cloudinary.com/ugqc5gb8/image/upload/v1794486417/FAQ.png"
          alt="RoyalTech Innovation laptop with brand logo and technology icons"
          fill
          sizes="(max-width: 980px) 100vw, 50vw"
          className="faq-image"
        />
      </div>
    </section>
  );
}
