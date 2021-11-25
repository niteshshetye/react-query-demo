import axios from "axios";

// base url
export const userRequest = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
});