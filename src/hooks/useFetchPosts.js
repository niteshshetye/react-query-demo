import { useQuery } from "react-query";
import {get} from '../services/api'

export const useFetchPosts = (pageNumber, pageSize) => {
    return useQuery(['posts', pageNumber], ()=> get(pageNumber, pageSize), {
        // refetchOnWindowFocus: false,
        // refetchOnMount: false,
        keepPreviousData: true
        // select: (data) => {
        //     const postTitle = data.data.map(post => post.title);
        //     return postTitle
        // }
    });
}