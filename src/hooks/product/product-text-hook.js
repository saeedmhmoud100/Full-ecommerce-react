import {useEffect, useState} from 'react'
import '../../Assets/Style/Products.scss'
import {useSelector} from "react-redux";
import {getSubCategoriesNameByProduct} from "../../Redux/actions/subCategoryAction";

const ProductTextHook = (product) => {

    const category = useSelector(state => state.allCategory.oneCategory ? state.allCategory.oneCategory.data:[])
    const brand = useSelector(state => state.allBrand.brand)

    const [subCatsNames,setSubCatsNames] = useState([])

    useEffect(_=>{

            const run = async _=>{
                const res = await getSubCategoriesNameByProduct(product.subcategory)
                setSubCatsNames(res)
            }
        if(product && product.subcategory&& product.subcategory.length>0){
            run()
        }
    },[product])


    return [category,brand,subCatsNames]
}

export default ProductTextHook