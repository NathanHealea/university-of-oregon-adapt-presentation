---
marp: true
theme: deck
paginate: true
size: 16:9
---

<style scoped>
  section {
    justify-content:center;
    align-items:center;
  }
</style>

# From Prompt to Product

Using Claude to ship a feature-rich app — from prompt to application.

alpha.grimify.app → beta.grimify.app → grimify.app

---

<style scoped>
  section {
    justify-content:center;
    /* align-items:center; */
  }
</style>

![bg left:40%](./assets/studio-ghibli-nathan-healea-square-512x512.png)

## Nathan Healea

- Analyst Programmer II
- Web Application Team — _Information Services_
- 3+ years @ UO
- 10+ years as a Full-Stack Developer & Software Engineer
- Finance · Healthcare · Higher Education

---

<style scoped>
  blockquote,
  blockquote p,
  blockquote li { font-size: 0.625rem; line-height: 1.4; }
</style>

![bg right:40% 80%](./assets/army-painter-color-wheel.png)

## "I wish this was interactive."

Inspired by [The Army Painter's guide to picking a colour scheme](https://thearmypainter.com/blogs/explore/how-to-pick-a-colour-scheme).
<br/>

| ![w:25%](./assets/army-painter-color-wheel-complentary.png) | ![w:25%](./assets/army-painter-color-wheel-split-complementary.png) | ![w:25%](./assets/army-painter-color-wheel-analogouse.png) |
| :---------------------------------------------------------: | :-----------------------------------------------------------------: | :--------------------------------------------------------: |
|                       _Complementary_                       |                        _Split-complementary_                        |                        _Analogous_                         |

### Prompt

> I'm wanting to create a interactive color wheel for viewing, selecting paints basted on different color theory factors.
> The color wheel should have the following features:
>
> - Colors should be placed on the color wheel.
> - Darker colors should appear further out, while lighter colors appear further in.
> - Colors should be placed on the color wheel based on mathematically based on there hexadecimal values.
> - Users should be able to zoom in on the color wheel, when they do so colors should dissipate out showing more gap between repressing there color differences.
> - Users should be table to select. color schemes and have those areas emphasized on the color wheel.
>   - Complementary Colors
>   - Slit Complementary Colors.
>   - Analogous Colors.

<!-- ---

## The Approach — Ship in Public, One Version at a Time

Rather than build in private for a year, I gave myself three named milestones and shipped each one to the open web.

| Version               | Focus                | What "done" looked like                                     |
| --------------------- | -------------------- | ----------------------------------------------------------- |
| **alpha.grimify.app** | _Foundation_         | Paint data, search, an interactive color wheel              |s
| **beta.grimify.app**  | _Depth_              | Cross-brand comparison, color schemes, personal collections |
| **grimify.app**       | _Polish & community_ | Palettes, painting recipes, admin tools, public sharing     |

Each version is a deployed environment — not a branch, not a slide. Claude was the constant; the **product** is what kept changing.

**Stack:** Next.js · React · TypeScript · Supabase (Postgres + Auth + RLS) · Tailwind / shadcn -->

---

![bg right:40% 80%](./assets/alpha-grimify-app.png)

## alpha.grimify.app - Concept

The first version that proved the idea could exist at all.

- **Paint Data & Search** — paint/brand/hue data model, seed catalog, search by name, hex, or brand
- **Interactive Color Wheel** — paints rendered by hue and lightness, zoom + pan, paint detail view
- **Color Schemes** — complementary, split-complementary, and analogous color indicators

### What Came Next

- **Improved Paint Catalog & Data** — more paints, better color information
- **Personal Collection** — users can catalog the colors they own and identify them on the color wheel
- **Better Filters** — by brand, color scheme, and owned collection

_LINK: [alpha.grimify.app](https://alpha.grimify.app)_

---

![bg left:40% 80%](./assets/beta-grimify-app.png)

## beta.grimify.app - Expansion

Once the foundation was real, then the features expanded, problems started to arise.

- **Cross-brand comparison** — color-distance engine, side-by-side UI, similar paints on every paint detail page, substitutes for discontinued paints
- **Color scheme explorer** — complementary, split-complementary, analogous, and triadic scheme generation; schemes surfaced on every paint
- **Collection tracking** — add/remove paints, personal collection dashboard, toast feedback
- **Color wheel, refined** — HSL wheel, Itten segment boundaries, brand rings & halos, filter by brand / collection / owned

### Problems

- **User Collection** - Utilized the browser storage, no backend database.
- **User Accounts** - Without a user account, profiles, collections, could not be saved or shared.
- **Data** — expanding the paint catalog meant static files grew large, requiring over 2K paints to load at once

_LINK: [beta.grimify.app](https://beta.grimify.app)_

---

![bg right:40% 80%](./assets/grimify-app.png)

## grimify.app - Polish

The version where Grimify stops being a _tool_ and starts being an _application_.

- **Color palettes** — build personal palettes from any source (including the scheme explorer), drag-and-drop reorder, hue-locked HSL swap, markdown descriptions, palette groups, public catalog
- **Painting recipes** — step-by-step recipe builder with sections, techniques, paint ratios, photos, freeform notes
- **Admin & user management** — admin dashboard, role management, account management, collection management
- **Polish everywhere** — toast feedback across auth, collections, palettes, schemes, and admin flows

_LINK: [grimify.app](https://grimify.app)_

---

## What Claude Actually Made Possible

Three deployed environments, dozens of features — built solo, on nights and weekends. None of it works without these two things:

- **`CLAUDE.md` as the project contract** — tech stack, domain-module structure, naming conventions, workflow routing. Claude reads it before every command.
- **A four-command spine** — `/plan` writes the feature doc, `/implement` walks the diff one commit at a time inside a worktree, `/stage` runs build + lint and opens the PR, `/release` cleans up after merge.

The same pattern is now what I reach for at work — different remote, same muscle memory.

_LINK: [github - claude](https://github.com/NathanHealea/claude)_

---

<style scoped>
  section {
    justify-content:center;
    align-items:center;
  }

  section h2 {
    border: none;
    font-size: var(--font-size-h1);
    line-height: var(--line-height-h1);
    letter-spacing: -0.02em;
    color: var(--color-accent);
    margin: 0 0 16px;
    /* Gold glow */
    text-shadow:
      0 0 24px oklch(72% 0.16 50 / 0.6),
      0 0 48px oklch(72% 0.16 50 / 0.25);
  }
</style>

## Thanks

Questions?
