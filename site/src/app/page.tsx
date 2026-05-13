import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { landingEn } from '@/data/landing-content';

export const metadata: Metadata = {
  title: 'Manuel Flores — Sales Engineer for LATAM expansion',
  description:
    'Bilingual EN/ES Sales Engineer · US–Mexico dual citizen · Founder of Areté Soluciones (7 production B2B SaaS systems) · Selected to demo Edge AI at the Embedded Vision Summit, Santa Clara 2026.',
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
    title: 'Manuel Flores — Sales Engineer for LATAM expansion',
    description:
      'Bilingual EN/ES Sales Engineer · Founder of Areté Soluciones · 7 production B2B SaaS systems · $75K+ revenue · Embedded Vision Summit 2026.',
    url: 'https://manuelflores.me/',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Flores — Sales Engineer for LATAM expansion',
    description:
      'Bilingual EN/ES Sales Engineer · Founder of Areté Soluciones · 7 production systems · Embedded Vision Summit 2026.',
  },
};

export default function HomePage() {
  return <LandingPage content={landingEn} />;
}
