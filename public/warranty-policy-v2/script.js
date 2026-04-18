/* ═══════════════════════════════════════════════════════════════
   PKG BATTERY — WARRANTY POLICY V2
   Interaction System: Refined, Calculated, Connected
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ═══ SCROLL REVEAL — Staggered with data-delay ═══
  const animEls = document.querySelectorAll('.anim');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  animEls.forEach((el) => revealObserver.observe(el));

  // ═══ SIDE NAV — Active tracking ═══
  const sideNav = document.getElementById('sideNav');
  const navDots = document.querySelectorAll('.side-nav__dot');
  const sections = [];
  navDots.forEach((dot) => {
    const id = dot.getAttribute('data-section');
    const el = document.getElementById(id);
    if (el) sections.push({ dot, el });
  });

  let sideNavVisible = false;
  const updateNav = () => {
    const scrollY = window.scrollY;

    // Show/hide side nav
    if (scrollY > 200 && !sideNavVisible) {
      sideNav.classList.add('is-visible');
      sideNavVisible = true;
    } else if (scrollY <= 200 && sideNavVisible) {
      sideNav.classList.remove('is-visible');
      sideNavVisible = false;
    }

    // Active section tracking
    let currentId = '';
    sections.forEach(({ el }) => {
      if (scrollY >= el.offsetTop - 300) currentId = el.id;
    });
    navDots.forEach((d) => {
      d.classList.toggle('active', d.getAttribute('data-section') === currentId);
    });
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ═══ SMOOTH SCROLL — Anchor navigation ═══
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ═══ COUNTER ANIMATION — Duration values ═══
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach((c) => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ═══ DURATION LINE FILL ═══
  const durLine = document.getElementById('durLineFill');
  if (durLine) {
    const durObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { durLine.style.width = '100%'; }, 400);
          durObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    durObserver.observe(durLine.closest('.dur__track'));
  }

  // ═══ PROCESS RAIL FILL ═══
  const procRail = document.getElementById('procRailFill');
  if (procRail) {
    const procObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { procRail.style.height = '100%'; }, 400);
          procObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    procObserver.observe(procRail.closest('.proc__timeline'));
  }

  // ═══ FAQ ACCORDION ═══
  document.querySelectorAll('.faq__trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq__item');
      const isOpen = item.classList.contains('is-open');
      // Close all
      document.querySelectorAll('.faq__item.is-open').forEach((other) => {
        if (other !== item) other.classList.remove('is-open');
      });
      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen);
    });
  });

  // ═══ ECO CARD PARALLAX HOVER ═══
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.eco-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const img = card.querySelector('.eco-card__img');
        if (img) {
          const moveX = (x - 50) * 0.015;
          const moveY = (y - 50) * 0.015;
          img.style.transform = `scale(1.03) translate(${moveX}px, ${moveY}px)`;
        }
      });
      card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.eco-card__img');
        if (img) img.style.transform = '';
      });
    });
  }

  // ═══ ENERGY PATH PARALLAX ═══
  const energyPath = document.querySelector('.g-energy-path');
  if (energyPath) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / docHeight;
      // Vary the vertical gradient and opacity as user scrolls
      const intensityPeaks = [0.15, 0.45, 0.75]; // peaks at hero, scope, finale
      let intensity = 0.3;
      intensityPeaks.forEach((peak) => {
        const dist = Math.abs(progress - peak);
        if (dist < 0.15) {
          intensity = Math.max(intensity, 1 - (dist / 0.15));
        }
      });
      energyPath.style.opacity = intensity * 0.6;
    }, { passive: true });
  }

  // ═══ GRID OVERLAY — Fade near dark sections ═══
  const gridOverlay = document.querySelector('.g-grid-overlay');
  if (gridOverlay) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scopeEl = document.getElementById('coverage');
      const whyEl = document.getElementById('why-pkg');
      if (scopeEl) {
        const scopeTop = scopeEl.offsetTop;
        const scopeBot = scopeTop + scopeEl.offsetHeight;
        const whyTop = whyEl ? whyEl.offsetTop : Infinity;
        const whyBot = whyEl ? whyTop + whyEl.offsetHeight : Infinity;

        const inDark =
          (scrollY + window.innerHeight > scopeTop && scrollY < scopeBot) ||
          (scrollY + window.innerHeight > whyTop && scrollY < whyBot);

        gridOverlay.style.opacity = inDark ? '0.005' : '0.018';
      }
    }, { passive: true });
  }

});
