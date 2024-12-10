// Fonction pour charger le contenu du header et du footer
const loadContent = async () => {
  try {
    // Récupérer et insérer le contenu du header
    const headerRes = await fetch("../header.html");
    const headerData = await headerRes.text();
    document.getElementById("header").innerHTML = headerData;

    // Récupérer et insérer le contenu du scroll-up
    const scrollRes = await fetch("../scroll-up.html");
    const scrollData = await scrollRes.text();
    document.getElementById("scroll-up").innerHTML = scrollData;

    // Charger le script principal après l'insertion du contenu
    const script = document.createElement("script");
    script.src = "/PORTFOLIO/js/index.js";
    document.body.appendChild(script);
  } catch (error) {
    console.error("Erreur lors du chargement du contenu:", error);
  }
};

// Appel de la fonction de chargement
loadContent();
