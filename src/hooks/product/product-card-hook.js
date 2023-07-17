import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToWishList, deleteFromWishList, getAllWishList} from "../../Redux/actions/wishListAction";

const ProductCardHook= _ =>{
    const dispatch = useDispatch()
    const [isFav,setIsFave] = useState(false)

    const res = useSelector(state => state.wishList.res)

    const deleteProductFromWishList = async id=>{
        await dispatch(deleteFromWishList(id))
        setIsFave(false)
        await dispatch(getAllWishList())
        console.log(res)
    }
    const addProductToWishList = async id=>{
        await dispatch(addToWishList({productId:id}))
        setIsFave(true)
        console.log(res)
    }


    return [isFav,deleteProductFromWishList,addProductToWishList]
}

export default ProductCardHook