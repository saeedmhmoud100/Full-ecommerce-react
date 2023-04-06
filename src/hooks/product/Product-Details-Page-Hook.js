import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useLayoutEffect} from "react";
import {getOneProduct, getSpecificProducts} from "../../Redux/actions/productAction";
import mobile from "../../Assets/images/mobile.png";

const ProductDetailsPageHook = _ =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.allProduct.product)
    let specificProducts = useSelector(state => state.allProduct.specificProducts)

    // product text details
    useLayoutEffect( _=> {
        dispatch(getOneProduct(id))
    },[id])

    useEffect( _=> {
        if(product && product.data)
            dispatch(getSpecificProducts(product.data.category))
    },[product])

    if(specificProducts && specificProducts.data && product.data){
        specificProducts=specificProducts.data.filter(item => item._id!==product.data._id)
    }//Product Gallery
    let images = [{original:mobile}]
    if(product && product.data){
        images = product.data.images.map(img => ({original:img}))
    }

    return [product,images,specificProducts]
}
export default ProductDetailsPageHook