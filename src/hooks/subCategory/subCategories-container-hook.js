import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getAllSubCategory, getSubCategoryByCategory} from "../../Redux/actions/subCategoryAction";
import BaseURL from "../../Api/baseURL";


const SubCategoriesContainer = _=>{
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const [allData,setAllData] = useState({})

    const CategoriesData = useSelector(state => state.allCategory.category)
    let subChange = useSelector(state => state.allSubCategory.change)
    let subDelete = useSelector(state => state.allSubCategory.deleteSubCat)
    let allSubCategories = useSelector(state => state.allSubCategory.allSubCategory)


    // load all categories
    useEffect(_=>{
            const run =async _=>{
                // setCategories([])
                // setCurrCategory('')
                // setSubCategories([])
                // console.log(allData)
                // if(subDelete)
                // setAllData({})
                await dispatch(getAllSubCategory())
                await dispatch(getAllCategory())
            }
            run()
        }
        ,[subChange])

    const [dic,setDic] = useState([])
    const getAllCategoriesAndSubCategories =async (categories)  => {    // catIDs == subCategories ids
        // let dic = [];
        await categories.map(async item =>{
            const res = await BaseURL.get(`/api/v1/categories/${item._id}/subcategories`)
                .then(res => res.data).then(res => res.data)
            const newItem = dic
            if(res.length > 0){
                newItem[item.name]=res
                // console.log(newItem)

            }else {
                delete newItem[item.name];
            }
                setDic(newItem)
            return dic
        })
        // console.log(allData !== dic)
        if(allData !== dic && Array.from(Object.keys(dic)).length > 0)
        setAllData(dic)
        return dic
    }


    // set all categories
    useEffect(_=>{
            if(CategoriesData && CategoriesData.data && CategoriesData.data.length>0){
                getAllCategoriesAndSubCategories(CategoriesData.data)
            }else {
                setAllData({})
                setDic({})
            }

        }
        ,[CategoriesData,subChange])






    /////////////////// first method to get data ///////////////////////////
    // let subCategoriesData = useSelector(state => state.allSubCategory.subCategory)
    // const [categories,setCategories] = useState([])
    // const [currCategory,setCurrCategory] = useState('')
    // const [subCategories,setSubCategories] = useState([])
    //
    //
    // // set all categories
    // useEffect(_=>{
    //         if(CategoriesData && CategoriesData.data && CategoriesData.data.length>0)
    //             setCategories(CategoriesData.data)
    //     }
    //     ,[CategoriesData])
    //
    // // set all categories
    // useEffect(_=>{
    //         if(CategoriesData && CategoriesData.data && CategoriesData.data.length>0){
    //             setCategories(CategoriesData.data)
    //         }
    //     }
    //     ,[CategoriesData])
    //
    // // load subCategories
    // useEffect(_=>{
    //         const run =async item=>{
    //
    //             await dispatch(getSubCategoryByCategory(item._id))
    //             setCurrCategory(item)
    //         }
    //         if(categories && categories.length > 0)
    //             setLoading(true)
    //         categories.map(async item =>{
    //             await run(item)
    //
    //         })
    //     }
    //     ,[categories])
    //
    // // set subCategories
    // useEffect(_=>{
    //         if(subCategoriesData && subCategoriesData.data && subCategoriesData.data.length >0 && subCategoriesData !==subCategories)
    //             setSubCategories(subCategoriesData.data)
    //         setLoading(false)
    //
    //     }
    //     ,[subCategoriesData])
    //
    // // set subCategories
    // useEffect(_=>{
    //         // console.log(currCategory)
    //         if(subCategories&&subCategories.length>0 && currCategory.name ){
    //             setAllData({...allData,[currCategory.name]:subCategories})
    //         }
    //         // console.log(allData)
    //         // console.log("-----------------"+currCategory.name+"-----------------")
    //         // console.log(subCategories)
    //     }
    //     ,[subCategories])
    //

    return [allData,allSubCategories,loading]
}

export default SubCategoriesContainer