import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllAddress} from "../../Redux/actions/userAddressAction";

const UserAllAddressesHook = () => {
    const dispatch = useDispatch()

    const [loading,setLoading]= useState(false)
    const change = useSelector(state =>state.address.change)


    useEffect(_=>{
        return async _ =>{
            setLoading(true)
            await dispatch(getAllAddress())
            setLoading(false)
        }
    },[change])


    const AllAddresses = useSelector(state =>state.address.AllAddresses)


    return [AllAddresses,loading]
}

export default UserAllAddressesHook