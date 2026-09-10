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

  const projectsResponse = await fetch("projects.json");
  const projectsData = await projectsResponse.json();

  const visibleProjects =
    projectGrid.id === "featured-grid"
      ? projectsData.projects.slice(0, 3)
      : projectsData.projects;

  projectGrid.innerHTML = visibleProjects.map(projectCard).join("");
}

async function loadProjectDetail() {
  const projectContainer = document.querySelector("#project");
  if (!projectContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  const projectsResponse = await fetch("projects.json");
  const projectsData = await projectsResponse.json();

  const activeProject = projectsData.projects.find(
    (project) => project.id === projectId,
  );

  console.log(activeProject);
}

function init() {
  initHeader();
  loadProjects();
  loadProjectDetail();
}

init();
