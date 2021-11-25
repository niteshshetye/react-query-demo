import { useMutation } from "react-query";

export const useDeletePost = (deletePost) => {
    return useMutation(deletePost)
}