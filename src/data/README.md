# `src/data/`

**This folder is the single source of truth for all site content.**

Everything you see on the page — name, contact, summary, experience, projects,
skills, education, certifications, awards — is driven from these typed
TypeScript files. To update the site, **never edit components** — edit the
relevant data file here.

## Files

| File              | Drives                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `profile.ts`      | Name, role, contact, social URLs, summary, SEO meta, hero tagline rotators, resume link  |
| `experience.ts`   | Experience timeline (companies, roles, dates, descriptions)                              |
| `recommendations.ts` | LinkedIn recommendations/testimonials (recommender, role, relationship, quote text)   |
| `projects.ts`     | Project cards: `slug` (for `/projects/{slug}/`), `highlights`, optional `body`, image, tech, links. |
| `skills.ts`       | Grouped skill panels (Hardware, Software, Cloud/Tools, Languages)                        |
| `education.ts`    | Degree, certifications, honors / awards                                                  |

## Conventions

- All exports are **`as const`** or use a named exported `type` for safety.
- Optional fields use `?` so the component side can render conditionally.
- Icon strings use [Iconify](https://iconify.design) collection names available
  in this project: `tabler:*`, `lucide:*`, `simple-icons:*`. To add new icon
  collections, install `@iconify-json/<name>` and the icon will be auto-resolved
  by `astro-icon`.
- Order of items in the array = order rendered on the page.
- **Image paths** are absolute and reference `/public/` subfolders by category:
  - Project thumbnails → `/projects/<kebab-case>.jpg`
  - Award/certificate photos → `/awards/<kebab-case>.jpg`
  - Portrait → `/portrait/profile.jpg`
- All asset filenames are **kebab-case** (no spaces, no underscores, lowercase).

## Common edits

### Update your name / contact / GitHub URL

Edit [`profile.ts`](./profile.ts):

```ts
socials: {
  linkedin: "https://www.linkedin.com/in/your-handle",
  github:   "https://github.com/your-real-username", // ← put your real one here
  email:    "mailto:you@example.com",
},
```

### Add a new project

Append to the array in [`projects.ts`](./projects.ts):

```ts
{
  slug: "my-new-project",         // required — /projects/my-new-project/
  title: "My New Project",
  year: "2026",
  status: "Shipped",            // "Concept" | "In Progress" | "Shipped" | "Award"
  icon: "tabler:rocket",
  highlights: [                 // up to 3 scannable lines on the card + detail lead
    "What shipped or what problem it solved",
    "Stack or method worth naming",
    "One outcome, metric, or scope line",
  ],
  summary: "One-paragraph description of what it does and why.",
  body: [                       // optional — extra paragraphs on the case study page
    "More context, architecture, or results for readers who click through.",
  ],
  tech: ["TypeScript", "FPGA", "TensorFlow"],
  links: [
    { label: "Repo", href: "https://github.com/...", icon: "simple-icons:github" },
    { label: "Demo", href: "https://...", icon: "tabler:external-link" },
  ],
  image: {                        // optional — drop the file in /public/projects/
    src: "/projects/my-new-project.jpg",
    alt: "Short description of what the screenshot shows.",
    width: 1200,                // optional — reduces layout shift; match real image
    height: 750,
  },
  featured: true,                 // optional — adds a gradient highlight border
},
```

### Add a new experience role

Append to the relevant company in [`experience.ts`](./experience.ts), or add
a new top-level company entry. Multiple roles at the same company stack inside
one timeline card.

### Update LinkedIn recommendations

Edit [`recommendations.ts`](./recommendations.ts) and replace placeholder
entries with your actual recommendation text.

### Add a new section

1. Add a new typed data file here (e.g. `testimonials.ts`).
2. Create a section component in [`../components/sections/`](../components/README.md).
3. Add it to [`../pages/index.astro`](../pages/) in render order.
4. Add an entry to the `links` array in [`../components/layout/Navbar.astro`](../components/layout/Navbar.astro).
