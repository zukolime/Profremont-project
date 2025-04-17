export const showMobileMenu = () => {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarCollapse = document.getElementById("navbar-collapse");

  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarCollapse.classList.toggle("active");

    document.body.style.overflow = navbarCollapse.classList.contains("active")
      ? "hidden"
      : "";
  });
};
