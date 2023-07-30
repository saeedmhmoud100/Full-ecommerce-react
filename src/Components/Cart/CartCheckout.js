import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ClearCartHook from "../../hooks/cart/clear-cart-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import ApplyCouponHook from "../../hooks/cart/apply-coupon-hook";

const CartCheckout = ({userCartData}) => {
    const [deleteLoading,handleDeleteCartClick] = ClearCartHook()
    const [couponName,loading,handleApplyCouponClick,setCouponName] = ApplyCouponHook()
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  flex-column">
                    <div className={'d-flex '}>

                    <input
                        className="copon-input d-inline text-center "
                        placeholder="Coupon"
                        value={couponName}
                        onChange={e => setCouponName(e.target.value)}
                    />
                    {
                        loading? <LoadingSpinner></LoadingSpinner>
                            :<button className="copon-btn d-inline " onClick={handleApplyCouponClick}>Apply</button>
                    }
                    </div>
                    {
                        userCartData &&userCartData.data&& userCartData.data.coupon ? <span className={'applied-coupon-text'}>the { "'"+userCartData.data.coupon + "'"} coupon has been applied</span>
                            : null
                    }


                </div>
                <div className="product-price d-inline w-100 my-3  border position-relative" style={{fontSize: '17px'}}>
                    <span className={'price-before-discount'}>{userCartData && userCartData.data && userCartData.data.totalAfterDiscount ? userCartData.data.totalCartPrice : null}</span>
                    {userCartData&& userCartData.data ? (userCartData.data.totalAfterDiscount||userCartData.data.totalCartPrice ): 0}$
                </div>
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