import React from "react";
import CartItem from "../Cart/CartItem";
import {Col, Row} from "react-bootstrap";
import AdminOrderDetailsHook from "../../hooks/admin/Admin-Order-Details-Hook";

function AdminOrderDetails() {
    const [OrderData] = AdminOrderDetailsHook()
    const items = OrderData.data.cartItems;
    console.log(OrderData)
    return (
        <div>
            <div className='admin-content-text mb-3'>Details of Order No. #{OrderData.data.id}</div>
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
                        {OrderData.data.user.name}
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
                        {OrderData.data.user.phone}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
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
                        {OrderData.data.user.email}
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    Total {OrderData.data.totalOrderPrice}$
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="0">Order Status</option>

                        <option selected={!OrderData.data.isDelivered} value="val2">In progress</option>
                        <option selected={OrderData.data.isDelivered} value="val2">Finished</option>
                        <option value="val2">cancel</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">Save </button>
                </div>
            </Row>
        </div>
    );
}

export default AdminOrderDetails