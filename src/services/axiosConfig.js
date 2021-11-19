import axios from "axios";

// base url
export const userRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});