import {WISHLIST_ERROR,ADD_TO_WISHLIST} from "../types";
import useGetData from "../../AxiosHooks/useGetData";
import {Notification} from "../../hooks/useNotification";



export const AddToWishList = () => async dispatch => {
    try {
        const res = await useGetData(`/`,)
        dispatch({
            type:ADD_TO_WISHLIST,
            payload:res,
        })
    }catch (e){
        console.log(e)
        dispatch({
            type:WISHLIST_ERROR,
            payload:e
        })
    }
}