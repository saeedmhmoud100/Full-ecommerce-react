import {useEffect, useState} from 'react'
import ShopProductsPageHook from "../product/Shop-Products-Page-Hook";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, logoutUser} from "../../Redux/actions/authAction";
import {getAllUserCart, logoutUserCart} from "../../Redux/actions/cartAction";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getAllBrand} from "../../Redux/actions/brandAction";
import {getAllProducts, getAllProductsWithoutFilter} from "../../Redux/actions/productAction";

const NavbarSearchHook = _=>{
    const [,,,getProduct] = ShopProductsPageHook()
    const [searchWord,setSearchWord] = useState('')
    const [prevPage,setPrevPage] = useState(window.location.pathname)
    const navigate = useNavigate();

    const [isSearch,setIsSearch] = useState(Boolean(localStorage.getItem('searchWord')))

    useEffect(_=>{
        const run = async _=>{
           await dispatch(getAllProducts())
           await dispatch(getAllCategory())
           await dispatch(getAllBrand)

        }
        run()
    },[])


    const onChangeSearch = e =>{
        setSearchWord(e.target.value)
        localStorage.setItem("searchWord",e.target.value)
    }

    useEffect(_=>{
        if(!isSearch)
            setPrevPage(window.location.pathname)
    },[window.location.pathname])

    useEffect(_=>{
        setIsSearch(Boolean(searchWord))
        setTimeout(_=>{
            navigate(searchWord===''?prevPage:'/Full-ecommerce-react/products')
        },200)
        setTimeout(_=>{
        getProduct({searchWord})

        },100)
    },[searchWord])

    // logged user
    const dispatch = useDispatch()
    const [isLogged,setIsLogged] = useState(false)
    const loginUserData = useSelector(state =>( state.auth.getUserData && state.auth.getUserData.data) || [])
    // login

    // update when change the data
    const userDataChange = useSelector(state => state.auth.change)


    useEffect(_=>{
        if(localStorage.getItem('token')){
            dispatch(getUserData(localStorage.getItem('token')))
        if(loginUserData && loginUserData.role==='user')
            dispatch(getAllUserCart())

        }
    },[userDataChange])

    useEffect(_=>{
        if(loginUserData.data && loginUserData.data.status){
            localStorage.removeItem('token')
            setIsLogged(false)
        }
        else if(loginUserData && loginUserData._id)
            setIsLogged(true)
        else
            setIsLogged(false)
    },[loginUserData])
    //////////////

    // logout
    const logout =_=>{
        dispatch(logoutUser())
        dispatch(logoutUserCart())
        dispatch(getAllProductsWithoutFilter())
        dispatch(getAllProducts())

        localStorage.removeItem('token')
        navigate('Full-ecommerce-react/auth/login')
    }
    ////////////////
    return [onChangeSearch,logout,isLogged,loginUserData]
}

export default NavbarSearchHook