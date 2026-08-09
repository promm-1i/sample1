// Header: transparent over the hero, solid once scrolled past it
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const toggleHeader = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 40);
  toggleHeader();
  window.addEventListener('scroll', toggleHeader, { passive: true });
}

// Hero background: cycle through multiple videos with a crossfade
const heroVideos = document.querySelectorAll('.hero .hero-bg');
if (heroVideos.length > 1) {
  let heroIndex = 0;
  setInterval(() => {
    const next = (heroIndex + 1) % heroVideos.length;
    heroVideos[heroIndex].classList.remove('is-active');
    heroVideos[next].classList.add('is-active');
    heroVideos[next].currentTime = 0;
    heroVideos[next].play().catch(() => {});
    heroIndex = next;
  }, 8000);
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navLinks.style.display = navLinks.classList.contains('open') ? 'flex' : '';
  });
}

// Promo carousel
const promoSection = document.querySelector('.promo');
const slides = document.querySelectorAll('.promo-slide');
const dots = document.querySelectorAll('.promo-dots button');
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  if (promoSection) promoSection.dataset.slide = String(index);
  current = index;
}

dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

if (slides.length) {
  setInterval(() => {
    showSlide((current + 1) % slides.length);
  }, 5000);
}

// Ways-to-use tabs (visual only)
const tabs = document.querySelectorAll('.ways-tabs button');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
