import {ADD_TO_CART, CART_ERROR, GET_ALL_USER_CART} from "../types";


const inital={
    addToCart:[],
    getAllUserCart:[],
    error:[],
    change:false,
}

const cartReducer = (state=inital,action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addToCart: action.payload,
                change: !state.change,
            }
        case GET_ALL_USER_CART:
            return {
                ...state,
                getAllUserCart: action.payload,
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