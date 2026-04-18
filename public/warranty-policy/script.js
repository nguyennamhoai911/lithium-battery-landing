/**
 * PKG Battery — Warranty Policy Landing Page
 * Premium Scroll Animations, Interactions & Micro-effects
 */

(function () {
  'use strict';

  // ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || '0', 10);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    scrollObserver.observe(el);
  });

  // ===== SIDE NAVIGATION =====
  const sideNav = document.getElementById('sideNav');
  const sideNavDots = document.querySelectorAll('.side-nav__dot');
  const sections = document.querySelectorAll('section[id]');

  function updateSideNav() {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    // Show/hide side nav
    if (scrollY > windowH * 0.4) {
      sideNav.classList.add('is-visible');
    } else {
      sideNav.classList.remove('is-visible');
    }

    // Update active dot
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - windowH / 3;
      if (scrollY >= sectionTop) {
        current = section.id;
      }
    });

    sideNavDots.forEach((dot) => {
      dot.classList.toggle('active', dot.dataset.section === current);
    });
  }

  // ===== MOBILE STICKY CTA =====
  const mobileCta = document.getElementById('mobileCta');

  function updateMobileCta() {
    if (window.innerWidth > 768) return;
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight * 0.6) {
      mobileCta.classList.add('is-visible');
    } else {
      mobileCta.classList.remove('is-visible');
    }
  }

  // ===== COUNTER ANIMATION =====
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      el.textContent = current < 10 ? '0' + current : current;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target < 10 ? '0' + target : target;
      }
    }

    requestAnimationFrame(update);
  }

  // ===== DURATION TIMELINE PROGRESS =====
  const durationProgress = document.getElementById('durationProgress');
  const durationSection = document.getElementById('duration');

  function updateDurationProgress() {
    if (!durationSection || !durationProgress) return;
    const rect = durationSection.getBoundingClientRect();
    const windowH = window.innerHeight;
    const sectionH = durationSection.offsetHeight;

    if (rect.top < windowH && rect.bottom > 0) {
      const progress = Math.min(
        1,
        Math.max(0, (windowH - rect.top) / (windowH + sectionH) * 1.5)
      );
      durationProgress.style.width = progress * 100 + '%';
    }
  }

  // ===== PROCESS CONNECTOR LINE =====
  const processConnector = document.getElementById('processConnector');
  const processSection = document.getElementById('process');

  function updateProcessConnector() {
    if (!processSection || !processConnector) return;
    const rect = processSection.getBoundingClientRect();
    const windowH = window.innerHeight;
    const sectionH = processSection.offsetHeight;

    if (rect.top < windowH && rect.bottom > 0) {
      const progress = Math.min(
        1,
        Math.max(0, (windowH - rect.top) / (windowH + sectionH) * 1.8)
      );
      processConnector.style.height = progress * 100 + '%';
    }
  }

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-item__trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const isOpen = item.classList.contains('is-open');
      const expanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq-item').forEach((faqItem) => {
        faqItem.classList.remove('is-open');
        faqItem.querySelector('.faq-item__trigger').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===== SMOOTH SCROLL FOR NAVIGATION =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 20;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== PARTICLES =====
  function createParticles(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.bottom = -(Math.random() * 20) + '%';
      particle.style.animationDuration = 6 + Math.random() * 8 + 's';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.width = 1 + Math.random() * 3 + 'px';
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }
  }

  createParticles('heroParticles', 20);
  createParticles('ctaParticles', 15);

  // ===== SCROLL EVENT HANDLER (THROTTLED) =====
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateSideNav();
        updateMobileCta();
        updateDurationProgress();
        updateProcessConnector();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateSideNav();
    updateMobileCta();
  });

  // Initial calls
  updateSideNav();
  updateMobileCta();

  // ===== BUTTON MICRO-INTERACTIONS =====
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = `all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`;
    });
  });

  // ===== ECO PANEL PARALLAX HOVER (DESKTOP) =====
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.eco-panel').forEach((panel) => {
      panel.addEventListener('mousemove', (e) => {
        const rect = panel.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Subtle parallax on the image
        const img = panel.querySelector('.eco-panel__img');
        if (img) {
          const moveX = (x - 50) * 0.02;
          const moveY = (y - 50) * 0.02;
          img.style.transform = `scale(1.04) translate(${moveX}px, ${moveY}px)`;
        }
      });

      panel.addEventListener('mouseleave', () => {
        const img = panel.querySelector('.eco-panel__img');
        if (img) {
          img.style.transform = '';
        }
      });
    });
  }

  // ===== PAGE LOAD ANIMATION =====
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });

})();
