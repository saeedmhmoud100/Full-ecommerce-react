import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import laptops from '../../Assets/images/laptops.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                        Up to 50% off on Laptops
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={'https://saeedmhmoud100.github.io/Full-ecommerce-react'+laptops} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection