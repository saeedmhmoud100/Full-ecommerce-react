import {CREATE_COUPON, COUPON_ERROR, GET_ALL_COUPONS, DELETE_COUPONS, UPDATE_COUPONS} from "../types";

const inital={
    createCoupon:[],
    deleteCoupon:[],
    updateCoupon:[],
    allCoupons:[],
    change:false,
    error:[],
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
        case UPDATE_COUPONS:
            return {
                ...state,
                updateCoupon: action.payload,
                change: !state.change,
            }
            case COUPON_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
                return state
    }
}
export default couponReducer;