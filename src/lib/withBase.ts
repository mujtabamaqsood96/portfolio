/**
 * Prefix a root-relative path with Astro `import.meta.env.BASE_URL`
 * so static assets and in-site links work on GitHub project Pages (e.g. `/portfolio/`).
 */
export function withBase(path: string): string {
  if (
    !path ||
    /^https?:\/\//i.test(path) ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL;
  const tail = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${tail}`;
}
