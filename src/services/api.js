import { userRequest } from "./axiosConfig";

export const get = () => {
    return userRequest('/posts').then(res => res)
}

export const getSinglePost = (id) => {
    return userRequest(`/posts/${id}`).then(res => res)
}