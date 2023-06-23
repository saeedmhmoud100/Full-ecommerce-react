import {useState} from "react";
import {Notification} from "../useNotification";

const RegisterHook = _=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const [rePassword,setRePassword]=useState('')
    const [loading,setLoading]=useState('')

    const onChangeUsername = e=>{
        setUsername(e.target.value)
    }
    const onChangeEmail = e=>{
        setEmail(e.target.value)
    }
    const onChangePhone = e=>{
        setPhone(e.target.value)
    }
    const onChangePassword = e=>{
        setPassword(e.target.value)
    }
    const onChangeRePassword = e=>{
        setRePassword(e.target.value)
    }

    const onValidationValues =_=>{
        if(username==='' || email==='' || phone==='' || password==='' || rePassword===''){
            Notification('Enter a valid data','error')
            return
        }else{
            if(email.indexOf('@')===-1 &&email.length>=7){
                Notification("Enter a valid mail",'error')
                return
            }
            if(phone[0]!=='0'||phone[1]!=='1'){
                Notification("Enter a valid phone number starting with '01'",'error')
                return
            }
            if(password!==rePassword){
                Notification("Password doesn't equal rePassword",'error')
                return
            }
        }

    }

    const onSubmit = _=>{
        onValidationValues()
    }
    return [username,email,phone,password,rePassword,onChangeUsername,onChangeEmail,onChangePhone,onChangePassword,onChangeRePassword,onSubmit]
}

export default RegisterHook