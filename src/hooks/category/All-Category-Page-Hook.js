import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {useEffect} from "react";

const AllCategoryPageHook = _ =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllCategory(12))
    },[])

    const categoryData = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    let pagesCount=1
    if(categoryData.paginationResult){
        pagesCount =categoryData.paginationResult.numberOfPages
    }
    const getPage = (page) =>{
        dispatch(getAllCategory(12,page))
    }
    return [categoryData,loading,pagesCount,getPage]
}

export default AllCategoryPageHook