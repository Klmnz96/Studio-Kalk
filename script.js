const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");

function updateHeader() {
  // ganz oben -> transparent, sonst fest
  header.classList.toggle("is-top", Boolean(hero) && window.scrollY < 40);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
