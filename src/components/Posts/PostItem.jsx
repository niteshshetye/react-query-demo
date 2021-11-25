import React from 'react'
// router-stuff
import { Link } from 'react-router-dom';

// query-stuff
import { useQueryClient } from 'react-query';
import {  deletePost } from '../../services/api';

// custom hook
import {useDeletePost} from '../../hooks/useDeletePost'

// loader-stuff
import Loader from "react-loader-spinner";
const PostItem = ({post}) => {
    const queryClient = useQueryClient()

    const {mutateAsync, isLoading} = useDeletePost(deletePost);

    const handleRemove = async (id) => {
        await mutateAsync(id);
        await queryClient.invalidateQueries('posts');
    }

    return (
        <div className='col-auto mb-3' style={{height: "100%"}}>
            <div className="card text-white bg-dark mb-3"  style={{maxWidth: "18rem", height: "100%", overflow: 'auto'}}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.desc}</p>
                </div>
                <div className='card-header d-flex justify-content-center'>
                    <button className="btn btn-primary m-1"><Link to={`/posts/${post.id}`}>View Post</Link></button>
                    <button className="btn btn-danger m-1" onClick={() => handleRemove(post.id)}>
                        {
                            isLoading? <Loader type='ThreeDots' color = '#DADDFC' height={25} width={40} />: "Remove"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostItem
