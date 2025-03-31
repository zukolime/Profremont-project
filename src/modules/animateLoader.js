import { animate } from "./helpers";

export const animateLoader = (insertPlace, state) => {
  const circle = document.createElement("div");

  circle.style.cssText = `
      width: 40px;
      height: 40px;
      margin: auto;
      background-image: linear-gradient(to bottom, #ffb336, #ff8a17);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
    `;

  insertPlace.innerHTML = "";
  insertPlace.append(circle);

  animate({
    duration: 2000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
      if (progress < 0.5) {
        circle.style.transform = `scale(${progress * 2})`;
      } else {
        circle.style.transform = `scale(${1 - (progress - 0.5) * 2})`;
      }

      if (progress === 1 && state.isAnimating) {
        animateLoader(insertPlace, state);
      }
    },
  });
};
