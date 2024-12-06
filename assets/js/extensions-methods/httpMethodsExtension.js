import { BASE_URL } from "../endpoints/url.js"
import axios from "axios";
import { handleError } from "../error-handler/errorHandler.js";


export const axiosRequest = async (method, endpoint, payload = null)=>{

    const config ={
        method,
        url:`${BASE_URL}/${endpoint}`,
        data:payload,
        headers:{
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios(config);
        return response
    } catch (error) {
        return handleError(error);
    }

}