import {CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT_ERROR} from "../types";
import {useInsertDataWithImage} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";

export const createProduct = (formData) => async dispatch => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/products`,formData)
        dispatch({
            type:CREATE_PRODUCT,
            payload:res,
            loading:true
        })
    }catch (e){
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload:e
        })
    }
}

export const getAllProduct = (page=1) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products?limit=9&page=${page}`)
        dispatch({
            type:GET_ALL_PRODUCTS,
            payload:res,
            loading:true
        })
    }catch (e){
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload:e
        })
    }
}