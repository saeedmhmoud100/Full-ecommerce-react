import {
    CREATE_NEW_USER,
    LOGIN_USER,
    GET_USER_DATA,
    LOGOUT,
    FORGET_PASSWORD,
    VERIFY_RESET_CODE,
    RESET_PASSWORD
} from "../types";

const inital={
    createUser:[],
    loginUser:[],
    getUserData: {data: {name: 'Anonymous User'}},
    forgetPassword:[],
    verifyResetCode:[],
    resetPassword:[],
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
            case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }
        default:
                return state
    }
}
export default authReducer;