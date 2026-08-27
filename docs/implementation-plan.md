# Implementation plan

## 1. Recommended stack

- Next.js 16 App Router, React 19, TypeScript
- GSAP for deterministic intro and future ScrollTrigger sequences
- CSS Modules for local, auditable styling
- Content kept as typed data in the next iteration; CMS only when project volume justifies it
- No Three.js in v1. Add it only if a later prototype proves CSS 3D cannot deliver the required depth.

## 2. Directory direction

```text
src/
  app/                 routes, metadata, global styles
  components/
    experience/        cinematic orchestration and page experience
    sections/          future isolated content sections
  content/             future JP/EN copy and project data
  lib/                 future animation and locale utilities
public/                 static assets
docs/                   design and implementation notes
```

## 3. Animation system

The intro is a single GSAP master timeline: black hold → initialization signal → telemetry scan → silence → title moving through Z-space → interface reveal. Skip and completion converge on the same final state. Reduced-motion and returning visitors enter that final state immediately. Future scroll sequences belong to a separate ScrollTrigger context so they do not couple to the intro.

## 4. Sections

1. Hero / cinematic intro — identity, capability, core promise
2. Brand message — large trailer-like typography and spatial movement
3. Selected works — quiet editorial project index
4. What I do — four service pillars
5. How I work — Human × AI pipeline
6. About — philosophy and operating model
7. Contact — a decisive final call to action

JP/EN copy will use locale dictionaries with identical keys; the switch can later move from UI-only to `/ja` and `/en` routes for proper international SEO.

## 5. Build order

1. Foundation, metadata, responsive type/grid
2. Intro v1 and hero handoff (current milestone)
3. Tune timing with real-device profiling
4. Scroll-driven brand message with restrained CSS 3D / ScrollTrigger
5. Data-driven works and project detail pages
6. Services, workflow, about, and contact
7. JP/EN routing, accessibility, SEO, analytics
8. Performance budget, cross-browser QA, Vercel/Render deployment
