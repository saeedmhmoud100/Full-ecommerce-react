import {GET_ALL_USER_ORDER,CHANGE_ORDER_TO_PAID,CHANGE_ORDER_TO_DELIVERED,GET_ORDER_DETAILS,ORDER_ERROR} from "../types";
import handeError from "./handeError";
import useGetData from "../../AxiosHooks/useGetData";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";
import {Notification} from "../../hooks/useNotification";
export const getAllOrders = (page=1,limit=0) => async dispatch => {

    try {
        const res = await useGetData(`/api/v1/orders?page=${page}&${limit ? "limit="+limit : null}`)
        dispatch({
            type:GET_ALL_USER_ORDER,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ORDER_ERROR,
            payload:e
        })
    }
}

export const getOrderDetails = (id) => async dispatch => {

    try {
        const res = await useGetData(`/api/v1/orders/${id}`)
        dispatch({
            type:GET_ORDER_DETAILS,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ORDER_ERROR,
            payload:e
        })
    }
}

export const changeOrderToPaid = (id) => async dispatch => {

    try {
        const res = await useUpdateData(`api/v1/orders/${id}/pay`)
        if(res.status==="Success")
            Notification('the paid status changed successfully')
        dispatch({
            type:CHANGE_ORDER_TO_PAID,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ORDER_ERROR,
            payload:e
        })
    }
}

export const changeOrderToDelivered = (id) => async dispatch => {

    try {
        const res = await useUpdateData(`api/v1/orders/${id}/deliver`)
        if(res.status==="Success")
            Notification('the delivering status changed successfully')
        dispatch({
            type:CHANGE_ORDER_TO_DELIVERED,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:ORDER_ERROR,
            payload:e
        })
    }
}
