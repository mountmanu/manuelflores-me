/**
 * Canonical content for the public site — manuelflores.me
 *
 * v7 — Oct 2026: the site is now the landing version of Manuel's CV. Data and
 * technology for businesses: client projects delivered through LINCE Sistemas,
 * own projects, career, skills and education. The previous trafficking and
 * child-protection research positioning lives in git history (v6).
 *
 * Honesty rules, from Manuel's own CV audit:
 * - Every claim must match the verified CV. Status lines say exactly what the
 *   project is: delivered and invoiced, in use, client project, demo.
 * - Never: "caught real price-gouging", "pilot converted to contract",
 *   "100+ beds", "11+ production systems", "zero churn", ML at Doña Tota.
 * - No employer-specific plans on this public page.
 *
 * Spanish is the default language (/), English lives at /en. Keep both in
 * lock-step — anything in one must have its counterpart in the other.
 */

export interface ProjectContent {
  key: string;
  title: string;
  /** Client or context, shown above the title. */
  client: string;
  dek: string;
  /** Technologies. Not translated. */
  stack: string[];
  /** Honest status line. */
  status: string;
}

export interface RoleContent {
  key: string;
  role: string;
  org: string;
  period: string;
  orgHref?: string;
  points: string[];
}

export interface SkillRow {
  key: string;
  label: string;
  value: string;
}

export interface ContactDoor {
  key: 'email' | 'company' | 'github' | 'linkedin';
  label: string;
  description: string;
  channelValue: string;
  href: string;
}

export interface SiteContent {
  lang: 'en' | 'es';
  altLangLabel: string;
  altLangHref: string;
  home: string;

  nav: {
    projects: string;
    career: string;
    skills: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    headline: { lead: string; emphasis: string };
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    cover?: { poster: string; video?: string; alt: string };
  };

  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ProjectContent[];
  };

  career: {
    eyebrow: string;
    title: string;
    intro: string;
    roles: RoleContent[];
  };

  skills: {
    eyebrow: string;
    title: string;
    rows: SkillRow[];
  };

  education: {
    eyebrow: string;
    title: string;
    items: { key: string; title: string; detail: string }[];
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

const STACK = {
  cfdi: ['Python', 'lxml', 'Decimal', 'pytest'],
  hospital: ['Rust', 'Axum', 'SQLite', 'Windows'],
  tota: ['Python', 'FastAPI', 'pandas', 'React', 'PostgreSQL', 'Railway'],
  park: ['Next.js', 'Supabase', 'PostgreSQL'],
  consultorio: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
  imprenta: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
  notaria: ['Next.js', 'Supabase Auth', 'Drizzle ORM', 'PostgreSQL'],
  conciliacion: ['Go', 'SQLite', 'Claude API'],
};

const EMAIL = 'manuelfa92@gmail.com';

// ============================================================
// Español (default, /)
// ============================================================

export const siteEs: SiteContent = {
  lang: 'es',
  altLangLabel: 'English',
  altLangHref: '/en',
  home: '/',

  nav: {
    projects: 'Proyectos',
    career: 'Trayectoria',
    skills: 'Habilidades',
    contact: 'Contacto',
  },

  hero: {
    eyebrow: 'Datos y tecnología · LINCE Sistemas',
    headline: {
      lead: 'Construyo sistemas de datos para negocios ',
      emphasis: 'y los entrego para que funcionen sin mí.',
    },
    subtitle:
      'Desarrollador de software y datos. Desde 2024 construyo y entrego sistemas para negocios: control de precios de proveedores para un hospital, indicadores para una cadena de 6 sucursales y una plataforma de citas que procesa pagos reales.',
    primaryCta: 'Proyectos',
    secondaryCta: 'Contacto',
  },

  projects: {
    eyebrow: 'Proyectos',
    title: 'Lo que he construido.',
    subtitle:
      'Proyectos con cliente, entregados con documentación, y proyectos propios. Cada uno dice en qué estado está.',
    items: [
      {
        key: 'hospital',
        client: 'Hospital La Salle',
        title: 'Control de precios de proveedores',
        dek: 'Servicio de un solo ejecutable en la red interna del hospital: importa catálogos de proveedores con validación por hash, compara cada precio contra su historial y marca las variaciones. Autenticación por rol (Argon2) y bitácora de auditoría. Desarrollado en 10 días.',
        stack: STACK.hospital,
        status: 'Entregado y facturado, mayo 2026',
      },
      {
        key: 'consultorio',
        client: 'Consultorio privado',
        title: 'Plataforma de citas y pagos',
        dek: 'Reservas por enlace seguro, calendario de 3 modos con bloqueo de días, integración con Gmail y Google Docs, y cobro con Stripe en vivo. Tokens de acceso cifrados, borrado lógico y borradores de respuesta con la API de Claude en 3 tonos.',
        stack: STACK.consultorio,
        status: 'En uso, con pagos reales',
      },
      {
        key: 'tota',
        client: 'Gorditas Doña Tota',
        title: 'Indicadores para 6 sucursales',
        dek: 'Plataforma con 110 endpoints y 38 indicadores para las 6 sucursales. Anomalías por umbral estadístico (Z-score) en inventario y ventas, y pronóstico con media móvil, tendencia y estacionalidad.',
        stack: STACK.tota,
        status: 'Proyecto con cliente',
      },
      {
        key: 'park',
        client: 'Park & Wash Victoria',
        title: 'Tablero de operación 24/7',
        dek: 'Disponibilidad de cajones en tiempo real y registro de entrada con lector de placas. Funciona sin conexión: el personal sigue trabajando aunque se caiga el internet, sin perder datos. Permisos con row-level security.',
        stack: STACK.park,
        status: 'Proyecto con cliente',
      },
      {
        key: 'cfdi',
        client: 'Trabajo propio',
        title: 'Lector y auditor de facturas CFDI 4.0',
        dek: 'Lee facturas del SAT (ingreso, egreso, pago y traslado, con Pagos 2.0), detecta facturas de proveedor duplicadas con tres reglas de mayor a menor certeza y liga cada pago con la factura que cubre para calcular saldo y antigüedad. Calcula margen por cliente y sucursal, y el costo de la jornada máxima de 2026 a 2030. Dinero en decimal exacto; funciona sin internet.',
        stack: STACK.cfdi,
        status: 'Con datos de prueba · 318 pruebas automáticas',
      },
      {
        key: 'imprenta',
        client: 'Proyecto propio',
        title: 'Tablero de negocio para imprenta',
        dek: 'Cotizaciones, producción, inventario, pagos y analítica sobre 12 tablas y 6 vistas materializadas. Permisos por rol (4 roles) con row-level security, bitácora de solo inserción y decisiones documentadas en ADR.',
        stack: STACK.imprenta,
        status: 'Demo de preventa',
      },
      {
        key: 'notaria',
        client: 'Proyecto propio',
        title: 'Seguimiento de trámites Infonavit para notaría',
        dek: 'Aplicación multicliente con aislamiento de datos por cliente (row-level security) y una bitácora de auditoría que un trigger impide editar, para dar seguimiento a cada trámite contra su plazo.',
        stack: STACK.notaria,
        status: 'Demo',
      },
      {
        key: 'conciliacion',
        client: 'Proyecto propio',
        title: 'Conciliación de datos sin llave común',
        dek: 'Cruza registros de tres fuentes sin identificador común (coincidencia aproximada Jaro-Winkler), detecta anomalías con EWMA y redacta con la API de Claude una orden de trabajo que revisa una persona. 20 pruebas automáticas.',
        stack: STACK.conciliacion,
        status: 'Demo con datos sintéticos',
      },
    ],
  },

  career: {
    eyebrow: 'Trayectoria',
    title: 'Del negocio a la ingeniería.',
    intro:
      'Antes de construir sistemas fui enlace técnico entre cuentas empresariales y equipos de ingeniería, coordiné grupos de trabajo distribuidos y trabajé en desarrollo de negocio. Por eso empiezo por los requisitos y termino con la documentación.',
    roles: [
      {
        key: 'lince',
        role: 'Fundador y desarrollador',
        org: 'LINCE Sistemas',
        orgHref: 'https://www.lincesistemas.com',
        period: 'ene 2024 – hoy · Ciudad Victoria',
        points: [
          'Único desarrollador en cada proyecto: requisitos, arquitectura, desarrollo, despliegue, documentación y entrega.',
        ],
      },
      {
        key: 'workowhole',
        role: 'Business Development Partner',
        org: 'Workowhole Studio',
        period: 'ene 2021 – dic 2023 · remoto',
        points: [
          'Enlace técnico de más de 12 cuentas empresariales: traduje requisitos de negocio a especificaciones para los equipos de ingeniería y diseño, y coordiné la entrega entre áreas.',
          'Subí la entrega a tiempo de cerca de 70% a más de 90% con gestión de sprints y control de alcance.',
        ],
      },
      {
        key: 'tec',
        role: 'Project Manager',
        org: 'Token Engineering Commons',
        period: 'jun 2020 – dic 2021 · remoto',
        points: [
          'Coordiné la entrega de 5 grupos de trabajo distribuidos. Pasé de practicante a Project Manager en 4 meses.',
        ],
      },
      {
        key: 'autonio',
        role: 'Business Development Manager',
        org: 'Autonio Foundation',
        period: 'ene 2018 – dic 2019 · remoto',
        points: ['Levanté US$40,000 de financiamiento y cerré US$35,000 en ventas.'],
      },
    ],
  },

  skills: {
    eyebrow: 'Habilidades',
    title: 'Con qué trabajo.',
    rows: [
      {
        key: 'datos',
        label: 'Datos y facturación',
        value:
          'CFDI 4.0 y complemento de Pagos 2.0 (XML), SQL, Python (pandas), margen por cliente y sucursal, detección de anomalías (Z-score, EWMA), cruce de registros sin llave común, diseño de indicadores y tableros',
      },
      {
        key: 'desarrollo',
        label: 'Desarrollo',
        value:
          'Python, TypeScript, Rust, Go · FastAPI, Axum, Next.js, React · PostgreSQL, SQLite, Supabase, Drizzle ORM · API de Claude (salida estructurada, uso de herramientas)',
      },
      {
        key: 'sistemas',
        label: 'Sistemas',
        value:
          'Vercel, Railway, Docker, Linux, servicios de Windows · row-level security, autenticación (Argon2), bitácoras de auditoría, aplicaciones que funcionan sin conexión, pruebas automáticas (pytest)',
      },
      {
        key: 'traspaso',
        label: 'Documentación',
        value:
          'Registro de decisiones técnicas (ADR), documentación técnica y entrega en los proyectos con cliente',
      },
      {
        key: 'negocio',
        label: 'Negocio',
        value:
          'Traducción de requisitos a especificaciones, coordinación de equipos distribuidos, desarrollo de negocio y ventas',
      },
    ],
  },

  education: {
    eyebrow: 'Formación',
    title: 'Estudios e idiomas.',
    items: [
      {
        key: 'ga',
        title: 'Certificado en Ciencia de Datos (420 horas)',
        detail: 'General Assembly, 2023 · Python, SQL, estadística, machine learning, visualización',
      },
      {
        key: 'ut',
        title: 'Licenciatura (B.A.) en Retórica y Redacción',
        detail: 'The University of Texas at Austin, 2016',
      },
      { key: 'idiomas', title: 'Idiomas', detail: 'Español e inglés nativos' },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos.',
    subtitle: 'Leo todo yo mismo y respondo rápido.',
    doors: [
      {
        key: 'email',
        label: 'Correo',
        description: 'Para cualquier propuesta o pregunta.',
        channelValue: EMAIL,
        href: `mailto:${EMAIL}`,
      },
      {
        key: 'company',
        label: 'LINCE Sistemas',
        description: 'Mi práctica de desarrollo de sistemas para negocios.',
        channelValue: 'lincesistemas.com',
        href: 'https://www.lincesistemas.com',
      },
      {
        key: 'github',
        label: 'GitHub',
        description: 'Código y proyectos públicos.',
        channelValue: 'github.com/mountmanu',
        href: 'https://github.com/mountmanu',
      },
      {
        key: 'linkedin',
        label: 'LinkedIn',
        description: 'La trayectoria profesional.',
        channelValue: 'manuel-flores-90653060',
        href: 'https://www.linkedin.com/in/manuel-flores-90653060/',
      },
    ],
    locationLabel: 'Ubicación',
    location: 'Ciudad Victoria, Tamaulipas · Me mudo a Monterrey',
  },

  footer: 'Manuel Flores · Datos y tecnología para negocios',
};

// ============================================================
// English (/en)
// ============================================================

export const siteEn: SiteContent = {
  lang: 'en',
  altLangLabel: 'Español',
  altLangHref: '/',
  home: '/en',

  nav: {
    projects: 'Projects',
    career: 'Career',
    skills: 'Skills',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Data & Technology · LINCE Sistemas',
    headline: {
      lead: 'I build data systems for businesses ',
      emphasis: 'and hand them over to run without me.',
    },
    subtitle:
      'Software and data developer. Since 2024 I have built and delivered systems for businesses: supplier price control for a hospital, KPIs for a 6-branch chain and a booking platform that processes real payments.',
    primaryCta: 'Projects',
    secondaryCta: 'Contact',
  },

  projects: {
    eyebrow: 'Projects',
    title: 'What I have built.',
    subtitle:
      'Client projects, delivered with documentation, and my own projects. Each one states where it stands.',
    items: [
      {
        key: 'hospital',
        client: 'Hospital La Salle',
        title: 'Supplier price control',
        dek: 'A single-executable service on the hospital’s internal network: imports supplier catalogues with hash validation, compares every price against its history and flags the variations. Role-based authentication (Argon2) and an audit log. Built in 10 days.',
        stack: STACK.hospital,
        status: 'Delivered and invoiced, May 2026',
      },
      {
        key: 'consultorio',
        client: 'Private practice',
        title: 'Booking and payments platform',
        dek: 'Secure-link booking, a 3-mode calendar with blocked days, Gmail and Google Docs integration, and live Stripe payments. Encrypted access tokens, soft delete and reply drafts with the Claude API in 3 tones.',
        stack: STACK.consultorio,
        status: 'In use, with real payments',
      },
      {
        key: 'tota',
        client: 'Gorditas Doña Tota',
        title: 'KPIs for 6 branches',
        dek: 'A platform with 110 endpoints and 38 indicators across the 6 branches. Statistical-threshold anomalies (Z-score) in inventory and sales, and forecasting with moving average, trend and seasonality.',
        stack: STACK.tota,
        status: 'Client project',
      },
      {
        key: 'park',
        client: 'Park & Wash Victoria',
        title: '24/7 operations dashboard',
        dek: 'Real-time bay availability and entry logging with a plate reader. Works offline: staff keep working when the internet drops, without losing data. Permissions with row-level security.',
        stack: STACK.park,
        status: 'Client project',
      },
      {
        key: 'cfdi',
        client: 'Own work',
        title: 'CFDI 4.0 invoice reader and auditor',
        dek: 'Reads Mexican electronic invoices (income, credit, payment and transfer, with Pagos 2.0), flags duplicate supplier invoices with three rules from most to least certain, and links each payment to the invoice it covers to compute balance and age. Computes margin by client and branch, and the cost of the 2026–2030 maximum work week. Exact decimal money; runs offline.',
        stack: STACK.cfdi,
        status: 'Test data · 318 automated tests',
      },
      {
        key: 'imprenta',
        client: 'Own project',
        title: 'Business dashboard for a print shop',
        dek: 'Quotes, production, inventory, payments and analytics over 12 tables and 6 materialized views. Role permissions (4 roles) with row-level security, an insert-only log and decisions documented as ADRs.',
        stack: STACK.imprenta,
        status: 'Pre-sale demo',
      },
      {
        key: 'notaria',
        client: 'Own project',
        title: 'Infonavit case tracking for a notary office',
        dek: 'A multi-tenant app with per-client data isolation (row-level security) and an audit log a trigger keeps from being edited, to track each case against its deadline.',
        stack: STACK.notaria,
        status: 'Demo',
      },
      {
        key: 'conciliacion',
        client: 'Own project',
        title: 'Reconciling data with no common key',
        dek: 'Matches records from three sources with no shared identifier (Jaro-Winkler fuzzy matching), detects anomalies with EWMA and uses the Claude API to draft a work order that a person reviews. 20 automated tests.',
        stack: STACK.conciliacion,
        status: 'Demo with synthetic data',
      },
    ],
  },

  career: {
    eyebrow: 'Career',
    title: 'From business to engineering.',
    intro:
      'Before building systems I was the technical liaison between enterprise accounts and engineering teams, coordinated distributed working groups and worked in business development. That is why I start with the requirements and finish with the documentation.',
    roles: [
      {
        key: 'lince',
        role: 'Founder and developer',
        org: 'LINCE Sistemas',
        orgHref: 'https://www.lincesistemas.com',
        period: 'Jan 2024 – present · Ciudad Victoria',
        points: [
          'Sole developer on every project: requirements, architecture, development, deployment, documentation and handover.',
        ],
      },
      {
        key: 'workowhole',
        role: 'Business Development Partner',
        org: 'Workowhole Studio',
        period: 'Jan 2021 – Dec 2023 · remote',
        points: [
          'Technical liaison for 12+ enterprise accounts: translated business requirements into specifications for engineering and design, and coordinated delivery across teams.',
          'Raised on-time delivery from about 70% to over 90% through sprint management and scope control.',
        ],
      },
      {
        key: 'tec',
        role: 'Project Manager',
        org: 'Token Engineering Commons',
        period: 'Jun 2020 – Dec 2021 · remote',
        points: [
          'Coordinated delivery for 5 distributed working groups. Went from intern to Project Manager in 4 months.',
        ],
      },
      {
        key: 'autonio',
        role: 'Business Development Manager',
        org: 'Autonio Foundation',
        period: 'Jan 2018 – Dec 2019 · remote',
        points: ['Raised US$40,000 in funding and closed US$35,000 in sales.'],
      },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'What I work with.',
    rows: [
      {
        key: 'datos',
        label: 'Data and invoicing',
        value:
          'CFDI 4.0 and Pagos 2.0 (XML), SQL, Python (pandas), margin by client and branch, anomaly detection (Z-score, EWMA), record matching with no common key, KPI and dashboard design',
      },
      {
        key: 'desarrollo',
        label: 'Development',
        value:
          'Python, TypeScript, Rust, Go · FastAPI, Axum, Next.js, React · PostgreSQL, SQLite, Supabase, Drizzle ORM · Claude API (structured output, tool use)',
      },
      {
        key: 'sistemas',
        label: 'Systems',
        value:
          'Vercel, Railway, Docker, Linux, Windows services · row-level security, authentication (Argon2), audit logs, offline-first apps, automated testing (pytest)',
      },
      {
        key: 'traspaso',
        label: 'Documentation',
        value:
          'Architecture decision records (ADR), technical documentation and handover on client projects',
      },
      {
        key: 'negocio',
        label: 'Business',
        value:
          'Turning requirements into specifications, coordinating distributed teams, business development and sales',
      },
    ],
  },

  education: {
    eyebrow: 'Education',
    title: 'Studies and languages.',
    items: [
      {
        key: 'ga',
        title: 'Data Science Certificate (420 hours)',
        detail: 'General Assembly, 2023 · Python, SQL, statistics, machine learning, visualization',
      },
      {
        key: 'ut',
        title: 'B.A. in Rhetoric and Writing',
        detail: 'The University of Texas at Austin, 2016',
      },
      { key: 'idiomas', title: 'Languages', detail: 'Native Spanish and English' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    subtitle: 'I read everything myself and respond quickly.',
    doors: [
      {
        key: 'email',
        label: 'Email',
        description: 'For any proposal or question.',
        channelValue: EMAIL,
        href: `mailto:${EMAIL}`,
      },
      {
        key: 'company',
        label: 'LINCE Sistemas',
        description: 'My practice building systems for businesses.',
        channelValue: 'lincesistemas.com',
        href: 'https://www.lincesistemas.com',
      },
      {
        key: 'github',
        label: 'GitHub',
        description: 'Code and public projects.',
        channelValue: 'github.com/mountmanu',
        href: 'https://github.com/mountmanu',
      },
      {
        key: 'linkedin',
        label: 'LinkedIn',
        description: 'The professional record.',
        channelValue: 'manuel-flores-90653060',
        href: 'https://www.linkedin.com/in/manuel-flores-90653060/',
      },
    ],
    locationLabel: 'Location',
    location: 'Ciudad Victoria, Tamaulipas · Moving to Monterrey',
  },

  footer: 'Manuel Flores · Data and technology for businesses',
};
