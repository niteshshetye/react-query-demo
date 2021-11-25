import { useMutation } from "react-query";

export const useUpdatePost = (updatePost) => {
    return useMutation(updatePost);
}