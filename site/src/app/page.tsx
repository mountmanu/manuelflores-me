import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { siteEn } from '@/data/landing-content';

const TITLE = 'Manuel Flores — Data & Research, Trafficking and Child Protection';

export const metadata: Metadata = {
  title: TITLE,
  description:
    'Independent data and research work on human trafficking and child protection in the United States. Administrative records rebuilt into measurements, reconciled against the agencies’ own published totals, and shipped with the code and the data-quality log.',
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
    title: TITLE,
    description:
      'Nobody knows how many trafficking victims there are; the records to count them already exist. US trafficking and child-protection data, built from primary records and shipped with the code to re-run it.',
    url: 'https://manuelflores.me/',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'US trafficking and child-protection data, built from primary administrative records and shipped with the code to re-run it.',
  },
};

export default function HomePage() {
  return <LandingPage content={siteEn} />;
}
