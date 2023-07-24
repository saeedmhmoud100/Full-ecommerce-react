import {
    CREATE_NEW_USER,
    LOGIN_USER,
    GET_USER_DATA,
    LOGOUT,
    FORGET_PASSWORD,
    VERIFY_RESET_CODE,
    RESET_PASSWORD, UPDATE_USER_DATA, UPDATE_USER_PASSWORD, USER_DATA_ERROR
} from "../types";

const inital={
    createUser:[],
    loginUser:[],
    getUserData: {data: {name: 'Anonymous User'}},
    forgetPassword:[],
    verifyResetCode:[],
    resetPassword:[],
    updateData:[],
    updatePassword:[],
    change:false,
    error:[],

}

const authReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }
            case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
                getUserData:action.payload
            }
            case GET_USER_DATA:
            return {
                ...state,
                getUserData: action.payload,
            }
            case LOGOUT:
            return {
                ...state,
                loginUser: [],
                getUserData: {data: {name: 'anonymous'}},
                updatePassword:[]
            }
            case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
            case VERIFY_RESET_CODE:
            return {
                ...state,
                verifyResetCode: action.payload,
            }
            case UPDATE_USER_DATA:
            return {
                ...state,
                updateData: action.payload,
                change:!state.change
            }
            case UPDATE_USER_PASSWORD:
                return {
                    ...state,
                    updatePassword:action.payload,
                    change:!state.change
                }
            case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }
            case USER_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
                return state
    }
}
export default authReducer;