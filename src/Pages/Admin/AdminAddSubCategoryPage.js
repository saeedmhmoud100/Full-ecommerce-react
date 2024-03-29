import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddSubCategory from "../../Components/Admin/AdminAddSubCategory";
import SubCategoriesContainer from "../../Components/SubCategory/SubCategorisContainer";

function AdminAddSubCategoryPage() {

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <AdminAddSubCategory />
                    <SubCategoriesContainer />
                </Col>
            </Row>
        </Container>
    );
}


export default AdminAddSubCategoryPage