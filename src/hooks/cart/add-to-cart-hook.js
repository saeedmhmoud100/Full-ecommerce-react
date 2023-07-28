import {useEffect, useState} from 'react'
import '../../Assets/Style/Products.scss'
import {useDispatch} from "react-redux";
import {addToCart} from "../../Redux/actions/cartAction";

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
        await dispatch(addToCart({
            productId:product._id,
            color:selectedColor.color,
        }))
        setAddToCartLoading(false)
    }

    return [selectedColor,addToCartLoading,setSelectedColor,handleAddToCartClick]
}

export default AddToCartHook