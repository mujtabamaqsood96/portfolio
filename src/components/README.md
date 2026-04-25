# `src/components/`

Components are organized **by purpose**, not by file type, so anyone reading the
codebase can find what they need without opening files first.

```
components/
├── effects/      Decorative, non-interactive visuals (background, FX layers)
├── layout/       Site-wide chrome that wraps every page (Navbar, Footer)
├── sections/     Page sections — e.g. Hero, Experience, Recommendations, Contact
└── ui/           Small reusable UI primitives consumed by sections/layout
```

## When to add a file where

| You're adding…                                                          | Put it in            |
| ----------------------------------------------------------------------- | -------------------- |
| A new homepage section (e.g. `Testimonials.astro`, `Blog.astro`)        | `sections/`          |
| Site-wide chrome shared across all pages (e.g. `Breadcrumbs.astro`)     | `layout/`            |
| A reusable primitive used by multiple sections (e.g. `Button.astro`)    | `ui/`                |
| A purely decorative visual element (e.g. `ParticleField.astro`)         | `effects/`           |

## Import conventions

Always use the path aliases — never relative paths like `../../`:

```ts
import BaseLayout from "@layouts/BaseLayout.astro";
import Hero from "@components/sections/Hero.astro";
import SectionHeading from "@components/ui/SectionHeading.astro";
import { profile } from "@data/profile.ts";
```

Aliases are defined in [`tsconfig.json`](../../tsconfig.json):

| Alias           | Resolves to        |
| --------------- | ------------------ |
| `@/*`           | `src/*` (fallback) |
| `@components/*` | `src/components/*` |
| `@data/*`       | `src/data/*`       |
| `@layouts/*`    | `src/layouts/*`    |

## Section components — anatomy

Every file in `sections/` follows the same shape so they're easy to scan:

```astro
---
// 1. Imports (icons, UI primitives, data)
import { Icon } from "astro-icon/components";
import SectionHeading from "@components/ui/SectionHeading.astro";
import { someData } from "@data/some-data.ts";

// 2. Local consts / derived data
const items = someData.filter(/* ... */);
---

<!-- 3. Markup — root <section id="..." class="section-pad"> -->
<section id="something" class="section-pad">
  <div class="container-page">
    <SectionHeading label="..." title="..." subtitle="..." />
    <!-- content -->
  </div>
</section>

<style>
  /* 4. Scoped styles — section-specific only */
</style>

<script>
  /* 5. Optional client-side script — keep it tiny + vanilla */
</script>
```

The `id` on the root `<section>` is what the navbar links to (e.g. `#about`),
and what the active-section observer in [`Navbar.astro`](./layout/Navbar.astro)
watches.
