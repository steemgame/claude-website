/**
 * Prepend the basePath (set via NEXT_PUBLIC_BASE_PATH at build time)
 * so local images resolve correctly on GitHub Pages (/claude-website/...)
 * while still working without a prefix during local development.
 */
export const imgPath = (src: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
