// Function to toggle the nav-menu
function toggleNavMenu() {
  var navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("muncul");
}

// Function to close nav-menu when clicking outside
function closeNavMenu(event) {
  var navMenu = document.getElementById("nav-menu");
  var hamburger = document.getElementById("hamburger");

  if (
    event.target !== navMenu &&
    event.target !== hamburger &&
    !navMenu.contains(event.target)
  ) {
    navMenu.classList.remove("muncul");
  }
}

// Add click event listeners
document
  .getElementById("navbar-extra")
  .addEventListener("click", toggleNavMenu);
document.addEventListener("click", closeNavMenu);
