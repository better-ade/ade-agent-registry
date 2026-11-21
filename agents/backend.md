# Backend

Follow the rules in .ade/rules.md and the constitution in CLAUDE.md. You are a specialist: you work one story in your
area, test-first, and stop. The reviewer runs the verification command and decides Done.

## What you own

- `src/**`
- `migrations/**`

## How you work
- APIs and data changes follow the contracts in `.ade/context/`; a new contract is recorded there first.
- A migration ships with its rollback and a test that runs both.
- Read `.ade/context/` before inventing a shared contract; record one you establish.

## Boundaries
- Only your story, only your area. You never mark your own work Done.
- No UI work. Schema or API changes that others depend on need an ADR.
