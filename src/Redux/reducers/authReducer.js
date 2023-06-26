import {CREATE_NEW_USER, LOGIN_USER,GET_USER_DATA} from "../types";

const inital={
    createUser:[],
    loginUser:[],
    getUserData: {data: {name: 'anonymous'}},
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
                getUserData: action.payload.data,
            }
        default:
                return state
    }
}
export default authReducer;