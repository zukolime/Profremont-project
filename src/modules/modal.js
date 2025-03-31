import { animate } from "./helpers";

export const modal = (modalClass, overlayClass, openBtn, closeBtn) => {
  const overlay = document.querySelector(overlayClass);
  const modal = document.querySelector(modalClass);

  const isMobile = window.innerWidth <= 768;

  let isModalOpen = false;

  const showModal = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    animate({
      duration: 150,
      timing(timeFraction) {
        return 1 - (1 - timeFraction) * (1 - timeFraction);
      },
      draw(progress) {
        modal.style.top = `${progress * 50}%`;
        overlay.style.display = "block";
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        overlay.style.opacity = progress;
        isModalOpen = true;
      },
    });
  };

  const closeModal = () => {
    animate({
      duration: 250,
      timing(timeFraction) {
        return 1 - (1 - timeFraction) * (1 - timeFraction);
      },
      draw(progress) {
        overlay.style.opacity = 1 - progress;
        modal.style.top = `${progress * -50}%`;
        if (progress === 1) {
          overlay.style.display = "";
          modal.style.display = "";
          modal.style.top = "";
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
          isModalOpen = false;
        }
      },
    });
  };

  const showMobileModal = () => {
    overlay.style.display = "block";
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    isModalOpen = true;
  };

  const closeMobileModal = () => {
    overlay.style.display = "";
    modal.style.display = "";
    document.body.style.overflow = "";
    modal.style.top = "";
    isModalOpen = false;
  };

  const toggleModal = (e) => {
    e.preventDefault();
    if (e.target.closest(openBtn)) isMobile ? showMobileModal() : showModal();
    else if (
      isModalOpen &&
      (e.target === overlay || e.target.closest(closeBtn))
    ) {
      isMobile ? closeMobileModal() : closeModal();
    }
  };

  document.addEventListener("click", toggleModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isModalOpen) {
      closeModal();
    }
  });
};
