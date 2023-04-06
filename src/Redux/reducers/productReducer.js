import {
    CREATE_PRODUCT,
    DELETE_PRODUCTS,
    GET_ALL_PRODUCTS,
    GET_ONE_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_SPECIFIC_PRODUCTS
} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    products:[],
    allProducts:[],
    product:[],
    specificProducts:[],
    deleteProduct:[],
    loading:true,
}

const productReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            Notification('The Product added successfully','success')
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }
        case GET_ONE_PRODUCT:
            return {
                ...state,
                product : action.payload,
                loading: false,
            }
        case GET_SPECIFIC_PRODUCTS:
            return {
                ...state,
                specificProducts : action.payload,
                loading: false,
            }
        case DELETE_PRODUCTS:
            Notification("the product Deleted successfully",'success')
            return {
                ...state,
                deleteProduct : action.payload,
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