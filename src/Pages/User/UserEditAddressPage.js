import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserEditAddress from "../../Components/User/UserEditAddress";

function UserEditAddressPage() {

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <UserSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <UserEditAddress />
                </Col>
            </Row>
        </Container>
    );
}

export default UserEditAddressPage