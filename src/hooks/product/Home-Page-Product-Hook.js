import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../Redux/actions/productAction";

const HomePageProductHook= _ =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllProducts())
    },[])
    const allProducts = useSelector(state => state.allProduct.allProducts)
    let moreSalesProducts = []
    let topRateProducts = []

    if(allProducts.data){

        moreSalesProducts=allProducts.data.slice(-4)
        topRateProducts=allProducts.data.slice(0,4)
    }

    return [moreSalesProducts,topRateProducts]
}

export default HomePageProductHook