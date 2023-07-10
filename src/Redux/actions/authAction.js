import {useInsertData} from "../../AxiosHooks/useInsertData";
import {CREATE_NEW_USER,LOGIN_USER,GET_USER_DATA,LOGOUT,FORGET_PASSWORD,VERIFY_RESET_CODE,RESET_PASSWORD} from "../types";
import {Notification} from "../../hooks/useNotification";
import useGetData from "../../AxiosHooks/useGetData";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";
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