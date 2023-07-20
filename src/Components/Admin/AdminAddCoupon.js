import React from 'react'
import {Col} from "react-bootstrap";
import AdminAddCouponHook from "../../hooks/coupon/admin-add-coupon-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
function AdminAddCoupon(){
    const [couponName,couponExpire,couponDiscount,setCouponName,setCouponExpire,setCouponDiscount,loading,onSubmit] = AdminAddCouponHook()

    return(
        <>
            <Col sm="8">
                <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Coupon Title"
                    value={couponName}
                    onChange={e => setCouponName(e.target.value)}
                />
            </Col>
            <Col className='d-flex gap-sm-2 gap-0 flex-sm-row flex-column' sm="8" >
                <input
                    type="number"
                    className="input-form d-inline-block mt-3 px-3"
                    placeholder="Discount"
                    min={1}
                    max={100}
                    value={couponDiscount}
                    onChange={e => setCouponDiscount(e.target.value)}
                />
                <input
                    type="date"
                    className="input-form d-inline-block mt-3 px-3"
                    placeholder="Coupon's end date"
                    min={1}
                    max={100}
                    value={couponExpire}
                    onChange={e => setCouponExpire(e.target.value)}
                />
            </Col>
            <Col sm="8" className="d-flex justify-content-end mb-3">


                       <button className={`btn-save d-inline mt-2 ${loading ?'bg-light' : null}` } onClick={onSubmit}>{loading ? <LoadingSpinner></LoadingSpinner> : 'Add The Coupon'}</button>


            </Col>
        </>
    )
}

export default AdminAddCoupon