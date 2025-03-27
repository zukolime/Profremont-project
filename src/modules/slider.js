import Splide from "@splidejs/splide";

export const slider = () => {
  const arrows = document.querySelector(".benefits-arrows");

  const splide = new Splide(".benefits-inner--splide", {
    pagination: false,
    arrows: false,
    type: "loop",
    perPage: 3,
    gap: 10,
    breakpoints: {
      576: {
        perPage: 1,
        gap: 0,
      },
    },
  }).mount();

  arrows.addEventListener("click", (e) => {
    if (e.target.closest(".benefits__arrow--left")) {
      splide.go("-1");
    }
    if (e.target.closest(".benefits__arrow--right")) {
      splide.go("+1");
    }
  });
};
