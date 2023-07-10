import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Notification} from "../useNotification";
import { verifyCode} from "../../Redux/actions/authAction";

const VerifyResetCodeHook = _=>{
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [code,setCode]=useState('')
    const [loading,setLoading]=useState(false)
    const [isSuccess,setIsSuccess]=useState(false)
    const onChangeCode = e=>{
        setCode(e.target.value)
    }


    const onSubmit =async _=>{
        setLoading(true)
        if(code !== ''){
            await dispatch(verifyCode({'resetCode':code}))
            setIsSuccess(true)
        }
        setLoading(false)
    }
    const verifyResetCodeData = useSelector(state => state.auth.verifyResetCode)

    useEffect(_=>{
        if (!loading && verifyResetCodeData.length!==0 && isSuccess){
            if(verifyResetCodeData.status==='Success'){
                navigate('/user/reset-password')
            }else{
                Notification("Reset code is invalid or has expired",'error')
            }
        }
        setIsSuccess(false)
    },[loading])
    return [code,loading,onChangeCode,onSubmit]
}

export default VerifyResetCodeHook