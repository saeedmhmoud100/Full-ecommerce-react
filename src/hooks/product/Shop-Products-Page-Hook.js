import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getProductsSearch} from "../../Redux/actions/productAction";

const ShopProductsPageHook= _ =>{
    const [selectedPage,setSelectedPage] = useState(1)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const getProduct =async (page=selectedPage)=>{
        const limit =12;
        const searchWord = localStorage.getItem('searchWord') || '';
        const catSelected = localStorage.getItem('catSelected') || '';
        const brandSelected = localStorage.getItem('brandSelected') || '';
        const sorting = localStorage.getItem('sorting') || ''
        const priceFrom = localStorage.getItem('priceFrom') || 0
        const priceTo = localStorage.getItem('priceTo') || 9999999
        setLoading(true)
        await dispatch(getProductsSearch(`page=${page}&limit=${limit}&keyword=${searchWord}&sort=${sorting}${catSelected}${brandSelected}&price[gte]=${priceFrom}&price[lte]=${priceTo}`))
        setLoading(false)
    }

    useEffect(_=>{
        getProduct(1)
    },[])

    const allProducts = useSelector(state => state.allProduct.allProducts)
    let pagination=[];
    if(allProducts && allProducts.paginationResult)
        pagination=allProducts.paginationResult.numberOfPages;
    const onPress =async page=>{
        setSelectedPage(page)
        await getProduct(page)
        window.scrollTo(0, 0);
    }


    return [allProducts,pagination,onPress,getProduct,loading]
}

export default ShopProductsPageHook