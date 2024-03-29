import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteAddressHook from "../../hooks/user/delete-address-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
const UserAddressCard = ({address}) => {
    const [deleteLoading,onDeleteSubmit] = DeleteAddressHook(address._id)

    return (
        <div className="user-address-card my-3 px-2">
            <Row className="d-flex justify-content-between  ">
                <Col xs="1">
                    <div className="pt-2" style={{fontWeight:'bold'}}>{address.alias}</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2">

                            <Link to={`/Full-ecommerce-react/user/edit-address/`+ address._id} style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit text-decoration-underline">Edit </p>
                            </Link>
                        </div>
                        <div className="d-flex ">
                            {
                                deleteLoading ? <LoadingSpinner className={'mx-2'} style={{width:'20px',height:'20px'}}></LoadingSpinner>
                                    : <p className="item-delete-edit text-decoration-underline" onClick={onDeleteSubmit}> Remove</p>

                            }

                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12" className={'d-flex  align-items-center'}>
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                            fontWeight:'bold'
                        }}>
                        Details: {' '}
                    </div>
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                        }}>
                        {" " +address.details ? address.details : "NO details added"}
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
                            fontWeight:'bold'
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
                        {address.phone ? address.phone : "no phone added"}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard