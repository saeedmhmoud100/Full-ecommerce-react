import {CREATE_BRAND, GET_ALL_BRAND, GET_BRAND_ERROR,GET_ONE_BRAND} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    brands:[],
    brand:[],
    loading:true,
}

const brandReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brands: action.payload,
                loading: false,
            }
        case GET_ONE_BRAND:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            }
        case CREATE_BRAND:
            Notification('The Brant added successfully','success')
            return {
                brands: action.payload,
                loading: false,
            }
        case GET_BRAND_ERROR:
            // Notification('Enter a valid data','error')
            Notification(action.payload.response.data.message,'error')
            return {
                loading: true,
                brands: action.payload
            }
        default:
            return state
    }
}

export default brandReducer