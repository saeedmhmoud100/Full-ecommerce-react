import {GET_ALL_USERS, ADMIN_USERS_ERROR, CHANGE_USER_ROLE} from "../types";
import useGetData from "../../AxiosHooks/useGetData";

import handeError from "./handeError";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";

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
