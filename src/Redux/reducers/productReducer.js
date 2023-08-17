import {
    CREATE_PRODUCT,
    DELETE_PRODUCTS,
    GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_WITHOUT_FILTER,
    GET_ONE_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_SPECIFIC_PRODUCTS, UPDATE_PRODUCT
} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    products:[],
    allProducts:[],
    allProductWithoutFilter:[],
    product:[],
    productChange:false,
    specificProducts:[],
    deleteProduct:[],
    updateProduct:[],
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
        case UPDATE_PRODUCT:
            Notification('The product has been updated successfully','success')
            return {
                ...state,
                updateProduct: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS_WITHOUT_FILTER:
            return {
                ...state,
                allProductWithoutFilter: action.payload,
                loading: false,
            }
        case GET_ONE_PRODUCT:
            return {
                ...state,
                product : action.payload,
                loading: false,
                productChange: !state.productChange,
                specificProducts:[],
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
            // if(action && action.payload.response.data.errors){
            //     action.payload.response.data.errors.forEach(e =>{
            //         Notification(e.msg,'error')
            //     })
            // }else
            //     Notification(action.payload.response.data.message,'error')
            return {
                ...state,
                loading: true,
                products: action.payload
            }
        default:
            return state
    }
}

export default productReducer