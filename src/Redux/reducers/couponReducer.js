import {CREATE_COUPON,COUPON_ERROR,GET_ALL_COUPONS} from "../types";

const inital={
    createCoupon:[],
    allCoupons:[],
    change:false,
}

const couponReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_COUPON:
            return {
                ...state,
                createCoupon: action.payload,
                change: !state.change,
            }
        case GET_ALL_COUPONS:
            return {
                ...state,
                allCoupons: action.payload,
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