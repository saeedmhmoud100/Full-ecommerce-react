import React from 'react'
import {Col, Row} from "react-bootstrap";
import avatar from '../../Assets/images/avatar.png'

function AdminAddBrand(){
    return(
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Brand</div>
                <Col sm="8">
                    <div className="text-form pb-2">Brand Image</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Brand Name"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">Save Changes</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddBrand