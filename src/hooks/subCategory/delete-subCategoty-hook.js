import {useDispatch} from "react-redux";
import {useState} from "react";
import {deleteSubCategory} from "../../Redux/actions/subCategoryAction";


const DeleteSubCategoriesHook = _=>{
    const dispatch = useDispatch()
    const [deleteLoading,setDeleteLoading] = useState(false)
    const handleDeleteClick = async ID=>{
            setDeleteLoading(true)
            await dispatch(deleteSubCategory(ID))
            setDeleteLoading(false)
    }

    return [deleteLoading,handleDeleteClick]
}

export default DeleteSubCategoriesHook