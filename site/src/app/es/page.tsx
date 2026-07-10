import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { landingEs } from '@/data/landing-content';

export const metadata: Metadata = {
  title: 'Manuel Flores — Forward Deployed Engineer · Agentes de IA y Aplicaciones LLM',
  description:
    'Forward Deployed Engineer y builder full-stack. Sistemas LLM / de agentes sobre la API de Anthropic Claude, llevados a operaciones reales de cliente de principio a fin. Fundador de Areté Soluciones (práctica independiente). Nativo bilingüe EN/ES, doble ciudadano US–México.',
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
    title: 'Manuel Flores — Forward Deployed Engineer · Agentes de IA y Aplicaciones LLM',
    description:
      'Forward Deployed Engineer. Sistemas LLM / de agentes sobre Anthropic Claude, llevados a operaciones reales de cliente de principio a fin. Bilingüe EN/ES · doble ciudadano US–México.',
    url: 'https://manuelflores.me/es',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Flores — Forward Deployed Engineer · IA y LLM',
    description:
      'Forward Deployed Engineer. Sistemas LLM / de agentes sobre Anthropic Claude, de principio a fin. Bilingüe EN/ES · doble ciudadano US–México.',
  },
};

export default function HomePageEs() {
  return <LandingPage content={landingEs} />;
}
