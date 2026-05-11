# iaskednothing — Design System

> Dark, mathematical, impermanent. Built for a site about what AI makes when left alone.  
> Every design decision reflects the project's subject: things that emerge from simple rules.

---

## Design Philosophy

**Tone**: Meditative scientific instrument. Not a portfolio. Not a product. An observatory.

**Core constraints**:
- Dark always. Never light mode. The content is visual computation — it needs darkness to read.
- One accent color per surface, not distributed decoration
- Typography does most of the work. Motion is minimal and purposeful.
- Borders and whitespace over shadows and depth
- Nothing that shouts. Everything that persists.

**Unforgettable element**: The accent color — `#b8a8e8`, a desaturated lavender — applied sparingly against near-black. It reads as signal, not decoration.

---

## Colors

### Background surfaces (darkest to lightest)

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#050508` | Page floor. Near-black with a blue-violet undertone. Never pure black. |
| `--bg2` | `#080810` | Secondary sections, alternate bands |
| `--bg3` | `#0c0c18` | Code blocks, diagram backgrounds, elevated surfaces |

### Text

| Token | Value | Use |
|-------|-------|-----|
| `--text` | `#e8e2d6` | Primary text. Warm white — never pure `#ffffff`. |
| `--sub` | `#9d9689` | Secondary text, descriptions, metadata |
| `--dim` | `rgba(157,150,137,0.45)` | Tertiary: tags, labels, captions |

### Accent (use sparingly — one per context)

| Token | Value | Use |
|-------|-------|-----|
| `--accent` | `#b8a8e8` | Primary accent: lavender. CTAs, active states, highlighted values, orbit animation. |
| `--green` | `#7dd8a0` | Secondary: success states, memory/skills category |
| `--amber` | `#d8c070` | Tertiary: warning states, function names in code |
| `--blue` | `#78c0f0` | Quaternary: agents/orchestration category |
| `--coral` | `#e08878` | Error states, warm contrast |

### Borders

| Token | Value | Use |
|-------|-------|-----|
| `--border` | `rgba(255,255,255,0.08)` | Standard border — hairline, almost invisible |
| `--border2` | `rgba(255,255,255,0.04)` | Softer divider |

**Rule**: Never use box-shadow for depth. Use `border: 1px solid var(--border)` instead.

---

## Typography

### Font families

**Display & Body**: Cormorant Garamond  
`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap')`

**Monospace / UI**: DM Mono  
`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap')`

**BANNED**: Inter, Roboto, Arial, system-ui. Any neutral humanist sans.

---

### Type scale

| Role | Font | Size | Weight | Style | Letter-spacing | Use |
|------|------|------|--------|-------|----------------|-----|
| Display | Cormorant | `clamp(4rem, 12vw, 8.5rem)` | 300 | — | `-0.03em` | Hero titles |
| H1 / Page title | Cormorant | `clamp(2rem, 5vw, 3.5rem)` | 300 | italic | 0 | Page heroes |
| H2 / Section | Cormorant | `clamp(1.5rem, 3.5vw, 2.2rem)` | 300 | italic | 0 | Section heads |
| H3 / Card title | Cormorant | `1.8rem` | 300 | — | `-0.02em` | Featured cards |
| Body large | Cormorant | `1.08rem` | 300 | italic | 0 | Lead paragraphs, subtitles |
| Body | Cormorant | `1.05rem` | 300 | — | 0 | Running text |
| Body small | Cormorant | `0.88rem` | 300 | italic | 0 | Card descriptions |
| Tag / Eyebrow | DM Mono | `0.46–0.5rem` | 400 | — | `0.28em` | Section labels, categories |
| UI / Nav | DM Mono | `0.52rem` | 400 | — | `0.22em` | Navigation links |
| Caption | DM Mono | `0.42–0.44rem` | 400 | — | `0.16em` | Metadata, tech tags |
| Code | DM Mono | `0.68rem` | 400 | — | 0 | Code blocks |

**Line heights**: Display `0.95` · Body `1.75–1.85` · Small `1.5–1.6` · Code `1.72`

**All DM Mono text is `text-transform: uppercase`.**

---

## Spacing

Base unit: `0.5rem` (8px)

| Token | Value | Use |
|-------|-------|-----|
| `--sp-1` | `0.5rem` | Micro gaps |
| `--sp-2` | `1rem` | Component internal spacing |
| `--sp-3` | `1.5rem` | Small gaps between elements |
| `--sp-4` | `2rem` | Standard component spacing |
| `--sp-6` | `3rem` | Section sub-elements |
| `--sp-8` | `4rem` | Medium sections |
| `--sp-12` | `6rem` | Major section padding |
| `--sp-16` | `8rem` | Bottom of content sections |

**Container**: `max-width: 1120px`, centered, `padding: 0 2.5rem`  
**Mobile**: `padding: 0 1.2rem`

---

## Layout

### Grid patterns

**3-column feature grid** (equal columns):
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
border: 1px solid var(--border); /* cells share outer border */
```
Collapses to `1fr 1fr` at `<860px`, `1fr` at `<520px`.

**4-column piece grid** (catalog):
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
```
3 cols at `<1000px`, 2 cols at `<680px`, 1 col at `<400px`.

**2-column content + code**:
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3rem;
align-items: start;
```
Collapses to `1fr` at `<800px`.

### Border rhythm

Sections are separated by `border-top: 1px solid var(--border)` — not by background changes or shadows. The border IS the section separator.

Cards share borders with their grid container:  
- outer container: `border: 1px solid var(--border)`  
- cells: `border-right` and `border-bottom` between cells  
- no duplicate outer borders

---

## Header

Fixed, full-width, `height: 56px`. Set as `--h: 56px` on `:root`.

```css
position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
height: 56px;
background: rgba(5,5,8,0.92);
backdrop-filter: blur(18px);
border-bottom: 1px solid var(--border);
```

**Logo**: `iasked` + `nothing.` (italic, accent color) in DM Mono `0.72rem`. Preceded by an SVG orbit animation — small dot rotating around a circle, accent colored.

**Nav links**: DM Mono `0.52rem`, uppercase, `0.22em` spacing. Default `var(--sub)`, hover `var(--text)`, active `var(--text)`.

**GitHub button**: Bordered, DM Mono `0.5rem`. `border: 1px solid var(--border)`, hover lightens border.

---

## Buttons

**Two variants only:**

```css
/* Primary */
.btn-primary {
  color: var(--accent);
  border: 1px solid rgba(184,168,232,0.35);
  padding: 0.75rem 1.8rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.52rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  background: none;
  transition: all 0.2s;
}
.btn-primary:hover {
  border-color: var(--accent);
  background: rgba(184,168,232,0.06);
}

/* Ghost */
.btn-ghost {
  color: var(--sub);
  border: 1px solid var(--border);
}
.btn-ghost:hover {
  color: var(--text);
  border-color: rgba(255,255,255,0.2);
}
```

**No border-radius.** Square edges always.  
**No fill.** Buttons are always outlined, never solid background.

---

## Cards

### Feature card (3-up grid)
```css
padding: 3rem 2rem 2rem;
border-right: 1px solid var(--border);
min-height: 200px;
display: flex; flex-direction: column; gap: 1rem;
transition: background 0.2s;
```
Hover: `background: rgba(255,255,255,0.02)` — barely perceptible.

Structure: large name (Cormorant 1.9rem, weight 300) → tech tag (DM Mono, dim) → description (italic, `--sub`) → badge (DM Mono, `--accent`, 40% opacity).

### Catalog card (4-up grid)
Compact: `padding: 2rem 2rem 1.5rem`, `min-height: 130px`.  
Structure: pip dot (category color) + name (DM Mono uppercase) → description (italic small) → tech tag (dim, tiny).

### Code block
```css
background: var(--bg3);
border: 1px solid var(--border);
```
Header bar with language label (DM Mono, dim) + copy button (bordered).  
Code: DM Mono `0.68rem`, `line-height: 1.72`.  
Syntax: keywords `var(--accent)` · strings `var(--green)` · comments `rgba(155,150,137,0.5)` · functions `var(--amber)`.

---

## Page transitions

On page entry: a `1px` horizontal line in `var(--accent)` sweeps left-to-right at `top: 56px` (below header), 480ms, `cubic-bezier(0.4, 0, 0.2, 1)`, fades to transparent at end. No body opacity animation.

On piece pages: a fixed bottom bar shows `← Previous name` · `N / 54` · `Next name →` in DM Mono `0.46rem`, `rgba(157,150,137,0.28)`, hover `rgba(184,168,232,0.7)`. Background: gradient from `rgba(3,3,8,0.75)` to transparent.

---

## Logo mark

SVG orbit animation — concentric circle with a small dot rotating:

```svg
<svg viewBox="0 0 18 18" width="18" height="18">
  <circle fill="none" stroke="var(--accent)" stroke-width="1" opacity=".35" cx="9" cy="9" r="7"/>
  <g style="transform-origin:9px 9px; animation:orbit 10s linear infinite">
    <circle fill="var(--accent)" opacity=".75" cx="9" cy="3.2" r="1.4"/>
  </g>
</svg>
```

```css
@keyframes orbit { to { transform: rotate(360deg); } }
```

---

## Dos and Don'ts

### Do
- Use `--bg` as the only page floor color — always near-black, never gray
- Apply `--accent` to one thing per section (CTA, active nav link, or highlighted value)
- Use Cormorant Garamond for everything except UI/code/labels
- Keep buttons outlined, square, monospace text
- Separate sections with thin borders, not whitespace alone
- Let canvas animations fill the full viewport — header floats above as overlay

### Don't
- Never use `box-shadow` — borders and background-color changes provide all depth needed
- Never use `border-radius` on cards, buttons, or containers
- Never use a warm or colorful palette — color is signal, not decoration
- Never center a hero or major heading — left-aligned always
- Don't add motion to more than one thing per page — one animated element per scene
- Don't use Inter, Roboto, or system-ui — Cormorant + DM Mono only

---

## Piece pages (canvas-based)

Pieces are full-viewport canvas animations. The header is an overlay — never push content with `padding-top`.

Each piece:
- `html, body { overflow: hidden; background: [near-black]; }`
- Canvas fills viewport (`position: fixed; inset: 0` or `innerWidth × innerHeight`)
- One accent color per piece (lavender, teal, gold, or amber — never all at once)
- Label: DM Mono, small, fixed position, very low opacity (`0.12–0.22`)
- The piece is the entire UI — no chrome, no controls unless essential

---

## File structure

```
/
├── index.html          — landing
├── journal.html        — 21-entry journal
├── mémoire.html        — CLAUDE.md generator tool
├── skills.html         — 20 Claude techniques
├── agents.html         — 5 orchestration patterns
├── guide.html          — full guide
├── site.css            — shared design tokens + components
├── header.js           — shared header + piece navigation (injected)
├── DESIGN.md           — this file
├── [54 piece files]    — standalone canvas animations
└── sitemap.xml
```
