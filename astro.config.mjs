// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// =============================================================================
// GitHub Pages configuration
// -----------------------------------------------------------------------------
// Pick ONE of the two setups below when you create your GitHub repo.
//
//  A) USER SITE  (recommended)
//     - Repo MUST be named exactly:  <your-github-username>.github.io
//     - Site URL:                    https://<your-github-username>.github.io/
//     - Use:  site = "https://<your-github-username>.github.io"
//             base = "/"
//
//  B) PROJECT SITE
//     - Repo can be named anything, e.g. "portfolio"
//     - Site URL:                    https://<your-github-username>.github.io/<repo-name>/
//     - Use:  site = "https://<your-github-username>.github.io"
//             base = "/<repo-name>/"
//
// Update the two values below to match your choice, then push to GitHub.
// =============================================================================

export default defineConfig({
  site: "https://mujtabamaqsood96.github.io",
  base: "/",
  trailingSlash: "ignore",
  output: "static",
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
