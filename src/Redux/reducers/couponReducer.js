import {CREATE_COUPON, COUPON_ERROR, GET_ALL_COUPONS, DELETE_COUPONS} from "../types";

const inital={
    createCoupon:[],
    deleteCoupon:[],
    allCoupons:[],
    change:false,
}

const couponReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_COUPONS:
            return {
                ...state,
                allCoupons: action.payload,
            }
        case CREATE_COUPON:
            return {
                ...state,
                createCoupon: action.payload,
                change: !state.change,
            }
        case DELETE_COUPONS:
            return {
                ...state,
                deleteCoupon: action.payload,
                change: !state.change,
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