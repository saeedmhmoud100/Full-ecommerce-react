import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProduct} from "../../Redux/actions/productAction";

const AdminAllProductPageHook= _ =>{
    const dispatch = useDispatch()

    useEffect(_ =>{
        dispatch(getAllProduct())
    },[])
    const products = useSelector(state => state.allProduct.allProducts)
    let pagesCount=1
    if(products.paginationResult){
        pagesCount =products.paginationResult.numberOfPages
    }
    const getPage = (page) =>{
        dispatch(getAllProduct(page))
    }


    return [products,pagesCount,getPage]
}

export default AdminAllProductPageHook