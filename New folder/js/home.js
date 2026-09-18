/* ===================================================
   Home / hero — behaviour
   Single orchestrated entrance animation for the hero.
   =================================================== */
function initHome(){
  var heroEls = document.querySelectorAll('.hero-label, .hero h1, .hero-sub, .hero-services-line, .hero-actions, .hero-meta, .hero-photo-wrap');
  heroEls.forEach(function(el, i){
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1)';
    setTimeout(function(){
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 90 * i + 60);
  });
}
