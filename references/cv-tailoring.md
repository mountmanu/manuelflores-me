# Phase 2 — CV Tailoring

Adapt Manuel's CV to a specific job description **without over-customizing**. Three variants exist. Pick one, then swap 3–5 bullets. Do not rewrite the whole document for every application; that signals desperation and burns hours that should go to outreach.

## The three CV variants

Manuel maintains three pre-built versions of the CV in `assets/cv-source.md`. Pick the variant whose top section already aligns with the JD's emphasis.

### Variant A — AI Infrastructure / Edge AI lead

**Use when:** the role is at an AI-native company (Anthropic, Cohere, NVIDIA, Modal, Replicate, Together AI, Hugging Face, Fireworks, OpenAI competitors), or the JD prominently features LLM/RAG/agentic/inference/edge/vision keywords.

**Lead bullets (top of Areté experience block):**
1. Embedded Vision Summit selection (Santa Clara, May 2026) — live YOLOv8 INT8 demo at 12 FPS on Raspberry Pi 5.
2. RAG + agentic patterns shipped in production (Comunidad BI Claude-powered PDF importer; Knowledge Engine with pgvector spaced repetition over 22-book library).
3. Anthropic/OpenAI API integrations live in paying B2B SaaS deployments.

**Headline:** "Solutions Engineer | Edge AI & LLM Practitioner | Bilingual EN/ES LATAM-Channel"

### Variant B — Enterprise B2B SaaS / MEDDIC sales engineering lead

**Use when:** the role is at a B2B SaaS company with an enterprise sales motion (Snowflake, Databricks, Vanta, Ramp, Linear, Notion, Vercel-enterprise, Supabase-enterprise), or the JD emphasizes MEDDIC/MEDDPICC, RFP response, technical win, POC-to-production.

**Lead bullets:**
1. 11+ production B2B SaaS deployments across 5 verticals, ≥$75K cumulative revenue, up to 100K MXN/month per client.
2. Hospital La Salle case study — multi-tenant architecture, audit-grade observability, regulated environment (healthcare), Rust/Axum/SQLite single-binary deployment.
3. MEDDIC-style technical discovery in English and Spanish; full ownership of pre-sales, POC, post-sale expansion across 11+ accounts.

**Headline:** "Sales Engineer | Solutions Engineer | Pre-Sales Consultant | MEDDIC + Challenger + Command of the Message"

### Variant C — LATAM channel / US-Mexico corridor lead

**Use when:** the role explicitly targets LATAM expansion, US-Mexico nearshoring, Spanish-speaking customer base, or the JD lists Spanish as a hard requirement and treats it as the primary moat.

**Lead bullets:**
1. Bilingual EN/ES native + US-Mexico dual citizen — sole bilingual bridge across 5+ verticals between US-aligned stakeholders and Spanish-speaking operators.
2. 11+ production deployments across Northern Mexico SME market with full ownership of discovery, demo, POC, and post-sale account expansion.
3. Stripe Mexico, OXXO, SPEI, CFDI 4.0, SAT compliance — operational fluency in the actual mechanics of selling and billing in Mexico, not just language.

**Headline:** "LATAM Solutions Engineer | US-Mexico Corridor | Bilingual EN/ES Native | Founder, Areté Soluciones"

## The bullet-swap protocol

After picking the variant, do not rewrite the rest of the CV. Instead, perform a **targeted bullet swap** — change 3–5 bullets in the Areté experience block to match the JD's keywords.

### Step 1 — Extract JD keywords

Pull the 5–8 keywords/phrases that appear most prominently in the JD's "responsibilities" and "qualifications" sections. Examples: "POC ownership", "RFP response", "technical discovery", "multi-tenant", "observability", "RAG", "agentic workflows", "MEDDIC", "competitive positioning".

### Step 2 — Map to Areté case studies

Each Areté case study can be framed against multiple keywords. Use this map:

| Case study | Strong keywords |
|---|---|
| Hospital La Salle | regulated environment, audit, multi-tenant, observability, single-binary deployment, anomaly detection, Rust, healthcare, ML/anomaly detection |
| Notaría 45 | legal tech, audit logging, multi-tenant, optimistic locking, compliance, regulatory roadmap, Next.js, Prisma, PostgreSQL |
| Gorditas Doña Tota | multi-tenant BI, REST API design, real-time WebSocket, anomaly detection, predictive forecasting, FastAPI, multi-location SaaS, ETL |
| Comunidad BI | FinTech, payment processing (Stripe/OXXO/SPEI), LLM/Claude integration, PDF/document AI, dunning automation, multi-channel notification |
| VisionGuard | Edge AI, computer vision, YOLOv8, INT8 quantization, on-device inference, manufacturing QA, embedded systems |
| FleetEye / ShopSight / VozBridge / LogiSense | logistics, retail, voice AI, cross-border freight, real-time monitoring, bilingual speech |
| Sales Job Tracker | row-level security, pgvector RAG, agentic workflow, B2B SaaS reference implementation |
| Knowledge Engine | RAG, vector DB, spaced-repetition, LLM-augmented learning |

### Step 3 — Rewrite the 3–5 bullets

Rewrite the top 3–5 bullets of the Areté block so each one:
- Leads with a JD keyword.
- Quantifies impact (revenue, FPS, response time, deployment time, accounts managed).
- Names a methodology if relevant (MEDDIC, Great Demo!, Challenger).
- Ends with a verb-result construction, not a feature list.

**Bad bullet:**
> Built a system using Next.js, Prisma, and PostgreSQL for a notary office.

**Good bullet:**
> Owned full technical discovery, MEDDIC qualification, and POC delivery for legal-tech case management platform — shipped Next.js 14 / Prisma / PostgreSQL deployment with audit logging (bitácora) and SAT compliance roadmap, converting POC to production contract in 6 weeks.

### Step 4 — Cover letter (only when explicitly required)

Most modern SE applications skip cover letters or accept a 3-paragraph "tell us why" textbox. Default to **no cover letter** unless the application form requires one.

If required, structure is:

1. **Paragraph 1 (≤60 words):** the single most relevant Areté case study, leading with the JD's most prominent keyword. Name-drop the Embedded Vision Summit selection if the company is AI/edge-adjacent.
2. **Paragraph 2 (≤80 words):** the bilingual EN/ES native + dual-citizen claim, framed as commercial leverage for the company's LATAM growth thesis. Reference one specific public signal that they are expanding into LATAM (a hire, a customer logo, an exec quote, a job posting in Spanish).
3. **Paragraph 3 (≤40 words):** one concrete proposed first-30-days plan ("In my first 30 days I would run discovery with your top 3 LATAM target accounts and rebuild your Spanish-language demo deck"). Specific, testable, low.

Total cover letter length: ≤180 words. If it runs longer, cut.

## What never changes across variants

These items stay verbatim across all three CV variants. Do not let JD keyword-matching erode them.

- Embedded Vision Summit selection (Santa Clara, May 2026)
- Founder/CEO of Areté Soluciones S.A. de C.V. — incorporated, real revenue, 11+ deployments
- Bilingual EN/ES native + US-Mexico dual citizen
- Data Science Certificate (General Assembly, 420 hours)
- BA Rhetoric and Writing, UT Austin

## Anti-patterns to refuse

If the user asks to do any of the following, push back firmly:

- **Removing Areté from the CV "to look like a normal candidate."** No. Areté is the differentiator. Most SE candidates have shipped zero production B2B SaaS systems with full P&L ownership; Manuel has shipped 11. That is the moat.
- **Inflating titles or fabricating logos.** Refuse. Manuel's actual asset stack is strong enough; falsified claims poison the interview cycle when they surface.
- **Adding skills he has not actually shipped.** The CV already lists his real stack. Do not add Kubernetes, Spark, or k8s deep-experience claims he cannot defend in an interview.
- **Rewriting the CV from scratch for every application.** Refuse. Pick a variant, swap 3–5 bullets, ship. Time saved goes to outreach.

## Output format

When asked to tailor the CV for a specific JD, output in this shape:

```
VARIANT: A | B | C
WHY THIS VARIANT: one sentence
HEADLINE: [the headline string for this variant]

TOP-OF-ARETÉ BULLETS (swap these 3–5):

1. [Bullet 1 rewritten to match JD keyword X]
2. [Bullet 2 rewritten to match JD keyword Y]
3. [Bullet 3 rewritten to match JD keyword Z]
(4. and 5. optional)

KEYWORDS NOT YET COVERED: [list any JD keywords the bullets didn't naturally absorb]
COVER LETTER REQUIRED?: yes / no — [if yes, draft inline]
NEXT STEP: [save as Manuel_Flores_CV_[CompanyName].docx and submit; or: draft outreach via Phase 3]
```
