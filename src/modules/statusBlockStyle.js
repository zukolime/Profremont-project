export const statusBlockStyle = (insertPlace, block, message, color) => {
  insertPlace.insertAdjacentElement("beforeend", block);
  block.style.fontWeight = "bold";
  block.style.textAlign = "center";
  block.style.marginTop = "10px";
  block.style.marginBottom = "-25px";

  block.textContent = message;
  block.style.color = color;
};
