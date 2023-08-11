import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

export const NotFound =({location} )=>{
    // console.log(location)
    return <h3>404 - Page Not Found</h3>
}

export const CheckInternetConnection =({internet,component,noInternetComponent})=>{
    if(internet)
        return component ? component :<Outlet/>
    else if(!component)
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