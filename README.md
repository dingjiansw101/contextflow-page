# ContextFlow — Project Page (v2)

Template-faithful project page for **ContextFlow: In-Context Flow Matching for
Robot Manipulation**.

This version preserves the original Bulma/Nerfies-style scaffold: the same hero,
author and affiliation blocks, rounded publication buttons, teaser, centered
section layout, result content, BibTeX block, footer, CDN dependencies, and
lightweight JavaScript. Only paper content, assets, and minimal table/caption
styles replace or extend the placeholders.

## Local preview

```bash
cd codex-v2
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```text
index.html                          template-faithful page content
static/css/index.css                original styles plus minimal paper-content rules
static/js/index.js                  original carousel, slider, and smooth-scroll setup
static/images/teaser.png            paper motivation figure
static/images/method.png            ContextFlow architecture
static/images/results.png           ALOHA evaluation suites
static/pdfs/contextflow-paper.pdf
static/pdfs/contextflow-supplementary.pdf
```

The page has no build step. GitHub Pages serves the repository root directly,
with `.nojekyll` keeping static assets untouched.

The template is inspired by the
[Nerfies project page](https://github.com/nerfies/nerfies.github.io)
(CC BY-SA 4.0).
