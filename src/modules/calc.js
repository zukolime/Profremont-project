import { removeNonDigits } from "./helpers";

export const calc = (price = 10000) => {
  const calcBlock = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const materialType = document.getElementById("calc-type-material");
  const calcSquare = document.getElementById("calc-input");
  const total = document.getElementById("calc-total");

  if (!calcBlock) {
    return;
  }

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const materialTypeValue =
      +materialType.options[materialType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    if (!calcTypeValue || !calcSquareValue) {
      total.value = "";
      return;
    }

    if (materialTypeValue) {
      total.value = price * calcTypeValue * calcSquareValue * materialTypeValue;
    } else {
      total.value = price * calcTypeValue * calcSquareValue;
    }
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === materialType
    ) {
      removeNonDigits(calcSquare);
      countCalc();
    }
  });
};
