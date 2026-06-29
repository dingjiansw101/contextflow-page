# ContextFlow — Project Page

Live site: **https://dingjiansw101.github.io/contextflow-page/**

A lightweight, self-contained academic project page (Bulma + Font Awesome +
Academicons via CDN — no build step). Edit the HTML directly and push; GitHub
Pages redeploys automatically from the `main` branch.

## Editing checklist (search the HTML for `TODO`)

- [ ] **Title / subtitle** — `index.html` hero section.
- [ ] **Authors & affiliations** — hero `publication-authors` blocks.
- [ ] **Venue / year** — `publication-venue`.
- [ ] **Buttons** — set the `href`s for Paper / arXiv / Video / Code / Data
      (delete any you don't need).
- [ ] **Abstract** — Abstract section.
- [ ] **Figures** — drop files into `static/images/` and they replace the
      dashed placeholders automatically:
  - `static/images/teaser.png`
  - `static/images/method.png`
  - `static/images/results.png`
- [ ] **Video** — paste a YouTube embed URL (commented `<iframe>` is ready) or
      use a local `static/videos/*.mp4`.
- [ ] **BibTeX** — BibTeX section.
- [ ] **Social preview** — `og:image` / `og:url` meta tags in `<head>`.

## Local preview

```bash
cd contextflow-page
python3 -m http.server 8000
# open http://localhost:8000
```

## Layout

```
index.html              # the whole page
static/css/index.css    # styles
static/js/index.js      # carousel/slider init + smooth scroll
static/images/          # figures (teaser, method, results, favicon)
static/videos/          # local video files (optional)
static/pdfs/            # paper / supplementary PDFs (optional)
.nojekyll               # serve files as-is (skip Jekyll)
```

## Hosting notes

- Published from the `main` branch, root (`/`).
- On a **free** GitHub plan, Pages serves only while the repo is **public**.
  Making the repo private takes the live page offline until it's public again
  (Pro/Team/Enterprise can serve Pages from private repos).
- Template inspired by the [Nerfies](https://github.com/nerfies/nerfies.github.io)
  project page (CC BY-SA 4.0).
