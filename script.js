(function () {
  'use strict';

  var html = document.documentElement;
  var content = document.querySelector('.content');

  var titles = {
    de: 'Wadim Skworzow — Full-Stack-Entwickler',
    en: 'Wadim Skworzow — Full-stack developer'
  };

  var switches = document.querySelectorAll('[data-set-lang]');

  function setLang(lang, animate) {
    if (lang !== 'de' && lang !== 'en') lang = 'en';

    if (animate) {
      content.classList.add('swapping');
      window.setTimeout(function () {
        content.classList.remove('swapping');
      }, 190);
    }

    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang);
    document.title = titles[lang];

    Array.prototype.forEach.call(switches, function (btn) {
      if (btn.hasAttribute('aria-pressed')) {
        btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang));
      }
    });
  }

  Array.prototype.forEach.call(switches, function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.setLang, true);
    });
  });

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.railnav a'));
  var sections = navLinks.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  });

  function markCurrentSection() {
    var pos = window.scrollY + 140;
    var active = -1;

    sections.forEach(function (section, i) {
      if (section && section.offsetTop <= pos) active = i;
    });

    navLinks.forEach(function (a, i) {
      if (i === active) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      markCurrentSection();
      ticking = false;
    });
  }, { passive: true });

  setLang((navigator.language || 'en').toLowerCase().indexOf('de') === 0 ? 'de' : 'en', false);
  markCurrentSection();
})();
