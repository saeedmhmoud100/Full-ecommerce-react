import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getSubCategoryByCategory} from "../../Redux/actions/subCategoryAction";


const SubCategoriesContainer = _=>{
    const dispatch = useDispatch()
    const [categories,setCategories] = useState([])
    const [currCategory,setCurrCategory] = useState('')
    const [subCategories,setSubCategories] = useState([])
    const [allData,setAllData] = useState({})

    const CategoriesData = useSelector(state => state.allCategory.category)
    let subCategoriesData = useSelector(state => state.allSubCategory.subCategory)
    let subChange = useSelector(state => state.allSubCategory.change)


    // load all categories
    useEffect(_=>{
            const run =async _=>{
                await dispatch(getAllCategory())
            }
            run()
        }
        ,[subChange])

    // set all categories
    useEffect(_=>{
            if(CategoriesData && CategoriesData.data && CategoriesData.data.length>0)
                setCategories(CategoriesData.data)
        }
        ,[CategoriesData])

    // set all categories
    useEffect(_=>{
            if(CategoriesData && CategoriesData.data && CategoriesData.data.length>0)
                setCategories(CategoriesData.data)
        }
        ,[CategoriesData])

    // load subCategories
    useEffect(_=>{
            const run =async item=>{
                await dispatch(getSubCategoryByCategory(item._id))
                setCurrCategory(item)
            }
            if(categories && categories.length > 0)
                categories.map(async item =>{

                    await run(item)
                })
        }
        ,[categories])

    // set subCategories
    useEffect(_=>{
            if(subCategoriesData && subCategoriesData.data && subCategoriesData.data.length >0 && subCategoriesData !==subCategories)
                setSubCategories(subCategoriesData.data)
        }
        ,[subCategoriesData])

    // set subCategories
    useEffect(_=>{
            if(subCategories&&subCategories.length>0){
                setAllData({...allData,[currCategory.name]:subCategories})
            }
            // console.log(allData)
            // console.log("-----------------"+currCategory.name+"-----------------")
            // console.log(subCategories)
        }
        ,[subCategories])

    return [allData]
}

export default SubCategoriesContainer