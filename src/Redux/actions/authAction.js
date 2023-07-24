import {useInsertData} from "../../AxiosHooks/useInsertData";
import {
    CREATE_NEW_USER,
    LOGIN_USER,
    GET_USER_DATA,
    LOGOUT,
    FORGET_PASSWORD,
    VERIFY_RESET_CODE,
    RESET_PASSWORD,
    UPDATE_USER_DATA, USER_DATA_ERROR, UPDATE_USER_PASSWORD
} from "../types";
import {Notification} from "../../hooks/useNotification";
import useGetData from "../../AxiosHooks/useGetData";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";


const handeError = e =>{
    if(e.response && e.response.data && e.response.data.errors){
        e.response.data.errors.forEach(item =>{
            Notification(item.msg,'warning')
        })
    }else if(e.response && e.response.data && e.response.data.message){
        Notification(e.response.data.message,'warning')
    }
}


export const createUser = (data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/auth/signup`,data)
        dispatch({
            type:CREATE_NEW_USER,
            payload:res,
            loading:true
        })
    }catch (e){
        e.response.data.errors.forEach(i =>{
            Notification(i.msg,"error")
        })
        dispatch({
            type:CREATE_NEW_USER,
            payload:e.response
        })
    }
}

export const loginUser = (data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/auth/login`,data)
        dispatch({
            type:LOGIN_USER,
            payload:res,
            loading:true
        })
    }catch (e){
        if(e.response.data.message)
            Notification(e.response.data.message,'error')
        else if(e.response.data.errors){
            e.response.data.errors.forEach(i =>{
                Notification(i.msg,"error")
            })
        }
        dispatch({
            type:LOGIN_USER,
            payload:e.response
        })
    }
}

export const getUserData = token => async dispatch => {
    let res;
    try {
        if(token)
            res = await useGetData('/api/v1/users/getMe',token)
        dispatch({
            type:GET_USER_DATA,
            payload:res,
        })
    }catch (e){
        if(e.response && e.response.status )
            res={data:{data:{status:e.response.status}}}
        dispatch({
            type:GET_USER_DATA,
            payload: res
        })
    }
}

export const logoutUser = _ => dispatch => {
        dispatch({
        type:LOGOUT,
    })
}

export const forgetPassword = (data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/auth/forgotPasswords`,data)
        dispatch({
            type:FORGET_PASSWORD,
            payload:res,
        })
    }catch (e){
        dispatch({
            type:FORGET_PASSWORD,
            payload:e.response
        })
    }
}

export const verifyCode = (data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/auth/verifyResetCode`,data)
        dispatch({
            type:VERIFY_RESET_CODE,
            payload:res,
        })
    }catch (e){
        dispatch({
            type:VERIFY_RESET_CODE,
            payload:e.response
        })
    }
}

export const resetPassword = (data) => async dispatch => {
    try {
        const res = await useUpdateData(`/api/v1/auth/resetPassword`,data)
        dispatch({
            type:RESET_PASSWORD,
            payload:res,
        })
    }catch (e){
        dispatch({
            type:RESET_PASSWORD,
            payload:e.response
        })
    }
}



export const updateUserData = (date) => async dispatch => {

    try {
        const res = await useUpdateData(`api/v1/users/updateMe`,date)
        if(res.status === 'success')
            Notification('the data has been updated successfully','success')
        dispatch({
            type:UPDATE_USER_DATA,
            payload:res,
        })
    }catch (e){
        console.log(e)
        handeError(e)
        dispatch({
            type:USER_DATA_ERROR,
            payload:e
        })
    }
}
export const updateUserPassword = (date) => async dispatch => {

    try {
        const res = await useUpdateData(`/api/v1/users/changeMyPassword`,date)
        if(res.token){
            Notification('the password has been updated successfully','success')
            setTimeout(_=>{
                Notification('pleas login again!!!','warning')
            },300)
        }
        dispatch({
            type:UPDATE_USER_PASSWORD,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:USER_DATA_ERROR,
            payload:e
        })
    }
}