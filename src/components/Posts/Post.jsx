import React from 'react'

import {useParams} from 'react-router-dom';

import {useQuery, queryCache} from 'react-query';
import { getSinglePost } from '../../services/api'

const Post = () => {
    const {id} = useParams();

    const query = useQuery(['posts', id], () => getSinglePost(id), {
      initialData: () => {
        console.log(queryCache);
        // queryCache.getQueryData('posts')?.filter(d => d.id === id)
      }
    });


    return (
      <div className='mt-4'>
        {
          query.isLoading? (
            <div className='d-flex justify-content-center align-self-center'>
              <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ): (
            <div className='container mt-4'>
              <h1 className="display-5">{query.data.data.title}</h1>
              <p className="lead">{query.data.data.body}</p>
            </div>
          )
        }
      </div>
    )
}

export default Post
