import { userRequest } from "./axiosConfig";


export const allData = async() => {
    const data = await userRequest('/posts')
    return data
}

export const get = (page, limit) => {
    return userRequest(`/posts?_limit=${limit}&_page=${page}`).then(res => res)
}

export const getSinglePost = ({queryKey}) => {
    const id = queryKey[1]
    return userRequest(`/posts/${id}`).then(res => res)
}

export const updatePost = ({id, ...data}) => {
    return userRequest.patch(`/posts/${id}`, data).then(res => res)
}

export const createPost = (data) => {
    return userRequest.post(`/posts`, data).then(res => res)
}

export const deletePost = (id) => {
    return userRequest.delete(`/posts/${id}`).then(res => {
        return res
    })
}