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

  if (!activeProject) {
    projectContainer.innerHTML = `<p>Projekt nicht gefunden.</p>`;
    return;
  }

  projectContainer.innerHTML = projectDetail(activeProject);
}

function initNav() {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  if (!navToggle) return;

  let scrollPosition = 0;

  navToggle.addEventListener("click", () => {
    const isNavOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isNavOpen);

    const icon = navToggle.querySelector("img");
    icon.src = isNavOpen ? "assets/icons/close.svg" : "assets/icons/menu.svg";

    if (isNavOpen) {
      scrollPosition = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    }
  });
}

function init() {
  initHeader();
  loadProjects();
  loadProjectDetail();
  initNav();
}

init();
