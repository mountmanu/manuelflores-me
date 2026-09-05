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
 *
 * v6 — Sep 2026: second copy pass, cut hard. Dropped the standalone Ethos
 * section entirely (one sentence + a source list, redundant with the
 * per-item source tags in Work). Method cut from seven principles to the
 * four that actually differentiate: triage discipline, running the
 * institution's own numbers, independent re-verification, and right of
 * reply. About cut from five paragraphs to two. No section stays unless it
 * earns its length — a hiring manager skims, they do not read an essay.
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
      'Data and research on trafficking and child protection in the U.S., built from agencies’ own records and shipped with the code to re-run it.',
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

  work: {
    eyebrow: 'Work',
    title: 'What I am building.',
    subtitle:
      'Measurement work on trafficking and child protection — building or checking numbers nobody else has. Every project ships with its code and data-quality log.',
    note: 'In progress. Data, code and calculations are available on request — see Contact.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'The children’s facilities that keep losing children',
        dek: 'California requires every children’s facility to report law-enforcement contacts yearly, and to inspect facilities above average. I rebuilt four years of reports into one panel, reconciled against the state’s own subtotals — surfacing errors in the state’s own files along the way.',
        sources: ['California AB 388 reports', 'CDSS licensing file', 'CDSS complaint data'],
        status: 'Published',
        repoHref: 'https://github.com/mountmanu/ca-child-facility-audit',
        repoLabel: 'View repository',
      },
      {
        key: 'linkage-error',
        title: 'Nobody checks whether the victim counts add up',
        dek: 'US trafficking estimates match records across agencies on a coarse key. None of five published studies — or two HIV-surveillance studies checked as a control — correct for that key merging or missing people. My simulation puts the inflation near 13% at a 5% error rate; the fix was published in 2021, never run on real data.',
        sources: ['Published prevalence studies', 'Record-linkage benchmarks', 'Monte Carlo simulation'],
        status: 'Published · open finding',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'View repository',
      },
      {
        key: 'us-data-map',
        title: 'What US trafficking data actually exists',
        dek: 'A source-by-source audit of all 51 US jurisdictions: which trafficking datasets are genuinely obtainable, which are gated behind institutional standing, and which are advertised but not there. It keeps its own corrections in place — including two of my own errors, found and fixed in the open.',
        sources: ['51 US jurisdictions', 'ICPSR', 'CTDC', 'State open-data portals'],
        status: 'Published',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'View repository',
      },
      {
        key: 'cross-state',
        title: 'Does the California pattern hold anywhere else?',
        dek: 'California is the only state publishing facility-level law-enforcement contacts for children’s residential care. Comparing it to anything means rebuilding other states’ registers first — starting with North Carolina, whose licensing roster drops half its records under a naive parse. The rebuild recovers 93.6% of the state’s licence numbers.',
        sources: ['North Carolina · DHSR', 'CMS · Provider of Services', 'State licensing rosters'],
        status: 'In progress',
      },
    ],
  },

  method: {
    eyebrow: 'Method',
    title: 'How the work is built.',
    intro:
      'I came to this from building data systems, and point that toolkit at the systems meant to protect children and trafficking victims. I go get the records myself, and keep a written trail of how every number was arrived at — including the ones that didn’t survive.',
    principles: [
      {
        key: 'triage',
        title: 'Most candidates die',
        description:
          'Every question gets opened, and most get killed — someone already answered it, the records can’t carry the claim, or no institution is accountable. Dozens of ideas died before the four projects above, each logged with its reason.',
      },
      {
        key: 'own-numbers',
        title: 'I run the agency’s own numbers',
        description:
          'When a state publishes a reporting requirement, I rebuild the panel and reconcile it against the state’s own totals before it counts as a finding. Disagreements are the finding — and have already surfaced errors in a state’s files.',
      },
      {
        key: 'reproducible',
        title: 'Verified so it can be re-verified',
        description:
          'Numbers are recomputed by a second, independently written parser; source files are fingerprinted so anyone can pull the version I read. Every project carries a data-quality log, including my own bugs, and a list of what’s unverified.',
      },
      {
        key: 'right-of-reply',
        title: 'Fair before publication',
        description:
          'Nothing is stated as fact without a primary record behind it. Every named agency or operator gets the specific assertions I intend to publish, with a real deadline, and their answer runs alongside the finding.',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'It is already on the record.',
    paragraphs: [
      'The systems that fail children and trafficking victims are required by law to write down that they did, but almost none of it is counted. I turn those records into numbers an institution can be held to — two years building production data systems, after several years in business development, are enough to pull a file most analysts never open and stand behind the result. Most research questions I open die on the same screen, and I leave my own errors in the document rather than rewrite the conclusion.',
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
          'Available for contract work with research organizations, NGOs and agencies: building a dataset that doesn’t exist, auditing one that does, or getting records out of a badly-published system. Data, code and calculations before you commit to anything.',
        channelLabel: 'Email',
        channelValue: 'manuelfa92@gmail.com',
        href: 'mailto:manuelfa92@gmail.com',
      },
      {
        key: 'sources',
        label: 'For people inside the system',
        description:
          'If what’s recorded doesn’t match what you see, I protect people who come forward. Reach me by encrypted email; for anything sensitive, we’ll move to Signal. I will never name you without consent.',
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
      'Datos e investigación sobre trata y protección infantil en EE. UU., construido con los propios registros de las agencias y entregado con el código para volver a correrlo.',
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

  work: {
    eyebrow: 'Trabajo',
    title: 'Lo que estoy construyendo.',
    subtitle:
      'Trabajo de medición sobre trata y protección infantil — construir o verificar cifras que nadie más tiene. Cada proyecto se entrega con su código y su bitácora de calidad de datos.',
    note: 'En curso. Los datos, el código y los cálculos están disponibles a solicitud — ver Contacto.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'Las instalaciones infantiles a las que se les siguen yendo los niños',
        dek: 'California exige que toda instalación con menores reporte cada año sus contactos con la policía, e inspeccionar las que estén por encima del promedio. Reconstruí cuatro años de reportes en un solo panel, conciliado contra los subtotales del propio estado — revelando errores en los archivos del estado en el proceso.',
        sources: ['Reportes AB 388 de California', 'Archivo de licencias CDSS', 'Quejas CDSS'],
        status: 'Publicado',
        repoHref: 'https://github.com/mountmanu/ca-child-facility-audit',
        repoLabel: 'Ver repositorio',
      },
      {
        key: 'linkage-error',
        title: 'Nadie verifica si las cifras de víctimas cuadran',
        dek: 'Las estimaciones de trata en EE. UU. cruzan registros entre agencias con una llave burda. Ninguno de cinco estudios publicados — ni dos estudios de vigilancia de VIH revisados como control — corrige que esa llave funda o pierda personas. Mi simulación sitúa la inflación cerca del 13% con 5% de error; la corrección se publicó en 2021 y nunca se ha corrido sobre datos reales.',
        sources: ['Estudios de prevalencia publicados', 'Referencias de vinculación', 'Simulación Monte Carlo'],
        status: 'Publicado · hallazgo abierto',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'Ver repositorio',
      },
      {
        key: 'us-data-map',
        title: 'Qué datos de trata existen realmente en EE. UU.',
        dek: 'Una auditoría fuente por fuente de las 51 jurisdicciones de EE. UU.: qué bases de datos son obtenibles de verdad, cuáles están cerradas y cuáles se anuncian pero no están. Conserva sus propias correcciones — incluidos dos errores míos, encontrados y corregidos en público.',
        sources: ['51 jurisdicciones de EE. UU.', 'ICPSR', 'CTDC', 'Portales estatales de datos'],
        status: 'Publicado',
        repoHref: 'https://github.com/mountmanu/trafficking-data-map',
        repoLabel: 'Ver repositorio',
      },
      {
        key: 'cross-state',
        title: '¿El patrón de California se repite en otros estados?',
        dek: 'California es el único estado que publica, instalación por instalación, los contactos con la policía en atención residencial infantil. Compararla exige reconstruir primero otros estados — empezando por Carolina del Norte, cuyo padrón de licencias pierde la mitad de sus registros con una lectura ingenua. El padrón reconstruido recupera el 93.6% de los números de licencia.',
        sources: ['Carolina del Norte · DHSR', 'CMS · Provider of Services', 'Padrones estatales de licencias'],
        status: 'En curso',
      },
    ],
  },

  method: {
    eyebrow: 'Método',
    title: 'Cómo se construye el trabajo.',
    intro:
      'Llegué a esto desde la construcción de sistemas de datos, y apunto esa caja de herramientas a los sistemas que se supone protegen a los niños y a las víctimas de trata. Voy y consigo los registros yo mismo, y dejo un rastro escrito de cómo se obtuvo cada cifra — incluidas las que no sobrevivieron.',
    principles: [
      {
        key: 'triage',
        title: 'Casi todas las ideas mueren',
        description:
          'Cada pregunta se abre, y la mayoría se descarta — alguien ya la respondió, los registros no sostienen la afirmación, o ninguna institución responde por el daño. Decenas de ideas murieron antes de los cuatro proyectos de arriba, cada una registrada con su razón.',
      },
      {
        key: 'own-numbers',
        title: 'Corro los números de la propia agencia',
        description:
          'Cuando un estado publica una obligación de reporte, reconstruyo el panel y lo concilio contra los totales del propio estado antes de darlo por hallazgo. Las discrepancias son el hallazgo — y ya han revelado errores en los archivos de un estado.',
      },
      {
        key: 'reproducible',
        title: 'Verificado para poder reverificarse',
        description:
          'Las cifras se recalculan con un segundo lector escrito de forma independiente, y los archivos fuente se sellan de modo que cualquiera puede bajar la versión que leí. Cada proyecto lleva una bitácora de calidad de datos, incluidos mis propios errores, y una lista de lo que sigue sin verificar.',
      },
      {
        key: 'right-of-reply',
        title: 'Justo antes de publicar',
        description:
          'Nada se afirma como hecho si no lo sostiene un registro primario. Cada agencia u operador nombrado recibe las afirmaciones concretas que pienso publicar, con un plazo real, y su respuesta corre junto al hallazgo.',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Ya consta en los registros.',
    paragraphs: [
      'Los sistemas que le fallan a los niños y a las víctimas de trata están obligados por ley a dejar constancia de que lo hicieron, pero casi nada de eso se cuenta. Convierto esos registros en cifras por las que una institución puede responder — dos años construyendo sistemas de datos en producción, después de varios años en desarrollo de negocios, alcanzan para extraer un archivo que casi ningún analista abre y responder por el resultado. La mayoría de mis preguntas de investigación mueren en el mismo filtro, y dejo mis propios errores en el documento en vez de reescribir la conclusión.',
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
          'Disponible para trabajo por contrato con organizaciones de investigación, ONG y agencias: construir una base de datos que no existe, auditar una que sí, o sacar registros de un sistema que los publica mal. Datos, código y cálculos antes de comprometerse a nada.',
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
