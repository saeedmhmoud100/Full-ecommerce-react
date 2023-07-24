import React from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import UpdateUserDateHook from "../../hooks/user/update-user-data-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function UserProfile() {
    const [userData,userName,phone,email,editLoading,showUpdateModal,setShowUpdateModal,setUserName,setPhone,setEmail,handleEditSubmit] = UpdateUserDateHook()


    return (
        <div>

            <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <input
                                type="text"
                                className="input-form d-block mt-3 px-3"
                                placeholder="user Name"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                            <input
                                type="number"
                                className="input-form d-inline-block mt-3 px-3"
                                placeholder="Phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            <input
                                type="text"
                                className="input-form d-inline-block mt-3 px-3"
                                placeholder="Coupon's end date"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
                        Cancel
                    </Button>
                    {
                        editLoading ? (<LoadingSpinner></LoadingSpinner>)
                            :
                            <Button variant="success" onClick={handleEditSubmit}>
                                Update
                            </Button>
                    }

                </Modal.Footer>
            </Modal>

            <div className="admin-content-text">Profile</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex align-items-center">
                        <div className="py-2">Name:</div>
                        <div className="p-1 item-delete-edit">{userData.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex mx-2">
                            <p className="item-delete-edit text-decoration-underline" onClick={_=>setShowUpdateModal(true)}>Update</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex align-items-center">
                        <div className="py-2">Phone Number:</div>
                        <div className="p-1 item-delete-edit">{userData.phone || userData.name}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex align-items-center">
                        <div className="py-2">Email :</div>
                        <div className="p-1 item-delete-edit">{userData.email || userData.name}</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">Change Password</div>
                        <input
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="Enter your old password"
                        />
                        <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter the new password"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button className="btn-save d-inline mt-2 ">Save Password</button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default UserProfile