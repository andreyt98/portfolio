export const resetForm = (name, message,email) =>{

    name.value = "";
    message.value = "";
    email.value = "";
    name.style.border = "1px solid #d2bdfc";
    message.style.border = "1px solid #d2bdfc";
    email.style.border = "1px solid #d2bdfc";
    document.querySelector("#form-error").style.display = "none";
}