import React from 'react'
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import {Container} from "react-bootstrap";


const ShopProductsPage = () => {
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryHeader />
            <Container>
            <SearchCountResult title={'8,000 results'}/>
            </Container>
        </div>
    )
}

export default ShopProductsPage