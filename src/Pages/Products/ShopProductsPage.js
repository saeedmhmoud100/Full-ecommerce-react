import React, {useEffect} from 'react'
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import {Col, Container, Row} from "react-bootstrap";
import SideFilter from "../../Components/Uitily/SideFilter";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Uitily/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../Redux/actions/productAction";
import ShopProductsPageHook from "../../hooks/product/Shop-Products-Page-Hook";


const ShopProductsPage = () => {
    const [allProducts] = ShopProductsPageHook()

    return (
        <div style={{minHeight:'670px'}}>
            <CategoryHeader />
            <Container>
            <SearchCountResult title={`(${allProducts.data ?allProducts.data.length : 0}) results`}/>

                <Row className={'d-flex justify-content-between xm-flex-dir-column'}>
                    <Col sm={1} xs={1} md={1} lg={1} className={'d-flex'}>
                        <SideFilter />
                    </Col>
                    <Col sm={10} xs={10} md={10}>
                        <CardProductContainer products={allProducts.data ? allProducts.data : []}/>
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}

export default ShopProductsPage