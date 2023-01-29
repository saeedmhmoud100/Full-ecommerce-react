import React from 'react'
import {Col, Row} from "react-bootstrap";

function AdminAddSubCategory(){
    return(
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New SubCategory</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="SubCategory Name"
                    />
                    <select name='languages' className="select mt-3 px-2">
                        <option value='val1'>First Category</option>
                        <option value='val2'>Second Category</option>
                        <option value='val3'>third Category</option>
                    </select>
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

export default AdminAddSubCategory