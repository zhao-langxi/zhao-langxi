# Research Stats · project handoff

**Jade Zhao · zhao-langxi**  
**Date:** 14 September 2026  
**Shareable artifact:** this PDF pack (design tool access failed; PDFs replace the Make file as the handoff)

UK English. Public / hire-facing only. No clinical or IRB material. Market percentages are **industry research inputs**, not personal achievement metrics.

---

## 1. Project goal

Turn CV market-research figures into a **how/why shipping board**: each published stat answers *what*, *why it matters*, and *what to build*, so next work is prioritised from evidence instead of vibes.

**Why it exists**

- Resume research already collected public stats (Digital Humans, privacy, UX, nonprofit AI, restaurant digital).
- Those numbers are useful only if they drive a next build, essay, or hire story.
- The board is the product: filterable cards, cluster selection, and a lockable next-project idea.

**Audience**

- Jade (shipping queue)
- Collaborators / mentors who need the IA without a design-tool login
- Hire copy: product KPIs + her gap analysis on published inputs (never claim McKinsey/MIT % as her performance)

---

## 2. What’s shipped

| Piece | Path |
|---|---|
| Board HTML | `~/Documents/zhao-langxi/work/research-stats.html` |
| Board JS | `~/Documents/zhao-langxi/js/research-stats.js` |
| Stats + KPI pack | `~/Documents/jadezhao1/portfolio/resume-ats-research-stats/` |

**Content**

- **15** stat cards across **5** themes (3 each): Digital Humans, Privacy, UX, Nonprofit, Restaurant
- Every card has three layers: **What** · **Why it matters** · **What to build**
- Theme why-copy + a default **project idea** per theme

**Interactions (5 patterns)**

1. Theme filter tabs  
2. Multi-select clustering (up to 3 cards)  
3. Cluster stepper (when selection spans themes)  
4. Project lock (persisted)  
5. Session notes (`localStorage`)

**Inbound links (local site):** `index.html`, `work/digital-humans.html`, `work/serve-ai.html`

---

## 3. Product KPIs (from shipped artifact)

Re-run anytime:

```bash
~/Documents/jadezhao1/portfolio/resume-ats-research-stats/kpi-report.sh
```

| Product KPI | Value | Notes |
|---|---|---|
| Stat cards | 15 | From `STATS` in `research-stats.js` |
| Themes | 5 | Equal share: 20% each (3/15) |
| Layer coverage | **100%** | Cards with what / why / what-to-build |
| Action throughput | **100%** | 15/15 mapped to a what-to-build action |
| Themes with ≥3 stats | **100%** | All 5 themes |
| Interaction patterns | 5 | See section 2 |
| Inbound linking | **20%** | 3/15 other HTML pages link to the board |
| GitHub Pages live URL | Not live (404) | Local ship only until `zhao-langxi` deploy |

### Simulations (her analysis of published inputs)

| Simulation | Formula | Result |
|---|---|---|
| Adoption-scale gap | `gap_pp = 72 − 5` | **67 pp** (McKinsey 2025; MIT 2025) |
| Clarity deficit | `100 − 20` | **80 pp** (Deloitte 2025) |
| Nonprofit strategy gap | `92 − 7` | **85 pp** (Virtuous 2026) |
| Restaurant social vs web | `99 − 69` | **30 pp** (Restaurant Velocity 2026; not a personal revenue claim) |
| Top priority score | `100 × theme_weight × urgency` | **95.0** on `dh-5` (5% at-scale) |

Weights: Digital Humans 1.0 · privacy/UX 0.85 · nonprofit 0.7 · restaurant 0.6.  
Urgency: `(100 − pct) / 100` if gap_risk · `pct / 100` if pressure · `0.50` if context.

**Resume-ready line (good pattern):**

> Shipped research board covering 15 stats across 5 themes (100% of cards with what / why / what-to-build layers); ran gap analysis on published inputs (72% adoption vs 5% at-scale = 67 pp) to prioritise Digital Humans how/why work.

---

## 4. Market research inputs vs personal / product KPIs

| Type | Examples | OK to claim as hers? |
|---|---|---|
| **Market research inputs** | 72% generative AI adoption (McKinsey); 5% at scale (MIT); 20% clarity (Deloitte); 92%/7% nonprofit (Virtuous); 99% vs 69% social/web (Restaurant Velocity) | **No** ... citations / board inputs only |
| **Product KPIs** | 15 cards, 5 themes, 100% layer coverage, 100% action throughput, 5 interaction patterns, inbound linking % | **Yes** ... countable from HTML/JS |
| **Her simulations** | 67 pp adoption-scale gap; priority score 95.0 on `dh-5` | **Yes** ... as *her analysis* of published inputs, with formula documented |
| **Other durable personal numbers** | GPA 3.50; May 2027 graduation; MAP 50+ first-generation and low-income peer mentors; named Serve IT partners | **Yes** ... already hers; not from this board |

Do **not** write industry % as if Jade grew revenue, adoption, or employer outcomes.

---

## 5. IA / screen map

### A. Theme filters (tabs)

| | |
|---|---|
| **What** | Five tabs: Digital Humans · Privacy · UX · Nonprofit · Restaurant |
| **Why** | One theme at a time keeps the board readable; footer throughline updates with the tab |
| **What to build** | Keep tabs = themes; default open Digital Humans |

### B. Stat cards (grid)

| | |
|---|---|
| **What** | Big number + claim; category chip; What / Why / What to build blocks; related role link |
| **Why** | Forces every market figure into shipping language |
| **What to build** | Preserve three-layer structure when adding cards; never ship a card with only a % |

### C. Detail / selection

| | |
|---|---|
| **What** | Click card to select (max 3); selection persists in `localStorage` |
| **Why** | Clustering mimics “pick a next project from evidence” |
| **What to build** | Cap stays at 3; show count `n / 3 selected` |

### D. Cluster stepper

| | |
|---|---|
| **What** | Appears when 2 to 3 selected cards span distinct themes; Previous / Next / Lock |
| **Why** | Cross-theme selections need an explicit next-build idea, not a vague pile of stats |
| **What to build** | One idea per theme already in `THEMES[].projectIdea`; Lock writes to `localStorage` |

### E. Session notes

| | |
|---|---|
| **What** | Textarea under the board; auto-save |
| **Why** | Capture the week’s ship intent next to the lock |
| **What to build** | Keep local-only; do not sync to a server |

### Flow (happy path)

1. Open board → Digital Humans theme  
2. Read cards → select 2 to 3  
3. If multi-theme → stepper → Lock project  
4. Write notes → build elsewhere (essay, demo, Serve-AI piece, LinkedIn draft)

---

## 6. How to open locally + Pages URL

**Local (preferred until deploy)**

```bash
cd ~/Documents/zhao-langxi
# any static server that serves the repo root, e.g.:
python3 -m http.server 8080
# then open:
# http://localhost:8080/work/research-stats.html
```

Absolute paths on disk:

- `/Users/jadexzhao/Documents/zhao-langxi/work/research-stats.html`
- `/Users/jadexzhao/Documents/zhao-langxi/js/research-stats.js`

**Future public URL (not live yet)**

`https://zhao-langxi.github.io/zhao-langxi/work/research-stats.html`  

As of the last KPI audit this returns **HTTP 404**. Do not claim a live Pages URL until after push/deploy to `zhao-langxi/zhao-langxi`.

**KPI / formula re-run**

```bash
~/Documents/jadezhao1/portfolio/resume-ats-research-stats/kpi-report.sh
```

---

## 7. Next builds by theme (Digital Humans first)

| Priority | Theme | Next build (from board) |
|---|---|---|
| **1** | Digital Humans | Disclosure + override pattern library for a Digital Humans demo, plus a short “after the demo” handoff note. Driven by 72% vs 5% (67 pp) and top score on `dh-5`. |
| 2 | UX | Progressive-disclosure consent flow with a tiny comprehension check, then write the mini-case. |
| 3 | Privacy | Plain-language data-use panel reusable in portfolio prototypes (consumer / app trust only). |
| 4 | Nonprofit | One-page AI adoption checklist for a small nonprofit (policy stub + accessibility + override owner). |
| 5 | Restaurant | Social ↔ website consistency audit template for a local restaurant (no invented sales numbers). |

---

## 8. Files in this handoff folder

| File | Role |
|---|---|
| `HANDOFF.md` | Editable source (this document) |
| `handoff.html` | Print-styled full handoff |
| `one-pager.html` | Short share version |
| `Research-Stats-Handoff.pdf` | Main PDF to send |
| `Research-Stats-One-Pager.pdf` | Quick-share PDF |
| `export-pdfs.sh` | Regenerates both PDFs via Chrome headless |
| `README.md` | Paths + regenerate steps |

Mirror (for work next to the board):  
`~/Documents/zhao-langxi/work/research-stats-handoffs/`

---

## 9. Guardrails

- UK English; pauses with `...`; date ranges with `to` (no em dash).
- No AI product / tool brand names on shareable copy.
- No IRB, clinical, ProHealth, or private field data.
- Market % = inputs; product % and simulations = hers when labelled correctly.
- Design-tool Make URL is historical process only; this PDF pack is the shareable handoff.
