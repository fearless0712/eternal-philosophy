# ETERNAL PHILOSOPHY

AI development, automation, and digital systems studio portfolio.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To replay the full intro, clear the `ep:intro-seen:v1` localStorage key in DevTools.

## Architecture

- Next.js App Router + TypeScript for SEO-friendly server-rendered document structure.
- GSAP only for the cinematic timeline. Three.js and Framer Motion are intentionally omitted from v1.
- CSS 3D perspective, typography, grid, and procedural noise keep the first load light.
- Intro state honors `prefers-reduced-motion`, includes skip, and is remembered in localStorage.

See [docs/implementation-plan.md](docs/implementation-plan.md) for the complete design and build order.
