import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getProductsSearch} from "../../Redux/actions/productAction";

const ShopProductsPageHook= _ =>{
    const limit =9;
    const searchWord = localStorage.getItem('searchWord') || ''
    const dispatch = useDispatch()

    const getProduct =async ({page=1})=>{
        await dispatch(getProductsSearch(`page=${page}&limit=${limit}&keyword=${searchWord}`))
    }

    useEffect(_=>{
        getProduct({})
    },[])

    const allProducts = useSelector(state => state.allProduct.allProducts)
    let pagination=[];
    if(allProducts && allProducts.paginationResult)
        pagination=allProducts.paginationResult.numberOfPages;
    const onPress = async page=>{
        await getProduct({page})
    }


    return [allProducts,pagination,onPress,getProduct]
}

export default ShopProductsPageHook