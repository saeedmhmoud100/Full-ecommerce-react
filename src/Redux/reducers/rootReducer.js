import {combineReducers} from "redux";
import categoryReducer from './categoryReducer'
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import addressReducer from "./userAddressReducer";
import userDataReducer from "./userDataReducer";
export default combineReducers({
    allCategory:categoryReducer,
    allSubCategory:subCategoryReducer,
    allBrand:brandReducer,
    allProduct:productReducer,
    auth:authReducer,
    review:reviewReducer,
    wishList:wishListReducer,
    coupon:couponReducer,
    address:addressReducer,
    userData:userDataReducer,
})