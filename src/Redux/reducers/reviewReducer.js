import {CREATE_REVIEW, GET_ALL_REVIEWS_ON_PRODUCT,UPDATE_REVIEW, GET_REVIEW_ERROR} from "../types";

const inital={
    createReview:[],
    allReviewsOnProduct:[],
    updateReview:[],
    error:[]
}

const reviewReducer = (state=inital,action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                createReview: action.payload,
            }
        case GET_ALL_REVIEWS_ON_PRODUCT:
            return {
                ...state,
                allReviewsOnProduct: action.payload,
            }
        case UPDATE_REVIEW:
            return {
                ...state,
                updateReview: action.payload,
            }
        case GET_REVIEW_ERROR:
            // Notification(action.payload,'error')
            return {
                ...state,
                error: action.payload,
                createReview: [],
            }
        default:
            return state
    }
}

export default reviewReducer