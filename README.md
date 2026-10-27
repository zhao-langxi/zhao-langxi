# zhao-langxi

**赵郎溪** ... a come-to-IU social-butterfly door. Things you can do as an Indiana University student, on campus, across Indiana, and in Spain. Starts from the original Instagram story at [@zhao.langxi](https://www.instagram.com/zhao.langxi).

| | |
| --- | --- |
| **Live** | https://zhao-langxi.github.io/zhao-langxi/ |
| **Local** | `npm install && npm run dev` then open http://127.0.0.1:4321/zhao-langxi/ |
| **Instagram** | https://www.instagram.com/zhao.langxi |
| **Ships** | https://jadexzhao.github.io/jadexzhao/ |
| **Classroom** | https://matchaxmoxie.github.io/matchaxmoxie/ |

This door is an **Astro** site. The build ships static files to GitHub Pages at `/zhao-langxi/`.

**Job right now:** student life first. Digital Humans / human-robot interaction essays are on hiatus in the [archive](https://zhao-langxi.github.io/zhao-langxi/archive.html).

**Licences:** Public site; formal MIT / CC BY 4.0 files not yet confirmed. Do not describe the publication as openly licensed until Jade approves.

## Commands

```bash
npm install
npm run dev      # http://127.0.0.1:4321/zhao-langxi/
npm run build
npm run preview
```

Old root HTML is kept in `legacy-html/`. Essay pages still pull that `main` into the Astro layout.

## Pages settings

GitHub → Settings → Pages → **Source: GitHub Actions** (workflow `.github/workflows/pages.yml`). Do not point Pages at the repo root after this switch.
