import React from 'react'
import {Col, Row} from "react-bootstrap";
import deleteicon from "../../Assets/images/delete.png";
import editicon from "../../Assets/images/edit.png";
function AdminCouponCard({coupon}){
    return(
            <Row className="justify-content-start flex-column my-3 border-3 pb-3 pt-2" style={{backgroundColor:'white'}}>
                <Col className={'d-flex justify-content-between'}>
                    <h5>Coupon name: {coupon.name}</h5>
                    <div>
                        <img  alt={'edit icon'} className={'mx-2'} src={editicon} width={'20px'} height={'20px'} style={{cursor:"pointer"}}/>
                        <img alt={'delete icon'} className={'mx-2'} src={deleteicon} width={'20px'} height={'20px'} style={{cursor:"pointer",color:"#ff0000"}}/>
                    </div>
                </Col>
                <Col className={'my-2'}>
                    <div className={'d-inline-block'}>Expires: {coupon.expire}</div>
                    <span className={'mx-2'}>{coupon.discount}</span>
                </Col>
                <Col>
                    <div>Discount: 20 %</div>

                </Col>
                <div>

            </div>
            </Row>
    )
}

export default AdminCouponCard