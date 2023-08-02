import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY_ERROR,GET_ONE_CATEGORY} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    category:[],
    loading:true,
    oneCategory:{},
    chage:false,
}

const categoryReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case GET_ONE_CATEGORY:
            return {
                ...state,
                oneCategory: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            Notification('Category added successfully','success')
            return {
                ...state,
                oneCategory: action.payload,
                loading: false,
                chage:!state.chage
            }
        case GET_CATEGORY_ERROR:
            // Notification('Enter a valid data','error')
            return {
            ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default categoryReducer