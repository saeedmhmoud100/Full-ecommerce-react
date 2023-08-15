import {useEffect, useState} from "react";
import {getAllOrders} from "../../Redux/actions/orderAction";
import {useDispatch, useSelector} from "react-redux";


const UserAllUserOrdersHook  = _=>{
    const dispatch = useDispatch()
    const OrdersData = useSelector(state => state.order.allOrders)
    const userData = useSelector(state => state.auth.getUserData)
    const [lod,setLoad] = useState(false)

    useEffect(_=>{
        getOrdersData()
    },[])

    const getOrdersData =async page =>{
        setLoad(true)
        await dispatch(getAllOrders(page,5))
        setLoad(false)
    }


    return [OrdersData,userData,getOrdersData,lod]
}

export default UserAllUserOrdersHook