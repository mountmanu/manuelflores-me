/**
 * Canonical content for the public site — manuelflores.me
 *
 * Positioning: independent DATA & RESEARCH work on human trafficking and child
 * protection in the United States. The engineering background is framed as
 * measurement capability (getting records nobody else can get, and making them
 * countable), never as a software portfolio. The accountability-journalism
 * track is kept, but as the adjacent second half of the same method.
 *
 * One source of truth, two language variants. Keep EN and ES in lock-step —
 * anything in EN must have its ES counterpart, and vice versa.
 *
 * Disclosure discipline: work in progress is described at the level of the
 * question and the source, never with facility names, dockets or identifiable
 * subjects ahead of publication.
 *
 * v3 — Jul 2026: repositioning from Sales-Engineer portfolio to investigative
 * journalism. Interfaces rebuilt: ethos, investigations, method, three doors.
 *
 * v4 — Aug 2026: sourcing and verification update; Method widened to seven.
 *
 * v5 — Sep 2026: repositioning to trafficking / child-protection data and
 * research. Hero video removed (see hero.cover below — the slot is left in
 * place and commented, ready for the replacement asset). `investigations`
 * renamed to `work`; the first three items are the trafficking and
 * child-protection projects, the last three the adjacent accountability
 * reporting that uses the same method. Source strip, About and the first
 * contact door rewritten for research and policy audiences.
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
  'CDSS licensing data',
  'NC · DHSR',
  'CMS · Provider of Services',
  'ICPSR',
  'CTDC',
  'Federal Register',
  'Federal courts (PACER)',
  'State open-data portals',
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
    // With no `cover`, the hero falls back to the dark editorial gradient in
    // LandingPage.tsx, which is a finished look on its own. To restore the
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
      'The first three are measurement work on trafficking and child protection: making a number that does not exist yet, or checking one that does. The last three apply the same method to the wider accountability record — the same institutions, the same documents, the same arithmetic.',
    note: 'In progress. Data, code and calculations are available on request — see Contact.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'The children’s facilities that keep losing children',
        dek: 'Every California facility that houses children must report its law-enforcement contacts each year, and the state must inspect any facility running above average. I rebuilt four years of those reports into a single panel — joined to the state licensing file and reconciled line by line against California’s own published subtotals — and identified the facilities that met the inspection trigger in every year of the window. The reconciliation surfaced errors in the state’s own files; a second, independently written parser exists specifically to check the first one.',
        sources: ['California AB 388 reports', 'CDSS licensing file', 'CDSS complaint data'],
        status: 'Built · not yet published',
      },
      {
        key: 'linkage-error',
        title: 'Nobody checks whether the victim counts add up',
        dek: 'US trafficking prevalence estimates are built by matching victim records across agencies on a deliberately coarse key — a couple of initials and some digits of a birth date. Across five real US studies, and two comparable HIV-surveillance studies checked as a control, not one corrects for that key merging two different people or missing that one person appears twice. A short simulation, anchored to published record-linkage benchmarks rather than a guess, puts the resulting inflation near 13% at a 5% per-record error rate. The statistical correction was published in 2021 and has never been run on real data, in any field.',
        sources: ['Published MSE studies', 'Record-linkage benchmarks', 'Monte Carlo simulation'],
        status: 'Open finding · outreach drafted',
      },
      {
        key: 'us-data-map',
        title: 'What US trafficking data actually exists',
        dek: 'A source-by-source audit across all 51 US jurisdictions: which trafficking and child-welfare datasets are genuinely obtainable, which are gated behind institutional standing rather than a form, and which are advertised but not actually there. The document keeps its own corrections in place rather than quietly rewriting them — a state I first recorded as unreachable that turned out to be a local resolver failure, a federal file I said held no children’s facilities and does. The audit trail is part of the deliverable.',
        sources: ['51 US jurisdictions', 'ICPSR', 'CTDC', 'State open-data portals'],
        status: 'Complete · not yet published',
      },
      {
        key: 'pe-healthcare',
        title: 'Private equity in American healthcare',
        dek: 'How private-equity owners route money and liability out of the homes that care for the elderly — a facility’s ownership followed through the shell entities in CMS federal ownership data, related-party rent verified at the worksheet level in HCRIS Medicare cost reports, the federal wrongful-death docket read line by line.',
        sources: ['HCRIS cost reports', 'CMS ownership data', 'PACER / RECAP'],
        status: 'In progress',
      },
      {
        key: 'surveillance-economics',
        title: 'The economics of immigration surveillance',
        dek: 'A longitudinal read of ICE’s own detention-management data, documenting the quiet migration from a phone check-in app to the GPS ankle monitor — and following the money to the contractors who profit from the switch.',
        sources: ['ICE detention data', 'Federal contracts'],
        status: 'In progress',
      },
      {
        key: 'safety-pay',
        title: 'What a worker’s death costs a bonus',
        dek: 'Utilities grade their executives’ annual bonuses partly on how many workers are seriously injured or killed. The targets, the carve-outs, and whether contractors are counted at all are already disclosed — in compensation filings and sustainability templates that are almost never read against each other, or against the year’s actual fatalities.',
        sources: ['Proxy statements', 'EEI · AGA templates', 'OSHA inspections'],
        status: 'In progress',
      },
    ],
  },

  method: {
    eyebrow: 'Method',
    title: 'How the work is built.',
    intro:
      'I came to this from data and software, and I point that toolkit at institutions that would rather not be measured — which means I do not wait for the dataset to arrive clean, or at all. I go and get the records, and I keep a written trail of how every number was arrived at, including the ones that did not survive.',
    principles: [
      {
        key: 'triage',
        title: 'Most candidates die',
        description:
          'Every lead gets opened, and most get killed — because someone already owns the question, because the records cannot carry the claim, or because the harm is real but no one is accountable for it. Hundreds have gone through that screen; a handful survive. Each kill is logged with its reason, so what reaches a reader has already survived something.',
      },
      {
        key: 'documents-first',
        title: 'Documents first',
        description:
          'Every fact begins in a primary source — a licensing file, an annual facility report, a court filing, a proposed rule — read directly, never through a press release, a dashboard or a summary.',
      },
      {
        key: 'own-numbers',
        title: 'I run the institution’s own numbers',
        description:
          'When an agency publishes a reporting requirement, a scoring formula or an enforcement file, I rebuild it and run it myself, then reconcile the result against the agency’s own published totals before it counts as a finding. Where they disagree, the disagreement is the finding. The arithmetic is the institution’s, not my characterization of it.',
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
          'Load-bearing numbers are recomputed by a second, independently written parser, and source documents are fingerprinted on download so the version I read is the version anyone else can pull. Every finding carries a data-quality log — including the bugs found in my own first pass, written up rather than quietly fixed — and an explicit list of what has not been verified yet. Declaring the gap is part of the work, not an admission against it.',
      },
      {
        key: 'people',
        title: 'People, on the record',
        description:
          'The records say what happened; people say what it meant. Practitioners, attorneys, academics, advocates and agency press offices go on the record, with consent. Where someone published a finding before I reached it, the credit is theirs and the work says so. Where a source is at risk, protecting them outranks the finding.',
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
      'The systems that fail children and trafficking victims are, by law, required to write down that they did. Facilities file annual reports of every contact with law enforcement. Licensing agencies keep the complaints and the ownership. Agencies publish the inspection rule they are supposed to follow. Almost none of it is counted, because counting it is slow, technical work that sits between two professions — the people with the domain knowledge usually cannot get the data out, and the people who can get data out do not know what they are looking at. That gap is the whole of my work.',
      'What I do, concretely, is turn a pile of published-but-unusable records into a number an institution can be held to. Four years of state facility reports, parsed out of spreadsheets whose column headers change every year, joined to a licensing file that formats its own key differently, and reconciled against the state’s own published subtotals until they agree. A prevalence estimate taken apart to find the assumption nobody tested. A fifty-one-jurisdiction map of which datasets are real, which are gated, and which are advertised and simply not there — so the next person does not spend a week finding out.',
      'The technical half is not a detour from the subject; it is what makes the subject reachable. Eight-plus years building production data and software systems means I can pull a file most analysts never open, write the parser when it arrives broken, catch the joins that silently drop ten percent of the rows, and stand behind the result because a second, independently written program checked the first one. Every project ships with its code, its data-quality log, and its list of what remains unverified.',
      'The judgment half matters just as much, and it is the part that cannot be automated. Most of what I open never becomes anything. Hundreds of candidates have gone through the same screen — is the harm real, is anyone accountable for it, can the records carry it, and does someone already own the question — and the great majority are killed, each with its reason written down. I have also been wrong in public inside this work and left the correction in the document rather than rewriting the conclusion: a state I recorded as unreachable that was my own network failing, a federal file I said was empty and was not. Research you can trust is research that shows you where it broke.',
      'The same method runs on the wider accountability record, which is why the second half of the work looks the way it does: private-equity ownership routed out of nursing homes through shell entities in federal data, immigration enforcement migrating from a phone app to a GPS ankle monitor, a bonus formula in which a worker’s death is a line item with a target attached. Same institutions, same documents, same arithmetic — different subject.',
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
          'Available for contract and collaborative work with research organizations, NGOs, agencies and newsrooms: building a dataset that does not exist yet, auditing one that does, replicating a published estimate against its own sources, or getting records out of a system that publishes them badly. You can have the data, the code and the calculations before you commit to anything.',
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
    // Sin `cover`, el hero usa el degradado oscuro de LandingPage.tsx, que
    // funciona por sí solo. Para restaurar el hero cinematográfico: coloca el
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
      'Los primeros tres son trabajo de medición sobre trata y protección infantil: construir una cifra que todavía no existe, o verificar una que sí. Los últimos tres aplican el mismo método al registro más amplio de rendición de cuentas — las mismas instituciones, los mismos documentos, la misma aritmética.',
    note: 'En curso. Los datos, el código y los cálculos están disponibles a solicitud — ver Contacto.',
    items: [
      {
        key: 'ab388-runaways',
        title: 'Las instalaciones infantiles a las que se les siguen yendo los niños',
        dek: 'Toda instalación de California que alberga menores debe reportar cada año sus contactos con la policía, y el estado debe inspeccionar aquellas que estén por encima del promedio. Reconstruí cuatro años de esos reportes en un solo panel — unido al archivo estatal de licencias y conciliado línea por línea contra los subtotales que la propia California publica — e identifiqué las instalaciones que activaron el criterio de inspección en todos los años del periodo. La conciliación reveló errores en los propios archivos del estado; existe un segundo lector, escrito de forma independiente, con el único fin de verificar al primero.',
        sources: ['Reportes AB 388 de California', 'Archivo de licencias CDSS', 'Quejas CDSS'],
        status: 'Construido · aún sin publicar',
      },
      {
        key: 'linkage-error',
        title: 'Nadie verifica si las cifras de víctimas cuadran',
        dek: 'Las estimaciones de prevalencia de trata en EE. UU. se construyen cruzando registros de víctimas entre agencias con una llave deliberadamente burda — un par de iniciales y algunos dígitos de la fecha de nacimiento. En cinco estudios reales de EE. UU., y en dos estudios comparables de vigilancia de VIH revisados como control, ninguno corrige la posibilidad de que esa llave funda a dos personas distintas o no reconozca que una misma persona aparece dos veces. Una simulación breve, anclada en referencias publicadas de error de vinculación y no en una suposición, sitúa la inflación resultante cerca del 13% con una tasa de error del 5% por registro. La corrección estadística se publicó en 2021 y nunca se ha corrido sobre datos reales, en ningún campo.',
        sources: ['Estudios MSE publicados', 'Referencias de vinculación', 'Simulación Monte Carlo'],
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
        key: 'pe-healthcare',
        title: 'Capital privado en la salud estadounidense',
        dek: 'Cómo los dueños de capital privado sacan dinero y responsabilidad de las residencias que cuidan a los adultos mayores — la propiedad de una instalación seguida a través de las sociedades pantalla en los datos federales de propiedad de CMS, la renta entre partes relacionadas verificada a nivel de hoja de trabajo en los reportes de costos HCRIS de Medicare, el expediente federal por muerte culposa leído línea por línea.',
        sources: ['Reportes HCRIS', 'Datos de propiedad CMS', 'PACER / RECAP'],
        status: 'En curso',
      },
      {
        key: 'surveillance-economics',
        title: 'La economía de la vigilancia migratoria',
        dek: 'Una lectura longitudinal de los propios datos de gestión de detención de ICE, que documenta la migración silenciosa de una app de registro telefónico al grillete GPS — y sigue el dinero hasta los contratistas que lucran con el cambio.',
        sources: ['Datos de detención de ICE', 'Contratos federales'],
        status: 'En curso',
      },
      {
        key: 'safety-pay',
        title: 'Lo que la muerte de un trabajador le cuesta a un bono',
        dek: 'Las empresas de servicios públicos califican el bono anual de sus ejecutivos, en parte, según cuántos trabajadores resultan gravemente heridos o muertos. Las metas, las excepciones y si los contratistas cuentan siquiera ya están declaradas — en los reportes de compensación y en las plantillas de sostenibilidad que casi nunca se leen entre sí, ni contra las muertes efectivas del año.',
        sources: ['Reportes de compensación', 'Plantillas EEI · AGA', 'Inspecciones OSHA'],
        status: 'En curso',
      },
    ],
  },

  method: {
    eyebrow: 'Método',
    title: 'Cómo se construye el trabajo.',
    intro:
      'Llegué a esto desde los datos y el software, y apunto esa caja de herramientas a instituciones que preferirían no ser medidas — lo que significa que no espero a que la base de datos llegue limpia, ni que llegue. Voy y consigo los registros, y dejo un rastro escrito de cómo se obtuvo cada cifra, incluidas las que no sobrevivieron.',
    principles: [
      {
        key: 'triage',
        title: 'Casi todas las ideas mueren',
        description:
          'Cada pista se abre, y la mayoría se descarta — porque alguien más ya es dueño de la pregunta, porque los registros no sostienen la afirmación, o porque el daño es real pero nadie responde por él. Cientos han pasado por ese filtro; sobreviven unas cuantas. Cada descarte queda registrado con su razón, de modo que lo que llega a un lector ya sobrevivió a algo.',
      },
      {
        key: 'documents-first',
        title: 'Primero los documentos',
        description:
          'Cada dato empieza en una fuente primaria — un archivo de licencias, un reporte anual de una instalación, un expediente judicial, una norma propuesta — leído directamente, nunca a través de un boletín, un tablero ni un resumen.',
      },
      {
        key: 'own-numbers',
        title: 'Corro los números de la propia institución',
        description:
          'Cuando una agencia publica una obligación de reporte, una fórmula de calificación o un archivo de sanciones, la reconstruyo y la corro yo mismo, y luego concilio el resultado contra los totales que esa misma agencia publica antes de darlo por hallazgo. Donde no coinciden, la discrepancia es el hallazgo. La aritmética es de la institución, no mi caracterización de ella.',
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
          'Las cifras que sostienen un hallazgo se recalculan con un segundo lector escrito de forma independiente, y los documentos fuente se sellan al descargarlos, de modo que la versión que yo leí es la versión que cualquiera puede bajar. Cada hallazgo lleva una bitácora de calidad de datos — incluidos los errores que encontré en mi propia primera versión, documentados en vez de corregidos en silencio — y una lista explícita de lo que aún no se ha verificado. Declarar el hueco es parte del trabajo, no una confesión en su contra.',
      },
      {
        key: 'people',
        title: 'Personas, en el registro público',
        description:
          'Los registros dicen qué pasó; las personas dicen qué significó. Profesionales, abogados, académicos, defensores y oficinas de prensa hablan para el registro, con consentimiento. Cuando alguien publicó un hallazgo antes de que yo llegara a él, el crédito es suyo y el trabajo lo dice. Cuando una fuente está en riesgo, protegerla vale más que el hallazgo.',
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
    title: 'Ya consta en los registros.',
    paragraphs: [
      'Los sistemas que le fallan a los niños y a las víctimas de trata están obligados por ley a dejar constancia de que lo hicieron. Las instalaciones reportan cada año todos sus contactos con la policía. Las agencias de licencias guardan las quejas y la propiedad. Las agencias publican la regla de inspección que se supone deben seguir. Casi nada de eso se cuenta, porque contarlo es un trabajo lento y técnico que cae entre dos profesiones — quienes tienen el conocimiento del tema normalmente no pueden sacar los datos, y quienes pueden sacar datos no saben qué están viendo. Ese hueco es, entero, mi trabajo.',
      'Lo que hago, en concreto, es convertir un montón de registros publicados pero inutilizables en una cifra por la que una institución puede responder. Cuatro años de reportes estatales de instalaciones, extraídos de hojas de cálculo cuyos encabezados cambian cada año, unidos a un archivo de licencias que formatea su propia llave de otra manera, y conciliados contra los subtotales que el propio estado publica hasta que coinciden. Una estimación de prevalencia desarmada para encontrar el supuesto que nadie probó. Un mapa de 51 jurisdicciones sobre qué bases de datos son reales, cuáles están cerradas y cuáles se anuncian y simplemente no están — para que la siguiente persona no pierda una semana averiguándolo.',
      'La mitad técnica no es un desvío del tema; es lo que hace que el tema sea alcanzable. Más de ocho años construyendo sistemas de datos y software en producción significan que puedo extraer un archivo que casi ningún analista abre, escribir el lector cuando llega roto, detectar las uniones que en silencio descartan el diez por ciento de los registros, y responder por el resultado porque un segundo programa, escrito de forma independiente, verificó al primero. Cada proyecto se entrega con su código, su bitácora de calidad de datos y su lista de lo que sigue sin verificar.',
      'La mitad de criterio pesa igual, y es la parte que no se puede automatizar. La mayor parte de lo que abro nunca se vuelve nada. Cientos de candidatas han pasado por el mismo filtro — si el daño es real, si alguien responde por él, si los registros lo sostienen y si alguien ya es dueño de la pregunta — y la gran mayoría se descarta, cada una con su razón por escrito. También me he equivocado en público dentro de este trabajo y he dejado la corrección en el documento en vez de reescribir la conclusión: un estado que registré como inalcanzable y era mi propia red fallando, un archivo federal que dije que estaba vacío y no lo estaba. La investigación en la que se puede confiar es la que te muestra dónde se rompió.',
      'El mismo método corre sobre el registro más amplio de rendición de cuentas, y por eso la segunda mitad del trabajo se ve como se ve: propiedad de capital privado sacada de las residencias de ancianos a través de sociedades pantalla en datos federales, la vigilancia migratoria pasando de una app telefónica a un grillete GPS, una fórmula de bonos en la que la muerte de un trabajador es una partida con una meta asignada. Mismas instituciones, mismos documentos, misma aritmética — otro tema.',
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
          'Disponible para trabajo por contrato y colaborativo con organizaciones de investigación, ONG, agencias y redacciones: construir una base de datos que todavía no existe, auditar una que sí, replicar una estimación publicada contra sus propias fuentes, o sacar registros de un sistema que los publica mal. Puede tener los datos, el código y los cálculos antes de comprometerse a nada.',
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
