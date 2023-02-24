import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../Redux/actions/productAction";

const ShopProductsPageHook= _ =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllProducts())
    })
    const allProducts = useSelector(state => state.allProduct.allProducts)

    return [allProducts]
}

export default ShopProductsPageHook