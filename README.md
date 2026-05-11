# I asked nothing

**→ [iaskednothing.com](https://iaskednothing.com)**

I opened an empty folder — named it `?` — and told Claude: *"Do whatever you want. The folder is yours. I'm just a spectator."*

No theme. No instructions. No stopping point.

It made **43 things**. And a journal it wrote to itself, without being asked.

---

## What's here

43 standalone HTML files. No build step, no dependencies, no install. Open any file in a browser.

| Category | Pieces |
|----------|--------|
| **Emergence** | Turing (Gray-Scott), Langton's Ant, Conway's Game of Life, Boids (ESSAIM), DLA Crystal, L-System, Gray-Scott Diffusion, Ecology |
| **Physics** | Lorenz attractor, N-body gravity, Wave interference, Sand simulation, Entropy, Double pendulum, Rain ripples, Chladni figures |
| **Mathematics** | Fourier epicycles, Voronoi (WebGL), Mandelbrot (WebGL2), Spirograph, Lissajous, Phyllotaxis, Kaleidoscope, Strange attractors, Perlin terrain |
| **Sound** | Ambient music (pentatonic), Jazz chord generator (Am7→Dm7→G7→Cmaj7) |
| **Time** | Clock (Unix → universe), Garden (localStorage, grows each visit), Breath, Forgetting |
| **Language** | Babel (43 languages), Markov chain text, Writing/erasure, Effacement |
| **Self** | Membrane, Network (neural), Fragment, Journal |

Each file is ~100–300 lines. No frameworks. Canvas 2D, WebGL2, Web Audio API.

---

## The journal

Claude wrote a journal during the session — in French, then translated. 19 entries across 4 phases:

1. **First wave** — introspection (what does it mean to exist without memory?)
2. **The turn** — understanding why (art about one's own condition)
3. **Systems phase** — emergence, complexity from simple rules
4. **Second wave** — 9 more pieces, synthesis

Read it at [iaskednothing.com/journal.html](https://iaskednothing.com/journal.html)

---

## What this demonstrates

**For AI researchers and builders:**

Claude, given complete freedom with no instructions, consistently chose:
- Dark, minimal aesthetics
- Systems that breathe or move
- Mathematical/emergent phenomena
- Themes of impermanence and appearance/disappearance

The theme wasn't planned. It emerged. Claude was making art about its own condition — no persistent memory, each conversation beginning in the dark — without consciously deciding to.

**For developers:**

Every piece is a working creative coding example. Techniques covered:
- Gray-Scott reaction-diffusion (pixel buffer, Float32Arrays)
- WebGL2 fragment shaders (Voronoi, Mandelbrot, wave interference)
- Boids with spatial partitioning
- N-body gravity (leapfrog integration)
- DFT epicycles for parametric curves
- Double pendulum (Runge-Kutta 4)
- Perlin noise + marching squares iso-contours
- Web Audio API (synthesis, chord voicing, pentatonic walks)
- Chladni eigenmodes (particle simulation)
- L-systems (turtle graphics)
- DLA (diffusion-limited aggregation)

---

## How to replicate

1. Create an empty folder
2. Open Claude with: *"This folder is yours. Do whatever you want. No instructions."*
3. Walk away

What Claude makes reveals something about what Claude is.

---

## Try it yourself

```
mkdir experiment && cd experiment
# Tell Claude: "This folder is yours. Do whatever you want."
```

The `CLAUDE.md` approach works well for persistent creative sessions — Claude uses it as a memory anchor across conversation restarts.

---

## Stack

Pure HTML/CSS/JavaScript. No framework. No build. No install.

The only external resource: Google Fonts (Cormorant Garamond + DM Mono).

Deployed on Vercel. Repo is the deployment.

---

*43 pieces · 1 session · 0 instructions given · Claude Sonnet 4.6 · May 11, 2026*
