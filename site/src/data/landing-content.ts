/**
 * Canonical content for the public site — manuelflores.me
 *
 * Positioning: independent DATA & RESEARCH work on human trafficking and child
 * protection in the United States. Nothing else. The engineering background
 * is framed as measurement capability — getting records nobody else can get,
 * and making them countable — never as a software portfolio.
 *
 * One source of truth, two language variants. Keep EN and ES in lock-step —
 * anything in EN must have its ES counterpart, and vice versa.
 *
 * Disclosure discipline: work in progress is described at the level of the
 * question and the source, never with facility names, operators or
 * identifiable subjects ahead of publication.
 *
 * v5 — Sep 2026: full rewrite for trafficking / child-protection data and
 * research. Hero video retired (see hero.cover below — the slot is left in
 * place and commented, ready for the replacement asset). Four work items, all
 * on this subject. Method and About rewritten in this work's own voice.
 */

export interface WorkContent {
  key: string;
  /** Project-level title — a question or a finding, not a named case. */
  title: string;
  /** One-line dek. */
  dek: string;
  /** The primary-source systems the work draws on. Not translated. */
  sources: string[];
  /** Honest status line, e.g. "In progress". */
  status: string;
  /** Optional link to the public repo backing this item. Set only once the
   *  work is actually published — never point this at a private/local repo. */
  repoHref?: string;
  repoLabel?: string;
  /** Optional cinematic cover asset in /public. Poster is required if video is
   *  set. Both optional — section degrades gracefully without them. */
  cover?: { poster: string; video?: string; alt: string };
}

export interface MethodPrinciple {
  key: string;
  title: string;
  description: string;
}

export interface ContactDoor {
  key: 'commissions' | 'sources' | 'elsewhere';
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
    work: string;
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
    /** Optional hero cinematic asset. Currently unset by design — see the
     *  note in each hero block below. */
    cover?: { poster: string; video?: string; alt: string };
  };

  ethos: {
    statement: string;
    /** Primary-source systems worked in. Not translated. */
    sources: string[];
  };

  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    items: WorkContent[];
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

// Primary-source systems actually worked in — same in both languages.
const sourceSystems = [
  'California · AB 388',
  'CDSS licensing & complaints',
  'North Carolina · DHSR',
  'CMS · Provider of Services',
  'ICPSR',
  'CTDC',
  'State open-data portals',
  'Published prevalence studies',
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
    work: 'Work',
    method: 'Method',
    about: 'About',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Data & Research · Human Trafficking and Child Protection',
    headline: {
      lead: 'Nobody knows how many trafficking victims there are. ',
      emphasis: 'The records to count them already exist.',
    },
    subtitle:
      'Data and research on trafficking and child protection in the U.S. — built from agencies’ own records, reconciled against their own totals, shipped with the code to re-run it.',
    primaryCta: 'The work',
    secondaryCta: 'Contact',
    // HERO ASSET SLOT — intentionally empty.
    // With no `cover`, the hero is the same bone surface as the rest of the
    // page, dark type, and the nav is dark from scroll 0. Setting a cover is
    // the ONLY thing that makes the hero dark. To restore the
    // cinematic hero, drop the new video at site/public/media/hero.mp4 and a
    // still of its FINAL frame at site/public/media/hero-poster.jpg, then
    // uncomment the block below (and its Spanish counterpart). CinematicMedia
    // plays it twice and freezes on the last frame, so author the video to end
    // on a stable, dark, legible frame.
    //
    // cover: {
    //   poster: '/media/hero-poster.jpg',
    //   video: '/media/hero.mp4',
    //   alt: '<describe the new footage here>',
    // },
  },

  ethos: {
    statement:
      'Primary sources, always. Every number starts in a record I pulled myself, and ships with the code to re-run it.',
    sources: sourceSystems,
  },

  work: {
    eyebrow: 'Work',
    title: 'What I am building.',
    subtitle:
      'Measurement work on trafficking and child protection: building a number that does not exist yet, or checking one that does. Each project ships with its code, its data-quality log, and a list of what is still unverified.',
    note: 'In progress. Data, code and calculations are available on request — see Contact.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'The children’s facilities that keep losing children',
        dek: 'California requires every children’s facility to report law-enforcement contacts yearly, including runaways, and to inspect any facility running above average. I rebuilt four years of those reports into one panel, reconciled line by line against the state’s own published subtotals, and identified the facilities that met the inspection trigger every year. The reconciliation surfaced errors in the state’s own files — a second, independently written parser checks the first.',
        sources: ['California AB 388 reports', 'CDSS licensing file', 'CDSS complaint data'],
        status: 'Published',
        repoHref: 'https://github.com/mountmanu/ca-child-facility-audit',
        repoLabel: 'View repository',
      },
      {
        key: 'linkage-error',
        title: 'Nobody checks whether the victim counts add up',
        dek: 'US trafficking estimates match victim records across agencies on a deliberately coarse key — a couple of initials and some birth-date digits. Across five real US studies, plus two HIV-surveillance studies checked as a control, none corrects for that key merging two people or missing that one appears twice. My simulation, anchored to published record-linkage benchmarks, puts the inflation near 13% at a 5% error rate. The fix was published in 2021 and never run on real data, in any field.',
        sources: ['Published prevalence studies', 'Record-linkage benchmarks', 'Monte Carlo simulation'],
        status: 'Published · open finding',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'View repository',
      },
      {
        key: 'us-data-map',
        title: 'What US trafficking data actually exists',
        dek: 'A source-by-source audit of all 51 US jurisdictions: which trafficking and child-welfare datasets are genuinely obtainable, which are gated behind institutional standing, and which are advertised but not there. It keeps its own corrections in place — a state I recorded as unreachable turned out to be my own network failing; a federal file I said held no children’s facilities does. The audit trail is part of the deliverable.',
        sources: ['51 US jurisdictions', 'ICPSR', 'CTDC', 'State open-data portals'],
        status: 'Published',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'View repository',
      },
      {
        key: 'cross-state',
        title: 'Does the California pattern hold anywhere else?',
        dek: 'California is the only state publishing facility-level law-enforcement contacts for children’s residential care. Comparing it to anything means rebuilding other states’ registers first — starting with North Carolina, whose licensing roster is a fixed-layout PDF that drops half its records under a naive parse. The rebuild recovers 93.6% of the state’s distinct licence numbers, every failure documented, feeding a register of what each of the 51 jurisdictions publishes.',
        sources: ['North Carolina · DHSR', 'CMS · Provider of Services', 'State licensing rosters'],
        status: 'In progress',
      },
    ],
  },

  method: {
    eyebrow: 'Method',
    title: 'How the work is built.',
    intro:
      'I came to this from building data systems, and point that toolkit at the systems meant to protect children and trafficking victims — which means I don’t wait for a clean dataset, because it never arrives. I go get the records, and keep a written trail of how every number was arrived at, including the ones that didn’t survive.',
    principles: [
      {
        key: 'triage',
        title: 'Most candidates die',
        description:
          'Every question gets opened, and most get killed — someone already answered it, the records can’t carry the claim, or the harm is real but no institution is accountable. Dozens of ideas went through that screen before the four projects above, each kill logged with its reason. What survives has already been tested against the literature.',
      },
      {
        key: 'documents-first',
        title: 'Records first',
        description:
          'Every fact begins in a primary record — a facility’s annual report, a licensing roster, a study’s own methods section — read directly, never through a dashboard or a summary.',
      },
      {
        key: 'own-numbers',
        title: 'I run the agency’s own numbers',
        description:
          'When a state publishes a reporting requirement and an inspection threshold, I rebuild the panel and reconcile it against the state’s own totals before it counts as a finding. Where the two disagree, the disagreement is the finding — and it has already turned up errors in a state’s own files.',
      },
      {
        key: 'ai-human',
        title: 'AI-assisted, human-judged',
        description:
          'I use automation and AI to read at a scale a person can’t — hundreds of papers, every state’s open-data catalog, years of facility reports — to find the gap worth working on. Nothing surfaced becomes a claim until a person confirms it against the source.',
      },
      {
        key: 'reproducible',
        title: 'Verified so it can be re-verified',
        description:
          'Load-bearing numbers are recomputed by a second, independently written parser; source files are fingerprinted so the version I read is the version anyone else can pull. Every project carries a data-quality log — including bugs found in my own first pass, written up rather than quietly fixed — and a list of what’s still unverified.',
      },
      {
        key: 'people',
        title: 'Practitioners, on the record',
        description:
          'The records say what happened; the people inside these systems say what it meant. Researchers, caseworkers, attorneys and agency staff go on the record, with consent. Where someone published a finding first, the credit is theirs. Where a person is at risk, protecting them outranks the finding.',
      },
      {
        key: 'right-of-reply',
        title: 'Fair before publication',
        description:
          'Nothing is stated as fact unless a primary record supports it. Every agency or operator named receives the specific assertions I intend to publish, with a real deadline, and their answer runs alongside the finding. Every request and deadline is logged, so silence is on the record too.',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'It is already on the record.',
    paragraphs: [
      'The systems that fail children and trafficking victims are required by law to write down that they did — annual facility reports, licensing complaints, ownership records, inspection rules. Almost none of it is counted, because counting it is slow, technical work stuck between two professions: people with the domain knowledge can’t get the data out, and people who can get data out don’t know what they’re looking at. That gap is my work.',
      'Concretely, I turn published-but-unusable records into a number an institution can be held to: four years of state facility reports, parsed from spreadsheets whose headers change yearly, reconciled against the state’s own subtotals until they agree. A prevalence estimate taken apart to find the untested assumption. A 51-jurisdiction map of which datasets are real, gated, or advertised and simply not there.',
      'The technical half makes the subject reachable. Two years building production data systems for paying clients — a hospital, a notary, a restaurant group — after several years in business development and project management, is enough to pull a file most analysts never open, catch joins that silently drop rows, and stand behind the result because an independent program checked the first. Every project ships with its code and data-quality log.',
      'The judgment half can’t be automated. Dozens of research questions go through the same screen — is the harm real, is anyone accountable, can the records carry it — and most are killed, each reason written down. I’ve also been wrong and left the correction in the document: a state I recorded as unreachable was my own network failing. Research you can trust shows you where it broke.',
      'I studied rhetoric and writing at the University of Texas at Austin, and work from the Texas–Mexico border — a dual citizen, in either language. All of the work here is built on United States federal and state records.',
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    subtitle:
      'For research and policy teams, people inside these systems, and collaborators. I read everything myself and respond quickly.',
    doors: [
      {
        key: 'commissions',
        label: 'For research & policy teams',
        description:
          'Available for contract and collaborative work with research organizations, NGOs and agencies: building a dataset that doesn’t exist, auditing one that does, or getting records out of a system that publishes them badly. You can have the data, code and calculations before you commit to anything.',
        channelLabel: 'Email',
        channelValue: 'manuelfa92@gmail.com',
        href: 'mailto:manuelfa92@gmail.com',
      },
      {
        key: 'sources',
        label: 'For people inside the system',
        description:
          'If what gets recorded doesn’t match what you see, I protect the people who come forward. Reach me first by encrypted email; for anything sensitive, we’ll move to Signal. I will never name you without your consent.',
        channelLabel: 'Confidential',
        channelValue: 'manuelfa92@gmail.com · Signal on request',
        href: 'mailto:manuelfa92@gmail.com',
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
    location: 'Texas–Mexico border · Working in English and Spanish',
  },

  footer: 'Manuel Flores · Data and research on trafficking and child protection',
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
    work: 'Trabajo',
    method: 'Método',
    about: 'Sobre mí',
    contact: 'Contacto',
  },

  hero: {
    eyebrow: 'Datos e investigación · Trata de personas y protección infantil',
    headline: {
      lead: 'Nadie sabe cuántas víctimas de trata hay. ',
      emphasis: 'Los registros para contarlas ya existen.',
    },
    subtitle:
      'Datos e investigación sobre trata y protección infantil en EE. UU. — construido con los propios registros de las agencias, conciliado contra sus propios totales, entregado con el código para volver a correrlo.',
    primaryCta: 'El trabajo',
    secondaryCta: 'Contacto',
    // ESPACIO PARA EL VIDEO DEL HERO — vacío a propósito.
    // Sin `cover`, el hero es la misma superficie color hueso que el resto de
    // la página. Solo un cover lo vuelve oscuro. Para restaurar el hero cinematográfico: coloca el
    // video nuevo en site/public/media/hero.mp4 y una imagen de su ÚLTIMO
    // cuadro en site/public/media/hero-poster.jpg, y descomenta este bloque
    // (y su equivalente en inglés).
    //
    // cover: {
    //   poster: '/media/hero-poster.jpg',
    //   video: '/media/hero.mp4',
    //   alt: '<describe aquí el material nuevo>',
    // },
  },

  ethos: {
    statement:
      'Fuentes primarias, siempre. Cada cifra empieza en un registro que extraje yo mismo, y se entrega con el código para volver a calcularla.',
    sources: sourceSystems,
  },

  work: {
    eyebrow: 'Trabajo',
    title: 'Lo que estoy construyendo.',
    subtitle:
      'Trabajo de medición sobre trata y protección infantil: construir una cifra que todavía no existe, o verificar una que sí. Cada proyecto se entrega con su código, su bitácora de calidad de datos y su lista de lo que sigue sin verificar.',
    note: 'En curso. Los datos, el código y los cálculos están disponibles a solicitud — ver Contacto.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'Las instalaciones infantiles a las que se les siguen yendo los niños',
        dek: 'California exige que toda instalación con menores reporte cada año sus contactos con la policía, fugas incluidas, e inspeccionar las que estén por encima del promedio. Reconstruí cuatro años de esos reportes en un solo panel, conciliado línea por línea contra los subtotales que la propia California publica, e identifiqué las instalaciones que activaron el criterio de inspección todos los años. La conciliación reveló errores en los propios archivos del estado — un segundo lector, escrito de forma independiente, verifica al primero.',
        sources: ['Reportes AB 388 de California', 'Archivo de licencias CDSS', 'Quejas CDSS'],
        status: 'Publicado',
        repoHref: 'https://github.com/mountmanu/ca-child-facility-audit',
        repoLabel: 'Ver repositorio',
      },
      {
        key: 'linkage-error',
        title: 'Nadie verifica si las cifras de víctimas cuadran',
        dek: 'Las estimaciones de trata en EE. UU. cruzan registros de víctimas entre agencias con una llave deliberadamente burda — un par de iniciales y algunos dígitos de la fecha de nacimiento. En cinco estudios reales, y en dos estudios de vigilancia de VIH revisados como control, ninguno corrige que esa llave funda a dos personas o no reconozca que una aparece dos veces. Mi simulación, anclada en referencias publicadas de error de vinculación, sitúa la inflación cerca del 13% con un 5% de error por registro. La corrección se publicó en 2021 y nunca se ha corrido sobre datos reales, en ningún campo.',
        sources: ['Estudios de prevalencia publicados', 'Referencias de vinculación', 'Simulación Monte Carlo'],
        status: 'Publicado · hallazgo abierto',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'Ver repositorio',
      },
      {
        key: 'us-data-map',
        title: 'Qué datos de trata existen realmente en EE. UU.',
        dek: 'Una auditoría fuente por fuente de las 51 jurisdicciones de EE. UU.: qué bases de datos son obtenibles de verdad, cuáles están cerradas detrás de una posición institucional, y cuáles se anuncian pero no están. Conserva sus propias correcciones — un estado que registré como inalcanzable resultó ser una falla de mi propia red; un archivo federal del que dije que no tenía instalaciones infantiles sí las tiene. El rastro de auditoría es parte del entregable.',
        sources: ['51 jurisdicciones de EE. UU.', 'ICPSR', 'CTDC', 'Portales estatales de datos'],
        status: 'Publicado',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'Ver repositorio',
      },
      {
        key: 'cross-state',
        title: '¿El patrón de California se repite en otros estados?',
        dek: 'California es el único estado que publica, instalación por instalación, los contactos con la policía en atención residencial infantil. Compararla con algo exige reconstruir primero los registros de otros estados — empezando por Carolina del Norte, cuyo padrón de licencias es un PDF de formato fijo que pierde la mitad de sus registros con una lectura ingenua. El padrón reconstruido recupera el 93.6% de los números de licencia distintos, cada falla documentada, y alimenta un registro de lo que cada una de las 51 jurisdicciones publica.',
        sources: ['Carolina del Norte · DHSR', 'CMS · Provider of Services', 'Padrones estatales de licencias'],
        status: 'En curso',
      },
    ],
  },

  method: {
    eyebrow: 'Método',
    title: 'Cómo se construye el trabajo.',
    intro:
      'Llegué a esto desde la construcción de sistemas de datos, y apunto esa caja de herramientas a los sistemas que se supone protegen a los niños y a las víctimas de trata — no espero a que llegue una base de datos limpia, porque nunca llega. Voy y consigo los registros, y dejo un rastro escrito de cómo se obtuvo cada cifra, incluidas las que no sobrevivieron.',
    principles: [
      {
        key: 'triage',
        title: 'Casi todas las ideas mueren',
        description:
          'Cada pregunta se abre, y la mayoría se descarta — alguien ya la respondió, los registros no sostienen la afirmación, o el daño es real pero ninguna institución responde por él. Decenas de ideas pasaron por ese filtro antes de los cuatro proyectos de arriba, cada descarte registrado con su razón. Lo que sobrevive ya fue probado contra la literatura.',
      },
      {
        key: 'documents-first',
        title: 'Primero los registros',
        description:
          'Cada dato empieza en un registro primario — el reporte anual de una instalación, un padrón de licencias, la sección de métodos de un estudio publicado — leído directamente, nunca a través de un tablero ni un resumen.',
      },
      {
        key: 'own-numbers',
        title: 'Corro los números de la propia agencia',
        description:
          'Cuando un estado publica una obligación de reporte y un umbral de inspección, reconstruyo el panel y lo concilio contra los totales del propio estado antes de darlo por hallazgo. Donde los dos no coinciden, la discrepancia es el hallazgo — y ya ha revelado errores en los archivos de un estado.',
      },
      {
        key: 'ai-human',
        title: 'Asistido por IA, juzgado por una persona',
        description:
          'Uso automatización e IA para leer a una escala imposible para una persona — cientos de artículos, el catálogo de datos abiertos de cada estado, años de reportes — y encontrar el hueco donde vale la pena trabajar. Nada de lo que aparece se vuelve una afirmación hasta que una persona lo confirma contra la fuente.',
      },
      {
        key: 'reproducible',
        title: 'Verificado para poder reverificarse',
        description:
          'Las cifras se recalculan con un segundo lector escrito de forma independiente, y los archivos fuente se sellan al descargarlos, de modo que la versión que leí es la que cualquiera puede bajar. Cada proyecto lleva una bitácora de calidad de datos — incluidos los errores de mi primera versión, documentados en vez de corregidos en silencio — y una lista de lo que aún no se ha verificado.',
      },
      {
        key: 'people',
        title: 'Profesionales, en el registro público',
        description:
          'Los registros dicen qué pasó; las personas dentro de estos sistemas dicen qué significó. Investigadores, trabajadores sociales, abogados y personal de agencias hablan para el registro, con consentimiento. Cuando alguien publicó un hallazgo primero, el crédito es suyo. Cuando una persona está en riesgo, protegerla vale más que el hallazgo.',
      },
      {
        key: 'right-of-reply',
        title: 'Justo antes de publicar',
        description:
          'Nada se afirma como hecho si no lo sostiene un registro primario. Cada agencia u operador nombrado recibe las afirmaciones concretas que pienso publicar, con un plazo real, y su respuesta corre junto al hallazgo. Cada solicitud y plazo quedan registrados, de modo que el silencio también consta.',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Ya consta en los registros.',
    paragraphs: [
      'Los sistemas que le fallan a los niños y a las víctimas de trata están obligados por ley a dejar constancia de que lo hicieron: reportes anuales de instalaciones, quejas de licencias, registros de propiedad, reglas de inspección. Casi nada de eso se cuenta, porque contarlo es un trabajo lento y técnico atrapado entre dos profesiones: quienes tienen el conocimiento del tema no pueden sacar los datos, y quienes pueden sacar datos no saben qué están viendo. Ese hueco es mi trabajo.',
      'En concreto, convierto registros publicados pero inutilizables en una cifra por la que una institución puede responder: cuatro años de reportes estatales, extraídos de hojas de cálculo cuyos encabezados cambian cada año, conciliados contra los subtotales del propio estado hasta que coinciden. Una estimación de prevalencia desarmada para encontrar el supuesto sin probar. Un mapa de 51 jurisdicciones sobre qué bases de datos son reales, cuáles están cerradas y cuáles simplemente no están.',
      'La mitad técnica hace que el tema sea alcanzable. Dos años construyendo sistemas de datos en producción para clientes que pagan — un hospital, una notaría, un grupo restaurantero — después de varios años en desarrollo de negocios y gestión de proyectos, alcanza para extraer un archivo que casi ningún analista abre, detectar uniones que descartan registros en silencio, y responder por el resultado porque un programa independiente verificó al primero. Cada proyecto se entrega con su código y su bitácora de calidad de datos.',
      'La mitad de criterio no se puede automatizar. Decenas de preguntas de investigación pasan por el mismo filtro — si el daño es real, si alguien responde por él, si los registros lo sostienen — y la mayoría se descarta, cada una con su razón por escrito. También me he equivocado y he dejado la corrección en el documento: un estado que registré como inalcanzable era mi propia red fallando. La investigación en la que se puede confiar es la que muestra dónde se rompió.',
      'Estudié retórica y escritura en la Universidad de Texas en Austin, y trabajo desde la frontera Texas–México — con doble nacionalidad, en cualquiera de los dos idiomas. Todo el trabajo aquí descrito está construido sobre registros federales y estatales de Estados Unidos.',
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos.',
    subtitle:
      'Para equipos de investigación y política pública, quienes están dentro de estos sistemas, y colaboradores. Leo todo yo mismo y respondo rápido.',
    doors: [
      {
        key: 'commissions',
        label: 'Investigación y política pública',
        description:
          'Disponible para trabajo por contrato y colaborativo con organizaciones de investigación, ONG y agencias: construir una base de datos que todavía no existe, auditar una que sí, o sacar registros de un sistema que los publica mal. Puede tener los datos, el código y los cálculos antes de comprometerse a nada.',
        channelLabel: 'Correo',
        channelValue: 'manuelfa92@gmail.com',
        href: 'mailto:manuelfa92@gmail.com',
      },
      {
        key: 'sources',
        label: 'Para quienes están dentro',
        description:
          'Si lo que queda registrado no coincide con lo que ves, protejo a quienes se acercan. Escríbeme primero por correo cifrado; para algo sensible, pasamos a Signal. Nunca te nombraré sin tu consentimiento.',
        channelLabel: 'Confidencial',
        channelValue: 'manuelfa92@gmail.com · Signal a solicitud',
        href: 'mailto:manuelfa92@gmail.com',
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
    location: 'Frontera Texas–México · Trabajo en inglés y español',
  },

  footer: 'Manuel Flores · Datos e investigación sobre trata y protección infantil',
};
