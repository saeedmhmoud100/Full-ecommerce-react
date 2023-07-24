import {UPDATE_USER_DATA, USER_DATA_ERROR} from "../types";

const inital={
    updateData:[],
    change:false,
    error:[],
}

const userDataReducer = (state=inital,action) => {
    switch (action.type) {
        case UPDATE_USER_DATA:
            return {
                ...state,
                updateData: action.payload,
                change:!state.change
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
export default userDataReducer;