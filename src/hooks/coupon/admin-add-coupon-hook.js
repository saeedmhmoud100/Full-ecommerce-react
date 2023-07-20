import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {createCoupon} from "../../Redux/actions/CouponAction";
import {Notification} from "../useNotification";

const AdminAddCouponHook = () => {
    const dispatch = useDispatch()
    const [couponName,setCouponName]= useState('')
    const [couponExpire,setCouponExpire]= useState('')
    const [couponDiscount,setCouponDiscount]= useState(0)
    const [loading,setLoading]= useState(false)
    const [success,setSuccess]= useState(false)
    const createdCoupon = useSelector(state =>state.coupon.createCoupon)

    const onSubmit =async _=>{
        // console.log(couponName)
        // console.log(couponExpire)
        // console.log(couponDiscount)
        setLoading(true)
        await dispatch(createCoupon({
            "name": couponName,
            "expire": couponExpire,
            "discount": couponDiscount
        }))
        setLoading(false)
    }

    useEffect(_=>{
        if(!loading){
            if(createdCoupon.data && createdCoupon.data.name === couponName)
                setSuccess(true)
        }
    },[loading])
    useEffect(_=>{
        if(success ){
            Notification('the coupon added successfully','success')
            setSuccess(false)
            setCouponName('')
            setCouponExpire('')
            setCouponDiscount(0)
        }
    },[success])

    return [couponName,couponExpire,couponDiscount,setCouponName,setCouponExpire,setCouponDiscount,loading,onSubmit]
}

export default AdminAddCouponHook