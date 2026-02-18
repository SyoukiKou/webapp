/**
 * HAKUTEN Communication Design®
 * Main Frontend Script v2.0
 */

(function () {
  'use strict';

  /* ============================================
     LOADING SCREEN
     ============================================ */
  const loadingEl = document.getElementById('loading');

  function hideLoading() {
    if (!loadingEl) return;
    loadingEl.classList.add('fade-out');
    setTimeout(() => {
      loadingEl.style.display = 'none';
    }, 750);
  }

  if (document.readyState === 'complete') {
    setTimeout(hideLoading, 1400);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoading, 1400));
  }

  /* ============================================
     COOKIE NOTICE
     ============================================ */
  const cookieNotice = document.getElementById('cookieNotice');
  const cookieAccept = document.getElementById('cookieAccept');

  if (cookieNotice) {
    if (localStorage.getItem('hkt_cookie_ok')) {
      cookieNotice.style.display = 'none';
    } else {
      setTimeout(() => cookieNotice.style.display = 'flex', 2500);
    }
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('hkt_cookie_ok', '1');
      cookieNotice.classList.add('hidden');
      setTimeout(() => cookieNotice.style.display = 'none', 450);
    });
  }

  /* ============================================
     HEADER SCROLL
     ============================================ */
  const header = document.getElementById('site-header');
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 50) {
          header.classList.replace('is-top', 'is-scrolled');
        } else {
          header.classList.replace('is-scrolled', 'is-top');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================
     MOBILE MENU
     ============================================ */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  function toggleMenu(open) {
    menuOpen = open;
    hamburger.classList.toggle('is-active', open);
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => toggleMenu(!menuOpen));

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menuOpen) toggleMenu(false);
    });
  }

  /* ============================================
     HERO SLIDER
     ============================================ */
  const heroSlidesEls = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroProgressBar = document.getElementById('heroProgressBar');
  const heroCurrentNum = document.getElementById('heroCurrentNum');
  const heroContent = document.getElementById('heroContent');
  const heroLabel = document.getElementById('heroLabel');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroClient = document.getElementById('heroClient');

  // Parse slide data
  let slidesData = [];
  const dataEl = document.getElementById('slides-data');
  if (dataEl) {
    try { slidesData = JSON.parse(dataEl.textContent); } catch (e) {}
  }

  let currentSlide = 0;
  const SLIDE_DURATION = 5000;
  let slideTimer = null;
  let progressAnimation = null;

  function goToSlide(index) {
    const total = heroSlidesEls.length;
    if (total === 0) return;

    const prev = currentSlide;
    currentSlide = ((index % total) + total) % total;

    // Slides
    heroSlidesEls[prev].classList.remove('active');
    heroSlidesEls[currentSlide].classList.add('active');

    // Dots
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });

    // Counter
    if (heroCurrentNum) {
      heroCurrentNum.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    // Content text fade
    if (heroContent && slidesData[currentSlide]) {
      const d = slidesData[currentSlide];
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(12px)';

      setTimeout(() => {
        if (heroLabel) heroLabel.textContent = d.label || '';
        if (heroTitle) heroTitle.textContent = d.title || '';
        if (heroSubtitle) heroSubtitle.textContent = d.subtitle || '';
        if (heroClient) heroClient.textContent = d.client || '';

        heroContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 350);
    }

    // Progress bar
    startProgress();
  }

  function startProgress() {
    if (!heroProgressBar) return;
    heroProgressBar.style.transition = 'none';
    heroProgressBar.style.width = '0';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroProgressBar.style.transition = `width ${SLIDE_DURATION}ms linear`;
        heroProgressBar.style.width = '100%';
      });
    });
  }

  function startAutoplay() {
    stopAutoplay();
    slideTimer = setInterval(() => goToSlide(currentSlide + 1), SLIDE_DURATION);
  }

  function stopAutoplay() {
    if (slideTimer) clearInterval(slideTimer);
    slideTimer = null;
  }

  if (heroSlidesEls.length > 0) {
    // Init
    heroSlidesEls[0].classList.add('active');
    startProgress();
    startAutoplay();

    // Dot clicks
    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopAutoplay();
        goToSlide(i);
        startAutoplay();
      });
    });

    // Touch/swipe
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      let touchX = 0;
      heroEl.addEventListener('touchstart', e => {
        touchX = e.changedTouches[0].clientX;
      }, { passive: true });

      heroEl.addEventListener('touchend', e => {
        const diff = touchX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
          stopAutoplay();
          goToSlide(currentSlide + (diff > 0 ? 1 : -1));
          startAutoplay();
        }
      }, { passive: true });
    }

    // Keyboard
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { stopAutoplay(); goToSlide(currentSlide + 1); startAutoplay(); }
      if (e.key === 'ArrowLeft') { stopAutoplay(); goToSlide(currentSlide - 1); startAutoplay(); }
    });

    // Pause on hover
    const heroEl2 = document.getElementById('hero');
    if (heroEl2) {
      heroEl2.addEventListener('mouseenter', stopAutoplay);
      heroEl2.addEventListener('mouseleave', startAutoplay);
    }
  }

  /* ============================================
     WORKS FILTER
     ============================================ */
  const filterBtns = document.querySelectorAll('.filter-tab');
  const workItems = document.querySelectorAll('.work-item');
  const worksGrid = document.getElementById('worksGrid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.dataset.filter;

      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      // Featured grid layout
      if (worksGrid) {
        worksGrid.classList.toggle('grid-with-featured', filter === 'all');
      }

      // Filter items
      workItems.forEach(item => {
        const cat = item.dataset.category;
        const visible = filter === 'all' || cat === filter;

        if (visible) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 20);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => item.style.display = 'none', 280);
        }
      });
    });
  });

  // Transition for work items
  workItems.forEach(item => {
    item.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
  });

  /* ============================================
     INTERSECTION OBSERVER - FADE UP
     ============================================ */
  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.08 });

    fadeEls.forEach(el => io.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('in-view'));
  }

  /* ============================================
     COUNTER ANIMATION
     ============================================ */
  function animateNum(el, end, duration) {
    let start = 0;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * end);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = end;
    }

    requestAnimationFrame(update);
  }

  const statNums = document.querySelectorAll('.stat-num[data-target]');

  if ('IntersectionObserver' in window && statNums.length) {
    const statsIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          if (!isNaN(target)) animateNum(el, target, 1600);
          statsIO.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => statsIO.observe(el));
  }

  /* ============================================
     SMOOTH SCROLL
     ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const hh = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--header-h'), 10) || 72;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - hh,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ============================================
     HERO PARALLAX (subtle)
     ============================================ */
  const heroSection = document.getElementById('hero');

  if (heroSection) {
    let lastParallax = 0;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > window.innerHeight) return;

      const factor = y * 0.12;
      if (heroContent && Math.abs(factor - lastParallax) > 1) {
        heroContent.style.transform = `translateY(${factor}px)`;
        heroContent.style.opacity = String(1 - y / (window.innerHeight * 0.65));
        lastParallax = factor;
      }
    }, { passive: true });
  }

  /* ============================================
     STORY ITEMS — staggered reveal
     ============================================ */
  const storyItems = document.querySelectorAll('.story-item');
  storyItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(24px)';
    item.style.transition = `opacity 0.65s ease ${i * 0.12}s, transform 0.65s ease ${i * 0.12}s`;
  });

  if ('IntersectionObserver' in window && storyItems.length) {
    const storyIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          storyIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

    storyItems.forEach(item => storyIO.observe(item));
  }

  /* ============================================
     NEWS ITEMS — staggered
     ============================================ */
  const newsItems = document.querySelectorAll('.news-item');
  newsItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-10px)';
    item.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  });

  if ('IntersectionObserver' in window) {
    const newsIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          newsIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

    newsItems.forEach(item => newsIO.observe(item));
  }

  /* ============================================
     SERVICE ITEMS — staggered
     ============================================ */
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
  });

  if ('IntersectionObserver' in window) {
    const serviceIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          serviceIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

    serviceItems.forEach(item => serviceIO.observe(item));
  }

  /* ============================================
     WORK ITEMS - staggered on initial reveal
     ============================================ */
  const workItemsArr = document.querySelectorAll('.work-item');
  workItemsArr.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(16px)';
    item.style.transition = `opacity 0.55s ease ${(i % 3) * 0.1}s, transform 0.55s ease ${(i % 3) * 0.1}s`;
  });

  if ('IntersectionObserver' in window) {
    const workIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          workIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -30px 0px', threshold: 0.05 });

    workItemsArr.forEach(item => workIO.observe(item));
  }

  console.log('%c HAKUTEN Communication Design®', 'font-size:14px;font-weight:600;color:#000;padding:4px 0;');

})();
