import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserAllOrders from "../../Components/User/UserAllOrders";

function UserAllOrdersPage() {

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='3' md='2'>
                    <UserSideBar />
                </Col>
                <Col sm='9' xs='9' md='10'>
                    <UserAllOrders />
                </Col>
            </Row>
        </Container>
    );
}

export default UserAllOrdersPage