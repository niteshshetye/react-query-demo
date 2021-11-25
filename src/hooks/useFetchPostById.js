import { useQuery, useQueryClient } from "react-query";
import { getSinglePost } from "../services/api";


export const useFetchPostById = (id) => {
    const queryClient = useQueryClient()
    return useQuery(['posts', id], getSinglePost, {
        initialData: () => {
            const post = queryClient.getQueriesData('posts')[0][1]?.data?.find(post => post.id === parseInt(id))
            if(post){
                return {
                    data: post
                }
            }else{
                return {
                    data:undefined
                }
            }
        }
    })
}