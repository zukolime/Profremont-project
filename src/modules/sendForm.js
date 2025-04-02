import { animateLoader } from "./animateLoader";
import { statusBlockStyle } from "./statusBlockStyle";
import { validate } from "./helpers";
import { hideMessage } from "./helpers";

export const sendForm = ({ formSelector, additionalElem = [] }) => {
  const form = document.querySelector(formSelector);
  const statusBlock = document.createElement("p");

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

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    const animationState = { isAnimating: true };

    statusBlockStyle(form, statusBlock, "", "");
    animateLoader(statusBlock, animationState);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    additionalElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (element) {
        if (elem.type === "block") {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === "input") {
          formBody[elem.id] = element.value;
        }
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlockStyle(
            form,
            statusBlock,
            "Спасибо! Наш менеджер с вами свяжется.",
            "green"
          );
          formElements.forEach((input) => {
            input.value = "";
            input.style.border = "";
            input.classList.remove("success");
          });
          animationState.isAnimating = false;
          hideMessage(statusBlock, 3000);
        })
        .catch((error) => {
          statusBlockStyle(
            form,
            statusBlock,
            "Ошибка при отправке данных",
            "red"
          );
          console.log(error.message);
          animationState.isAnimating = false;
        });
    } else {
      statusBlockStyle(form, statusBlock, "Данные не валидны", "red");
      formElements.forEach((input) => {
        input.classList.contains("success")
          ? (input.style.border = "2px solid green")
          : (input.style.border = "2px solid red");
      });

      animationState.isAnimating = false;
      formElements.forEach((input) => {
        input.addEventListener("input", () => {
          if (validate(formElements)) {
            hideMessage(statusBlock, "");
          }
        });
      });
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
