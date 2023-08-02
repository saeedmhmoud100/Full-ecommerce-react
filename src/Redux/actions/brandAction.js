import {GET_BRAND_ERROR, CREATE_BRAND, GET_ALL_BRAND, GET_ONE_BRAND, DELETE_BRAND} from "../types";
import {useInsertDataWithImage} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";
import handeError from "./handeError";
import useDeleteData from "../../AxiosHooks/useDeleteData";
import {Notification} from "../../hooks/useNotification";

export const getAllBrand = (limit,page=1) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`)
        dispatch({
            type:GET_ALL_BRAND,
            payload:res
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_BRAND_ERROR,
            payload:e
        })
    }
}

export const getOneBrand = (id) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/brands/${id}`)
        dispatch({
            type:GET_ONE_BRAND,
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
        handeError(e)
        dispatch({
            type:GET_BRAND_ERROR,
            payload:e
        })
    }
}
export const deleteBrand = (ID) => async dispatch => {
    try {
        const res = await useDeleteData(`/api/v1/brands/${ID}`)
        if(res==='')
            Notification('The brand has been deleted')
        dispatch({
            type:DELETE_BRAND,
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