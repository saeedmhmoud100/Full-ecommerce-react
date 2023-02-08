import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY_ERROR} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    category:[],
    loading:true,
}

const categoryReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            Notification('Category added successfully','success')
            return {
                category: action.payload,
                loading: false,
            }
        case GET_CATEGORY_ERROR:
            // Notification('Enter a valid data','error')
            Notification(action.payload.response.data.message,'error')
            return {
                loading: true,
                category: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer