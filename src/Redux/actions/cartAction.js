import {ADD_TO_CART,CART_ERROR} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import {Notification} from "../../hooks/useNotification"

const handeError = e =>{
    if(e.response && e.response.data && e.response.data.errors){
        e.response.data.errors.forEach(item =>{
            Notification(item.msg,'warning')
        })
    }else if(e.response && e.response.data && e.response.data.message){
        Notification(e.response.data.message,'warning')
    }
}


export const addToCart = (data) => async dispatch => {

    try {
        const res = await useInsertData(`/api/v1/cart`,data)
        if(res && res.status)
            Notification("the product has been added for your cart successfully")
        console.log(res)
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