import React, {useEffect} from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {useDispatch, useSelector} from "react-redux";
const AllCategoryPage = () => {
    const dispatch = useDispatch()

    useEffect(_=>{
        dispatch(getAllCategory())
    },[])

    const data = useSelector(state => state.category)
    console.log(data)
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage