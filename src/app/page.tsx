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
    "RoyalTech Innovation in Mohali helps startups and SMEs with website development, custom software, mobile apps, SEO, digital marketing, UI/UX design, and IT consulting.",
    // "RoyalTech Innovation delivers web development, mobile apps, custom software, UI/UX design and digital solutions to help businesses grow.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "RoyalTech Innovation | IT Solutions Company & Digital Transformation Partner",
    description:
      "End-to-end digital solutions, software development, and IT services for growing businesses across India, the UK, and the UAE.",
    url: "/",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://royaltechinnovation.co.in/#organization",
      name: "RoyalTech Innovation",
      url: "https://royaltechinnovation.co.in",
      logo: "https://royaltechinnovation.co.in/royaltech-logo.png",
      image: "https://royaltechinnovation.co.in/royaltech-logo.png",
      description:
        "IT solutions company and digital transformation partner delivering software development, website development, mobile apps, ERP, and IT consulting services.",
      email: "info@royaltechinnovation.co.in",
      telephone: "+91-86790-16505",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Gate No. 5, CP 67, Imperial Tower, Behind CP67 Mall, Chandigarh Int'l Airport Rd",
        addressLocality: "Sahibzada Ajit Singh Nagar",
        addressRegion: "Punjab",
        postalCode: "160062",
        addressCountry: "IN",
      },
      areaServed: ["India", "United Kingdom", "United Arab Emirates"],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61596431871796",
        "https://www.instagram.com/royaltechinnovation/",
        "https://www.linkedin.com/company/143923623/",
      ],
      knowsAbout: [
        "IT solutions",
        "digital transformation",
        "software development",
        "website development",
        "mobile app development",
        "SEO",
        "digital marketing services",
        "IT consulting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://royaltechinnovation.co.in/#website",
      url: "https://royaltechinnovation.co.in",
      name: "RoyalTech Innovation",
      publisher: {
        "@id": "https://royaltechinnovation.co.in/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://royaltechinnovation.co.in/#localbusiness",
      name: "RoyalTech Innovation",
      image: "https://royaltechinnovation.co.in/royaltech-logo.png",
      url: "https://royaltechinnovation.co.in",
      telephone: "+91-86790-16505",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Gate No. 5, CP 67, Imperial Tower, Behind CP67 Mall, Chandigarh Int'l Airport Rd",
        addressLocality: "Sahibzada Ajit Singh Nagar",
        addressRegion: "Punjab",
        postalCode: "160062",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.678057,
        longitude: 76.723018,
      },
      priceRange: "$$",
    },
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
