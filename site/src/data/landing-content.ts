/**
 * Canonical content for the public landing page.
 *
 * One source of truth, two language variants. Keep the EN and ES versions
 * in lock-step — anything in EN must have its ES counterpart, and vice versa.
 *
 * Numbers live here and are pulled into both /  and /es pages so they cannot
 * drift.
 *
 * v3 — July 2026: repositioned for Forward Deployed Engineer / AI-agent roles.
 * Honesty pass applied — Areté is an independent practice (not incorporated);
 * removed unverified speaking claims, fabricated/dead projects, and all
 * unverified dollar/ACV figures. Real Areté client work and self-built AI
 * projects only; every claim is disk-backed and defensible.
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
   *  standalone self-built demo / personal build. Used for ordering and labels. */
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
  claims: ['Next.js', 'TypeScript', 'PostgreSQL / Supabase', 'Anthropic Claude API'],
  voice: ['Twilio ConversationRelay', 'Node / TypeScript', 'Fastify WebSocket', 'Anthropic Claude API'],
  laura: ['Next.js', 'Supabase', 'Stripe', 'Google APIs', 'Anthropic Claude API'],
  notaria: ['Next.js 15', 'Supabase', 'Drizzle ORM', 'Postgres RLS'],
  hospital: ['Rust', 'Axum', 'SQLite', 'Windows Service'],
  gorditas: ['FastAPI', 'React', 'PostgreSQL', 'WebSockets'],
  areteos: ['Rust', 'Axum', 'SQLite', 'HTMX', 'Claude API'],
  rag: ['Next.js', 'Supabase', 'pgvector', 'Claude API', 'Zod'],
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
    eyebrow: 'Forward Deployed Engineer · AI Agents & LLM Applications',
    headline: {
      lead: "I turn a customer's messy reality into ",
      emphasis: 'production AI systems.',
    },
    subtitle:
      'Forward-deployed, customer-facing engineer and full-stack builder. I own the technical relationship from first demo to production — building LLM / agent systems on the Anthropic Claude API and wiring them into real customer operations. Bilingual EN/ES native, US–Mexico dual citizen.',
    primaryCta: 'See the work',
    secondaryCta: 'Get in touch',
  },

  proofPoints: [
    { figure: 'Demo → Prod', label: 'Sole technical owner of every engagement — discovery, build, integration, handover' },
    { figure: 'Claude API', label: 'Daily: tool_use extraction, RAG, agent design, human-in-the-loop review' },
    { figure: 'EN · ES', label: 'Native bilingual technical discovery and live delivery' },
  ],

  about: {
    eyebrow: 'About',
    title: 'An operator who ships, end to end.',
    paragraphs: [
      "I'm a forward-deployed, customer-facing engineer. Through Areté Soluciones — my independent technology practice — I've shipped production systems across five verticals: legal/notarial, hospital operations, multi-location restaurants, parking and facilities, and practitioner operations. On every engagement I'm the sole technical operator: discovery in English or Spanish, architecture, build, integration against the customer's own systems, and a production deployment I still run today.",
      "That work is increasingly AI-forward. I build LLM and agent systems on the Anthropic Claude API — forced-schema extraction, retrieval-augmented generation, confidence-gated human-in-the-loop review, and real-time voice agents — and wire them into messy, real-world operations via REST APIs, webhooks, and OAuth. I'm bringing that same loop — embed, discover, build, ship, own it — to a Forward Deployed Engineer role at an AI product company.",
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Where I have shipped.',
    entries: [
      {
        key: 'exp1',
        period: '2024 – Present',
        title: 'Founder & Lead Engineer — Areté Soluciones (independent practice)',
        description:
          "Independent technology practice. Sole technical owner across discovery, architecture, build, integration, and production deployment on every engagement — customer-facing from first call to handover, in English or Spanish, across notarial, hospital, restaurant, facilities, and practitioner-operations verticals. Increasingly focused on LLM / agent systems on the Anthropic Claude API.",
        icon: 'code',
      },
      {
        key: 'exp2',
        period: '2021 – 2023',
        title: 'Business Development Partner — Workowhole Studio',
        description:
          'Owned 12+ enterprise client accounts as the primary technical liaison between business stakeholders and design/engineering teams. Translated requirements into technical specifications; improved on-time delivery from ~70% to 90%+ through sprint discipline.',
        icon: 'briefcase',
      },
      {
        key: 'exp3',
        period: '2020 – 2021',
        title: 'Project Manager — Token Engineering Commons',
        description:
          'Promoted from intern to PM in 4 months. Coordinated 5 distributed working groups with no formal authority. Authored technical onboarding documentation adopted as reference for 200+ contributors.',
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
          'Synthesized emerging distributed-systems and infrastructure research into executive summaries that informed product-roadmap decisions.',
        icon: 'briefcase',
      },
      {
        key: 'exp6',
        period: '2016',
        title: 'BA Rhetoric & Writing — The University of Texas at Austin',
        description:
          'Communication, persuasion, structured argumentation — the foundation of translating complex technical systems for non-technical stakeholders.',
        icon: 'grad',
      },
    ],
  },

  work: {
    eyebrow: 'Selected work',
    title: 'Two AI agents. Production systems across five verticals.',
    subtitle:
      "Each one owned end to end — discover the real problem, architect it, ship it into the customer's world, stay accountable.",
    projects: [
      {
        key: 'claims',
        name: 'AI Claims-Operations Agent',
        client: 'Self-directed build · AI claims automation',
        sector: 'Insurance · LLM Agents',
        description:
          "A two-agent slice of an AI claims-automation product. A Claim Intaker turns a messy workers'-comp First Notice of Loss (FNOL) packet into a structured, confidence-scored record via Claude tool_use forced-schema extraction — low-confidence fields route to a human review queue instead of silently populating the record. A Case Copilot answers adjuster questions grounded only in that claim's documents, every answer citing its source, deferring compensability to the licensed adjuster. Built to prove the forward-deployed loop end to end.",
        tech: tech.claims,
        kind: 'public-demo',
      },
      {
        key: 'voice',
        name: 'Voice Interview Agent',
        client: 'Self-directed build · real-time voice × LLM',
        sector: 'Voice AI · Telephony',
        description:
          'A two-way voice AI phone agent that runs adaptive mock interviews over a live phone call and returns rubric-scored written feedback. Twilio ConversationRelay (Deepgram STT / ElevenLabs TTS) streamed through a Node/TypeScript Fastify WebSocket server into the Anthropic Claude Messages API, with real-time barge-in turn-taking and Haiku/Sonnet inference-tier routing. End to end: telephony leg to LLM brain to structured output.',
        tech: tech.voice,
        kind: 'public-demo',
      },
      {
        key: 'laura',
        name: 'Laura Zanuna',
        client: 'Practitioner Operations · EU',
        sector: 'Full-Stack SaaS · Live Payments',
        description:
          'A ~75,000-line full-stack platform replacing Calendly, Acuity, Stripe, and Mailchimp for a single practitioner — running live on production Stripe. Multi-currency (EUR/USD) payments and invoicing, JWT magic-link booking, a three-mode calendar with a day-blocking conflict API, deep third-party integrations (Gmail OAuth + Google APIs, Stripe webhooks, Resend), background job queue, rate limiting, and Claude-powered email-reply drafting.',
        tech: tech.laura,
        kind: 'arete-case',
      },
      {
        key: 'notaria',
        name: 'Notaría — Semáforo Infonavit',
        client: 'Notarial Office · Ciudad Victoria',
        sector: 'LegalTech · Regulated Ops',
        description:
          'A multi-tenant, row-level-security-isolated SaaS tracking Infonavit mortgage trámites on a traffic-light SLA dashboard, with an append-only, trigger-enforced Postgres audit log — the auditable, nothing-silently-overwritten pattern that regulated back-office work demands.',
        tech: tech.notaria,
        kind: 'arete-case',
      },
      {
        key: 'hospital',
        name: 'Hospital La Salle',
        client: 'Private Hospital · Northern Mexico',
        sector: 'Hospital Operations',
        description:
          "A single-binary Rust/Axum/SQLite Windows Service deployed inside the hospital's locked-down, change-controlled IT environment. Hash-validated catalog import pipeline, automated price-change flagging for the purchasing team, and full audit logging. Delivered and invoiced.",
        tech: tech.hospital,
        kind: 'arete-case',
      },
      {
        key: 'gorditas',
        name: 'Gorditas Doña Tota',
        client: 'Multi-Location Restaurants · 6 locations',
        sector: 'Operational BI',
        description:
          'A FastAPI + React operational-BI platform — 110 REST API endpoints, 38 KPIs, real-time WebSocket monitoring, and statistical (Z-score) anomaly detection over inventory and sales data. MEDDIC discovery surfaced inventory forecasting as the real pain and scoped the engagement well beyond the initial RFP.',
        tech: tech.gorditas,
        kind: 'arete-case',
      },
      {
        key: 'areteos',
        name: 'Areté OS',
        client: 'Personal · the system that runs my practice',
        sector: 'Rust · Offline-First',
        description:
          "The operating system I built to run my own practice: one self-contained Rust binary combining a strategy view, lightweight ERP, and CRM over a single local database, working fully offline. Money is stored as integer cents and every payment is an append-only ledger entry that can't be silently edited. Claude is integrated where it helps and disables cleanly when there's no connection.",
        tech: tech.areteos,
        kind: 'personal',
      },
      {
        key: 'rag',
        name: 'RAG Job-Search Pipeline',
        client: 'Personal · reference build',
        sector: 'RAG · Claude Tooling',
        description:
          'A Next.js / Supabase application with pgvector retrieval (Voyage AI embeddings) and a Claude-API pipeline — tool-calling with Zod-validated structured output — covering triage, outreach drafting, interview-kit generation, and mock-interview sessions. The same RAG + tool-use + structured-validation patterns as the claims agent.',
        tech: tech.rag,
        kind: 'personal',
      },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'What I bring to the build.',
    groups: [
      {
        title: 'AI / LLM Engineering',
        items: [
          'Anthropic Claude API',
          'tool_use · forced-schema extraction',
          'Prompt engineering · agent design',
          'RAG (pgvector · Postgres FTS)',
          'Human-in-the-loop review',
          'Grounded / cited retrieval',
          'Zod-validated structured output',
          'Real-time voice agents (Twilio)',
        ],
      },
      {
        title: 'Engineering',
        items: [
          'TypeScript · Python · Rust',
          'Next.js · FastAPI · Axum',
          'PostgreSQL · Supabase (RLS)',
          'REST · webhooks · WebSockets',
          'Node.js · Fastify',
          'Schema design · migrations',
        ],
      },
      {
        title: 'Integrations & Delivery',
        items: [
          'OAuth (Gmail / Google APIs)',
          'Stripe (live, multi-currency)',
          'Third-party API integration',
          'Docker · AWS · Vercel · Railway',
          'Locked-down customer environments',
          'POC → production ownership',
        ],
      },
      {
        title: 'Customer-Facing',
        items: [
          'Technical discovery (EN / ES)',
          'Solution architecture',
          'Live demonstrations',
          'Documentation & handover',
          'MEDDIC qualification',
          'Bilingual stakeholder management',
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
      'Looking for a Forward Deployed Engineer who can embed with your customers and take AI systems from first demo to production? I respond within one business day.',
    locationLabel: 'Based in',
    location: 'Ciudad Victoria, Mexico · US–Mexico dual citizen · Open to US relocation or remote (US hours)',
  },

  footer: 'Manuel Flores. Founder, Areté Soluciones (independent practice).',
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
    eyebrow: 'Forward Deployed Engineer · Agentes de IA y Aplicaciones LLM',
    headline: {
      lead: 'Convierto la realidad desordenada de un cliente en ',
      emphasis: 'sistemas de IA en producción.',
    },
    subtitle:
      'Ingeniero forward-deployed, de cara al cliente y full-stack. Soy dueño de la relación técnica desde el primer demo hasta producción — construyo sistemas LLM / de agentes sobre la API de Anthropic Claude y los integro con las operaciones reales del cliente. Nativo bilingüe EN/ES, doble ciudadano US–México.',
    primaryCta: 'Ver el trabajo',
    secondaryCta: 'Conversemos',
  },

  proofPoints: [
    { figure: 'Demo → Prod', label: 'Dueño técnico único de cada engagement — discovery, build, integración, entrega' },
    { figure: 'Claude API', label: 'A diario: extracción con tool_use, RAG, diseño de agentes, revisión human-in-the-loop' },
    { figure: 'EN · ES', label: 'Discovery técnico y entrega en vivo, nativo en ambos idiomas' },
  ],

  about: {
    eyebrow: 'Sobre mí',
    title: 'Un operador que entrega, de principio a fin.',
    paragraphs: [
      'Soy un ingeniero forward-deployed, de cara al cliente. A través de Areté Soluciones — mi práctica tecnológica independiente — he entregado sistemas en producción a través de cinco verticales: legal/notarial, operaciones hospitalarias, restaurantes multi-sucursal, estacionamientos y facilities, y operaciones de profesionistas. En cada engagement soy el operador técnico único: discovery en inglés o español, arquitectura, build, integración contra los propios sistemas del cliente, y un despliegue en producción que aún opero hoy.',
      'Ese trabajo es cada vez más AI-forward. Construyo sistemas LLM y de agentes sobre la API de Anthropic Claude — extracción con esquema forzado, generación aumentada por recuperación (RAG), revisión human-in-the-loop condicionada por confianza, y agentes de voz en tiempo real — y los integro con operaciones reales vía REST APIs, webhooks y OAuth. Traigo ese mismo ciclo — integrarme, descubrir, construir, entregar, ser responsable — a un rol de Forward Deployed Engineer en una empresa de producto de IA.',
    ],
  },

  experience: {
    eyebrow: 'Experiencia',
    title: 'Dónde he entregado.',
    entries: [
      {
        key: 'exp1',
        period: '2024 – Presente',
        title: 'Fundador e Ingeniero Principal — Areté Soluciones (práctica independiente)',
        description:
          'Práctica tecnológica independiente. Dueño técnico único de discovery, arquitectura, build, integración y despliegue en producción en cada engagement — de cara al cliente desde la primera llamada hasta la entrega, en inglés o español, a través de verticales notarial, hospitalaria, restaurantes, facilities y operaciones de profesionistas. Cada vez más enfocado en sistemas LLM / de agentes sobre la API de Anthropic Claude.',
        icon: 'code',
      },
      {
        key: 'exp2',
        period: '2021 – 2023',
        title: 'Business Development Partner — Workowhole Studio',
        description:
          'Manejé 12+ cuentas enterprise como enlace técnico principal entre stakeholders de negocio y equipos de diseño e ingeniería. Traduje requerimientos a especificaciones técnicas; mejoré la entrega a tiempo de ~70% a 90%+ con disciplina de sprints.',
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
          'Comunicación, persuasión, argumentación estructurada — la base para traducir sistemas técnicos complejos a stakeholders no técnicos.',
        icon: 'grad',
      },
    ],
  },

  work: {
    eyebrow: 'Trabajo seleccionado',
    title: 'Dos agentes de IA. Sistemas en producción en cinco verticales.',
    subtitle:
      'Cada uno con propiedad de principio a fin — descubrir el problema real, arquitectarlo, llevarlo al mundo del cliente, mantenerse responsable.',
    projects: [
      {
        key: 'claims',
        name: 'Agente de Operaciones de Reclamos con IA',
        client: 'Proyecto propio · automatización de reclamos con IA',
        sector: 'Seguros · Agentes LLM',
        description:
          'Un slice de dos agentes de un producto de automatización de reclamos. Un Claim Intaker convierte un paquete desordenado de First Notice of Loss (FNOL) de compensación laboral en un registro estructurado y calificado por confianza vía extracción con esquema forzado (tool_use) de Claude — los campos de baja confianza pasan a una cola de revisión humana en lugar de poblar el registro en silencio. Un Case Copilot responde preguntas del ajustador basándose solo en los documentos de ese reclamo, cada respuesta citando su fuente, difiriendo la compensabilidad al ajustador con licencia. Construido para probar el ciclo forward-deployed de principio a fin.',
        tech: tech.claims,
        kind: 'public-demo',
      },
      {
        key: 'voice',
        name: 'Agente de Voz para Entrevistas',
        client: 'Proyecto propio · voz en tiempo real × LLM',
        sector: 'IA de Voz · Telefonía',
        description:
          'Un agente de voz telefónico bidireccional que conduce entrevistas de práctica adaptativas en una llamada real y devuelve retroalimentación escrita calificada por rúbrica. Twilio ConversationRelay (Deepgram STT / ElevenLabs TTS) transmitido a través de un servidor WebSocket Fastify en Node/TypeScript hacia la API de Mensajes de Anthropic Claude, con barge-in en tiempo real y ruteo por nivel de inferencia Haiku/Sonnet. De extremo a extremo: de la pata de telefonía al cerebro LLM a la salida estructurada.',
        tech: tech.voice,
        kind: 'public-demo',
      },
      {
        key: 'laura',
        name: 'Laura Zanuna',
        client: 'Operaciones de Profesionista · UE',
        sector: 'SaaS Full-Stack · Pagos en Vivo',
        description:
          'Una plataforma full-stack de ~75,000 líneas que reemplaza Calendly, Acuity, Stripe y Mailchimp para una sola profesionista — corriendo en vivo sobre Stripe de producción. Pagos y facturación multi-moneda (EUR/USD), reserva por magic-link JWT, calendario de tres modos con API de conflictos por bloqueo de día, integraciones profundas de terceros (Gmail OAuth + Google APIs, webhooks de Stripe, Resend), cola de trabajos en segundo plano, rate limiting, y redacción de respuestas de email con Claude.',
        tech: tech.laura,
        kind: 'arete-case',
      },
      {
        key: 'notaria',
        name: 'Notaría — Semáforo Infonavit',
        client: 'Notaría · Ciudad Victoria',
        sector: 'LegalTech · Operaciones Reguladas',
        description:
          'Un SaaS multi-tenant, aislado con row-level security, que rastrea trámites de crédito Infonavit en un tablero de SLA tipo semáforo, con una bitácora de auditoría append-only forzada por trigger en Postgres — el patrón auditable, nada-se-sobrescribe-en-silencio, que exige el trabajo de back-office regulado.',
        tech: tech.notaria,
        kind: 'arete-case',
      },
      {
        key: 'hospital',
        name: 'Hospital La Salle',
        client: 'Hospital privado · Norte de México',
        sector: 'Operaciones Hospitalarias',
        description:
          'Un Windows Service single-binary en Rust/Axum/SQLite desplegado dentro del entorno IT bloqueado y con control de cambios del hospital. Pipeline de importación de catálogo validado por hash, alertas automáticas de variación de precio para el área de compras, y bitácora completa. Entregado y facturado.',
        tech: tech.hospital,
        kind: 'arete-case',
      },
      {
        key: 'gorditas',
        name: 'Gorditas Doña Tota',
        client: 'Restaurantes Multi-Sucursal · 6 sucursales',
        sector: 'BI Operacional',
        description:
          'Una plataforma de BI operacional en FastAPI + React — 110 endpoints REST, 38 KPIs, monitoreo en tiempo real vía WebSocket, y detección estadística de anomalías (Z-score) sobre datos de inventario y ventas. El discovery MEDDIC reveló que el pronóstico de inventario era el dolor real y escaló el engagement muy por encima del RFP inicial.',
        tech: tech.gorditas,
        kind: 'arete-case',
      },
      {
        key: 'areteos',
        name: 'Areté OS',
        client: 'Personal · el sistema que opera mi práctica',
        sector: 'Rust · Offline-First',
        description:
          'El sistema operativo que construí para operar mi propia práctica: un binario de Rust autocontenido que combina una vista de estrategia, ERP ligero y CRM sobre una sola base de datos local, funcionando completamente offline. El dinero se guarda como centavos enteros y cada pago es una entrada de libro mayor append-only que no puede editarse en silencio. Claude está integrado donde ayuda y se deshabilita limpiamente cuando no hay conexión.',
        tech: tech.areteos,
        kind: 'personal',
      },
      {
        key: 'rag',
        name: 'Pipeline RAG de Búsqueda de Empleo',
        client: 'Personal · implementación de referencia',
        sector: 'RAG · Tooling de Claude',
        description:
          'Una aplicación Next.js / Supabase con recuperación pgvector (embeddings de Voyage AI) y un pipeline de Claude API — tool-calling con salida estructurada validada por Zod — que cubre triage, redacción de outreach, generación de kits de entrevista y sesiones de práctica de entrevista. Los mismos patrones de RAG + tool-use + validación estructurada que el agente de reclamos.',
        tech: tech.rag,
        kind: 'personal',
      },
    ],
  },

  skills: {
    eyebrow: 'Capacidades',
    title: 'Lo que traigo a la construcción.',
    groups: [
      {
        title: 'Ingeniería de IA / LLM',
        items: [
          'API de Anthropic Claude',
          'tool_use · extracción con esquema forzado',
          'Prompt engineering · diseño de agentes',
          'RAG (pgvector · Postgres FTS)',
          'Revisión human-in-the-loop',
          'Recuperación citada / con fundamento',
          'Salida estructurada validada por Zod',
          'Agentes de voz en tiempo real (Twilio)',
        ],
      },
      {
        title: 'Ingeniería',
        items: [
          'TypeScript · Python · Rust',
          'Next.js · FastAPI · Axum',
          'PostgreSQL · Supabase (RLS)',
          'REST · webhooks · WebSockets',
          'Node.js · Fastify',
          'Diseño de esquema · migraciones',
        ],
      },
      {
        title: 'Integraciones y Entrega',
        items: [
          'OAuth (Gmail / Google APIs)',
          'Stripe (en vivo, multi-moneda)',
          'Integración de APIs de terceros',
          'Docker · AWS · Vercel · Railway',
          'Entornos de cliente bloqueados',
          'Propiedad POC → producción',
        ],
      },
      {
        title: 'De Cara al Cliente',
        items: [
          'Discovery técnico (EN / ES)',
          'Arquitectura de soluciones',
          'Demostraciones en vivo',
          'Documentación y entrega',
          'Calificación MEDDIC',
          'Gestión bilingüe de stakeholders',
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
      '¿Buscas un Forward Deployed Engineer que pueda integrarse con tus clientes y llevar sistemas de IA del primer demo a producción? Respondo en un día hábil.',
    locationLabel: 'Basado en',
    location: 'Ciudad Victoria, México · Doble ciudadano US–México · Abierto a reubicación en US o remoto (horario US)',
  },

  footer: 'Manuel Flores. Fundador, Areté Soluciones (práctica independiente).',
};
