import {GET_ALL_CATEGORY, GET_ERROR} from "../types";
import useGetData from "../../hooks/useGetData";

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