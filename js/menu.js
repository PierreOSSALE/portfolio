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
