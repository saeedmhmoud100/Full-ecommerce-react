import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsWithoutFilter} from "../../Redux/actions/productAction";

const HomePageProductHook= _  =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllProductsWithoutFilter())
    },[])
    const allProducts = useSelector(state => state.allProduct.allProductWithoutFilter)
    let moreSalesProducts = []
    let topRateProducts = []
    if(allProducts && allProducts.data){

        moreSalesProducts=allProducts.data.slice(-4)
        topRateProducts=allProducts.data.slice(0,4)
    }

    return [moreSalesProducts,topRateProducts]
}

export default HomePageProductHook