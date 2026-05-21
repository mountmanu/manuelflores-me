# Manuel Flores — Canonical CV (source of truth, v2 — May 2026)

> Updated in line with `arete/strategic_masterplan/04_cv_overhaul_corporate_strategy.md`. Refined for Sales Engineer / Solutions Consultant roles at B2B SaaS + AI-infra companies expanding into LATAM. **Claim count corrected to 7 production deployments** (matches Areté showcase docs exactly). When tailoring for a specific JD, use the variants in `references/cv-tailoring.md`.

---

## MANUEL FLORES

**Sales Engineer · Solutions Consultant · Pre-Sales · Solutions Architect**

Bilingual EN/ES Native · US-Mexico Dual Citizen · Founder, Areté Soluciones S.A. de C.V.

manuelfa92@gmail.com · +52 834 196 3524 · manuelflores.me · linkedin.com/in/manuel-flores-90653060

Cd. Victoria, Tamaulipas, Mexico · Open to remote LATAM · Relocating to Medellín, Colombia 2026-27

---

## PROFESSIONAL SUMMARY

Bilingual Sales Engineer and Solutions Consultant with 8+ years across Business Development, Project Management, and technical pre-sales. Founder of **Areté Soluciones S.A. de C.V.** — an incorporated Mexican B2B firm that shipped **7 production systems across 5 regulated verticals**: Notarial / LegalTech, Hospital Operations, Multi-Unit Restaurants BI, Civic FinTech, Practitioner Operations. Per-client annual contract value up to **$60K USD**. Full personal ownership of MEDDIC discovery, solution architecture, live demonstrations, POC delivery, and production deployment in English and Spanish. **Selected to demonstrate live Edge AI inference at the Embedded Vision Summit, Santa Clara, May 2026.** Targeting Sales Engineer and Solutions Consultant roles at B2B SaaS and AI-infrastructure companies expanding into Latin America.

---

## CORE COMPETENCIES

**Pre-Sales Engineering** — Technical Discovery · Live Product Demonstrations · POC Design and Delivery · POC-to-Production Conversion · RFP/RFI Response · Solution Architecture · Reference Architecture · Competitive Positioning · Technical Win · Objection Handling · Demo-to-Close

**Sales Methodologies (applied, not just studied)** — MEDDIC · MEDDPICC · Challenger Sale · Command of the Message · Great Demo! · JOLT Effect · Gap Selling · SPIN Selling · Solution Selling · Cialdini Principled Influence

**Technical Stack (shipped in production)** — TypeScript · Python · Rust · Next.js (14, 15, 16) · React 19 · FastAPI · Axum · Node.js · PostgreSQL · Supabase · Prisma · Drizzle ORM · Docker · Linux · AWS · Vercel · Railway · Stripe (incl. Stripe MX, OXXO, SPEI) · Anthropic Claude API (prompt caching, tool use, agentic workflows) · OpenAI API · pgvector RAG · WhatsApp Business Cloud API direct

**Edge AI / Machine Learning** — YOLOv8 · ONNX Runtime · INT8 Quantization · TensorFlow Lite · On-Device Inference · Computer Vision · LLM RAG · Vector Databases · llama.cpp · Whisper.cpp · production-scale prompt engineering

**Domain Depth** — B2B SaaS · AI Infrastructure · LegalTech (Mexican notarial law, LFPIORPI Art. 17, LFPDPPP 2025) · Healthcare Operations (NOM-024 SSA3) · Multi-Unit Restaurants (CFDI 4.0, IMSS) · LATAM FinTech (Belvo open banking, SPEI, OXXO, RESICO) · Mexican fiscal stack (SAT, CFDI 4.0) · Cross-border US-Mexico-Colombia

**Languages** — English (Native) · Spanish (Native) — fully bilingual technical discovery, live demo, RFP response, and customer-facing delivery

---

## PROFESSIONAL EXPERIENCE

### Founder & Principal Solutions Architect — Areté Soluciones S.A. de C.V.

*Cd. Victoria, Mexico (remote LATAM) · 01/2024 – Present*

Built and operate a fully-incorporated Mexican B2B technology firm with **7 production systems** across 5 regulated verticals. Personal ownership of every pre-sales cycle: discovery in EN or ES, architecture proposal, live demo, POC, production handoff, post-sale expansion. Per-client ACV up to **$60K USD**.

- **Hospital La Salle — Hospital Operations (100+ bed private hospital):** Discovery surfaced that procurement was bleeding on unjustified supplier price increases. Architected single-binary Windows Service in **Rust + Axum + SQLite** — deployable inside the hospital's internal IT environment with zero external dependencies. Bilingual import pipelines from supplier-submitted Excel catalogs (hash-validated). Automated price-change alerts to procurement + CFO. POC-to-production in 8 weeks. Closed: $70K MXN setup + $1.5K MXN/month maintenance. *Stack: Rust 2021, Axum, SQLite WAL, Argon2, tower-sessions, HTMX, Askama, full audit logging.*

- **Notaría 45 — LegalTech / Mexican notarial law:** Reframed the buyer's stated need (case tracking) into the real problem (LFPIORPI Art. 17 PLD audit defensibility under reform 16-jul-2025). Architected multi-tenant SaaS on **Next.js 14 + PostgreSQL + Prisma** with optimistic locking, immutable audit bitácora, 13+ regulatory data models, CFDI 4.0 + complemento Notarios Públicos generation, DeclaraNot XML export. POC-to-production in 6 weeks. *Stack: Next.js 14 App Router, Supabase, Prisma, Zod, NextAuth, Anthropic Claude Haiku for WhatsApp intake.*

- **Gorditas Doña Tota — Multi-Unit Restaurants BI (6 franchise locations):** MEDDIC discovery surfaced that the economic buyer's real pain wasn't reporting — it was inventory forecast accuracy. Engagement scoped 3× larger than initial RFP. Shipped 10-tier BI platform: **100+ REST API endpoints, 20+ KPIs, real-time WebSocket monitoring, ML-driven anomaly detection, predictive sales forecasting**. *Stack: FastAPI, React, PostgreSQL + TimescaleDB, Railway, DuckDB for analytics, pandas + openpyxl for adaptive Excel ingestion.*

- **Comunidad BI — Civic FinTech (neighborhood association):** Six-board-member committee divided on going digital. Reframed via Challenger: the problem wasn't billing, it was that owners didn't trust where the money went. Built the public transparency portal as the visible champion artifact. **Next.js + Supabase + Stripe Mexico** with OXXO, SPEI, and tarjeta live in 5 weeks. Claude-powered PDF import. Automated 7-stage dunning across WhatsApp + email. Collection time cut ~40%. *Stack: Next.js 14, Supabase RLS, Stripe MX, Twilio WhatsApp, Resend, JWT-signed authless payment links.*

- **Laura Zanuna — Practitioner Operations (EU-based, multi-currency):** Single-practitioner spiritual-coaching platform replacing Calendly + Acuity + Stripe + Mailchimp + HubSpot + a notebook. **Multi-currency** (EUR + USD) with Stripe Adaptive Pricing. **AES-256-encrypted** clinical notes with versioned encryption keys. JWT magic-link booking (zero client passwords). Three-mode calendar with day-blocking conflict API. Gmail OAuth + Google Docs API integration. Claude-powered AI-suggested email replies in 3 tones. **GDPR-compliant audit log + soft-delete + consent versioning** from day one. 50+ production deployments. *Stack: Next.js 14, Supabase, Stripe, Resend, React Email, Upstash Redis rate limiting.*

- **VisionGuard — Edge AI · Manufacturing QA:** Built portable bilingual sales demo. **YOLOv8 INT8-quantized object detection** running on-device at **12 FPS on Raspberry Pi 5** ARM Cortex-A76. **Selected for live demonstration at Embedded Vision Summit, Santa Clara, May 2026.** Demo kit travels to prospect meetings as tangible "this works here, not in a slide."

- **LoanSight — LATAM FinTech reference demo:** Belvo-style open-banking underwriting demo for Mexican SMB lenders. Mock-connect bank, stream 12 months of CFDI + cash transactions, score via 5 transparent rules in <10 seconds. Built specifically for SE/SC interviews at Belvo, Plaid LATAM, Truora, Pomelo, DEUNA. *Stack: Next.js 16, TypeScript strict, Drizzle ORM, Zod, Tailwind 4, shadcn/ui.*

**Sole bilingual EN/ES bridge** across all 7 engagements between US-aligned stakeholders and Spanish-speaking operators. MEDDIC qualification in both languages. Portable demo kit (Pi 5 + monitor + cell hotspot) at every prospect meeting.

### Business Development Partner — Workowhole Studio

*Remote, tech & creative clients · 01/2021 – 12/2023*

- Owned **12+ enterprise client accounts** as primary technical liaison between business stakeholders and design/engineering teams. Translated requirements into technical specifications and managed cross-functional delivery.
- Improved on-time delivery rate across portfolio from ~70% to **90%+** via Agile/Scrum discipline.
- Tracked CLV, CSAT, retention. Repeatable consultative motion grew average contract value **35%** through upsell and cross-sell identification.

### Project Manager — Token Engineering Commons

*Remote, distributed systems nonprofit · 06/2020 – 12/2021*

- Coordinated technical delivery across **5 distributed working groups** with no formal authority.
- **Promoted from intern to PM in 4 months** based on cross-functional leadership performance.
- Authored technical onboarding and architecture documentation adopted as reference material for **200+ contributors**.

### Business Development Manager — Autonio Foundation

*Remote, early-stage FinTech · 01/2018 – 12/2019*

- Raised **$40,000 in crowdfunding without a pitch deck.**
- Closed **$35,000 in product sales with zero marketing spend.**
- Pioneered new revenue channels via strategic account management and consultative selling.

### Research Associate & Business Development — Cryptonomex Inc.

*Remote, distributed systems research · 01/2017 – 12/2017*

- Synthesized emerging distributed systems and infrastructure research into executive summaries that informed product roadmap. Built new lead-generation channels.

---

## KEY PROJECTS & TECHNICAL INITIATIVES

- **VisionGuard (Manufacturing QA):** YOLOv8 INT8-quantized object detection, 12 FPS on Raspberry Pi 5 ARM Cortex-A76 on-device inference. *Selected for live demonstration at Embedded Vision Summit, Santa Clara, May 2026.* Live bilingual public demo at manuelflores.me/demos/visionguard.

- **LoanSight (LATAM FinTech):** Belvo-style open-banking underwriting demo. CFDI + bank-transaction ingestion, 5-rule transparent scoring, <10s decision. Live at manuelflores.me/demos/loansight.

- **Sales Job Tracker (B2B SaaS reference implementation):** Personal BI dashboard, 28-table Postgres schema, 45+ API routes, Supabase auth, pgvector retrieval, agentic state machines for outreach pipeline. Backs the manuelflores.me public portfolio.

- **Knowledge Engine (Sales methodology mastery):** Private spaced-repetition system ingesting a 22-book sales methodology library (SPIN, Challenger, MEDDIC, JOLT, Cialdini, Great Demo!) for systematic SE/SC fluency reinforcement.

- **Warm-First Outreach System:** Adaptive 15-state machine with cold-apply gate and influence-ranked contact prioritization. Deployed against 33 LATAM-expanding B2B SaaS companies and 37 named decision-makers.

---

## EDUCATION

- **Data Science Certificate (420 hours)** — General Assembly (2023)
- **Bachelor of Arts, Rhetoric and Writing** — The University of Texas at Austin (2016)
