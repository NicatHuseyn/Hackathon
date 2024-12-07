import { User } from "../classes/User.js"
import { registerUser } from "./registerUser.js";


export const createUser = async (fullName,username,email,gender,password)=>{
    const user = new User(fullName,username,email,gender);
    await user.initialize(password);
    registerUser(user);
}