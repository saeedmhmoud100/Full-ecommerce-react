import {useEffect} from 'react'
import '../../Assets/Style/Products.scss'
import {useDispatch, useSelector} from "react-redux";
import {getAllUserCart} from "../../Redux/actions/cartAction";
const GetAllUserCartHook = () => {
    const dispatch = useDispatch()
    const cartChange = useSelector(state => state.cart.change)
    const userCartData = useSelector(state => state.cart.getAllUserCart)


    useEffect(_=>{
        dispatch(getAllUserCart())
    },[cartChange])

    return [userCartData]
}

export default GetAllUserCartHook