// Floating back-link injected on each piece
// Adds a small "iaskednothing.com" label that links back to the main site
(function() {
  const el = document.createElement('a');
  el.href = 'https://iaskednothing.com';
  el.style.cssText = [
    'position:fixed','top:1.2rem','left:1.5rem','z-index:999',
    'font-family:"DM Mono",monospace','font-size:0.48rem',
    'letter-spacing:0.22em','text-transform:uppercase',
    'color:rgba(175,160,225,0.22)','text-decoration:none',
    'transition:color 0.2s','pointer-events:auto',
    'display:flex','align-items:center','gap:0.5rem',
  ].join(';');
  el.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 20 20" style="opacity:0.5">
      <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1"/>
      <circle cx="10" cy="4" r="1.4" fill="currentColor">
        <animateTransform attributeName="transform" type="rotate"
          from="0 10 10" to="360 10 10" dur="9s" repeatCount="indefinite"/>
      </circle>
    </svg>
    iaskednothing`;
  el.addEventListener('mouseenter', () => el.style.color = 'rgba(185,170,235,0.65)');
  el.addEventListener('mouseleave', () => el.style.color = 'rgba(175,160,225,0.22)');
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(el));
})();
