import React,{useState, useEffect} from 'react';

// loader-stuff
import Loader from "react-loader-spinner";
import PostItem from './PostItem';
import Pagination from '../Pagination';

// custom hook
import { useFetchPosts } from '../../hooks/useFetchPosts';

const Posts = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [activePage, setActivePage] = useState(1)
    const {isLoading, isError, data, error, isFetching} = useFetchPosts(pageNumber, pageSize)

    const handlPageChange = pageNum => {
        setPageNumber(pageNum);
        setActivePage(pageNum)
    }
    useEffect(() => {
        if(data?.data?.length === 0){
            if(activePage !== 1){
                setActivePage(pageNumber-1);
                setPageNumber(pageNumber-1)
            }else{
                setActivePage(1)
            }
        }
        // eslint-disable-next-line
    }, [data]);

    if(isLoading){
        return (
            <div className='container m-4'>
                <div className='row'>  
                    <div className='d-flex justify-content-center align-self-center'>
                        <Loader 
                            type='ThreeDots'
                            color = '#DADDFC'
                        />
                    </div>
                </div>
            </div>
        )
    };
    
    const renderEmptyList = () => {
        return (
            <div className='d-flex justify-content-center align-self-center'>
                <h2>Sorry! You don't have post in database</h2>
            </div>
        )
    }

    if(isError){
        return (
            <div className='container m-4'>
                <div className='row'> 
                    <h2>{error.message}</h2> 
                </div>
            </div>
        )
    }
    return(
        <>
        <div className='container mt-4 d-flex align-items-center justify-content-center'>
            <div className='row' style={{height: "auto"}}>
                {
                    isFetching? (
                        <div className='d-flex justify-content-center align-self-center'>
                            <Loader 
                                type='ThreeDots'
                                color = '#396EB0'
                            />
                        </div>
                    ): data?.data.length === 0 ? renderEmptyList():data?.data.map(post => <PostItem  key={post.id} post={post} />)
                }
            </div>
        </div>
        <div className='container mt-5 d-flex align-items-center justify-content-center'>
            <Pagination pageNumber={pageNumber} activePage={activePage} changePage={handlPageChange} pageSize={pageSize}  />
        </div>
        </>
    )
}

export default Posts
