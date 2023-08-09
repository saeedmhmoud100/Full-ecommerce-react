import {useDispatch} from "react-redux";
import {deleteProduct, getAllProducts} from "../../Redux/actions/productAction";
import { useState} from "react";

const AdminAllProductsCardHook= _ =>{
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onDeleteProduct = async id =>{
        setDeleteLoading(true);
        await dispatch(deleteProduct(id))
        handleClose()
        setDeleteLoading(false);
        await dispatch(getAllProducts())
    }

    return [onDeleteProduct,show,handleShow,handleClose,deleteLoading]
}

export default AdminAllProductsCardHook