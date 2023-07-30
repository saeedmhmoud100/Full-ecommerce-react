import {useDispatch} from "react-redux";
import {updateCartItem} from "../../Redux/actions/cartAction";
import {useState} from "react";
const UpdateCartItemHook = (item) => {
    const dispatch = useDispatch()
    const [cartItemCount,setCartItemCount] = useState(item.count)
    const [updateLoading,setUpdateLoading] = useState(false)

    const handleOnChangeCount =async count=>{
        setUpdateLoading(true)
        setCartItemCount(count)
        await dispatch(updateCartItem(item._id,{'count':count}))
        setUpdateLoading(false)
    }

    return [cartItemCount,updateLoading,setCartItemCount,handleOnChangeCount]
}

export default UpdateCartItemHook