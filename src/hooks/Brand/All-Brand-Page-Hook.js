import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllBrand} from "../../Redux/actions/brandAction";

const AllBrandPageHook = _ =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllBrand(12))
    },[])

    const BrandData = useSelector(state => state.allBrand.brands)
    // const loading = useSelector(state => state.allBrand.loading)
    const [loading,setLoading] = useState(false)
    let pagesCount=1
    if(BrandData.paginationResult){
        pagesCount =BrandData.paginationResult.numberOfPages
    }
    const getPage = async (page) =>{
        setLoading(true)
        await dispatch(getAllBrand(12,page))
        setLoading(false)
    }
    return [BrandData,loading,pagesCount,getPage]
}

export default AllBrandPageHook