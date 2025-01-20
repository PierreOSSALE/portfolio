/*=========================================================================================================================
Changement de langue avec détection régionale
===========================================================================================================================*/

// Détecter la langue et la région préférées de l'utilisateur
const userLang = navigator.language || navigator.languages[0] || "en"; // Langue par défaut si rien n'est détecté
const [language, region] = userLang.split("-"); // Séparer langue et région (par ex., "fr" et "FR")

// Déterminer la langue de secours basée sur la région
let fallbackLang;
switch (region) {
  case "FR":
  case "BE":
  case "CH": // Régions francophones
    fallbackLang = "fr";
    break;
  case "ES":
  case "MX": // Régions hispanophones
    fallbackLang = "es";
    break;
  case "DE": // Régions germanophones
    fallbackLang = "de";
    break;
  default: // Langue par défaut
    fallbackLang = "en";
}

// Initialiser i18next avec le backend HTTP pour charger les fichiers JSON de traduction
i18next.use(i18nextHttpBackend).init(
  {
    lng: language, // Langue détectée
    fallbackLng: fallbackLang, // Langue de secours basée sur la région
    debug: true,
    backend: {
      loadPath: "./locales/{{lng}}/translation.json", // Chemin des fichiers JSON
    },
  },
  (err, t) => {
    if (err) {
      console.error("Erreur lors de l'initialisation i18next :", err);
    } else {
      updateContent(); // Appliquer les traductions initiales
      setActiveLanguage(language); // Mettre la langue détectée comme active
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

// Gérer le changement de langue lorsqu'une image est cliqué
document.getElementById("languageSelect").addEventListener("click", (e) => {
  const target = e.target.closest("img"); // Vérifier si l'image est cliqué
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
