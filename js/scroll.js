// Select the scroll-up button element
const scrollUpButton = document.getElementById("scrollUp");

if (scrollUpButton) {
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
} else {
  console.error('Element with ID "scrollUp" not found.');
}
