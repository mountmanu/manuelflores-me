'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface NavLabels {
  work: string;
  method: string;
  about: string;
  contact: string;
  altLang: string;
}

export interface NavProps {
  lang: 'en' | 'es';
  labels: NavLabels;
  altLangHref: string;
}

/**
 * Sticky editorial navigation. Sits over the dark cinematic hero at the top
 * (light text, transparent), then switches to a light bar with dark text once
 * scrolled onto the paper body.
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

  // Over the dark hero (not scrolled) → light; over the paper body → dark.
  const wordmark = scrolled ? 'text-ink' : 'text-paper';
  const link = scrolled
    ? 'text-mute hover:text-ink'
    : 'text-paper/75 hover:text-paper';
  const bar = scrolled ? 'bg-ink' : 'bg-paper';

  const links: Array<{ href: string; label: string; hrefLang?: string }> = [
    { href: `${home}#work`, label: labels.work },
    { href: `${home}#method`, label: labels.method },
    { href: `${home}#about`, label: labels.about },
    { href: `${home}#contact`, label: labels.contact },
  ];

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
          className={`font-display text-2xl tracking-tight transition-colors ${wordmark}`}
          aria-label="Manuel Flores — Home"
        >
          Manuel Flores
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.8125rem] tracking-[0.04em] uppercase font-medium transition-colors ${link}`}
            >
              {l.label}
            </a>
          ))}
          <Link
            href={altLangHref}
            hrefLang={lang === 'en' ? 'es' : 'en'}
            className={`text-[0.8125rem] tracking-[0.04em] uppercase font-medium transition-colors ${link}`}
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
            className={`block w-6 h-px transition-transform duration-300 ${bar} ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px transition-opacity duration-300 ${bar} ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px transition-transform duration-300 ${bar} ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <nav className="container-editorial flex flex-col py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-display text-ink hover:text-mute transition-colors"
              >
                {l.label}
              </a>
            ))}
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
