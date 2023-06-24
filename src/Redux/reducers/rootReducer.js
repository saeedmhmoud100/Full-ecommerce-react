import {combineReducers} from "redux";
import categoryReducer from './categoryReducer'
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
export default combineReducers({
    allCategory:categoryReducer,
    allSubCategory:subCategoryReducer,
    allBrand:brandReducer,
    allProduct:productReducer,
    auth:authReducer,
})