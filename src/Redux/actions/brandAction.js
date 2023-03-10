import {GET_BRAND_ERROR, CREATE_BRAND, GET_ALL_BRAND} from "../types";
import {useInsertDataWithImage} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";

export const getAllBrand = (limit,page=1) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`)
        dispatch({
            type:GET_ALL_BRAND,
            payload:res
        })
    }catch (e){
        dispatch({
            type:GET_BRAND_ERROR,
            payload:e
        })
    }
}

export const createBrand = (formData) => async dispatch => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/brands`,formData)
        dispatch({
            type:CREATE_BRAND,
            payload:res,
            loading:true
        })
    }catch (e){
        dispatch({
            type:GET_BRAND_ERROR,
            payload:e
        })
    }
}