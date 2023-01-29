import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddProduct from "../../Components/Admin/AdminAddProduct";
function AdminAddProductPage() {

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='3' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='9' md='10'>
                    <AdminAddProduct />
                </Col>
            </Row>
        </Container>
    );
}


export default AdminAddProductPage