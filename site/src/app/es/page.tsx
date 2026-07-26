import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { siteEs } from '@/data/landing-content';

export const metadata: Metadata = {
  title: 'Manuel Flores — Periodista de datos e investigación',
  description:
    'Periodista de datos e investigación, independiente. Rendición de cuentas corporativa en el sector salud y las industrias reguladas de EE. UU. — reportería basada en documentos y datos, desde fuentes primarias: cortes federales, CMS, OSHA, FDA, SEC.',
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
    title: 'Manuel Flores — Periodista de datos e investigación',
    description:
      'Rendición de cuentas corporativa en el sector salud y las industrias reguladas de EE. UU. — reportería basada en documentos y datos, desde fuentes primarias.',
    url: 'https://manuelflores.me/es',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Flores — Periodista de datos e investigación',
    description:
      'Rendición de cuentas corporativa en salud e industrias reguladas de EE. UU. — reportería basada en documentos y datos.',
  },
};

export default function HomePageEs() {
  return <LandingPage content={siteEs} />;
}
