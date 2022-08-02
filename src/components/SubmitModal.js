import { check } from "../../helpers/icons.js";

export const SubmitModal = () => {

    const modal = document.createElement('DIV')
    modal.innerHTML=
    `
        <div class="overlay">
            <div class="submit-modal">
                ${check}
                <p>Your message has been sent!</p>
                <p>I will get back to you shortly.</p>
                <button class="primary-btn">OK</button>     
            </div>
        </div>
    `

    return modal;
}