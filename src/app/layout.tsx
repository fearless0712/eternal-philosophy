import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { absoluteUrl, siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { TrackingEvents } from "@/components/analytics/TrackingEvents";
import "./globals.css";

const display = Manrope({ subsets: ["latin"], variable: "--font-display" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl || "http://localhost:3000"),
  title: { default: siteConfig.title, template: `%s — ${siteConfig.siteName}` },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  keywords: ["AI Development", "Automation", "Web Application", "Data Analytics", "AI Workflow", "Business Automation"],
  ...(absoluteUrl("/") ? { alternates: { canonical: absoluteUrl("/") } } : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "ja_JP",
    ...(absoluteUrl("/") ? { url: absoluteUrl("/"), images: [{ url: absoluteUrl("/opengraph-image")!, width: 1200, height: 630, alt: siteConfig.siteName }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    ...(absoluteUrl("/opengraph-image") ? { images: [absoluteUrl("/opengraph-image")!] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${display.variable} ${mono.variable}`}>
      <body><LocaleProvider>{children}<TrackingEvents /></LocaleProvider><Analytics /></body>
    </html>
  );
}
