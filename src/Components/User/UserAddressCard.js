import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const UserAddressCard = () => {
    return (
        <div className="user-address-card my-3 px-2">
            <Row className="d-flex justify-content-between  ">
                <Col xs="1">
                    <div className="pt-2">House</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2">

                            <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit text-decoration-underline">Edit </p>
                            </Link>
                        </div>
                        <div className="d-flex ">
                            <p className="item-delete-edit text-decoration-underline"> Remove</p>

                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "14px",
                        }}>
                        Cairo Nasr City Teseen Street Building 14
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Phone Number:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard