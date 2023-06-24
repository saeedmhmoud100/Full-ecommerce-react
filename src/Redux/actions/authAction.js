import {useInsertData} from "../../AxiosHooks/useInsertData";
import {CREATE_NEW_USER} from "../types";
import {Notification} from "../../hooks/useNotification";
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