import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllCoupons} from "../../Redux/actions/CouponAction";

const AdminCouponsHook = () => {
    const dispatch = useDispatch()
    const allCoupons = useSelector(state =>state.coupon.allCoupons)
    const change = useSelector(state =>state.coupon.change)


    useEffect(_=>{
        dispatch(getAllCoupons())
    },[change])

    return [allCoupons]
}

export default AdminCouponsHook