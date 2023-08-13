import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllCategoryPageHook from "../../hooks/category/All-Category-Page-Hook";
import baseURL from "../../Api/baseURL";


const AllCategoryPage = () => {
    const [categoryData,loading,pagesCount,getPage] = AllCategoryPageHook()

    console.log(categoryData)

    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer data={categoryData.data} loading={loading}/>
            {
                pagesCount > 1 ?<Pagination onPress={getPage} pagesCount={pagesCount}/> : null
            }

        </div>
    )
}

export default AllCategoryPage