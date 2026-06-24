/* ================================================================
   JUNIOR+ — ROUTER + INTERACTIONS 2026
   SPA Hash Router · Cursor · Reveal · Magnetic · Tilt · Form
   ================================================================ */
'use strict';

/* ── ROUTES ───────────────────────────────────────────────────── */
const ROUTES = {
  '/':          { html: () => window.PAGE_HOME,      title: 'Junior+ | Eleva o Teu Potencial' },
  '/sobre':     { html: () => window.PAGE_SOBRE,     title: 'Sobre Nós | Junior+' },
  '/servicos':  { html: () => window.PAGE_SERVICOS,  title: 'Serviços | Junior+' },
  '/metodo':    { html: () => window.PAGE_METODO,    title: 'Método | Junior+' },
  '/historias': { html: () => window.PAGE_HISTORIAS, title: 'Histórias | Junior+' },
  '/contacto':  { html: () => window.PAGE_CONTACTO,  title: 'Contacto | Junior+' },
};

const app = document.getElementById('app');

function getPath() {
  return (window.location.hash || '#/').replace(/^#/, '') || '/';
}

/* ── RENDER ───────────────────────────────────────────────────── */
function render() {
  const path  = getPath();
  const route = ROUTES[path];
  const html  = route ? route.html() : window.PAGE_404;
  const title = route ? route.title  : '404 | Junior+';

  /* exit */
  app.style.transition = 'none';
  app.style.opacity    = '0';
  app.style.transform  = 'translateY(16px)';

  requestAnimationFrame(() => {
    setTimeout(() => {
      app.innerHTML = html;
      document.title = title;
      window.scrollTo({ top: 0, behavior: 'instant' });

      /* entrance */
      app.style.transition = 'opacity .5s cubic-bezier(.16,1,.3,1), transform .5s cubic-bezier(.16,1,.3,1)';
      app.style.opacity    = '1';
      app.style.transform  = 'translateY(0)';

      /* page inits */
      initReveal();
      initMagnetic();
      initTilt();
      initCounters();
      initContactForm();
      initDataLinks();
      updateActiveNav(path);
      applyCursorHovers();
    }, 120);
  });
}

window.addEventListener('hashchange', render);

/* ── BOOT ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initHamburger();
  initDataLinks();
  render();
});

/* ── DATA-LINK DELEGATE ───────────────────────────────────────── */
function initDataLinks() {
  document.querySelectorAll('[data-link]').forEach(el => {
    /* avoid double-binding */
    if (el._linked) return;
    el._linked = true;

    el.addEventListener('click', e => {
      const href = el.getAttribute('href');
      if (href && href.startsWith('#/')) {
        e.preventDefault();
        window.location.hash = href.replace(/^#/, '');
        closeMobileMenu();
      }
    });
  });
}

/* ── ACTIVE NAV ───────────────────────────────────────────────── */
function updateActiveNav(path) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace(/^#/, '');
    link.classList.toggle('active', href === path);
  });
}

/* ── NAVBAR SCROLL ────────────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  let t = false;
  window.addEventListener('scroll', () => {
    if (!t) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        t = false;
      });
      t = true;
    }
  }, { passive: true });
}

/* ── HAMBURGER ────────────────────────────────────────────────── */
function initHamburger() {
  const burger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  if (!burger || !drawer) return;
  let open = false;

  burger.addEventListener('click', () => {
    open = !open;
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && open) burger.click();
  });
}

function closeMobileMenu() {
  const burger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  if (drawer && drawer.classList.contains('open')) {
    drawer.classList.remove('open');
    burger && burger.classList.remove('open');
    burger && burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* ── CUSTOM CURSOR ────────────────────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('curDot');
  const ring = document.getElementById('curRing');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function loop() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}

function applyCursorHovers() {
  const dot  = document.getElementById('curDot');
  const ring = document.getElementById('curRing');
  if (!dot || !ring) return;

  /* big ring on interactive elements */
  document.querySelectorAll('a, button, .bento-card, .dep, .val, .c-detail').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('xl'); ring.classList.add('xl'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('xl'); ring.classList.remove('xl'); dot.classList.remove('txt'); ring.classList.remove('txt'); });
  });

  /* text ring on headings */
  document.querySelectorAll('h1, h2, h3').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.classList.add('txt'); });
    el.addEventListener('mouseleave', () => { ring.classList.remove('txt'); });
  });

  /* form fields */
  document.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.classList.add('txt'); });
    el.addEventListener('mouseleave', () => { ring.classList.remove('txt'); });
  });
}

/* ── SCROLL REVEAL ────────────────────────────────────────────── */
function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const classes = ['.rev', '.rev-left', '.rev-right'];

  classes.forEach(cls => {
    const els = document.querySelectorAll(cls);
    if (reduced) { els.forEach(el => el.classList.add('in')); return; }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(el => obs.observe(el));
  });
}

/* ── MAGNETIC BUTTONS ─────────────────────────────────────────── */
function initMagnetic() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.btn, .btn-nav, .soc, .nav-logo').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r  = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width  / 2) * 0.2;
      const dy = (e.clientY - r.top  - r.height / 2) * 0.2;
      el.style.transform = `translate(${dx}px,${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

/* ── CARD TILT (3D perspective) ───────────────────────────────── */
function initTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.bento-card, .dep, .val').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r   = card.getBoundingClientRect();
      const x   = (e.clientX - r.left) / r.width  - 0.5;
      const y   = (e.clientY - r.top)  / r.height - 0.5;
      const rx  = -y * 8;
      const ry  =  x * 8;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── COUNTERS ─────────────────────────────────────────────────── */
function initCounters() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (reduced) { el.textContent = target; return; }

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(el);
      const dur   = 1600;
      const start = performance.now();
      const ease  = t => 1 - Math.pow(1 - t, 3);
      (function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(ease(p) * target);
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    }, { threshold: 0.6 });

    obs.observe(el);
  });
}

/* ── CONTACT FORM ─────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const succ = document.getElementById('formSuccess');
  if (!form || !succ) return;

  function markErr(el) {
    el.classList.add('err');
    el.addEventListener('input', () => el.classList.remove('err'), { once: true });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome  = form.querySelector('#cNome');
    const email = form.querySelector('#cEmail');
    const area  = form.querySelector('#cArea');
    const msg   = form.querySelector('#cMsg');
    let ok = true;

    if (!nome.value.trim())                              { markErr(nome);  ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ markErr(email); ok = false; }
    if (!area.value)                                     { markErr(area);  ok = false; }
    if (!msg.value.trim())                               { markErr(msg);   ok = false; }
    if (!ok) return;

    const sub  = form.querySelector('#submitBtn');
    const txt  = sub.querySelector('.btn-text');
    sub.disabled = true;
    txt.textContent = 'A enviar…';

    setTimeout(() => {
      form.style.display = 'none';
      succ.style.display = 'flex';
    }, 1200);
  });
}
