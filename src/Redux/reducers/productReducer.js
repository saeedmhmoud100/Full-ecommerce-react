import {CREATE_PRODUCT,GET_ALL_PRODUCTS, GET_PRODUCT_ERROR} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    products:[],
    allProducts:[],
    loading:true,
}

const productReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            Notification('The Brant added successfully','success')
            return {
                products: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS:
            return {
                allProducts: action.payload,
                loading: false,
            }
        case GET_PRODUCT_ERROR:
            Notification(action.payload.response.data.message,'error')
            return {
                loading: true,
                products: action.payload
            }
        default:
            return state
    }
}

export default productReducer