import React from 'react'
import { Row,Col } from 'react-bootstrap'
import UserAllAddressesHook from "../../hooks/user/user-all-addresses-hook";
import {Link} from "react-router-dom";
import OrderPayCashHook from "../../hooks/checkout/order-pay-cash-hook";
const ChoosePayMethoud = () => {
    const [AllAddresses] = UserAllAddressesHook()
    const [setAddress,handleOnClick] = OrderPayCashHook()

    return (
        <div>
            <div className="admin-content-text pt-5">Choose the payment method</div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="mt-3 mb-2">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="Payment by Visa"
                        />
                        <label className="mx-2" htmlFor="group1">
                            Payment by credit card
                        </label>
                    </Col>
                </Row>

                <Row className="mt-1">
                    <Col xs="12" className="d-flex">
                        <input
                            name="group"
                            id="group2"
                            type="radio"
                            value="Paiement when recieving"
                            checked={true}
                        />
                        <label className="mx-2" htmlFor="group2">
                            Payment when receiving
                        </label>
                    </Col>
                </Row>

                <Row className="m">
                    <Col xs="4" className="d-flex">
                        <select name="address" id="address" className="select input-form-area mt-2 px-2 " onChange={e => setAddress(JSON.parse(e.target.value))}>
                            <option value="{}">Select Address</option>
                            {
                                AllAddresses && AllAddresses.data && AllAddresses.data.map(item => <option key={item._id} value={JSON.stringify(item)}>{item.alias}</option>)
                            }
                        </select>
                    </Col>
                     <span className={'mx-2'}>or <Link to={'/user/add-address'}> add a new address</Link></span>
                </Row>

            </div>



            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline border mx-2" style={{height:'39px'}}>34000$</div>
                    <div className="product-cart-add px-3 pt-2 d-inline me-2" style={{height:'39px'}} onClick={handleOnClick}> Checkout</div>
                </Col>
            </Row>
        </div>
    )
}

export default ChoosePayMethoud