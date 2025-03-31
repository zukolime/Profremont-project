export const showScrollBtn = () => {
  const arrow = document.querySelector(".smooth-scroll");

  const toggleArrow = () => {
    const isShown = document.documentElement.scrollTop > 700;
    arrow.style.display = isShown ? "" : "none";
    arrow.style.cursor = isShown ? "pointer" : "";
  };

  arrow.style.display = "none";
  document.addEventListener("scroll", toggleArrow);
};
