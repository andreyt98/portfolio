import { resetForm } from "../../helpers/resetForm.js";
import { sendEmail } from "../../helpers/sendEmail.js";
import { socials } from "../../helpers/icons.js";
const { linkedin, github } = socials;

export const Contact = (clase, nombre) => {
  const contact = document.createElement("SECTION");
  contact.classList.add(`${clase}`);
  contact.innerHTML = `
    
        <h1 class=big>${nombre}</h1>
        <h2>${nombre}</h2>   
        <div class="socials">
          <a href="https://www.linkedin.com/in/andrey-torrente" target="_blank">${linkedin}</a>
          <a href="https://www.github.com/andreyt98" target="_blank">${github}</a>
        </div>
        <form class="contact__form" id="form">
        
            <label for="name">Name
                <input type="text" id="name" name="name">
            </label>

            <label for="email">Email
                <input type="email" id="email" name="email">
            </label>
            
            <label for="message">Message
                <textarea id="message" name="message"></textarea>
            </label>

            <p id="form-error"><i class="bi bi-exclamation-triangle"></i> Please fill the form correctly.</p>
            <button type="submit" class="primary-btn" id="submitEmail">Send</button>

        </form>
    `;
  return contact;
};

document.addEventListener("submit", (evt) => {
  if (evt.target.matches("#form")) {
    sendEmail(evt);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".submit-modal button") || e.target.matches(".overlay")) {
    document.body.style.overflow = "auto";

    if(document.querySelector(".overlay")){
      document.querySelector(".overlay").remove();
    }
  }

  if (
    !e.target.matches("#form") &&
    !e.target.matches("#form input") &&
    !e.target.matches("#form textarea")&&
    !e.target.matches(".contact")&&
    !e.target.matches(".contact > *")&&
    !e.target.matches("#form > *")
  ) {
    const name = document.querySelector("#name");
    const message = document.querySelector("#message");
    const email = document.querySelector("#email");
    resetForm(name, message, email);
  }
});
