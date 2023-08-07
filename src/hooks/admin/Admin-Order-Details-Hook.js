import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {changeOrderToPaid, getOrderDetails} from "../../Redux/actions/orderAction";

const AdminOrderDetailsHook= _ =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    const OrderData = useSelector(state => state.order.oneOrderDetails)
    const changeOrderData = useSelector(state => state.order.change)
    const [paidLoading,setPaidLoading] = useState(false)
    useEffect(_ =>{
        const run =async _=>{
        await dispatch(getOrderDetails(id))
        }
        run()
    },[changeOrderData])

    const handlePaidClick =async _=>{
        setPaidLoading(true)
        await dispatch(changeOrderToPaid(id))
        setPaidLoading(false)
    }

    return [OrderData,paidLoading,handlePaidClick]
}

export default AdminOrderDetailsHook