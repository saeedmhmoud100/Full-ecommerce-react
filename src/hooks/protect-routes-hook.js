import {Notification} from "./useNotification";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";



const ProtectRoutesHook = () =>{
    const loginUserData = useSelector(state => state.auth.getUserData.data)

    const [userData,setUserData] = useState(localStorage.getItem('token'))
    const [isUser,serIsUser] = useState(Boolean)
    const [isAdmin,serIsAdmin] = useState(Boolean)


    useEffect(_=> {
            if(userData){
                if(loginUserData.role === 'user'){
                    serIsAdmin(false)
                    serIsUser(true)
                }else if(loginUserData.role === 'admin'){
                    serIsAdmin(true)
                    serIsUser(false)
                }
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