import {useState} from "react";


const RegisterHook = _=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const [rePassword,setRePassword]=useState('')

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


    return [username,email,phone,password,rePassword,onChangeUsername,onChangeEmail,onChangePhone,onChangePassword,onChangeRePassword]
}

export default RegisterHook