import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { landingEn } from '@/data/landing-content';

export const metadata: Metadata = {
  title: 'Manuel Flores — Forward Deployed Engineer · AI Agents & LLM Applications',
  description:
    'Forward Deployed Engineer and full-stack builder. LLM / agent systems on the Anthropic Claude API, shipped into real customer operations end to end. Founder of Areté Soluciones (independent practice). Bilingual EN/ES native, US–Mexico dual citizen.',
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
    title: 'Manuel Flores — Forward Deployed Engineer · AI Agents & LLM Applications',
    description:
      'Forward Deployed Engineer. LLM / agent systems on Anthropic Claude, shipped into real customer operations end to end. Bilingual EN/ES · US–Mexico dual citizen.',
    url: 'https://manuelflores.me/',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Flores — Forward Deployed Engineer · AI Agents & LLM',
    description:
      'Forward Deployed Engineer. LLM / agent systems on Anthropic Claude, shipped end to end. Bilingual EN/ES · US–Mexico dual citizen.',
  },
};

export default function HomePage() {
  return <LandingPage content={landingEn} />;
}
