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
    const [success,setSuccess]= useState(true)
    const user = useSelector(state => state.auth.getUserData.data)
    const onSubmit =async _=>{
        setLoading(true)
        await dispatch(createReview(id,{review,rating:rate}))
        setLoading(false)
        setSuccess(true)
    }
    const newReview = useSelector(state =>state.review.createReview)

    useEffect(_=>{
            if(!loading && success){
                if(newReview.data){
                    Notification('the review added successfully','success')
                }else if(newReview.response && newReview.response.data && newReview.response.data.errors){
                    newReview.response.data.errors.forEach(item =>{
                        Notification(item.msg,'warning')
                    })
                    setSuccess(false)
                }else if(newReview.response && newReview.response.data && newReview.response.data.message){
                    Notification(newReview.response.data.message,'warning')
                    setSuccess(false)
                }

            }
                    console.log(newReview)
        },[loading])

    return [user,review,loading,setReview,setRate,onSubmit]
}

export default AddRateHook