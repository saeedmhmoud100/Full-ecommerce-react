import React from "react";
import UserAddressCard from "./UserAddressCard";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function UserAllAddresses() {

    return (
        <div>
            <div className='admin-content-text pb-2'>Addresses</div>
            <UserAddressCard />
            <UserAddressCard />

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">Add New Addresses</button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default UserAllAddresses