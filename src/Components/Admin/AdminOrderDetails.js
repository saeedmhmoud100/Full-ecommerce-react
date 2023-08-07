import React from "react";
import CartItem from "../Cart/CartItem";
import {Col, Row} from "react-bootstrap";
import AdminOrderDetailsHook from "../../hooks/admin/Admin-Order-Details-Hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function AdminOrderDetails() {
    const [OrderData,paidLoading,handlePaidClick] = AdminOrderDetailsHook()
    const items = OrderData.data && OrderData.data.cartItems;
    return (
        <div>
            <div className='admin-content-text mb-3'>Details of Order No. #{OrderData.data && OrderData.data.id}</div>
            {
                items && items.length >0 ?  items.map(item => <CartItem item={item} admin={true}/>)
                    : null
            }

            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">Customer Details</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Name:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {OrderData.data && OrderData.data.user.name}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Phone number:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {OrderData.data && OrderData.data.user.phone}
                    </div>
                </Col>
                <Col xs="12" className="d-flex flex-column">
                    <div className="d-flex">
                        <div
                            style={{
                                color: "#555550",
                                fontFamily: "Almarai",
                                fontSize: "16px",
                            }}>
                            Email:
                        </div>

                        <div
                            style={{
                                color: "#979797",
                                fontFamily: "Almarai",
                                fontSize: "16px",
                            }}
                            className="mx-2">
                            {OrderData.data && OrderData.data.user.email}
                        </div>
                    </div>

                        <div className={'d-flex flex-wrap'}>
                            <div>
                                <div className="d-inline me-2" style={/*{marginRight:"81px"}*/ {}}>Status</div>
                                <div className="d-inline stat">{OrderData.data && OrderData.data.isDelivered ? "is Delivered" : "In progress"},</div>
                            </div>
                            <div className={''}>
                                <div className="d-inline">Is Payed</div>
                                <div className="d-inline mx-2 stat">{OrderData.data && OrderData.data.isPaid ? "Done" : "Not yet"},</div>
                            </div>
                            <div className={'mb-1 d-flex flex-wrap'}>
                                <div>
                                    <div className="d-inline"> Payment method</div>
                                    <div className="d-inline mx-2 stat">{OrderData.data && OrderData.data.paymentMethodType}</div>
                            </div>

                        </div>
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    Total {OrderData.data && OrderData.data.totalOrderPrice}$
                </div>
                <div className="d-flex align-items-center mt-2 justify-content-center">
                    {/*<select*/}
                    {/*    name="languages"*/}
                    {/*    id="lang"*/}
                    {/*    className="select input-form-area mt-1  text-center px-2 w-50">*/}
                    {/*    <option value="0">Order Status</option>*/}

                    {/*    <option selected={OrderData.data && !OrderData.data.isDelivered} value="val2">In progress</option>*/}
                    {/*    <option selected={OrderData.data && OrderData.data.isDelivered} value="val2">Finished</option>*/}
                    {/*    <option value="val2">cancel</option>*/}
                    {/*</select>*/}
                    {
                        paidLoading? <LoadingSpinner style={{marginRight:'111px'}}/> :
                    <button onClick={OrderData.data && !OrderData.data.isPaid ? handlePaidClick :null} className={`${OrderData.data &&OrderData.data.isPaid ? "btn-success btn": 'btn-a' } px-3 d-inline mx-2 `} disabled={OrderData.data && OrderData.data.isPaid}>{`${OrderData.data && OrderData.data.isPaid ? "paid successfully" : "click here if this order is paid"} `} </button>
                    }
                    <span>&&</span>
                    <button className={`" ${OrderData.data &&OrderData.data.isDelivered ? "btn-success btn" :'btn-a' } px-3 d-inline mx-2 "`}>{" click here if this order is delivered"} </button>
                </div>
            </Row>
        </div>
    );
}

export default AdminOrderDetails