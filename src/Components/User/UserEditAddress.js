import React from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import EditAddressHook from "../../hooks/user/edit-address-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function UserEditAddress() {
    const [alias,details,phone,setAlias,setDetails,setPhone,loading,onSubmit] = EditAddressHook()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">Update the Address</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Address labeling, for example (home - work)"
                        value={alias}
                        onChange={e => setAlias(e.target.value)}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Address in detail"
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-between align-items-center ">
                    <Link to={'/Full-ecommerce-react/user/addresses'} className='text-decoration-none'>{'<<'}Back</Link>


                             <button className={"btn-save d-inline mt-2 " + (loading ? 'bg-light' : null)} onClick={onSubmit}>{loading ? <LoadingSpinner className={'m-3'}></LoadingSpinner>:'Update'}</button>


                </Col>
            </Row>
        </div>
    );
}

export default UserEditAddress