# Positioning Asset Bank — Manuel Flores

Everything here is verifiable against a file on his machine or a public record.
Nothing in this document may be asserted in an application unless it appears
here or in `cv-source.md`.

---

## The four artifacts (the centre of every application)

These are self-directed, unpaid, and in the exact domain. They are the reason
to hire him over a better-credentialled candidate with no domain output.
Repository: `Desktop/op-regnum/` (`ca-child-facility-audit/` and
`anti-trafficking-career/research/NOVEL/`).

### A1 — California AB 388 children's facility panel

**What it is.** California requires every licensed facility housing children to
report its annual law-enforcement contacts (including runaway episodes), and
requires the state to inspect any facility running above the statewide average.
He rebuilt four years (2020–2023) of those reports into a single facility-year
panel, joined it to the state licensing file, and reconciled it line by line
against California's own published subtotals.

**What makes it credible, and what to say out loud:**
- 100% join rate to the licensing file in 2023, after finding that Excel had
  stripped the leading zero from facility numbers in the AB 388 workbooks —
  without zero-padding, ~10% of facilities silently failed to join, including
  large operators.
- A second parser, written independently, exists solely to check the first. It
  caught four errors in California's own published files.
- Seven bugs in his own first pass are documented in `docs/DATA-QUALITY.md`
  rather than quietly fixed: leading zeros, cross-type double counting,
  capacity summed instead of taken once, ampersand normalization that reversed
  a trend direction, footnote markers glued into column headers that made 2021
  look like a 5× collapse, and pooling facility types that produced a spurious
  700× spread.
- Output includes the set of facilities that met the inspection trigger in
  every year of the window.

**Status:** built, 98 files, two commits, **not yet published**.

### A2 — Linkage error in US trafficking prevalence estimates

**What it is.** US prevalence estimates use multiple systems estimation
(capture-recapture), matching victim records across agencies on a deliberately
coarse privacy-preserving key — a couple of initials plus some digits of a
birth date. He checked five real US trafficking MSE studies (Kansas City 2017,
an unnamed city 2019, New Orleans 2020, Florida 2021, Sacramento County 2022)
plus two HIV-surveillance studies as a control from a more statistically mature
field. **None of the seven corrects for error in that matching step.**

He then built a Monte Carlo simulation — Python standard library only, ~150
lines, reproducible from a seed — reconstructing Sacramento's published key
scheme, corrupting it at realistic per-record rates anchored to published
record-linkage validation benchmarks, and running the same textbook
independence estimator the real studies use, against an oracle control.

**Result:** roughly 2.5 points of upward bias per 1 point of key error rate.
5% error → ~13% inflation; 15% → ~40%. Holds across populations of 800/2,000/
5,000 and across 2, 3 and 6 lists. Direction is upward because missed matches
dominate false matches at realistic key-space sizes.

**The honest framing, which he must not overstate.** The general statistical
correction already exists — Zult, de Wolf, Bakker & van der Heijden (2021,
*Journal of Official Statistics*) generalizes linkage-error correction to three
or more sources. But that paper validated only on synthetic ESSnet DI data. As
far as this research can establish, **nobody has run a published
linkage-error-correction method on a completed real study, in any field.** So
the contribution on offer is applying an existing method to an existing study
— not inventing statistics. Say it that way. It is both true and more
credible than the alternative.

**Status:** finding documented, simulator runs, outreach note to Stephen
Tueller (RTI) drafted but **not sent**. Not published.

### A3 — The 51-jurisdiction US trafficking data map

**What it is.** A source-by-source audit of every US jurisdiction: which
trafficking and child-welfare datasets are genuinely obtainable, which are
gated behind institutional standing rather than a form, and which are
advertised but not actually there.

**What makes it credible:** it keeps its own corrections in place. Two are
worth naming in an interview because they demonstrate the discipline rather
than just claiming it — a state he first recorded as unreachable that turned
out to be his own LAN resolver failing (public DoH resolvers answered
instantly; `curl --resolve` returned HTTP 200 first try), and a federal CMS
file he wrote off as containing no children's facilities that in fact contains
727 psychiatric residential treatment facilities with ownership and
change-of-ownership fields.

**Status:** complete, **not yet published**.

### A4 — Cross-state facility registers

**What it is.** California is the only state publishing facility-level
law-enforcement contacts for children's residential care, so any comparison
requires rebuilding other states' registers first. North Carolina's DHSR
licensing roster is a fixed-layout PDF that loses half its records to a naive
parse. His rebuild recovers **93.6% of the state's distinct licence numbers**,
measured against distinct licence numbers rather than raw lines, with each
parser failure documented (right-column names discarded by a column-zero test
that cut 3,086 records to 1,689; legitimate one-word operator names rejected;
wrapped site addresses).

**Status:** in progress.

---

## Employment history (exact — do not embellish)

| Period | Role | What it actually was |
|---|---|---|
| 01/2024 – present | Founder, Areté Soluciones S.A. de C.V. | **Two years** of production data and software work for paying clients: healthcare operations, legal/notarial compliance, multi-unit restaurant BI, community finance. Python, TypeScript, Rust, PostgreSQL, SQLite. Real ETL against hostile Excel and PDF inputs. |
| 01/2021 – 12/2023 | Business Development Partner, Workowhole Studio | Client accounts, technical liaison between business stakeholders and delivery teams, requirements into specifications. **Not an engineering role.** |
| 06/2020 – 12/2021 | Project Manager, Token Engineering Commons | Coordinated delivery across distributed working groups; authored onboarding and architecture documentation. Promoted from intern in four months. |
| 01/2018 – 12/2019 | Business Development Manager, Autonio Foundation | Early-stage fintech; fundraising and sales. |
| 01/2017 – 12/2017 | Research Associate & BD, Cryptonomex | Synthesized distributed-systems research into executive summaries. |

**Education:** BA Rhetoric and Writing, University of Texas at Austin (2016).
Data Science Certificate, General Assembly (2023, 420 hours).

**Languages:** English native, Spanish native. US–Mexico dual citizen.

**Technical:** Python (pandas, openpyxl, standard-library simulation),
TypeScript/Next.js, SQL/PostgreSQL, Rust, PDF and fixed-layout text extraction
(`pdftotext -layout`), Socrata / CKAN / ArcGIS Hub open-data APIs, git.

---

## Target organizations

Ranked by fit. All four categories are in scope; location is not a filter.

### Tier 1 — direct domain match, apply on any opening

- **RTI International** — ran the two most rigorous real US trafficking MSE
  studies (Florida statewide, Sacramento County). Stephen Tueller, Kelle
  Barrick, Rebecca Pfeffer. Has an international/remote hiring pathway. Watch
  `careers.rti.org`. A2 is a direct conversation-opener with this team.
- **Allies Against Slavery** — runs Lighthouse, a real operating
  data-integration platform combining 11 datasets since 2020. The single
  best-matched organization to this exact skill set found in his research. No
  posted opening as of the last check; worth a direct approach anyway.
- **Polaris Project** — operates the US National Human Trafficking Hotline
  dataset; the largest single US trafficking data asset outside government.
- **Thorn** — child sexual exploitation, data and engineering heavy. Note the
  for-profit-platform constraint does not apply here; Thorn is a nonprofit.

### Tier 2 — strong methodological fit, applies broadly

- **Urban Institute, NORC, Mathematica, Abt Associates, Child Trends, Chapin
  Hall (U. Chicago), Westat** — the applied social-policy research firms.
  Child-welfare and justice portfolios. These hire "research analyst" and
  "data analyst" roles where the MA is often preferred rather than required —
  the tier where his artifacts can actually overcome the credential gap.

### Tier 3 — real but slower, or credential-gated

- **Universities** — funded project staff and data-scientist posts. Named
  researchers still active in this space: Teresa Kulig (Nebraska Omaha),
  Valerie Anderson (Missouri–St. Louis), Christopher Sullivan (Cincinnati),
  Vanessa Bouché (published a Jan 2026 *Harvard Data Science Review* paper
  proposing the data-ecosystem infrastructure his research was circling).
  Grant-funded posts often waive the degree requirement if the PI wants you.
- **Government and intergovernmental** — state child-welfare and licensing
  agencies (CDSS in California is the direct subject of A1), IOM's Counter
  Trafficking Data Collaborative, UNODC. Slow hiring, heavy citizenship and
  clearance requirements, but his A1 work is literally about a state agency's
  own reporting system.
- **Federal contractors** on child-welfare data systems.

### Explicit non-targets

- For-profit consumer platform trust-and-safety (Roblox-type child-safety
  teams) — ruled out.
- Anything requiring a master's as a hard, stated, non-negotiable minimum,
  unless there is a named human inside advocating for him.
- Anything in Tamaulipas attaching his name publicly to organized-crime or
  trafficking analytics.
- Sales engineering, solutions consulting, pre-sales. Retired.

---

## The credential gap and how to work it

He will be screened against candidates with an MSW, MPP, MA in criminology, or
a PhD. Three levers, in order of power:

1. **Publish the artifacts.** A public repository with a README a stranger can
   follow converts every claim into a link, and is the only lever entirely
   within his control. Recommend this constantly.
2. **Reach a named human before the application.** Grant-funded and research
   posts are far more waiver-friendly when a PI or team lead already wants
   you. A2 is an unusually good pretext for a genuine technical conversation
   — see `references/outreach.md`.
3. **Compete on the writing.** BA in rhetoric and writing, and the research
   documents are unusually well written. Where a writing sample or
   report-drafting duty appears in the JD, that is his strongest ground and
   should be led with.

---

## Storytelling assets (rehearsed, all true)

- **"I found seven bugs in my own analysis and published them."** The
  zero-padding bug that silently dropped 10% of facilities is the best single
  story he has: it is specific, it is the kind of error that quietly ruins
  real analyses, and he caught it himself with an independent parser.
- **"I was wrong in public and left the correction in."** The state he
  recorded as unreachable that was his own network. Costs nothing to admit and
  demonstrates exactly the disposition research teams screen for.
- **"I killed 33 ideas before keeping four."** Eight ideas dropped before the
  literature review, then 25 more killed by adversarial prior-art search —
  zero survived — before pivoting to the data-access mapping that produced the
  real finding. Shows he checks whether the work has already been done.
- **"The fix already exists; nobody has run it on real data."** The A2 framing.
  Modest, accurate, and more compelling than claiming novelty.
