import { animate } from './helpers';

export const modalImg = () => {
  const certificates = document.querySelectorAll('.sertificate-document');

  certificates.forEach((link) => {
    link.classList.add('document-inner');

    link.addEventListener('click', (e) => {
      e.preventDefault();

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const imageUrl = link.getAttribute('href');

      const modalImg = document.createElement('div');
      const img = document.createElement('img');

      img.src = imageUrl;
      img.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
      `;

      modalImg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
        opacity: 0;
      `;

      modalImg.append(img);
      document.body.append(modalImg);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      animate({
        duration: 300,
        timing(timeFraction) {
          return 1 - (1 - timeFraction) * (1 - timeFraction);
        },
        draw(progress) {
          modalImg.style.backgroundColor = `rgba(0, 0, 0, ${0.9 * progress})`;
          modalImg.style.opacity = progress;
          img.style.transform = `scale(${1 * progress})`;
        },
      });

      modalImg.addEventListener('click', () => {
        animate({
          duration: 500,
          timing(timeFraction) {
            return 1 - (1 - timeFraction) * (1 - timeFraction);
          },
          draw(progress) {
            const reverseProgress = 1 - progress;
            modalImg.style.backgroundColor = `rgba(0, 0, 0, ${0.9 * reverseProgress})`;
            modalImg.style.opacity = reverseProgress;
            img.style.transform = `scale(${1 * reverseProgress})`;
          },
        });

        setTimeout(() => {
          modalImg.remove();
          document.documentElement.style.overflow = '';
          document.body.style.paddingRight = '';
        }, 300);
      });
    });
  });
};
