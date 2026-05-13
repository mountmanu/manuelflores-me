/**
 * Canonical content for the public landing page.
 *
 * One source of truth, two language variants. Keep the EN and ES versions
 * in lock-step — anything in EN must have its ES counterpart, and vice versa.
 *
 * Numbers (revenue, deployments, FPS, etc.) live here and are pulled into
 * both /  and /es pages so they cannot drift.
 */

export interface ProjectContent {
  key: string;
  name: string;
  client: string;
  sector: string;
  description: string;
  /** Tech badges — same in both languages. */
  tech: string[];
  /** Optional external or internal URL. Internal paths start with "/". */
  url?: string;
  /** Whether this project is an Areté production deployment (case study) or a
   *  standalone public sales demo. Used for ordering and labels. */
  kind: 'arete-case' | 'public-demo' | 'personal';
}

export interface ExperienceEntry {
  key: string;
  period: string;
  title: string;
  description: string;
  icon: 'code' | 'briefcase' | 'users' | 'dollar' | 'grad';
}

export interface LandingContent {
  lang: 'en' | 'es';
  altLang: 'en' | 'es';
  altLangLabel: string;
  altLangHref: string;

  nav: {
    work: string;
    skills: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    headline: { lead: string; emphasis: string };
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };

  proofPoints: Array<{
    figure: string;
    label: string;
  }>;

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };

  experience: {
    eyebrow: string;
    title: string;
    entries: ExperienceEntry[];
  };

  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    projects: ProjectContent[];
  };

  skills: {
    eyebrow: string;
    title: string;
    groups: Array<{ title: string; items: string[] }>;
  };

  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    locationLabel: string;
    location: string;
  };

  footer: string;
}

// Shared tech stacks (not translated).
const tech = {
  proj1: ['Next.js', 'Supabase', 'TypeScript', 'Vercel'],
  proj2: ['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'],
  proj3: ['Next.js', 'Supabase', 'WhatsApp API', 'Vercel'],
  proj4: ['Next.js', 'Supabase', 'TypeScript'],
  proj5: ['Rust', 'Axum', 'SQLite', 'Windows Service'],
  proj6: ['Next.js', 'TypeScript', 'Supabase', 'Drizzle ORM', 'Recharts'],
  proj7: ['YOLOv8', 'ONNX', 'INT8 quant', 'Raspberry Pi 5'],
  proj8: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Zod', 'Tailwind'],
};

// ============================================================
// English content
// ============================================================

export const landingEn: LandingContent = {
  lang: 'en',
  altLang: 'es',
  altLangLabel: 'Español',
  altLangHref: '/es',

  nav: {
    work: 'Work',
    skills: 'Skills',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Sales Engineer · Solutions Consultant',
    headline: {
      lead: 'I help companies sell technology into ',
      emphasis: 'Latin America.',
    },
    subtitle:
      'Bilingual EN/ES native · US–Mexico dual citizen · Founder of Areté Soluciones · Selected to demo Edge AI at the Embedded Vision Summit, Santa Clara 2026.',
    primaryCta: 'See the work',
    secondaryCta: 'Get in touch',
  },

  proofPoints: [
    { figure: '$75K+', label: 'Cumulative B2B SaaS revenue from Mexican SMEs' },
    { figure: '7', label: 'Production deployments across 5 verticals' },
    { figure: 'EN · ES', label: 'Native bilingual technical discovery & delivery' },
  ],

  about: {
    eyebrow: 'About',
    title: 'A bilingual operator, not a contractor.',
    paragraphs: [
      "I'm a technical sales professional based on the Texas–Tamaulipas border. Since 2024 I've run Areté Soluciones S.A. de C.V., an incorporated Mexican B2B firm with seven production systems across notarial, hospital, restaurants, communities, and professional-services verticals. $75K+ cumulative revenue, up to 100K MXN per month per client. Each engagement starts with MEDDIC-style discovery in English and Spanish, and ends with a production deployment I still operate today.",
      "I'm bringing that same consultative motion — understand the buyer, map requirements, deliver in production — to a Sales Engineer or Solutions Consultant role at a B2B SaaS or AI infrastructure company expanding into Latin America. The portable demo kit (live YOLOv8 inference on a Raspberry Pi 5) travels with me.",
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Where I have shipped.',
    entries: [
      {
        key: 'exp1',
        period: '2024 – Present',
        title: 'Founder & CEO — Areté Soluciones S.A. de C.V.',
        description:
          'Seven production B2B SaaS systems for Mexican SMEs across notarial, hospital, restaurants, communities, and professional services. $75K+ cumulative revenue. Full ownership: discovery → architecture → demo → POC → production. All bilingual delivery.',
        icon: 'code',
      },
      {
        key: 'exp2',
        period: '2021 – 2023',
        title: 'Business Development Partner — Workowhole Studio',
        description:
          'Owned 12+ enterprise client accounts as primary technical liaison between business stakeholders and design/engineering teams. Agile/Scrum delivery; improved on-time delivery rate from ~70% to 90%+. Grew average contract value 35%.',
        icon: 'briefcase',
      },
      {
        key: 'exp3',
        period: '2020 – 2021',
        title: 'Project Manager — Token Engineering Commons',
        description:
          'Promoted from intern to PM in 4 months. Coordinated 5 distributed working groups with no formal authority. Technical onboarding documentation adopted as reference for 200+ contributors.',
        icon: 'users',
      },
      {
        key: 'exp4',
        period: '2018 – 2019',
        title: 'Business Development Manager — Autonio Foundation',
        description:
          'Raised $40K in crowdfunding without a pitch deck. Closed $35K in product sales with zero marketing spend. Pioneered new revenue channels through consultative account management.',
        icon: 'dollar',
      },
      {
        key: 'exp5',
        period: '2017',
        title: 'Research Associate — Cryptonomex Inc.',
        description:
          'Synthesized emerging distributed systems and infrastructure research into executive summaries that informed product roadmap decisions.',
        icon: 'briefcase',
      },
      {
        key: 'exp6',
        period: '2016',
        title: 'BA Rhetoric & Writing — The University of Texas at Austin',
        description:
          'Communication, persuasion, structured argumentation — the foundation of consultative selling.',
        icon: 'grad',
      },
    ],
  },

  work: {
    eyebrow: 'Selected work',
    title: 'Seven production systems. Two public demos.',
    subtitle:
      'Each engagement framed through the SE lens: discover the pain, architect the solution, ship to production, stay accountable.',
    projects: [
      {
        key: 'proj7',
        name: 'VisionGuard',
        client: 'Embedded Vision Summit · Santa Clara 2026',
        sector: 'Edge AI · Manufacturing QA',
        description:
          'YOLOv8 INT8-quantized object detection running on-device at 12 FPS on a Raspberry Pi 5. Selected for live demonstration at the Embedded Vision Summit. Portable bilingual demo kit that travels to every prospect meeting.',
        tech: tech.proj7,
        url: '/demos/visionguard',
        kind: 'public-demo',
      },
      {
        key: 'proj8',
        name: 'LoanSight',
        client: 'LATAM FinTech · Open Banking',
        sector: 'FinTech · SMB Underwriting',
        description:
          "Belvo-style open-banking underwriting demo for Mexican SMB lenders. Connect a mock bank, stream 12 months of CFDI/cash transactions, score the application via 5 transparent rules — under 10 seconds. Built for SE interviews at Belvo, Plaid LATAM, Truora, Pomelo, DEUNA.",
        tech: tech.proj8,
        url: '/demos/loansight',
        kind: 'public-demo',
      },
      {
        key: 'proj5',
        name: 'Hospital La Salle',
        client: 'Private Hospital · Northern Mexico',
        sector: 'Hospital Operations',
        description:
          'Supplier price catalog with anomaly detection. Rust + Axum + SQLite deployed as a single-binary Windows Service inside the hospital IT environment. Bilingual import pipelines, audit logging from day one, automated price-change alerts to procurement and the CFO.',
        tech: tech.proj5,
        kind: 'arete-case',
      },
      {
        key: 'proj4',
        name: 'Notaría 45',
        client: 'Notarial Office · Ciudad Victoria',
        sector: 'Notarial · LegalTech',
        description:
          'Case management platform for a Mexican notary office. Next.js 14, PostgreSQL, Prisma. Optimistic locking, full audit log (bitácora), 13+ data models, SAT compliance roadmap. POC converted to production contract in 6 weeks.',
        tech: tech.proj4,
        kind: 'arete-case',
      },
      {
        key: 'proj1',
        name: 'Gorditas Doña Tota',
        client: 'Multi-Unit Restaurants · 6 franchise locations',
        sector: 'Restaurants · BI',
        description:
          '10-tier business intelligence platform. 100+ REST API endpoints, 20+ KPIs, real-time WebSocket monitoring, ML-driven anomaly detection, predictive sales forecasting. Engagement expanded 3x after MEDDIC discovery surfaced inventory forecasting as the real pain.',
        tech: ['Next.js', 'FastAPI', 'Postgres', 'WebSocket', 'ML'],
        kind: 'arete-case',
      },
      {
        key: 'proj2',
        name: 'Comunidad BI',
        client: 'Neighborhood Association · Mexico',
        sector: 'Community Management · Civic FinTech',
        description:
          'Six-board-member committee, divided on going digital. Reframed via Challenger: the problem was not billing, it was that owners did not trust where the money went. Built the transparency portal as the visible champion artifact. Stripe Mexico + OXXO + SPEI live in five weeks. Dunning automation cut collection time by ~40%.',
        tech: ['Next.js', 'Supabase', 'Stripe MX', 'Claude API', 'OXXO', 'SPEI'],
        kind: 'arete-case',
      },
      {
        key: 'proj6',
        name: 'Sales Job Tracker',
        client: 'Personal · BI for technical sales pipeline',
        sector: 'B2B SaaS Reference Implementation',
        description:
          'Personal BI dashboard for managing a technical-sales job search: outreach pipeline (Kanban), target-company research hub, conference tracker, interview-prep system, analytics. 28-table Postgres schema, 45+ API routes, Supabase auth, pgvector, agentic state machines. Backs this portfolio.',
        tech: tech.proj6,
        kind: 'personal',
      },
      {
        key: 'proj3',
        name: 'Creatif',
        client: 'Consumer Product Startup',
        sector: 'E-Commerce',
        description:
          'Discovery revealed conversion bottlenecks were in the WhatsApp handoff, not the funnel. Built a landing page with WhatsApp Business integration for lead capture plus a full admin portal: accounting, CRM, order management, product catalog, marketing analytics.',
        tech: tech.proj3,
        url: 'creatif.contact',
        kind: 'arete-case',
      },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'What I bring to the conversation.',
    groups: [
      {
        title: 'Sales Engineering',
        items: [
          'Technical Discovery',
          'Live Product Demos',
          'POC → Production',
          'RFP / RFI Response',
          'Solution Architecture',
          'Objection Handling',
          'Competitive Positioning',
        ],
      },
      {
        title: 'Sales Methodology',
        items: [
          'MEDDIC · MEDDPICC',
          'Challenger Sale',
          'Command of the Message',
          'SPIN Selling',
          'Solution Selling',
          'Gap Selling',
          'JOLT Effect',
          'Great Demo!',
        ],
      },
      {
        title: 'Technical',
        items: [
          'TypeScript · Python · Rust',
          'Next.js · FastAPI · Axum',
          'PostgreSQL · Supabase',
          'AWS · Vercel · Docker',
          'Anthropic / OpenAI APIs',
          'pgvector RAG · Agents',
          'YOLOv8 · ONNX · INT8',
          'Stripe Mexico · CFDI · SAT',
        ],
      },
      {
        title: 'Domain',
        items: [
          'B2B SaaS · AI Infrastructure',
          'Edge AI · Computer Vision',
          'LATAM Channel',
          'US–Mexico Corridor',
          'Mexican SME Market',
          'FinTech · Open Banking (LATAM)',
        ],
      },
      {
        title: 'Languages',
        items: ['English (Native)', 'Spanish (Native)'],
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let us talk.',
    subtitle:
      'Looking for a bilingual Sales Engineer or Solutions Consultant for your LATAM expansion? I respond within one business day.',
    locationLabel: 'Based in',
    location: 'Texas–Tamaulipas border · US / Mexico',
  },

  footer: 'Manuel Flores. Founder, Areté Soluciones S.A. de C.V.',
};

// ============================================================
// Spanish content
// ============================================================

export const landingEs: LandingContent = {
  lang: 'es',
  altLang: 'en',
  altLangLabel: 'English',
  altLangHref: '/',

  nav: {
    work: 'Trabajo',
    skills: 'Capacidades',
    contact: 'Contacto',
  },

  hero: {
    eyebrow: 'Sales Engineer · Solutions Consultant',
    headline: {
      lead: 'Ayudo a empresas a vender tecnología en ',
      emphasis: 'América Latina.',
    },
    subtitle:
      'Nativo bilingüe EN/ES · Doble ciudadano US–México · Fundador de Areté Soluciones · Seleccionado para demo Edge AI en el Embedded Vision Summit, Santa Clara 2026.',
    primaryCta: 'Ver el trabajo',
    secondaryCta: 'Conversemos',
  },

  proofPoints: [
    { figure: '$75K+', label: 'Ingresos B2B SaaS acumulados con PyMEs mexicanas' },
    { figure: '7', label: 'Sistemas en producción a través de 5 verticales' },
    { figure: 'EN · ES', label: 'Discovery técnico y entrega en ambos idiomas nativos' },
  ],

  about: {
    eyebrow: 'Sobre mí',
    title: 'Un operador bilingüe, no un contratista.',
    paragraphs: [
      'Profesional de ventas técnicas en la frontera Texas–Tamaulipas. Desde 2024 opero Areté Soluciones S.A. de C.V., empresa mexicana B2B con siete sistemas en producción a través de notarías, hospitales, restaurantes, comunidades y servicios profesionales. $75K+ de ingresos acumulados, hasta 100K MXN por mes por cliente. Cada engagement arranca con discovery estilo MEDDIC en inglés y español, y termina con un despliegue en producción que aún opero hoy.',
      'Traigo ese mismo método consultivo — entender al comprador, mapear los requerimientos, entregar en producción — a un rol de Sales Engineer o Solutions Consultant en una empresa de B2B SaaS o infraestructura de IA que se expande hacia América Latina. El kit portátil de demos (inferencia YOLOv8 en vivo sobre Raspberry Pi 5) viaja conmigo.',
    ],
  },

  experience: {
    eyebrow: 'Experiencia',
    title: 'Dónde he entregado.',
    entries: [
      {
        key: 'exp1',
        period: '2024 – Presente',
        title: 'Fundador y CEO — Areté Soluciones S.A. de C.V.',
        description:
          'Siete sistemas B2B SaaS en producción para PyMEs mexicanas en notarías, hospitales, restaurantes, comunidades y servicios profesionales. $75K+ acumulados. Propiedad completa: discovery → arquitectura → demo → POC → producción. Entrega bilingüe.',
        icon: 'code',
      },
      {
        key: 'exp2',
        period: '2021 – 2023',
        title: 'Business Development Partner — Workowhole Studio',
        description:
          'Manejé 12+ cuentas enterprise como enlace técnico entre stakeholders de negocio y equipos de diseño e ingeniería. Entrega Agile/Scrum; mejoré la tasa de entrega a tiempo de ~70% a 90%+. Crecí el valor promedio de contrato 35%.',
        icon: 'briefcase',
      },
      {
        key: 'exp3',
        period: '2020 – 2021',
        title: 'Project Manager — Token Engineering Commons',
        description:
          'Promovido de pasante a PM en 4 meses. Coordiné 5 grupos de trabajo distribuidos sin autoridad formal. Documentación técnica de onboarding adoptada como referencia para 200+ contribuidores.',
        icon: 'users',
      },
      {
        key: 'exp4',
        period: '2018 – 2019',
        title: 'Business Development Manager — Autonio Foundation',
        description:
          'Recaudé $40K en crowdfunding sin pitch deck. Cerré $35K en ventas de producto sin presupuesto de marketing. Abrí nuevos canales de ingresos vía gestión consultiva de cuentas.',
        icon: 'dollar',
      },
      {
        key: 'exp5',
        period: '2017',
        title: 'Research Associate — Cryptonomex Inc.',
        description:
          'Síntesis de investigación emergente en sistemas distribuidos e infraestructura en resúmenes ejecutivos que informaban decisiones de roadmap de producto.',
        icon: 'briefcase',
      },
      {
        key: 'exp6',
        period: '2016',
        title: 'BA Retórica y Escritura — The University of Texas at Austin',
        description:
          'Comunicación, persuasión, argumentación estructurada — los fundamentos de la venta consultiva.',
        icon: 'grad',
      },
    ],
  },

  work: {
    eyebrow: 'Trabajo seleccionado',
    title: 'Siete sistemas en producción. Dos demos públicos.',
    subtitle:
      'Cada engagement enmarcado con lente de Sales Engineer: descubrir el dolor, arquitectar la solución, llevar a producción, mantenerse responsable.',
    projects: [
      {
        key: 'proj7',
        name: 'VisionGuard',
        client: 'Embedded Vision Summit · Santa Clara 2026',
        sector: 'Edge AI · Manufactura',
        description:
          'Detección de objetos YOLOv8 cuantizado INT8 corriendo on-device a 12 FPS sobre Raspberry Pi 5. Seleccionado para demo en vivo en el Embedded Vision Summit. Kit portátil bilingüe que viaja a cada reunión con prospecto.',
        tech: tech.proj7,
        url: '/demos/visionguard',
        kind: 'public-demo',
      },
      {
        key: 'proj8',
        name: 'LoanSight',
        client: 'FinTech LATAM · Open Banking',
        sector: 'FinTech · Underwriting PyME',
        description:
          'Demo de underwriting estilo Belvo para prestamistas PyME mexicanos. Conecta un banco simulado, jala 12 meses de transacciones CFDI/efectivo, puntúa la solicitud vía 5 reglas transparentes — todo en menos de 10 segundos. Construido para entrevistas SE en Belvo, Plaid LATAM, Truora, Pomelo, DEUNA.',
        tech: tech.proj8,
        url: '/demos/loansight',
        kind: 'public-demo',
      },
      {
        key: 'proj5',
        name: 'Hospital La Salle',
        client: 'Hospital privado · Norte de México',
        sector: 'Operaciones hospitalarias',
        description:
          'Catálogo de precios de proveedores con detección de anomalías. Rust + Axum + SQLite desplegado como Windows Service single-binary dentro del entorno IT del hospital. Pipelines de importación bilingües, bitácora desde día uno, alertas automáticas de variación de precio al área de compras y CFO.',
        tech: tech.proj5,
        kind: 'arete-case',
      },
      {
        key: 'proj4',
        name: 'Notaría 45',
        client: 'Notaría · Ciudad Victoria',
        sector: 'Notarial · LegalTech',
        description:
          'Plataforma de gestión de casos para una notaría mexicana. Next.js 14, PostgreSQL, Prisma. Bloqueo optimista, bitácora completa, 13+ modelos de datos, hoja de ruta de cumplimiento SAT. POC convertido a contrato de producción en 6 semanas.',
        tech: tech.proj4,
        kind: 'arete-case',
      },
      {
        key: 'proj1',
        name: 'Gorditas Doña Tota',
        client: 'Multi-Unit Restaurants · 6 franquicias',
        sector: 'Restaurantes · BI',
        description:
          'Plataforma de inteligencia de negocios de 10 niveles. 100+ endpoints REST, 20+ KPIs, monitoreo en tiempo real vía WebSocket, detección de anomalías con ML, pronóstico predictivo de ventas. Engagement expandido 3x después de que discovery MEDDIC reveló que el verdadero dolor era pronóstico de inventario.',
        tech: ['Next.js', 'FastAPI', 'Postgres', 'WebSocket', 'ML'],
        kind: 'arete-case',
      },
      {
        key: 'proj2',
        name: 'Comunidad BI',
        client: 'Asociación residencial · México',
        sector: 'Gestión comunitaria · FinTech cívica',
        description:
          'Comité de seis miembros dividido sobre digitalizarse. Reframing Challenger: el problema no era la facturación, era que los propietarios no confiaban en dónde se iba el dinero. Construí el portal de transparencia como artefacto visible del campeón. Stripe Mexico + OXXO + SPEI en vivo en cinco semanas. Automatización de cobranza redujo el tiempo de recuperación ~40%.',
        tech: ['Next.js', 'Supabase', 'Stripe MX', 'Claude API', 'OXXO', 'SPEI'],
        kind: 'arete-case',
      },
      {
        key: 'proj6',
        name: 'Sales Job Tracker',
        client: 'Personal · BI para pipeline de ventas técnicas',
        sector: 'B2B SaaS · Referencia de implementación',
        description:
          'Dashboard BI personal para gestión de búsqueda de empleo en ventas técnicas: pipeline de outreach (Kanban), hub de investigación de empresas objetivo, tracker de conferencias, sistema de preparación de entrevistas, analítica. 28 tablas Postgres, 45+ rutas API, auth Supabase, pgvector, máquinas de estado agénticas. Backs este portafolio.',
        tech: tech.proj6,
        kind: 'personal',
      },
      {
        key: 'proj3',
        name: 'Creatif',
        client: 'Startup de producto de consumo',
        sector: 'E-Commerce',
        description:
          'Discovery reveló que los cuellos de botella de conversión estaban en el handoff a WhatsApp, no en el funnel. Construí landing con integración WhatsApp Business para captura de leads y un portal admin completo: contabilidad, CRM, gestión de pedidos, catálogo de producto, analíticas de marketing.',
        tech: tech.proj3,
        url: 'creatif.contact',
        kind: 'arete-case',
      },
    ],
  },

  skills: {
    eyebrow: 'Capacidades',
    title: 'Lo que traigo a la conversación.',
    groups: [
      {
        title: 'Sales Engineering',
        items: [
          'Discovery técnico',
          'Demos en vivo',
          'POC → Producción',
          'Respuesta a RFP / RFI',
          'Arquitectura de soluciones',
          'Manejo de objeciones',
          'Posicionamiento competitivo',
        ],
      },
      {
        title: 'Metodología de ventas',
        items: [
          'MEDDIC · MEDDPICC',
          'Challenger Sale',
          'Command of the Message',
          'SPIN Selling',
          'Solution Selling',
          'Gap Selling',
          'JOLT Effect',
          'Great Demo!',
        ],
      },
      {
        title: 'Técnico',
        items: [
          'TypeScript · Python · Rust',
          'Next.js · FastAPI · Axum',
          'PostgreSQL · Supabase',
          'AWS · Vercel · Docker',
          'APIs Anthropic / OpenAI',
          'pgvector RAG · Agentes',
          'YOLOv8 · ONNX · INT8',
          'Stripe México · CFDI · SAT',
        ],
      },
      {
        title: 'Dominio',
        items: [
          'B2B SaaS · Infraestructura de IA',
          'Edge AI · Computer Vision',
          'Canal LATAM',
          'Corredor US–México',
          'Mercado PyME mexicano',
          'FinTech · Open Banking (LATAM)',
        ],
      },
      {
        title: 'Idiomas',
        items: ['Inglés (Nativo)', 'Español (Nativo)'],
      },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Conversemos.',
    subtitle:
      '¿Buscas un Sales Engineer o Solutions Consultant bilingüe para tu expansión LATAM? Respondo en un día hábil.',
    locationLabel: 'Basado en',
    location: 'Frontera Texas–Tamaulipas · US / México',
  },

  footer: 'Manuel Flores. Fundador, Areté Soluciones S.A. de C.V.',
};
