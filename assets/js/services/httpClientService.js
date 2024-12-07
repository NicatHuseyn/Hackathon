import axios from "axios";
import { axiosRequest } from "../extensions-methods/httpMethodsExtension";
import { BASE_URL } from "../endpoints/url.js";
// CRUD islerimizi ucundur.

// Get All Data
export const getAllData = (endpoint)=>axiosRequest('get',endpoint);

// Get By Id
export const getDataById = (endpoint, id)=> axiosRequest('get',`${endpoint}/${id}`);

// Create Data
export const createData = (endpoint,payload)=>axiosRequest('post',endpoint,payload);

// Update Data
export const updateData = (endpoint, id,payload) => axiosRequest('put', `${endpoint}/${id}`, payload);

export const updateDataByPatch = (endpoint, payload) => axiosRequest('patch', `${endpoint}/${id}`, payload);

// Delete Data
export const deleteData = (endpoint, id) => axiosRequest('delete', `${endpoint}/${id}`);