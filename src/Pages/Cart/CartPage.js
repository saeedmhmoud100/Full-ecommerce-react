import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
function CartPage(){

    return(
        <Container>
            <Row>
                <div className='cart-title mt-4'>Shopping Cart</div>
            </Row>
            <Row id='cart_row' className='d-flex justify-content-center flex-md-row' onLoad={_ => window.outerWidth < 768 ? document.getElementById('cart_row').setAttribute('style','flex-direction:column-reverse') : null}>
                <Col xs='12' md='9'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Col>
                <Col xs='12' md='3' className='d-flex justify-content-center align-self-sm-center align-self-md-start'>
                    <CartCheckout />
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage