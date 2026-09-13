const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('nav a')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.remove('active'));
    const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
    active?.classList.add('active');
  });
}, { rootMargin: '-25% 0px -65% 0px' });

sections.forEach(section => observer.observe(section));
