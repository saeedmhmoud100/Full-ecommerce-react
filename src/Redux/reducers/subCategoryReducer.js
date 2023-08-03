import {CREATE_SUBCATEGORY, GET_SUBCATEGORY_ERROR, GET_SUBCATEGORY_BY_CATEGORY,GET_ALL_SUBCATEGORY, DELETE_SUBCATEGORY} from "../types";
import {Notification} from "../../hooks/useNotification";
import handeError from "../actions/handeError";


const inital={
    subCategory:[],
    allSubCategory:[],
    deleteSubCat:false,
    error:[],
    loading:true,
    change:false,
}

const subCategoryReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_SUBCATEGORY:
            return {
                ...state,
                allSubCategory: action.payload,
                loading: false,
                deleteSubCat:false,
            }
        case CREATE_SUBCATEGORY:
            Notification('the subCategory added successfully','success')
            return {
                ...state,
                subCategory: action.payload,
                loading: false,
                deleteSubCat:false,
                change: !state.change
            }
        case DELETE_SUBCATEGORY:
            return {
                ...state,
                deleteSubCat:true,
                loading: false,
                change: !state.change
            }
        case GET_SUBCATEGORY_BY_CATEGORY:
            return {
                ...state,
                deleteSubCat:false,
                subCategory: action.payload,
                loading: false,
            }
        case GET_SUBCATEGORY_ERROR:
            // Notification('Enter a valid data','error')
            handeError(action.payload)
            return {
                ...state,
                loading: true,
                // subCategory: action.payload
                deleteSubCat:false,
                error:action.payload,
            }
        default:
            return state
    }
}

export default subCategoryReducer