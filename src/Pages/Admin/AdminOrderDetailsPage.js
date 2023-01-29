
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails";

function AdminOrderDetailsPage() {

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <AdminOrderDetails />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminOrderDetailsPage