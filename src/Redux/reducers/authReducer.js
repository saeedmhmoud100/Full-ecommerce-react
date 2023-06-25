import {CREATE_NEW_USER, LOGIN_USER} from "../types";

const inital={
    createUser:[],
    loginUser:[],
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
            }
        default:
                return state
    }
}
export default authReducer;