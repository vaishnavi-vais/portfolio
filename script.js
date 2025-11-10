const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const bodyEl = document.body;
function closeMenu(){
  if(!navLinks) return;
  navLinks.classList.remove('open');
  bodyEl.classList.remove('menu-open');
  if(navToggle) navToggle.setAttribute('aria-expanded', 'false');
}
if(navToggle && navLinks){
  navToggle.addEventListener('click', ()=>{
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    bodyEl.classList.toggle('menu-open', isOpen);
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', ()=> closeMenu());
  });
  document.addEventListener('click', (e)=>{
    if(!navLinks.classList.contains('open')) return;
    const target = e.target;
    const withinMenu = navLinks.contains(target) || (navToggle && navToggle.contains(target));
    if(!withinMenu) closeMenu();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 640) closeMenu();
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

function onScroll(){
  if(window.scrollY > 8){
    document.body.classList.add('scrolled');
  }else{
    document.body.classList.remove('scrolled');
  }
}
onScroll();
window.addEventListener('scroll', onScroll, {passive:true});

// Graceful image fallbacks if files are missing
function svgPlaceholder(text){
  const t = encodeURIComponent(text || 'Image');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#dde7ff'/>
        <stop offset='100%' stop-color='#e9e7ff'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' rx='24' fill='url(#g)'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='18' fill='#475569'>${t}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
}

function attachFallback(selector, label){
  document.querySelectorAll(selector).forEach(img=>{
    img.addEventListener('error', ()=>{
      img.src = svgPlaceholder(label);
    }, {once:true});
  });
}

attachFallback('.photo-img', 'Profile');
attachFallback('.edu-logo', 'Logo');
