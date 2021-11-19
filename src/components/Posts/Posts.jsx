import React from 'react';

import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';
import { get } from '../../services/api';


const Posts = () => {
    const {isLoading, isError, data} = useQuery('posts', get);

    return(
        <div className='container m-4'>
            <div className='row'>
                {
                    isLoading? (
                        <div className='d-flex justify-content-center align-self-center'>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) :
                    isError? <h2>Something Went Wrong</h2> : 
                    data.data.slice(0,10).map(post => (
                        <div className='col-auto mb-3' key={post.id}>
                            <div className="card text-white bg-dark mb-3"  style={{maxWidth: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                </div>
                                <div className='card-header'>
                                    <button className="btn btn-primary"><Link to={`/posts/${post.id}`}>View Post</Link></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts
