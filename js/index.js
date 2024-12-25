// Select the necessary elements
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Function to close the menu
const closeMenu = () => {
  navList.classList.remove("active");

  // Remove the header and title if they exist
  const menuHeader = document.querySelector(".menu-header");
  const menuTitle = document.querySelector(".menu-title");
  if (menuHeader) menuHeader.remove();
  if (menuTitle) menuTitle.remove();
};

// Event listener to toggle the mobile menu visibility
mobileMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  // Check if the mobile menu is active and dynamically add menu header and title
  if (mobileMenu.classList.contains("active")) {
    if (!document.querySelector(".menu-header")) {
      const menuHeader = document.createElement("li");
      menuHeader.classList.add("menu-header");
      menuHeader.innerHTML = 'Menu <i class="fa-solid fa-arrow-left"></i>';
      navList.prepend(menuHeader);

      // Attach click event to the arrow icon after it is created
      const icon = menuHeader.querySelector("i");
      if (icon) {
        icon.addEventListener("click", closeMenu);
      }
    }

    // Add menu title if it doesn't exist
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

// Close the menu when a link inside the menu is clicked
navList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMenu();
  }
});

// Close the menu when clicking outside of the menu or the mobile menu button
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

//-----------------------------------------------------------

// Select the scroll-up button element
const scrollUpButton = document.getElementById("scrollUp");
console.log(scrollUpButton);

// Show or hide the scroll-up button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollUpButton.classList.add("show");
  } else {
    scrollUpButton.classList.remove("show");
  }
});

// Scroll to the top when the scroll-up button is clicked
scrollUpButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//----------------------------------------------------------

// Initialize ScrollReveal with global options
ScrollReveal({
  reset: false,
  distance: getComputedStyle(document.documentElement).getPropertyValue(
    "--scroll-distance"
  ),
  duration: 1500,
  delay: 200,
  easing: "ease-in-out",
  viewFactor: 0.2,
  opacity: 0,
});

// Animations for the "Hero" section
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
});

ScrollReveal().reveal(".btn", {
  delay: 600,
  origin: "top",
  interval: 100,
});
ScrollReveal().reveal(".hero-img", {
  delay: 700,
  origin: "bottom",
});

// Animations for the "About" section
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

// Animations for the "Services" section
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

// Animations for the "Portfolio" section
ScrollReveal().reveal(".portfolio-item", {
  delay: 200,
  origin: "bottom",
  interval: 100,
});
ScrollReveal().reveal(".portfolio-content h5", { delay: 300, origin: "left" });
ScrollReveal().reveal(".portfolio-content p", { delay: 400, origin: "right" });
ScrollReveal().reveal(".portfolio-link", { delay: 500, origin: "top" });

// Animations for the "Contact" section
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

// Animations for the "Skills" section
ScrollReveal().reveal(".skills h2", {
  delay: 200,
  origin: "top",
});
ScrollReveal().reveal(".skill-item, .skill-item h5", {
  delay: 300,
  origin: "bottom",
  interval: 100, // Apply staggered animation to each item
});
ScrollReveal().reveal(".progress-bar .progress, .progress-line span", {
  delay: 400,
  origin: "left",
  distance: "100px",
  easing: "ease-in-out",
});

// Generic function to handle modals
function initModal(
  modalContainerSelector,
  contentButtonSelector,
  backdropSelector,
  modalSelector,
  closeButtonSelector,
  elementSelector = null
) {
  const modalContainers = document.querySelectorAll(modalContainerSelector);

  modalContainers.forEach((modalContainer) => {
    const contentButton = modalContainer.querySelector(contentButtonSelector);
    const backdrop = modalContainer.querySelector(backdropSelector);
    const modal = modalContainer.querySelector(modalSelector);
    const closeButton = modalContainer.querySelector(closeButtonSelector);
    const element = elementSelector
      ? modalContainer.querySelector(elementSelector)
      : null;

    // Ensure all necessary elements exist before adding event listeners
    if (contentButton && backdrop && modal && closeButton) {
      // Open the modal
      contentButton.addEventListener("click", () => {
        backdrop.style.display = "flex";
        document.body.classList.add("no-scroll");

        setTimeout(() => {
          backdrop.classList.add("active");
        }, 100);

        setTimeout(() => {
          modal.classList.add("active");
        }, 300);
      });

      // Close the modal
      closeButton.addEventListener("click", closeModal);

      if (element) {
        element.addEventListener("click", closeModal);
      }

      function closeModal() {
        modal.classList.remove("active");

        setTimeout(() => {
          backdrop.classList.remove("active");
          backdrop.style.display = "none";
          document.body.classList.remove("no-scroll");
        }, 500);
      }
    }
  });
}

// Initialize modals for different sections
initModal(
  ".about-card-modal",
  ".about-content .about-see-more .btn",
  ".about-modal-backdrop",
  ".about-modal",
  ".modal-close-btn",
  ".p-3 .element"
);

initModal(
  ".service-card-modal",
  ".service-content .service-see-more button",
  ".service-modal-backdrop",
  ".service-modal",
  ".modal-close-btn"
);

initModal(
  ".portfolio-card-modal",
  ".portfolio-content .portfolio-see-more i",
  ".portfolio-modal-backdrop",
  ".portfolio-modal",
  ".modal-close-btn"
);

// Initialiser i18next avec le backend HTTP pour charger les fichiers JSON de traduction
i18next
  .use(i18nextHttpBackend) // Utilisation du backend HTTP pour charger les fichiers JSON
  .init(
    {
      lng: "en", // Langue par défaut
      fallbackLng: "en", // Langue de secours
      debug: true, // Activer le mode debug (optionnel)
      backend: {
        loadPath: "/PORTFOLIO/locales/{{lng}}/translation.json", // Chemin des fichiers JSON
      },
    },
    (err, t) => {
      if (err) {
        console.error("Erreur lors de l'initialisation i18next :", err);
      } else {
        updateContent(); // Appliquer les traductions initiales
        setActiveLanguage("en"); // Mettre la langue par défaut comme active
      }
    }
  );

// Fonction pour mettre à jour le contenu traduit sur la page
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n"); // Obtenir la clé de traduction

    // Vérifier et mettre à jour selon les attributs spécifiques
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      if (el.hasAttribute("placeholder")) {
        el.setAttribute("placeholder", i18next.t(key)); // Mettre à jour le placeholder
      }
      if (el.type === "submit" || el.hasAttribute("value")) {
        el.setAttribute("value", i18next.t(key)); // Mettre à jour la valeur
      }
    } else {
      el.textContent = i18next.t(key); // Par défaut : mettre à jour le texte
    }
  });
}

// Fonction pour gérer l'état visuel de la langue sélectionnée
function setActiveLanguage(lang) {
  document.querySelectorAll(".language-option img").forEach((el) => {
    if (el.parentElement.getAttribute("data-lang") === lang) {
      el.classList.add("active"); // Ajouter la classe active
    } else {
      el.classList.remove("active"); // Retirer la classe active des autres
    }
  });
}

// Gérer le changement de langue lorsqu'une image est cliquée
document.getElementById("languageSelect").addEventListener("click", (e) => {
  const target = e.target.closest("img"); // Vérifier si l'image est cliquée
  if (target) {
    const selectedLanguage = target.parentElement.getAttribute("data-lang"); // Obtenir la langue
    i18next.changeLanguage(selectedLanguage, (err) => {
      if (err) {
        console.error("Erreur lors du changement de langue :", err);
      } else {
        updateContent(); // Mettre à jour le contenu traduit
        setActiveLanguage(selectedLanguage); // Mettre à jour l'état visuel
      }
    });
  }
});
/*=========================================================================================================================

Contact Form Handling

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
          "Message sent successfully!";
        document.getElementById("success-message").style.display = "block";
      } else {
        document.getElementById("success-message").innerText =
          "An error occurred. Please try again.";
        document.getElementById("success-message").style.display = "block";
      }
    } catch (error) {
      document.getElementById("success-message").innerText =
        "An error occurred. Please try again.";
      document.getElementById("success-message").style.display = "block";
    }
  });
//----------------------------------------------------------
// Dynamic Text Effect
let typed = new Typed(".dynamic-text", {
  strings: ["Junior", "Fullstack", "React.js"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
  showCursor: false,
});
