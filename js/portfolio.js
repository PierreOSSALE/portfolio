async function getPortfolioList() {
  try {
    let res = await axios.get("./json/portfolio-index.json");
    const projects = res;

    const portfolioList = document.getElementById("portfolio-list");

    const maxProjects = 6;
    const limitedProjects = projects.data.slice(0, maxProjects);

    limitedProjects.forEach((project) => {
      const portfolioCard = document.createElement("div");
      portfolioCard.classList.add("portfolio-card-modal");

      portfolioCard.innerHTML = `
             <div class="portfolio-item">
               <img src="${project.image}" alt="Illustration of ${
        project.title
      }" />
               <div class="portfolio-content">
                 <h5 data-i18n="portfolio-index.project${project.id}.title">${
        project.title
      }</h5>
                 <p data-i18n="portfolio-index.project${
                   project.id
                 }.description">${project.description}</p>
                 <div class="portfolio-link">
                   <a class="portfolio-see-more" aria-label="View more details">
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
                     <h2 data-i18n="portfolio-index.project${
                       project.id
                     }.modalTitle">${project.title}</h2>
                     <p data-i18n="portfolio-index.project${
                       project.id
                     }.modalDescription">${project.description}</p>
                   </div>
                   
                   <h4 data-i18n="portfolioGlobal.technologies">Technologies Used</h4>
                   <ul class="my-portfolio">
                    ${project.technologies
                      .map(
                        (tech, index) => `
                        <li>
                          <i class="fa-solid fa-circle-check"></i>
                          <p data-i18n="portfolio-index.project${project.id}.technologies.${index}">${tech}</p>
                       </li>
                     `
                      )
                      .join("")}
                  </ul>
                     
                
                     <h4 data-i18n="portfolioGlobal.libraries">Libraries and CDNs Integrated</h4>
                    <ul class="my-portfolio">
                      ${project.librariesAndCDN
                        .map(
                          (lib, index) => `
                          <li>
                            <i class="fa-solid fa-circle-check"></i>
                            <p data-i18n="portfolio-index.project${project.id}.librariesAndCDN.${index}">${lib}</p>
                          </li>
                        `
                        )
                        .join("")}
                    </ul>
                   
                   <h4 data-i18n="portfolio-index.project${
                     project.id
                   }.feature">Key Features</h4>
                   <ul class="my-portfolio">
                    ${project.featureOption
                      .map(
                        (feature, index) => `
                        <li>
                          <i class="fa-solid fa-circle-check"></i>
                          <p data-i18n="portfolio-index.project${project.id}.featureOption.${index}">${feature}</p>
                        </li>
                      `
                      )
                      .join("")}
                  </ul>
                     
                   <h4 data-i18n="portfolioGlobal.role">Role in the Project</h4>
                   <p data-i18n="portfolio-index.project${project.id}.role">${
        project.role
      }</p>
                     
                   <h4 data-i18n="portfolioGlobal.projectLink">Project Links</h4>
                  ${project.projectLinks
                    .map(
                      (link) => `
                     <p>
                       <a href="${link.url}" target="_blank" rel="noopener" class="element" 
                           data-i18n="portfolioGlobal.projectLinks">
                          View the project online
                        </a>
                      </p>
                    `
                    )
                    .join("")}
                    <h4 data-i18n="portfolioGlobal.demoLink">Demonstrations</h4>
                    ${project.demoLinks
                      .map(
                        (link) => `
                      <p>
                        <a href="${link.url}" target="_blank" rel="noopener" class="element" 
                           data-i18n="portfolioGlobal.demoLinks">
                          View the demo on my YouTube channel
                        </a>
                      </p>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            `;

      portfolioList.appendChild(portfolioCard);
    });
  } catch (error) {
    console.error("Error fetching portfolio list:", error);
  }
}
console.log(document.querySelector(".portfolio-see-more"));

getPortfolioList();
