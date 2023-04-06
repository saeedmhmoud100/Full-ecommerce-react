import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOneProduct, getSpecificProducts} from "../../Redux/actions/productAction";
import mobile from "../../Assets/images/mobile.png";
import {getOneCategory} from "../../Redux/actions/categoryAction";
import {getOneBrand} from "../../Redux/actions/brandAction";

const ProductDetailsPageHook = _ =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.allProduct.product)
    let specificProducts = useSelector(state => state.allProduct.specificProducts)

    const GetOneProduct = async _=>{
        await dispatch(getOneProduct(id));
    }

    // product text details
    useEffect( _=> {
        GetOneProduct()
        if(product && product.data) {
            if(product) {
            dispatch(getSpecificProducts(product.data.category))
            dispatch(getOneCategory(product.data.category))
            dispatch(getOneBrand(product.data.brand))
            }
        }
    },[product,id])


    if(specificProducts && specificProducts.data && product.data){
        specificProducts=specificProducts.data.filter(item => item._id!==product.data._id)
    }else{
        specificProducts=[];
    }//Product Gallery
    let images = []
    if(product && product.data){
        images = product.data.images.map(img => ({original:img}))
    }else
        images = [{original:mobile}]

    return [product,images,specificProducts]
}
export default ProductDetailsPageHook