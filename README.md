# 赵郎溪 · Zhao Langxi

A personal visual journal. Photographs, campus and Spain days, and the 小猫钓鱼 story that started on Instagram at [@zhao.langxi](https://www.instagram.com/zhao.langxi).

This door answers what I notice, experience, and create. It is not a résumé.

| | |
| --- | --- |
| **Live** | https://zhao-langxi.github.io/zhao-langxi/ |
| **Instagram** | https://www.instagram.com/zhao.langxi |
| **Who is looking** | [ABOUT.md](./ABOUT.md) · [about.html](https://zhao-langxi.github.io/zhao-langxi/about.html) |
| **How the journal is kept** | [EDITORIAL.md](./EDITORIAL.md) |
| **Ships** | https://jadexzhao.github.io/jadexzhao/ |
| **Classroom** | https://matchaxmoxie.github.io/matchaxmoxie/ |

## What you will find

- [The Days in Between](https://zhao-langxi.github.io/zhao-langxi/days.html) ... fourteen frames from IU, Indiana, and Madrid
- Place pages: [IU](https://zhao-langxi.github.io/zhao-langxi/iu.html), [Indiana](https://zhao-langxi.github.io/zhao-langxi/indiana.html), [Spain](https://zhao-langxi.github.io/zhao-langxi/spain.html)
- [小猫钓鱼](https://zhao-langxi.github.io/zhao-langxi/xiao-mao-diao-yu.html) ... sit with the water, leave the butterfly
- [Writing, on hiatus](https://zhao-langxi.github.io/zhao-langxi/archive.html) ... older Digital Humans and human-robot interaction essays, parked on purpose

I am not filling in family stories I have not written yet. The name note on About stays unfinished until I write it myself.

## Run locally

```bash
npm install
npm run dev      # http://127.0.0.1:4321/zhao-langxi/
npm run build
npm run preview
```

This is an **Astro** site. The build writes static files to `dist/`. GitHub Actions publishes `dist/` to Pages at `/zhao-langxi/`.

Pages setting: GitHub → Settings → Pages → **Source: GitHub Actions** (`.github/workflows/pages.yml`). Do not point Pages at the repo root.

Old root HTML is kept in `legacy-html/`. Essay pages still pull that `main` into the Astro layout.

## Licence

Public site. Formal MIT / CC BY 4.0 files are not confirmed. Do not describe this journal as open source until Jade adds those files.

`jlzhao@iu.edu`
