/* ===================================================
   Contact — behaviour
   Front-end demo submit handling for the contact form.
   =================================================== */
function initContact(){
  var form = document.getElementById('contactForm');
  var successMsg = document.getElementById('formSuccess');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      successMsg.classList.add('show');
      form.reset();
      successMsg.scrollIntoView({ behavior:'smooth', block:'center' });
    });
  }
}
