import {CREATE_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCTS, GET_ALL_PRODUCTS,GET_ONE_PRODUCT,GET_SPECIFIC_PRODUCTS,GET_ALL_PRODUCTS_WITHOUT_FILTER, GET_PRODUCT_ERROR} from "../types";
import {useInsertDataWithImage} from "../../AxiosHooks/useInsertData";
import useGetData from "../../AxiosHooks/useGetData";
import useDeleteData from "../../AxiosHooks/useDeleteData";
import {useUpdateDataWithImage} from "../../AxiosHooks/useUpdateData";
import handeError from "./handeError";



export const createProduct = (formData) => async dispatch => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/products`,formData)
        dispatch({
            type:CREATE_PRODUCT,
            payload:res,
            loading:true
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload:e
        })
    }
}
export const updateProduct = (id,formData) => async dispatch => {
    try {
        const res = await useUpdateDataWithImage(`/api/v1/products/${id}`,formData)
        dispatch({
            type:UPDATE_PRODUCT,
            payload:res,
            loading:true
        })
    }catch (e){
        // for(const entry of formData){
        //     console.log(entry); // Array: ['entryName', 'entryValue']
        handeError(e)

        dispatch({
            type:GET_PRODUCT_ERROR,
            payload:e
        })
    }
}

export const getAllProducts = (page = 1,limit=9) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`)
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

export const getAllProductsWithoutFilter = () => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products`)
        dispatch({
            type:GET_ALL_PRODUCTS_WITHOUT_FILTER,
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


export const getProductsSearch = (q) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products?${q}`)
        dispatch({
            type:GET_ALL_PRODUCTS,
            payload:res,
            loading:true
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload:e
        })
    }
}

export const getOneProduct = (id) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products/${id}`)
        dispatch({
            type:GET_ONE_PRODUCT,
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

export const getSpecificProducts = (id) => async dispatch => {
    try {
        const res = await useGetData(`/api/v1/products/?category=${id}`)
        dispatch({
            type:GET_SPECIFIC_PRODUCTS,
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

export const deleteProduct = (id) => async dispatch => {
    try {
        const res = await useDeleteData(`/api/v1/products/${id}`)
        dispatch({
            type:DELETE_PRODUCTS,
            payload:res,
            loading:true
        })
    }catch (e){
        handeError(e)
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload:e
        })
    }
}