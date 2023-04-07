import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {useEffect, useState} from "react";
import {Notification} from "../useNotification";
import {createSubCategory} from "../../Redux/actions/subCategoryAction";

const AdminAddSubCategoryHook = _ =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllCategory())
    },[])


    const categoryData = useSelector(state => state.allCategory.category)
    // const subCategoryData = useSelector(state => state.allSubCategory.subCategory)
    // const loading = useSelector(state => state.allCategory.loading)
    const [nameVal,setNameVal] = useState('')
    const [selectVal,setSelectVal] = useState('0')
    const [submitLoading,setSubmitLoading] = useState(false)
    const subcategory = useSelector(state => state.allSubCategory.subCategory)

    const onNameChange = e =>{
        setNameVal(e.target.value)
    }

    const onSelectChange = e =>{
        setSelectVal(e.target.value)
    }


    const onSubmit = async _ =>{
        console.log(subcategory)
        if(nameVal !=='' && selectVal !== '0' ){

            setSubmitLoading(true)
            await dispatch(createSubCategory({name:nameVal,category:selectVal}))
            setSubmitLoading(false)
            setNameVal('')
            setSelectVal('0')

        }else {
            Notification('Enter a valid data!!!','warning')
        }
    }


    return [categoryData,nameVal,submitLoading,onNameChange,onSelectChange,onSubmit]
}

export default AdminAddSubCategoryHook