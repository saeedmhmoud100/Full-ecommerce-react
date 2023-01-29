import React from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function UserEditAddress() {

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">Update the Address</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Address labeling, for example (home - work)"
                        value='House'
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Address in detail"
                        value='Cairo Nasr City Teseen Street Building 14'
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Phone Number"
                        value='0021313432423'
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-between align-items-center ">
                    <Link to={'/user/addresses'} className='text-decoration-none'>{'<<'}Back</Link>
                    <button className="btn-save d-inline mt-2 ">Update</button>
                </Col>
            </Row>
        </div>
    );
}

export default UserEditAddress