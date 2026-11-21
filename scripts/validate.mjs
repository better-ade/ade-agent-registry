#!/usr/bin/env node
// Checks every registry role: the file exists, has a "# Title", a "## What you own" section with glob bullets or
// "No artifacts", a "## Boundaries" section, and no front matter. Run: node scripts/validate.mjs [root]
// BMAD overrides exist. Run: node scripts/validate.mjs [root]
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
const ROOT = process.argv[2] || join(import.meta.dirname, "..");
const problems = [];
const fail = (f, m) => problems.push(`${f}: ${m}`);
const section = (b, h) => { const i = b.indexOf(`\n${h}\n`); if (i < 0) return null; const r = b.slice(i + h.length + 2); const n = r.search(/^## /m); return n < 0 ? r : r.slice(0, n); };
let reg;
try { reg = JSON.parse(readFileSync(join(ROOT, "registry.json"), "utf8")); } catch (e) { fail("registry.json", e.message); }
if (reg) {
  const names = new Set();
  for (const r of reg.roles || []) {
    if (names.has(r.name)) fail("registry.json", `role ${r.name} listed twice`); names.add(r.name);
    if (!r.description) fail("registry.json", `role ${r.name} has no description`);
    const p = join(ROOT, r.file || "");
    if (!r.file || !existsSync(p)) { fail("registry.json", `role ${r.name}: no file ${r.file}`); continue; }
    const b = readFileSync(p, "utf8");
    if (b.startsWith("---")) fail(r.file, "has front matter (ADE adds it when it projects the role)");
    if (!/^# \S/m.test(b)) fail(r.file, 'no "# Title"');
    const own = section(b, "## What you own");
    if (own === null) fail(r.file, 'no "## What you own"');
    else if (!/^- `[^`]+`/m.test(own) && !/No artifacts/.test(own)) fail(r.file, '"## What you own" has no glob bullets and no "No artifacts"');
    if (section(b, "## Boundaries") === null) fail(r.file, 'no "## Boundaries"');
  }
  const b = reg.bmad || {}, seen = new Map();
}
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
console.log(`ok: ${reg.roles.length} roles`);
