import {COUPON_ERROR,CREATE_COUPON,GET_ALL_COUPONS,DELETE_COUPONS} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import {Notification} from "../../hooks/useNotification";
import useGetData from "../../AxiosHooks/useGetData";
import useDeleteData from "../../AxiosHooks/useDeleteData";

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
        dispatch({
            type:CREATE_COUPON,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:COUPON_ERROR,
            payload:e
        })
    }
}
export const getAllCoupons = () => async dispatch => {

    try {
        const res = await useGetData(`/api/v1/coupons`)
        dispatch({
            type:GET_ALL_COUPONS,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:COUPON_ERROR,
            payload:e
        })
    }
}

export const deleteCoupon = (ID) => async dispatch => {

    try {
        const res = await useDeleteData(`/api/v1/coupons/${ID}`)
        Notification('The coupon has been deleted successfully','success')
        dispatch({
            type:DELETE_COUPONS,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:COUPON_ERROR,
            payload:e
        })
    }
}
