import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { siteEn } from '@/data/landing-content';

const TITLE = 'Manuel Flores — Data and technology for businesses';
const DESCRIPTION =
  'Software and data developer. I build and deliver systems for businesses: supplier price control, branch KPIs, Mexican CFDI invoicing and platforms that process real payments.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/en',
    languages: {
      es: '/',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://manuelflores.me/en',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HomePageEn() {
  return <LandingPage content={siteEn} />;
}
