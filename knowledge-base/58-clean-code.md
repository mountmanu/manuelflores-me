# Clean Code
**Author:** Robert C. Martin | **Category:** Software Engineering / Code Quality

## Core Thesis
Code is read far more often than it is written, so the primary measure of code quality is how quickly another developer (or your future self) can understand, change, and extend it — making readability a professional obligation, not an aesthetic preference.

## Key Frameworks
- **The Boy Scout Rule:** Always leave the code cleaner than you found it; incremental improvement prevents the slow rot that turns codebases unmaintainable.
- **Functions Should Do One Thing (SRP at the function level):** A function that does exactly one thing at one level of abstraction is the atomic unit of clean code — extract until you can't extract further.
- **The Newspaper Metaphor:** A source file should read top-to-bottom like a news article — high-level concept first, detail increasing as you scroll down, so readers can stop reading the moment they have enough context.
- **Command-Query Separation (CQS):** Functions either change state (commands) or return information (queries), never both — mixing the two is a primary source of side-effect bugs.
- **The Three Laws of TDD:** (1) Write no production code before a failing test; (2) write only enough test to fail; (3) write only enough production code to pass — this cycle keeps design clean by forcing testability at every step.

## The 20% That Matters Most
1. **Name everything as if the reader has no context.** Variable, function, and class names should be self-documenting: `elapsedTimeInDays` beats `d`, `getUserById` beats `get`. Rename aggressively whenever a name misleads or requires a comment to explain.
2. **Keep functions small — usually 5-10 lines, never more than 20.** If you need to scroll to read a function, it is doing too much. Extract sub-operations into well-named helper functions; the call site then reads like a table of contents.
3. **One level of abstraction per function.** Mixing high-level orchestration (`processOrder()`) with low-level detail (`buffer[i++] = b`) in the same function forces the reader to context-switch constantly. Separate them ruthlessly.
4. **Comments are a failure to express intent in code.** A comment that explains *what* the code does is a red flag that the code should be rewritten to be self-explanatory. The only justified comments explain *why* an unintuitive decision was made (legal, performance, algorithmic constraint).
5. **Error handling via exceptions, not return codes.** Return-code error handling forces callers to check after every call, cluttering logic. Exceptions separate happy-path logic from error handling, and checked exceptions in Java (and analogous patterns) should be avoided for library code because they break encapsulation across call chains.
6. **Don't repeat yourself (DRY) is the single most powerful heuristic.** Every duplicated block of logic is a future bug waiting to diverge. Extract the duplication into a named abstraction — even if the abstraction feels premature, the naming forces you to understand what the shared concept actually is.
7. **Unit tests are a first-class design tool, not an afterthought.** Tests written after the fact are hard to write and provide weak coverage. TDD forces small, decoupled, single-purpose functions because tightly coupled code is untestable — clean tests produce clean production code as a side effect.
8. **Classes should be small and follow the Single Responsibility Principle.** Measure class size by the number of responsibilities (reasons to change), not lines of code. A class with more than one reason to change will be the epicenter of merge conflicts, regression bugs, and brittle tests; split it before it grows.

## Key Quotes
> "The only valid measurement of code quality: WTFs per minute."

> "You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers."

> "Writing clean code is what you must do in order to call yourself a professional. There is no reasonable excuse for doing anything less than your best."

## SE/Presales Application
As an SE building demos, proof-of-concept scripts, and technical integrations, clean code discipline directly determines whether a demo environment survives handoff to a customer's engineering team or dies in a drawer — readable, well-named scripts with extracted functions signal engineering credibility and reduce the "this is just a hack" objection. When writing API integration samples or sandbox environments for evaluations, applying SRP and meaningful naming means prospects' developers can extend the code themselves, accelerating technical win closure.
