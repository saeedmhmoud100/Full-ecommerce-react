import {useState} from 'react'
import {useDispatch} from "react-redux";
import {DeleteReview, getAllReviewsOnProduct} from "../../Redux/actions/reviewAction";
const DeleteRateHook = (prodID) => {
    const dispatch = useDispatch()

    // delete the review
    const [deleteLoading,setDeleteLoading]= useState(false)

    const deleteReview =async reviewID=>{
        setDeleteLoading(true)
        await DeleteReview(reviewID)
        await dispatch(getAllReviewsOnProduct(prodID,1))
        setDeleteLoading(false)
    }





    return [deleteReview,deleteLoading]
}

export default DeleteRateHook