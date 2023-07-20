import {CREATE_COUPON,COUPON_ERROR} from "../types";

const inital={
    createCoupon:[],
}

const couponReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_COUPON:
            return {
                ...state,
                createCoupon: action.payload,
            }
            case COUPON_ERROR:
            return {
                ...state,
                createCoupon: action.payload,
            }
        default:
                return state
    }
}
export default couponReducer;