// Year stamp + mobile nav toggle
document.getElementById('year')?.append(new Date().getFullYear());
const btn = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}
