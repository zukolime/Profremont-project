import { animate } from "./helpers";
import { scrollIntoView } from "seamless-scroll-polyfill";

export const smoothScroll = () => {
  const arrow = document.querySelector(".smooth-scroll");
  const btnScroll = document.querySelector(".utp-button");
  const targetBlock = document.getElementById("order_1");

  const animateSmoothScroll = () => {
    animate({
      duration: 1500,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
      },
      draw(progress) {
        const startPosition = document.documentElement.scrollTop;
        document.documentElement.scrollTop =
          startPosition - progress * startPosition;
      },
    });
  };

  arrow.addEventListener("click", animateSmoothScroll);

  btnScroll.addEventListener("click", (e) => {
    e.preventDefault();
    scrollIntoView(targetBlock, {
      behavior: "smooth",
      block: "start",
    });
  });
};
