const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");

function updateHeader() {
  // ganz oben -> transparent, sonst fest
  header.classList.toggle("is-top", Boolean(hero) && window.scrollY < 40);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

async function loadProjects() {
  const response = await fetch("projects.json");
  const data = await response.json();

  const projectGrid = document.querySelector("#featured-grid");
  if (!projectGrid) return;

  const projectCards = data.projects.slice(0, 3).map(projectCard).join("");

  projectGrid.innerHTML = projectCards;
}

loadProjects();
