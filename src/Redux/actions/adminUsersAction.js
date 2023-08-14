import {GET_ALL_USERS,ADMIN_USERS_ERROR} from "../types";
import useGetData from "../../AxiosHooks/useGetData";

import handeError from "./handeError";

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
