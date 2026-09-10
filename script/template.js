function projectCard(project) {
  return `
    <li class="project-card">
     <a href="projekt.html?id=${project.id}">
     <figure>
     <img src="${project.thumb}" alt="${project.title}" loading="lazy" />
     </figure>
     <p class="eyebrow">${project.category} &middot; ${project.location} &middot; ${project.year}</p>
     <h3>${project.title}</h3>
     </a>
     </li>
     `;
}
