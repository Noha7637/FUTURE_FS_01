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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const statusEl = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (statusEl) statusEl.textContent = "Sending...";

    emailjs
      .sendForm(
        "service_nqk4s08",
        "template_9cm4i4a",
        e.target,
        "Ft6-A7OAuZf2BgA-k"
      ) // e.g. ('service_123abc','template_456xyz')
      .then(function () {
        if (statusEl) statusEl.textContent = "Message sent successfully!";
        form.reset();
      })
      .catch(function (error) {
        if (statusEl)
          statusEl.textContent = "Failed to send. Please try again.";
        console.error("EmailJS error:", error);
      });
  });
});
