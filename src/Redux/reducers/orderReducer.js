import {GET_ALL_USER_ORDER,ORDER_ERROR} from "../types";

const inital={
    allOrders:[],
    change:false,
    error:[],
}

const orderReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_USER_ORDER:
            return {
                ...state,
                allOrders: action.payload,
            }
            case ORDER_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
                return state
    }
}
export default orderReducer;