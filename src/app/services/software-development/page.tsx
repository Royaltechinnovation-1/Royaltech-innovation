import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getServiceBySlug } from "@/data/services-data";
import "@/styles/home-theme.css";

const service = getServiceBySlug("software-development")!;

export const metadata: Metadata = {
  title: service.metaTitle || "Website Development Company | Responsive & SEO-Friendly Websites | RoyalTech",
  description: service.metaDescription || "Get fast, responsive and SEO-friendly websites from RoyalTech Innovation. Corporate sites, eCommerce, landing pages and CMS development using Next.js and React.",
  alternates: {
    canonical: "https://www.royaltechinnovation.co.in/services/software-development",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Website Development",
    "Website Development Company Mohali",
    "SEO-Friendly Websites",
    "Responsive Web Design",
    "Next.js Development",
    "React Web Development",
    "Corporate Website Design",
    "eCommerce Website Development",
    "Custom Web Development India",
    "RoyalTech Innovation",
  ],
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://www.royaltechinnovation.co.in/services/website-development",
    siteName: "RoyalTech Innovation",
    type: "website",
    images: [
      {
        url: "/home-services/web development.png",
        width: 1200,
        height: 630,
        alt: "RoyalTech Innovation Website Development Services",
      },
    ],
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <div className="home-theme"><Header /></div>
        <main style={{ minHeight: "60vh", background: "#050b17" }}>
          {/* New design for this service page goes here. */}
        </main>
        <div className="home-theme"><Footer /></div>
        <BackToTop />
        <WhatsAppButton />
      </>
      );
}
