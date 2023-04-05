import {useDispatch} from "react-redux";
import {deleteProduct, getAllProducts} from "../../Redux/actions/productAction";

const AdminAllProductsCardHook= _ =>{
    const dispatch = useDispatch()
    const onDeleteProduct = id =>{
        dispatch(deleteProduct(id))
        dispatch(getAllProducts())
    }

    return [onDeleteProduct]
}

export default AdminAllProductsCardHook