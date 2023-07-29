import {ADD_TO_CART,GET_ALL_USER_CART,CLEAR_ALL_USER_CART,DELETE_ITEM_FROM_CART,UPDATE_CART_ITEM,APPLY_COUPON,CART_ERROR} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import {Notification} from "../../hooks/useNotification"
import useGetData from "../../AxiosHooks/useGetData";
import useDeleteData from "../../AxiosHooks/useDeleteData";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";

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
        handeError(e)
        dispatch({
            type:CART_ERROR,
            payload:e
        })
    }
}
export const clearAllUserCart = () => async dispatch => {

    try {
        const res = await useDeleteData(`/api/v1/cart`)
        if(res ==='')
            Notification("your cart has been cleared")
        dispatch({
            type:CLEAR_ALL_USER_CART,
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
export const deleteItemFromCart = (ID) => async dispatch => {

    try {
        const res = await useDeleteData(`/api/v1/cart/${ID}`)
        dispatch({
            type:DELETE_ITEM_FROM_CART,
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
export const updateCartItem = (ID,data) => async dispatch => {

    try {
        const res = await useUpdateData(`/api/v1/cart/${ID}`,data)
        if(res.status && res.status==="success")
            Notification("the count has been updated")
        dispatch({
            type:UPDATE_CART_ITEM,
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

export const applyCoupon = (data) => async dispatch => {

    try {
        const res = await useUpdateData(`/api/v1/cart/applyCoupon`,data)
        Notification("the Coupon applied successfully")
        dispatch({
            type:APPLY_COUPON,
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
