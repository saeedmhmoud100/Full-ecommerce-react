import {CREATE_NEW_USER} from "../types";

const inital={
    createUser:[],
    loading:true,
}

const authReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
                loading: false,
            }
        default:
                return state
    }
}
export default authReducer;