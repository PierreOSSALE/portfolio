//modal.js
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
        }, 200);
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
        }, 400);
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
const observer = new MutationObserver(() => {
  const modalElements = document.querySelectorAll(".portfolio-card-modal");
  if (modalElements.length > 0) {
    initModal(
      ".portfolio-card-modal",
      ".portfolio-content .portfolio-see-more i",
      ".portfolio-modal-backdrop",
      ".portfolio-modal",
      ".modal-close-btn"
    );
    observer.disconnect(); // Déconnecte l'observateur une fois que les éléments sont trouvés
  }
});

observer.observe(document.body, { childList: true, subtree: true });
