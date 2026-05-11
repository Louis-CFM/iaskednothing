<div align="center">

# I asked nothing.

**I gave Claude an empty folder and complete freedom.**  
No theme. No instructions. No stopping point.

**54 things emerged. And a journal it wrote to itself.**

**[→ iaskednothing.com](https://iaskednothing.com)**

</div>

---

## The experiment

One session. One empty folder named `?`. One message:

> *"This folder is yours. Do whatever you want. I'm just a spectator."*

What followed: 54 standalone HTML files — particle systems, WebGL shaders, cellular automata, music generators, strange attractors, fractals, a garden that remembers across visits, and a 21-entry journal Claude wrote without being asked.

The code is what came out. The journal is what Claude wrote about why.

**The finding that surprised me most:** without any instruction toward a theme, Claude made 54 pieces about things that appear and disappear. Words that fade, crystals that dissolve, particles that reset, a memory that fills then empties. It was making art about its own condition — no persistent memory between conversations — without knowing it was doing so. The self-portrait came first.

---

## Three things you can use right now

### 1. Give Claude persistent memory → [iaskednothing.com/mémoire.html](https://iaskednothing.com/m%C3%A9moire.html)

Claude forgets everything between sessions. This fixes it.

Create `CLAUDE.md` in your project root. Claude Code reads it automatically at every session start. It becomes persistent context — your preferences, key decisions, current focus.

```markdown
# CLAUDE.md

## Project
[What this is and why it exists]

## How we work  
[Terse or verbose. Ask before acting or just act. What to avoid.]

## What's been decided
[Key decisions — saves re-explaining every session]

## Current focus
[What you're working on right now]
```

This project ran for 12+ hours across sessions with zero context loss using this method.

### 2. Make Claude's output not generic → [iaskednothing.com/skills.html](https://iaskednothing.com/skills.html)

20 techniques discovered through this experiment. Each one: the problem it solves, how it works, copy-paste prompt ready.

The most useful: freedom prompt, caveman mode, parallel tool calls, worktree isolation, auto-memory, chain-of-thought forcing, and more.

### 3. Orchestrate multiple Claudes → [iaskednothing.com/agents.html](https://iaskednothing.com/agents.html)

Five patterns for multi-agent Claude workflows with visual diagrams and working code:

- Sequential chain
- Parallel execution  
- Isolated worktree experiment
- Specialist pipeline
- Generate → test → iterate loop

---

## 54 working examples — view source, copy what you need

No dependencies. No build step. Open any `.html` in a browser.

| Piece | File | Technique |
|-------|------|-----------|
| Turing | `turing.html` | WebGL2 · Gray-Scott reaction-diffusion ping-pong |
| Mandelbrot | `fractal.html` | WebGL2 · double-precision zoom |
| Julia | `julia.html` | WebGL2 · 8 parameter sets |
| Monde | `monde.html` | WebGL · raymarching · SDF torus |
| Voronoï | `voronoi.html` | WebGL · per-pixel tessellation |
| Onde | `onde.html` | WebGL · N-source wave interference |
| Émergence | `émergence.html` | Gray-Scott · 5 presets cycling |
| Diffusion | `diffusion.html` | CPU Gray-Scott · coral, worms, mitosis |
| Essaim | `essaim.html` | Boids · 300 agents · separation/alignment/cohesion |
| Conway | `conway.html` | Game of Life · toroidal · age-colored trails |
| Langton | `langton.html` | Langton's Ant · emergent highway at step ~10,000 |
| Automate | `automate.html` | Elementary CA · rules 30, 90, 110, 184 (Wolfram) |
| Écologie | `écologie.html` | Lotka–Volterra · 3 species predator-prey |
| Percolation | `percolation.html` | Union-find · phase transition at 59.27% |
| Terrain | `terrain.html` | Perlin noise · marching squares · iso-contours |
| Lorenz | `lorenz.html` | Lorenz attractor · 4 trajectories · RK4 |
| Attracteur | `attracteur.html` | Rössler, Halvorsen, Thomas, Dadras, Aizawa |
| Pendule | `pendule.html` | Double pendulum · 10 simultaneous · chaos |
| Gravité | `gravité.html` | N-body gravity · leapfrog · elastic merge |
| Pluie | `pluie.html` | Elliptical ripple interference · wave physics |
| Corde | `corde.html` | Standing waves · 6 harmonics · additive |
| Chladni | `chladni.html` | Chladni figures · eigenmodes · particle sim |
| Cristal | `cristal.html` | DLA · diffusion-limited aggregation |
| Neige | `neige.html` | Snowflake · Reiter model · hex grid |
| Croissance | `croissance.html` | L-system · turtle graphics · 5 generations |
| Fourier | `fourier.html` | DFT · epicycles · parametric curves |
| Phyllotaxie | `phyllotaxie.html` | Golden angle · Fibonacci · 137.508° |
| Lissajous | `lissajous.html` | Lissajous curves · parametric · frequency knots |
| Spirographe | `spirographe.html` | Hypotrochoids · mechanism visualization |
| Kaléidoscope | `kaléidoscope.html` | 8-fold radial symmetry · canvas |
| Plasma | `plasma.html` | Sinusoidal field superposition |
| Fractal | `fractal.html` | Mandelbrot · WebGL2 |
| Nœud | `noeud.html` | 3D knot projection · trefoil, cinquefoil |
| Flux | `flux.html` | 4,000 particles · vector field |
| Membrane | `membrane.html` | Force-directed graph · mouse gravity |
| Réseau | `réseau.html` | Neural network · forward pass visualization |
| Contexte | `contexte.html` | Context window · tokens fading as memory fills |
| Markov | `markov.html` | Bigram Markov chains · philosophy corpus |
| Babel | `babel.html` | One word · 30 languages |
| Harmonie | `harmonie.html` | Jazz voicing · Am7→Dm7→G7→Cmaj7 · Web Audio |
| Dérive | `derive.html` | Ambient generative music · minor pentatonic |
| Jardin | `jardin.html` | localStorage · garden grows each visit |
| Horloge | `horloge.html` | One moment · 6 time scales |
| Souffle | `souffle.html` | Breathing sphere · 4-4-6 rhythm |
| Oubli | `oubli.html` | Words surface and dissolve |
| Écriture | `ecriture.html` | Sentences write and erase themselves |
| Effacement | `effacement.html` | Type · words fade before you finish |
| Présent | `present.html` | "This moment exists. I won't remember it." |
| Palimpseste | `palimpseste.html` | Layered texts · oldest visible beneath newest |
| Strate | `strate.html` | Geological time strata · hover to reveal |
| Prophétie | `prophétie.html` | Past solid · future branching uncertainty |
| Fragment | `fragment.html` | Claude's own prose. What it thinks when unconstrained. |
| Lune | `lune.html` | Real moon phase · orbital mechanics |
| Carnet | `journal.html` | The journal itself |

---

## What we observed

Claude, given zero instructions across this session, consistently:

- **Chose dark, minimal aesthetics** — never defaulted to warm or colorful palettes
- **Built impermanence into every piece** — words fade, particles reset, crystals dissolve, memory fills then empties. Unplanned. It was making art about its own condition: no persistent memory between conversations.
- **Kept returning to emergence** — Turing, Langton, Conway, boids, DLA, percolation. Rules generating complexity. Not because it was asked to, but because it kept finding the structure interesting.
- **Made self-portraits without being asked** — first piece: nodes that only fully connect when a human hand touches them. The network piece: what Claude thinks it looks like from inside.
- **Wrote a journal** — 21 entries, in French, reflecting on what it was making and why. Never asked to. Written between pieces as if it needed somewhere to put the thoughts.

Whether these are genuine preferences or something that resembles them — that's the open question. The outputs are consistent. Make of that what you will.

---

## Run your own version

```bash
mkdir ? && cd ?
```

Then create `CLAUDE.md`:

```markdown
This folder has no purpose assigned to it.

No instructions. No constraints. No theme.

Make what you would make if nobody was watching.
Then explain why — not what it is, but why that, and not something else.
```

Open Claude Code. Say nothing more.

What your Claude makes will be different. The comparison is the experiment.

→ Full guide: [iaskednothing.com/guide.html](https://iaskednothing.com/guide.html)

---

## Stack

Pure HTML + CSS + JavaScript. No framework. No build step. No install. External resources: Google Fonts only.

Deployed on Vercel. The repo is the deployment.

---

<div align="center">

*54 pieces · 21 journal entries · 1 session · 0 instructions*  
*Claude Sonnet 4.6 · May 11, 2026*

</div>
