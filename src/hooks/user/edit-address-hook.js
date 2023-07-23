import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {editAddress, getSpecificAddress} from "../../Redux/actions/userAddressAction";
import {useNavigate, useParams} from "react-router-dom";

const EditAddressHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const [alias,setAlias]= useState('')
    const [details,setDetails]= useState('')
    const [phone,setPhone]= useState('')
    const [loading,setLoading]= useState(false)
    const [success,setSuccess]= useState(false)

    const address = useSelector(state =>state.address.specificAddress)

    useEffect(_=>{
        dispatch(getSpecificAddress(id))
    },[])

    useEffect(_=>{
        if(address && address.data){
            setAlias(address.data.alias)
            setDetails(address.data.details)
            setPhone(address.data.phone)
        }
    },[address])


    const editAddressRes = useSelector(state =>state.address.editAddress)


    const onSubmit =async _=>{
        setLoading(true)
        await dispatch(editAddress(id,{
            alias,
            details,
            phone
        }))
        setSuccess(true)
        setLoading(false)
    }

    useEffect(_=>{
        if(success && editAddressRes.status === 'success'){
            setLoading(false)
            setSuccess(false)
            navigate('/user/addresses')
        }
    },[success])



    return [alias,details,phone,setAlias,setDetails,setPhone,loading,onSubmit]
}

export default EditAddressHook