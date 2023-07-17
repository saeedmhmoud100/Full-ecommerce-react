import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToWishList, deleteFromWishList, getAllWishList} from "../../Redux/actions/wishListAction";

const ProductCardHook= product =>{
    const dispatch = useDispatch()
    const [isFav,setIsFave] = useState(false)

    const allWishList = useSelector(state => state.wishList.wishList)


    const checkInWishList = (productID,wishList) =>{
        ///// 1
        // wishList.forEach(prodID => {
        //     if(prodID._id === productID)
        //         setIsFave(true)
        // })
        ///// 2
        // if(prodID &&wishList && allWishList.indexOf(product._id) !==-1){
        //         setIsFave(true)
        //}
        ///// 3
        setIsFave(wishList.some(prodID => prodID._id === productID))
    }

    useEffect(_=>{
        checkInWishList(product._id,allWishList)
    },[allWishList])


    useEffect(_=>{
        const run =async _=>{
            await dispatch(getAllWishList())
        }
        run()
    },[])





    const deleteProductFromWishList = async id=>{
        await dispatch(deleteFromWishList(id))
        setIsFave(false)
    }
    const addProductToWishList = async id=>{
        await dispatch(addToWishList({productId:id}))
        setIsFave(true)
    }


    return [isFav,deleteProductFromWishList,addProductToWishList]
}

export default ProductCardHook