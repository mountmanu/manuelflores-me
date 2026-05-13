import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Code2,
  DollarSign,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Users,
} from 'lucide-react';
import { Nav } from './Nav';
import { Reveal } from './Reveal';
import type { LandingContent } from '@/data/landing-content';

const iconMap = {
  code: Code2,
  briefcase: Briefcase,
  users: Users,
  dollar: DollarSign,
  grad: GraduationCap,
};

const kindLabel = {
  en: {
    'arete-case': 'Areté · Production case',
    'public-demo': 'Public demo',
    personal: 'Personal',
  },
  es: {
    'arete-case': 'Areté · Caso en producción',
    'public-demo': 'Demo público',
    personal: 'Personal',
  },
} as const;

/**
 * Server component. Renders the public landing page for a given language.
 * Used by app/page.tsx (EN) and app/es/page.tsx (ES) by passing in the
 * appropriate LandingContent payload from src/data/landing-content.ts.
 */
export function LandingPage({ content }: { content: LandingContent }) {
  return (
    <>
      <Nav
        lang={content.lang}
        labels={{
          work: content.nav.work,
          skills: content.nav.skills,
          contact: content.nav.contact,
          altLang: content.altLangLabel,
        }}
        altLangHref={content.altLangHref}
      />

      {/* Hero */}
      <section className="relative pt-24 md:pt-36 pb-24 md:pb-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-10">{content.hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              className="text-balance"
              style={{ fontSize: 'var(--text-display-2xl)', lineHeight: 1.02 }}
            >
              {content.hero.headline.lead}
              <em className="not-italic">{content.hero.headline.emphasis}</em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="mt-10 max-w-2xl leading-relaxed text-pretty text-ink"
              style={{ fontSize: 'var(--text-body-lg)' }}
            >
              {content.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-primary">
                {content.hero.primaryCta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#contact" className="btn-secondary">
                {content.hero.secondaryCta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-10 rule-top">
              {content.proofPoints.map((p) => (
                <div key={p.label}>
                  <div
                    className="font-display text-ink"
                    style={{ fontSize: 'var(--text-display-md)', lineHeight: 1 }}
                  >
                    {p.figure}
                  </div>
                  <div className="mt-4 text-[0.875rem] text-mute leading-snug max-w-[280px]">
                    {p.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-6">{content.about.eyebrow}</p>
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

      {/* Experience */}
      <section className="py-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-6">{content.experience.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  className="text-balance"
                  style={{ fontSize: 'var(--text-display-lg)' }}
                >
                  {content.experience.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ol className="space-y-px bg-line border-t border-b border-line">
                {content.experience.entries.map((entry, idx) => {
                  const Icon = iconMap[entry.icon];
                  return (
                    <Reveal key={entry.key} delay={idx * 0.04}>
                      <li className="bg-paper p-8 md:p-10 grid grid-cols-[auto,1fr] gap-6 md:gap-8">
                        <div className="flex flex-col items-center gap-3">
                          <Icon className="h-5 w-5 text-ink" strokeWidth={1.25} />
                          <span className="text-xs text-mute tabular-nums">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div>
                          <p className="eyebrow mb-2">{entry.period}</p>
                          <h3
                            className="font-display"
                            style={{ fontSize: '1.5rem', lineHeight: 1.2 }}
                          >
                            {entry.title}
                          </h3>
                          <p
                            className="mt-4 leading-relaxed text-ink/85 max-w-2xl"
                            style={{ fontSize: 'var(--text-body)' }}
                          >
                            {entry.description}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="eyebrow mb-6">{content.work.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance mb-6"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                {content.work.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="leading-relaxed text-ink/85 text-pretty"
                style={{ fontSize: 'var(--text-body-lg)' }}
              >
                {content.work.subtitle}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border-t border-b border-line">
            {content.work.projects.map((project, idx) => {
              const isInternal = project.url?.startsWith('/');
              const externalHref =
                project.url && !isInternal ? `https://${project.url}` : null;
              return (
                <Reveal key={project.key} delay={idx * 0.04}>
                  <article className="bg-paper p-8 md:p-10 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <p className="eyebrow">{kindLabel[content.lang][project.kind]}</p>
                      {project.url &&
                        (isInternal ? (
                          <Link
                            href={project.url}
                            className="text-mute hover:text-ink transition-colors"
                            aria-label={`${project.name} — open demo`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        ) : (
                          <a
                            href={externalHref!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mute hover:text-ink transition-colors"
                            aria-label={`${project.name} — open external link`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                    </div>

                    <h3
                      className="font-display mb-2"
                      style={{ fontSize: '1.75rem', lineHeight: 1.15 }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-sm text-mute mb-6">
                      {project.client} · {project.sector}
                    </p>

                    <p
                      className="flex-1 leading-relaxed text-ink/85 text-pretty"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      {project.description}
                    </p>

                    <ul className="mt-8 flex flex-wrap gap-2 pt-6 rule-top">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="text-xs px-2.5 py-1 border border-line text-ink/85"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-6">{content.skills.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  className="text-balance"
                  style={{ fontSize: 'var(--text-display-lg)' }}
                >
                  {content.skills.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {content.skills.groups.map((group, idx) => (
                <Reveal key={group.title} delay={idx * 0.05}>
                  <div>
                    <h3 className="eyebrow mb-5">{group.title}</h3>
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-ink/85 leading-snug"
                          style={{ fontSize: 'var(--text-body)' }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-6">{content.contact.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance mb-8"
                style={{ fontSize: 'var(--text-display-xl)', lineHeight: 1.05 }}
              >
                {content.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="leading-relaxed text-ink/85 mb-12 text-pretty"
                style={{ fontSize: 'var(--text-body-lg)' }}
              >
                {content.contact.subtitle}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 rule-top">
              <Reveal delay={0.15}>
                <a
                  href="mailto:manuelfa92@gmail.com"
                  className="group flex items-start gap-3"
                >
                  <Mail
                    className="h-4 w-4 mt-1 text-mute group-hover:text-ink transition-colors"
                    strokeWidth={1.25}
                  />
                  <div>
                    <p className="eyebrow mb-1">Email</p>
                    <p className="font-display text-xl text-ink group-hover:opacity-70 transition-opacity">
                      manuelfa92@gmail.com
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href="https://www.linkedin.com/in/manuel-flores-90653060/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <Linkedin
                    className="h-4 w-4 mt-1 text-mute group-hover:text-ink transition-colors"
                    strokeWidth={1.25}
                  />
                  <div>
                    <p className="eyebrow mb-1">LinkedIn</p>
                    <p className="font-display text-xl text-ink group-hover:opacity-70 transition-opacity">
                      manuel-flores-90653060
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.25}>
                <a
                  href="https://github.com/mountmanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <Github
                    className="h-4 w-4 mt-1 text-mute group-hover:text-ink transition-colors"
                    strokeWidth={1.25}
                  />
                  <div>
                    <p className="eyebrow mb-1">GitHub</p>
                    <p className="font-display text-xl text-ink group-hover:opacity-70 transition-opacity">
                      mountmanu
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-mute" strokeWidth={1.25} />
                  <div>
                    <p className="eyebrow mb-1">{content.contact.locationLabel}</p>
                    <p className="font-display text-xl text-ink">{content.contact.location}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container-editorial flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-mute">
          <p>
            &copy; {new Date().getFullYear()} {content.footer}
          </p>
          <Link
            href="https://arete.business"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-mute hover:text-ink transition-colors"
          >
            arete.business
          </Link>
        </div>
      </footer>
    </>
  );
}
