import {GET_SUBCATEGORY_ERROR, CREATE_SUBCATEGORY,DELETE_SUBCATEGORY, GET_SUBCATEGORY_BY_CATEGORY} from "../types";
import {useInsertData} from "../../AxiosHooks/useInsertData";
import UseGetData from "../../AxiosHooks/useGetData";
import handeError from "./handeError";
import {Notification} from "../../hooks/useNotification";
import UseDeleteData from "../../AxiosHooks/useDeleteData";
import BaseURL from "../../Api/baseURL";

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

export const deleteSubCategory = (subCatID) => async dispatch => {
    try {
        const res = await UseDeleteData(`/api/v1/subcategories/${subCatID}`)
        if(res==='')
        Notification('The subCategory has been deleted')
        dispatch({
            type:DELETE_SUBCATEGORY,
            payload:res,
            loading:true
        })
    }catch (e){
        handeError(e)
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

export const getAllCategoriesAndSubCategories =async (categories)  => {    // catIDs == subCategories ids
    let dic = [];
    categories.map(async item =>{
        const res =await BaseURL.get(`/api/v1/categories/${item._id}/subcategories`)
            .then(res => res.status === 200 ? res.data : 0 )
        if(res.results>0)
            dic.push({[item.name]:res.data})
        return dic
    })

    console.log(dic)
    return dic
}
