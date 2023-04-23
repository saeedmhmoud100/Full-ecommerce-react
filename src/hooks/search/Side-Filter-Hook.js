import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getAllBrand} from "../../Redux/actions/brandAction";

const SideFilterHook =_ =>{
    const dispatch = useDispatch()
    useEffect(_=>{
        const run =async _=>{
            await dispatch(getAllCategory())
            await dispatch(getAllBrand())
        }
        run()
    },[])

    const allCat = useSelector(state => state.allCategory.category) || []
    const allBrand = useSelector(state => state.allBrand.brands)||[]
    console.log(allCat)

    return [allCat,allBrand]
}

export default SideFilterHook