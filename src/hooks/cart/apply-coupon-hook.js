import {useDispatch} from "react-redux";
import {applyCoupon} from "../../Redux/actions/cartAction";
import {useState} from "react";
const ApplyCouponHook = () => {
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const [couponName,setCouponName] = useState('')


    const handleApplyCouponClick =async _=>{
        setLoading(true)
        if(couponName)
        await dispatch(applyCoupon({
            couponName,
        }))
        setLoading(false)
        setCouponName('')
    }

    return [couponName,loading,handleApplyCouponClick,setCouponName]
}

export default ApplyCouponHook