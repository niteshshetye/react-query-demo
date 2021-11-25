import React from 'react'

// router-stuff
import {useParams, useHistory} from 'react-router-dom';

// loader-stuff
import Loader from 'react-loader-spinner';
import { useFetchPostById } from '../../hooks/useFetchPostById';

const Post = () => {
    const history = useHistory();
    const {id} = useParams();

    const {isLoading, isFetching, data} = useFetchPostById(id)
    const handleUpdate = () => {
      history.push({
        pathname: '/admin',
        state: {post: data.data}
      });
    }
    if(isLoading || isFetching){
      return (
        <div className='mt-4'>
          <div className='d-flex justify-content-center align-self-center'>
              <Loader 
                type='ThreeDots'
                color = '#DADDFC'
              />
            </div>
        </div>
      )
    }
  
    return (
      <div className='mt-4'>
        <div className='container mt-4'>
          <h1 className="display-5">{data?.data?.title}</h1>
          <pre className="lead">{data?.data?.desc}</pre>
          <button className='btn btn-success' onClick={handleUpdate}>Update</button>
        </div>
      </div>
    )
}

export default Post
