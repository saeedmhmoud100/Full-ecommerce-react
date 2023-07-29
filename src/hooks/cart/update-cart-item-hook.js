import {useDispatch} from "react-redux";
import {updateCartItem} from "../../Redux/actions/cartAction";
import {useState} from "react";
const UpdateCartItemHook = (item) => {
    const dispatch = useDispatch()
    const [cartItemCount,setCartItemCount] = useState(item.count)
    const [updateLoading,setUpdateLoading] = useState(false)

    const handleOnChangeCount =async _=>{
        setUpdateLoading(true)
        await dispatch(updateCartItem(item._id,{'count':cartItemCount}))
        setUpdateLoading(false)
    }

    return [cartItemCount,updateLoading,setCartItemCount,handleOnChangeCount]
}

export default UpdateCartItemHook