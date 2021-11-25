import { useMutation } from "react-query";

export const useCreatePost = (create) => {
    return useMutation(create)
}