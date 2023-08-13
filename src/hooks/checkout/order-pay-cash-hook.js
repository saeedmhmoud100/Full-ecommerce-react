import {useEffect, useState} from 'react'
import {Notification} from "../useNotification";
import GetAllUserCartHook from "../cart/get-all-user-cart-hook";
import {useDispatch, useSelector} from "react-redux";
import {createCashOrder} from "../../Redux/actions/checkoutAction";
import {useNavigate} from "react-router-dom";
import {logoutUserCart} from "../../Redux/actions/cartAction";

const OrderPayCashHook= _  =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userCartData] = GetAllUserCartHook()
    const [address,setAddress] = useState({})
    const [loading,setLoading] = useState(false)
    const [success,setSuccess] = useState(false)
    const createOrderData = useSelector(state => state.checkout.createOrder)
    const handleOnClick =async _ =>{
        if(address._id){
            setSuccess(true)
            setLoading(true)
            await dispatch(createCashOrder(userCartData.data._id,address))
            await dispatch(logoutUserCart())

            setLoading(false)
            setAddress({})
        }else{
            Notification('Please select an address','warning')
        }
    }

    useEffect(_=>{
        console.log(success)
        console.log(createOrderData)
        if(createOrderData.status==='success' && success){
            navigate('/Full-ecommerce-react/user/allorders')
            setSuccess(false)
        }
    },[createOrderData])

    return [loading,setAddress,handleOnClick]
}

export default OrderPayCashHook