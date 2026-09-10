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
  console.log(data);
  console.log(projectCard(data.projects[0]));
}

loadProjects();
