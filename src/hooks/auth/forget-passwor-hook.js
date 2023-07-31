import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Notification} from "../useNotification";
import {forgetPassword} from "../../Redux/actions/authAction";

const ForgetPasswordHook = _=>{
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [email,setEmail]=useState('')
    const [loading,setLoading]=useState(false)
    const [isSuccess,setIsSuccess]=useState(false)
    const onChangeEmail = e=>{
        setEmail(e.target.value)
    }


    const onSubmit =async _=>{
        setLoading(true)
        if(email !== ''){
            await dispatch(forgetPassword({email}))
            setIsSuccess(true)
        }else{
            Notification('enter a valid email','warn')
        }
        setLoading(false)
    }
    const forgetPasswordData = useSelector(state => state.auth.forgetPassword)

    useEffect(_=>{
        if (!loading && forgetPasswordData.length!==0 && isSuccess){
            if(forgetPasswordData.status === 404){
                Notification(forgetPasswordData.data.message,'error')
            }else if(forgetPasswordData.status==='Success'){
                Notification(forgetPasswordData.message,'success')
                localStorage.setItem('reset-password-email',email)
                setEmail('')
                navigate('/verify-code')
            }else{
                Notification('There is an error, try again','warn')
            }
            setIsSuccess(false)
        }
    },[loading])
    return [email,loading,onChangeEmail,onSubmit]
}

export default ForgetPasswordHook