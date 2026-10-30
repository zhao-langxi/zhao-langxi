# zhao-langxi · editorial charter

**Front door (October 2026):** a personal visual journal. Come to IU, Indiana weekends, Spain light, and 小猫钓鱼. Digital Humans and human-robot interaction (HRI) essays are **on hiatus** in `archive.html`. This file describes both the live journal and the parked writing.

**Status:** Independent public site. Formal open licences (MIT code · CC BY 4.0 writing) proposed ... confirm before claiming open source.  
**Live site:** https://zhao-langxi.github.io/zhao-langxi/

## What this is

A journal of photographs and days. Not a hire portfolio. Not a robotics blog on the homepage.

The older essays remain a traceable writing project: question → evidence → interpretation → what remains unknown. They live in the archive until Jade asks to bring them forward.

## Guiding lines

**Journal (live):** Stay with the water long enough to see what is in front of you.

**Parked essays:** We keep asking what robots will be capable of doing. What should we be asking about the people who will have to live alongside them?

Do not invent memories, captions, or a family story for the given name. If a sentence is not already on the site or in Jade's own notes, leave the gap.

## The days

Fourteen frames on `days.html`, grouped in `src/lib/photos.ts`:

| Group | Place | Meaning already on the page |
| --- | --- | --- |
| Becoming | IU Bloomington | Ordinary campus nights and limestone, not only big events |
| The familiar things | Indiana | Home weekends and things that already had a name |
| The little things | Mixed | Light, flowers, a pause |
| Somewhere new | Madrid, Spring 2026 | Study abroad. Streets that were unremarkable to everyone else |

Place pages (`iu.html`, `indiana.html`, `spain.html`) reuse those pictures. Homepage shows three doorways into IU, Indiana, and Spain, plus the fishing photograph.

Credits: `origin` on each photo is `original` or `licensed`. Do not strip a credit if a licensed still is added later.

## 小猫钓鱼

The Instagram origin story. Sit with the water. Leave the butterfly. The kitten is a picture-book companion, not a claimed pet. Full page: `xiao-mao-diao-yu.html`.

## Parked essay themes (URLs unchanged)

| Theme | Purpose | Existing essays |
| --- | --- | --- |
| **Human First** | Consent, trust, accessibility, interruption, responsibility | `question.html` · `web-and-social-2027.html` |
| **Robots in the Wild** | Documented deployments and public evidence (no implied personal fieldwork) | `places.html` |
| **After the Demo** | What demos establish, what they hide | Future flagship and revisions |

Digital Humans writing stays as the earlier chapter of the same problem. It is not the homepage.

## Evidence labels (parked essays and research notes)

| Label | Meaning |
| --- | --- |
| **Observed** | Something you personally witnessed or documented. |
| **Reported** | A claim supported by a linked source. |
| **Interpreted** | Your analysis. |
| **Open question** | Not established yet. |

## Image and writing stack

| Piece | Location |
| --- | --- |
| Astro pages | `src/pages/` |
| Photo records | `src/lib/photos.ts` |
| Shared layout / Rivet CSS | `src/layouts/Base.astro`, `src/styles/rivet.css` |
| Built site | `dist/` via `npm run build` |
| Parked essays (legacy HTML) | `legacy-html/` pulled into Astro |
| Bibliography | `research/bibliography.md` (copied under `public/research/` for the built site) |
| Reading library | `research/reading-library.md` |
| Research notes | `research/notes/` |
| Essay reviews | `editorial/essay-reviews.md` (do not overwrite essay HTML without approval) |
| Flagship outline | `editorial/flagship-plan.md` ... *The right to interrupt*, **not published** |

`public/editorial/` and `public/research/` mirror the markdown so the static host can serve the same notes. Edit the copies in `editorial/` and `research/` first, then refresh the `public/` twins.

## Technical architecture

- Astro 5, static output, `base: /zhao-langxi/`, `trailingSlash: never`, `build.format: file`
- `npm run dev` on `127.0.0.1:4321`
- Actions: Node 22, `npm ci`, `npm run build`, upload `dist/`
- Contrast toggle and skip link live in the shared layout
- `scripts/check-site.mjs` exists from an older HTML-root era. Prefer `npm run build` as the current gate. If the checker still walks repo-root HTML and treats `/zhao-langxi/` as a disk path, treat a failure there as inconclusive unless you added a new broken public URL.

## Immediate order

1. Journal homepage, About, days, place pages, 小猫钓鱼 ... **shipped** (Astro front door, Oct 2026).
2. Review three existing essays (`editorial/essay-reviews.md`) before silent body rewrites.
3. Draft one evidence-backed flagship only if Jade asks (working title: *The right to interrupt*).
4. Do not claim open licences until Jade approves MIT / CC BY 4.0 files.
5. Do not turn About into a second jadexzhao résumé.

## Boundaries

- UK spelling in English site chrome; no em dash in Jade-facing copy.
- No invented fieldwork, lab results, or robotics engineer persona.
- No private client, clinical, or IRB material in the public repo.
- [jadexzhao](https://jadexzhao.github.io/jadexzhao/) for ships · [matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/) for coursework · Instagram for the original story.
