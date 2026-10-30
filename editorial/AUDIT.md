# zhao-langxi · editorial audit

**Scope:** Homepage, About, days, place pages, three parked essays, research hub, navigation, SEO, licensing.

## Addendum · 30 Oct 2026

- Front door is the visual journal (days, IU / Indiana / Spain, 小猫钓鱼). HRI essays stay in `archive.html`.
- `npm run build` is the current publish gate. `node scripts/check-site.mjs` may still be stale if it walks repo-root HTML.
- Do not call the site open source until licence files exist.
- `resume.pdf` at repo root should keep pointing readers to jadexzhao.

**Earlier ship:** 26 Oct 2026 (`64ad77c`) reader-first home and essay bridges.  
**Not certified:** Full visual, screen-reader, or mobile QA (manual checks listed below).

| Sev | Finding | Evidence | Fix status |
| --- | --- | --- | --- |
| P0 | “Open-source” vs unconfirmed licences | Old homepage / EDITORIAL | **Shipped:** public publication; licences pending |
| P1 | Homepage process copy | Roadmap on home | **Shipped:** reader-first home; roadmap → `editorial/index.html` |
| P1 | About overlapped jadexzhao | Roles, clients, Handshake | **Shipped:** four sections |
| P1 | Essay nav titles inconsistent | Footer “The question” | **Shipped:** full titles on home nav |
| P1 | Concierge essay dense | `question.html` | **Shipped:** thesis + evidence key; workflow in `<details>` (body not silently rewritten) |
| P1 | Places title vs Robots theme | `places.html` H1 | **Shipped:** theme bridge; catalogues ≠ embodied robots |
| P2 | Chinese essay section order | `web-and-social-2027.html` | **Shipped:** 一→五 + English summary |
| P2 | Research hub directory-only | `research/index.html` | **Shipped:** resource intros |
| P2 | `resume.pdf` at repo root | `resume.pdf` | Links → jadexzhao; [VERIFY] remove file |
| P2 | Cross-site footer drift | Per-page footers | Partly aligned; keep checking on new pages |

## Manual checks still required

- [ ] Keyboard: skip link, nav, contrast toggle focus
- [ ] Contrast toggle persistence (currently no localStorage in markup)
- [ ] 320 / 375 / 768 px layouts
- [ ] Screen reader pass on essay index and `<details>` workflow
- [ ] `lang` on `web-and-social-2027.html` (`zh-Hans`) vs English summary block

## Substantive rewrites (author review)

- [ ] Full tighten of `question.html` body (not done silently)
- [ ] Flagship essay *The right to interrupt* (draft in `editorial/flagship-plan.md`)
- [ ] Official job titles on About if re-expanded

Run before publish: `npm run build`. Treat `node scripts/check-site.mjs` as inconclusive if it still walks repo-root HTML.
