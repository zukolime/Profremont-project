export const formValidation = (formSelector) => {
  const form = document.querySelector(formSelector);

  const nameRegExp = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
  const phoneRegExp = /^\+?\d{1,16}$/;

  const isValid = (regExp, input) => regExp.test(input.value.trim());

  const setFieldState = (input, isValid) => {
    input.style.border = isValid ? '2px solid green' : '2px solid red';
    input.classList.toggle('success', isValid);
  };

  document.addEventListener('input', (e) => {
    const target = e.target;

    const parentForm = target.closest(formSelector);

    if (parentForm) {
      if (target.matches('[name=username]')) {
        setFieldState(target, isValid(nameRegExp, target));
      }
      if (target.matches('[name=phone]')) {
        setFieldState(target, isValid(phoneRegExp, target));
      }
    }
  });
};
