import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";

const HomeCategoryHook = () => {
    const dispatch = useDispatch()
    const colors = ["#F4DBA4","#F4DBA4","#0034FF","#F4DBA4","#FF6262","#F4DBA4"]
    useEffect(_=>{
        dispatch(getAllCategory())
    },[])

    const categoryData = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)

    return [colors,categoryData,loading]
}

export default HomeCategoryHook