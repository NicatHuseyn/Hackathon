

const formElem = document.querySelector("#register_form");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const allErrorMessages = document.querySelector(".error_message");



formElem.addEventListener("submit", (e)=>{
    e.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    

    // Validation
    validLoginForm(usernameInput,passwordInput);
    // Reset Function
    resetInputs(usernameInput,passwordInput);
    
});




// Validation Function
const validLoginForm = (username,password)=>{
    
    usernameError.style.display = "block";
    passwordError.style.display = "block";

    if (username.value ==="" && password.value === "") {
        usernameError.textContent = "Please, Enter Your Username"
        passwordError.textContent = "Please, Enter Your Password"
    }else{
        usernameError.style.display = "none";
        passwordError.style.display = "none";
    }
}


// Reset Function
const resetInputs = (username,password)=>{
    username.value = ""
    password.value = ""
}
