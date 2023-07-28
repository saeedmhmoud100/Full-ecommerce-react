import {useSelector} from "react-redux";
const CartPageHook = () => {
    const userCartData = useSelector(state => state.cart.getAllUserCart)



    return [userCartData]
}

export default CartPageHook
