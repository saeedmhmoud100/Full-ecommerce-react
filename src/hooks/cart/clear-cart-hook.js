import {useDispatch} from "react-redux";
import {clearAllUserCart} from "../../Redux/actions/cartAction";
import {useState} from "react";
const ClearCartHook = () => {
    const dispatch = useDispatch()
    const [deleteLoading,setDeleteLoading] = useState(false)

    const handleDeleteCartClick =async _=>{
        setDeleteLoading(true)
        await dispatch(clearAllUserCart())
        setDeleteLoading(false)
    }

    return [deleteLoading,handleDeleteCartClick]
}

export default ClearCartHook