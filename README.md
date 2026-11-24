# ade-agent-registry

Specialist agents for ADE projects: frontend, backend, devops, sysadmin, and more as teams add them. A project loads
one only when a task needs it; the four core roles (product, architect, developer, reviewer) live in
[ade-method](https://github.com/better-ade/ade-method).

Today (v1.1.0): frontend, backend, devops, sysadmin, security-reviewer, qa, analyst, monitor, support and
forward-deployed.

```
ade agent list              # every specialist, name and description (ade reads this repo at v1.1.0)
ade agent add frontend      # copy one into the project's .ade/agents/frontend.md; never overwrites
```

Where it fits: [ade](https://github.com/better-ade/ade-cli) is the command, [ade-brain](https://github.com/better-ade/ade-brain)
the hub, [ade-method](https://github.com/better-ade/ade-method) the rules, this repo its specialists,
[ade-skills](https://github.com/better-ade/ade-skills) the skills, [ade-secrets](https://github.com/better-ade/ade-secrets)
the keys, [ade-terminal](https://github.com/better-ade/ade-terminal) the desktop app, and
[ade-computer](https://github.com/better-ade/ade-computer) an isolated desktop to run it in. More at
[ade.ardata.tech](https://ade.ardata.tech/).

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
