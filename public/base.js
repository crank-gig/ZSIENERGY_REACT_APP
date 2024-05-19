const passwordInput = document.querySelector(".password-input")

const passwordStatusToggle=document.querySelector(".password-status-toggle")
const hidePassword=document.querySelector(".hide-password")
const showPassword=document.querySelector(".show-password")

showPassword.style.display="none";
passwordStatusToggle.onclick=()=>{
    // Toggle back and forth

    if (showPassword.style.display === "none") {
        hidePassword.style.display="none";
        showPassword.style.display="block";

        passwordInput.setAttribute("type","text")                
    } else {
        showPassword.style.display="none";
        hidePassword.style.display="block";

        passwordInput.setAttribute("type","password")                
    }
}
