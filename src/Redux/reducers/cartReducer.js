import {
    ADD_TO_CART,
    CART_ERROR,
    CLEAR_ALL_USER_CART,
    DELETE_ITEM_FROM_CART,
    GET_ALL_USER_CART,
    UPDATE_CART_ITEM,
    APPLY_COUPON, LOGOUT_USER_CART
} from "../types";


const inital={
    addToCart:[],
    getAllUserCart:[],
    clearAllUserCart:[],
    deleteItemFromCart:[],
    updateCartItem:[],
    applyCoupon:[],
    error:[],
    change:false,
}

const cartReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_USER_CART:
            return {
                ...state,
                getAllUserCart: action.payload,
            }
        case ADD_TO_CART:
            return {
                ...state,
                addToCart: action.payload,
                change: !state.change,
            }
        case CLEAR_ALL_USER_CART:
            return {
                ...state,
                clearAllUserCart: action.payload,
                getAllUserCart:[],
                change: !state.change,
            }
        case UPDATE_CART_ITEM:
            return {
                ...state,
                updateCartItem: action.payload,
                change: !state.change,
            }
        case APPLY_COUPON:
            // if(action.payload.status==='success')
            return {
                ...state,
                applyCoupon: action.payload,
                // getAllUserCart: action.payload.status==='success' ? action.payload.data : state.getAllUserCart,
                change: !state.change,
            }
        case DELETE_ITEM_FROM_CART:
            return {
                ...state,
                deleteItemFromCart: action.payload,
                change: !state.change,
            }
        case LOGOUT_USER_CART:
            return {
                addToCart:[],
                getAllUserCart:[],
                error:[],
                change:!state.change,
            }
        case CART_ERROR:
            return {
                ...state,
                error: action.payload,
                applyCoupon:[],

            }
        default:
            return state
    }
}

export default cartReducer