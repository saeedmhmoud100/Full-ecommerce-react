import {ADD_TO_CART,CART_ERROR} from "../types";


const inital={
    addToCart:[],
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

        case CART_ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }
}

export default cartReducer