# zhao-langxi

**赵郎溪** ... working essays on **human-robot interaction**, human agency, and everyday life with intelligent machines.

| | |
| --- | --- |
| **Live** | https://zhao-langxi.github.io/zhao-langxi/ |
| **Local** | `npm install && npm run dev` then open http://127.0.0.1:4321/zhao-langxi/ |
| **Editorial** | [EDITORIAL.md](./EDITORIAL.md) |
| **Ships** | https://jadexzhao.github.io/jadexzhao/ |
| **Classroom** | https://matchaxmoxie.github.io/matchaxmoxie/ |

This door is an **Astro** publication (Markdown notes + `.astro` pages), not a briefcase-style folder of hand-written HTML. The build still ships static files to GitHub Pages at `/zhao-langxi/`.

**Job:** What Jade thinks about (HRI, agency, everyday machines). Ships live on jadexzhao; coursework on matchaxmoxie.

**Licences:** Public site; formal MIT / CC BY 4.0 files not yet confirmed. Do not describe the publication as openly licensed until Jade approves.

## Commands

```bash
npm install
npm run dev      # http://127.0.0.1:4321/zhao-langxi/
npm run build
npm run preview
```

Old root HTML is kept in `legacy-html/` so essay wording is not silently rewritten. Essay pages pull that `main` into the Astro layout.

## Pages settings

GitHub → Settings → Pages → **Source: GitHub Actions** (workflow `.github/workflows/pages.yml`). Do not point Pages at the repo root after this switch.

## Boundaries

Essays and independent notes only. HRI and social questions, not robotics engineering tutorials. See `EDITORIAL.md`.
