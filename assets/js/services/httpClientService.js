import { axiosRequest } from "../extensions-methods/httpMethodsExtension";


// Get All Data
export const getAllData = (endpoint)=>axiosRequest('get',endpoint);

// Get By Id
export const getDataById = (endpoint, id)=> axiosRequest('get',`${endpoint}/${id}`);

// Create Data
export const createData = (endpoint,payload)=>axiosRequest('post',endpoint,payload);

// Update Data
export const updateData = (endpoint, payload) => axiosRequest('put', endpoint, payload);

// Delete Data
export const deleteData = (endpoint, id) => axiosRequest('delete', `${endpoint}/${id}`);