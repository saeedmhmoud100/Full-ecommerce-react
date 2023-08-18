import {useEffect, useState} from "react";
import {getAllOrders} from "../../Redux/actions/orderAction";
import {useDispatch, useSelector} from "react-redux";


const UserAllUserOrdersHook  = _=>{
    const dispatch = useDispatch()
    const OrdersDataRes = useSelector(state => state.order.allOrders)
    const userData = useSelector(state => state.auth.getUserData)
    const [OrdersData,setOrdersData] = useState([])
    const [lod,setLoad] = useState(false)

    useEffect(_=>{
        getOrdersData()
    },[])

    useEffect(_=>{
        if(OrdersDataRes && OrdersDataRes.data)
            setOrdersData(OrdersDataRes.data.filter(item => item.user !=null))
    },[OrdersDataRes])

    const getOrdersData =async page =>{
        setLoad(true)
        await dispatch(getAllOrders(page,5))
        setLoad(false)
    }


    return [OrdersData,userData,getOrdersData,lod]
}

export default UserAllUserOrdersHook