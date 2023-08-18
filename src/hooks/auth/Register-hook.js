import {useEffect, useState} from "react";
import {Notification} from "../useNotification";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../Redux/actions/authAction";
import {useNavigate} from "react-router-dom";

const RegisterHook = _=>{
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const [rePassword,setRePassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [created,setCreated]=useState(false)

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

    const newUser = useSelector(state => state.auth.createUser)
    let validation=true
    const onValidationValues =_=>{
        if(username==='' || email==='' || phone==='' || password==='' || rePassword===''){
            Notification('Enter a valid data','error')
            validation=false
        }else{
            if(email.indexOf('@')===-1 || email.length<=7){
                Notification("Enter a valid mail",'error')
                validation=false
            }
            if(phone[0]!=='0'||phone[1]!=='1'){
                Notification("Enter a valid phone number starting with '01'",'error')
                validation=false
            }else if(phone.length<=8){
                Notification("Enter a valid phone number",'error')
                validation=false
            }
            if(password!==rePassword){
                Notification("Password doesn't equal rePassword",'error')
                validation=false
            }
        }

    }
    const onSubmit =async _=>{
        onValidationValues()
        if(validation){
            setLoading(true)
            await dispatch(createUser({
                name:username,
                email,
                phone,
                password,
                passwordConfirm:rePassword,
            }))
            setLoading(false)
            setCreated(true)
        }
    }
    useEffect(_=>{
        if(!loading){
            if(newUser && newUser.data && newUser.token && created){
                Notification("your account has been created successfully",'success')
                setUsername('')
                setEmail('')
                setPhone('')
                setPassword('')
                setRePassword('')
                // localStorage.setItem('token',newUser.token)
            }
        }
    },[loading])

    useEffect(_=>{
        if(created){
            setCreated(false)
            navigate('/Full-ecommerce-react/auth/login')
        }
    },[created])
    return [username,email,phone,password,rePassword,loading,onChangeUsername,onChangeEmail,onChangePhone,onChangePassword,onChangeRePassword,onSubmit]
}

export default RegisterHook