const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "";

export const siteConfig = {
  siteName: "ETERNAL PHILOSOPHY",
  title: "ETERNAL PHILOSOPHY — AI Development & Automation",
  description: "AI development, automation, data systems, and digital products designed to create time. AI開発・業務自動化・データシステムを設計、開発します。",
  email: "",
  githubUrl: "https://github.com/fearless0712",
  linkedinUrl: "",
  location: "Tokyo, Japan",
  siteUrl: configuredSiteUrl,
} as const;

export function absoluteUrl(path = "/") {
  return siteConfig.siteUrl ? `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}` : undefined;
}
