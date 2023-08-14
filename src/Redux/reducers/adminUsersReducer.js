import {GET_ALL_USERS,ADMIN_USERS_ERROR} from "../types";

const inital={
    allUsers:[],
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