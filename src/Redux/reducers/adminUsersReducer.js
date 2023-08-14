import {GET_ALL_USERS, ADMIN_USERS_ERROR, CHANGE_USER_ROLE, DELETE_USER} from "../types";

const inital={
    allUsers:[],
    res:[],
    change:false,
    error:[],
}

const adminUsersReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload,
            }
        case CHANGE_USER_ROLE:
            return {
                ...state,
                res:action.payload,
                change: !state.change,
            }
        case DELETE_USER:
            return {
                ...state,
                res:action.payload,
                change: !state.change,
            }
            case ADMIN_USERS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
                return state
    }
}
export default adminUsersReducer;