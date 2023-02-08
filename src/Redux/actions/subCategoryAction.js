import {GET_SUBCATEGORY_ERROR,CREATE_SUBCATEGORY} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";

export const createSubCategory = (data) => async dispatch => {
    try {
        const res = await useInsertData(`/api/v1/subcategories`,data)
        dispatch({
            type:CREATE_SUBCATEGORY,
            payload:res,
            loading:true
        })
    }catch (e){
        dispatch({
            type:GET_SUBCATEGORY_ERROR,
            payload:e
        })
    }
}