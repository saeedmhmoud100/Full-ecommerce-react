import {useEffect, useState} from 'react'
import ShopProductsPageHook from "../product/Shop-Products-Page-Hook";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../Redux/actions/authAction";

const NavbarSearchHook = _=>{
    const [,,,getProduct] = ShopProductsPageHook()
    const [searchWord,setSearchWord] = useState('')
    const [prevPage,setPrevPage] = useState(window.location.pathname)
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

    // logged user
    const dispatch = useDispatch()
    const [isLogged,setIsLogged] = useState(false)
    const loginUserData = useSelector(state => state.auth.getUserData.data)

    useEffect(_=>{
        if(localStorage.getItem('token')){
            dispatch(getUserData(localStorage.getItem('token')))
        }
    },[])
    useEffect(_=>{
        if(loginUserData.status)
            localStorage.removeItem('token')
        else if(loginUserData && loginUserData._id)
            setIsLogged(true)
        else
            setIsLogged(false)
    },[loginUserData])
    return [onChangeSearch,isLogged,loginUserData]
}

export default NavbarSearchHook