import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOneProduct} from "../../Redux/actions/productAction";
import mobile from "../../Assets/images/mobile.png";
import {getOneCategory} from "../../Redux/actions/categoryAction";
import {getOneBrand} from "../../Redux/actions/brandAction";

const ProductDetailsPageHook = _ =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getOneProduct(id))
    },[])

    const product = useSelector(state => state.allProduct.product)

    // product text details
    useEffect(_=>{
        console.log(product)
        if(product.data) {
            dispatch(getOneCategory(product.data.category))
            dispatch(getOneBrand(product.data.brand))
        }
    },[product])


    //Product Gallery
    let images = []
    if(product.data){
        images = product.data.images.map(img => ({original:img}))
    }else
        images = [{original:mobile}]


    return [product,images]
}
export default ProductDetailsPageHook