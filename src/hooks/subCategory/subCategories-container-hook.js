import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import BaseURL from "../../Api/baseURL";


const SubCategoriesContainerHook = _=>{
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const [allData,setAllData] = useState({})

    const CategoriesData = useSelector(state => state.allCategory.category)
    let subChange = useSelector(state => state.allSubCategory.change)


    // load all categories
    useEffect(_=>{
            const run =async _=>{
                // setCategories([])
                // setCurrCategory('')
                // setSubCategories([])
                // setAllData({})
                await dispatch(getAllCategory())
            }
            run()
        }
        ,[subChange])

    // load subCategories
    useEffect(_=>{
            const run =async _=>{
                let dic = {};
                CategoriesData.data.map(async item =>{
                    setLoading(true)
                    const res =await BaseURL.get(`/api/v1/categories/${item._id}/subcategories`)
                        .then(res => res.status === 200 ? res.data : 0 )
                    if(res.results>0){
                        dic={...dic,[item.name]:res.data}
                        setAllData(dic)

                    }
                    setLoading(false)
                    return dic
                })
            }
            if(CategoriesData && CategoriesData.data && CategoriesData.data.length>0)
            run()
        }
        ,[CategoriesData])

    return [allData,loading]
}

export default SubCategoriesContainerHook