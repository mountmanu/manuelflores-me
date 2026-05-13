# Phase 1 — Triage

Decide whether Manuel should spend hours on a specific role. Most roles fail one of the kill-criteria below. Apply them in order — the first failure ends the triage with a "skip" verdict.

## Output format

Always return triage in this exact shape. No preamble.

```
VERDICT: APPLY | MONITOR | SKIP
P(offer | quality execution): X% (range)
Expected comp band: $X–$Y total comp, USD remote-LATAM
Effort to apply: N hours
Why: 2–4 sentences max
Next step: one concrete action
```

If VERDICT = SKIP, the "Why" sentence must name which kill-criterion failed.

## Kill-criteria (in order)

Evaluate these in sequence. Stop at the first failure.

### K1. Remote-LATAM eligibility

Does the company hire FTEs remotely from Mexico, or does it require US/EU residency?

- **Pass:** Public posting says "remote — Americas" / "remote — global" / "remote — LATAM" / "Mexico" listed in location filter / company has a documented LATAM hiring track record (e.g., Anthropic LATAM hires, NVIDIA LATAM SE team).
- **Borderline:** Posting says "remote — US" but the company is known to hire LATAM contractors via Deel/EOR. Treat as MONITOR, not APPLY — add to a watchlist and warm-intro outreach first.
- **Fail:** Posting explicitly requires US/EU work authorization and the company has no LATAM hiring history. **SKIP.**

### K2. Comp band

What is the realistic total comp for this role at this seniority at this company?

- **Pass:** ≥$130K total comp (base + variable + equity at fair-value) USD, remote-LATAM rates. Benchmark via Levels.fyi, Glassdoor remote bands, Plane/Deel salary data, and known offers in the public domain.
- **Borderline ($110K–$130K):** APPLY only if the company is Tier-1 brand (Anthropic, OpenAI, NVIDIA, Snowflake, Databricks tier) AND has equity moonshot potential OR clear 12-month promotion path. Otherwise MONITOR. Requires written strategic override before accepting.
- **Fail (<$110K):** **SKIP**. Hard walk-away floor. The math vs. continuing to build Areté is not favorable below $110K.

### K3. Role type

Is this an SE/SC/Pre-Sales/Solutions-Architect role, or something adjacent that won't compound?

- **Pass:** Sales Engineer, Solutions Engineer, Pre-Sales Engineer, Solutions Architect (customer-facing), Technical Account Manager (enterprise), Customer Success Engineer (technical), Implementation Engineer, Forward-Deployed Engineer, Field CTO/Field Engineer.
- **Borderline:** Account Executive (will Manuel's SE skills be wasted?), Developer Advocate (signal-rich but lower comp), Solutions Consultant (sometimes glorified BD). MONITOR; check what the actual day-to-day is.
- **Fail:** SDR/BDR (under-leveled), pure CSM (no technical work), Product Manager (different track), generic Engineer (loses the SE leverage). **SKIP** unless there is a documented promotion path to SE within 6 months.

### K4. Company stage & momentum

Is the company in growth mode or contracting?

- **Pass:** Recent funding round (≤18 months), public revenue growth, expanding LATAM footprint, hiring across multiple functions. Strong P(role is real and won't be rescinded).
- **Borderline:** Profitable but slow-growing, or pre-revenue but well-funded. APPLY but discount P(offer) by ~30%.
- **Fail:** Recent layoffs, hiring freeze rumors, public revenue decline, "strategic review" language in press releases, founder turmoil. **SKIP** unless Manuel has a warm intro to the hiring manager.

### K5. Stack adjacency

Does the company's tech stack and customer profile reward Manuel's specific skill set?

- **Pass:** B2B SaaS, AI infrastructure (LLM APIs, inference, agents, RAG), data infrastructure, developer tools, edge/embedded AI, computer vision, vertical SaaS for regulated industries (healthcare, finance, legal).
- **Borderline:** Enterprise software with modern stack, observability, security tools — Manuel can deliver but is less differentiated.
- **Fail:** Pure consumer apps, legacy enterprise (SAP/Oracle ecosystem only), Web3/crypto-native (Manuel has past exposure but the comp/risk profile is bad in 2026), hardware-only without software layer. **SKIP** unless strategic.

### K6. Sales motion fit

Does the company's sales motion reward MEDDIC-style technical SE work?

- **Pass:** Enterprise top-down (ACVs ≥$50K), PLG-with-enterprise-overlay (Snowflake/Databricks/Vercel pattern), pilot-to-production motion with technical decision-maker.
- **Borderline:** Mid-market velocity (ACVs $10K–$50K). APPLY but expect a lower-comp SE band.
- **Fail:** Pure SMB transactional, pure self-serve PLG with no SE function, ad-driven freemium. **SKIP.**

## Verdict computation

After running K1–K6:

- 0 failures, ≥4 strong passes → **APPLY** with P(offer) 25–45%.
- 0 failures, mixed borderlines → **APPLY** with P(offer) 15–25%.
- 1 borderline at K1 (remote-LATAM unclear) but everything else strong → **MONITOR + warm intro first** before applying.
- Any kill-criterion failure → **SKIP**.

## When the user pastes a JD or URL

Extract the following before applying K1–K6:
- Company name + funding stage + last known headcount
- Role title + level (IC vs senior IC vs principal)
- Posted location string (verbatim)
- Comp if disclosed; otherwise estimate from Levels.fyi or Glassdoor
- Required vs preferred qualifications (any disqualifying gates like "PhD" or "US citizen for clearance")
- Stack mentioned
- Sales motion clues (ACV bands, customer logos, pilot language)

If the user pastes only a URL and the page can be fetched, do so. If the page cannot be fetched, ask the user to paste the key sections (role description, requirements, comp if listed).

## Comp band estimation

When the JD does not disclose comp, estimate using these anchors (mid-2026 numbers, USD, total comp for remote-LATAM):

| Company tier | SE/SC band | Notes |
|---|---|---|
| Tier 1 AI (Anthropic, OpenAI, Mistral, Cohere) | $180K–$280K | Heavy equity; base often $140K–$180K |
| Tier 1 Cloud/Data (NVIDIA, Snowflake, Databricks, AWS, GCP) | $160K–$240K | Strong base + bonus + RSUs |
| Tier 2 Infra (Modal, Replicate, Together AI, Fireworks, Vercel, Supabase) | $130K–$180K | Equity upside variable |
| Tier 2 Vertical SaaS (Ramp, Vanta, Linear, Notion equivalents) | $130K–$170K | Solid cash, OK equity |
| Tier 3 Series-A/B AI startups | $110K–$160K | Equity speculative; comp floor risk |
| Tier 4 Generic SaaS / legacy / hardware | $90K–$130K | Usually SKIP at K2 |

Adjust ±15% based on Manuel's seniority pitch (he can credibly target senior-IC SE roles, not principal yet).

## Output examples

**Example 1 — APPLY:**

```
VERDICT: APPLY
P(offer | quality execution): 20–30%
Expected comp band: $160K–$210K total, USD remote-LATAM
Effort to apply: 3 hours (CV variant B + cold DM to hiring manager)
Why: Tier-1 AI infra company actively hiring LATAM SE, MEDDIC sales motion against Fortune 500, his Areté case studies + Edge AI demo are top-quartile differentiators. K1–K6 all pass.
Next step: Use CV variant A (AI-infra lead). Draft warm intro via shared LinkedIn connection X before cold-applying.
```

**Example 2 — SKIP:**

```
VERDICT: SKIP
P(offer | quality execution): <5%
Expected comp band: $80K–$110K total
Effort to apply: n/a
Why: Fails K2 (comp below floor) and K3 (role is "Solutions Consultant" but JD reads as glorified BDR with no demo or POC ownership). Profile is wasted here.
Next step: Move on. Add to watchlist only if they post a true SE req in next 6 months.
```

**Example 3 — MONITOR:**

```
VERDICT: MONITOR
P(offer | quality execution): 10–15% if approached correctly
Expected comp band: $140K–$180K total, USD remote-LATAM
Effort to apply: 1 hour scouting + warm intro first
Why: K1 borderline — posting says "remote US" but company is known to hire LATAM contractors via Deel. K2–K6 all pass. Cold-applying loses; warm-intro converts.
Next step: Identify 2 LinkedIn 2nd-degree connections at the company before applying. Engage their content for 2 weeks first.
```
