const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in-view');
      observer.unobserve(e.target);
    }
  })
},{threshold:0.15});

document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
