import {
    CHANGE_ORDER_TO_DELIVERED,
    CHANGE_ORDER_TO_PAID,
    GET_ALL_USER_ORDER,
    GET_ORDER_DETAILS,
    ORDER_ERROR
} from "../types";

const inital={
    allOrders:[],
    oneOrderDetails:[],
    res:[],
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
        case GET_ORDER_DETAILS:
            return {
                ...state,
                oneOrderDetails: action.payload,
            }
        case CHANGE_ORDER_TO_PAID:
            return {
                ...state,
                res: action.payload,
                change:!state.change
            }
        case CHANGE_ORDER_TO_DELIVERED:
            return {
                ...state,
                res: action.payload,
                change:!state.change
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