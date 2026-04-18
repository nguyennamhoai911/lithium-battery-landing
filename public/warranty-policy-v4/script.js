/* ═══════════════════════════════════════════════════════════════════════
   PKG BATTERY — WARRANTY V4
   Interaction & Motion System — Fresh Architecture
   ═══════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ══════ SCROLL REVEAL ══════
  const rvEls = document.querySelectorAll('.rv');
  const rvObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const d = parseInt(e.target.dataset.d || '0', 10);
        setTimeout(() => e.target.classList.add('on'), d);
        rvObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });
  rvEls.forEach((el) => rvObs.observe(el));


  // ══════ SMOOTH ANCHOR SCROLL ══════
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });


  // ══════ COUNTER ANIMATION ══════
  const counters = document.querySelectorAll('.ct');
  const ctObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        countUp(e.target);
        ctObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach((c) => ctObs.observe(c));

  function countUp(el) {
    const to = parseInt(el.dataset.to, 10);
    const dur = 1300;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 4);
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(ease(p) * to);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }


  // ══════ PROCESS CONNECTOR FILL ══════
  const procFill = document.getElementById('procFill');
  if (procFill) {
    const procArea = procFill.closest('.proc__steps');
    const pObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => { procFill.style.width = '100%'; }, 500);
          pObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    if (procArea) pObs.observe(procArea);
  }


  // ══════ FAQ ACCORDION ══════
  document.querySelectorAll('.faq__q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const wasOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq__item.open').forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !wasOpen);
      btn.setAttribute('aria-expanded', String(!wasOpen));
    });
  });


  // ══════ ECO CARD PARALLAX ══════
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.eco__panel').forEach((panel) => {
      panel.addEventListener('mousemove', (ev) => {
        const r = panel.getBoundingClientRect();
        const x = ((ev.clientX - r.left) / r.width) * 100;
        const y = ((ev.clientY - r.top) / r.height) * 100;
        const img = panel.querySelector('.eco__panel-img img');
        if (img) {
          const mx = (x - 50) * 0.01;
          const my = (y - 50) * 0.01;
          img.style.transform = `scale(1.05) translate(${mx}px,${my}px)`;
        }
      });
      panel.addEventListener('mouseleave', () => {
        const img = panel.querySelector('.eco__panel-img img');
        if (img) img.style.transform = '';
      });
    });
  }


  // ══════ HORIZONTAL SCROLL HINT — subtle auto-scroll ══════
  const strip = document.getElementById('ecoStrip');
  if (strip) {
    // Scroll a tiny bit to hint horizontal scrollability
    const stripObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            strip.scrollTo({ left: 60, behavior: 'smooth' });
            setTimeout(() => strip.scrollTo({ left: 0, behavior: 'smooth' }), 600);
          }, 800);
          stripObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    stripObs.observe(strip);
  }

});
