import React, {useState, useEffect} from 'react'
import { allData } from '../../services/api'
import _ from 'lodash'

const Pagination = ({activePage, changePage, pageSize}) => {
    const [totalData, setTotalData] = useState(0);
    const setLengthOfData = async() => {
        const {data} = await allData()
        setTotalData(data.length);
    } 
    useEffect(() => {
        setLengthOfData();
    }, [activePage]);
    const totalPages = Math.ceil(totalData / pageSize); // here we get the value = 4 for 12 totalData and 3 on each page 
    if(totalPages === 1) return null; // if only 1 page is present then dont show pagination
    const pages = _.range(1, totalPages+1); // so now to display 1,2,3,4 in pagination we convert that number to [1,2,3,4]
    return (
        <ul className="pagination justify-content-center">
            {
                pages?.map(page=> (
                    <li key={page} className={activePage===page?"page-item active": "page-item"}><button className="page-link" onClick={() => changePage(page)}>{page}</button></li>
                ))
            }
        </ul>
    )
}

export default Pagination
