import {GET_ALL_CATEGORY, GET_ERROR,CREATE_CATEGORY} from "../types";
import useGetData from "../../hooks/useGetData";
import {useInsertDataWithImage} from "../../hooks/useInsertData";

export const getAllCategory = (limit,page=1) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:res
        })
    }catch (e){
        dispatch({
            type:GET_ERROR,
            payload:e
        })
    }
}

export const createCategory = (formData) => async dispatch => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/categories`,formData)
        dispatch({
            type:CREATE_CATEGORY,
            payload:res,
            loading:true
        })
    }catch (e){
        dispatch({
            type:GET_ERROR,
            payload:e
        })
    }
}