import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../Redux/actions/cartAction";
import {useState} from "react";
const DeleteOneCartItemHook = (item) => {
    const dispatch = useDispatch()
    const [deleteLoading,setDeleteLoading] = useState(false)

    const handleDeleteCartClick =async _=>{
        setDeleteLoading(true)
        await dispatch(deleteItemFromCart(item._id))
        setDeleteLoading(false)
    }

    return [deleteLoading,handleDeleteCartClick]
}

export default DeleteOneCartItemHook