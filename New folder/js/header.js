/* ===================================================
   Header / navigation — behaviour
   =================================================== */
function initHeader(){
  var header = document.getElementById('siteHeader');
  function onScroll(){
    if(window.scrollY > 12){ header.classList.add('scrolled'); }
    else{ header.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', function(){
    var isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.querySelectorAll('.nav-link').forEach(function(link){
    link.addEventListener('click', function(){
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    });
  });
}
