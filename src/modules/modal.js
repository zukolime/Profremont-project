export const modal = (modalClass, overlayClass, openBtn, closeBtn) => {
  const overlay = document.querySelector(overlayClass);
  const modal = document.querySelector(modalClass);

  let isModalOpen = false;

  const showModal = () => {
    overlay.style.display = "block";
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    isModalOpen = true;
  };
  const closeModal = () => {
    overlay.style.display = "";
    modal.style.display = "";
    document.body.style.overflow = "";
    isModalOpen = false;
  };

  const toggleModal = (e) => {
    if (e.target.closest(openBtn)) showModal();
    else if (
      isModalOpen &&
      (e.target === overlay || e.target.closest(closeBtn))
    ) {
      closeModal();
    }
  };

  document.addEventListener("click", toggleModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isModalOpen) {
      closeModal();
    }
  });
};
