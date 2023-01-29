import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Uitily/Pagination";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";

function AdminAllOrdersPages() {

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <AdminAllOrders />
                    <Pagination />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminAllOrdersPages;
