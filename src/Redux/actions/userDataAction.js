import {UPDATE_USER_DATA, USER_DATA_ERROR} from "../types";

import {useUpdateData} from "../../AxiosHooks/useUpdateData";
import {Notification} from "../../hooks/useNotification";

const handeError = e =>{
    if(e.response && e.response.data && e.response.data.errors){
        e.response.data.errors.forEach(item =>{
            Notification(item.msg,'warning')
        })
    }else if(e.response && e.response.data && e.response.data.message){
        Notification(e.response.data.message,'warning')
    }
}


export const updateUserData = (date) => async dispatch => {

    try {
        const res = await useUpdateData(`api/v1/users/updateMe`,date)
        Notification('the data has been updated successfully','success')
        dispatch({
                type:UPDATE_USER_DATA,
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