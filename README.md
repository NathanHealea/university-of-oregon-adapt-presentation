# Marp Presentation Template

A clean, branch-based [Marp](https://marp.app/) workspace for building slide decks. Each presentation lives on its own branch — clone, branch, and start writing slides.

---

## How it works

| Branch | Presentation |
| ------ | ------------ |
| `main` | Template / boilerplate |

Each branch has a single `src/deck.md` where all your slides live and an `src/assets/` folder for images and media. Build outputs land in `dist/`.

---

## Quick start

```bash
# Install dependencies (once per branch)
npm install

# Live-reload preview in the browser
npm run dev

# Export
npm run build   # → dist/deck.html
npm run pdf     # → dist/deck.pdf
npm run pptx    # → dist/deck.pptx
```

The dev server opens at `http://localhost:8080` and reloads on every save.

---

## Project layout

```
.
├── src/
│   ├── deck.md       # Your slides — start here
│   └── assets/       # Images, videos, and other media
├── dist/             # Build outputs (git-ignored)
├── .marprc.yml       # Marp config (html + local files enabled)
└── package.json
```

---

## Writing slides

Slides are written in Markdown with a few Marp-specific additions. Separate slides with `---`.

```markdown
---
marp: true
theme: default
paginate: true
---

# Title Slide

Your subtitle here

---

## Second Slide

- Bullet one
- Bullet two
- Bullet three

---

## Image slide

![bg right](./assets/my-image.png)

Content alongside the image
```

### Useful directives

| Directive | Description |
| --------- | ----------- |
| `marp: true` | Enable Marp (required in frontmatter) |
| `theme: default` | Built-in themes: `default`, `gaia`, `uncover` |
| `paginate: true` | Show page numbers |
| `backgroundColor: #fff` | Set slide background color |
| `![bg](url)` | Full-bleed background image |
| `![bg left](url)` | Split background left |
| `![bg right](url)` | Split background right |

### Scoped styles

Add a `<style>` block anywhere in your deck to apply custom CSS:

```markdown
<style>
section {
  font-family: 'Inter', sans-serif;
}
h1 {
  color: #005248;
}
</style>
```

---

## Starting a new presentation

```bash
git checkout main
git checkout -b my-talk-name
```

Then edit `src/deck.md` and drop any media into `src/assets/`.

---

## Tips

- **Aspect ratio** defaults to 16:9. Add `size: 4:3` to frontmatter for classic format.
- **Speaker notes** go in HTML comments: `<!-- This is a note -->`.
- **Math** is supported via KaTeX when `math: katex` is in frontmatter.
- **Local images** always work — `--allow-local-files` is pre-configured in `.marprc.yml`.
- **PDF export** renders each slide as a page at the correct aspect ratio.
- **PPTX export** creates an editable PowerPoint file with one slide per page.

---

## Resources

- [Marp documentation](https://marpit.marp.app/)
- [Marp CLI reference](https://github.com/marp-team/marp-cli)
- [Marp theme gallery](https://github.com/marp-team/marp-core/tree/main/themes)
- [Marpit Markdown syntax](https://marpit.marp.app/markdown)
