import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BaseURL from "../../Api/baseURL";
import {Link} from "react-router-dom";
const UserAllOrderCard = ({item}) => {
    return (
        <div>
            <Row className="d-flex mb-2 align-items-center">
                <Col xs="3" md="2" className="d-flex justify-content-center">
                    <Link to={`/Full-ecommerce-react/products/${item.product._id}`}>
                        <img width="93px" height="120px" src={BaseURL.getUri() + "/products/" + item.product.imageCover} alt="" />
                    </Link>
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        {item.product.title}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2 mx-1">{item.product.ratingsAverage}</div>
                    <div className="rate-count d-inline p-1 pt-2">({item.product.ratingsQuantity} reviews)</div>

                    <div className="mt-3 d-flex flex-wrap align-items-center">
                        <div className={'d-flex align-items-center '}>
                            <div className="cat-text  d-inline">Quantity</div>
                            <input
                                className="mx-2 "
                                type="number"
                                style={{ width: "40px", height: "25px" }}
                                value={item.count}
                                disabled
                            />
                        </div>
                        {
                            item.color &&
                        <div className="color mx-2"
                             style={{ backgroundColor: `${item.color}`}}></div>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard