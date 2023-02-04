import React, {useEffect} from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
const AllCategoryPage = () => {
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllCategory(3))
    },[])

    const categoryData = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    let pagesCount=1
    if(categoryData.paginationResult){
        pagesCount =categoryData.paginationResult.numberOfPages
    }
    const getPage = (page) =>{
        dispatch(getAllCategory(3,page))
    }

    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer data={categoryData.data} loading={loading}/>
            {
                pagesCount > 1 ?<Pagination onPress={getPage} pagesCount={pagesCount}/> : null
            }

        </div>
    )
}

export default AllCategoryPage