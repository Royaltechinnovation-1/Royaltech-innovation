import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royaltechinnovation.com"),
  title: {
    default:
      "RoyalTech Innovation | IT Solutions & Digital Transformation Partner",
    template: "%s | RoyalTech Innovation",
  },
  description:
    "RoyalTech Innovation is a trusted IT solutions company and software development company delivering end-to-end digital solutions, website development, mobile apps, ERP, and digital transformation services for startups, SMEs, and enterprises across India, the UK, and the UAE.",
  keywords: [
    "RoyalTech Innovation",
    "RoyalTech Innovation IT services",
    "RoyalTech Innovation software company",
    "IT solutions company",
    "digital transformation company",
    "IT services company",
    "software development company",
    "technology and digital transformation partner",
    "end-to-end digital solutions",
    "business technology solutions",
    "trusted IT partner for business",
    "website development company",
    "custom software development",
    "mobile app development company",
    "ERP software development",
    "digital marketing services",
    "IT consulting services",
    "reliable IT partner",
    "trusted technology partner",
    "software development company in India",
    "web development services UK",
    "website development company UAE",
  ],
  authors: [{ name: "RoyalTech Innovation" }],
  creator: "RoyalTech Innovation",
  publisher: "RoyalTech Innovation",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "RoyalTech Innovation",
    title:
      "RoyalTech Innovation | IT Solutions & Digital Transformation Partner",
    description:
      "Build your digital future with a partner you can trust. End-to-end digital solutions, software development, and IT services for growing businesses.",
    images: [
      {
        url: "/logo-mark.jpg",
        width: 512,
        height: 512,
        alt: "RoyalTech Innovation logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RoyalTech Innovation | IT Solutions & Digital Transformation Partner",
    description:
      "Trusted technology partner for digital transformation, software development, and business technology solutions.",
    images: ["/logo-mark.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
