export const modal = (modalClass, openBtn, closeBtn) => {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(modalClass);

  const showModal = () => {
    overlay.style.display = "block";
    modal.style.display = "block";
  };
  const closeModal = () => {
    overlay.style.display = "";
    modal.style.display = "";
  };

  const toggleModal = (e) => {
    if (e.target.closest(openBtn)) showModal();
    else if (!e.target.closest(modalClass) || e.target.closest(closeBtn)) {
      closeModal();
    }
  };

  document.addEventListener("click", toggleModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
};
