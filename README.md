# Diana Percatkina — Portfolio

A single-page portfolio built with React and Vite. The site showcases experience, projects, and tech stack with scroll-driven animations and a responsive layout. Deployed to GitHub Pages.

**Live:** [https://cov393.github.io/diana-portfolio/](https://cov393.github.io/diana-portfolio/)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | React 18.3 (strict mode) |
| **Build** | Vite 6, ESM |
| **Styling** | Tailwind CSS 3, PostCSS, Autoprefixer, MUI 6, styled-components 6 |
| **Animation** | Framer Motion 11 |
| **Icons** | react-icons 5 |
| **Analytics** | react-ga 3, Google Analytics (gtag.js in `index.html`) |
| **Lint** | ESLint 9 (flat config), React/React Hooks/React Refresh plugins |
| **Deploy** | gh-pages (static `dist` → GitHub Pages) |

---

## Architecture

### Application structure

- **SPA:** Single `index.html` entry; React mounts at `#root`. No client-side router; sections are stacked and identified by layout/semantics.
- **Entry:** `main.jsx` — `createRoot` + `StrictMode`, global CSS import, `App.jsx` as root.
- **Root component:** `App.jsx` — layout shell (background, container), GA init, responsive branching for Experience vs Timeline.
- **Sections (presentational):** Navbar, Hero, About, Experience / TimeLine, Technologies, Projects, Contact. Each is a default-exported component under `src/components/`.
- **Data:** Centralized in `src/constants/index.js` — `HERO_CONTENT`, `ABOUT_TEXT`, `EXPERIENCES`, `PROJECTS`, `CONTACT`. Assets (images, PDFs) are imported where used or referenced from `public/`.

### Styling strategy

- **Tailwind:** Utility-first for layout, spacing, typography, colors, borders, responsive breakpoints (`lg:`, etc.). Content paths in `tailwind.config.js`: `index.html`, `src/**/*.{js,ts,jsx,tsx}`.
- **MUI:** Used for layout/typography in the desktop experience section (`@mui/lab` Timeline, `Typography`, `sx` prop). Theme is not customized; component-level overrides via `sx` and styled-components.
- **styled-components:** Used to extend MUI Timeline (e.g. `CustomTimeline`) — dot size, connector visibility, content gradient and shadow.
- **Global CSS:** `index.css` — Tailwind directives, `:root` font (Inter), custom tooltip classes (`.tooltip-container`, `.tooltip-text`) for technology icons. Google Fonts (Inter, Poppins) loaded via `@import`.

### Animation

- **Framer Motion** drives all motion:
  - **Hero:** Variant-based sequence (`container(delay)` with `x`, `opacity`); image entrance with `transition` delay.
  - **Sections:** `whileInView` + `initial` for scroll-triggered fade/slide (e.g. About, Projects, Contact, Technologies, Experience, TimeLine).
  - **Technologies:** Per-icon `iconVariants()` with randomized duration and `repeat: Infinity` for subtle bounce; tooltips via CSS hover in `index.css`.
- No scroll-linked library (e.g. Motion scroll animations); viewport detection is handled by Framer’s `whileInView`.

### Responsive behavior

- **Breakpoint:** `useMediaQuery('(max-width:768px)')` in `App.jsx` switches between `Experience` (mobile) and `MyTimeline` (desktop).
- **Layout:** Flexbox + Tailwind width utilities (`w-full`, `lg:w-1/2`, etc.) for section content; container uses `container mx-auto px-8`.

### Analytics and tracking

- **Google Analytics:** ID `G-Q2WPE13J4P`. gtag.js snippet in `index.html`; `react-ga` initializes the same ID in `App.jsx` for programmatic events. Page views and events can be sent via `ReactGA` where needed.

---

## Project layout

```
diana-portfolio/
├── index.html              # Entry HTML, gtag snippet, root div, script to main.jsx
├── vite.config.js          # Vite config: React plugin, base: "/diana-portfolio"
├── tailwind.config.js      # Content paths, theme extend (default)
├── postcss.config.js       # tailwindcss, autoprefixer
├── eslint.config.js       # ESLint flat config, React 18.3, react-refresh
├── package.json            # Scripts, dependencies, homepage URL
├── public/                 # Static assets (e.g. resume PDF)
└── src/
    ├── main.jsx            # React root, StrictMode, global CSS
    ├── App.jsx             # Layout, GA init, section composition, responsive branch
    ├── App.css             # (if used)
    ├── index.css           # Fonts, Tailwind, tooltip styles
    ├── constants/
    │   └── index.js        # Copy, experience, projects, contact; asset imports
    ├── assets/             # Images, project thumbnails, company logos, utilities
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx   # Mobile experience list
        ├── TimeLine.jsx     # Desktop MUI Timeline
        ├── Technologies.jsx
        ├── Projects.jsx
        └── Contact.jsx
```

---

## Development

### Prerequisites

- Node.js (LTS recommended)
- npm (or compatible package manager)

### Install and run

```bash
npm install
npm run dev
```

- **Dev server:** Vite HMR; default origin typically `http://localhost:5173`.
- **Lint:** `npm run lint` (ESLint over project; `dist` ignored).

### Build and preview

```bash
npm run build
npm run preview
```

- **Output:** `dist/` (static assets; base path `/diana-portfolio` for GitHub Pages).
- **Preview:** Serves `dist/` locally to verify production build and base path.

---

## Deployment (GitHub Pages)

- **Target:** GitHub Pages at `https://<user>.github.io/diana-portfolio/`.
- **Config:** `vite.config.js` sets `base: "/diana-portfolio"`; `package.json` has `"homepage": "https://cov393.github.io/diana-portfolio/"`.
- **Deploy:**

  ```bash
  npm run predeploy   # runs build
  npm run deploy      # gh-pages -d dist
  ```

- **Note:** Ensure a clean build when redeploying (e.g. remove `dist/` before `npm run build` if you change base path or see stale assets). `dist/` is gitignored.

---

## Configuration reference

- **Vite:** `defineConfig`, `@vitejs/plugin-react`, `base` for subpath.
- **Tailwind:** `content` globs; no custom theme in config.
- **ESLint:** `ecmaVersion` 2020 (languageOptions), latest for parser; React 18.3; `react-refresh/only-export-components` with `allowConstantExport: true`; `react/jsx-no-target-blank` off (external links use explicit `rel="noopener noreferrer"` in components).

---

## Dependencies (summary)

- **Core:** react, react-dom.
- **UI / motion:** @mui/material, @mui/lab, @emotion/react, @emotion/styled, styled-components, framer-motion, motion, react-icons, react-tooltip, react-vertical-timeline-component (optional / unused in current tree).
- **Analytics:** react-ga.
- **Dev:** vite, @vitejs/plugin-react, eslint + plugins, tailwindcss, postcss, autoprefixer, gh-pages, @types/react, @types/react-dom, globals.

---

## References

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MUI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/) — [React scroll animations](https://motion.dev/docs/react-scroll-animations)
- [Framer Plugins (quick start)](https://www.framer.com/developers/plugins/quick-start)
