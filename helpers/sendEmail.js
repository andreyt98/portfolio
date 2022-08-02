import { SubmitModal } from "../src/components/SubmitModal.js";
import { resetForm } from "./resetForm.js";

export const sendEmail = (evt) => {
  evt.preventDefault();

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  let nameRegex = /[a-zA-Z0-9]/;
  let emailRegex = /^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-.]+)$/;
  let messageRegex = /[a-zA-Z0-9]/;

  if (nameRegex.test(name.value) && messageRegex.test(message.value) && emailRegex.test(email.value)) {
    document.querySelector("#app").append(SubmitModal());
    const serviceID = "default_service";
    const templateID = "template_v4nh5tg";
    emailjs.sendForm(serviceID, templateID, document.querySelector("#form"));

    resetForm(name,message,email);
    document.querySelector("#form-error").style.display = "none";
    document.querySelector(".overlay").style.zIndex = "3";
    document.body.style.overflow = "hidden";
  } else {
    document.querySelector("#form-error").style.display = "block";
    if (!nameRegex.test(name.value)) {
      name.style.border = "1px solid red";
    } else {
      name.style.border = "1px solid #d2bdfc";
    }

    if (!messageRegex.test(message.value)) {
      message.style.border = "1px solid red";
    } else {
      message.style.border = "1px solid #d2bdfc";
    }

    if (!emailRegex.test(email.value)) {
      email.style.border = "1px solid red";
    } else {
      email.style.border = "1px solid #d2bdfc";
    }
  }
};