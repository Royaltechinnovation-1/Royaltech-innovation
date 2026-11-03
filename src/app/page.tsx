import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import ConnectWithUs from "@/components/ConnectWithUs";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "RoyalTech Innovation | IT Solutions Company & Digital Transformation Partner",
  description:
    "Build your digital future with RoyalTech Innovation — a trusted IT services company offering end-to-end digital solutions, software development, website development, and business technology solutions.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RoyalTech Innovation",
  url: "https://royaltechinnovation.com",
  description:
    "IT solutions company and digital transformation partner delivering software development, website development, mobile apps, ERP, and IT consulting services.",
  areaServed: ["India", "United Kingdom", "United Arab Emirates"],
  knowsAbout: [
    "IT solutions",
    "digital transformation",
    "software development",
    "website development",
    "mobile app development",
    "ERP software development",
    "digital marketing services",
    "IT consulting",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Services />
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <Contact />
        <ConnectWithUs />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
