import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateUserData} from "../../Redux/actions/authAction";

const UpdateUserDateHook = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.getUserData.data)
    const userDataRes = useSelector(state => state.auth.updateData)
    const [userName,setUserName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [showUpdateModal,setShowUpdateModal] = useState(false)
    const [editLoading,setEditLoading] = useState(false)
    const [success,setSuccess] = useState(false)


    useEffect(_=>{
        if(userData){
            setUserName(userData.name)
            setPhone(userData.phone)
            setEmail(userData.email)
        }
    },[userData])

    const handleEditSubmit =async _=>{
        setEditLoading(true)
        if(email === userData.email)
            await dispatch(updateUserData({
                name:userName,
                phone
            }))
        else
            await dispatch(updateUserData({
                name:userName,
                phone,
                email
            }))
        setSuccess(true)
        setEditLoading(false)
    }

    useEffect(_=>{
        if(userDataRes && userDataRes.status === 'success' && success){
            setShowUpdateModal(false)
            setSuccess(false)
        }
    },[success])


    return [userData,userName,phone,email,editLoading,showUpdateModal,setShowUpdateModal,setUserName,setPhone,setEmail,handleEditSubmit]
}

export default UpdateUserDateHook