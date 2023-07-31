import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import UserProfile from "../../Components/User/UserProfile";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

function AdminProfilePage() {

    return (
        <Container className='py-3' style={{minHeight:'700px'}}>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <UserProfile />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminProfilePage