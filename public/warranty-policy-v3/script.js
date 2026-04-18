/* ═══════════════════════════════════════════════════════════════════════
   PKG BATTERY — WARRANTY POLICY V3
   Interaction System: Refined, Calculated, Connected
   Motion & Behavior Layer
   ═══════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ═══ SCROLL REVEAL — Intersection Observer with staggered delays ═══
  const animEls = document.querySelectorAll('.anim');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.10,
    rootMargin: '0px 0px -50px 0px'
  });
  animEls.forEach((el) => revealObserver.observe(el));


  // ═══ SIDE NAVIGATION — Active section tracking ═══
  const sideNav = document.getElementById('sideNav');
  const navDots = document.querySelectorAll('.side-nav__dot');
  const trackedSections = [];
  navDots.forEach((dot) => {
    const id = dot.getAttribute('data-section');
    const el = document.getElementById(id);
    if (el) trackedSections.push({ dot, el });
  });

  let sideNavVisible = false;
  const darkSectionIds = ['coverage'];

  const updateSideNav = () => {
    const scrollY = window.scrollY;
    const viewH = window.innerHeight;

    // Show/hide
    if (scrollY > 250 && !sideNavVisible) {
      sideNav.classList.add('is-visible');
      sideNavVisible = true;
    } else if (scrollY <= 250 && sideNavVisible) {
      sideNav.classList.remove('is-visible');
      sideNavVisible = false;
    }

    // Active section
    let currentId = '';
    trackedSections.forEach(({ el }) => {
      if (scrollY >= el.offsetTop - 350) currentId = el.id;
    });
    navDots.forEach((d) => {
      d.classList.toggle('active', d.getAttribute('data-section') === currentId);
    });

    // Dark mode detection for side nav
    const isDark = darkSectionIds.some((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      const center = scrollY + viewH / 2;
      return center >= top && center <= bottom;
    });
    sideNav.classList.toggle('side-nav--dark', isDark);
  };

  window.addEventListener('scroll', updateSideNav, { passive: true });
  updateSideNav();


  // ═══ SMOOTH SCROLL — Anchor navigation with offset ═══
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  // ═══ COUNTER ANIMATION — Smooth eased count-up ═══
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
    const duration = 1400;
    const start = performance.now();
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(easeOutQuart(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }


  // ═══ DURATION LINE FILL ═══
  const durLine = document.getElementById('durLineProgress');
  if (durLine) {
    const durTrack = durLine.closest('.dur__track');
    const durObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { durLine.style.width = '100%'; }, 500);
          durObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    if (durTrack) durObserver.observe(durTrack);
  }


  // ═══ PROCESS RAIL FILL ═══
  const procRail = document.getElementById('procRailFill');
  if (procRail) {
    const procTimeline = procRail.closest('.proc__timeline');
    const procObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { procRail.style.height = '100%'; }, 500);
          procObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    if (procTimeline) procObserver.observe(procTimeline);
  }


  // ═══ FAQ ACCORDION — Smooth toggle with exclusive mode ═══
  document.querySelectorAll('.faq__trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq__item');
      const isOpen = item.classList.contains('is-open');

      // Close all others
      document.querySelectorAll('.faq__item.is-open').forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherTrigger = other.querySelector('.faq__trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });


  // ═══ ECO CARD PARALLAX HOVER — Subtle image movement ═══
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.eco-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const img = card.querySelector('.eco-card__img');
        if (img) {
          const moveX = (x - 50) * 0.012;
          const moveY = (y - 50) * 0.012;
          img.style.transform = `scale(1.04) translate(${moveX}px, ${moveY}px)`;
        }
      });
      card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.eco-card__img');
        if (img) img.style.transform = '';
      });
    });
  }


  // ═══ ENERGY THREAD PARALLAX — Intensity varies with scroll position ═══
  const energyThread = document.querySelector('.g-energy-thread');
  if (energyThread) {
    const updateThread = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / docHeight;

      // Intensity peaks near key sections
      const peaks = [0.0, 0.18, 0.50, 0.82, 1.0];
      let intensity = 0.25;
      peaks.forEach((peak) => {
        const dist = Math.abs(progress - peak);
        if (dist < 0.12) {
          intensity = Math.max(intensity, 1 - (dist / 0.12));
        }
      });
      energyThread.style.opacity = String(intensity * 0.55);
    };
    window.addEventListener('scroll', updateThread, { passive: true });
  }


  // ═══ GRID OVERLAY — Adapt opacity near dark sections ═══
  const gridOverlay = document.querySelector('.g-grid');
  if (gridOverlay) {
    const updateGrid = () => {
      const scrollY = window.scrollY;
      const viewH = window.innerHeight;
      const scopeEl = document.getElementById('coverage');
      const finaleEl = document.getElementById('cta-final');

      let inDark = false;
      [scopeEl, finaleEl].forEach((el) => {
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY + viewH > top && scrollY < bottom) inDark = true;
        }
      });

      gridOverlay.style.opacity = inDark ? '0.004' : '0.015';
    };
    window.addEventListener('scroll', updateGrid, { passive: true });
  }


  // ═══ HERO HEADLINE UNDERLINE — Trigger on reveal ═══
  const heroHeadline = document.querySelector('.hero__headline');
  if (heroHeadline) {
    // The headline gets .is-visible from the main animation observer,
    // but we also add it manually for the underline effect to trigger
    const headlineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), 400);
          headlineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    headlineObserver.observe(heroHeadline);
  }

});
