import {useEffect} from "react";
import {getAllOrders} from "../../Redux/actions/orderAction";
import {useDispatch, useSelector} from "react-redux";


const UserAllUserOrdersHook  = _=>{
    const dispatch = useDispatch()
    const OrdersData = useSelector(state => state.order.allOrders)
    const userData = useSelector(state => state.auth.getUserData)

    useEffect(_=>{
        dispatch(getAllOrders())
    },[])


    return [OrdersData,userData]
}

export default UserAllUserOrdersHook