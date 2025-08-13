// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form analytics hook
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', () => {
    if (window.gtag) {
      gtag('event', 'submit', { 'event_category': 'contact', 'event_label': 'booking form' });
    }
  });
}
