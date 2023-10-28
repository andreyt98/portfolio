export const resetForm = (name, message,email) =>{

    name.value = "";
    message.value = "";
    email.value = "";
    name.style.border = "1px solid #8b8b8bd0";
    message.style.border = "1px solid #8b8b8bd0";
    email.style.border = "1px solid #8b8b8bd0";
    document.querySelector("#form-error").style.display = "none";
}