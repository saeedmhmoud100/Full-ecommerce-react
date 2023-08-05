import {
    CREATE_CASH_ORDER, ORDER_ERROR
} from "../types";

const inital={
    createOrder:[],
    change:false,
    error:[],
}

const checkoutReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_CASH_ORDER:
            return {
                ...state,
                createOrder: action.payload,
                change: !state.change,
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
export default checkoutReducer;