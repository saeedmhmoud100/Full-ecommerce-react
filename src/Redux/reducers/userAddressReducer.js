import {CREATE_ADDRESS, ADDRESS_ERROR, GET_ALL_ADDRESS, DELETE_ADDRESS} from "../types";

const inital={
    AllAddresses:[],
    createAddress:[],
    error:[],
    change:false,
}

const addressReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_ADDRESS:
            return {
                ...state,
                AllAddresses: action.payload,
            }
        case CREATE_ADDRESS:
            return {
                ...state,
                createAddress: action.payload,
                change: !state.change,
            }
        case DELETE_ADDRESS:
            return {
                ...state,
                deleteAddress: action.payload,
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