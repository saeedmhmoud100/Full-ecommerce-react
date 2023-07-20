import React from 'react'
import {Col, Row} from "react-bootstrap";
import AdminCouponCard from "./AdminCouponCard";
import AdminAddCoupon from "./AdminAddCoupon";
import AdminCouponsHook from "../../hooks/coupon/admin-coupons-hook";

function AdminCoupons(){
    const [allCoupons]=AdminCouponsHook()
    return(
        <div>
            <Row className="justify-content-start flex-column">
                <div className="admin-content-text pb-4">Add a New Coupon</div>
                <AdminAddCoupon />

                <Col sm={8}>
                    {
                        allCoupons.data ? allCoupons.data.map((coupon,i)=> <AdminCouponCard coupon={coupon} key={i}/>)
                            : null
                    }
                </Col>
            </Row>


        </div>
    )
}

export default AdminCoupons