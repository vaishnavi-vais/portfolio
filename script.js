// Mobile Navbar Toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
  toggle.setAttribute("aria-expanded", !expanded);
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Auto Update Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();
