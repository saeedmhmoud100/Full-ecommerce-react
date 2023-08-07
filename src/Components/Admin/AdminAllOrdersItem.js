import React from 'react'
import { Col,Row } from 'react-bootstrap'
import deleteicon from '../../Assets/images/delete.png'
import {Link} from "react-router-dom";
import '../../Assets/Style/AdminOrder.scss'
import BaseURL from "../../Api/baseURL";
const AdminAllOrdersItem = ({OrdersData}) => {
    const item = OrdersData.cartItems[0];
    return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2 h-auto p-sm-30px">
            <Link to={`/admin/allorders/${OrdersData._id}`} className='cart-item-body my-2 px-1 d-flex text-decoration-none h-auto flex-column flex-md-row align-items-center'>
                <img width="160px" height="197px"  src={BaseURL.getUri() + "/products/" + item.product.imageCover} alt="" />
                <div className="w-100 mx-2">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">Order No. #{OrdersData.id}</div>
                            <div className="d-flex pt-2 align-items-center" style={{ cursor: "pointer" }}>
                                <div className="cat-text d-inline me-2">Delete</div>
                                <img src={deleteicon} alt="" width="20px" height="24px" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                {item.product.title}

                            </div>
                            <div className="d-inline pt-2 cat-rate me-2 mx-2">{item.product.ratingsAverage}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="mt-1">
                            <div className="cat-text d-inline">Brand: </div>
                            <div className="barnd-text d-inline mx-1">{item.product.brand} </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="mt-1 d-flex">
                            <div
                                className="color ms-2 border"
                                style={{ backgroundColor: item.color }}></div>
                        </Col>
                    </Row>

                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 d-flex flex-wrap">
                                <div className="cat-text  d-inline">Quantity</div>
                                <input
                                    className="mx-2 d-block"
                                    type="number"
                                    style={{ width: "40px", height: "25px" }}
                                    disabled
                                    value={item.count}
                                />
                                <div>
                                    <div className="d-inline me-2" style={/*{marginRight:"81px"}*/ {}}>Status</div>
                                    <div className="d-inline stat">{OrdersData.isDelivered ? "is Delivered    " : "In progress    "}, </div>
                                </div>
                                <div className={'mb-1 d-flex flex-wrap'}>
                                    <div>
                                        <div className="d-inline">Payment method</div>
                                        <div className="d-inline mx-2 stat">{OrdersData.paymentMethodType}, {'  '}</div>
                                    </div>
                                    <div className={''}>
                                        <div className="d-inline">Is Payed</div>
                                        <div className="d-inline mx-2 stat">{OrdersData.isPaid ? "Done" : "Not yet"}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-inline pt-2 barnd-text">{OrdersData.totalOrderPrice}$</div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </Col>
    )
}

export default AdminAllOrdersItem