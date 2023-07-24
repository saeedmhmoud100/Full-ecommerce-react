import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllAddress} from "../../Redux/actions/userAddressAction";

const UserAllAddressesHook = () => {
    const dispatch = useDispatch()
    const change = useSelector(state =>state.address.change)


    useEffect(_=>{
        return async _ =>{
            await dispatch(getAllAddress())
        }
    },[change])


    const AllAddresses = useSelector(state =>state.address.AllAddresses)


    return [AllAddresses]
}

export default UserAllAddressesHook