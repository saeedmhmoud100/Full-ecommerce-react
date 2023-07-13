import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllReviewsOnProduct} from "../../Redux/actions/reviewAction";
import {useParams} from "react-router-dom";

const RateContainerHook = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [loading,setLoading]= useState(false)
    const reviewsOfProduct = useSelector(state => state.review.allReviewsOnProduct)

    useEffect(_=>{
        return async _ =>{
            setLoading(true)
            await dispatch(getAllReviewsOnProduct(id,1))
            setLoading(false)
        }
    },[id])

    const getPage = async page =>{
        await dispatch(getAllReviewsOnProduct(id,page))
    }

    // console.log(product && product._id)
    return [reviewsOfProduct,getPage]
}

export default RateContainerHook