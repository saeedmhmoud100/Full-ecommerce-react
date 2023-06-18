import {useEffect, useState} from 'react'
import ShopProductsPageHook from "../product/Shop-Products-Page-Hook";

const NavbarSearchHook = _=>{
    const [,,,getProduct] = ShopProductsPageHook()
    const [searchWord,setSearchWord] = useState('')

    const onChangeSearch = e =>{
        setSearchWord(e.target.value)
        localStorage.setItem("searchWord",e.target.value)
    }

    useEffect(_=>{
        setTimeout(_=>{
        getProduct({searchWord})

        },100)
    },[searchWord])



    return [searchWord,onChangeSearch]
}

export default NavbarSearchHook