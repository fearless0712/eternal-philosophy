"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { LanguageSwitch } from "@/components/i18n/LanguageSwitch";
import { useLocale } from "@/i18n/LocaleProvider";
import { siteCopy } from "@/i18n/site-copy";
import { siteConfig } from "@/config/site";
import styles from "./Experience.module.css";

const VISITED_KEY = "ep:intro-seen:v1";

export function Experience() {
  const { locale } = useLocale();
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [introActive, setIntroActive] = useState(true);
  const [ready, setReady] = useState(false);

  const finishIntro = () => {
    timeline.current?.kill();
    localStorage.setItem(VISITED_KEY, "true");
    const context = root.current;
    if (!context) return;
    gsap.set(context.querySelector(`.${styles.intro}`), { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(context.querySelector(`.${styles.siteHeader}`), { autoAlpha: 1, y: 0 });
    gsap.set(context.querySelectorAll(`.${styles.logo}, .${styles.nav}`), { autoAlpha: 1 });
    gsap.set(context.querySelectorAll(`.${styles.heroReveal}`), { autoAlpha: 1, y: 0 });
    gsap.set(context.querySelector(`.${styles.brandStatement}`), { scale: 1, filter: "blur(0px)", letterSpacing: "-0.065em" });
    gsap.set(context.querySelector(`.${styles.brandSubline}`), { filter: "blur(0px)" });
    setIntroActive(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const forceIntro = new URLSearchParams(window.location.search).get("intro") === "1";
    const seen = localStorage.getItem(VISITED_KEY) === "true";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = window.requestAnimationFrame(() => {
      if (!forceIntro && (seen || reduceMotion)) setIntroActive(false);
      setReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useLayoutEffect(() => {
    if (!ready || !introActive || !root.current) return;
    document.body.style.overflow = "hidden";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" }, onComplete: finishIntro });
      timeline.current = tl;
      tl.set(`.${styles.intro}`, { autoAlpha: 1, backgroundColor: "#000" })
        .set(`.${styles.siteHeader}`, { autoAlpha: 0 })
        .set(`.${styles.heroReveal}`, { autoAlpha: 0, y: 22 })
        .fromTo(`.${styles.filmMark}`, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0.75)
        .to(`.${styles.filmMark}`, { autoAlpha: 1, duration: 0.5, ease: "none" }, 1.15)
        .to(`.${styles.filmMark}`, { autoAlpha: 0, duration: 0.28 }, 1.65)
        .fromTo(`.${styles.lightSweep}`, { autoAlpha: 0, xPercent: -130, scaleX: 0.35 }, { autoAlpha: 0.65, xPercent: 130, scaleX: 1, duration: 1.05, ease: "power2.inOut" }, 2.25)
        .to(`.${styles.lightSweep}`, { autoAlpha: 0, duration: 0.18 }, 3.12)
        .fromTo(`.${styles.fragmentEternal}`, { autoAlpha: 0, xPercent: -12, scale: 2.7, z: 520, filter: "blur(18px)" }, { autoAlpha: 0.38, xPercent: 8, scale: 3.3, z: 690, filter: "blur(2px)", duration: 0.82, ease: "power2.in" }, 2.38)
        .to(`.${styles.fragmentEternal}`, { autoAlpha: 0, duration: 0.14 }, 3.16)
        .fromTo(`.${styles.fragmentPhilosophy}`, { autoAlpha: 0, xPercent: 54, scale: 2.35, z: 420, filter: "blur(14px)" }, { autoAlpha: 0.34, xPercent: -54, scale: 3.1, z: 700, filter: "blur(1px)", duration: 0.92, ease: "power3.inOut" }, 3.82)
        .to(`.${styles.fragmentPhilosophy}`, { autoAlpha: 0, duration: 0.12 }, 4.7)
        .fromTo(`.${styles.introTitle}`, { autoAlpha: 0, scale: 1.38, z: 260, letterSpacing: "0.18em", filter: "blur(24px)" }, { autoAlpha: 1, scale: 1, z: 0, letterSpacing: "0.055em", filter: "blur(0px)", duration: 1.2, ease: "expo.out" }, 5.32)
        .to(`.${styles.introTitle}`, { scale: 1, duration: 0.78, ease: "none" }, 6.52)
        .set(`.${styles.siteHeader}`, { autoAlpha: 1, y: 0 }, 7.3)
        .set(`.${styles.logo}, .${styles.nav}`, { autoAlpha: 0 }, 7.3)
        .to(`.${styles.introTitle}`, {
          x: () => {
            const title = root.current?.querySelector(`.${styles.introTitle}`)?.getBoundingClientRect();
            const logo = root.current?.querySelector(`.${styles.logo}`)?.getBoundingClientRect();
            return title && logo ? logo.left + logo.width / 2 - (title.left + title.width / 2) : 0;
          },
          y: () => {
            const title = root.current?.querySelector(`.${styles.introTitle}`)?.getBoundingClientRect();
            const logo = root.current?.querySelector(`.${styles.logo}`)?.getBoundingClientRect();
            return title && logo ? logo.top + logo.height / 2 - (title.top + title.height / 2) : 0;
          },
          scale: () => {
            const title = root.current?.querySelector(`.${styles.introTitle}`)?.getBoundingClientRect();
            const logo = root.current?.querySelector(`.${styles.logo}`)?.getBoundingClientRect();
            return title && logo ? logo.width / title.width : 0.08;
          },
          letterSpacing: "-0.05em", duration: 1, ease: "power4.inOut",
        }, 7.32)
        .to(`.${styles.intro}`, { backgroundColor: "rgba(0,0,0,0)", duration: 0.95 }, 7.34)
        .to(`.${styles.introTitle}`, { autoAlpha: 0, duration: 0.14 }, 8.2)
        .to(`.${styles.logo}`, { autoAlpha: 1, duration: 0.14 }, 8.2)
        .to(`.${styles.nav}`, { autoAlpha: 1, duration: 0.45 }, 8.26)
        .fromTo(`.${styles.brandStatement}`, { autoAlpha: 0, scale: 0.985, filter: "blur(9px)", letterSpacing: "0.015em" }, { autoAlpha: 1, scale: 1, filter: "blur(0px)", letterSpacing: "-0.065em", duration: 0.9, ease: "power2.out" }, 8.72)
        .fromTo(`.${styles.brandSubline}`, { autoAlpha: 0, y: 8, filter: "blur(4px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power2.out" }, 9.16);
    }, root);
    return () => { ctx.revert(); document.body.style.overflow = ""; };
  }, [ready, introActive]);

  useLayoutEffect(() => {
    if (!ready || introActive || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const heroStatement = root.current?.querySelector(`.${styles.brandStatement}`);
      const heroSubline = root.current?.querySelector(`.${styles.brandSubline}`);
      const heroLines = root.current?.querySelectorAll(`.${styles.heroLine}`);
      if (!heroStatement || !heroSubline || !heroLines) return;
      gsap.set(heroStatement, { autoAlpha: 1, y: 0, scale: 1, z: 0, filter: "blur(0px)", letterSpacing: "-0.075em", clipPath: "inset(0)" });
      gsap.set(heroSubline, { autoAlpha: 1, y: 0, filter: "blur(0px)" });

      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTimeline = gsap.timeline({
          scrollTrigger: { trigger: `.${styles.hero}`, start: "top top", end: "bottom top", scrub: 1.4 },
        });
        heroTimeline
          .to(heroSubline, { autoAlpha: 0, y: -32, duration: 0.22, ease: "power2.in" }, 0)
          .to(heroLines[0], { xPercent: -34, scale: 1.16, duration: 1, ease: "power2.inOut" }, 0)
          .to(heroLines[1], { xPercent: 30, scale: 1.35, z: 220, duration: 1, ease: "power2.inOut" }, 0)
          .to(heroLines[2], { xPercent: -18, scale: .82, duration: 1, ease: "power2.inOut" }, 0)
          .to(heroStatement, { z: 420, rotateX: -7, clipPath: "inset(10% 0 14% 0)", autoAlpha: 0, duration: 1, ease: "power3.in" }, 0);
        gsap.utils.toArray<HTMLElement>(`.${styles.statementScene}`).forEach((scene) => {
          const lines = scene.querySelectorAll(`.${styles.statementLine}`);
          const light = scene.querySelector(`.${styles.statementLight}`);
          gsap.fromTo(lines, { clipPath: "inset(0 100% 0 0)", yPercent: 16, z: -120 }, { clipPath: "inset(0 0% 0 0)", yPercent: 0, z: 0, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: scene, start: "top 62%", end: "top 18%", scrub: 1.2 } });
          gsap.fromTo(light, { xPercent: -80, autoAlpha: 0 }, { xPercent: 80, autoAlpha: 0.42, scrollTrigger: { trigger: scene, start: "top 70%", end: "bottom 35%", scrub: 1.8 } });
        });
      });
      return () => motion.revert();
    }, root);
    return () => ctx.revert();
  }, [ready, introActive]);

  return (
    <div ref={root} className={styles.experience} data-ready={ready}>
      <header className={styles.siteHeader} style={{ opacity: introActive ? 0 : 1 }}>
        <a className={styles.logo} href="#top" aria-label="ETERNAL PHILOSOPHY home">ETERNAL<br />PHILOSOPHY</a>
        <nav className={styles.nav} aria-label="Primary navigation"><a href="#works">WORK</a><a href="#studio">STUDIO</a><a href="#contact">CONTACT</a><LanguageSwitch /></nav>
      </header>
      <main>
        <section id="top" className={styles.hero}>
          <div className={styles.heroFrame}>
            <div className={`${styles.heroMeta} ${styles.brandSubline} ${styles.heroReveal}`}><span>ETERNAL PHILOSOPHY</span><span>TOKYO / JAPAN</span><span>2026</span></div>
            <h1 className={`${styles.brandStatement} ${styles.heroReveal}`}>
              <span className={`${styles.heroLine} ${styles.heroLineOne}`}>AI DEVELOPMENT</span>
              <span className={`${styles.heroLine} ${styles.heroLineTwo}`}>AUTOMATION</span>
              <span className={`${styles.heroLine} ${styles.heroLineThree}`}>DIGITAL SYSTEMS</span>
            </h1>
            <p className={styles.heroFootnote}>{siteCopy.heroFootnote[locale]}</p>
            <p className={styles.heroScroll}>SCROLL / TRANSFORM <span>↓</span></p>
          </div>
        </section>
        <section className={styles.statementScene} aria-label="We do not build for the present"><div className={styles.statementFrame}><div className={styles.statementLight} /><p className={styles.statementNumber}>01 / POSITION</p><h2><span className={styles.statementLine}>WE DON&apos;T BUILD</span><span className={styles.statementLine}>FOR THE PRESENT.</span></h2></div></section>
        <section className={styles.statementScene} aria-label="We build what comes next"><div className={styles.statementFrame}><div className={styles.statementLight} /><p className={styles.statementNumber}>02 / DIRECTION</p><h2><span className={styles.statementLine}>WE BUILD</span><span className={styles.statementLine}>WHAT COMES NEXT.</span></h2></div></section>
        <section id="works" className={styles.works}>
          <header className={styles.sectionHeader}><p>SELECTED WORKS</p><span>2024 — 2026</span></header>
          <div className={styles.projectList}>{featuredProjects.map((project, index) => <article className={styles.project} key={project.slug}><span className={styles.projectNumber}>0{index + 1}</span><h3><Link href={`/works/${project.slug}`} data-track="project-detail" data-project={project.slug}>{project.title}</Link></h3><p>{project.category}</p><time>{project.year}</time><span className={styles.projectSummary}>{project.content[locale].shortDescription}</span><div className={styles.projectLinks}><Link href={`/works/${project.slug}`} data-track="project-detail" data-project={project.slug}>VIEW ↗</Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-track="project-live" data-project={project.slug}>LIVE ↗</a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-track="project-github" data-project={project.slug}>GITHUB ↗</a>}</div></article>)}</div>
        </section>
        <section id="studio" className={styles.services}><header className={styles.darkSectionHeader}><span>04</span><p>WHAT I DO</p></header><div className={styles.serviceList}>{siteCopy.services.map((service, index) => <article className={styles.service} key={service.title}><span>0{index + 1}</span><h2>{service.title}</h2><p>{service.description[locale]}</p></article>)}</div></section>
        <section id="about" className={styles.about}><header className={styles.darkSectionHeader}><span>05</span><p>ABOUT / PHILOSOPHY</p></header><div className={styles.aboutBody}><p className={styles.aboutLead}>TECHNOLOGY SHOULD<br />RETURN SOMETHING<br />IRREPLACEABLE.</p><div className={styles.aboutCopy}><p>{siteCopy.about.accent[locale]}</p><p>{siteCopy.about.body1[locale]}</p><p>{siteCopy.about.body2[locale]}</p></div></div></section>
        <section id="contact" className={styles.contact}><p className={styles.contactLabel}>06 / CONTACT</p>{siteConfig.availableForProjects && <span className={styles.availability}>AVAILABLE FOR PROJECTS</span>}<h2>LET&apos;S BUILD<br />WHAT DOESN&apos;T<br />EXIST YET.</h2><p className={styles.contactSupport}>{siteCopy.contact.support[locale]}</p><nav className={styles.contactLinks} aria-label="Contact links">{siteConfig.email.length > 0 && <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject[locale])}`} data-track="contact-email">EMAIL <span>↗</span></a>}{siteConfig.linkedinUrl.length > 0 && <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" data-track="contact-linkedin">LINKEDIN <span>↗</span></a>}<a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" data-track="contact-github">GITHUB <span>↗</span></a></nav><footer><span>ETERNAL PHILOSOPHY</span><span>{siteConfig.location.toUpperCase()} — 2026</span></footer></section>
      </main>
      {(!ready || introActive) && <div className={styles.intro} role="dialog" aria-label="Opening sequence"><div className={styles.filmGrain} /><p className={styles.filmMark}><strong>ETERNAL PHILOSOPHY</strong><span>PRESENTS</span></p><div className={styles.lightSweep} /><p className={styles.fragmentEternal} aria-hidden="true">ETERNAL</p><p className={styles.fragmentPhilosophy} aria-hidden="true">PHILOSOPHY</p><h2 className={styles.introTitle}>ETERNAL<br />PHILOSOPHY</h2><button className={styles.skip} onClick={finishIntro} type="button">SKIP INTRO</button></div>}
    </div>
  );
}
