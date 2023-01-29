import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../Assets/images/mobile.png'
const UserAllOrderCard = () => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={mobile} alt="" />
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        iPhone XR 128GB 4G LTE with Face App
                        Time (Product) Red
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 reviews)</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">Quantity</div>
                        <input
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard