import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartPageHook from "../../hooks/cart/cart-page-hook";
function CartPage(){
    const [userCartData] = CartPageHook()
    return(
        <Container>
            <Row>
                <div className='cart-title mt-4'>Shopping Cart</div>
            </Row>
            <Row id='cart_row' className='d-flex justify-content-center flex-md-row' >
            {/*<Row id='cart_row' className='d-flex justify-content-center flex-md-row' onLoad={_ => window.outerWidth < 768 ? document.getElementById('cart_row').setAttribute('style','flex-direction:column-reverse') : null}>*/}
                <Col xs='12' md='9'>
                    {
                        userCartData &&userCartData.status&& userCartData.status==='success' && userCartData.data.products.length>0?
                            userCartData.data.products.map((item,i) => <CartItem key={i} item={item} />)
                            : <h4 className={'text-center mt-4'}>there are no products in your cart yet</h4>
                    }
                </Col>
                <Col xs='12' md='3' className='d-flex justify-content-center align-self-sm-center align-self-md-start' style={{minHeight: '246px'}}>
                    <CartCheckout userCartData={userCartData}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage