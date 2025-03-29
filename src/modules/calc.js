export const calc = (price = 10000) => {
  const calcBlock = document.getElementById("calc"); // блок калькулятора
  const calcType = document.getElementById("calc-type"); // балкон/лоджия - Обязтально
  const materialType = document.getElementById("calc-type-material"); // тип остекленения
  const calcSquare = document.getElementById("calc-input"); // площадь - Обязтально
  const total = document.getElementById("calc-total"); // итого

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const materialTypeValue =
      +materialType.options[materialType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue;

    if (calcTypeValue && calcSquareValue) {
      if (materialTypeValue) {
        totalValue =
          price * calcTypeValue * calcSquareValue * materialTypeValue;
      } else if (!materialTypeValue) {
        totalValue = price * calcTypeValue * calcSquareValue;
      }
      total.value = totalValue;
    } else {
      total.value = "";
    }

    // animateResult(currentTotal, totalValue);
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === materialType
    ) {
      countCalc();
    }
  });
};
