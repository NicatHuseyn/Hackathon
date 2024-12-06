import { User } from "../classes/User.js"
import { registerUser } from "./registerUser.js";


export const createUser = (fullName,username,email,gender,password)=>{
    const user = new User(fullName,username,email,gender,password);
    registerUser(user);
}