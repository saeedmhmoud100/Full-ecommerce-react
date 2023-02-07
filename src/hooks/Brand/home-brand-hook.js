import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllBrand} from "../../Redux/actions/brandAction";

const HomeBrandHook = () => {
    const dispatch = useDispatch()
    useEffect(_=>{
        dispatch(getAllBrand())
    },[])

    const BrandData = useSelector(state => state.allBrand.brands)
    const loading = useSelector(state => state.allBrand.loading)
    let BrandDataLength = 0
    if(BrandData.data !== undefined){
        BrandDataLength = BrandData.data.length
    }
    console.log(BrandDataLength)
    return [BrandData,loading,BrandDataLength]
}

export default HomeBrandHook