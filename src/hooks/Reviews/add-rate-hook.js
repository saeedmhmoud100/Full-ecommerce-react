import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {createReview, getAllReviewsOnProduct} from "../../Redux/actions/reviewAction";
import {Notification} from "../useNotification";

const AddRateHook = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [review,setReview]= useState('')
    const [rate,setRate]= useState(1)
    const [loading,setLoading]= useState(false)
    const [success,setSuccess]= useState(false)
    const user = useSelector(state => state.auth.getUserData.data)
    const newReview = useSelector(state =>state.review.createReview)
    const onSubmit =async _=>{
        if(rate <1 )
            Notification('the rate should be more than 1','error')
        else if(!review)
            Notification('Enter your review','error')
        else{
        setLoading(true)
        await dispatch(createReview(id,{review,rating:rate}))
        setLoading(false)
        setSuccess(true)
        }
    }

    useEffect(_=>{
        const run = async _=>{
            await dispatch(getAllReviewsOnProduct(id,1))
        }
        if(!loading && newReview && success){
            if(newReview.data &&  newReview.data.review ){
                Notification('the review added successfully','success')
                run()
                setReview('')
                setRate(1)
            }
        setSuccess(false)
        }
    },[loading])

    return [user,review,loading,setReview,setRate,onSubmit]
}

export default AddRateHook