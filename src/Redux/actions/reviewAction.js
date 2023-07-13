import {CREATE_REVIEW,GET_REVIEW_ERROR,GET_ALL_REVIEWS_ON_PRODUCT} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";

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

export const getAllReviewsOnProduct = (prodID,pageNumber =1) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products/${prodID}/reviews?limit=7&page=${pageNumber}`)
        dispatch({
            type:GET_ALL_REVIEWS_ON_PRODUCT,
            payload:res,
        })
    }catch (e){
        dispatch({
            type:GET_REVIEW_ERROR,
            payload:e
        })
    }
}