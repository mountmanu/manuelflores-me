/**
 * Canonical content for the public site — manuelflores.me
 *
 * Positioning: independent investigative DATA journalist. Corporate
 * accountability in U.S. healthcare and regulated industries. The engineering
 * background is framed as investigative capability (document + data forensics),
 * never as a software portfolio.
 *
 * One source of truth, two language variants. Keep EN and ES in lock-step —
 * anything in EN must have its ES counterpart, and vice versa.
 *
 * Disclosure discipline (matches the reporter's own rule): investigations are
 * described at the BEAT level only — no defendant names, dockets, or facilities
 * that could tip a subject before publication.
 *
 * v3 — Jul 2026: full repositioning from Sales-Engineer portfolio to
 * investigative-journalism presence. Interfaces rebuilt: ethos, investigations,
 * method, three-door contact.
 */

export interface InvestigationContent {
  key: string;
  /** Beat-level title — a subject area, not a named case. */
  title: string;
  /** One-line dek. */
  dek: string;
  /** The primary-source systems the reporting draws on. Not translated. */
  sources: string[];
  /** Honest status line, e.g. "In reporting". */
  status: string;
  /** Optional cinematic cover asset in /public (Phase 2). Poster is required if
   *  video is set. Both optional — section degrades gracefully without them. */
  cover?: { poster: string; video?: string; alt: string };
}

export interface MethodPrinciple {
  key: string;
  title: string;
  description: string;
}

export interface ContactDoor {
  key: 'editors' | 'sources' | 'elsewhere';
  label: string;
  description: string;
  /** Rendered channel. */
  channelLabel: string;
  channelValue: string;
  href: string;
}

export interface SiteContent {
  lang: 'en' | 'es';
  altLang: 'en' | 'es';
  altLangLabel: string;
  altLangHref: string;

  nav: {
    investigations: string;
    method: string;
    about: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    headline: { lead: string; emphasis: string };
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    /** Optional hero cinematic asset (Phase 2). */
    cover?: { poster: string; video?: string; alt: string };
  };

  ethos: {
    statement: string;
    /** Primary-source systems worked in. Not translated. */
    sources: string[];
  };

  investigations: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    items: InvestigationContent[];
  };

  method: {
    eyebrow: string;
    title: string;
    intro: string;
    principles: MethodPrinciple[];
  };

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };

  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    doors: ContactDoor[];
    locationLabel: string;
    location: string;
  };

  footer: string;
}

// Primary-source systems — same in both languages.
const sourceSystems = ['Federal courts (PACER)', 'CMS · HCRIS', 'OSHA', 'FDA', 'SEC', 'EPA'];

// ============================================================
// English
// ============================================================

export const siteEn: SiteContent = {
  lang: 'en',
  altLang: 'es',
  altLangLabel: 'Español',
  altLangHref: '/es',

  nav: {
    investigations: 'Investigations',
    method: 'Method',
    about: 'About',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Investigative Data Journalist',
    headline: {
      lead: 'I report on power by reading the records it ',
      emphasis: 'leaves behind.',
    },
    subtitle:
      'Independent investigative reporting on corporate accountability in U.S. healthcare and regulated industries — built from primary documents and the federal datasets most newsrooms never open.',
    primaryCta: 'The investigations',
    secondaryCta: 'Contact',
    cover: {
      poster: '/media/hero-poster.jpg',
      video: '/media/hero.mp4',
      alt: 'Manuel Flores working through network graphs and records on glowing monitors in a dim newsroom at night',
    },
  },

  ethos: {
    statement: 'Primary sources, always. Every fact starts in a document I have read myself.',
    sources: sourceSystems,
  },

  investigations: {
    eyebrow: 'Investigations',
    title: 'What I am reporting.',
    subtitle:
      'Ongoing, document-driven investigations into how power organizes itself to avoid being measured. Described here at the level of the beat — the specifics stay in the reporting until they are published.',
    note: 'In progress. Tips welcome — see Contact.',
    items: [
      {
        key: 'pe-healthcare',
        title: 'Private equity in American healthcare',
        dek: "How private-equity owners route money and liability out of the homes that care for the elderly — a facility's ownership followed through the shell entities in CMS federal ownership data, related-party rent verified at the worksheet level in HCRIS Medicare cost reports, the federal wrongful-death docket read line by line.",
        sources: ['HCRIS cost reports', 'CMS ownership data', 'PACER / RECAP'],
        status: 'In reporting',
      },
      {
        key: 'surveillance-economics',
        title: 'The economics of immigration surveillance',
        dek: "A longitudinal read of ICE's own detention-management data, documenting the quiet migration from a phone check-in app to the GPS ankle monitor — and following the money to the contractors who profit from the switch.",
        sources: ['ICE detention data', 'Federal contracts'],
        status: 'In reporting',
      },
      {
        key: 'mine-safety',
        title: 'The fines that never get paid',
        dek: "Federal mine-safety enforcement data, rebuilt operator by operator with time-correct ownership, showing which penalties are simply never paid — read against what the same companies are required to tell their investors, and what they are not.",
        sources: ['MSHA enforcement data', 'SEC filings'],
        status: 'In reporting',
      },
      {
        key: 'tribal-water',
        title: 'The water standards nobody wrote',
        dek: "Most Indian reservations have no Clean Water Act standards at all — a fifty-year gap every state closed long ago. EPA's own program data, measured against the agency's promises about how, and how fast, that gap would ever close.",
        sources: ['Federal Register', 'EPA program data'],
        status: 'In reporting',
      },
    ],
  },

  method: {
    eyebrow: 'Method',
    title: 'How the reporting is built.',
    intro:
      'I came to journalism from data and software. I now point that toolkit at institutions that would rather not be measured — which means I do not wait for a leak. I go and get the records.',
    principles: [
      {
        key: 'documents-first',
        title: 'Documents first',
        description:
          'Every fact begins in a primary source — a court filing, a cost report, an inspection record — read directly, never through a press release or a summary.',
      },
      {
        key: 'data-at-scale',
        title: 'Data at a scale most newsrooms skip',
        description:
          'I pull and analyze federal datasets few reporters open: Medicare cost reports at the worksheet level, payroll-based staffing files, ownership disclosures, contract records. When the data does not come clean, I write the code to make it usable.',
      },
      {
        key: 'ai-human',
        title: 'AI-assisted, human-judged',
        description:
          'I use automation and AI to read at a scale a person cannot — whole dockets, thousands of filings — to find the anomaly worth chasing. Every published claim is then verified by hand.',
      },
      {
        key: 'verify-attribute',
        title: 'Verified, then attributed',
        description:
          'Nothing runs as fact unless a primary document supports it. Contested claims are attributed to their source and carry the response of the party they concern.',
      },
      {
        key: 'right-of-reply',
        title: 'Fair before publication',
        description:
          'Every named party gets a genuine, specific opportunity to respond before anything is published — and their answer is reported alongside the finding.',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'It is already on the record.',
    paragraphs: [
      'Powerful institutions are required to write things down. Cost reports, court dockets, inspection files, adverse-event databases — the record of what an institution did, and often of what it would rather you never notice, is already public. It stays hidden only because reading it is slow, technical work that almost no one does. That work is the whole of my beat.',
      "I report on corporate accountability in U.S. healthcare and other regulated industries, and I build every story from the underlying documents — never a press release, never a summary. Federal court dockets pulled through PACER and RECAP. Medicare cost reports read at the worksheet level in CMS's HCRIS system. Payroll-based staffing files, ownership and enrollment records, OSHA fatality inspections, FDA adverse-event data, EPA and state environmental filings. The primary record, line by line.",
      "The investigations that hold me share one shape: real harm, deliberately made hard to see. How private-equity owners route cash and liability out of the nursing homes that care for the elderly — legible in the shell entities of federal ownership data and the related-party rent Medicare disallows on Worksheet A-8-1. How immigration enforcement migrated from a phone app to a GPS ankle monitor, and what the contractors running it promise their investors. Who is cited, and who never is, when a worker dies on a data-center construction site. A drug-safety signal surfacing in the FDA's own data quarters before anyone writes it down.",
      'The method underneath is plain and non-negotiable. Nothing runs as fact without a primary document behind it. Contested claims are attributed and carry the answer of the party they name. Every institution I write about gets a real chance to respond before I publish. The rigor is not ornament — it is what separates an investigation from an accusation.',
      'The toolkit comes from an earlier life in data and software, which is an advantage rather than a detour: I can pull a federal dataset most reporters never open, and write the code to make it usable when it arrives broken. I studied rhetoric and writing at the University of Texas at Austin, and I report from the Texas–Mexico border — a dual citizen, working both sides of the line in either language.',
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    subtitle:
      'For editors, sources, and collaborators. I read everything myself and respond quickly.',
    doors: [
      {
        key: 'editors',
        label: 'For editors',
        description:
          'Available for commissions and pitches on healthcare, private equity, and regulatory accountability.',
        channelLabel: 'Email',
        channelValue: 'manuel.flores.7@protonmail.com',
        href: 'mailto:manuel.flores.7@protonmail.com',
      },
      {
        key: 'sources',
        label: 'For sources',
        description:
          'If you have documents or knowledge of wrongdoing, I protect the people who come forward. Reach me first by encrypted email; for anything sensitive, ask and we will move to Signal. I will never name you without your consent.',
        channelLabel: 'Confidential',
        channelValue: 'manuel.flores.7@protonmail.com · Signal on request',
        href: 'mailto:manuel.flores.7@protonmail.com',
      },
      {
        key: 'elsewhere',
        label: 'Elsewhere',
        description: 'For anything else, or to see the professional record.',
        channelLabel: 'LinkedIn',
        channelValue: 'manuel-flores-90653060',
        href: 'https://www.linkedin.com/in/manuel-flores-90653060/',
      },
    ],
    locationLabel: 'Based on the',
    location: 'Texas–Mexico border · Reporting in English and Spanish',
  },

  footer: 'Manuel Flores · Investigative journalism',
};

// ============================================================
// Spanish
// ============================================================

export const siteEs: SiteContent = {
  lang: 'es',
  altLang: 'en',
  altLangLabel: 'English',
  altLangHref: '/',

  nav: {
    investigations: 'Investigaciones',
    method: 'Método',
    about: 'Sobre mí',
    contact: 'Contacto',
  },

  hero: {
    eyebrow: 'Periodista de datos · Investigación',
    headline: {
      lead: 'Investigo al poder leyendo los registros que ',
      emphasis: 'deja atrás.',
    },
    subtitle:
      'Periodismo de investigación independiente sobre la rendición de cuentas corporativa en el sector salud y las industrias reguladas de EE. UU. — construido con documentos primarios y las bases de datos federales que casi ninguna redacción abre.',
    primaryCta: 'Las investigaciones',
    secondaryCta: 'Contacto',
    cover: {
      poster: '/media/hero-poster.jpg',
      video: '/media/hero.mp4',
      alt: 'Manuel Flores analizando grafos de datos y registros en monitores encendidos en una redacción a oscuras',
    },
  },

  ethos: {
    statement: 'Fuentes primarias, siempre. Cada dato empieza en un documento que leí yo mismo.',
    sources: sourceSystems,
  },

  investigations: {
    eyebrow: 'Investigaciones',
    title: 'Lo que estoy investigando.',
    subtitle:
      'Investigaciones en curso, basadas en documentos, sobre cómo el poder se organiza para evitar ser medido. Descritas aquí a nivel de tema — los detalles se quedan en la reportería hasta que se publican.',
    note: 'En curso. Se agradecen filtraciones — ver Contacto.',
    items: [
      {
        key: 'pe-healthcare',
        title: 'Capital privado en la salud estadounidense',
        dek: 'Cómo los dueños de capital privado sacan dinero y responsabilidad de las residencias que cuidan a los adultos mayores — la propiedad de una instalación seguida a través de las sociedades pantalla en los datos federales de propiedad de CMS, la renta entre partes relacionadas verificada a nivel de hoja de trabajo en los reportes de costos HCRIS de Medicare, el expediente federal por muerte culposa leído línea por línea.',
        sources: ['Reportes HCRIS', 'Datos de propiedad CMS', 'PACER / RECAP'],
        status: 'En reportería',
      },
      {
        key: 'surveillance-economics',
        title: 'La economía de la vigilancia migratoria',
        dek: 'Una lectura longitudinal de los propios datos de gestión de detención de ICE, que documenta la migración silenciosa de una app de registro telefónico al grillete GPS — y sigue el dinero hasta los contratistas que lucran con el cambio.',
        sources: ['Datos de detención de ICE', 'Contratos federales'],
        status: 'En reportería',
      },
      {
        key: 'mine-safety',
        title: 'Las multas que nunca se pagan',
        dek: 'Los datos federales de sanciones de seguridad minera, reconstruidos operador por operador con la propiedad correcta en el tiempo, muestran qué multas sencillamente nunca se pagan — contrastados con lo que esas mismas empresas están obligadas a decirles a sus inversionistas, y lo que no.',
        sources: ['Datos de MSHA', 'Reportes SEC'],
        status: 'En reportería',
      },
      {
        key: 'tribal-water',
        title: 'Los estándares de agua que nadie escribió',
        dek: 'La mayoría de las reservas indígenas no tiene estándar alguno de la Ley de Agua Limpia — una brecha de cincuenta años que todos los estados cerraron hace mucho. Los propios datos del programa de la EPA, medidos contra las promesas de la agencia sobre cómo, y qué tan rápido, esa brecha se cerraría.',
        sources: ['Registro Federal', 'Datos de la EPA'],
        status: 'En reportería',
      },
    ],
  },

  method: {
    eyebrow: 'Método',
    title: 'Cómo se construye la reportería.',
    intro:
      'Llegué al periodismo desde los datos y el software. Ahora apunto esa caja de herramientas a instituciones que preferirían no ser medidas — lo que significa que no espero una filtración. Voy y consigo los registros.',
    principles: [
      {
        key: 'documents-first',
        title: 'Primero los documentos',
        description:
          'Cada dato empieza en una fuente primaria — un expediente judicial, un reporte de costos, un registro de inspección — leído directamente, nunca a través de un boletín ni de un resumen.',
      },
      {
        key: 'data-at-scale',
        title: 'Datos a una escala que casi nadie trabaja',
        description:
          'Extraigo y analizo bases de datos federales que pocos reporteros abren: reportes de costos de Medicare a nivel de hoja de trabajo, archivos de personal, declaraciones de propiedad, registros de contratos. Cuando los datos no vienen limpios, escribo el código para volverlos usables.',
      },
      {
        key: 'ai-human',
        title: 'Asistido por IA, juzgado por una persona',
        description:
          'Uso automatización e IA para leer a una escala imposible para una persona — expedientes completos, miles de documentos — y encontrar la anomalía que vale la pena perseguir. Después, cada afirmación publicada se verifica a mano.',
      },
      {
        key: 'verify-attribute',
        title: 'Verificado, luego atribuido',
        description:
          'Nada se publica como hecho si no lo sostiene un documento primario. Las afirmaciones en disputa se atribuyen a su fuente y llevan la respuesta de la parte a la que se refieren.',
      },
      {
        key: 'right-of-reply',
        title: 'Justo antes de publicar',
        description:
          'Cada parte nombrada recibe una oportunidad real y específica de responder antes de publicar — y su respuesta se reporta junto al hallazgo.',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Ya consta en los documentos.',
    paragraphs: [
      'Las instituciones poderosas están obligadas a dejar constancia por escrito. Reportes de costos, expedientes judiciales, actas de inspección, bases de datos de eventos adversos — el registro de lo que hicieron, y a menudo de lo que preferirían que nadie notara, ya es público. Permanece oculto solo porque leerlo es un trabajo lento y técnico que casi nadie hace. Ese trabajo es, entero, mi especialidad.',
      'Reporto sobre la rendición de cuentas corporativa en el sector salud y otras industrias reguladas de EE. UU., y construyo cada historia desde los documentos de fondo — nunca un boletín, nunca un resumen. Expedientes judiciales federales obtenidos vía PACER y RECAP. Reportes de costos de Medicare leídos a nivel de hoja de trabajo en el sistema HCRIS de CMS. Archivos de personal, registros de propiedad e inscripción, inspecciones de muertes de OSHA, datos de eventos adversos de la FDA, expedientes ambientales federales y estatales. El registro primario, línea por línea.',
      'Las investigaciones que me atrapan comparten una misma forma: daño real, deliberadamente hecho difícil de ver. Cómo los dueños de capital privado sacan dinero y responsabilidad de las residencias que cuidan a los adultos mayores — legible en las sociedades pantalla de los datos federales de propiedad y en la renta entre partes relacionadas que Medicare desconoce en la hoja de trabajo A-8-1. Cómo la aplicación de la ley migratoria pasó de una app telefónica a un grillete GPS, y lo que los contratistas que lo operan les prometen a sus inversionistas. A quién se sanciona, y a quién jamás, cuando un trabajador muere en la obra de un centro de datos. Una señal de seguridad farmacológica que aparece en los propios datos de la FDA trimestres antes de que alguien la escriba.',
      'El método detrás de todo es simple e innegociable. Nada se publica como hecho sin un documento primario que lo sostenga. Las afirmaciones en disputa se atribuyen y llevan la respuesta de la parte que nombran. Cada institución sobre la que escribo recibe una oportunidad real de responder antes de publicar. El rigor no es adorno: es lo que separa una investigación de una acusación.',
      'La caja de herramientas viene de una vida anterior en datos y software, y es una ventaja más que un desvío: puedo extraer una base de datos federal que casi ningún reportero abre, y escribir el código para volverla usable cuando llega rota. Estudié retórica y escritura en la Universidad de Texas en Austin, y reporto desde la frontera Texas–México — con doble nacionalidad, trabajando ambos lados de la línea en cualquiera de los dos idiomas.',
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos.',
    subtitle:
      'Para editores, fuentes y colaboradores. Leo todo yo mismo y respondo rápido.',
    doors: [
      {
        key: 'editors',
        label: 'Para editores',
        description:
          'Disponible para encargos y propuestas sobre salud, capital privado y rendición de cuentas regulatoria.',
        channelLabel: 'Correo',
        channelValue: 'manuel.flores.7@protonmail.com',
        href: 'mailto:manuel.flores.7@protonmail.com',
      },
      {
        key: 'sources',
        label: 'Para fuentes',
        description:
          'Si tienes documentos o conocimiento de irregularidades, protejo a quienes se acercan. Escríbeme primero por correo cifrado; para algo sensible, pídelo y pasamos a Signal. Nunca te nombraré sin tu consentimiento.',
        channelLabel: 'Confidencial',
        channelValue: 'manuel.flores.7@protonmail.com · Signal a solicitud',
        href: 'mailto:manuel.flores.7@protonmail.com',
      },
      {
        key: 'elsewhere',
        label: 'Lo demás',
        description: 'Para cualquier otra cosa, o para ver la trayectoria profesional.',
        channelLabel: 'LinkedIn',
        channelValue: 'manuel-flores-90653060',
        href: 'https://www.linkedin.com/in/manuel-flores-90653060/',
      },
    ],
    locationLabel: 'Con base en la',
    location: 'Frontera Texas–México · Reportería en inglés y español',
  },

  footer: 'Manuel Flores · Periodismo de investigación',
};
