import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { siteEs } from '@/data/landing-content';

const TITLE = 'Manuel Flores — Datos y tecnología para negocios';
const DESCRIPTION =
  'Desarrollador de software y datos. Construyo y entrego sistemas para negocios: control de precios de proveedores, indicadores por sucursal, facturación CFDI y plataformas que procesan pagos reales.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
    languages: {
      es: '/',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://manuelflores.me/',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HomePage() {
  return <LandingPage content={siteEs} />;
}
