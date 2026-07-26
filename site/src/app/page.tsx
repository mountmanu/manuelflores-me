import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { siteEn } from '@/data/landing-content';

export const metadata: Metadata = {
  title: 'Manuel Flores — Investigative Data Journalist',
  description:
    'Independent investigative data journalist covering corporate accountability in U.S. healthcare and regulated industries. Document-driven, data-forensic reporting from primary sources — federal courts, CMS, OSHA, FDA, SEC.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      es: '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    title: 'Manuel Flores — Investigative Data Journalist',
    description:
      'Corporate accountability in U.S. healthcare and regulated industries — document-driven, data-forensic reporting from primary sources.',
    url: 'https://manuelflores.me/',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Flores — Investigative Data Journalist',
    description:
      'Corporate accountability in U.S. healthcare and regulated industries — document-driven, data-forensic reporting.',
  },
};

export default function HomePage() {
  return <LandingPage content={siteEn} />;
}
