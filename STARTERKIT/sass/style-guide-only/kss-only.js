const doc = document;

doc.addEventListener("DOMContentLoaded",()=>{

  function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  }

  function openToggle(trigger, target) {
    trigger.addEventListener('click', () => {
      target.classList.toggle('open');  
      trigger.classList.toggle('open');  
    });
  }

  const navTarget = doc.querySelector('nav.kss-nav');
  navTarget.classList.add('open');  

  const navTrigger = doc.createElement('div');
  navTrigger.className = "kss-nav__trigger open";
  navTrigger.innerHTML = '<a href="#">menu</a>';

  insertBefore(navTrigger, navTarget);
  openToggle(navTrigger, navTarget);

});
