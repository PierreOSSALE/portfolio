fetch("/PORTFOLIO/json/portfolio-design.json")
  .then((response) => response.json())
  .then((projects) => {
    const portfolioList = document.getElementById("portfolio-list4");

    projects.forEach((project) => {
      const portfolioCard = document.createElement("div");
      portfolioCard.classList.add("portfolio-card-modal");
      portfolioCard.classList.add("swiper-slide");

      portfolioCard.innerHTML = `
        <div class="portfolio-item">
          <img src="${project.image}" alt="Illustration of ${project.title}" />
          <div class="portfolio-content">
            <h5 data-i18n="portfolio2.project${project.id}.title">${
        project.title
      }</h5>
            <p data-i18n="portfolio2.project${project.id}.description">${
        project.description
      }</p>
            <div class="portfolio-link">
              <a class="portfolio-see-more" aria-label="View more details" >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-modal-backdrop">
          <div class="portfolio-modal">
            <a class="modal-close-btn" aria-label="Close">
              <i class="fa-solid fa-xmark"></i>
            </a>
            <div class="modal-content">
              <div class="modal-title">
                <h2 data-i18n="portfolio2.project${project.id}.modalTitle">${
        project.title
      }</h2>
                <p data-i18n="portfolio2.project${
                  project.id
                }.modalDescription">${project.description}</p>
              </div>
              <h4 data-i18n="technologies">Technologies Used</h4>
              <ul class="my-portfolio">
                ${project.technologies
                  .map(
                    (tech) =>
                      `<li><i class="fa-solid fa-circle-check"></i><p>${tech}</p></li>`
                  )
                  .join("")}
              </ul>
              ${
                project.librariesAndCDN
                  ? `<h4 data-i18n="libraries">Libraries and CDNs Integrated</h4>
                    <ul class="my-portfolio">
                      ${project.librariesAndCDN
                        .map(
                          (lib) =>
                            `<li><i class="fa-solid fa-circle-check"></i><p>${lib}</p></li>`
                        )
                        .join("")}
                    </ul>`
                  : ""
              }
              <h4 data-i18n="portfolio2.project${
                project.id
              }.feature">Key Features</h4>
              <ul class="my-portfolio">
                ${project.features
                  .map(
                    (feature) =>
                      `<li><i class="fa-solid fa-circle-check"></i><p>${feature}</p></li>`
                  )
                  .join("")}
              </ul>
              <h4 data-i18n="role">Role in the Project</h4>
              <p>${project.role}</p>
              <h4 data-i18n="projectLinks">Project Links</h4>
              <p>
                <a href="${
                  project.projectLinks[0].url
                }" target="_blank" rel="noopener" class="element">
                  ${project.projectLinks[0].text}
                </a>
              </p>
              <h4 data-i18n="demoLinks">Demonstrations</h4>
              <p>
                <a href="${
                  project.demoLinks[0].url
                }" target="_blank" rel="noopener" class="element">
                  ${project.demoLinks[0].text}
                </a>
              </p>
            </div>
          </div>
        </div>
      `;

      portfolioList.appendChild(portfolioCard);
    });
  })
  .catch((error) => {
    console.error("Error loading projects:", error);
  });
