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
