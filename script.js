// NAV MENU TOGGLE (MOBILE VIEW)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// SCROLL ANIMATION - MATCHES [data-animate] + .in-view in CSS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Attach observer only to elements marked with data-animate
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// FOOTER YEAR AUTO UPDATE
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

