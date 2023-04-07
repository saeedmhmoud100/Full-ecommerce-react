import {useDispatch} from "react-redux";
import {deleteProduct, getAllProducts} from "../../Redux/actions/productAction";
import {useState} from "react";

const AdminAllProductsCardHook= _ =>{
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onDeleteProduct = async id =>{
        setShow(true);
        await dispatch(deleteProduct(id))
        await dispatch(getAllProducts())
        setShow(false);
    }

    return [onDeleteProduct,show,handleShow,handleClose]
}

export default AdminAllProductsCardHook