import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateUserPassword} from "../../Redux/actions/authAction";
import {logoutUser} from "../../Redux/actions/authAction";
import {useNavigate} from "react-router-dom";

const UpdateUserPasswordHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [confirmNewPassword,setConfirmNewPassword] = useState('')
    const [updatePasswordLoading,setUpdatePasswordLoading] = useState(false)

    const updateUserPasswordRes = useSelector(state => state.auth.updatePassword)
    const updateUserPasswordChange = useSelector(state => state.auth.change)
    const handleUpdateSubmit =async _=>{
        setUpdatePasswordLoading(true)
            await dispatch(updateUserPassword({
                currentPassword:oldPassword,
                password:newPassword,
                passwordConfirm:confirmNewPassword,
            })).then(_=>{
                setUpdatePasswordLoading(false)
            })
    }


    useEffect(_=>{
        const run=async _ => {

            if(updateUserPasswordRes.token){
                navigate('/login')
                setOldPassword('')
                setNewPassword('')
                setConfirmNewPassword('')
                await  dispatch(logoutUser())
                //     .then(_=>{
                //     // localStorage.removeItem('token')
                // })

            }
        }
        run()
    },[updateUserPasswordChange])


    return [oldPassword,newPassword,confirmNewPassword,updatePasswordLoading,setOldPassword,setNewPassword,setConfirmNewPassword,handleUpdateSubmit]
}

export default UpdateUserPasswordHook