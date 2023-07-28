import {ADD_TO_CART, CART_ERROR, CLEAR_ALL_USER_CART, GET_ALL_USER_CART} from "../types";


const inital={
    addToCart:[],
    getAllUserCart:[],
    clearAllUserCart:[],
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
                change: !state.change,
            }
        case CART_ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }
}

export default cartReducer