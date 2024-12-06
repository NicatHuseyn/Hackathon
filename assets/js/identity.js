// import { BASE_URL, endpoints } from "./endpoints/url";

// import { User } from "../js/classes/User.js";
import { createUser } from "./services/userService.js";



const formElem = document.getElementById("identity_form");
formElem.addEventListener("submit",(e)=>{
    e.preventDefault();


    const fullNameElem = document.getElementById("fullname").value;
    const usernameElem = document.getElementById("username").value;
    const emailElem = document.getElementById("email").value;
    const genderElem = document.getElementById("gender").value;
    const passwordElem = document.getElementById("password").value;
    
    // createUser(fullNameElem,usernameElem,emailElem,genderElem,passwordElem);

    // axios.post(`http://localhost:5001/users`, new User(fullNameElem,usernameElem,emailElem,genderElem,passwordElem),{
    //     headers:{ 'Content-Type': 'application/json'}
    // }).then(res=>{
    //     console.log(res.data);
        
    // })

    createUser(fullNameElem,usernameElem,emailElem,genderElem,passwordElem);
    
});
