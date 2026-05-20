import type { MetadataRoute } from 'next';

import { getSiteUrl } from '@/lib/site';

/** Generates /sitemap.xml (single-page site). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
