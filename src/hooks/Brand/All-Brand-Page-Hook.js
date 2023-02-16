import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllBrand} from "../../Redux/actions/brandAction";

const AllBrandPageHook = _ =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllBrand(12))
    },[])

    const BrandData = useSelector(state => state.allBrand.brands)
    const loading = useSelector(state => state.allBrand.loading)
    let pagesCount=1
    if(BrandData.paginationResult){
        pagesCount =BrandData.paginationResult.numberOfPages
    }
    const getPage = (page) =>{
        dispatch(getAllBrand(12,page))
    }
    return [BrandData,loading,pagesCount,getPage]
}

export default AllBrandPageHook