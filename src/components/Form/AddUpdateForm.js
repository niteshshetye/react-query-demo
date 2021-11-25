import React from 'react'

import { useQueryClient } from 'react-query';
import {updatePost, createPost} from '../../services/api'

import { Formik, Form,Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useLocation, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// custom hook
import { useCreatePost } from '../../hooks/useCreatePost';
import { useUpdatePost } from '../../hooks/useUpdatePost';

const initialValues = {
    title: '',
    desc: ''
}
const validationSchema = Yup.object({
    title: Yup.string().required("Required*"),
    desc: Yup.string().required('Required*')
});


const AddUpdateForm = () => {
    const queryClient = useQueryClient();

    const {mutateAsync, isLoading} = useUpdatePost(updatePost);
    const {mutateAsync: mutatePost, isLoading: isCreating} = useCreatePost(createPost);
    
    const history = useHistory();
    const {state} = useLocation();
    
    let postValues;
    if(state !== undefined) {
        postValues = state.post
    }
    const onSubmit = async(values) => {
        if(state === undefined) {
            await mutatePost({id: Date.now(), ...values});
            queryClient.invalidateQueries('posts');
            history.push('/posts');
        }else{
            await mutateAsync({id: state.post.id, ...values});
            queryClient.invalidateQueries(['posts', state.post.id]);
            history.push('/posts');
        }
    }
    return (
        <>
            <div className='heading mt-4 mb-4'>
                <h2 className='h2'>
                    {
                        state !== undefined? "Update ": "Add "
                    }
                    Post
                </h2>
            </div>
            <Formik 
                initialValues={postValues || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                <Form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <Field className="form-control" name='title' />
                        <ErrorMessage name='title'>{msg => <p style={{color: 'red'}}>{msg}</p>}</ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <Field as='textarea' name='desc' className="form-control"/>
                        <ErrorMessage name='desc'>{msg => <p style={{color: 'red'}}>{msg}</p>}</ErrorMessage>
                    </div>
                    <button type='submit' className="btn btn-primary">
                        {
                            (isLoading || isCreating)? <Loader type='ThreeDots' color = '#DADDFC' height={25} width={40} />: state !== undefined? "Update": "Submit"
                        }
                    </button>
                </Form>
            </Formik>
        </>
    )
}

export default AddUpdateForm
