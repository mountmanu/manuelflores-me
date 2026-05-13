'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface NavLabels {
  work: string;
  skills: string;
  contact: string;
  altLang: string;
}

export interface NavProps {
  lang: 'en' | 'es';
  labels: NavLabels;
  altLangHref: string;
}

/**
 * Sticky editorial navigation with sub-pixel border on scroll.
 * URL-based language switching (no localStorage toggle).
 */
export function Nav({ lang, labels, altLangHref }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const home = lang === 'en' ? '/' : '/es';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[color:var(--color-paper)]/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link
          href={home}
          className="font-display text-2xl tracking-tight text-ink"
          aria-label="Manuel Flores — Home"
        >
          Manuel Flores
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <a
            href={`${home}#work`}
            className="text-[0.8125rem] tracking-[0.04em] uppercase font-medium text-mute hover:text-ink transition-colors"
          >
            {labels.work}
          </a>
          <a
            href={`${home}#skills`}
            className="text-[0.8125rem] tracking-[0.04em] uppercase font-medium text-mute hover:text-ink transition-colors"
          >
            {labels.skills}
          </a>
          <a
            href={`${home}#contact`}
            className="text-[0.8125rem] tracking-[0.04em] uppercase font-medium text-mute hover:text-ink transition-colors"
          >
            {labels.contact}
          </a>
          <Link
            href={altLangHref}
            hrefLang={lang === 'en' ? 'es' : 'en'}
            className="text-[0.8125rem] tracking-[0.04em] uppercase font-medium text-mute hover:text-ink transition-colors"
          >
            {labels.altLang}
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <nav className="container-editorial flex flex-col py-6 gap-5">
            <a
              href={`${home}#work`}
              onClick={() => setOpen(false)}
              className="text-lg font-display text-ink hover:text-mute transition-colors"
            >
              {labels.work}
            </a>
            <a
              href={`${home}#skills`}
              onClick={() => setOpen(false)}
              className="text-lg font-display text-ink hover:text-mute transition-colors"
            >
              {labels.skills}
            </a>
            <a
              href={`${home}#contact`}
              onClick={() => setOpen(false)}
              className="text-lg font-display text-ink hover:text-mute transition-colors"
            >
              {labels.contact}
            </a>
            <Link
              href={altLangHref}
              onClick={() => setOpen(false)}
              hrefLang={lang === 'en' ? 'es' : 'en'}
              className="text-lg font-display text-ink hover:text-mute transition-colors"
            >
              {labels.altLang}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
