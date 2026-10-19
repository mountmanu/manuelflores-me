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
          es: `${BASE_URL}/`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
      alternates: {
        languages: {
          es: `${BASE_URL}/`,
          en: `${BASE_URL}/en`,
        },
      },
    },
  ];
}
