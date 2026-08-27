const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "";

export const siteConfig = {
  siteName: "ETERNAL PHILOSOPHY",
  title: "ETERNAL PHILOSOPHY — AI Development & Automation",
  description: "AI development, automation, data systems, and digital products designed to create time. AI開発・業務自動化・データシステムを設計、開発します。",
  email: "hello.ep0222@gmail.com",
  emailSubject: {
    ja: "制作・開発のご相談 — ETERNAL PHILOSOPHY",
    en: "Project Inquiry — ETERNAL PHILOSOPHY",
  },
  githubUrl: "https://github.com/fearless0712",
  linkedinUrl: "https://www.linkedin.com/in/%E5%B0%86-%E6%9C%AC%E6%9D%89-aa1455405/",
  availableForProjects: true,
  location: "Tokyo, Japan",
  siteUrl: configuredSiteUrl,
} as const;

export function absoluteUrl(path = "/") {
  return siteConfig.siteUrl ? `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}` : undefined;
}
