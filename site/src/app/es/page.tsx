import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { siteEs } from '@/data/landing-content';

const TITLE = 'Manuel Flores — Datos e investigación: trata y protección infantil';

export const metadata: Metadata = {
  title: TITLE,
  description:
    'Trabajo independiente de datos e investigación sobre trata de personas y protección infantil en Estados Unidos. Registros administrativos convertidos en mediciones, conciliados contra los totales que las propias agencias publican, y entregados con el código y la bitácora de calidad de datos.',
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
    title: TITLE,
    description:
      'Nadie sabe cuántas víctimas de trata hay; los registros para contarlas ya existen. Datos de trata y protección infantil en EE. UU., construidos desde fuentes primarias y entregados con el código.',
    url: 'https://manuelflores.me/es',
    siteName: 'Manuel Flores',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Datos de trata y protección infantil en EE. UU., construidos desde registros administrativos primarios y entregados con el código.',
  },
};

export default function HomePageEs() {
  return <LandingPage content={siteEs} />;
}
