import React from 'react'
import {Navigate, Outlet} from "react-router-dom";


const ProtectRoutes = ({condition,component}) =>{
    console.log(condition)
    if(!condition)
        return <Navigate to={'/'} replace />

    return component ? component : <Outlet />
}
export default ProtectRoutes