import { modal } from "./modules/modal";
import { slider } from "./modules/slider";
import { timer } from "./modules/timer";
import { formValidation } from "./modules/formValidation";
import { sendForm } from "./modules/sendForm";
import { modalImg } from "./modules/modalImg";

modal(".header-modal", ".open-btn-call", ".header-modal__close");
modal(".services-modal", ".service-button", ".services-modal__close");

slider(
  ".benefits-inner--splide",
  ".benefits-arrows",
  ".benefits__arrow--left",
  ".benefits__arrow--right",
  3
);

slider(
  ".services-block--splide",
  ".services-arrows",
  ".services__arrow--left",
  ".services__arrow--right",
  2
);

timer("30 April 2025");

formValidation("[name=action-form]");
formValidation("[name=action-form2]");

sendForm("[name=action-form]");
sendForm("[name=action-form2]");

modalImg();
