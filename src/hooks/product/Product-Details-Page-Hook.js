import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useLayoutEffect, useState} from "react";
import {getOneProduct, getSpecificProducts} from "../../Redux/actions/productAction";
import {getOneBrand} from "../../Redux/actions/brandAction";
import {getOneCategory} from "../../Redux/actions/categoryAction";
const ProductDetailsPageHook = _ =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.allProduct.product)
    const specificProducts = useSelector(state => (state.allProduct.specificProducts && state.allProduct.specificProducts.data &&state.allProduct.specificProducts.data.filter(item => item._id!==product.data._id)) || [] )

    const createdReview = useSelector(state => state.review)
    const [loading,setLoading] = useState(false)
    const [specificLoading,setSpecificLoading] = useState(false)

    // product text details
    useLayoutEffect( _=> {
        const run =async _=>{
        setLoading(true)
        await dispatch(getOneProduct(id))
        setSpecificLoading(true)
        }
        run()
    },[id,createdReview])


    useEffect( _=> {
        const run =async _=>{
            await dispatch(getOneBrand(product.data.brand))
            await dispatch(getOneCategory(product.data.category))
            setLoading(false)
            await dispatch(getSpecificProducts(product.data.category))
            setSpecificLoading(false)
        }
        if(product && product.data){
            run()

        }
    },[product])
    //
    // if(specificProducts && specificProducts.data && product.data){
    //     specificProducts=specificProducts.data.filter(item => item._id!==product.data._id)
    // }//Product Gallery
    let images = [{original:"https://placehold.co/300x460/ffffff/ffffff"}]
    if(product && product.data){
        images = product.data.images.map(img => ({original:img,thumbnail:img}))
    }

    return [product,images,specificProducts,loading,specificLoading]
}
export default ProductDetailsPageHook