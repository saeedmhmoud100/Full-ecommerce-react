import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({orderData}) => {

    const formatDate = dateString =>{
        const options = {year:'numeric',month:'long','day':'numeric'}    //July 29, 2023
        // const options = {year:'numeric',month:'numeric','day':'numeric'} // 7/29/2023
        return new Date(dateString).toLocaleDateString(undefined,options)
    }

    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">Dial #{orderData.id} -----> at {formatDate(orderData.createdAt)}</div>
            </Row>
            {
                orderData && orderData.cartItems && orderData.cartItems.map( item => <UserAllOrderCard item={item}/>)
            }

            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline me-2" style={/*{marginRight:"81px"}*/ {}}>Status</div>
                        <div className="d-inline stat">{orderData.isDelivered ? "is Delivered" : "In progress"}</div>
                    </div>
                    <div className={'mb-1 d-flex flex-wrap'}>
                        <div>
                            <div className="d-inline">Payment method</div>
                            <div className="d-inline mx-2 stat">{orderData.paymentMethodType},</div>
                        </div>
                        <div className={''}>
                            <div className="d-inline">Is Payed</div>
                            <div className="d-inline mx-2 stat">{orderData.isPaid ? "Done" : "Not yet"}</div>
                        </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end align-items-center">
                    <div>
                        <div className="barnd-text">{orderData.totalOrderPrice || 0}$</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem