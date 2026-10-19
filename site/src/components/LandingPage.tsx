import { ArrowRight, ArrowUpRight, Github, Globe, Linkedin, Mail, MapPin } from 'lucide-react';
import { Nav } from './Nav';
import { Reveal } from './Reveal';
import { CinematicMedia } from './CinematicMedia';
import type { SiteContent } from '@/data/landing-content';

/**
 * Server component. Renders the public site for a given language.
 * Used by app/page.tsx (ES, default) and app/en/page.tsx (EN).
 *
 * The landing version of the CV. Sections:
 * hero → projects → career → skills + education → contact.
 */
export function LandingPage({ content }: { content: SiteContent }) {
  // The hero is dark ONLY when there is footage to sit on.
  const dark = Boolean(content.hero.cover);

  return (
    <>
      <Nav
        lang={content.lang}
        dark={dark}
        home={content.home}
        links={[
          { id: 'projects', label: content.nav.projects },
          { id: 'career', label: content.nav.career },
          { id: 'skills', label: content.nav.skills },
          { id: 'contact', label: content.nav.contact },
        ]}
        altLang={{ label: content.altLangLabel, href: content.altLangHref }}
      />

      {/* Hero. -mt-20 pulls the section up under the sticky h-20 header so the
          two read as one surface. */}
      <section
        className={`relative isolate -mt-20 min-h-[86vh] flex items-end overflow-hidden ${
          dark ? 'bg-ink text-paper' : 'bg-paper text-ink'
        }`}
      >
        {content.hero.cover && (
          <div className="absolute inset-0">
            <CinematicMedia
              asset={content.hero.cover}
              className="h-full w-full"
              playCount={2}
              priority
            />
          </div>
        )}

        <div className="container-editorial relative z-10 pt-40 pb-20 md:pb-28">
          <Reveal>
            <p
              className="eyebrow-accent mb-8"
              style={dark ? { color: 'rgba(250,250,247,0.72)' } : undefined}
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
              className={`mt-8 max-w-2xl leading-relaxed text-pretty ${
                dark ? 'text-paper/80' : 'text-ink/85'
              }`}
              style={{ fontSize: 'var(--text-body-lg)' }}
            >
              {content.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className={dark ? 'btn-primary-invert' : 'btn-primary'}>
                {content.hero.primaryCta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#contact" className={dark ? 'btn-secondary-invert' : 'btn-secondary'}>
                {content.hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-[var(--spacing-section)] rule-bottom scroll-mt-20">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="eyebrow-accent mb-6">{content.projects.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance mb-6" style={{ fontSize: 'var(--text-display-lg)' }}>
                {content.projects.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="leading-relaxed text-ink/85 text-pretty"
                style={{ fontSize: 'var(--text-body-lg)' }}
              >
                {content.projects.subtitle}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border-t border-b border-line">
            {content.projects.items.map((item, idx) => (
              <Reveal key={item.key} delay={(idx % 2) * 0.05}>
                <article className="bg-paper h-full flex flex-col p-8 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <p className="eyebrow">{item.client}</p>
                    <span className="status-live">{item.status}</span>
                  </div>
                  <h3 className="font-display mb-4" style={{ fontSize: '1.75rem', lineHeight: 1.15 }}>
                    {item.title}
                  </h3>
                  <p
                    className="flex-1 leading-relaxed text-ink/85 text-pretty"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    {item.dek}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2 pt-6 rule-top">
                    {item.stack.map((s) => (
                      <li key={s} className="source-tag">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section id="career" className="py-[var(--spacing-section)] bg-soft rule-bottom scroll-mt-20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow-accent mb-6">{content.career.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-balance mb-8" style={{ fontSize: 'var(--text-display-lg)' }}>
                  {content.career.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="leading-relaxed text-ink/85 text-pretty"
                  style={{ fontSize: 'var(--text-body-lg)' }}
                >
                  {content.career.intro}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ol className="space-y-px bg-line border-t border-b border-line">
                {content.career.roles.map((r, idx) => (
                  <Reveal key={r.key} delay={idx * 0.04}>
                    <li className="bg-soft p-8 md:p-10">
                      <p className="eyebrow mb-3">{r.period}</p>
                      <h3 className="font-display mb-3" style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>
                        {r.role} ·{' '}
                        {r.orgHref ? (
                          <a
                            href={r.orgHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-center gap-1"
                          >
                            {r.org}
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : (
                          r.org
                        )}
                      </h3>
                      <ul className="space-y-2 max-w-2xl">
                        {r.points.map((pt) => (
                          <li
                            key={pt}
                            className="leading-relaxed text-ink/85 text-pretty"
                            style={{ fontSize: 'var(--text-body)' }}
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Skills + education */}
      <section id="skills" className="py-[var(--spacing-section)] scroll-mt-20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow-accent mb-6">{content.skills.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-balance" style={{ fontSize: 'var(--text-display-lg)' }}>
                  {content.skills.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <dl className="border-t border-line">
                {content.skills.rows.map((row, idx) => (
                  <Reveal key={row.key} delay={idx * 0.04}>
                    <div className="grid grid-cols-1 md:grid-cols-[12rem,1fr] gap-2 md:gap-8 py-6 border-b border-line">
                      <dt className="eyebrow pt-1">{row.label}</dt>
                      <dd
                        className="leading-relaxed text-ink/85 text-pretty"
                        style={{ fontSize: 'var(--text-body)' }}
                      >
                        {row.value}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-[var(--spacing-block)]">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow-accent mb-6">{content.education.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-balance" style={{ fontSize: 'var(--text-display-lg)' }}>
                  {content.education.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ul className="border-t border-line">
                {content.education.items.map((ed, idx) => (
                  <Reveal key={ed.key} delay={idx * 0.04}>
                    <li className="py-6 border-b border-line">
                      <p className="font-display text-ink" style={{ fontSize: '1.375rem', lineHeight: 1.25 }}>
                        {ed.title}
                      </p>
                      <p className="mt-1 text-mute" style={{ fontSize: 'var(--text-body)' }}>
                        {ed.detail}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom scroll-mt-20">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border-t border-b border-line">
            {content.contact.doors.map((door, idx) => {
              const Icon =
                door.key === 'company'
                  ? Globe
                  : door.key === 'github'
                    ? Github
                    : door.key === 'linkedin'
                      ? Linkedin
                      : Mail;
              const external = door.href.startsWith('http');
              return (
                <Reveal key={door.key} delay={idx * 0.05}>
                  <div className="bg-soft p-8 h-full flex flex-col">
                    <div className="flex items-center gap-2.5 mb-5">
                      <Icon className="h-4 w-4 text-mute" strokeWidth={1.5} />
                      <p className="eyebrow">{door.label}</p>
                    </div>
                    <p
                      className="flex-1 leading-relaxed text-ink/85 text-pretty mb-8"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      {door.description}
                    </p>
                    <div className="pt-6 rule-top">
                      <a
                        href={door.href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
                <p className="font-display text-lg text-ink">{content.contact.location}</p>
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
