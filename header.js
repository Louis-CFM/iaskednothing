// header.js — shared header + piece navigation + page transitions
(function() {
  const H = 56;

  // ── Piece sequence (creation order) ──────────────────────────────────────────
  const PIECES = [
    { file:'membrane.html',    name:'Membrane' },
    { file:'souffle.html',     name:'Souffle' },
    { file:'oubli.html',      name:'Oubli' },
    { file:'derive.html',      name:'Dérive' },
    { file:'horloge.html',     name:'Horloge' },
    { file:'ecriture.html',    name:'Écriture' },
    { file:'flux.html',        name:'Flux' },
    { file:'present.html',     name:'Présent' },
    { file:'lune.html',        name:'Lune' },
    { file:'jardin.html',      name:'Jardin' },
    { file:'effacement.html',  name:'Effacement' },
    { file:'fragment.html',    name:'Fragment' },
    { file:'écologie.html',    name:'Écologie' },
    { file:'monde.html',       name:'Monde' },
    { file:'turing.html',      name:'Turing' },
    { file:'harmonie.html',    name:'Harmonie' },
    { file:'fractal.html',     name:'Mandelbrot' },
    { file:'langton.html',     name:'Langton' },
    { file:'lorenz.html',      name:'Lorenz' },
    { file:'croissance.html',  name:'Croissance' },
    { file:'cristal.html',     name:'Cristal' },
    { file:'onde.html',        name:'Onde' },
    { file:'fourier.html',     name:'Fourier' },
    { file:'réseau.html',      name:'Réseau' },
    { file:'automate.html',    name:'Automate' },
    { file:'gravité.html',     name:'Gravité' },
    { file:'kaléidoscope.html',name:'Kaléidoscope' },
    { file:'phyllotaxie.html', name:'Phyllotaxie' },
    { file:'lissajous.html',   name:'Lissajous' },
    { file:'voronoi.html',     name:'Voronoï' },
    { file:'sable.html',       name:'Sable' },
    { file:'babel.html',       name:'Babel' },
    { file:'entropie.html',    name:'Entropie' },
    { file:'spirographe.html', name:'Spirographe' },
    { file:'essaim.html',      name:'Essaim' },
    { file:'pendule.html',     name:'Pendule' },
    { file:'attracteur.html',  name:'Attracteur' },
    { file:'diffusion.html',   name:'Diffusion' },
    { file:'conway.html',      name:'Conway' },
    { file:'markov.html',      name:'Markov' },
    { file:'pluie.html',       name:'Pluie' },
    { file:'terrain.html',     name:'Terrain' },
    { file:'chladni.html',     name:'Chladni' },
    { file:'contexte.html',    name:'Contexte' },
    { file:'plasma.html',      name:'Plasma' },
    { file:'percolation.html', name:'Percolation' },
    { file:'neige.html',       name:'Neige' },
    { file:'julia.html',       name:'Julia' },
    { file:'corde.html',       name:'Corde' },
    { file:'noeud.html',       name:'Nœud' },
    { file:'palimpseste.html', name:'Palimpseste' },
    { file:'strate.html',      name:'Strate' },
    { file:'prophétie.html',   name:'Prophétie' },
    { file:'émergence.html',   name:'Émergence' },
  ];

  // ── CSS ───────────────────────────────────────────────────────────────────────
  const css = `
    :root { --h: ${H}px; --accent: #b8a8e8; --border: rgba(255,255,255,0.08); --sub: #9d9689; --text: #e8e2d6; }

    /* ── shared header ── */
    #hd-shared {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: ${H}px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 2.5rem;
      border-bottom: 1px solid var(--border);
      background: rgba(5,5,8,0.92);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      font-family: 'DM Mono', monospace;
    }
    #hd-shared .hn-logo {
      display: flex; align-items: center; gap: 0.6rem;
      font-size: 0.72rem; letter-spacing: 0.06em;
      color: rgba(220,214,202,0.7); text-decoration: none;
    }
    #hd-shared .hn-logo em { font-style: italic; color: var(--accent); opacity: 0.85; }
    #hd-shared .hn-logo svg { width: 18px; height: 18px; flex-shrink: 0; overflow: visible; }
    #hd-shared nav { display: flex; align-items: center; gap: 1.8rem; }
    #hd-shared nav a {
      font-size: 0.52rem; letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--sub); text-decoration: none; transition: color 0.2s;
    }
    #hd-shared nav a:hover, #hd-shared nav a.hn-active { color: var(--text); }
    #hd-shared .hn-gh {
      display: flex; align-items: center; gap: 0.4rem;
      font-size: 0.5rem; letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--sub); text-decoration: none;
      border: 1px solid var(--border); padding: 0.28rem 0.65rem;
      transition: all 0.2s;
    }
    #hd-shared .hn-gh:hover { color: var(--text); border-color: rgba(255,255,255,0.18); }
    #hd-shared .hn-gh .hn-stars { color: var(--accent); }
    @keyframes hn-orbit { to { transform: rotate(360deg); } }
    #hd-shared .hn-orbit { transform-origin: 9px 9px; animation: hn-orbit 10s linear infinite; }
    @media (max-width: 700px) {
      #hd-shared { padding: 0 1.2rem; }
      #hd-shared nav { gap: 1rem; }
      #hd-shared nav a[data-key="guide"] { display: none; }
    }

    /* ── piece navigation (bottom) ── */
    #hn-pnav {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 900;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.4rem 2.5rem 1.2rem;
      background: linear-gradient(to top, rgba(3,3,8,0.75) 0%, transparent 100%);
      pointer-events: none;
      font-family: 'DM Mono', monospace;
    }
    #hn-pnav a {
      pointer-events: all;
      display: flex; align-items: center; gap: 0.55rem;
      font-size: 0.46rem; letter-spacing: 0.22em; text-transform: uppercase;
      color: rgba(157,150,137,0.28);
      text-decoration: none;
      transition: color 0.25s;
      max-width: 38%;
    }
    #hn-pnav a:hover { color: rgba(184,168,232,0.7); }
    #hn-pnav a .pn-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    #hn-pnav a .pn-arrow { flex-shrink: 0; opacity: 0.5; }
    #hn-pnav .pn-counter {
      font-size: 0.44rem; letter-spacing: 0.18em;
      color: rgba(100,92,80,0.22);
      pointer-events: none;
      flex-shrink: 0;
    }
    #hn-pnav .pn-prev { justify-content: flex-start; }
    #hn-pnav .pn-next { justify-content: flex-end; text-align: right; }
    @media (max-width: 500px) {
      #hn-pnav { padding: 1rem 1.2rem 0.8rem; }
      #hn-pnav a { font-size: 0.42rem; max-width: 42%; }
      #hn-pnav .pn-counter { display: none; }
    }

    /* ── page transition — accent line sweep ── */
    #hn-line {
      position: fixed; top: ${H}px; left: 0; z-index: 9999;
      height: 1px; width: 0; pointer-events: none;
      background: linear-gradient(to right, transparent, var(--accent), transparent);
    }
    #hn-line.hn-sweep {
      animation: hn-sweep 480ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    @keyframes hn-sweep {
      0%   { width: 0%;   opacity: 0;   left: 0; }
      15%  { opacity: 0.6; }
      75%  { width: 100%; opacity: 0.4; }
      100% { width: 100%; opacity: 0;   }
    }
  `;

  // ── Build header ──────────────────────────────────────────────────────────────
  function buildHeader(file) {
    const homeHref    = (file === '' || file === 'index.html') ? '#hero'   : 'index.html';
    const piecesHref  = (file === '' || file === 'index.html') ? '#pieces' : 'index.html#pieces';

    function active(key) {
      const map = { journal:'journal.html', memory:'mémoire.html', skills:'skills.html', agents:'agents.html', guide:'guide.html' };
      return file === map[key] ? ' class="hn-active"' : '';
    }

    const hd = document.createElement('header');
    hd.id = 'hd-shared';
    hd.innerHTML = `
      <a class="hn-logo" href="${homeHref}">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <circle fill="none" stroke="var(--accent)" stroke-width="1" opacity=".35" cx="9" cy="9" r="7"/>
          <g class="hn-orbit"><circle fill="var(--accent)" opacity=".75" cx="9" cy="3.2" r="1.4"/></g>
        </svg>
        iasked<em>nothing.</em>
      </a>
      <nav>
        <a href="${piecesHref}" data-key="pieces">Pieces</a>
        <a href="journal.html" data-key="journal"${active('journal')}>Journal</a>
        <a href="mémoire.html" data-key="memory"${active('memory')}>Memory</a>
        <a href="skills.html" data-key="skills"${active('skills')}>Skills</a>
        <a href="agents.html" data-key="agents"${active('agents')}>Agents</a>
        <a href="guide.html" data-key="guide"${active('guide')}>Guide</a>
        <a class="hn-gh" href="https://github.com/Louis-CFM/iaskednothing" target="_blank" rel="noopener">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          ★ <span class="hn-stars">—</span>
        </a>
      </nav>
    `;
    return hd;
  }

  // ── Build piece nav ───────────────────────────────────────────────────────────
  function buildPieceNav(file) {
    const idx = PIECES.findIndex(p => p.file === file);
    if (idx === -1) return null;

    const prev = PIECES[idx - 1] || null;
    const next = PIECES[idx + 1] || null;
    const n    = idx + 1;
    const total = PIECES.length;

    const nav = document.createElement('nav');
    nav.id = 'hn-pnav';
    nav.setAttribute('aria-label', 'Piece navigation');

    nav.innerHTML = `
      ${prev
        ? `<a class="pn-prev" href="${prev.file}">
             <span class="pn-arrow">←</span>
             <span class="pn-name">${prev.name}</span>
           </a>`
        : `<span></span>`}
      <span class="pn-counter">${n} / ${total}</span>
      ${next
        ? `<a class="pn-next" href="${next.file}">
             <span class="pn-name">${next.name}</span>
             <span class="pn-arrow">→</span>
           </a>`
        : `<a class="pn-next" href="index.html#pieces">
             <span class="pn-name">All pieces</span>
             <span class="pn-arrow">↑</span>
           </a>`}
    `;
    return nav;
  }

  // ── Transitions ───────────────────────────────────────────────────────────────
  let navigating = false;

  function pageExit(href) {
    if (navigating) return;
    navigating = true;
    window.location.href = href;
  }

  function interceptLinks() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      if (a.target === '_blank') return;
      if (href.startsWith('#')) return;
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (href.startsWith('http') && !href.includes(window.location.hostname)) return;
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname && url.hash) return;
      e.preventDefault();
      pageExit(href);
    });
  }

  // ── Inject ────────────────────────────────────────────────────────────────────
  function inject() {
    const file = window.location.pathname.split('/').pop() || 'index.html';

    // Fonts
    if (!document.querySelector('link[href*="DM+Mono"]')) {
      const lk = document.createElement('link');
      lk.rel = 'stylesheet';
      lk.href = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap';
      document.head.appendChild(lk);
    }

    // CSS
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Remove lingering back.js link
    document.querySelectorAll('a[href*="iaskednothing"]').forEach(el => {
      if (el.style.position === 'fixed') el.remove();
    });

    // Hide existing main-page header
    const existing = document.querySelector('#hd');
    if (existing) existing.style.display = 'none';

    // Shared header
    const hd = buildHeader(file);
    document.body.insertBefore(hd, document.body.firstChild);

    // Accent line (entry animation)
    const line = document.createElement('div');
    line.id = 'hn-line';
    document.body.appendChild(line);
    requestAnimationFrame(() => requestAnimationFrame(() => line.classList.add('hn-sweep')));

    // Piece prev/next nav
    const pnav = buildPieceNav(file);
    if (pnav) document.body.appendChild(pnav);

    // GitHub stars
    fetch('https://api.github.com/repos/Louis-CFM/iaskednothing')
      .then(r => r.json())
      .then(d => {
        const el = document.querySelector('#hd-shared .hn-stars');
        if (el && d.stargazers_count != null) el.textContent = d.stargazers_count;
      })
      .catch(() => {});

    // Transitions
    interceptLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
