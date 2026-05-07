import { animateLoader } from './animateLoader';
import { hideMessage, validate } from './helpers';
import { statusBlockStyle } from './statusBlockStyle';

export const sendForm = ({ formSelector, additionalElem = [] }) => {
  const statusBlock = document.createElement('p');

  const sendData = async (data) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  };

  const submitForm = (currentForm) => {
    const formElements = currentForm.querySelectorAll('input');
    const formData = new FormData(currentForm);
    const formBody = {};

    const animationState = { isAnimating: true };

    statusBlockStyle(currentForm, statusBlock, '', '');
    animateLoader(statusBlock, animationState);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    additionalElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (element) {
        if (elem.type === 'block') {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === 'input') {
          formBody[elem.id] = element.value;
        }
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlockStyle(currentForm, statusBlock, 'Спасибо! Наш менеджер с вами свяжется.', 'green');
          formElements.forEach((input) => {
            input.value = '';
            input.style.border = '';
            input.classList.remove('success');
          });
          animationState.isAnimating = false;
          hideMessage(statusBlock);
        })
        .catch((error) => {
          statusBlockStyle(currentForm, statusBlock, 'Ошибка при отправке данных', 'red');
          console.log(error.message);
          animationState.isAnimating = false;
        });
    } else {
      statusBlockStyle(currentForm, statusBlock, 'Данные не валидны', 'red');
      formElements.forEach((input) => {
        if (input.classList.contains('success')) {
          input.style.border = '2px solid green';
        } else input.style.border = '2px solid red';
      });
      animationState.isAnimating = false;
    }
  };

  document.addEventListener('submit', (e) => {
    const target = e.target;
    if (target.matches(formSelector)) {
      e.preventDefault();
      submitForm(target);
    }
  });
};
