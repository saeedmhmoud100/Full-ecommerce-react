import React from 'react'
import {Col, Row} from "react-bootstrap";
import AdminCouponCard from "./AdminCouponCard";
import AdminAddCoupon from "./AdminAddCoupon";
function AdminCoupons(){
    return(
        <div>
            <Row className="justify-content-start flex-column">
                <div className="admin-content-text pb-4">Add a New Coupon</div>
                <AdminAddCoupon />

                <Col sm={8}>
                    <AdminCouponCard/>
                    <AdminCouponCard/>
                    <AdminCouponCard/>
                    <AdminCouponCard/>
                    <AdminCouponCard/>
                </Col>
            </Row>


        </div>
    )
}

export default AdminCoupons