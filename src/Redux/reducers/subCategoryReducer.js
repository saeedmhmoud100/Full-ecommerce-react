import {CREATE_SUBCATEGORY, GET_SUBCATEGORY_ERROR, GET_SUBCATEGORY_BY_CATEGORY} from "../types";
import {Notification} from "../../hooks/useNotification";
import handeError from "../actions/handeError";


const inital={
    subCategory:[],
    loading:true,
    change:false,
}

const subCategoryReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            Notification('the subCategory added successfully','success')
            return {
                subCategory: action.payload,
                loading: false,
                change: !state.change
            }
        case GET_SUBCATEGORY_BY_CATEGORY:
            return {
                subCategory: action.payload,
                loading: false,
            }
        case GET_SUBCATEGORY_ERROR:
            // Notification('Enter a valid data','error')
            handeError(action.payload)
            return {
                loading: true,
                // subCategory: action.payload
            }
        default:
            return state
    }
}

export default subCategoryReducer