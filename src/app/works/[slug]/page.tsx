import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { absoluteUrl, siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const description = project.content.en.shortDescription;
  const path = `/works/${project.slug}`;
  return {
    title: project.title,
    description,
    ...(absoluteUrl(path) ? { alternates: { canonical: absoluteUrl(path) } } : {}),
    openGraph: {
      type: "article",
      siteName: siteConfig.siteName,
      title: `${project.title} — ${siteConfig.siteName}`,
      description,
      ...(absoluteUrl(path) ? { url: absoluteUrl(path), images: [{ url: absoluteUrl("/opengraph-image")!, width: 1200, height: 630, alt: `${project.title} — ${siteConfig.siteName}` }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${siteConfig.siteName}`,
      description,
      ...(absoluteUrl("/opengraph-image") ? { images: [absoluteUrl("/opengraph-image")!] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
