/* ===================================================
   Portfolio / My Work — behaviour
   Filter bar for the portfolio grid.
   =================================================== */
function initWork(){
  var filterButtons = document.querySelectorAll('.filter-btn');
  var portfolioCards = document.querySelectorAll('.portfolio-card');
  filterButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterButtons.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      portfolioCards.forEach(function(card){
        var match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}
