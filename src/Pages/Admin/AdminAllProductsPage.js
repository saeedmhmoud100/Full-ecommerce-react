import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitily/Pagination";
import AdminAllProductPageHook from "../../hooks/product/Admin-All-Product-Page-Hook";

function AdminAllProductsPages() {
    const [products,pagesCount,getPage] = AdminAllProductPageHook()

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <AdminAllProducts products={products}/>
                    {
                        pagesCount > 1 ? <Pagination pagesCount={pagesCount} onPress={getPage}/> : null
                    }

                </Col>
            </Row>
        </Container>
    );
}

export default AdminAllProductsPages;
