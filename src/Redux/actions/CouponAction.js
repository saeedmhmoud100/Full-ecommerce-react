import {COUPON_ERROR,CREATE_COUPON,GET_ALL_COUPONS,UPDATE_COUPONS,DELETE_COUPONS} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import {Notification} from "../../hooks/useNotification";
import useGetData from "../../AxiosHooks/useGetData";
import useDeleteData from "../../AxiosHooks/useDeleteData";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";
import handeError from "./handeError";


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
export const updateCoupon = (ID,data) => async dispatch => {

    try {
        const res = await useUpdateData(`/api/v1/coupons/${ID}`,data)
        Notification('The coupon has been updated successfully', 'success')
        dispatch({
            type: UPDATE_COUPONS,
            payload: res,
        })
    } catch (e) {
        handeError(e)
        dispatch({
            type: COUPON_ERROR,
            payload: e
        })
    }

}