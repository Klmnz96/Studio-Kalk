function initHeader() {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  if (!header) return;

  const update = () =>
    header.classList.toggle("is-top", Boolean(hero) && window.scrollY < 40);

  update();
  window.addEventListener("scroll", update, { passive: true });
}

async function loadProjects() {
  const projectGrid = document.querySelector("#featured-grid, #project-grid");
  if (!projectGrid) return;

  const response = await fetch("projects.json");
  const data = await response.json();

  const isFeatured = projectGrid.id === "featured-grid";
  const list = isFeatured ? data.projects.slice(0, 3) : data.projects;

  projectGrid.innerHTML = list.map(projectCard).join("");
}

function init() {
  initHeader();
  loadProjects();
  loadProjectDetail();
}

init();
