import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../Redux/actions/productAction";

const AdminAllProductPageHook= _ =>{
    const dispatch = useDispatch()
    useEffect(_ =>{
        dispatch(getAllProducts())
        dispatch(getAllProducts())
    },[])
    const products = useSelector(state => state.allProduct.allProducts)
    let pagesCount=1
    if(products && products.paginationResult){
        pagesCount =products.paginationResult.numberOfPages
    }
    const getPage = (page) =>{
        dispatch(getAllProducts(page))
    }


    return [products,pagesCount,getPage]
}

export default AdminAllProductPageHook