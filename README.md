# Mujtaba Khan — Portfolio

Personal portfolio for **Mujtaba Khan** — Final-year Computer Engineering student
(Intelligent Robotics) at Universiti Teknologi PETRONAS, Application Engineer at
Lattice Semiconductor.

Built with **Astro 5**, **Tailwind CSS v4**, and **TypeScript**.
Static-first, ships ~zero JS by default, deployed for free on **GitHub Pages**.

---

## Table of contents

- [Stack](#stack)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [How to update content](#how-to-update-content)
- [Code style & formatting](#code-style--formatting)
- [Deploying to GitHub Pages](#deploying-to-github-pages-free)
- [Accessibility & performance](#accessibility--performance)
- [License](#license)

---

## Stack

| Concern         | Choice                                                                          |
| --------------- | ------------------------------------------------------------------------------- |
| Framework       | [Astro 5](https://astro.build) — static site generator                          |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`              |
| Icons           | [astro-icon](https://www.astroicon.dev/) + Iconify (Tabler / Lucide / Simple)   |
| Language        | TypeScript (strict)                                                             |
| Hosting         | GitHub Pages, deployed via GitHub Actions (`.github/workflows/deploy.yml`)      |
| Formatting      | Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`              |
| Editor config   | `.editorconfig` (LF, 2-space, UTF-8) + recommended VS Code/Cursor extensions    |

## Project structure

Components are organized **by purpose** and **content lives in typed data files**
so the codebase stays readable as it grows. Each folder has its own README.

```
.
├── .editorconfig                 # cross-editor formatting rules
├── .github/workflows/deploy.yml  # GitHub Pages auto-deploy
├── .nvmrc                        # pinned Node version (20)
├── .prettierrc.json              # Prettier config + Astro/Tailwind plugins
├── .vscode/                      # recommended extensions + workspace settings
├── astro.config.mjs              # site + base URL + integrations
├── package.json
├── tsconfig.json                 # TS strict + path aliases
│
├── assets/                       # raw source artifacts (gitignored)
│   └── source-images/            # original-resolution photos before web optimization
│
├── public/                       # served as-is at site root
│   ├── favicon.svg               # MK monogram favicon
│   ├── og-image.svg              # optional in-browser branding
│   ├── og/og-default.jpg         # raster Open Graph / Twitter preview (~1200×630)
│   ├── resume.pdf                # downloadable CV
│   ├── robots.txt
│   ├── portrait/                 # profile photo + SVG fallback
│   ├── projects/                 # project thumbnails (referenced from projects.ts)
│   └── awards/                   # award/certificate photos (referenced from education.ts)
│
└── src/
    ├── data/                     # ← single source of truth for ALL content
    │   ├── README.md
    │   ├── profile.ts            # name, contact, summary, socials
    │   ├── experience.ts
    │   ├── recommendations.ts    # LinkedIn recommendations/testimonials
    │   ├── projects.ts           # project catalog (LinkedIn-synced)
    │   ├── skills.ts
    │   └── education.ts
    │
    ├── components/               # organized by purpose, see ./src/components/README.md
    │   ├── README.md
    │   ├── effects/              # decorative visuals
    │   │   └── GridBackground.astro
    │   ├── layout/               # site chrome (every page)
    │   │   ├── Navbar.astro
    │   │   └── Footer.astro
    │   ├── sections/             # one per major homepage section
    │   │   ├── Hero.astro
    │   │   ├── About.astro
    │   │   ├── Experience.astro
    │   │   ├── Recommendations.astro
    │   │   ├── Projects.astro
    │   │   ├── Skills.astro
    │   │   ├── Education.astro
    │   │   └── Contact.astro
    │   └── ui/                   # small reusable primitives
    │       ├── SectionHeading.astro
    │       └── Reveal.astro
    │
    ├── layouts/
    │   └── BaseLayout.astro      # <html> shell, meta/SEO, fonts, page-wide FX
    │
    ├── pages/
    │   ├── index.astro           # composes the homepage
    │   ├── 404.astro
    │   └── projects/
    │       └── [slug].astro      # case study per project (from projects.ts)
    │
    ├── styles/
    │   └── global.css            # Tailwind v4 + design tokens + keyframes
    │
    └── env.d.ts
```

## Path aliases

Always import via aliases — never `../../`. They are defined in [`tsconfig.json`](./tsconfig.json):

| Alias           | Resolves to        | Use for                               |
| --------------- | ------------------ | ------------------------------------- |
| `@/*`           | `src/*`            | Anything not covered by below         |
| `@components/*` | `src/components/*` | All component imports                 |
| `@data/*`       | `src/data/*`       | Content data files                    |
| `@layouts/*`    | `src/layouts/*`    | Page layouts                          |

Example:

```ts
import BaseLayout from "@layouts/BaseLayout.astro";
import Hero from "@components/sections/Hero.astro";
import SectionHeading from "@components/ui/SectionHeading.astro";
import { profile } from "@data/profile.ts";
```

## Local development

You need [Node.js](https://nodejs.org) **20 or newer**. Then:

```bash
# Install dependencies (only once)
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Build the production site to ./dist
npm run build

# Preview the production build locally
npm run preview

# Format every file in the project
npm run format

# Check formatting without writing
npm run format:check
```

> Tip: use [`nvm`](https://github.com/nvm-sh/nvm) (or `nvm-windows`) and run
> `nvm use` — this repo includes a `.nvmrc` pinned to Node 20.

If you open the project in **VS Code or Cursor**, you'll be prompted to install
the recommended extensions (Astro, Tailwind IntelliSense, Prettier, EditorConfig,
Pretty TypeScript Errors, Error Lens). Format-on-save is already enabled.

## How to update content

**You should never need to touch HTML or CSS to update site content.**
Everything is centralized in [`src/data/`](./src/data/README.md):

| What you want to change            | File                       |
| ---------------------------------- | -------------------------- |
| Name, role, summary, social URLs   | `src/data/profile.ts`      |
| Experience timeline                | `src/data/experience.ts`   |
| Recommendations / testimonials     | `src/data/recommendations.ts` |
| Projects (currently placeholders)  | `src/data/projects.ts`     |
| Skills & languages                 | `src/data/skills.ts`       |
| Education / certs / honors         | `src/data/education.ts`    |
| New CV PDF                         | replace `public/resume.pdf`|
| Favicon / OG image                 | replace files in `public/` |
| Project thumbnail                  | drop into `public/projects/` (kebab-case `.jpg`/`.png`) |
| Award / certificate photo          | drop into `public/awards/`   (kebab-case `.jpg`/`.png`) |
| Profile portrait                   | replace `public/portrait/profile.jpg` |

For deeper guidance (adding a brand-new section, etc.), see the per-folder
READMEs in [`src/data/`](./src/data/README.md) and
[`src/components/`](./src/components/README.md).

To swap your real GitHub URL site-wide, edit one line in `src/data/profile.ts`:

```ts
github: "https://github.com/<your-real-username>",
```

## Code style & formatting

- **EditorConfig** ([`.editorconfig`](./.editorconfig)): LF line endings, 2-space
  indent, UTF-8, trim trailing whitespace, final newline. Honored by every modern
  editor automatically.
- **Prettier** ([`.prettierrc.json`](./.prettierrc.json)): 100-char width,
  double quotes, trailing commas, semicolons. Astro and Tailwind class-sorting
  plugins enabled. Run with `npm run format`.
- **TypeScript**: strict mode (extends `astro/tsconfigs/strict`). All data files
  are strongly typed.
- **Components**: scoped `<style>` blocks per `.astro` file — no global CSS leaks.
  Design tokens (colors, fonts, spacing) live in [`src/styles/global.css`](./src/styles/global.css).
- **Comments**: only used to explain *why*, never *what*. Per-folder READMEs
  document conventions instead of inline narration.

## Deploying to GitHub Pages (free)

You have two options. Pick **one** when you create your repo, then update
[`astro.config.mjs`](./astro.config.mjs) to match.

### Option A — User site (recommended)

- Repo name **must be exactly**: `<your-github-username>.github.io`
- Live URL: `https://<your-github-username>.github.io/`
- In `astro.config.mjs`:
  ```js
  site: "https://<your-github-username>.github.io",
  base: "/",
  ```

### Option B — Project site

- Repo can be named anything, e.g. `portfolio`
- Live URL: `https://<your-github-username>.github.io/portfolio/`
- In `astro.config.mjs`:
  ```js
  site: "https://<your-github-username>.github.io",
  base: "/portfolio/",
  ```

### One-time setup

1. **Create the repo** on GitHub (public).
2. **Push this code** to the `main` branch:
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<repo-name>.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
3. **Enable Pages**: in your GitHub repo go to
   **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
4. **Wait for the workflow** to finish (Actions tab). Your live URL appears in
   the deployment summary and on the Pages settings page.

After that, **every push to `main`** automatically rebuilds and redeploys.

### Custom domain (optional)

1. Add a `CNAME` file inside `public/` containing your domain (e.g. `www.mujtaba.dev`).
2. Update `site` in `astro.config.mjs` to your domain (e.g. `https://www.mujtaba.dev`)
   and set `base: "/"`.
3. Configure your DNS provider per
   [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Accessibility & performance

- Skip-to-content link as the first focusable element
- `prefers-reduced-motion` honored everywhere (background, animations, reveals)
- Visible focus rings, semantic landmarks, ARIA labels on icon-only buttons
- Mostly static HTML/CSS — typewriter, mobile menu, and scroll observer are
  tiny inline scripts, no client-side framework runtime
- Fonts loaded with `display=swap` and `preconnect`
- Dark mode native (no toggle needed)
- 100% static output — no runtime, no API, no database, no cookies

## License

MIT for the source code — see [`LICENSE`](./LICENSE).
Personal content (CV PDF, summary, biographical text) is **not** covered by the
license and remains the property of the copyright holder.

---

Built with [Astro](https://astro.build) · Hosted on [GitHub Pages](https://pages.github.com).
