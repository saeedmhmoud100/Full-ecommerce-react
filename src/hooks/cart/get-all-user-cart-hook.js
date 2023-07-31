import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUserCart} from "../../Redux/actions/cartAction";
const GetAllUserCartHook = () => {
    const dispatch = useDispatch()
    const cartChange = useSelector(state => state.cart.change)
    const userCartData = useSelector(state => state.cart.getAllUserCart)
    const appliedCoupon = useSelector(state => state.cart.applyCoupon)
    const loginUserData = useSelector(state => state.auth.getUserData.data)

    useEffect(_=>{
            if(loginUserData &&userCartData.data){
                dispatch(getAllUserCart())
        console.log(userCartData)

            }
    },[cartChange,appliedCoupon])




    return [userCartData]
}

export default GetAllUserCartHook