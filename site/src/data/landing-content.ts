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
      'Independent data and research work on human trafficking and child protection in the United States — built from the administrative records agencies already publish, reconciled against those agencies’ own totals, and shipped with the code so anyone can re-run it.',
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
      'Primary sources, always. Every number starts in a record I pulled myself — and every number ships with the code to re-run it.',
    sources: sourceSystems,
  },

  work: {
    eyebrow: 'Work',
    title: 'What I am building.',
    subtitle:
      'Measurement work on trafficking and child protection: making a number that does not exist yet, or checking one that does. Each project is built from the records an agency already publishes, and each one ships with its code, its data-quality log, and its list of what is still unverified.',
    note: 'In progress. Data, code and calculations are available on request — see Contact.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'The children’s facilities that keep losing children',
        dek: 'Every California facility that houses children must report its law-enforcement contacts each year — runaways included — and the state must inspect any facility running above average. I rebuilt four years of those reports into a single panel, joined to the state licensing file and reconciled line by line against California’s own published subtotals, and identified the facilities that met the inspection trigger in every year of the window. The reconciliation surfaced errors in the state’s own files; a second, independently written parser exists specifically to check the first one.',
        sources: ['California AB 388 reports', 'CDSS licensing file', 'CDSS complaint data'],
        status: 'Built · not yet published',
      },
      {
        key: 'linkage-error',
        title: 'Nobody checks whether the victim counts add up',
        dek: 'US trafficking prevalence estimates are built by matching victim records across agencies on a deliberately coarse key — a couple of initials and some digits of a birth date. Across five real US studies, and two comparable HIV-surveillance studies checked as a control, not one corrects for that key merging two different people or missing that one person appears twice. A short simulation, anchored to published record-linkage benchmarks rather than a guess, puts the resulting inflation near 13% at a 5% per-record error rate. The statistical correction was published in 2021 and has never been run on real data, in any field.',
        sources: ['Published prevalence studies', 'Record-linkage benchmarks', 'Monte Carlo simulation'],
        status: 'Open finding · outreach drafted',
      },
      {
        key: 'us-data-map',
        title: 'What US trafficking data actually exists',
        dek: 'A source-by-source audit across all 51 US jurisdictions: which trafficking and child-welfare datasets are genuinely obtainable, which are gated behind institutional standing rather than a form, and which are advertised but not actually there. The document keeps its own corrections in place rather than quietly rewriting them — a state I first recorded as unreachable that turned out to be a local network failure, a federal file I said held no children’s facilities and does. The audit trail is part of the deliverable.',
        sources: ['51 US jurisdictions', 'ICPSR', 'CTDC', 'State open-data portals'],
        status: 'Complete · not yet published',
      },
      {
        key: 'cross-state',
        title: 'Does the California pattern hold anywhere else?',
        dek: 'California is the only state that publishes facility-level law-enforcement contacts for children’s residential care. To compare it to anything, the other states’ facility registers have to be rebuilt first — starting with North Carolina, whose licensing roster is published as a fixed-layout PDF that drops half its records under a naive parse. The rebuilt roster recovers 93.6% of the state’s distinct licence numbers, with every parser failure documented, and feeds a register of what each of the 51 jurisdictions does and does not publish about the facilities in its care.',
        sources: ['North Carolina · DHSR', 'CMS · Provider of Services', 'State licensing rosters'],
        status: 'In progress',
      },
    ],
  },

  method: {
    eyebrow: 'Method',
    title: 'How the work is built.',
    intro:
      'I came to this from building data systems, and I point that toolkit at the systems that are supposed to protect children and trafficking victims — which means I do not wait for a clean dataset to arrive, because in this field it never does. I go and get the records, and I keep a written trail of how every number was arrived at, including the ones that did not survive.',
    principles: [
      {
        key: 'triage',
        title: 'Most candidates die',
        description:
          'Every question gets opened, and most get killed — because someone has already answered it, because the records cannot carry the claim, or because the harm is real but no institution is accountable for it. Dozens of research ideas went through that screen before the four projects above; every one of the kills is logged with its reason and the prior work that made it redundant. What survives has already been tested against the literature.',
      },
      {
        key: 'documents-first',
        title: 'Records first',
        description:
          'Every fact begins in a primary record — a facility’s annual report, a licensing roster, a complaint file, a published prevalence study’s own methods section — read directly, never through a dashboard, a press release or a summary.',
      },
      {
        key: 'own-numbers',
        title: 'I run the agency’s own numbers',
        description:
          'When a state publishes a reporting requirement and an inspection threshold, I rebuild the panel myself and reconcile it against the totals the state itself publishes before it counts as a finding. Where the two disagree, the disagreement is the finding — and it has already turned up errors in a state’s own files. The arithmetic is the agency’s, not my characterization of it.',
      },
      {
        key: 'ai-human',
        title: 'AI-assisted, human-judged',
        description:
          'I use automation and AI to read at a scale a person cannot — hundreds of papers, every state’s open-data catalog, years of facility reports — to find the gap worth working on. Nothing it surfaces becomes a claim until a person has gone back to the source and confirmed it.',
      },
      {
        key: 'reproducible',
        title: 'Verified so it can be re-verified',
        description:
          'Load-bearing numbers are recomputed by a second, independently written parser, and source files are fingerprinted on download so the version I read is the version anyone else can pull. Every project carries a data-quality log — including the bugs found in my own first pass, written up rather than quietly fixed — and an explicit list of what has not been verified yet. Declaring the gap is part of the work, not an admission against it.',
      },
      {
        key: 'people',
        title: 'Practitioners, on the record',
        description:
          'The records say what happened; the people who work inside these systems say what it meant. Researchers, caseworkers, attorneys, advocates and agency staff go on the record, with consent. Where someone published a finding before I reached it, the credit is theirs and the work says so. Where a person is at risk, protecting them outranks the finding.',
      },
      {
        key: 'right-of-reply',
        title: 'Fair before publication',
        description:
          'Nothing is stated as fact unless a primary record supports it, and contested claims are attributed to their source. Every agency or operator named receives the specific factual assertions I intend to publish, enumerated, with a real deadline — and their answer runs alongside the finding. Every request and every deadline is logged, so silence is on the record too.',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'It is already on the record.',
    paragraphs: [
      'The systems that fail children and trafficking victims are, by law, required to write down that they did. Facilities file annual reports of every contact with law enforcement. Licensing agencies keep the complaints and the ownership. States publish the inspection rule they are supposed to follow. Almost none of it is counted, because counting it is slow, technical work that sits between two professions — the people with the domain knowledge usually cannot get the data out, and the people who can get data out do not know what they are looking at. That gap is the whole of my work.',
      'What I do, concretely, is turn a pile of published-but-unusable records into a number an institution can be held to. Four years of state facility reports, parsed out of spreadsheets whose column headers change every year, joined to a licensing file that formats its own key differently, and reconciled against the state’s own published subtotals until they agree. A prevalence estimate taken apart to find the assumption nobody tested. A fifty-one-jurisdiction map of which datasets are real, which are gated, and which are advertised and simply not there — so the next person does not spend a week finding out.',
      'The technical half is not a detour from the subject; it is what makes the subject reachable. I spent the last two years building production data systems for paying clients — a hospital, a notary, a restaurant group — after several years in business development and project management. That is enough to pull a file most analysts never open, write the parser when it arrives broken, catch the joins that silently drop ten percent of the rows, and stand behind the result because a second, independently written program checked the first one. Every project ships with its code, its data-quality log, and its list of what remains unverified.',
      'The judgment half matters just as much, and it is the part that cannot be automated. Most of what I open never becomes anything. Dozens of research questions have gone through the same screen — is the harm real, is anyone accountable for it, can the records carry it, and has someone already answered it — and the great majority are killed, each with its reason written down. I have also been wrong inside this work and left the correction in the document rather than rewriting the conclusion: a state I recorded as unreachable that was my own network failing, a federal file I said was empty and was not. Research you can trust is research that shows you where it broke.',
      'I studied rhetoric and writing at the University of Texas at Austin, and I work from the Texas–Mexico border — a dual citizen, in either language. All of the work described here is built on United States federal and state records.',
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    subtitle:
      'For research and policy teams, for people inside these systems, and for collaborators. I read everything myself and respond quickly.',
    doors: [
      {
        key: 'commissions',
        label: 'For research & policy teams',
        description:
          'Available for contract and collaborative work with research organizations, NGOs and agencies: building a dataset that does not exist yet, auditing one that does, replicating a published estimate against its own sources, or getting records out of a system that publishes them badly. You can have the data, the code and the calculations before you commit to anything.',
        channelLabel: 'Email',
        channelValue: 'manuel.flores.7@protonmail.com',
        href: 'mailto:manuel.flores.7@protonmail.com',
      },
      {
        key: 'sources',
        label: 'For people inside the system',
        description:
          'If you work in a facility, an agency or a service provider and what gets recorded does not match what you see, I protect the people who come forward. Reach me first by encrypted email; for anything sensitive, ask and we will move to Signal. I will never name you without your consent.',
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
      'Trabajo independiente de datos e investigación sobre trata de personas y protección infantil en Estados Unidos — construido con los registros administrativos que las propias agencias ya publican, conciliado contra los totales que esas mismas agencias declaran, y entregado con el código para que cualquiera pueda volver a correrlo.',
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
      'Fuentes primarias, siempre. Cada cifra empieza en un registro que extraje yo mismo — y cada cifra se entrega con el código para volver a calcularla.',
    sources: sourceSystems,
  },

  work: {
    eyebrow: 'Trabajo',
    title: 'Lo que estoy construyendo.',
    subtitle:
      'Trabajo de medición sobre trata y protección infantil: construir una cifra que todavía no existe, o verificar una que sí. Cada proyecto se construye con los registros que una agencia ya publica, y cada uno se entrega con su código, su bitácora de calidad de datos y su lista de lo que sigue sin verificar.',
    note: 'En curso. Los datos, el código y los cálculos están disponibles a solicitud — ver Contacto.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'Las instalaciones infantiles a las que se les siguen yendo los niños',
        dek: 'Toda instalación de California que alberga menores debe reportar cada año sus contactos con la policía — fugas incluidas — y el estado debe inspeccionar aquellas que estén por encima del promedio. Reconstruí cuatro años de esos reportes en un solo panel, unido al archivo estatal de licencias y conciliado línea por línea contra los subtotales que la propia California publica, e identifiqué las instalaciones que activaron el criterio de inspección en todos los años del periodo. La conciliación reveló errores en los propios archivos del estado; existe un segundo lector, escrito de forma independiente, con el único fin de verificar al primero.',
        sources: ['Reportes AB 388 de California', 'Archivo de licencias CDSS', 'Quejas CDSS'],
        status: 'Construido · aún sin publicar',
      },
      {
        key: 'linkage-error',
        title: 'Nadie verifica si las cifras de víctimas cuadran',
        dek: 'Las estimaciones de prevalencia de trata en EE. UU. se construyen cruzando registros de víctimas entre agencias con una llave deliberadamente burda — un par de iniciales y algunos dígitos de la fecha de nacimiento. En cinco estudios reales de EE. UU., y en dos estudios comparables de vigilancia de VIH revisados como control, ninguno corrige la posibilidad de que esa llave funda a dos personas distintas o no reconozca que una misma persona aparece dos veces. Una simulación breve, anclada en referencias publicadas de error de vinculación y no en una suposición, sitúa la inflación resultante cerca del 13% con una tasa de error del 5% por registro. La corrección estadística se publicó en 2021 y nunca se ha corrido sobre datos reales, en ningún campo.',
        sources: ['Estudios de prevalencia publicados', 'Referencias de vinculación', 'Simulación Monte Carlo'],
        status: 'Hallazgo abierto · contacto redactado',
      },
      {
        key: 'us-data-map',
        title: 'Qué datos de trata existen realmente en EE. UU.',
        dek: 'Una auditoría fuente por fuente de las 51 jurisdicciones de EE. UU.: qué bases de datos de trata y bienestar infantil se pueden obtener de verdad, cuáles están cerradas detrás de una posición institucional y no de un formulario, y cuáles se anuncian pero simplemente no están. El documento conserva sus propias correcciones en vez de reescribirlas en silencio — un estado que registré como inalcanzable y resultó ser una falla de mi propia red, un archivo federal del que dije que no tenía instalaciones infantiles y sí las tiene. El rastro de auditoría es parte del entregable.',
        sources: ['51 jurisdicciones de EE. UU.', 'ICPSR', 'CTDC', 'Portales estatales de datos'],
        status: 'Completo · aún sin publicar',
      },
      {
        key: 'cross-state',
        title: '¿El patrón de California se repite en otros estados?',
        dek: 'California es el único estado que publica, instalación por instalación, los contactos con la policía en la atención residencial infantil. Para compararla con algo, primero hay que reconstruir los registros de instalaciones de los demás estados — empezando por Carolina del Norte, cuyo padrón de licencias se publica como un PDF de formato fijo que pierde la mitad de sus registros con una lectura ingenua. El padrón reconstruido recupera el 93.6% de los números de licencia distintos del estado, con cada falla del lector documentada, y alimenta un registro de lo que cada una de las 51 jurisdicciones publica y no publica sobre las instalaciones a su cargo.',
        sources: ['Carolina del Norte · DHSR', 'CMS · Provider of Services', 'Padrones estatales de licencias'],
        status: 'En curso',
      },
    ],
  },

  method: {
    eyebrow: 'Método',
    title: 'Cómo se construye el trabajo.',
    intro:
      'Llegué a esto desde la construcción de sistemas de datos, y apunto esa caja de herramientas a los sistemas que se supone protegen a los niños y a las víctimas de trata — lo que significa que no espero a que llegue una base de datos limpia, porque en este campo nunca llega. Voy y consigo los registros, y dejo un rastro escrito de cómo se obtuvo cada cifra, incluidas las que no sobrevivieron.',
    principles: [
      {
        key: 'triage',
        title: 'Casi todas las ideas mueren',
        description:
          'Cada pregunta se abre, y la mayoría se descarta — porque alguien ya la respondió, porque los registros no sostienen la afirmación, o porque el daño es real pero ninguna institución responde por él. Decenas de ideas de investigación pasaron por ese filtro antes de los cuatro proyectos de arriba; cada descarte queda registrado con su razón y con el trabajo previo que lo volvió redundante. Lo que sobrevive ya fue probado contra la literatura.',
      },
      {
        key: 'documents-first',
        title: 'Primero los registros',
        description:
          'Cada dato empieza en un registro primario — el reporte anual de una instalación, un padrón de licencias, un expediente de quejas, la sección de métodos de un estudio de prevalencia publicado — leído directamente, nunca a través de un tablero, un boletín ni un resumen.',
      },
      {
        key: 'own-numbers',
        title: 'Corro los números de la propia agencia',
        description:
          'Cuando un estado publica una obligación de reporte y un umbral de inspección, reconstruyo el panel yo mismo y lo concilio contra los totales que el propio estado publica antes de darlo por hallazgo. Donde los dos no coinciden, la discrepancia es el hallazgo — y ya ha revelado errores en los archivos de un estado. La aritmética es de la agencia, no mi caracterización de ella.',
      },
      {
        key: 'ai-human',
        title: 'Asistido por IA, juzgado por una persona',
        description:
          'Uso automatización e IA para leer a una escala imposible para una persona — cientos de artículos, el catálogo de datos abiertos de cada estado, años de reportes de instalaciones — y encontrar el hueco en el que vale la pena trabajar. Nada de lo que aparece se vuelve una afirmación hasta que una persona vuelve a la fuente y lo confirma.',
      },
      {
        key: 'reproducible',
        title: 'Verificado para poder reverificarse',
        description:
          'Las cifras que sostienen un hallazgo se recalculan con un segundo lector escrito de forma independiente, y los archivos fuente se sellan al descargarlos, de modo que la versión que yo leí es la versión que cualquiera puede bajar. Cada proyecto lleva una bitácora de calidad de datos — incluidos los errores que encontré en mi propia primera versión, documentados en vez de corregidos en silencio — y una lista explícita de lo que aún no se ha verificado. Declarar el hueco es parte del trabajo, no una confesión en su contra.',
      },
      {
        key: 'people',
        title: 'Profesionales, en el registro público',
        description:
          'Los registros dicen qué pasó; las personas que trabajan dentro de estos sistemas dicen qué significó. Investigadores, trabajadores sociales, abogados, defensores y personal de las agencias hablan para el registro, con consentimiento. Cuando alguien publicó un hallazgo antes de que yo llegara a él, el crédito es suyo y el trabajo lo dice. Cuando una persona está en riesgo, protegerla vale más que el hallazgo.',
      },
      {
        key: 'right-of-reply',
        title: 'Justo antes de publicar',
        description:
          'Nada se afirma como hecho si no lo sostiene un registro primario, y las afirmaciones en disputa se atribuyen a su fuente. Cada agencia u operador nombrado recibe las afirmaciones concretas que pienso publicar, enumeradas y con un plazo real — y su respuesta corre junto al hallazgo. Cada solicitud y cada plazo quedan registrados, de modo que el silencio también consta.',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Ya consta en los registros.',
    paragraphs: [
      'Los sistemas que le fallan a los niños y a las víctimas de trata están obligados por ley a dejar constancia de que lo hicieron. Las instalaciones reportan cada año todos sus contactos con la policía. Las agencias de licencias guardan las quejas y la propiedad. Los estados publican la regla de inspección que se supone deben seguir. Casi nada de eso se cuenta, porque contarlo es un trabajo lento y técnico que cae entre dos profesiones — quienes tienen el conocimiento del tema normalmente no pueden sacar los datos, y quienes pueden sacar datos no saben qué están viendo. Ese hueco es, entero, mi trabajo.',
      'Lo que hago, en concreto, es convertir un montón de registros publicados pero inutilizables en una cifra por la que una institución puede responder. Cuatro años de reportes estatales de instalaciones, extraídos de hojas de cálculo cuyos encabezados cambian cada año, unidos a un archivo de licencias que formatea su propia llave de otra manera, y conciliados contra los subtotales que el propio estado publica hasta que coinciden. Una estimación de prevalencia desarmada para encontrar el supuesto que nadie probó. Un mapa de 51 jurisdicciones sobre qué bases de datos son reales, cuáles están cerradas y cuáles se anuncian y simplemente no están — para que la siguiente persona no pierda una semana averiguándolo.',
      'La mitad técnica no es un desvío del tema; es lo que hace que el tema sea alcanzable. Pasé los últimos dos años construyendo sistemas de datos en producción para clientes que pagan — un hospital, una notaría, un grupo restaurantero — después de varios años en desarrollo de negocios y gestión de proyectos. Eso alcanza para extraer un archivo que casi ningún analista abre, escribir el lector cuando llega roto, detectar las uniones que en silencio descartan el diez por ciento de los registros, y responder por el resultado porque un segundo programa, escrito de forma independiente, verificó al primero. Cada proyecto se entrega con su código, su bitácora de calidad de datos y su lista de lo que sigue sin verificar.',
      'La mitad de criterio pesa igual, y es la parte que no se puede automatizar. La mayor parte de lo que abro nunca se vuelve nada. Decenas de preguntas de investigación han pasado por el mismo filtro — si el daño es real, si alguien responde por él, si los registros lo sostienen y si alguien ya la respondió — y la gran mayoría se descarta, cada una con su razón por escrito. También me he equivocado dentro de este trabajo y he dejado la corrección en el documento en vez de reescribir la conclusión: un estado que registré como inalcanzable y era mi propia red fallando, un archivo federal que dije que estaba vacío y no lo estaba. La investigación en la que se puede confiar es la que te muestra dónde se rompió.',
      'Estudié retórica y escritura en la Universidad de Texas en Austin, y trabajo desde la frontera Texas–México — con doble nacionalidad, en cualquiera de los dos idiomas. Todo el trabajo aquí descrito está construido sobre registros federales y estatales de Estados Unidos.',
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos.',
    subtitle:
      'Para equipos de investigación y política pública, para quienes están dentro de estos sistemas, y para colaboradores. Leo todo yo mismo y respondo rápido.',
    doors: [
      {
        key: 'commissions',
        label: 'Investigación y política pública',
        description:
          'Disponible para trabajo por contrato y colaborativo con organizaciones de investigación, ONG y agencias: construir una base de datos que todavía no existe, auditar una que sí, replicar una estimación publicada contra sus propias fuentes, o sacar registros de un sistema que los publica mal. Puede tener los datos, el código y los cálculos antes de comprometerse a nada.',
        channelLabel: 'Correo',
        channelValue: 'manuel.flores.7@protonmail.com',
        href: 'mailto:manuel.flores.7@protonmail.com',
      },
      {
        key: 'sources',
        label: 'Para quienes están dentro',
        description:
          'Si trabajas en una instalación, una agencia o un proveedor de servicios y lo que queda registrado no coincide con lo que ves, protejo a quienes se acercan. Escríbeme primero por correo cifrado; para algo sensible, pídelo y pasamos a Signal. Nunca te nombraré sin tu consentimiento.',
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
    location: 'Frontera Texas–México · Trabajo en inglés y español',
  },

  footer: 'Manuel Flores · Datos e investigación sobre trata y protección infantil',
};
