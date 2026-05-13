# Phase 4 — Interview Prep

Preparing Manuel for SE/SC interview loops at B2B SaaS / AI / deep-tech companies. The standard loop has 4–6 stages; this file lists each stage, what to rehearse, and how to map Manuel's assets to likely questions.

## Standard SE/SC interview loop

Most target companies run some subset of this. Identify which stages the user is preparing for and focus rehearsal accordingly.

| Stage | Format | Typical interviewer | Manuel's rehearsal priority |
|---|---|---|---|
| **1. Recruiter screen** | 30 min phone | Recruiter | Comp anchor + role-fit framing + Areté framing |
| **2. Hiring manager** | 45 min video | Sales Engineering Manager / Director of SE | "Tell me about a complex deal you won" + sales-motion fluency |
| **3. Discovery role-play** | 60 min video | Senior SE or SE Manager | MEDDIC discovery against simulated prospect |
| **4. Demo / presentation** | 60–90 min video | Cross-functional panel (SE, AE, PM) | Live product demo or take-home presentation |
| **5. Technical deep-dive** | 60 min video | Solutions Architect / Principal SE | Architecture whiteboarding, system-design |
| **6. Cross-functional / culture** | 30–45 min video each, multiple | AE partner, PM, customer-facing exec | Storytelling + collaboration + objection handling |

Some companies compress (Anthropic, Modal tend to run 3–4 stages). Others extend (Snowflake, Databricks tend to run 5–6). Tier-1 cloud incumbents add a panel/loop final.

## Stage 1 — Recruiter screen

### Likely questions

- "Tell me about yourself." (≤90 seconds)
- "Why this role?" (specific to the company; not generic)
- "What's your comp expectation?"
- "Are you authorized to work in [country]?"
- "What's your notice period / availability?"
- "Walk me through your most recent role."

### Manuel's answers (rehearsed)

**"Tell me about yourself" (90-second script):**

> "I'm a bilingual EN/ES native Sales Engineer based in Mexico. For the last two and a half years I've run my own B2B SaaS firm, Areté Soluciones — incorporated, 11+ production deployments across healthcare, legal, logistics, retail, and manufacturing, around $75K cumulative revenue, with full ownership of discovery, demo, POC, and post-sale expansion on every account. I was recently selected to demo live Edge AI inference at the Embedded Vision Summit in Santa Clara this May. I'm targeting SE roles at AI and B2B SaaS companies expanding into LATAM because that's where my profile — bilingual native, founder operator, production AI shipping — is most differentiated. That's why I'm interested in [Company]: [one specific reason]."

**Comp anchor:**

> "Total comp floor is $130K USD, remote-LATAM. Target band is $150K–$200K depending on role level, equity, and OTE structure. Open to discussing the mix."

**Work authorization / structure:**

> "I'm Mexican-resident with US-Mexico dual citizenship. Remote-LATAM via EOR or 1099 contractor works cleanly; happy to use Deel, Remote.com, or your standard provider. Not currently planning relocation."

### Recruiter screen failure modes

- **Giving a 3-minute self-summary.** Cut to 90 seconds. Recruiters lose attention past 2 minutes.
- **Not anchoring comp.** Surface the floor in this call. Don't wait three rounds to discover misalignment.
- **Apologizing for the founder background.** Reverse the framing — it's the moat, not the gap.

## Stage 2 — Hiring manager

The SE Manager wants to know: (a) can Manuel sell, (b) can Manuel partner with an AE, (c) can Manuel handle a tough customer.

### Likely questions

- "Walk me through the most complex deal you've worked on."
- "Tell me about a time a customer pushed back hard on a technical claim. What happened?"
- "How do you partner with an AE? What does good look like?"
- "Why are you leaving Areté?" (You aren't. Frame as parallel.)
- "What attracted you to this company specifically?"

### Manuel's story bank (STAR + MEDDIC)

Pre-rehearse these four stories. Each should be ≤3 minutes when told. Always end on a quantified result.

**Story 1 — Hospital La Salle (complexity + regulated environment):**
- **S:** 100+ bed hospital in Northern Mexico, supplier price catalog with anomaly detection.
- **T:** Build production system that would catch supplier price gouging in real time, deployed in a Windows-only IT environment with strict change-control.
- **A:** Architected as Rust/Axum/SQLite single-binary Windows Service. Bilingual import pipelines. Audit logging from day one. MEDDIC qualification surfaced the actual economic buyer (CFO) was different from the technical user (procurement).
- **R:** Shipped in 8 weeks. Caught $X in supplier price-change anomalies in first quarter. POC converted to ongoing contract.

**Story 2 — Comunidad BI (selling to a hostile committee):**
- **S:** Neighborhood association with 6+ board members, mixed technical literacy, divided on whether to digitize.
- **T:** Get all 6 to approve a paid SaaS deployment over WhatsApp-and-Excel status quo.
- **A:** Ran Challenger reframe: "the problem isn't billing, it's that owners don't trust where the money goes." Built the public transparency portal as the visible champion artifact for the skeptics. Used JOLT to break the indecisive ones with a "good enough, decide now" framing.
- **R:** All 6 approved. Stripe Mexico + OXXO + SPEI live in 5 weeks. Dunning automation cut collection time by ~40%.

**Story 3 — Gorditas Doña Tota (scope expansion / land-and-expand):**
- **S:** Multi-unit retail with 6 franchise locations, ad-hoc CSV reporting.
- **T:** Started as a small BI dashboard request.
- **A:** Ran MEDDIC discovery in weeks 1–2 and discovered the real pain was predictive sales forecasting for inventory, not historical BI. Reframed the scope, expanded the engagement by 3x.
- **R:** Shipped 10-tier BI platform with 100+ REST endpoints, 20+ KPIs, ML-driven anomaly detection. ACV expanded from $X to $3X.

**Story 4 — VisionGuard / Embedded Vision Summit (technical credibility under pressure):**
- **S:** Wanted to build a portable demo of on-device ML inference for SE conversations.
- **T:** Hit 12 FPS YOLOv8 detection on a Raspberry Pi 5 with no GPU, INT8-quantized.
- **A:** Built the inference pipeline, validated on real factory imagery, packaged as a take-anywhere demo kit. Submitted to Embedded Vision Summit; got selected to present live in Santa Clara, May 2026.
- **R:** Now carries the demo kit to every SE conversation. Differentiates from candidates who only present slides.

### Hiring manager failure modes

- **Generic answers.** "I'm a hard worker, I love technology" — refuse to give those. Always anchor to a specific Areté case study.
- **Not naming the methodology.** When asked about discovery, say "MEDDIC" by name. When asked about objection handling, say "Command of the Message" by name. Signals fluency.
- **Trashing Areté clients to seem hungrier.** Never. The clients are credibility.

## Stage 3 — Discovery role-play

The interviewer plays a customer or prospect. Manuel runs discovery. This is where ~50% of SE candidates wash out.

### Setup

Some companies send the scenario in advance (Anthropic does this); others spring it in the call (Snowflake, NVIDIA). Treat both the same: run **structured MEDDIC discovery**.

### The MEDDIC question stack (rehearsed verbatim)

Open with rapport — never go straight to qualification. Then layer in:

- **Metrics:** "If this works the way we both hope, what does success look like at the 6-month mark? What metric moves?"
- **Economic buyer:** "Who owns the budget for a project like this? Have they been in the conversation yet?"
- **Decision criteria:** "If you were comparing us to two other vendors, what would be the deciding factors?"
- **Decision process:** "Walk me through how a decision like this typically gets made at [Company]. Procurement? Security review? Legal?"
- **Identify pain:** "What's the cost of not solving this in the next 6 months?"
- **Champion:** "Who in your org is most fired up about getting this done? What does it mean for them personally?"

### Common interviewer curveballs and Manuel's responses

- **"We don't really have a budget for this."** → Command of the Message reframe: "Got it. If we removed budget from the conversation for a moment, would this project be worth doing? What would have to be true for it to find budget?"
- **"Your competitor is half the price."** → Reframe to cost-of-not-solving: "Understood. Help me understand — what's the cost to your team if the cheaper option doesn't work and you have to re-vendor in 6 months?"
- **"We need a feature you don't have."** → Anchor to scope, not features: "Tell me more about the underlying problem that feature would solve. Sometimes there's a path to the same outcome via a different mechanism."

### Discovery role-play failure modes

- **Pitching too early.** Do not present the product in the first 30 minutes. Discovery first.
- **Talking too much.** Ratio should be 30% Manuel talking / 70% prospect talking. SE candidates fail when they reverse this.
- **Not surfacing the economic buyer.** Always ask. Always.

## Stage 4 — Demo / presentation

Most demo loops are one of three formats: (a) prepared product demo (Manuel demos the company's product after a 1-week prep window), (b) reverse demo (Manuel demos his own product / Areté), (c) take-home presentation (whiteboard deck for a hypothetical customer).

### Great Demo! structure (apply to all three formats)

1. **Open with the last impression first.** Show the outcome / "after" state in 60 seconds before walking through the mechanics.
2. **Illustration before mechanics.** Show the screen they care about; explain how it got there only on request.
3. **One demo, one decision.** Tie the demo to a single qualification question — "would this move the needle on your [specific pain]?"
4. **Plan the punchlines.** Identify 2–3 "wow" moments in advance and pace toward them.

### For "demo the company's product" loops

Spend 4–6 hours in the company's product trial / docs / open-source code before the demo. Identify:
- One feature that has clear ROI for a specific persona
- One integration story that matches Manuel's stack (RAG, agents, vision, observability)
- One competitor differentiator the company emphasizes

Then build a 12-minute demo that hits all three.

### For "demo your own work" loops

Default to VisionGuard live on the Raspberry Pi. It is the single most differentiated artifact Manuel owns. Bring the physical device on Zoom (point the laptop camera at it) or in person. The interviewer remembers the device long after they forget the slides.

Backup: Comunidad BI screen-share showing live Stripe Mexico + OXXO + WhatsApp dunning flow. This shows production B2B SaaS with regulated payment rails.

### For "take-home presentation" loops

Cap at 8 slides. Title structure:
1. The customer & their pain (1 slide)
2. The proposed solution at a high level (1 slide)
3. Architecture / how it works (2 slides)
4. POC plan with 30/60/90 milestones (1 slide)
5. Metrics & success criteria (1 slide)
6. Risks & mitigations (1 slide)
7. Pricing / next steps (1 slide)

### Demo failure modes

- **Reading from slides.** Refuse. Talk through them.
- **Not handling interruption.** Practice handling "wait, go back" without losing the thread.
- **Demo'ing features the customer doesn't care about.** Cut from the demo every screen that doesn't tie to the discovery findings.

## Stage 5 — Technical deep-dive

Whiteboarding architecture. The interviewer asks Manuel to design a system or walk through one of his Areté projects in depth.

### Likely prompts

- "Walk me through the architecture of [Hospital La Salle / Comunidad BI / etc.]."
- "How would you architect a multi-tenant deployment of [the company's product] for a customer with 50K users?"
- "Design a system that does [domain task, e.g., 'real-time fraud detection across LATAM payment rails']."

### Rehearsal — the three architectures Manuel must whiteboard cold

**Architecture 1 — Hospital La Salle:**
- Rust/Axum HTTP server, SQLite, single-binary Windows Service deployment
- Bilingual import pipeline (CSV → schema validation → diff against catalog → anomaly alert)
- Audit logging table with append-only constraint
- Be ready to discuss: why Rust over Python (memory safety + single-binary deployment), why SQLite over PostgreSQL (operational simplicity at hospital IT maturity), what would change at 10x scale.

**Architecture 2 — Gorditas Doña Tota:**
- FastAPI backend, React frontend, PostgreSQL, WebSocket layer for real-time
- 100+ REST endpoints + 20+ KPI computations + ML anomaly detection
- ETL ingestion from 6 franchise CSV exports → unified schema → BI views
- Be ready to discuss: WebSocket scaling, the ML anomaly model choice, what fails at 60 locations vs 6.

**Architecture 3 — Comunidad BI:**
- Next.js + Supabase + Stripe Mexico
- Claude-powered PDF importer (RAG: PDF → chunk → embed → vector store → structured extract → review queue)
- Multi-channel notification orchestration (WhatsApp via Twilio + email + in-app)
- Payment rails: Stripe Mexico, OXXO (cash voucher), SPEI (bank transfer)
- Be ready to discuss: why Supabase over self-hosted, how the LLM extraction is validated, what breaks at multi-tenant.

### Deep-dive failure modes

- **Hand-waving on tradeoffs.** Always explain why you chose X over Y. Always.
- **Not knowing the cost.** Be ready to estimate AWS bill, Stripe fees, Claude API spend.
- **Pretending to know things you don't.** When asked about something Manuel hasn't shipped (Kafka, Spark, k8s deep-experience), say "I haven't shipped that in production; here's the closest thing I have shipped."

## Stage 6 — Cross-functional / culture

Quick rounds with AE counterparts, PMs, and a customer-facing exec. Usually behavioral. Use the four-story bank from Stage 2.

### Likely questions

- "Tell me about a time you disagreed with a peer." → Use Token Engineering Commons (cross-group coordination without authority).
- "Tell me about a time you had to learn something fast." → Use VisionGuard (went from zero embedded experience to a published demo in [X] months).
- "Tell me about a time you failed." → Honest answer: pick a real one. Best framing — a deal that died because Manuel didn't surface the economic buyer early enough. Lesson learned: MEDDIC discovery in week 1, not week 3.

### Culture-round failure modes

- **Picking a "failure" that isn't really a failure** ("I work too hard"). Refuse. Pick a real one with a real lesson.
- **Trash-talking previous clients or partners.** Never.
- **Not having questions for them.** Always have 3 questions ready: one about the role's first 30 days, one about the team's structure, one about a specific company strategic question (their LATAM thesis, their AI roadmap, etc.).

## Pre-interview checklist

Run this checklist 24 hours before any interview round.

- [ ] Re-read the JD; identify the top 3 keywords the interviewer is likely to probe.
- [ ] Pick which CV variant was submitted; have it open in another tab.
- [ ] Pick which 2 Areté stories best match the keywords; rehearse each ≤3 minutes.
- [ ] Pick which architecture (Hospital / Gorditas / Comunidad / VisionGuard) is most likely to come up; rehearse whiteboarding it cold.
- [ ] Prepare 3 questions for the interviewer (first-30-days, team structure, strategic question about the company).
- [ ] Confirm comp anchor is still $130K floor / $150K–$200K target.
- [ ] Charge the laptop, test the webcam, test screen-share. Have Raspberry Pi demo kit physically next to the laptop if Edge AI may come up.
- [ ] Pull the LinkedIn profile of every named interviewer; identify one piece of common ground or recent content per person.

## Output format

When asked to prep for a specific interview, output in this shape:

```
INTERVIEW: [stage] with [interviewer name + title] at [company]
TIME UNTIL: [hours / days]
INTERVIEWER PROFILE: [2–3 lines on who they are]

MOST LIKELY 5 QUESTIONS:
1.
2.
3.
4.
5.

YOUR ANSWERS (compressed):
[scripted ≤90-sec answers to the top 3]

STORIES TO BRING:
[which of the 4 Areté stories map to likely questions]

ARCHITECTURE TO REHEARSE:
[if Stage 5, which of the 3 architectures most likely]

3 QUESTIONS FOR THEM:
1.
2.
3.

PRE-CALL CHECKLIST:
[the relevant subset of the pre-interview checklist]
```
