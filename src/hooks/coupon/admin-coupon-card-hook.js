import {useState} from 'react'
import {useDispatch} from "react-redux";
import {deleteCoupon} from "../../Redux/actions/CouponAction";

const AdminCouponCardHook = () => {
    const dispatch = useDispatch()
    // const change = useSelector(state =>state.coupon.change)
    const [deleteLoading,setDeleteLoading]= useState(false)


    const handleDeleteCoupon =async id=>{
        setDeleteLoading(true)
       await dispatch(deleteCoupon(id))
        setDeleteLoading(false)
    }



    return [handleDeleteCoupon,deleteLoading]
}

export default AdminCouponCardHook