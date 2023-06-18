import {useEffect, useState} from 'react'
import ShopProductsPageHook from "../product/Shop-Products-Page-Hook";
import {useNavigate} from "react-router-dom";

const NavbarSearchHook = _=>{
    const [,,,getProduct] = ShopProductsPageHook()
    const [searchWord,setSearchWord] = useState('')
    const [prevPage,setPrevPage] = useState('')
    const navigate = useNavigate();

    const onChangeSearch = e =>{
        setSearchWord(e.target.value)
        localStorage.setItem("searchWord",e.target.value)
    }
    // useNavigate()


    useEffect(_=>{
        if(window.location.pathname!=='/products')
            setPrevPage(window.location.pathname)
    },[window.location.pathname])

    useEffect(_=>{
        setTimeout(_=>{
            navigate(searchWord===''?prevPage:'/products')
        },80)
        setTimeout(_=>{
        getProduct({searchWord})

        },100)
    },[searchWord])



    return [searchWord,onChangeSearch]
}

export default NavbarSearchHook