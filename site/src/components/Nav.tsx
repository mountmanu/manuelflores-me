'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface NavLink {
  /** Section id on the page, without the #. */
  id: string;
  label: string;
}

export interface NavProps {
  lang: 'en' | 'es';
  /** Home route for this language: '/' (ES) or '/en' (EN). */
  home: string;
  links: NavLink[];
  altLang: { label: string; href: string };
  /** True only when the hero has a dark cover asset. Then, and only then,
   *  the nav is light-on-dark until the first scroll. */
  dark?: boolean;
}

/**
 * Sticky navigation. Dark text on the bone page by default. Only when the hero
 * carries a dark cover asset (`dark`) does it start light-on-dark, switching
 * to dark text once scrolled onto the body.
 */
export function Nav({ lang, home, links, altLang, dark = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Light type only while sitting over a dark hero cover and not yet scrolled.
  const overDark = dark && !scrolled;
  const wordmark = overDark ? 'text-paper' : 'text-ink';
  const link = overDark
    ? 'text-paper/75 hover:text-paper'
    : 'text-mute hover:text-ink';
  const bar = overDark ? 'bg-paper' : 'bg-ink';

  const items = links.map((l) => ({ href: `${home}#${l.id}`, label: l.label }));
  const altHrefLang = lang === 'en' ? 'es' : 'en';
  const en = lang === 'en';

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
          aria-label={en ? 'Manuel Flores — Home' : 'Manuel Flores — Inicio'}
        >
          Manuel Flores
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {items.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.8125rem] tracking-[0.04em] uppercase font-medium transition-colors ${link}`}
            >
              {l.label}
            </a>
          ))}
          <Link
            href={altLang.href}
            hrefLang={altHrefLang}
            className={`text-[0.8125rem] tracking-[0.04em] uppercase font-medium transition-colors ${link}`}
          >
            {altLang.label}
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={open ? (en ? 'Close menu' : 'Cerrar menú') : en ? 'Open menu' : 'Abrir menú'}
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
            {items.map((l) => (
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
              href={altLang.href}
              onClick={() => setOpen(false)}
              hrefLang={altHrefLang}
              className="text-lg font-display text-ink hover:text-mute transition-colors"
            >
              {altLang.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
