import {WISHLIST_ERROR,ADD_TO_WISHLIST} from "../types";

const inital={
    wishList:[],
    error:[]
}

const wishListReducer = (state=inital,action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishList: action.payload,
            }
        case WISHLIST_ERROR:
            // Notification(action.payload,'error')
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}

export default wishListReducer