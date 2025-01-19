// Fonction pour charger dynamiquement des fichiers JavaScript avec gestion de l'ordre
const loadScriptsSequentially = async () => {
  const scripts = [
    "https://unpkg.com/scrollreveal",
    "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js",
    "https://unpkg.com/i18next@latest/i18next.min.js",
    "https://unpkg.com/i18next-http-backend@latest/i18nextHttpBackend.min.js",
    "/PORTFOLIO/js/scrollReveal.js",
    "/PORTFOLIO/js/i18n.js",
    "/PORTFOLIO/js/menu.js",
    "/PORTFOLIO/js/scroll.js",
    "/PORTFOLIO/js/service.js",
    "/PORTFOLIO/js/contact.js",
    "/PORTFOLIO/js/modal.js",
    "/PORTFOLIO/js/typed.js",
  ];

  for (const src of scripts) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      // Charger les scripts en différé
      script.onload = resolve;
      script.onerror = () =>
        reject(new Error(`Erreur lors du chargement de ${src}`));
      document.body.appendChild(script);
    });
  }
};

// Fonction pour charger le contenu du header et du footer
const loadContent = async () => {
  try {
    // Récupérer et insérer le contenu du header
    const headerRes = await fetch("/PORTFOLIO/page/header.html");
    const headerData = await headerRes.text();
    document.getElementById("header").innerHTML = headerData;

    // Charger dynamiquement les scripts une fois le header chargé
    await loadScriptsSequentially();
  } catch (error) {
    console.error("Erreur lors du chargement du contenu :", error);
  }
};

// Appel de la fonction de chargement
loadContent();
