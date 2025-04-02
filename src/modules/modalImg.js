export const modalImg = () => {
  const certificates = document.querySelectorAll(".sertificate-document");

  certificates.forEach((link) => {
    link.classList.add("document-inner");

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const div = document.createElement("div");
      const imageUrl = link.getAttribute("href");

      div.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      background-image: url(${imageUrl});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      `;

      document.body.append(div);
      document.documentElement.style.overflow = "hidden";

      div.addEventListener("click", () => {
        div.remove();
        document.documentElement.style.overflow = "";
      });
    });
  });
};
