/* Comportamiento de la landing.
   Se carga con defer, asi que el DOM ya existe cuando se ejecuta. */
(function () {
  'use strict';

  /* Animación del gráfico al entrar en pantalla.
     Solo se "arma" si hay soporte y el usuario no pidió menos movimiento.
     Sin JS, sin IntersectionObserver o con motion reducido, las barras
     se ven completas desde el principio. */
  var chart = document.getElementById('chart');
  var quiet = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (chart && !quiet && 'IntersectionObserver' in window) {
    chart.classList.add('armed');
    new IntersectionObserver(function(entries, obs){
      if (entries[0].isIntersecting) { chart.classList.add('in'); obs.disconnect(); }
    }, {threshold:.25}).observe(chart);
  }

  /* Eventos de conversión. Se disparan solo si GA4 está cargado, así que
     la página funciona igual mientras el snippet siga comentado. */
  document.querySelectorAll('[data-ev]').forEach(function(el){
    el.addEventListener('click', function(){
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', el.getAttribute('data-ev'), {
        link_url: el.getAttribute('href'),
        link_text: (el.textContent || '').trim().slice(0, 60)
      });
    });
  });
})();
