"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";
import { LanguageSwitch } from "@/components/i18n/LanguageSwitch";
import { useLocale } from "@/i18n/LocaleProvider";
import styles from "@/app/works/[slug]/page.module.css";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale } = useLocale();
  const content = project.content[locale];
  const sections = [
    { label: "PROBLEM", content: content.problem },
    { label: "IDEA", content: content.idea },
    { label: "SYSTEM", content: content.system },
    ...(content.keyFeatures?.length ? [{ label: "KEY FEATURES", content: content.keyFeatures.join(" / ") }] : []),
    ...(content.challenges ? [{ label: "CHALLENGES", content: content.challenges }] : []),
    { label: "TECHNOLOGY", content: project.technology.join(" / ") },
    { label: "RESULT", content: content.result },
    ...(content.futureImprovements ? [{ label: "NEXT", content: content.futureImprovements }] : []),
  ];

  return (
    <main className={styles.caseStudy}>
      <header className={styles.header}><Link href="/">ETERNAL<br />PHILOSOPHY</Link><div className={styles.headerTools}><LanguageSwitch /><Link href="/#works">← ALL WORKS</Link></div></header>
      <section className={styles.hero}>
        <p>{project.category} / {project.year} / {project.status.toUpperCase()}</p>
        <h1>{project.title}</h1>
        <span>{content.shortDescription}</span>
      </section>
      {(content.role || project.developmentPeriod || project.liveUrl || project.githubUrl) && <aside className={styles.projectMeta}>{content.role && <p><span>ROLE</span>{content.role}</p>}{project.developmentPeriod && <p><span>PERIOD</span>{project.developmentPeriod}</p>}<div>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">LIVE ↗</a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>}</div></aside>}
      <div className={styles.sections}>{sections.map(({ label, content: sectionContent }, index) => <section key={label}><span>{String(index + 1).padStart(2, "0")}</span><h2>{label}</h2><p>{sectionContent}</p></section>)}</div>
      <footer><Link href="/#works">BACK TO SELECTED WORKS →</Link></footer>
    </main>
  );
}
