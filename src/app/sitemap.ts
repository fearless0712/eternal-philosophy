import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) return [];
  const routes = ["/", ...projects.map(({ slug }) => `/works/${slug}`)];
  return routes.map((path) => ({ url: `${siteConfig.siteUrl}${path}`, changeFrequency: path === "/" ? "monthly" : "yearly", priority: path === "/" ? 1 : .8 }));
}
