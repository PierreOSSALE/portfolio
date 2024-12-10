// Sélection des éléments nécessaires
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Fonction pour fermer le menu
const closeMenu = () => {
  // Ajout de la classe 'closing' pour l'animation de fermeture
  navList.classList.add("closing");

  // Après l'animation, on enlève la classe 'active' pour cacher le menu
  setTimeout(() => {
    navList.classList.remove("active", "closing");

    // Supprime l'en-tête et le titre s'ils existent
    const menuHeader = document.querySelector(".menu-header");
    const menuTitle = document.querySelector(".menu-title");
    if (menuHeader) menuHeader.remove();
    if (menuTitle) menuTitle.remove();
  }, 650); // Durée de l'animation (en ms), doit correspondre à celle de l'animation CSS

  mobileMenu.classList.remove("active");
};

// Événement click pour ouvrir/fermer le menu
mobileMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    if (!document.querySelector(".menu-header")) {
      const menuHeader = document.createElement("li");
      menuHeader.classList.add("menu-header");
      menuHeader.innerHTML = 'Menu <i class="fa-solid fa-arrow-left"></i>';
      navList.prepend(menuHeader);

      // Attacher l'événement au <i> seulement après sa création
      const icon = menuHeader.querySelector("i");
      if (icon) {
        icon.addEventListener("click", closeMenu);
      }
    }

    if (!document.querySelector(".menu-title")) {
      const menuTitle = document.createElement("p");
      menuTitle.classList.add("menu-title");
      menuTitle.innerHTML = `<p><i class="fa-regular fa-heart"></i> Simon Ossale </p>`;
      navList.prepend(menuTitle);
    }
  } else {
    closeMenu();
  }
});

// Ferme le menu lorsqu'on clique sur un lien
navList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMenu();
  }
});

// Ferme le menu lorsqu'on clique en dehors
document.addEventListener("click", (e) => {
  if (
    navList.classList.contains("active") &&
    !navList.contains(e.target) &&
    !mobileMenu.contains(e.target)
  ) {
    closeMenu();
  }
});

//-----------------------------------------------------------

// Sélectionne le bouton de défilement vers le haut
const scrollUpButton = document.getElementById("scrollUp");
console.log(scrollUpButton);

// Fonction pour afficher ou masquer le bouton
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollUpButton.classList.add("show");
  } else {
    scrollUpButton.classList.remove("show");
  }
});

// Fonction pour gérer le clic
scrollUpButton.addEventListener("click", () => {
  // Défile la page vers le haut
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//----------------------------------------------------------

// Initialiser ScrollReveal avec des options globales
// Initialiser ScrollReveal avec des options globales
ScrollReveal({
  reset: false,
  distance: getComputedStyle(document.documentElement).getPropertyValue(
    "--scroll-distance"
  ),
  duration: 1500,
  delay: 200,
  easing: "ease-in-out",
});

// Animations pour la section "Hero"
ScrollReveal().reveal(".hero-content h3", { delay: 200, origin: "left" });
ScrollReveal().reveal("h1", { delay: 300, origin: "top" });
ScrollReveal().reveal(".hero-content .dynamic-text", {
  delay: 400,
  origin: "right",
});
ScrollReveal().reveal(".hero-content p", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".social-icons a i", {
  delay: 600,
  origin: "right",
  interval: 200,
  distance: "100px",
});
ScrollReveal().reveal(".btn, footer", {
  delay: 600,
  origin: "top",
  interval: 100,
});
ScrollReveal().reveal(".hero-img", {
  delay: 700,
  origin: "top",
});

// Animations pour la section "About"
ScrollReveal().reveal(".about-img", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".about-card-modal h1", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".about-content p", {
  delay: 400,
  origin: "right",
});

ScrollReveal().reveal(".about-content .btn", {
  delay: 500,
  origin: "bottom",
});

ScrollReveal().reveal(".about-content h3", {
  delay: 700,
  origin: "left",
});

// Animations pour la section "Services"
ScrollReveal().reveal(".service-item", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal("service-content i", {
  delay: 400,
  origin: "top",
});
ScrollReveal().reveal(".service-content h2", { delay: 500, origin: "left" });
ScrollReveal().reveal(".service-content p", { delay: 600, origin: "right" });
ScrollReveal().reveal(".service-content .btn", { delay: 700, origin: "top" });

// Animations pour la section "Portfolio"
ScrollReveal().reveal(".project-item", {
  delay: 200,
  origin: "bottom",
  interval: 100,
});
ScrollReveal().reveal(".project-content h5", { delay: 300, origin: "left" });
ScrollReveal().reveal(".project-content p", { delay: 400, origin: "right" });
ScrollReveal().reveal(".project-link", { delay: 500, origin: "top" });

// Animations pour la section "Contact"
ScrollReveal().reveal(".contact-info h4, .contact-box", {
  delay: 300,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal("#contact-form", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".social-icons a", {
  delay: 500,
  origin: "top",
  interval: 100,
});

// Animations pour la section "Skills"
ScrollReveal().reveal(".skills h2", {
  delay: 200,
  origin: "top",
});

ScrollReveal().reveal(".skill-item", {
  delay: 300,
  origin: "bottom",
  interval: 100, // Applique une animation décalée à chaque élément
});

ScrollReveal().reveal(".progress-bar .progress", {
  delay: 400,
  origin: "left",
  distance: "100px",
  easing: "ease-in-out",
});

/*=========================================================================================================

about modale

=========================================================================================================*/
const aboutCardModal = document.querySelectorAll(".about-card-modal");

aboutCardModal.forEach((aboutCardModal) => {
  // Sélectionner le bouton "Apprendre plus" et les autres éléments nécessaires
  const aboutCard = aboutCardModal.querySelector(
    ".about-content .about-see-more .btn"
  );
  const btnElement = aboutCardModal.querySelector(".about-modal .element");

  const aboutBackdrop = aboutCardModal.querySelector(".about-modal-backdrop");
  const aboutModal = aboutCardModal.querySelector(".about-modal");
  const modalCloseBtn = aboutCardModal.querySelector(".modal-close-btn");

  // Vérifier que les éléments existent avant d'ajouter des événements
  if (aboutCard && aboutBackdrop && aboutModal && modalCloseBtn && btnElement) {
    aboutCard.addEventListener("click", () => {
      aboutBackdrop.style.display = "flex";

      setTimeout(() => {
        aboutBackdrop.classList.add("active");
      }, 100);

      setTimeout(() => {
        aboutModal.classList.add("active");
      }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
      aboutModal.classList.remove("active");

      setTimeout(() => {
        aboutBackdrop.classList.remove("active");
        aboutBackdrop.style.display = "none";
      }, 500);
    });
    btnElement.addEventListener("click", () => {
      aboutModal.classList.remove("active");

      setTimeout(() => {
        aboutBackdrop.classList.remove("active");
        aboutBackdrop.style.display = "none";
      }, 500);
    });
  }
});

/*=========================================================================================================

service modale

=========================================================================================================*/

const serviceCardModal = document.querySelectorAll(".service-card-modal");

serviceCardModal.forEach((serviceCardModal) => {
  // Sélectionner le bouton "Apprendre plus" et les autres éléments nécessaires
  const serviceCard = serviceCardModal.querySelector(
    ".service-content .service-see-more button"
  );
  const serviceBackdrop = serviceCardModal.querySelector(
    ".service-modal-backdrop"
  );
  const serviceModal = serviceCardModal.querySelector(".service-modal");
  const modalCloseBtn = serviceCardModal.querySelector(".modal-close-btn");

  // Vérifier que les éléments existent avant d'ajouter des événements
  if (serviceCard && serviceBackdrop && serviceModal && modalCloseBtn) {
    serviceCard.addEventListener("click", () => {
      serviceBackdrop.style.display = "flex";

      setTimeout(() => {
        serviceBackdrop.classList.add("active");
      }, 100);

      setTimeout(() => {
        serviceModal.classList.add("active");
      }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
      serviceModal.classList.remove("active");

      setTimeout(() => {
        serviceBackdrop.classList.remove("active");
        serviceBackdrop.style.display = "none";
      }, 500);
    });
  }
});

/*=========================================================================================================================

contact form

===========================================================================================================================*/

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        document.getElementById("success-message").innerText =
          "Message envoyé avec succès!";
        document.getElementById("success-message").style.display = "block";
      } else {
        document.getElementById("success-message").innerText =
          "Une erreur est survenue. Veuillez réessayer.";
        document.getElementById("success-message").style.display = "block";
      }
    } catch (error) {
      document.getElementById("success-message").innerText =
        "Une erreur est survenue. Veuillez réessayer.";
      document.getElementById("success-message").style.display = "block";
    }
  });

//----------------------------------------------------------
// Effet de texte dynamique
let typed = new Typed(".dynamic-text", {
  strings: ["Junior", "Fullstack", "React.js"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
  showCursor: false,
});
