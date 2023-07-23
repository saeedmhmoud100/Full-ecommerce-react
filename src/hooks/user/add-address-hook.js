import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Notification} from "../useNotification";
import {createAddress} from "../../Redux/actions/userAddressAction";

const AddAddressHook = () => {
    const dispatch = useDispatch()

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
        setLoading(false)
    }

    useEffect(_=>{
        if(!loading){
            if(createdAddress.status === 'success')
                setSuccess(true)
        }
    },[loading])


    useEffect(_=>{
        if(success ){
            Notification('The address has been added successfully','success')
            setSuccess(false)
            setAlias('')
            setDetails('')
            setPhone('')
        }
    },[success])

    return [alias,details,phone,setAlias,setDetails,setPhone,loading,onSubmit]
}

export default AddAddressHook