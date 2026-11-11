"use client";

import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    question: "What services does RoyalTech Innovation provide?",
    answer:
      "RoyalTech Innovation provides end-to-end IT solutions and digital transformation services to help businesses grow and succeed online. Our services include professional website development, custom software development, mobile app development, ERP and CRM solutions, UI/UX design, digital marketing, IT consulting, and business process automation. We build scalable, secure, and user-friendly digital solutions tailored to startups, small businesses, and enterprises across different industries. As a trusted technology partner, RoyalTech Innovation helps businesses improve efficiency, strengthen their online presence, and achieve long-term digital growth.",
  },
  {
    question: "Does RoyalTech Innovation develop custom websites?",
    answer:
      "Yes, RoyalTech Innovation specializes in designing and developing custom websites tailored to your business goals and requirements. We provide professional, responsive, SEO-friendly, and user-focused website development services that help businesses establish a strong online presence. Our expert development approach includes custom website design, modern UI/UX, responsive web development, e-commerce websites, business websites, web applications, API integration, and performance optimization. We use modern technologies to build secure, scalable, and high-performing websites that deliver an excellent user experience across all devices. Whether you are a startup, small business, or established enterprise, RoyalTech Innovation helps transform your ideas into powerful digital solutions that drive business growth.",
  },
  {
    question: "Does RoyalTech Innovation provide mobile app development services?",
    answer:
      "Yes, RoyalTech Innovation is a professional mobile app development company offering custom Android and iOS app development solutions tailored to your business needs. We help startups, small businesses, and enterprises transform their ideas into innovative, feature-rich, secure, and scalable mobile applications. Our mobile application development services include custom app development, Android and iOS app development, cross-platform mobile app development, UI/UX design, API integration, database management, third-party integrations, and app performance optimization. Our experienced development team uses modern technologies and industry best practices to build high-performance mobile applications that deliver seamless user experiences across different devices. From initial planning and design to development, testing, and deployment, RoyalTech Innovation provides end-to-end mobile app development solutions that enhance customer engagement, streamline business operations, and support long-term business growth."
  }, 
  {
    question: "How much does custom website development cost?",
    answer:
      "The cost of custom website development depends on your business requirements, website complexity, design preferences, features, and functionality. At RoyalTech Innovation, we offer affordable and scalable custom website development solutions tailored to startups, small businesses, and established enterprises. Whether you need a professional business website, e-commerce website, portfolio website, or a complex web application, our team provides customized solutions that align with your budget and business goals. Website development pricing may vary based on UI/UX design, responsive web development, custom functionality, database integration, API integration, content management systems, SEO-friendly structure, and ongoing maintenance requirements. We focus on delivering high-quality, secure, mobile-friendly, and performance-optimized websites that provide long-term value for your investment. Contact RoyalTech Innovation today to discuss your project requirements and get a customized website development quote that fits your business needs."
},
  {
    question: "How long does custom website development take?",
    answer:
   

"The website development timeline depends on the project's complexity, design requirements, features, and overall functionality. At RoyalTech Innovation, we follow a structured website development process to deliver high-quality, responsive, secure, and SEO-friendly websites within an agreed timeline. A basic business website may take approximately 1–2 weeks, while a custom business website typically takes 3–6 weeks. Complex e-commerce websites, custom web applications, and enterprise-level solutions may require 6–12 weeks or more, depending on project specifications. Our website development process includes requirement analysis, planning, UI/UX design, frontend and backend development, database integration, testing, performance optimization, and final deployment. We maintain clear communication with clients throughout every development stage to ensure the final website meets their business goals and expectations. RoyalTech Innovation focuses on delivering scalable, user-friendly, and high-performance website development solutions that help businesses establish a strong digital presence and achieve long-term growth."
  },

  {
    question:" Does RoyalTech Innovation provide website maintenance and technical support services?",
    answer:
"Yes, RoyalTech Innovation provides ongoing technical support and website maintenance services to help businesses keep their websites, web applications, and digital solutions running smoothly. We understand that maintaining a secure, updated, and high-performing website is essential for long-term business success. Our technical support services include website maintenance, bug fixing, security updates, performance optimization, troubleshooting, software updates, database management, backup assistance, and technical issue resolution. We also provide support for website functionality improvements, application updates, server-related issues, and ongoing system maintenance based on project requirements and support agreements. Our team focuses on minimizing downtime, improving website performance, strengthening security, and ensuring a seamless user experience across all devices. Whether you are a startup, small business, or established enterprise, RoyalTech Innovation offers reliable technical support and maintenance solutions to help your digital platforms remain efficient, secure, and scalable as your business grows."   

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
