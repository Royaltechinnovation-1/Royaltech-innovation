import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "RoyalTech Innovation — Technology, AI & Automation Solutions",
  description:
    "RoyalTech Innovation designs and builds intelligent software, cloud platforms and AI automation for ambitious businesses.",
};

export const viewport: Viewport = {
  themeColor: "#03060d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <noscript>
          <style>{`#preloader{display:none!important}[data-reveal],[data-stagger]>*{opacity:1!important}.scrub-word{opacity:1!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
