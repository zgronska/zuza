/**
 * The public path of a page: no `.html`, no `/index`, no trailing slash.
 * With `build.format: 'file'`, `Astro.url.pathname` is `/about.html` at build
 * time, but the page is served at `/about`.
 */
export function getPagePath(pathname: string) {
  const path = pathname
    .replace(/\.html$/, '')
    .replace(/\/index$/, '')
    .replace(/\/$/, '');

  return path || '/';
}
