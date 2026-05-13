import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { landingEs } from '@/data/landing-content';

export const metadata: Metadata = {
  title: 'Manuel Flores — Sales Engineer para expansión LATAM',
  description:
    'Sales Engineer bilingüe EN/ES · Doble ciudadano US–México · Fundador de Areté Soluciones (7 sistemas B2B SaaS en producción) · Seleccionado para demo Edge AI en el Embedded Vision Summit, Santa Clara 2026.',
  alternates: {
    canonical: '/es',
    languages: {
      en: '/',
      es: '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    title: 'Manuel Flores — Sales Engineer para expansión LATAM',
    description:
      'Sales Engineer bilingüe EN/ES · Fundador de Areté Soluciones · 7 sistemas B2B SaaS en producción · $75K+ en ingresos · Embedded Vision Summit 2026.',
    url: 'https://manuelflores.me/es',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Flores — Sales Engineer para expansión LATAM',
    description:
      'Sales Engineer bilingüe EN/ES · Fundador de Areté Soluciones · 7 sistemas en producción · Embedded Vision Summit 2026.',
  },
};

export default function HomePageEs() {
  return <LandingPage content={landingEs} />;
}
