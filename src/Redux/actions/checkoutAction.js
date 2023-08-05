import {ORDER_ERROR,CREATE_CASH_ORDER} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import handeError from "./handeError";
import {Notification} from "../../hooks/useNotification";


export const createCashOrder = (id,data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/orders/${id}`,data)
        Notification('the order is created')
        dispatch({
            type:CREATE_CASH_ORDER,
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
