export const createSpinner = (insertPlace) => {
  const spinner = document.createElement("div");
  spinner.className = "spinner";
  spinner.style.display = "flex";
  spinner.style.justifyContent = "center";
  spinner.style.marginLeft = "-190px";
  spinner.innerHTML = `<img src="images/spinner.svg" alt="spinner" />`;
  insertPlace.append(spinner);
  return spinner;
};

export const removeSpinner = (spinner) => {
  if (spinner) {
    spinner.remove();
  }
};
