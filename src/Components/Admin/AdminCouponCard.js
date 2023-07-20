import React from 'react'
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import deleteicon from "../../Assets/images/delete.png";
import editicon from "../../Assets/images/edit.png";
import AdminCouponCardHook from "../../hooks/coupon/admin-coupon-card-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function AdminCouponCard({coupon}){
    const [handleDeleteCoupon,formatDate,deleteLoading,showUpdateModal,setShowUpdateModal,couponName,couponExpire,couponDiscount,setCouponName,setCouponExpire,setCouponDiscount,editLoading,handleEditSubmit] = AdminCouponCardHook(coupon)

    return(
            <Row className="justify-content-start flex-column my-3 border-3 pb-3 pt-2" style={{backgroundColor:'white'}}>

                <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update your review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                    <input
                                        type="text"
                                        className="input-form d-block mt-3 px-3"
                                        placeholder="Coupon Name"
                                        value={couponName}
                                        onChange={e => setCouponName(e.target.value)}
                                    />
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
                                        type="text"
                                        className="input-form d-inline-block mt-3 px-3"
                                        placeholder="Coupon's end date"
                                        value={couponExpire}
                                        onChange={e => setCouponExpire(e.target.value)}
                                    />
                            </Row>
                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
                            Cancel
                        </Button>
                        {
                            editLoading ? (<LoadingSpinner></LoadingSpinner>)
                                :
                                <Button variant="success" onClick={handleEditSubmit}>
                                    Update
                                </Button>
                        }

                    </Modal.Footer>
                </Modal>



                <Col className={'d-flex justify-content-between'}>
                    <h5>Coupon name: {coupon.name}</h5>
                    <div>
                        <img onClick={_=> setShowUpdateModal(true)}  alt={'edit icon'} className={'mx-2'} src={editicon} width={'20px'} height={'20px'} style={{cursor:"pointer"}}/>
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