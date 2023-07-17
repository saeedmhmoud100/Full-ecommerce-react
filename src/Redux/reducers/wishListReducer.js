import {WISHLIST_ERROR,ADD_TO_WISHLIST,GET_ALL_WISHLIST,DELETE_FROM_WISHLIST} from "../types";

const inital={
    wishList:[],
    res:[],
    error:[]
}

const wishListReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_WISHLIST:
            return {
                ...state,
                wishList: action.payload.data,
            }
        case ADD_TO_WISHLIST:
            return {
                ...state,
                res: action.payload,
            }
            case DELETE_FROM_WISHLIST:
            return {
                ...state,
                res: action.payload,
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