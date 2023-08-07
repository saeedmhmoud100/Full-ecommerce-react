import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getOrderDetails} from "../../Redux/actions/orderAction";

const AdminOrderDetailsHook= _ =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    const OrderData = useSelector(state => state.order.oneOrderDetails)
    useEffect(_ =>{
        dispatch(getOrderDetails(id))
    },[])

    return [OrderData]
}

export default AdminOrderDetailsHook