// AllPortfolio.js
async function getAllProjects() {
  try {
    const [websites, webApps, designs] = await Promise.all([
      axios.get("../json/portfolio-website.json"),
      axios.get("../json/portfolio-webApp.json"),
      axios.get("../json/portfolio-design.json"),
    ]);

    const categories = [
      {
        element: document.getElementById("portfolio-list1"),
        data: websites.data,
        type: "webSite",
      },
      {
        element: document.getElementById("portfolio-list2"),
        data: webApps.data,
        type: "webApp",
      },
      {
        element: document.getElementById("portfolio-list3"),
        data: designs.data,
        type: "Design",
      },
    ];

    // Fonction de génération de HTML réutilisable
    const generateProjectHTML = (project, categoryType) => `
    <div class="portfolio-card-modal">
      <div class="portfolio-item">
        <img src="${project.image}" alt="Illustration of ${project.title}" />
        <div class="portfolio-content">
          <h5 data-i18n="portfolio-${categoryType}.project${project.id}.title">
            ${project.title}
          </h5>
          <p data-i18n="portfolio-${categoryType}.project${
      project.id
    }.description">
            ${project.description}
          </p>
          <div class="portfolio-link">
            <a class="portfolio-see-more" aria-label="View more details">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Modal content -->
      <div class="portfolio-modal-backdrop">
        <div class="portfolio-modal">
          <a class="modal-close-btn" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </a>
          <div class="modal-content">
            <div class="modal-title">
              <h2 data-i18n="portfolio-${categoryType}.project${
      project.id
    }.modalTitle">
                ${project.title}
              </h2>
              <p data-i18n="portfolio-${categoryType}.project${
      project.id
    }.modalDescription">
                ${project.description}
              </p>
            </div>
            
            <h4 data-i18n="portfolioGlobal.technologies">Technologies Used</h4>
            <ul class="my-portfolio">
              ${(project.technologies || [])
                .map(
                  (tech, index) => `
                    <li>
                      <i class="fa-solid fa-circle-check"></i>
                      <p data-i18n="portfolio-${categoryType}.project${project.id}.technologies.${index}">
                        ${tech}
                      </p>
                    </li>
                  `
                )
                .join("")}
            </ul>
            
            <h4 data-i18n="portfolioGlobal.libraries">Libraries and CDNs Integrated</h4>
            <ul class="my-portfolio">
              ${(project.librariesAndCDN || [])
                .map(
                  (lib, index) => `
                    <li>
                      <i class="fa-solid fa-circle-check"></i>
                      <p data-i18n="portfolio-${categoryType}.project${project.id}.librariesAndCDN.${index}">
                        ${lib}
                      </p>
                    </li>
                  `
                )
                .join("")}
            </ul>
            
            <h4 data-i18n="portfolio-${categoryType}.project${
      project.id
    }.feature">
              Key Features
            </h4>
            <ul class="my-portfolio">
              ${(project.featureOption || [])
                .map(
                  (feature, index) => `
                    <li>
                      <i class="fa-solid fa-circle-check"></i>
                      <p data-i18n="portfolio-${categoryType}.project${project.id}.featureOption.${index}">
                        ${feature}
                      </p>
                    </li>
                  `
                )
                .join("")}
            </ul>
            
            <h4 data-i18n="portfolioGlobal.role">Role in the Project</h4>
            <p data-i18n="portfolio-${categoryType}.project${project.id}.role">
              ${project.role}
            </p>
            
            <h4 data-i18n="portfolioGlobal.projectLink">Project Links</h4>
            ${(project.projectLinks || [])
              .map(
                (link) => `
                  <p>
                    <a href="${link.url}" target="_blank" rel="noopener" class="element" data-i18n="portfolioGlobal.projectLinks">
                      View the project online
                    </a>
                  </p>
                `
              )
              .join("")}
              
            <h4 data-i18n="portfolioGlobal.demoLink">Demonstrations</h4>
            ${(project.demoLinks || [])
              .map(
                (link) => `
                  <p>
                    <a href="${link.url}" target="_blank" rel="noopener" class="element" data-i18n="portfolioGlobal.demoLinks">
                      View the demo on my YouTube channel
                    </a>
                  </p>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
      </div>
    `;

    // Rendu des projets et gestion des événements
    categories.forEach(({ element, data, type }) => {
      if (element) {
        element.innerHTML = data
          .map((project) => generateProjectHTML(project, type))
          .join("");
      } else {
        console.warn(`L'élément pour la catégorie "${type}" est introuvable.`);
      }
    });

    // Initialisation des événements pour les modales
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

getAllProjects();
