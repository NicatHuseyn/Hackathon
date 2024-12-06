// import axios from "axios"
import { BASE_URL, endpoints } from "../endpoints/url.js";
import { handleError } from "../error-handler/errorHandler.js";


export const registerUser = async (userData)=>{
    try {
        const response = await axios.post(`${BASE_URL}/${endpoints.users}`, userData,{
            headers:{ 'Content-Type': 'application/json'}
        });

        return {success:true, data:response.data};
    } catch (error) {
        handleError(error)
    }
}