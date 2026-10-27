# zhao-langxi · editorial audit (Oct 2026)

**Scope:** Homepage, About, three essays, research hub, navigation, SEO, licensing.  
**Not certified:** Full visual, screen-reader, or mobile QA (manual checks listed below).

| Sev | Finding | Evidence | Fix status |
| --- | --- | --- | --- |
| P0 | “Open-source” vs unconfirmed licences | `EDITORIAL.md` (local); live homepage footer (if old deploy) | Wording → public publication; licences pending in README/EDITORIAL |
| P1 | Homepage process copy on live site | Live site pre-push had roadmap on home | Local `index.html` reader-first; roadmap → `editorial/index.html` |
| P1 | About overlapped jadexzhao | `about.html` roles, clients, Handshake | Rewritten to four sections (local) |
| P1 | Essay nav titles inconsistent | Footer “The question” | Standardise to essay titles |
| P1 | Concierge essay dense | `question.html` many sections | Thesis + evidence key; workflow in `<details>` |
| P1 | Places title vs Robots theme | `places.html` H1 | Theme bridge; catalogue ≠ embodied robots |
| P2 | Chinese essay section order | `web-and-social-2027.html` 四 before 一 | Reordered 一→五 |
| P2 | Research hub directory-only | `research/index.html` | Resource intros added |
| P2 | `resume.pdf` at repo root | `resume.pdf` | Résumé links → jadexzhao; [VERIFY] remove file from essay repo |
| P2 | Cross-site footer drift | Per-page footers | Standard licence line; same door links |

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

Run before publish: `node scripts/check-site.mjs`
