import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ClearCartHook from "../../hooks/cart/clear-cart-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

const CartCheckout = ({userCartData}) => {
    const [deleteLoading,handleDeleteCartClick] = ClearCartHook()
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        className="copon-input d-inline text-center "
                        placeholder="Coupon"
                    />
                    <button className="copon-btn d-inline ">Apply</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border" style={{fontSize: '17px'}}>{userCartData&&userCartData.data&& userCartData.data.totalCartPrice || 0}$</div>
                {
                    (userCartData && userCartData.numOfCartItems &&userCartData.numOfCartItems>0) ?
                        <button className={`product-cart-add w-100 px-2 mb-2 ${deleteLoading ? 'bg-light' : null}`} onClick={handleDeleteCartClick}>
                            {deleteLoading ? <LoadingSpinner></LoadingSpinner> :'Clear the Cart'}
                        </button>
                        : null
                }

                <Link
                    to="/order/paymethoud"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline ">
                    <button className="product-cart-add w-100 px-2">Checkout</button>
                </Link>
            </Col>
        </Row>
    )
}

export default CartCheckout