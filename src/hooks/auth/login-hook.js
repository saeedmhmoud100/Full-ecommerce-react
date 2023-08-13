import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Notification} from "../useNotification";
import {loginUser} from "../../Redux/actions/authAction";
import {getAllUserCart} from "../../Redux/actions/cartAction";

const LoginHook = _=>{
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [loggedin,setLoggedin]=useState(false)
    const user= useSelector(state => state.auth.loginUser)
    const userdata= useSelector(state => state.auth.getUserData)
    const onChangeEmail = e=>{
        setEmail(e.target.value)
    }
    const onChangePassword = e=>{
        setPassword(e.target.value)
    }

    const validation = _=>{
        if(email === '' || password.length < 6){
            Notification('Enater a valid data!!!','warning')
            return false
        }
        return true
    }

    const onSubmit =async _=>{
        setLoading(true)
        // localStorage.removeItem('token')
        if(validation()){
            await dispatch(loginUser({
                email,
                password
            }))
            setLoggedin(true)
        }
        setLoading(false)
    }

    useEffect(_=>{
        if (user.token){
            // Notification(`welcome back ${user.data.name}`,'success')
            localStorage.setItem('token',user.token)
            if(user.data.role === 'user')
                dispatch(getAllUserCart())
            navigate(`/Full-ecommerce-react/${user.data ? user.data.role : 'user'}/profile`)
            setLoggedin(false)

        }
    },[userdata])

    return [email,password,loading,onChangeEmail,onChangePassword,onSubmit]
}

export default LoginHook