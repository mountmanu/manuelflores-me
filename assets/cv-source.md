# Manuel Flores — Canonical CV (source of truth, v3 — Sep 2026)

> Rewritten for research and data-analysis roles in human trafficking, child
> protection and child welfare. Replaces the Sales Engineer CV entirely.
>
> **Nothing may be added to this document that is not verifiable.** If a
> tailored variant needs a claim that is not here, the claim does not go in.
> Specifically retired and never to reappear: "8+ years" of engineering,
> VisionGuard, LoanSight, the Embedded Vision Summit, edge AI / YOLOv8 /
> Raspberry Pi, and all sales-methodology vocabulary.

---

## MANUEL FLORES

**Research & Data Analysis · Human Trafficking and Child Protection**

Native EN/ES bilingual · US–Mexico dual citizen

manuelfa92@gmail.com · +52 834 196 3524 · manuelflores.me · linkedin.com/in/manuel-flores-90653060

---

## PROFESSIONAL SUMMARY

Independent data and research analyst working on measurement problems in US
human trafficking and child protection. Builds usable datasets out of
administrative records that agencies publish but nobody counts — a four-year
California children's-facility panel reconciled against the state's own
published subtotals, a 51-jurisdiction audit of what trafficking data is
actually obtainable, and a documented gap in how US prevalence estimates
handle record-matching error. Two years building production data systems for
paying clients, preceded by six years in business development and project
management across distributed teams. Writes and reports in English and
Spanish. Every project ships with its code, its data-quality log, and an
explicit list of what remains unverified.

---

## CORE COMPETENCIES

**Research & measurement** — Administrative-records analysis · Panel
construction from repeated cross-sections · Record linkage and its error
modes · Multiple systems estimation / capture-recapture (applied
reimplementation, not credentialled statistics) · Monte Carlo simulation ·
Reconciliation against published agency totals · Literature and prior-art
search · Data-source auditing and access mapping

**Data engineering** — Python (pandas, openpyxl, standard library) · SQL /
PostgreSQL · TypeScript · Rust · ETL from hostile inputs (year-varying Excel
headers, fixed-layout PDFs, inconsistent keys) · `pdftotext -layout` and
fixed-width extraction · Socrata / CKAN / ArcGIS Hub open-data APIs · git

**Research practice** — Independent second-implementation verification ·
Documented data-quality logs including own errors · Reproducible seeded
simulation · Declared-limitations discipline · Source fingerprinting

**Domain** — US child-welfare and residential-care licensing systems ·
California AB 388 reporting regime · State facility registers · CMS provider
files · Trafficking prevalence-estimation literature · Public-records access
and its institutional gating

**Languages** — English (native) · Spanish (native). Research, interviewing
and reporting in both.

---

## RESEARCH PROJECTS

*Self-directed and unpaid. Built 2026. Code and data-quality logs available on
request; publication in progress.*

### California AB 388 children's facility panel — 2020–2023

- Rebuilt four years of state-mandated facility reports of law-enforcement
  contacts (including runaway episodes) into a single facility-year panel,
  joined to the CDSS licensing file, and **reconciled line by line against
  California's own published subtotals**.
- Diagnosed a join failure that silently dropped ~10% of facilities: the
  licensing file zero-pads facility numbers to nine digits while Excel had
  stripped the leading zero from the AB 388 workbooks. Large operators were
  among those lost.
- Wrote a **second, independent parser whose only purpose is to check the
  first**; the reconciliation surfaced four errors in the state's own
  published files.
- Documented **seven bugs found in the first pass** — including footnote
  markers glued into column headers that made one year appear to be a
  fivefold collapse, and facility-type pooling that produced a spurious 700×
  spread — in a public data-quality log rather than correcting them silently.
- Identified the facilities meeting the statutory inspection trigger in every
  year of the window.

### Record-matching error in US trafficking prevalence estimates

- Reviewed five published US trafficking multiple-systems-estimation studies
  (2017–2022), plus two HIV-surveillance studies from a more
  statistically mature adjacent field as a control. **None of the seven
  corrects for error in the cross-agency record-matching step** on which every
  estimate depends.
- Built a reproducible Monte Carlo simulation (Python standard library, seeded)
  reconstructing the published quasi-identifier key scheme, corrupting it at
  per-record rates anchored to published record-linkage validation benchmarks,
  and running the same textbook estimator the real studies use against an
  oracle control.
- Result: bias grows ~2.5 percentage points per 1 point of key error rate,
  upward, consistent across populations of 800–5,000 and across 2, 3 and 6
  source lists. A 5% per-record error rate inflates the estimate ~13%.
- Established that the general correction is already published (Zult et al.,
  *Journal of Official Statistics*, 2021) but has **never been applied to real
  data in any field** — framing the open problem as an application task rather
  than a novel-statistics task.

### US trafficking and child-welfare data access map — 51 jurisdictions

- Source-by-source audit of every US jurisdiction: which datasets are
  obtainable, which are gated behind institutional standing rather than a
  form, and which are advertised but absent.
- Maintains its own correction log in place rather than rewriting conclusions:
  a state initially recorded as unreachable that proved to be a local resolver
  failure, and a federal CMS file initially written off that in fact contains
  727 psychiatric residential treatment facilities with ownership and
  change-of-ownership fields.

### Cross-state facility register reconstruction — in progress

- Rebuilding other states' children's-facility registers to make comparison to
  California possible. North Carolina's DHSR licensing roster is a
  fixed-layout PDF; the parser recovers **93.6% of the state's distinct
  licence numbers**, measured against distinct licence numbers rather than raw
  lines, with each failure mode documented.

---

## PROFESSIONAL EXPERIENCE

### Founder & Principal — Areté Soluciones S.A. de C.V.
*Cd. Victoria, Mexico · 01/2024 – Present*

Incorporated Mexican firm building production data and software systems for
paying clients across healthcare operations, legal/notarial compliance,
multi-unit hospitality analytics and community finance. Personal ownership of
requirements, architecture, delivery and support in English and Spanish.

- **Hospital operations (100+ bed private hospital):** single-binary Windows
  service in Rust + SQLite, deployable inside the hospital's internal IT
  environment with no external dependencies. Hash-validated ingestion of
  supplier-submitted Excel catalogs; automated price-change alerting to
  procurement and finance.
- **Notarial compliance (LegalTech):** multi-tenant system on Next.js +
  PostgreSQL with optimistic locking, an immutable audit log, 13+ regulatory
  data models and regulated XML export, built against Mexican anti-money-
  laundering reporting requirements.
- **Multi-unit restaurant analytics (6 locations):** analytics platform with
  100+ REST endpoints, real-time monitoring, anomaly detection and sales
  forecasting. Adaptive Excel ingestion for inconsistent operator files.
- **Community finance:** payments and transparency portal with automated
  multi-stage collections across WhatsApp and email; collection time reduced
  approximately 40%.
- **Practitioner operations platform (EU-based):** multi-currency booking and
  billing with AES-256-encrypted client notes, versioned encryption keys, and
  GDPR-compliant audit logging, soft-delete and consent versioning.

*Relevance to research work: every one of these required extracting reliable
structure from inconsistent real-world files supplied by third parties — the
same problem as state administrative data.*

### Business Development Partner — Workowhole Studio
*Remote · 01/2021 – 12/2023*

- Primary liaison between business stakeholders and design/engineering teams
  across 12+ client accounts; translated requirements into technical
  specifications and managed cross-functional delivery.
- Raised on-time delivery across the portfolio from roughly 70% to over 90%.

### Project Manager — Token Engineering Commons
*Remote · 06/2020 – 12/2021*

- Coordinated technical delivery across five distributed working groups with
  no formal authority.
- Authored onboarding and architecture documentation adopted as reference
  material by 200+ contributors.
- Promoted from intern to project manager in four months.

### Business Development Manager — Autonio Foundation
*Remote, early-stage fintech · 01/2018 – 12/2019*

- Raised $40,000 in crowdfunding without a pitch deck; closed $35,000 in
  product sales with no marketing spend.

### Research Associate & Business Development — Cryptonomex Inc.
*Remote · 01/2017 – 12/2017*

- Synthesized emerging distributed-systems research into executive summaries
  informing product roadmap.

---

## EDUCATION

- **Data Science Certificate (420 hours)** — General Assembly (2023)
- **Bachelor of Arts, Rhetoric and Writing** — The University of Texas at
  Austin (2016)

---

## NOTES FOR TAILORING (not part of the CV)

- The **Research Projects section goes above Professional Experience** for any
  research-analyst posting. Invert only for a role that is explicitly
  engineering-first.
- Areté bullets are written domain-neutral so they read as data engineering,
  not as a sales record. Do not reintroduce contract values, client counts as
  a revenue claim, or vertical counts — they signal the wrong thing here.
- There are **no publications and no graduate degree.** Never add a
  publications section. Never imply peer review.
- Status language for the four projects is **"built, not yet published"** until
  the repositories are actually public. Update this file the day they are.
