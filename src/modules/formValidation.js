export const formValidation = (selectorForm) => {
  const form = document.querySelector(selectorForm);

  const nameRegExp = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
  const phoneRegExp = /^\+?\d{1,16}$/;

  const isValid = (regExp, input) => regExp.test(input.value.trim());

  const setFieldState = (input, isValid) => {
    input.style.border = isValid ? "2px solid green" : "2px solid red";
    input.classList.toggle("success", isValid);
  };

  form.addEventListener(
    "blur",
    (e) => {
      const target = e.target;
      if (target.matches("input[placeholder='ваше имя']")) {
        setFieldState(target, isValid(nameRegExp, target));
      }
      if (target.matches("input[placeholder='ваш телефон']")) {
        setFieldState(target, isValid(phoneRegExp, target));
      }
    },
    true
  );
};
