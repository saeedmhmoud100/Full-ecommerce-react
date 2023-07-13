import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {createReview} from "../../Redux/actions/reviewAction";
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
            if(!loading && newReview && success){
                if(newReview.data){
                    Notification('the review added successfully','success')
                    setReview('')
                    setRate(1)
                }else if(newReview.response && newReview.response.data && newReview.response.data.errors){
                    newReview.response.data.errors.forEach(item =>{
                        Notification(item.msg,'warning')
                    })
                }else if(newReview.response && newReview.response.data && newReview.response.data.message){
                    Notification(newReview.response.data.message,'warning')
                }
            setSuccess(false)
            }
        },[loading,success,newReview])

    return [user,review,loading,setReview,setRate,onSubmit]
}

export default AddRateHook