import { animate } from "./helpers";

export const smoothScroll = () => {
  const arrow = document.querySelector(".smooth-scroll");

  const animateSmoothScroll = () => {
    animate({
      duration: 1500,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
      },
      draw(progress) {
        let startPosition = document.documentElement.scrollTop;
        document.documentElement.scrollTop =
          startPosition - progress * startPosition;
      },
    });
  };

  arrow.addEventListener("click", animateSmoothScroll);
};
