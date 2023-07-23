import {CREATE_ADDRESS, ADDRESS_ERROR} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";

const handeError = e =>{
    if(e.response && e.response.data && e.response.data.errors){
        e.response.data.errors.forEach(item =>{
            Notification(item.msg,'warning')
        })
    }else if(e.response && e.response.data && e.response.data.message){
        Notification(e.response.data.message,'warning')
    }
}


export const createAddress = (data) => async dispatch => {

    try {
        const res = await useInsertData(`/api/v1/addresses`,data)
        dispatch({
            type:CREATE_ADDRESS,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ADDRESS_ERROR,
            payload:e
        })
    }
}