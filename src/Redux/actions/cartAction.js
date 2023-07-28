import {ADD_TO_CART,GET_ALL_USER_CART,CART_ERROR} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import {Notification} from "../../hooks/useNotification"
import useGetData from "../../AxiosHooks/useGetData";

const handeError = e =>{
    if(e.response && e.response.data && e.response.data.errors){
        e.response.data.errors.forEach(item =>{
            Notification(item.msg,'warning')
        })
    }else if(e.response && e.response.data && e.response.data.message && !e.response.data.message.startsWith('No cart exist for this user')){
        Notification(e.response.data.message,'warning')
    }
}


export const addToCart = (data) => async dispatch => {

    try {
        const res = await useInsertData(`/api/v1/cart`,data)
        if(res && res.status)
            Notification("the product has been added for your cart successfully")
        dispatch({
            type:ADD_TO_CART,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:CART_ERROR,
            payload:e
        })
    }
}

export const getAllUserCart = () => async dispatch => {

    try {
        const res = await useGetData(`/api/v1/cart`)
        dispatch({
            type:GET_ALL_USER_CART,
            payload:res,
        })
    }catch (e){
        console.log(e)
        handeError(e)
        dispatch({
            type:CART_ERROR,
            payload:e
        })
    }
}