import React, {useEffect, useState} from 'react'
import {Navigate, Outlet} from "react-router-dom";


const ProtectRoutes = ({condition,component}) =>{
    const [cond,setCond] = useState(condition)

    useEffect(_=>{
        setCond(condition)
    },[condition])

    if(!cond)
        return <Navigate to={'Full-ecommerce-react/'} replace />

    return component ? component : <Outlet />
}
export default ProtectRoutes