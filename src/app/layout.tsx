import { FormModalProvider } from "@/components/FormModal";
import type { Metadata, Viewport } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f3d2e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.royaltechinnovation.co.in"),
  title: {
    default:
      "RoyalTech Innovation | IT Solutions, Website Development & SEO Company",
    template: "%s | RoyalTech Innovation",
  },
  description:
    "RoyalTech Innovation is a trusted IT solutions and digital transformation company in Mohali delivering SEO-ready website development, custom software, mobile apps, digital marketing, UI/UX design, and IT consulting for startups, SMEs, and enterprises across India, the UK, and the UAE.",
  keywords: [
    "RoyalTech Innovation",
    "RoyalTech Innovation Mohali",
    "IT solutions company Mohali",
    "website development company Mohali",
    "SEO company India",
    "software development company",
    "mobile app development company",
    "digital marketing services",
    "digital transformation partner",
    "custom software development",
    "IT consulting services",
    "web development company Punjab",
    "ERP CRM development",
    "UI UX design company",
  ],
  authors: [{ name: "RoyalTech Innovation" }],
  creator: "RoyalTech Innovation",
  publisher: "RoyalTech Innovation",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "RoyalTech Innovation",
    title:
      "RoyalTech Innovation | IT Solutions & Digital Transformation Partner",
    description:
      "Build your digital future with a trusted IT partner. Websites, software, apps, SEO, and digital solutions for growing businesses.",
    images: [
      {
        url: "/royaltech-logo.png",
        width: 1200,
        height: 630,
        alt: "RoyalTech Innovation — IT solutions and digital transformation company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RoyalTech Innovation | IT Solutions & Digital Transformation Partner",
    description:
      "Trusted technology partner for digital transformation, software development, and business technology solutions.",
    images: ["/royaltech-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${outfit.className} ${sora.variable}`}>
        <ScrollToTop />
        <FormModalProvider>{children}</FormModalProvider>
      </body>
    </html>
  );
}
