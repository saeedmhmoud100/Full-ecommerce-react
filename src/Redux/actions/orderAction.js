import {GET_ALL_USER_ORDER,ORDER_ERROR} from "../types";

import handeError from "./handeError";
import useGetData from "../../AxiosHooks/useGetData";

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
