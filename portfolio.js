const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("active");

    // swap icon (Font Awesome 7: use fa-xmark)
    menuIcon.classList.toggle("fa-xmark", isOpen);
    menuIcon.classList.toggle("fa-bars", !isOpen);

    // accessibility
    menuIcon.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on link click
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
      menuIcon.setAttribute("aria-expanded", "false");
    });
  });

  // Close on scroll
  window.addEventListener("scroll", () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
      menuIcon.setAttribute("aria-expanded", "false");
    }
  });
}
