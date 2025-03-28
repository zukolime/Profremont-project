import { animate } from "./helpers";
import { validate } from "./helpers";
import { hideMessage } from "./helpers";

export const sendForm = (formSelector) => {
  const form = document.querySelector(formSelector);

  const statusBlock = document.createElement("p");
  const errorText = "Ошибка при отправке данных";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";
  const novalidatedText = "Данные не валидны";

  let isAnimating = true;

  const sendData = async (data) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  };

  const statusBlockStyle = () => {
    form.insertAdjacentElement("beforeend", statusBlock);
    statusBlock.style.fontWeight = "bold";
    statusBlock.style.textAlign = "center";
    statusBlock.style.marginTop = "10px";
    statusBlock.style.marginBottom = "-25px";
  };

  const animateLoader = () => {
    const circle = document.createElement("div");

    circle.style.cssText = `
      width: 40px;
      height: 40px;
      margin: auto;
      background-image: linear-gradient(to bottom, #ffb336, #ff8a17);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
    `;

    statusBlock.innerHTML = "";
    statusBlock.append(circle);

    animate({
      duration: 2000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        if (progress < 0.5) {
          circle.style.transform = `scale(${progress * 2})`;
        } else {
          circle.style.transform = `scale(${1 - (progress - 0.5) * 2})`;
        }

        if (progress === 1 && isAnimating) {
          animateLoader();
        }
      },
    });
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    animateLoader();
    statusBlockStyle();

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = successText;
          statusBlock.style.color = "green";
          formElements.forEach((input) => {
            input.value = "";
            input.style.border = "";
            input.classList.remove("success");
          });
          isAnimating = false;
          hideMessage(statusBlock);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          statusBlock.style.color = "red";
          console.log(error.message);
          isAnimating = false;
        });
    } else {
      statusBlock.textContent = novalidatedText;
      statusBlock.style.color = "red";
      formElements.forEach((input) => {
        input.style.border = "2px solid red";
      });
      isAnimating = false;
    }
  };

  try {
    if (!form) {
      throw new Error("Форма сбежала :(");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
