import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Notification} from "../useNotification";
import {resetPassword} from "../../Redux/actions/authAction";

const LoginHook = _=>{
    const dispatch= useDispatch()
    const navigate= useNavigate()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const onChangeEmail = e=>{
        setEmail(e.target.value)
    }
    const onChangePassword = e=>{
        setPassword(e.target.value)
    }

    const validation = _=>{
        if(email === '' ){
            Notification('Enater a valid data!!!','warning')
            return false
        }else if(password.length < 6){
            Notification('Password should be grater than 5','warning')
            return false
        }
        return true
    }

    const onSubmit =async _=>{
        if(validation()){
            setLoading(true)
            await dispatch(resetPassword({
                email,
                'newPassword':password
            }))
            setLoading(false)
        }
    }

    const resetPasswordData = useSelector(state => state.auth.resetPassword)
    useEffect(_=>{
        console.log(resetPasswordData)
        if (Object.keys(resetPasswordData).length>0){
            if(resetPasswordData.token){
                Notification(`The password updated successfully`,'success')
                navigate('/login')
            }else if(resetPasswordData.data){
                Notification(resetPasswordData.data.message,'error')
            }else{
                Notification('there is an error','error')
            }

        }
    },[loading])
    return [email,password,onChangeEmail,onChangePassword,onSubmit]
}

export default LoginHook