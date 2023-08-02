import {CREATE_BRAND, GET_ALL_BRAND,DELETE_BRAND, GET_BRAND_ERROR,GET_ONE_BRAND} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    brands:[],
    brand:[],
    loading:true,
    change:false,
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
                ...state,
                brand: action.payload,
                loading: false,
                change: !state.change
            }
        case DELETE_BRAND:
            return {
                ...state,
                deleteBrand: action.payload,
                change: !state.change
            }
        case GET_BRAND_ERROR:
            // Notification('Enter a valid data','error')
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default brandReducer