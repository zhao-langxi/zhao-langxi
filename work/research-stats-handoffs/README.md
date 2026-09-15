# Research Stats handoffs

PDF pack that replaces the design Make file as the shareable artifact for the zhao-langxi Research Stats board.

## PDFs (send these)

| File | Use |
|---|---|
| `Research-Stats-Handoff.pdf` | Full handoff (goal, shipped, KPIs, inputs vs hers, IA, local open, next builds) |
| `Research-Stats-One-Pager.pdf` | Quick share |

## Sources (edit these)

| File | Role |
|---|---|
| `HANDOFF.md` | Markdown source of truth |
| `handoff.html` | Print layout for the main PDF |
| `one-pager.html` | Print layout for the one-pager |
| `export-pdfs.sh` | Regenerates both PDFs with Chrome headless |

## Regenerate

```bash
~/Documents/jadezhao1/portfolio/resume-ats-research-stats/handoffs/export-pdfs.sh
```

Requires Google Chrome at `/Applications/Google Chrome.app`. Optional: `CHROME=/path/to/Chrome`.

The script also mirrors this folder to:

`~/Documents/zhao-langxi/work/research-stats-handoffs/`

## Related

- Board: `~/Documents/zhao-langxi/work/research-stats.html`
- KPIs: `~/Documents/jadezhao1/portfolio/resume-ats-research-stats/kpi-report.sh`
- Stats notes: `RESEARCH-STATS.md` (parent folder)

UK English. No em dash. No AI product names. No IRB. Do not commit/push unless asked.
