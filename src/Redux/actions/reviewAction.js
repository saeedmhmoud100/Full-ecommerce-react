import {CREATE_REVIEW, GET_REVIEW_ERROR, GET_ALL_REVIEWS_ON_PRODUCT,UPDATE_REVIEW} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";
import {Notification} from "../../hooks/useNotification";
import useDeleteData from "../../AxiosHooks/useDeleteData";
import {useUpdateData} from "../../AxiosHooks/useUpdateData";
import handeError from "./handeError";


export const createReview = (prodID,data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/products/${prodID}/reviews`,data)
        dispatch({
            type:CREATE_REVIEW,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_REVIEW_ERROR,
            payload:e
        })
    }
}

export const getAllReviewsOnProduct = (prodID,pageNumber =1) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products/${prodID}/reviews?limit=3&page=${pageNumber}`)

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

export const DeleteReview =  async (reviewID) => {
    try {
        const res = await useDeleteData(`/api/v1/reviews/${reviewID}`)
        Notification('the review deleted successfully',"success")
    }catch (e){
        handeError(e)
    }
}

export const updateReview = (reviewID,data) => async dispatch => {
    try {
        const res = await useUpdateData(`/api/v1/reviews/${reviewID}`,data)
        dispatch({
            type:UPDATE_REVIEW,
            payload:res,
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_REVIEW_ERROR,
            payload:e
        })
    }
}