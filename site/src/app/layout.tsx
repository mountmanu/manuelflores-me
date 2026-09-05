import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://manuelflores.me',
  ),
  title: {
    default: 'Manuel Flores — Data & Research, Trafficking and Child Protection',
    template: '%s · Manuel Flores',
  },
  description:
    'Independent data and research work on human trafficking and child protection in the United States — built from primary administrative records, reconciled against the agencies’ own totals, and shipped with the code to re-run it.',
  authors: [{ name: 'Manuel Flores', url: 'https://manuelflores.me' }],
  creator: 'Manuel Flores',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
