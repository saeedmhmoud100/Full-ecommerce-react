import {useEffect, useState} from 'react'
import '../../Assets/Style/Products.scss'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getAllUserCart} from "../../Redux/actions/cartAction";
import {Notification} from "../useNotification";
const AddToCartHook = (product) => {
    const dispatch = useDispatch()
    const [selectedColor,setSelectedColor] = useState({hasColors:false,color:''})
    const [addToCartLoading,setAddToCartLoading] = useState(false)

    useEffect(_=>{
        if(product && product.availableColors && product.availableColors.length>0){
            setSelectedColor({hasColors: true,color:''})
        }
        else
            setSelectedColor({hasColors: false,color:''})

    },[product])

    const handleAddToCartClick =async _=>{
        setAddToCartLoading(true)
        if(selectedColor.hasColors && !selectedColor.color)
            Notification('please select a color','warning')
        else{
            await dispatch(addToCart({
                productId:product._id,
                color:selectedColor.color,
            }))
        }
        setAddToCartLoading(false)
    }

    const addToCartRes = useSelector(state => state.cart.addToCart)

    useEffect(_=>{
        dispatch(getAllUserCart())
    },[addToCartRes])


    return [selectedColor,addToCartLoading,setSelectedColor,handleAddToCartClick]
}

export default AddToCartHook