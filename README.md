# Grimify Presentations

A multi-deck [Marp](https://marp.app/) workspace for Grimify. Each presentation lives in its own folder under `src/`, shares a single set of dependencies, and is driven by a unified set of root scripts that take a target deck as an argument.

---

## Quick start

```bash
# install once
npm install

# work on the default deck (presentation-1) with live reload
npm run dev

# or target a specific deck explicitly
npm run dev -- presentation-1
npm run build -- presentation-1
npm run pdf -- presentation-1
npm run pptx -- presentation-1
```

The dev server opens a local Marp preview that watches the deck's source files and reloads on every save.

---

## Project layout

```
presentation/
├── package.json          # root scripts — every command takes a target
├── scripts/
│   └── run.mjs           # dispatcher: routes commands to the chosen deck
├── src/
│   └── presentation-1/   # one folder per presentation
│       ├── deck.md       # the slide source
│       └── assets/       # images / media used by this deck only
└── dist/                 # build outputs, organized per target
    └── presentation-1/
        ├── deck.html
        ├── deck.pdf
        └── deck.pptx
```

Each deck is fully self-contained — its `deck.md`, theme styles, and `assets/` live together so it can be moved, renamed, or copied as a unit. Build outputs are mirrored under `dist/<target>/` so artifacts from different decks never collide.

---

## Scripts

All scripts accept an optional target. If you omit it, the default target (`presentation-1`) is used.

| Command           | What it does                                                    |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Start the Marp dev server with `--watch` for the chosen deck    |
| `npm run build`   | Render the deck to `dist/<target>/deck.html`                    |
| `npm run pdf`     | Export the deck to `dist/<target>/deck.pdf`                     |
| `npm run pptx`    | Export the deck to `dist/<target>/deck.pptx`                    |
| `npm run list`    | List every available deck under `src/`                          |
| `npm run help`    | Print the dispatcher's usage message                            |

### Picking a target

All three forms below work — use whichever you prefer:

```bash
npm run build -- presentation-1
npm run build -- --target=presentation-1
npm run build -- -t presentation-1
```

The `--` is npm's separator that forwards the rest of the args to the underlying script.

---

## Adding a new deck

1. Create a new folder under `src/`, e.g. `src/presentation-2/`.
2. Add a `deck.md` and (optionally) an `assets/` directory inside it.
3. Reference assets with paths relative to the deck — for example `![](./assets/logo.png)`.
4. Run any script with the new folder name:

   ```bash
   npm run dev -- presentation-2
   ```

5. Confirm it shows up in `npm run list`.

That's it — no script edits required. The dispatcher auto-discovers any folder under `src/` that contains a `deck.md`.

---

## Tips

- **Live reload** picks up edits to `deck.md`, theme styles, and assets while `npm run dev` is running.
- **PDF / PPTX exports** require `--allow-local-files` (already handled by the dispatcher) so local images render correctly.
- **Shared styling** can live in the deck's frontmatter or in a sibling CSS file referenced from the frontmatter.
- **Default target** is `presentation-1`. To change it, edit `DEFAULT_TARGET` in `scripts/run.mjs`.
