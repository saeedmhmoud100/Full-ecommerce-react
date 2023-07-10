import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Notification} from "../useNotification";
import {resetPassword} from "../../Redux/actions/authAction";

const LoginHook = _=>{
    const dispatch= useDispatch()
    const navigate= useNavigate()

    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [isSuccess,setIsSuccess]=useState(false)
    const onChangePassword = e=>{
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = e=>{
        setConfirmPassword(e.target.value)
    }

    const validation = _=>{
        if(password.length < 6){
            Notification('Password should be grater than 5','warning')
            return false
        }else if(password !== confirmPassword){
            Notification('password confirmation mismatched','warning')
            return false
        }
        return true
    }

    // check if mail exist
    useEffect(_=>{
        if(!localStorage.getItem('reset-password-email')){
            navigate('/user/forget-password')
        }
    },[])

    const onSubmit =async _=>{
        if(validation()){
            setLoading(true)
            await dispatch(resetPassword({
                email:localStorage.getItem('reset-password-email'),
                'newPassword':password
            }))
            setIsSuccess(true)
            setLoading(false)
        }
    }

    const resetPasswordData = useSelector(state => state.auth.resetPassword)
    useEffect(_=>{
        if (Object.keys(resetPasswordData).length>0 && isSuccess){
            if(resetPasswordData.token){
                Notification(`The password updated successfully`,'success')
                localStorage.removeItem('reset-password-email')
                navigate('/login')
            }else if(resetPasswordData.data){
                if(resetPasswordData.data.message.startsWith('There is no user with this email')){
                    Notification('enter a valid email','error')
                    localStorage.removeItem('reset-password-email')
                    navigate('/user/forget-password')
                }else
                Notification(resetPasswordData.data.message,'error')
            }else{
                Notification('there is an error','error')
            }
        }
        setIsSuccess(false)
    },[loading])
    return [password,confirmPassword,loading,onChangePassword,onChangeConfirmPassword,onSubmit]
}

export default LoginHook