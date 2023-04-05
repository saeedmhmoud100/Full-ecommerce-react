import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../Redux/actions/productAction";

const AdminAllProductPageHook= _ =>{
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProduct.allProducts)
    console.log('yes')
    useEffect(_ =>{
        dispatch(getAllProducts())
    },[])

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