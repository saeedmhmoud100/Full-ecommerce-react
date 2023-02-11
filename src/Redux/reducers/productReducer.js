import {CREATE_PRODUCT, GET_PRODUCT_ERROR} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    products:[],
    loading:true,
}

const productReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            Notification('The Brant added successfully','success')
            return {
                brands: action.payload,
                loading: false,
            }
        case GET_PRODUCT_ERROR:
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

export default productReducer