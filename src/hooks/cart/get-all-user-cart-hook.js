import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUserCart} from "../../Redux/actions/cartAction";
const GetAllUserCartHook = () => {
    const dispatch = useDispatch()
    const cartChange = useSelector(state => state.cart.change)
    const userCartData = useSelector(state => state.cart.getAllUserCart)
    const appliedCoupon = useSelector(state => state.cart.applyCoupon)
    const loginUserData = useSelector(state => state.auth.getUserData.data)
    const [getData,setGetData] = useState(true)

    // console.log(loginUserData)
    useEffect(_=>{
        // console.log(userCartData)
            if(getData){
                dispatch(getAllUserCart())
                setGetData(false)
            }
    },[loginUserData])

    useEffect(_=>{
        // console.log(userCartData)
        if(loginUserData && loginUserData.role === 'user'){
            setGetData(true)

        }
    },[cartChange,appliedCoupon])


    return [userCartData]
}

export default GetAllUserCartHook