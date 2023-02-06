import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    category:[],
    loading:true,
}

const categoryReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            Notification('Category added successfully','success')
            return {
                category: action.payload,
                loading: false,
            }
        case GET_ERROR:
            Notification('Enter a valid data','error')
            console.log(action.payload.response.data.message)
            return {
                loading: true,
                category: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer