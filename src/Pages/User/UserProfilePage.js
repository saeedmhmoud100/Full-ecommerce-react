import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserProfile from "../../Components/User/UserProfile";

function UserProfilePage() {

    return (
        <Container className='py-3' style={{minHeight:'700px'}}>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <UserSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <UserProfile />
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfilePage