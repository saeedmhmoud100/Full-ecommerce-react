import {useState} from 'react'
import {useDispatch} from "react-redux";
import {deleteAddress} from "../../Redux/actions/userAddressAction";

const DeleteAddressHook = (addressID) => {
    const dispatch = useDispatch()


    const [deleteLoading,setDeleteLoading]= useState(false)

    const onDeleteSubmit =async _=>{
        setDeleteLoading(true)
        await dispatch(deleteAddress(addressID))
        setDeleteLoading(false)
    }


    return [deleteLoading,onDeleteSubmit]
}

export default DeleteAddressHook