/**
 * Site-wide copy and URL helpers used by metadata, SEO routes, and contact UI.
 * Update values here when changing branding or production domain configuration.
 */

const DEFAULT_SITE_URL = 'http://localhost:3000';

export const siteConfig = {
  name: 'Tyler Thompson',
  title: 'Tyler Thompson | Full-Stack Developer',
  description:
    'Portfolio of Tyler Thompson — full-stack developer and recent CSUMB Computer Science graduate building secure, accessible, responsive web applications.',
  locale: 'en_US',
  ogImageAlt: 'Tyler Thompson — Full-Stack Developer portfolio',
  email: 'tdthompson650@gmail.com',
  github: 'https://github.com/tdthompson650',
  linkedin: 'https://www.linkedin.com/in/tyler-thompson-508ba696',
} as const;

/**
 * Resolves the canonical origin for metadata and sitemap generation.
 * Priority: NEXT_PUBLIC_SITE_URL → VERCEL_URL (preview/production) → localhost.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, '');
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/$/, '')}`;
  }

  return DEFAULT_SITE_URL;
}
