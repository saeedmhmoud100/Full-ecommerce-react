import {CREATE_REVIEW,GET_REVIEW_ERROR} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";

export const createReview = (prodID,data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/products/${prodID}/reviews`,data)
        dispatch({
            type:CREATE_REVIEW,
            payload:res,
        })
    }catch (e){
        dispatch({
            type:GET_REVIEW_ERROR,
            payload:e
        })
    }
}