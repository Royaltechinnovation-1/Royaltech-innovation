import BackToTop from "@/components/BackToTop";
import CareersPageContent from "@/components/CareersPageContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import "@/styles/home-theme.css";

export const metadata: Metadata = {
  title: "Careers | Join RoyalTech Innovation in Mohali",
  description:
    "Explore open roles at RoyalTech Innovation — full stack, front-end, backend, mobile, UI/UX, and digital marketing careers in Mohali / remote.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at RoyalTech Innovation",
    description:
      "Join a Mohali tech team building websites, software, apps, and digital solutions for growing businesses.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      {/* Same home-theme wrapper as the home page, so the header and footer use the home colours. */}
      <div className="home-theme">
        <Header />
      </div>
      <main>
        <CareersPageContent />
      </main>
      <div className="home-theme">
        <Footer />
      </div>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
