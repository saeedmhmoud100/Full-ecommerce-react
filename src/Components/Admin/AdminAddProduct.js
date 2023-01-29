import React from 'react'
import {Col, Row} from "react-bootstrap";
import avatar from '../../Assets/images/avatar.png'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../Assets/images/add.png'
function AdminAddProduct(){
    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "First Category", id: 1 },
        { name: "Second Category", id: 2 },
    ];
    return(
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add A new Product</div>
                <Col sm="8">
                    <div className="text-form pb-2"> Product's Images</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product Description"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price before discount"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Price"
                    />
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Main classification</option>
                        <option value="val">First category</option>
                        <option value="val2">Second category</option>
                        <option value="val2">Third category</option>
                        <option value="val2">Fourth category</option>
                    </select>

                    <Multiselect
                        className="mt-2"
                        placeholder="Subcategory "
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Brand</option>
                        <option value="val2">Classification First brand</option>
                        <option value="val2">Category second brand</option>
                        <option value="val2">Fourth category</option>
                    </select>
                    <div className="text-form mt-3 ">Available colors for the product</div>
                    <div className="mt-1 d-flex">
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        <div
                            className="color ms-2 border mt-1 "
                            style={{ backgroundColor: "white" }}></div>
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "black" }}></div>
                        <img src={add} alt="" width="30px" height="35px" className="" />
                    </div>
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

export default AdminAddProduct