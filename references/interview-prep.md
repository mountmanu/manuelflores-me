# Phase 4 — Interview prep

Research hiring loops look nothing like the SE loop. There is no demo, no
discovery role-play, no product to present. Read `assets/positioning.md` for
the artifacts and the weaknesses before prepping anything.

## The typical loop

| Stage | What it is | What decides it |
|---|---|---|
| 1. Screen | HR or PM, 30 min | Can he explain the work in plain language, and is the degree gap disqualifying |
| 2. Hiring manager / PI | 45–60 min | Whether his judgment is trustworthy |
| 3. Methods interview | Sometimes a call, sometimes a take-home | Whether the technical claims hold up under a specialist |
| 4. Research presentation | 20–30 min on his own work + Q&A | The whole decision, when it exists |
| 5. Writing sample | Often requested, sometimes take-home | His strongest ground |
| 6. Team / culture | 30 min | Whether he is someone to have in a review meeting |

Not every org runs all six. Ask which ones before prepping.

## The question he must answer perfectly

**"You don't have a graduate degree or any publications. Why should we hire
you over someone who does?"**

It will be asked, in some form, in every loop. The answer is not defensive and
does not disparage credentials. Roughly:

> "You should hire someone with a PhD if you need someone who can defend a
> novel estimator. What I did instead is take five published US prevalence
> studies and check whether any of them corrected for record-matching error.
> None had. I built a simulation to see whether it mattered, and at realistic
> error rates the estimate inflates about thirteen percent. That is not new
> statistics — the correction was published in 2021 — it is somebody actually
> going and looking. That is the work I am offering."

Then stop talking. The rehearsal target is that he can say it without
apologizing and without overclaiming.

## The stories, rehearsed

Pull from `positioning.md`; the four that carry every behavioural question:

- **The zero-padding bug.** Ten percent of facilities silently dropped by a
  leading zero. Answers "tell me about a mistake", "how do you validate", and
  "what does data quality mean to you" — one story, three questions.
- **Seven bugs, published.** Answers "how do you handle being wrong."
- **The resolver failure.** He recorded a state as unreachable; it was his own
  network. He left the correction in the document. Answers "tell me about a
  time you were wrong in public."
- **Thirty-three killed ideas.** Answers "how do you decide what to work on"
  and demonstrates he checks prior art before building.

## Stage 3 — methods interview

Likely probes, and where he must be careful:

- *"Walk me through capture-recapture."* He can do this. Population size from
  overlapping incomplete lists; the estimate depends on the overlap being
  measured correctly; that is exactly the assumption he attacked.
- *"What's the identifiability problem in log-linear MSE?"* The full L-way
  interaction term is not identifiable from the data; the standard fix is
  assuming it is zero; Binette & Steorts give the relative bias when that
  assumption is wrong. He knows this. He should not pretend to know more.
- *"Why does linkage error bias the estimate upward?"* Missed matches make
  lists look less overlapping than they are, which inflates the unseen
  population; false matches push the other way; at realistic key-space sizes
  missed matches dominate. He should be able to say this cold — it is the
  core of his own finding.
- **The honesty line.** When a statistician pushes past what he actually
  verified, the correct answer is "I don't know, and that's what I couldn't
  check without the real data." He has documented exactly where that boundary
  is. Going one step past it is the fastest way to lose a methods panel.

He is not a credentialled statistician and must never present as one. He is
someone who reimplemented a published estimator carefully and checked an
assumption nobody had checked.

## Stage 4 — research presentation

If they ask for a talk on his own work, present **A1**, not A2. A1 is
finished, has a concrete result, and is about a real institution failing real
children. A2 is a better conversation but a worse presentation — it is
negative-space work and lands as criticism of the people who may be in the
room.

Structure:
1. The statutory setup — what California requires and why nobody counts it.
2. What he built and how it reconciles to the state's own totals.
3. The result.
4. **The data-quality section, in full.** Do not cut it for time. It is the
   most persuasive part and the part other candidates cannot match.
5. What is not verified and what he would need to go further.

## Stage 5 — writing sample

His strongest ground; do not treat it as a chore. Best existing candidates:
the AB 388 finding write-up, or the data-map audit with its correction log.
Both are already written for a non-specialist reader. Pick the one closer to
the role and tighten it; do not write something new under time pressure.

## Pre-interview checklist

- Read the team's actual publications, not their website copy.
- Know which artifact leads for this org and be able to give it in 90 seconds.
- Have the degree answer rehearsed out loud.
- Know the boundary of what he verified and be ready to stop at it.
- Have two real questions about their data — access, quality, what they wish
  they could measure.
- If the repositories are public by then, have the links ready. If not, be
  ready to offer the code directly.

## Never in an interview

- Never claim publications, peer review, affiliation or data access he lacks.
- Never claim more than two years of engineering.
- Never overstate A2. The correction exists; his contribution is checking that
  nobody applied it and showing the effect size matters.
- Never use sales vocabulary or mention the retired demos.
- Never guess past what he verified in order to sound authoritative. In this
  field that is the one unrecoverable error.
