import BackToTop from "@/components/BackToTop";
import ContactPageContent from "@/components/ContactPageContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/home-theme.css";
import "@/styles/contact-responsive.css";
import "@/styles/contact-font.css";
import "@/styles/contact-booking.css";

/* Same typeface the home page uses (Inter), so the contact content matches it. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Contact Us | Request a Quote in Mohali",
  description:
    "Contact RoyalTech Innovation for websites, software, apps, digital marketing, design, and IT consulting. Request a quote or visit our Mohali office near CP67 Mall.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact RoyalTech Innovation",
    description:
      "Request a quote or book a free consultation with our Mohali team.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Same home-theme wrapper as the home page, so the header and footer use the home colours. */}
      <div className="home-theme">
        <Header />
      </div>
      <main className={`contact-inter ${inter.variable}`}>
        <ContactPageContent />
      </main>
      <div className="home-theme">
        <Footer />
      </div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
