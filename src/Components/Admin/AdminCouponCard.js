import React from 'react'
import {Col, Row} from "react-bootstrap";
import deleteicon from "../../Assets/images/delete.png";
import editicon from "../../Assets/images/edit.png";
import AdminCouponCardHook from "../../hooks/coupon/admin-coupon-card-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
function AdminCouponCard({coupon}){
    const [handleDeleteCoupon,deleteLoading] = AdminCouponCardHook()

    // convert date from timestamp to custom format
    const formatDate = dateString =>{
        // const options = {year:'numeric',month:'long','day':'numeric'}    July 29, 2023
        const options = {year:'numeric',month:'numeric','day':'numeric'} // 7/29/2023
        return new Date(dateString).toLocaleDateString(undefined,options)
    }

    return(
            <Row className="justify-content-start flex-column my-3 border-3 pb-3 pt-2" style={{backgroundColor:'white'}}>
                <Col className={'d-flex justify-content-between'}>
                    <h5>Coupon name: {coupon.name}</h5>
                    <div>
                        <img  alt={'edit icon'} className={'mx-2'} src={editicon} width={'20px'} height={'20px'} style={{cursor:"pointer"}}/>
                        {
                            deleteLoading ? <LoadingSpinner className={'mx-2'} style={{width:'20px',height:'20px'}}></LoadingSpinner>
                                :    <img alt={'delete icon'} onClick={_=>handleDeleteCoupon(coupon._id)} className={'mx-2'} src={deleteicon} width={'20px'} height={'20px'} style={{cursor:"pointer",color:"#ff0000"}}/>
                        }
                    </div>
                </Col>
                <Col className={'my-2'}>
                    <div className={'d-inline-block'}>Expires: </div>
                    <span className={'mx-2'}>{formatDate(coupon.expire)}</span>
                </Col>
                <Col>
                    <div>Discount: {coupon.discount} %</div>

                </Col>
                <div>

            </div>
            </Row>
    )
}

export default AdminCouponCard