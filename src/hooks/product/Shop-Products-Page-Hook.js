import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getProductsSearch} from "../../Redux/actions/productAction";

const ShopProductsPageHook= _ =>{
    const [selectedPage,setSelectedPage] = useState(1)
    const dispatch = useDispatch()

    const getProduct =async (page=selectedPage)=>{
        const limit =8;
        const searchWord = localStorage.getItem('searchWord') || '';
        const catSelected = localStorage.getItem('catSelected') || '';
        const brandSelected = localStorage.getItem('brandSelected') || '';
        const sorting = localStorage.getItem('sorting') || ''
        const priceFrom = localStorage.getItem('priceFrom') || 0
        const priceTo = localStorage.getItem('priceTo') || 9999999
        await dispatch(getProductsSearch(`page=${page}&limit=${limit}&keyword=${searchWord}&sort=${sorting}${catSelected}${brandSelected}&price[gte]=${priceFrom}&price[lte]=${priceTo}`))
    }

    useEffect(_=>{
        getProduct(1)
    },[])

    const allProducts = useSelector(state => state.allProduct.allProducts)
    let pagination=[];
    if(allProducts && allProducts.paginationResult)
        pagination=allProducts.paginationResult.numberOfPages;
    const onPress = page=>{
        setSelectedPage(page)
        getProduct(page)
    }


    return [allProducts,pagination,onPress,getProduct]
}

export default ShopProductsPageHook