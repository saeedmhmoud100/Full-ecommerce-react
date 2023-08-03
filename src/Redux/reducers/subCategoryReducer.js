import {CREATE_SUBCATEGORY, GET_SUBCATEGORY_ERROR, GET_SUBCATEGORY_BY_CATEGORY} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    subCategory:[],
    loading:true,
}

const subCategoryReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            Notification('the subCategory added successfully','success')
            return {
                subCategory: action.payload,
                loading: false,
            }
        case GET_SUBCATEGORY_BY_CATEGORY:
            return {
                subCategory: action.payload,
                loading: false,
            }
        case GET_SUBCATEGORY_ERROR:
            // Notification('Enter a valid data','error')
            Notification(action.payload.response.data.message,'error')
            return {
                loading: true,
                subCategory: action.payload
            }
        default:
            return state
    }
}

export default subCategoryReducer