#!/usr/bin/env python3
"""
TOPOLOGIE — generative Truchet-inspired SVG
Produces a static image: a field of flowing curves on black.
"""

import random
import math
import subprocess
import os

SEED = 42
random.seed(SEED)

W, H = 1200, 800
CELL = 40
COLS = W // CELL
ROWS = H // CELL

BG = "#060608"
STROKE_COLORS = [
    "rgba(200, 190, 170, 0.55)",
    "rgba(140, 130, 200, 0.35)",
    "rgba(200, 170, 120, 0.25)",
    "rgba(200, 190, 170, 0.20)",
]

def truchet_arc(x, y, size, variant, color, weight):
    """
    Truchet tile: two quarter-circle arcs.
    variant 0: top-left + bottom-right corners
    variant 1: top-right + bottom-left corners
    """
    r = size / 2
    paths = []
    if variant == 0:
        # Arc from left-mid to top-mid (top-left quadrant)
        p1 = f"M {x} {y + r} A {r} {r} 0 0 1 {x + r} {y}"
        # Arc from right-mid to bottom-mid (bottom-right quadrant)
        p2 = f"M {x + size} {y + r} A {r} {r} 0 0 1 {x + r} {y + size}"
    else:
        # Arc from left-mid to bottom-mid (bottom-left quadrant)
        p1 = f"M {x} {y + r} A {r} {r} 0 0 0 {x + r} {y + size}"
        # Arc from top-mid to right-mid (top-right quadrant)
        p2 = f"M {x + r} {y} A {r} {r} 0 0 0 {x + size} {y + r}"

    for p in [p1, p2]:
        paths.append(
            f'<path d="{p}" fill="none" stroke="{color}" stroke-width="{weight}" stroke-linecap="round"/>'
        )
    return "\n".join(paths)


def noise_field(x, y, scale=0.008):
    """Simple pseudo-noise to bias tile variants."""
    return math.sin(x * scale * 2.3 + y * scale * 1.7) * \
           math.cos(x * scale * 1.1 - y * scale * 2.9)


def generate():
    elements = []

    # Background
    elements.append(f'<rect width="{W}" height="{H}" fill="{BG}"/>')

    # Multiple passes at different scales and opacities
    passes = [
        {"cell": 40, "weight": 0.7, "color": STROKE_COLORS[0], "jitter": False},
        {"cell": 80, "weight": 1.4, "color": STROKE_COLORS[1], "jitter": True},
        {"cell": 20, "weight": 0.4, "color": STROKE_COLORS[3], "jitter": False},
        {"cell": 160, "weight": 2.5, "color": STROKE_COLORS[2], "jitter": True},
    ]

    for p in passes:
        cell = p["cell"]
        cols = (W // cell) + 1
        rows = (H // cell) + 1

        for row in range(rows):
            for col in range(cols):
                cx = col * cell
                cy = row * cell

                if p["jitter"]:
                    cx += random.randint(-cell // 4, cell // 4)
                    cy += random.randint(-cell // 4, cell // 4)

                # Use noise field to create directional flow
                n = noise_field(cx, cy)
                variant = 0 if n > 0 else 1

                # Occasionally flip for visual interest
                if random.random() < 0.15:
                    variant = 1 - variant

                elements.append(truchet_arc(cx, cy, cell, variant, p["color"], p["weight"]))

    # Vignette overlay (simulated with radial gradient)
    elements.append(
        f'<defs>'
        f'<radialGradient id="vignette" cx="50%" cy="50%" r="70%">'
        f'<stop offset="0%" stop-color="{BG}" stop-opacity="0"/>'
        f'<stop offset="100%" stop-color="{BG}" stop-opacity="0.7"/>'
        f'</radialGradient>'
        f'</defs>'
        f'<rect width="{W}" height="{H}" fill="url(#vignette)"/>'
    )

    # Thin horizontal rule near bottom — like a signature line
    y_line = H - 60
    elements.append(
        f'<line x1="60" y1="{y_line}" x2="{W - 60}" y2="{y_line}" '
        f'stroke="rgba(200,190,170,0.08)" stroke-width="0.5"/>'
    )

    # Label
    elements.append(
        f'<text x="60" y="{y_line + 22}" '
        f'font-family="monospace" font-size="10" letter-spacing="3" '
        f'fill="rgba(180,170,140,0.2)">TOPOLOGIE · seed {SEED} · 11.05.2026</text>'
    )

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
{"".join(elements)}
</svg>'''

    return svg


if __name__ == "__main__":
    svg = generate()
    out = os.path.join(os.path.dirname(__file__), "topologie.svg")
    with open(out, "w") as f:
        f.write(svg)
    print(f"Saved: {out}")
    subprocess.run(["open", out])
