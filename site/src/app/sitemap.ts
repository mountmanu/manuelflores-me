import type { MetadataRoute } from 'next';

const BASE_URL = 'https://manuelflores.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/`,
          es: `${BASE_URL}/es`,
        },
      },
    },
    {
      url: `${BASE_URL}/es`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
      alternates: {
        languages: {
          en: `${BASE_URL}/`,
          es: `${BASE_URL}/es`,
        },
      },
    },
  ];
}
