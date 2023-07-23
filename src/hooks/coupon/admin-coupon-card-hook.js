import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteCoupon, updateCoupon} from "../../Redux/actions/CouponAction";
import {Notification} from "../useNotification";

const AdminCouponCardHook = (coupon) => {
    const dispatch = useDispatch()

    ///////////////////////////////// delete coupon /////////////////////////////////
    const [deleteLoading,setDeleteLoading]= useState(false)
    const handleDeleteCoupon =async id=>{
        setDeleteLoading(true)
       await dispatch(deleteCoupon(id))
        setDeleteLoading(false)
    }

    // convert date from timestamp to custom format
    const formatDate = dateString =>{
        // const options = {year:'numeric',month:'long','day':'numeric'}    July 29, 2023
        const options = {year:'numeric',month:'numeric','day':'numeric'} // 7/29/2023
        return new Date(dateString).toLocaleDateString(undefined,options)
    }


    ///////////////////////////////// update coupon  ///////////////////////////////////////

    const [showUpdateModal,setShowUpdateModal]= useState(false)
    const [editLoading,setEditLoading]= useState(false)

    const [couponName,setCouponName]= useState(coupon.name)
    const [couponExpire,setCouponExpire]= useState(formatDate(coupon.expire))
    const [couponDiscount,setCouponDiscount]= useState(coupon.discount)

    const updateRes = useSelector(state =>state.coupon.updateCoupon)

    useEffect(_ =>{
        setCouponName(coupon.name)
        setCouponExpire(formatDate(coupon.expire))
        setCouponDiscount(coupon.discount)
    },[coupon])


    const handleEditSubmit =async _=>{

        setEditLoading(true)
        if(!couponName  || !couponExpire || !couponDiscount  ){
            Notification('enter a valid data','error')
        }else {
            await dispatch(updateCoupon(coupon._id,{
                "name": couponName,
                "expire": couponExpire,
                "discount": couponDiscount
            }))
        }
        setEditLoading(false)
    }

    useEffect(_=>{
        if(!editLoading){
            if(updateRes.data && updateRes.data.name === couponName)
                setShowUpdateModal(false)
        }
    },[editLoading])


    return [handleDeleteCoupon,formatDate,deleteLoading,showUpdateModal,setShowUpdateModal,couponName,couponExpire,couponDiscount,setCouponName,setCouponExpire,setCouponDiscount,editLoading,handleEditSubmit]
}

export default AdminCouponCardHook