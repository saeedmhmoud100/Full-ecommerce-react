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
    const onChangeCode = e=>{
        setCode(e.target.value)
    }


    const onSubmit =async _=>{
        setLoading(true)
        if(code !== ''){
            await dispatch(verifyCode({'resetCode':code}))
        }
        setLoading(false)
    }
    const verifyResetCodeData = useSelector(state => state.auth.verifyResetCode)

    useEffect(_=>{
            console.log(verifyResetCodeData)
        if (!loading && verifyResetCodeData.length!==0){
            if(verifyResetCodeData.status==='Success'){
                navigate('/user/reset-password')
            }else{
                Notification("Reset code is invalid or has expired",'error')
            }
        }
    },[loading])
    return [code,onChangeCode,onSubmit]
}

export default VerifyResetCodeHook