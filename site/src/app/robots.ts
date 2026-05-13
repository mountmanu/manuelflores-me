import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/es'],
      },
    ],
    sitemap: 'https://manuelflores.me/sitemap.xml',
  };
}
