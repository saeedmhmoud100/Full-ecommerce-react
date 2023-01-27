import React from 'react'
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import {Col, Container, Row} from "react-bootstrap";
import SideFilter from "../../Components/Uitily/SideFilter";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Uitily/Pagination";


const ShopProductsPage = () => {
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryHeader />
            <Container>
            <SearchCountResult title={'8,000 results'}/>

                <Row className={'d-flex justify-content-between xm-flex-dir-column'}>
                    <Col sm={1} xs={1} md={1} lg={1} className={'d-flex'}>
                        <SideFilter />
                    </Col>
                    <Col sm={10} xs={10} md={10}>
                        <CardProductContainer />
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}

export default ShopProductsPage