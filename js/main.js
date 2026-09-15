/* ===================================================
   Main assembler
   Loads every section partial from /sections into its
   placeholder (in document order), then runs each
   section's init function once the full page is in the DOM.
   This is what keeps the site a single page built from
   many small files, instead of many separate pages.
   =================================================== */
(function(){

  function includeSection(el){
    var url = el.getAttribute('data-include');
    return fetch(url)
      .then(function(res){
        if(!res.ok){ throw new Error('Could not load ' + url + ' (' + res.status + ')'); }
        return res.text();
      })
      .then(function(html){
        el.outerHTML = html;
      })
      .catch(function(err){
        console.error(err);
        el.outerHTML = '<!-- Failed to load ' + url + ' -->';
      });
  }

  var initOrder = [
    'initHeader', 'initHome', 'initAbout', 'initServices', 'initSkills',
    'initWork', 'initShowcase', 'initProcess', 'initWhy', 'initTestimonials',
    'initExperience', 'initResume', 'initContact', 'initFooter'
  ];

  function runInits(){
    initOrder.forEach(function(name){
      if(typeof window[name] === 'function'){
        window[name]();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var targets = Array.prototype.slice.call(document.querySelectorAll('[data-include]'));
    Promise.all(targets.map(includeSection)).then(runInits);
  });

})();
