import React from 'react'
import Pagination from '../../Components/Uitily/Pagination'
import BrandContainer from "../../Components/Brand/BrandContainer";
import AllBrandPageHook from "../../hooks/Brand/All-Brand-Page-Hook";

const AllBrandPage = () => {
    const [BrandData,loading,pagesCount,getPage] = AllBrandPageHook()
    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer data={BrandData.data} loading={loading} />
            {
                pagesCount > 1 ?<Pagination onPress={getPage} pagesCount={pagesCount}/> : null
            }
        </div>
    )
}

export default AllBrandPage