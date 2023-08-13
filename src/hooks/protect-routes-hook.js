import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import BaseURL from "../Api/baseURL";

export const NotFound =({location} )=>{
    // console.log(location)
    return <h3>404 - Page Not Found</h3>
}

export const CheckInternetConnection =({internet,component,noInternetComponent})=>{
    const [isOnline,setIsOnline] = useState(true)

    const run =async _=>{
        try {
            const resProd =await BaseURL.get('/api/v1/products')
            const resCat =await BaseURL.get('/api/v1/categories')
            const resBrand =await BaseURL.get('/api/v1/brands')
            setIsOnline((resProd.status >= 200 && resProd.status <= 300) &&(resCat.status >= 200 && resCat.status <= 300) &&(resBrand.status >= 200 && resBrand.status <= 300)  )
        }catch (e){
            setIsOnline(false)
        }
    }

    useEffect(_=>{

    },[])
    run()

    if(isOnline)
    {
        if(component)
             return component
        else
            return  <Outlet/>
    }else if(!component)
        return noInternetComponent
}

const ProtectRoutesHook = () =>{
    const loginUserData = useSelector(state =>(state.auth && state.auth.getUserData && state.auth.getUserData.data)|| [])

    const [isUser,serIsUser] = useState()
    const [isAdmin,serIsAdmin] = useState()

    useEffect(_=> {

            if(loginUserData && loginUserData.role === 'user'){
                serIsAdmin(false)
                serIsUser(true)
            }else if(loginUserData && loginUserData.role === 'admin'){
                serIsAdmin(true)
                serIsUser(false)
            }else{
                serIsUser(false)
                serIsAdmin(false)
            }
        }
    ,[loginUserData])

    return [isUser,isAdmin,loginUserData]
}


export default ProtectRoutesHook


// const ProtectRoutesHook = () =>{
//     const loginUserData = useSelector(state => state.auth.getUserData.data)
//
//     const protectRoute = (component,role,redirectPage='/') =>{
//         console.log(loginUserData)
//         if(loginUserData && loginUserData.role === role ){
//             return component
//         }else{
//             return <Navigate to={redirectPage} replace/>
//         }
//
//     }
//
//     return [protectRoute]
// }
//
//
// export default ProtectRoutesHook