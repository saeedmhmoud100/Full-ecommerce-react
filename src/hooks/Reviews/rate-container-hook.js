import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllReviewsOnProduct} from "../../Redux/actions/reviewAction";
import {useParams} from "react-router-dom";

const RateContainerHook = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const reviewsOfProduct = useSelector(state => state.review.allReviewsOnProduct)
    const createReview = useSelector(state => state.review.createReview)
    const user = useSelector(state => state.auth.getUserData.data)
    const [page,setPage] = useState(1)

    useEffect(_=>{
        // console.log(page)
        const run = async _ =>{
            await dispatch(getAllReviewsOnProduct(id,1))
        }
        run()
    },[id])

    const getPage = async page =>{
        await dispatch(getAllReviewsOnProduct(id,page))
        setPage(page)
    }

    useEffect(_=>{
        if(createReview&& createReview.data){
            setPage(1)
        }
    },[reviewsOfProduct,id])

    // console.log(product && product._id)
    return [reviewsOfProduct,user,getPage]
}

export default RateContainerHook