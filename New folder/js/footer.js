/* ===================================================
   Footer — behaviour
   Keeps the copyright year current.
   =================================================== */
function initFooter(){
  var yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
}
