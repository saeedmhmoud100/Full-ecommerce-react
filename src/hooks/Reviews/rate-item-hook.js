import {useState} from 'react'
import {useDispatch} from "react-redux";
import {DeleteReview, getAllReviewsOnProduct} from "../../Redux/actions/reviewAction";

const RateItemHook = (productID) => {
    const dispatch = useDispatch()
    const [deleteLoading,setDeleteLoading]= useState(false)

    const deleteReview =async reviewID=>{
        setDeleteLoading(true)
        await DeleteReview(reviewID)
        await dispatch(getAllReviewsOnProduct(productID,1))
        setDeleteLoading(false)
    }

    return [deleteReview,deleteLoading]
}

export default RateItemHook