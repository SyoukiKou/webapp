/**
 * HAKUTEN – Sub Pages JavaScript
 * pages.js  v2.0
 * Handles: scroll animations, mobile menu, counter animation
 */

(function () {
  'use strict';

  // ── DOM Ready ────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initCookieNotice();
    initScrollAnimations();
    initHeader();
    initMobileMenu();
    initCounters();
    initRipple();
  });

  // ── Cookie notice ─────────────────────────────────────
  function initCookieNotice() {
    var cookieNotice = document.getElementById('cookieNotice');
    var cookieAccept = document.getElementById('cookieAccept');

    if (cookieNotice) {
      if (localStorage.getItem('hkt_cookie_ok')) {
        cookieNotice.style.display = 'none';
      } else {
        setTimeout(function () { cookieNotice.style.display = 'flex'; }, 2500);
      }
    }

    if (cookieAccept) {
      cookieAccept.addEventListener('click', function () {
        localStorage.setItem('hkt_cookie_ok', '1');
        cookieNotice.classList.add('hidden');
        setTimeout(function () { cookieNotice.style.display = 'none'; }, 450);
      });
    }
  }

  // ── Scroll Animations (fade-up) ──────────────────────────
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.fade-up, .work-card, .service-domain-item, .strength-item, .history-item, .officer-item, .group-item, .service-menu-item, .service-digital-img, .service-digital-content, .company-stats, .company-table-wrap, .contact-info');

    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ── Header scroll ────────────────────────────────────────
  function initHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
        header.classList.remove('is-top');
      } else {
        // If not top page, always scrolled style
        if (!document.body.classList.contains('is-homepage')) {
          header.classList.add('is-scrolled');
        }
      }
    }

    // Sub pages always use scrolled style
    header.classList.add('is-scrolled');
    header.classList.remove('is-top');

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ── Mobile Menu ──────────────────────────────────────────
  function initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    if (!hamburger || !mobileMenu) return;

    function toggleMenu(open) {
      hamburger.classList.toggle('is-active', open);
      mobileMenu.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('menu-open', open);
    }

    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.contains('is-active');
      toggleMenu(!isOpen);
    });

    // Close on nav link click
    var mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link, .mobile-contact-btn');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.classList.contains('is-active')) {
        toggleMenu(false);
      }
    });
  }

  // ── Counter animation ────────────────────────────────────
  function initCounters() {
    var counters = document.querySelectorAll('.stat-num[data-target], .company-stat-num[data-target]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.dataset.target, 10);
    var t0 = performance.now();
    var duration = 1600;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(now) {
      var p = Math.min((now - t0) / duration, 1);
      el.textContent = Math.floor(easeOutCubic(p) * target);
      if (p < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  // ── Ripple effect on cards ───────────────────────────────
  function initRipple() {
    var cards = document.querySelectorAll('.work-card, .service-domain-item, .group-item');

    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        var ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = 'position:absolute;border-radius:50%;background:rgba(0,0,0,0.08);pointer-events:none;width:0;height:0;left:' + x + 'px;top:' + y + 'px;transform:translate(-50%,-50%);transition:width 0.5s ease,height 0.5s ease,opacity 0.5s ease;opacity:1;';

        if (getComputedStyle(card).position === 'static') {
          card.style.position = 'relative';
        }

        card.appendChild(ripple);

        requestAnimationFrame(function () {
          ripple.style.width = '200px';
          ripple.style.height = '200px';
          ripple.style.opacity = '0';
        });

        setTimeout(function () {
          if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 600);
      });
    });
  }

  // ── Smooth scroll for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
      var top = target.getBoundingClientRect().top + window.scrollY - headerH - 20;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

})();
