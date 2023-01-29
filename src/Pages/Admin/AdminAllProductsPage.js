import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";

function AdminAllProductsPages() {

    return (
        <Container>
            <Row>
                <Col sm='3' xs='2' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='10' md='10'>
                    <AdminAllProducts />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminAllProductsPages;
