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
 *
 * v4 — Aug 2026: sourcing and verification update. Adds the rulemaking and
 * executive-compensation beats; widens the source strip (Federal Register,
 * MSHA, DOL/OWCP, state audits, proxy statements); upgrades Method from five
 * principles to seven — candidate triage, running the institution's own
 * formula, reproducible verification with declared gaps, and named human
 * sourcing with precedence/credit. Editors' door now states the
 * simultaneous-query policy and the pre-commission evidence offer.
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
const sourceSystems = [
  'Federal Register',
  'Federal courts (PACER)',
  'SEC · EDGAR',
  'CMS · HCRIS',
  'MSHA',
  'OSHA',
  'EPA',
  'FDA',
  'State audits',
];

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
      'Independent investigative reporting on corporate and regulatory accountability in U.S. healthcare, labor and regulated industries — built from primary documents, the federal datasets most newsrooms never open, and arithmetic I publish the method for.',
    primaryCta: 'The investigations',
    secondaryCta: 'Contact',
    cover: {
      poster: '/media/hero-poster.jpg',
      video: '/media/hero.mp4',
      alt: 'Manuel Flores working through network graphs and records on glowing monitors in a dim newsroom at night',
    },
  },

  ethos: {
    statement:
      'Primary sources, always. Every fact starts in a document I read myself — and every number comes with the method to check it.',
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
        dek: "Most Indian reservations have no Clean Water Act standards at all — a fifty-year gap every state closed long ago. I traced the agency's own promises to close it across four administrations, each attempt dying quietly at a political transition, and took the legal question to the scholars and tribal-water attorneys who have lived it.",
        sources: ['Federal Register', 'EPA program data', 'Legal scholarship'],
        status: 'In reporting',
      },
      {
        key: 'black-lung-collateral',
        title: "The collateral behind a sick miner's benefits",
        dek: "A federal proposal would sharply cut the security coal companies must post against the lifetime benefits owed to miners with black lung. The scoring formula is printed inside the rule itself — so I rebuilt it and ran it against the operators' own audited financial statements, then read the result against what the same agency said, in writing, when it refused the identical request two years earlier.",
        sources: ['Federal Register', 'SEC filings', 'DOL · OWCP'],
        status: 'In reporting',
      },
      {
        key: 'safety-pay',
        title: "What a worker's death costs a bonus",
        dek: "Utilities grade their executives' annual bonuses partly on how many workers are seriously injured or killed. The targets, the carve-outs, and whether contractors are counted at all are already disclosed — in compensation filings and sustainability templates that are almost never read against each other, or against the year's actual fatalities.",
        sources: ['Proxy statements', 'EEI · AGA templates', 'OSHA inspections'],
        status: 'In reporting',
      },
    ],
  },

  method: {
    eyebrow: 'Method',
    title: 'How the reporting is built.',
    intro:
      'I came to journalism from data and software. I now point that toolkit at institutions that would rather not be measured — which means I do not wait for a leak. I go and get the records, and I keep a written trail of how every number in a story was arrived at, including the ones that did not survive.',
    principles: [
      {
        key: 'triage',
        title: 'Most candidates die',
        description:
          'Every lead gets opened, and most get killed — because a newsroom already owns the beat, because the documents cannot carry the claim, or because the harm is real but no one is accountable for it. Hundreds have gone through that screen; a handful survive. Each kill is logged with its reason, so what reaches an editor has already survived something.',
      },
      {
        key: 'documents-first',
        title: 'Documents first',
        description:
          'Every fact begins in a primary source — a court filing, a cost report, an inspection record, a proposed rule — read directly, never through a press release or a summary.',
      },
      {
        key: 'own-numbers',
        title: "I run the institution's own numbers",
        description:
          "When an agency publishes a scoring formula, a payment rule or an enforcement file, I rebuild it and run it myself — the formula against the regulated companies' audited financial statements, the enforcement data reassembled operator by operator with time-correct ownership. The finding is then the institution's own arithmetic, not my characterization of it.",
      },
      {
        key: 'ai-human',
        title: 'AI-assisted, human-judged',
        description:
          'I use automation and AI to read at a scale a person cannot — whole dockets, thousands of filings, decades of enforcement records — to find the anomaly worth chasing. Nothing it surfaces reaches a reader until a person has gone back to the source and confirmed it.',
      },
      {
        key: 'reproducible',
        title: 'Verified so it can be re-verified',
        description:
          'Load-bearing numbers are transcribed a second time, blind, and recomputed by independent code. Source documents are fingerprinted on download, so the version I read is the version anyone else can pull. Every story carries a verification log with timestamps — and an explicit list of what has not been verified yet. Declaring the gap is part of the work, not an admission against it.',
      },
      {
        key: 'people',
        title: 'People, on the record',
        description:
          'The documents say what happened; people say what it meant. Attorneys, academics, advocates and agency press offices go on the record, recorded and with consent. Where someone published a finding before I reached it, the credit is theirs and the story says so. Where a source is at risk, protecting them outranks the story.',
      },
      {
        key: 'right-of-reply',
        title: 'Fair before publication',
        description:
          'Nothing runs as fact unless a primary document supports it, and contested claims are attributed to their source. Every named party receives the specific factual assertions I intend to publish, enumerated, with a real deadline — and their answer runs alongside the finding. Every request and every deadline is logged, so silence is on the record too.',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'It is already on the record.',
    paragraphs: [
      'Powerful institutions are required to write things down. Cost reports, court dockets, inspection files, adverse-event databases — the record of what an institution did, and often of what it would rather you never notice, is already public. It stays hidden only because reading it is slow, technical work that almost no one does. That work is the whole of my beat.',
      "I report on corporate and regulatory accountability in U.S. healthcare, labor and other regulated industries, and I build every story from the underlying documents — never a press release, never a summary. Proposed and final rules read in the Federal Register alongside the rulemaking they quietly reverse. Federal court dockets pulled through PACER and RECAP. Medicare cost reports read at the worksheet level in CMS's HCRIS system. Mine-safety enforcement files, payroll-based staffing data, ownership and enrollment records, OSHA fatality inspections, executive compensation filings, state audits, FDA adverse-event data, EPA and state environmental filings. The primary record, line by line.",
      "The investigations that hold me share one shape: real harm, deliberately made hard to see. How private-equity owners route cash and liability out of the nursing homes that care for the elderly — legible in the shell entities of federal ownership data and the related-party rent Medicare disallows on Worksheet A-8-1. How immigration enforcement migrated from a phone app to a GPS ankle monitor, and what the contractors running it promise their investors. An agency that refuses an industry's request in writing, then grants every part of it two years later without ever addressing its own stated reasons. A bonus formula in which a worker's death is a line item with a target attached.",
      'The method underneath is plain and non-negotiable. Nothing runs as fact without a primary document behind it. Load-bearing numbers are transcribed a second time, blind, and recomputed by independent code; the originals are fingerprinted on download, so the version I read is the version anyone else can pull. What I have not yet verified is written down and declared rather than buried, and an argument someone else published first is credited to them. Every institution I write about gets a real chance to respond before I publish. The rigor is not ornament — it is what separates an investigation from an accusation.',
      'Most of what I open never becomes a story. Hundreds of candidates have gone through the same screen — is the harm real, is anyone accountable for it, can the documents carry it, and does a newsroom already own the beat — and the great majority are killed, each with its reason written down. What reaches an editor has survived that, and it arrives with the documents, the data and the calculations attached, before anyone has to commit to anything.',
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
          'Available for commissions on healthcare, private equity, labor, mining, environment and regulatory accountability. I query a small number of outlets at once and say so in the pitch; the first editor to commission gets it, and everyone else is told the same day. You can have the documents, the data and my calculations before you commit to anything.',
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
      'Periodismo de investigación independiente sobre la rendición de cuentas corporativa y regulatoria en el sector salud, el trabajo y las industrias reguladas de EE. UU. — construido con documentos primarios, las bases de datos federales que casi ninguna redacción abre y cálculos cuyo método publico.',
    primaryCta: 'Las investigaciones',
    secondaryCta: 'Contacto',
    cover: {
      poster: '/media/hero-poster.jpg',
      video: '/media/hero.mp4',
      alt: 'Manuel Flores analizando grafos de datos y registros en monitores encendidos en una redacción a oscuras',
    },
  },

  ethos: {
    statement:
      'Fuentes primarias, siempre. Cada dato empieza en un documento que leí yo mismo — y cada cifra viene con el método para comprobarla.',
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
        dek: 'La mayoría de las reservas indígenas no tiene estándar alguno de la Ley de Agua Limpia — una brecha de cincuenta años que todos los estados cerraron hace mucho. Rastreé las propias promesas de la agencia de cerrarla a lo largo de cuatro administraciones, cada intento muriendo en silencio en una transición política, y llevé la pregunta jurídica a los académicos y abogados de agua indígena que la han vivido.',
        sources: ['Registro Federal', 'Datos de la EPA', 'Doctrina jurídica'],
        status: 'En reportería',
      },
      {
        key: 'black-lung-collateral',
        title: 'La garantía detrás de las prestaciones de un minero enfermo',
        dek: 'Una propuesta federal reduciría drásticamente la garantía que las empresas carboneras deben depositar frente a las prestaciones vitalicias que deben a los mineros con neumoconiosis. La fórmula de calificación viene impresa dentro de la propia norma — así que la reconstruí y la corrí contra los estados financieros auditados de las operadoras, y leí el resultado contra lo que esa misma agencia dijo, por escrito, cuando negó la petición idéntica dos años antes.',
        sources: ['Registro Federal', 'Reportes SEC', 'DOL · OWCP'],
        status: 'En reportería',
      },
      {
        key: 'safety-pay',
        title: 'Lo que la muerte de un trabajador le cuesta a un bono',
        dek: 'Las empresas de servicios públicos califican el bono anual de sus ejecutivos, en parte, según cuántos trabajadores resultan gravemente heridos o muertos. Las metas, las excepciones y si los contratistas cuentan siquiera ya están declaradas — en los reportes de compensación y en las plantillas de sostenibilidad que casi nunca se leen entre sí, ni contra las muertes efectivas del año.',
        sources: ['Reportes de compensación', 'Plantillas EEI · AGA', 'Inspecciones OSHA'],
        status: 'En reportería',
      },
    ],
  },

  method: {
    eyebrow: 'Método',
    title: 'Cómo se construye la reportería.',
    intro:
      'Llegué al periodismo desde los datos y el software. Ahora apunto esa caja de herramientas a instituciones que preferirían no ser medidas — lo que significa que no espero una filtración. Voy y consigo los registros, y dejo un rastro escrito de cómo se obtuvo cada cifra de una historia, incluidas las que no sobrevivieron.',
    principles: [
      {
        key: 'triage',
        title: 'Casi todas las ideas mueren',
        description:
          'Cada pista se abre, y la mayoría se descarta — porque otra redacción ya es dueña del tema, porque los documentos no sostienen la afirmación, o porque el daño es real pero nadie responde por él. Cientos han pasado por ese filtro; sobreviven unas cuantas. Cada descarte queda registrado con su razón, de modo que lo que llega a un editor ya sobrevivió a algo.',
      },
      {
        key: 'documents-first',
        title: 'Primero los documentos',
        description:
          'Cada dato empieza en una fuente primaria — un expediente judicial, un reporte de costos, un registro de inspección, una norma propuesta — leído directamente, nunca a través de un boletín ni de un resumen.',
      },
      {
        key: 'own-numbers',
        title: 'Corro los números de la propia institución',
        description:
          'Cuando una agencia publica una fórmula de calificación, una regla de pago o un archivo de sanciones, la reconstruyo y la corro yo mismo — la fórmula contra los estados financieros auditados de las empresas reguladas, los datos de sanciones rearmados operador por operador con la propiedad correcta en el tiempo. El hallazgo es entonces la aritmética de la propia institución, no mi caracterización de ella.',
      },
      {
        key: 'ai-human',
        title: 'Asistido por IA, juzgado por una persona',
        description:
          'Uso automatización e IA para leer a una escala imposible para una persona — expedientes completos, miles de documentos, décadas de registros de sanciones — y encontrar la anomalía que vale la pena perseguir. Nada de lo que aparece llega a un lector hasta que una persona vuelve a la fuente y lo confirma.',
      },
      {
        key: 'reproducible',
        title: 'Verificado para poder reverificarse',
        description:
          'Las cifras que sostienen una historia se transcriben una segunda vez, a ciegas, y se recalculan con código independiente. Los documentos fuente se sellan al descargarlos, de modo que la versión que yo leí es la versión que cualquiera puede bajar. Cada historia lleva una bitácora de verificación con marcas de tiempo — y una lista explícita de lo que aún no se ha verificado. Declarar el hueco es parte del trabajo, no una confesión en su contra.',
      },
      {
        key: 'people',
        title: 'Personas, en el registro público',
        description:
          'Los documentos dicen qué pasó; las personas dicen qué significó. Abogados, académicos, defensores y oficinas de prensa hablan para el registro, con grabación y consentimiento. Cuando alguien publicó un hallazgo antes de que yo llegara a él, el crédito es suyo y la historia lo dice. Cuando una fuente está en riesgo, protegerla vale más que la historia.',
      },
      {
        key: 'right-of-reply',
        title: 'Justo antes de publicar',
        description:
          'Nada se publica como hecho si no lo sostiene un documento primario, y las afirmaciones en disputa se atribuyen a su fuente. Cada parte nombrada recibe las afirmaciones concretas que pienso publicar, enumeradas y con un plazo real — y su respuesta corre junto al hallazgo. Cada solicitud y cada plazo quedan registrados, de modo que el silencio también consta.',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Ya consta en los documentos.',
    paragraphs: [
      'Las instituciones poderosas están obligadas a dejar constancia por escrito. Reportes de costos, expedientes judiciales, actas de inspección, bases de datos de eventos adversos — el registro de lo que hicieron, y a menudo de lo que preferirían que nadie notara, ya es público. Permanece oculto solo porque leerlo es un trabajo lento y técnico que casi nadie hace. Ese trabajo es, entero, mi especialidad.',
      'Reporto sobre la rendición de cuentas corporativa y regulatoria en el sector salud, el trabajo y otras industrias reguladas de EE. UU., y construyo cada historia desde los documentos de fondo — nunca un boletín, nunca un resumen. Normas propuestas y definitivas leídas en el Registro Federal junto a la reglamentación que revierten en silencio. Expedientes judiciales federales obtenidos vía PACER y RECAP. Reportes de costos de Medicare leídos a nivel de hoja de trabajo en el sistema HCRIS de CMS. Archivos de sanciones de seguridad minera, datos de personal, registros de propiedad e inscripción, inspecciones de muertes de OSHA, reportes de compensación ejecutiva, auditorías estatales, datos de eventos adversos de la FDA, expedientes ambientales federales y estatales. El registro primario, línea por línea.',
      'Las investigaciones que me atrapan comparten una misma forma: daño real, deliberadamente hecho difícil de ver. Cómo los dueños de capital privado sacan dinero y responsabilidad de las residencias que cuidan a los adultos mayores — legible en las sociedades pantalla de los datos federales de propiedad y en la renta entre partes relacionadas que Medicare desconoce en la hoja de trabajo A-8-1. Cómo la aplicación de la ley migratoria pasó de una app telefónica a un grillete GPS, y lo que los contratistas que lo operan les prometen a sus inversionistas. Una agencia que niega por escrito la petición de una industria y dos años después la concede entera, sin abordar jamás sus propias razones declaradas. Una fórmula de bonos en la que la muerte de un trabajador es una partida con una meta asignada.',
      'El método detrás de todo es simple e innegociable. Nada se publica como hecho sin un documento primario que lo sostenga. Las cifras que sostienen una historia se transcriben una segunda vez, a ciegas, y se recalculan con código independiente; los originales se sellan al descargarlos, de modo que la versión que yo leí es la versión que cualquiera puede bajar. Lo que aún no he verificado se escribe y se declara, en vez de enterrarse, y un argumento que alguien más publicó primero se le acredita a esa persona. Cada institución sobre la que escribo recibe una oportunidad real de responder antes de publicar. El rigor no es adorno: es lo que separa una investigación de una acusación.',
      'La mayor parte de lo que abro nunca se vuelve una historia. Cientos de candidatas han pasado por el mismo filtro — si el daño es real, si alguien responde por él, si los documentos lo sostienen y si alguna redacción ya es dueña del tema — y la gran mayoría se descarta, cada una con su razón por escrito. Lo que llega a un editor sobrevivió a eso, y llega con los documentos, los datos y los cálculos adjuntos, antes de que nadie tenga que comprometerse a nada.',
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
          'Disponible para encargos sobre salud, capital privado, trabajo, minería, medio ambiente y rendición de cuentas regulatoria. Consulto a un número reducido de medios a la vez y lo digo en la propuesta; el primer editor que la encargue se la lleva, y a los demás se les avisa el mismo día. Puede tener los documentos, los datos y mis cálculos antes de comprometerse a nada.',
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
