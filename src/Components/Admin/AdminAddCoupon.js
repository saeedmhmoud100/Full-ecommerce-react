import React from 'react'
import {Col} from "react-bootstrap";
function AdminAddCoupon(){
    return(
        <>
            <Col sm="8">
                <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Coupon Title"
                />
            </Col>
            <Col className='d-flex gap-sm-2 gap-0 flex-sm-row flex-column' sm="8" >
                <input
                    type="number"
                    className="input-form d-inline-block mt-3 px-3"
                    placeholder="Discount"
                    min={1}
                    max={100}
                />
                <input
                    type="date"
                    className="input-form d-inline-block mt-3 px-3"
                    placeholder="Coupon's end date"
                    min={1}
                    max={100}
                />
            </Col>
            <Col sm="8" className="d-flex justify-content-end mb-3">
                <button className="btn-save d-inline mt-2 " >Add The Coupon</button>
            </Col>
        </>
    )
}

export default AdminAddCoupon