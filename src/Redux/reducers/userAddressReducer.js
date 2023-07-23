import {CREATE_ADDRESS, ADDRESS_ERROR} from "../types";

const inital={
    createAddress:[],
    error:[],
    change:false,
}

const addressReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_ADDRESS:
            return {
                ...state,
                createAddress: action.payload,
                change: !state.change,
            }
            case ADDRESS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
                return state
    }
}
export default addressReducer;