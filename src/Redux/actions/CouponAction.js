import {COUPON_ERROR,CREATE_COUPON} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
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


export const createCoupon = (data) => async dispatch => {

    try {
        const res = await useInsertData(`/api/v1/coupons`,data)
        console.log(res)
        dispatch({
            type:CREATE_COUPON,
            payload:res,
        })
    }catch (e){
        console.log(e)
        handeError(e)
        dispatch({
            type:COUPON_ERROR,
            payload:e
        })
    }
}
