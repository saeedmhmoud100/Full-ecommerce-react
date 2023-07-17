import {WISHLIST_ERROR,ADD_TO_WISHLIST,GET_ALL_WISHLIST,DELETE_FROM_WISHLIST} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import useDeleteData from "../../AxiosHooks/useDeleteData";
import useGetData from "../../AxiosHooks/useGetData";
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

export const getAllWishList = () => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/wishlist`)
        dispatch({
            type:GET_ALL_WISHLIST,
            payload:res,
        })
    }catch (e){
        dispatch({
            type:WISHLIST_ERROR,
            payload:e
        })
    }
}

export const addToWishList = (ID) => async dispatch => {

    try {
        const res = await useInsertData(`/api/v1/wishlist`,ID)
        dispatch({
            type:ADD_TO_WISHLIST,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:WISHLIST_ERROR,
            payload:e
        })
    }
}
export const deleteFromWishList = (ID) => async dispatch => {
    try {
        const res = await useDeleteData(`/api/v1/wishlist/${ID}`)
        dispatch({
            type:DELETE_FROM_WISHLIST,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:WISHLIST_ERROR,
            payload:e
        })
    }
}