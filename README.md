# ade-agent-registry

Specialist agents for ADE projects: frontend, backend, devops, sysadmin, and more as teams add them. A project loads
one only when a task needs it; the four core roles (product, architect, developer, reviewer) live in
[ade-method](https://github.com/better-ade/ade-method).

```
registry.json          name, file and one-line description of every specialist (what gets listed; bodies load on use)
agents/<name>.md       the role: "# Title", "## What you own" (globs), "## How you work", "## Boundaries"; no front matter
scripts/validate.mjs   node scripts/validate.mjs must pass
```

## Adding a specialist
1. Copy an existing file in `agents/`, keep the sections, keep it short.
2. Add its entry to `registry.json`.
3. Run `node scripts/validate.mjs`, then open a pull request. Every role follows ade-method's rules: test-first, only its
   story, and it never marks its own work Done.
