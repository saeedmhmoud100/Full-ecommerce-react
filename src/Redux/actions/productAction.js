import {CREATE_PRODUCT, GET_PRODUCT_ERROR} from "../types";
import {useInsertDataWithImage} from "../../AxiosHooks/useInsertData";

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