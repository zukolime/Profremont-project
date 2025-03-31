import Splide from "@splidejs/splide";

export const slider = (
  splideClass,
  arrowsBlock,
  leftArrow,
  rightArrow,
  slidesNumbers,
  fixedWidth
) => {
  const arrows = document.querySelector(arrowsBlock);

  const splide = new Splide(splideClass, {
    pagination: false,
    arrows: false,
    type: "loop",
    perPage: slidesNumbers,
    gap: 10,
    breakpoints: {
      1200: {
        fixedWidth: fixedWidth,
        gap: 0,
      },

      576: {
        perPage: 1,
        fixedWidth: "",
        gap: 0,
      },
    },
  }).mount();

  arrows.addEventListener("click", (e) => {
    if (e.target.closest(leftArrow)) {
      splide.go("-1");
    }
    if (e.target.closest(rightArrow)) {
      splide.go("+1");
    }
  });
};
