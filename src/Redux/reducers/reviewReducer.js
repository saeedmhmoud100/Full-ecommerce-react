import {CREATE_REVIEW,GET_REVIEW_ERROR} from "../types";
import {Notification} from "../../hooks/useNotification";


const inital={
    createReview:[],
}

const reviewReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                createReview: action.payload,
            }
        case GET_REVIEW_ERROR:
            Notification(action.payload,'error')
            return {
                createReview: action.payload
            }
        default:
            return state
    }
}

export default reviewReducer