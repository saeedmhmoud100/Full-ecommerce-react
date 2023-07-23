import {CREATE_ADDRESS, GET_ALL_ADDRESS, DELETE_ADDRESS, ADDRESS_ERROR} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";
import useDeleteData from "../../AxiosHooks/useDeleteData";
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


export const getAllAddress = () => async dispatch => {

    try {
        const res = await useGetData(`/api/v1/addresses`)
        dispatch({
                type:GET_ALL_ADDRESS,
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
export const deleteAddress = (ID) => async dispatch => {

    try {
        const res = await useDeleteData(`/api/v1/addresses/${ID}`)
        if(res.status === "success" )
            Notification('The address has been deleted successfully','success')
        dispatch({
            type:DELETE_ADDRESS,
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