import React from 'react'
import { Row,Col } from 'react-bootstrap'
import '../../Assets/Style/Products.scss'
const ProductText = () => {
    return (
        <div className='med-screen-padding'>
            <Row className="mt-2">
                <div className="cat-text">Electronics :</div>
            </Row>
            <Row>
                <Col md="8">
                    <div className="cat-title d-inline">
                        iPhone XR 128GB 4G LTE with Face App
                        Time (Product) Red <div className="cat-rate d-inline mx-3">4.5</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-4">
                    <div className="cat-text d-inline">Brand: </div>
                    <div className="barnd-text d-inline mx-1">Samsung </div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-1 d-flex">
                    <div
                        className="color ms-2 border"
                        style={{ backgroundColor: "#E52C2C" }}></div>
                    <div
                        className="color ms-2 border "
                        style={{ backgroundColor: "white" }}></div>
                    <div
                        className="color ms-2 border"
                        style={{ backgroundColor: "black" }}></div>
                </Col>
            </Row>

            <Row className="mt-4">
                <div className="cat-text">specifications: </div>
            </Row>
            <Row className="mt-2">
                <Col md="10">
                    <div className="product-description d-inline">
                        Dual SIM features a physical card and an e-SIM card that you can unlock
                        your iPhone and easily log in to apps, accounts, etc.,
                        Face ID is the fastest and most secure fingerprint authentication feature
                        The face features the A12 Bionic chip, which is the smartest and most powerful chip in phones
                        Smart Cameras The world's most popular camera has ushered in a new era of photography
                        photography where the innovative sensor is powered by the ISP and the engine
                        nervous system, enabling you to capture images like never before with a single lens camera
                        Brings people in front into sharp focus unlike a telescope
                        Blurred background overview
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <div className="product-price d-inline px-3 py-3 border">34000$</div>
                    <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to cart</div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductText