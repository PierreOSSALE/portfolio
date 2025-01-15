// fetch("/PORTFOLIO/json/service.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Erreur lors du chargement du fichier JSON");
//     }
//     return response.json();
//   })
//   .then((services) => {
//     console.log(services);

//     const serviceList = document.querySelector(".service-list");
//     console.log(serviceList);

//     services.forEach((service) => {});
//     serviceList.innerHTML = `
//     <div class="service-card-modal">
//         <div class="service-item">
//             <div class="service-content">
//                 <i class="fas fa-code"></i>
//                 <h2 data-i18n="services2.frontend.title"></h2>
//                 <p data-i18n="services2.frontend.description"></p>
//                 <a class="service-see-more"><button class="btn" data-i18n="services2.frontend.learn_more"></button></a>

//             </div>
//         </div>
//     </di>

//     `;
//   });
