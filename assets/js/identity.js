
import { createUser } from "./services/userService.js";
// import {  } from "";

const formElem = document.getElementById("identity_form");


formElem.addEventListener("submit",(e)=>{
    
    e.preventDefault();


    const fullNameElem = document.getElementById("fullname").value;
    const usernameElem = document.getElementById("username").value;
    const emailElem = document.getElementById("email").value;
    const genderElem = document.getElementById("gender").value;

    const passwordElem = document.getElementById("password").value;
    const passwordConfirmElem = document.getElementById("password_confirm").value;

    if (passwordElem !== passwordConfirmElem) {
        alert("kodu duzgun yazin, xahis")
        return;
    }else{
        createUser(fullNameElem,usernameElem,emailElem,genderElem,passwordElem);
    }
    
});
