import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Notification} from "../useNotification";
import {createAddress} from "../../Redux/actions/userAddressAction";
import {useNavigate} from "react-router-dom";

const AddAddressHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [alias,setAlias]= useState('')
    const [details,setDetails]= useState('')
    const [phone,setPhone]= useState('')
    const [loading,setLoading]= useState(false)
    const [success,setSuccess]= useState(false)

    const createdAddress = useSelector(state =>state.address.createAddress)

    const onSubmit =async _=>{
        // console.log(couponName)
        // console.log(couponExpire)
        // console.log(couponDiscount)
        setLoading(true)
        await dispatch(createAddress({
            alias,
            details,
            phone
        }))
        setSuccess(true)
        setLoading(false)
    }


    useEffect(_=>{
        if(success && createdAddress.status === 'success'){
            Notification('The address has been added successfully','success')
            setSuccess(false)
            setAlias('')
            setDetails('')
            setPhone('')
            navigate('/user/addresses')

        }
    },[success])

    return [alias,details,phone,setAlias,setDetails,setPhone,loading,onSubmit]
}

export default AddAddressHook