import {GET_ALL_USERS, ADMIN_USERS_ERROR,DELETE_USER, CHANGE_USER_ROLE} from "../types";
import useGetData from "../../AxiosHooks/useGetData";
import handeError from "./handeError";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";
import {Notification} from "../../hooks/useNotification";
import useDeleteData from "../../AxiosHooks/useDeleteData";
export const getAllUsers = () => async dispatch => {

    try {
        const res = await useGetData(`/api/v1/users`)
        dispatch({
            type:GET_ALL_USERS,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ADMIN_USERS_ERROR,
            payload:e
        })
    }
}


export const changeUserRole = (id,data) => async dispatch => {
    try {
        const res = await useUpdateData(`/api/v1/users/${id}`,data)
        if(res.data && res.data._id)
            Notification("the user role have been changed successfully")
        // console.log(res)
        dispatch({
            type:CHANGE_USER_ROLE,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ADMIN_USERS_ERROR,
            payload:e
        })
    }
}

export const deleteUser = (id) => async dispatch => {

    try {
        const res = await useDeleteData(`/api/v1/users/${id}`)
        if(res==='')
            Notification("the user have been removed successfully")
        dispatch({
            type:DELETE_USER,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ADMIN_USERS_ERROR,
            payload:e
        })
    }
}