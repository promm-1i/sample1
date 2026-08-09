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

// Promo carousel: horizontal sliding track
const promoTrack = document.querySelector('.promo-track');
const slides = document.querySelectorAll('.promo-slide');
const dots = document.querySelectorAll('.promo-dots button');
const promoPrev = document.querySelector('.promo-prev');
const promoNext = document.querySelector('.promo-next');
let current = 0;
let promoTimer;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  if (promoTrack) promoTrack.style.transform = `translateX(-${current * (100 / slides.length)}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

function restartAutoplay() {
  clearInterval(promoTimer);
  promoTimer = setInterval(() => showSlide(current + 1), 5000);
}

dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); restartAutoplay(); }));
if (promoPrev) promoPrev.addEventListener('click', () => { showSlide(current - 1); restartAutoplay(); });
if (promoNext) promoNext.addEventListener('click', () => { showSlide(current + 1); restartAutoplay(); });

if (slides.length) {
  showSlide(0);
  restartAutoplay();
}

// Ways-to-use tabs (visual only)
const tabs = document.querySelectorAll('.ways-tabs button');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
