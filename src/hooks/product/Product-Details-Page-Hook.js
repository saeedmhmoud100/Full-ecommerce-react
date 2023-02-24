import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOneProduct} from "../../Redux/actions/productAction";

const ProductDetailsPageHook = _ =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getOneProduct(id))
    },[])
    const product = useSelector(state => state.allProduct.product)

    return [product]
}
export default ProductDetailsPageHook