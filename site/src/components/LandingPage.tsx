import { ArrowRight, Lock, Mail, MapPin, Linkedin } from 'lucide-react';
import { Nav } from './Nav';
import { Reveal } from './Reveal';
import { CinematicMedia } from './CinematicMedia';
import type { SiteContent } from '@/data/landing-content';

/**
 * Server component. Renders the public site for a given language.
 * Used by app/page.tsx (EN) and app/es/page.tsx (ES).
 *
 * Positioning: investigative data journalist. Sections:
 * hero → ethos strip → investigations → method → about → contact (three doors).
 */
export function LandingPage({ content }: { content: SiteContent }) {
  return (
    <>
      <Nav
        lang={content.lang}
        labels={{
          investigations: content.nav.investigations,
          method: content.nav.method,
          about: content.nav.about,
          contact: content.nav.contact,
          altLang: content.altLangLabel,
        }}
        altLangHref={content.altLangHref}
      />

      {/* Hero — dark cinematic masthead. Full-bleed video background when a
          cover asset is present; a quiet dark gradient otherwise. */}
      <section className="relative isolate min-h-[86vh] flex items-end overflow-hidden bg-ink text-paper">
        {content.hero.cover ? (
          <div className="absolute inset-0">
            <CinematicMedia
              asset={content.hero.cover}
              className="h-full w-full"
              playCount={2}
              priority
            />
          </div>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(120% 90% at 72% 18%, #17170F 0%, #0A0A08 62%)',
            }}
            aria-hidden="true"
          />
        )}

        <div className="container-editorial relative z-10 pt-40 pb-20 md:pb-28">
          <Reveal>
            <p
              className="eyebrow-accent mb-8"
              style={{ color: 'rgba(250,250,247,0.72)' }}
            >
              {content.hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-5xl"
              style={{ fontSize: 'var(--text-display-2xl)', lineHeight: 1.02 }}
            >
              {content.hero.headline.lead}
              <em className="not-italic">{content.hero.headline.emphasis}</em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="mt-8 max-w-2xl leading-relaxed text-pretty text-paper/80"
              style={{ fontSize: 'var(--text-body-lg)' }}
            >
              {content.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#investigations" className="btn-primary-invert">
                {content.hero.primaryCta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#contact" className="btn-secondary-invert">
                {content.hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ethos strip — quiet light band; the one dark moment is the hero. */}
      <section className="py-[var(--spacing-block)] rule-bottom">
        <div className="container-editorial">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <Reveal>
              <p
                className="font-display text-balance max-w-xl text-ink"
                style={{ fontSize: 'var(--text-display-md)', lineHeight: 1.25 }}
              >
                {content.ethos.statement}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:ml-auto">
                {content.ethos.sources.map((s) => (
                  <li
                    key={s}
                    className="text-[0.8125rem] tracking-wide text-mute whitespace-nowrap"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investigations — the feature well */}
      <section
        id="investigations"
        className="py-[var(--spacing-section)] rule-bottom"
      >
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="eyebrow-accent mb-6">{content.investigations.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance mb-6"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                {content.investigations.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="leading-relaxed text-ink/85 text-pretty"
                style={{ fontSize: 'var(--text-body-lg)' }}
              >
                {content.investigations.subtitle}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border-t border-b border-line">
            {content.investigations.items.map((item, idx) => (
              <Reveal key={item.key} delay={idx * 0.05}>
                <article className="bg-paper h-full flex flex-col">
                  {/* Cinematic cover — renders only when an asset exists. */}
                  {item.cover && (
                    <CinematicMedia
                      asset={item.cover}
                      className="aspect-[16/9] w-full"
                    />
                  )}
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="status-live">{item.status}</span>
                    </div>
                    <h3
                      className="font-display mb-4"
                      style={{ fontSize: '1.75rem', lineHeight: 1.15 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="flex-1 leading-relaxed text-ink/85 text-pretty"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      {item.dek}
                    </p>
                    <ul className="mt-8 flex flex-wrap gap-2 pt-6 rule-top">
                      {item.sources.map((s) => (
                        <li key={s} className="source-tag">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-mute">{content.investigations.note}</p>
          </Reveal>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-[var(--spacing-section)] bg-soft rule-bottom">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow-accent mb-6">{content.method.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  className="text-balance mb-8"
                  style={{ fontSize: 'var(--text-display-lg)' }}
                >
                  {content.method.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="leading-relaxed text-ink/85 text-pretty"
                  style={{ fontSize: 'var(--text-body-lg)' }}
                >
                  {content.method.intro}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ol className="space-y-px bg-line border-t border-b border-line">
                {content.method.principles.map((p, idx) => (
                  <Reveal key={p.key} delay={idx * 0.04}>
                    <li className="bg-soft p-8 md:p-10 grid grid-cols-[auto,1fr] gap-6 md:gap-8">
                      <span className="font-display text-mute tabular-nums text-xl leading-none pt-1">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3
                          className="font-display mb-3"
                          style={{ fontSize: '1.375rem', lineHeight: 1.2 }}
                        >
                          {p.title}
                        </h3>
                        <p
                          className="leading-relaxed text-ink/85 max-w-2xl text-pretty"
                          style={{ fontSize: 'var(--text-body)' }}
                        >
                          {p.description}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow-accent mb-6">{content.about.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  className="text-balance"
                  style={{ fontSize: 'var(--text-display-lg)' }}
                >
                  {content.about.title}
                </h2>
              </Reveal>
            </div>
            <div
              className="lg:col-span-8 space-y-6 leading-relaxed text-ink/85"
              style={{ fontSize: 'var(--text-body-lg)' }}
            >
              {content.about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-pretty">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact — three doors */}
      <section
        id="contact"
        className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom"
      >
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="eyebrow-accent mb-6">{content.contact.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance mb-6"
                style={{ fontSize: 'var(--text-display-xl)', lineHeight: 1.05 }}
              >
                {content.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="leading-relaxed text-ink/85 text-pretty"
                style={{ fontSize: 'var(--text-body-lg)' }}
              >
                {content.contact.subtitle}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border-t border-b border-line">
            {content.contact.doors.map((door, idx) => {
              const Icon =
                door.key === 'sources'
                  ? Lock
                  : door.key === 'elsewhere'
                    ? Linkedin
                    : Mail;
              const external = door.href.startsWith('http');
              return (
                <Reveal key={door.key} delay={idx * 0.05}>
                  <div className="bg-soft p-8 md:p-10 h-full flex flex-col">
                    <div className="flex items-center gap-2.5 mb-5">
                      <Icon
                        className={`h-4 w-4 ${door.key === 'sources' ? 'text-[color:var(--color-accent-ink)]' : 'text-mute'}`}
                        strokeWidth={1.5}
                      />
                      <p className="eyebrow">{door.label}</p>
                    </div>
                    <p
                      className="flex-1 leading-relaxed text-ink/85 text-pretty mb-8"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      {door.description}
                    </p>
                    <div className="pt-6 rule-top">
                      <p className="eyebrow mb-2">{door.channelLabel}</p>
                      <a
                        href={door.href}
                        {...(external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="font-display text-lg text-ink link-underline break-words"
                      >
                        {door.channelValue}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-mute" strokeWidth={1.5} />
              <div>
                <p className="eyebrow mb-1">{content.contact.locationLabel}</p>
                <p className="font-display text-lg text-ink">
                  {content.contact.location}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container-editorial flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-mute">
          <p>
            &copy; {new Date().getFullYear()} {content.footer}
          </p>
        </div>
      </footer>
    </>
  );
}
