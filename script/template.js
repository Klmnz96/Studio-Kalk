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

function projectDetail(project) {
  const paragraphs = project.description
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const galleryImages = project.images
    .map(
      (imageSrc) =>
        `<img src="${imageSrc}" alt="${project.title}" loading="lazy" />`,
    )
    .join("");

  return `
    <header class="project-header">
    <p class="eyebrow">${project.category} &middot; ${project.location} &middot; ${project.year}</p>
    <h1>${project.title}</h1>
    <p class="lead">${project.summary}</p>
    </header>
    
    <dl class="project-facts">
    <div><dt>Ort</dt><dd>${project.location}</dd></div>
    <div><dt>Jahr</dt><dd>${project.year}</dd></div>
    <div><dt>Fläche</dt><dd>${project.area}</dd></div>
    <div><dt>Status</dt><dd>${project.status}</dd></div>
    </dl>
    
    <div class="project-text">${paragraphs}</div>
    
    <div class="project-gallery">${galleryImages}</div>
    `;
}
