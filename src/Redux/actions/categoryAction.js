import {GET_ALL_CATEGORY, GET_CATEGORY_ERROR,CREATE_CATEGORY,DELETE_CATEGORY,GET_ONE_CATEGORY} from "../types";
import {useInsertDataWithImage} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";
import handeError from "./handeError";
import useDeleteData from "../../AxiosHooks/useDeleteData";
import {Notification} from "../../hooks/useNotification";
export const getAllCategory = (limit,page=1) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:res
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_CATEGORY_ERROR,
            payload:e
        })
    }
}
export const getOneCategory = (id) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/categories/${id}`)
        dispatch({
            type:GET_ONE_CATEGORY,
            payload:res
        })
    }catch (e){
        dispatch({
            type:GET_CATEGORY_ERROR,
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
        handeError(e)
        dispatch({
            type:GET_CATEGORY_ERROR,
            payload:e
        })
    }
}
export const deleteCategory = (ID) => async dispatch => {
    try {
        const res = await useDeleteData(`/api/v1/categories/${ID}`)
        if(res==='')
            Notification('The category has been deleted')
        dispatch({
            type:DELETE_CATEGORY,
            payload:res,
            loading:true
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_CATEGORY_ERROR,
            payload:e
        })
    }
}