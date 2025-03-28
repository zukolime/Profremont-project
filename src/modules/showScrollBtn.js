export const showScrollBtn = () => {
  const arrow = document.querySelector(".smooth-scroll");

  const toggleArrow = () => {
    const isShow = document.documentElement.scrollTop > 700;
    arrow.style.display = isShow ? "" : "none";
    arrow.style.cursor = isShow ? "pointer" : "";
  };

  arrow.style.display = "none";
  document.addEventListener("scroll", toggleArrow);
};
