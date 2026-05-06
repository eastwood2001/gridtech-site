document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('open');
  });
});

const topbar = document.querySelector('.topbar');
const toggle = document.querySelector('.mobile-toggle');
if (toggle && topbar) {
  toggle.addEventListener('click', () => topbar.classList.toggle('menu-open'));
}
