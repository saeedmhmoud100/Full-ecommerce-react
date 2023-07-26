import {GET_SUBCATEGORY_ERROR, CREATE_SUBCATEGORY, GET_SUBCATEGORY_BY_CATEGORY} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import UseGetData from "../../AxiosHooks/useGetData";

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

export const getSubCategoryByCategory = (catID) => async dispatch => {
    try {
        const res = await UseGetData(`/api/v1/categories/${catID}/subcategories`)
        dispatch({
            type:GET_SUBCATEGORY_BY_CATEGORY,
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
export const getSubCategoriesNameByProduct =async (catIDs)  => {    // catIDs == subCategories ids
        const arr=[];
        for (let i = 0; i < 1; i++) {
            const res = await UseGetData(`/api/v1/subcategories/${catIDs[i]}`).then(r => r.data)
                arr.push(res.name)
        }
        return arr
}