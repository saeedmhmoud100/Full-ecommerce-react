import React from 'react'
import { Col,Row } from 'react-bootstrap'
import deleteicon from '../../Assets/images/delete.png'
import rateImage from '../../Assets/images/rate.png'
import baseURL from "../../Api/baseURL";
import '../../Assets/Style/cart.scss'
import DeleteOneCartItemHook from "../../hooks/cart/delete-one-cart-item-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import UpdateCartItemHook from "../../hooks/cart/update-cart-item-hook";
const CartItem = ({item}) => {
    const [deleteLoading,handleDeleteCartClick] = DeleteOneCartItemHook(item)
    const [cartItemCount,updateLoading,setCartItemCount,handleOnChangeCount] = UpdateCartItemHook(item)
    return (
        // <Col xs="12" className="cart-item-body my-2 d-flex px-2 flex-sm-row flex-column" style={window.outerWidth <567 ? {height: '337px',border:'1px solid black',padding:'10px 20px',width:'max-content',margin:'auto',minWidth:'65%'}: {}}>
        <Col xs="12" className="cart-item-body my-2 d-flex px-2 flex-sm-row flex-column cart-item-sm" >
            <img width="160px" height="197px" src={baseURL.getUri() + '/products/' + (item.product.imageCover || '')} alt="product image" />
            <div className="w-100">
                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline pt-2 cat-text">{item.product.category.name || ''}</div>
                        <div className="d-flex pt-2 align-items-center" style={{ cursor: "pointer" }} onClick={handleDeleteCartClick}>
                            {
                                deleteLoading ? <LoadingSpinner></LoadingSpinner>
                                    :<>
                                        <div className="cat-text d-inline me-2">Delete</div>
                                        <img src={deleteicon} alt="" width="20px" height="24px" />
                                    </>

                            }

                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col sm="12" className=" d-flex flex-row justify-content-start">
                        <div className="d-inline  cat-title">
                            {item.product.title || ''}

                        </div>
                        <div className="d-inline-flex  cat-rate me-2 mx-2 align-items-baseline ">
                            <span style={{marginRight:'3px'}}> {item.product.ratingsAverage || 0}</span>
                            <img alt={'rate icon'} src={rateImage} width={'13px'} height={'13px'}/></div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1">
                        <div className="cat-text d-inline">Brand: </div>
                        <div className="barnd-text d-inline mx-1">{item.product.brand &&(item.product.brand.name || '')} </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1 d-flex">
                        <div
                            className="color ms-2 border"
                            style={{ backgroundColor: `${item.color || '#000'}` }}></div>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col sm="12" className="d-flex flex-sm-row flex-column justify-content-between">
                        <div className="d-inline pt-2 d-flex">
                            <div className="cat-text  d-inline py-2">Quantity</div>
                            <input
                                className="mx-2 "
                                type="number"
                                style={{ width: "60px", height: "40px" }}
                                value={cartItemCount}
                                onChange={e => setCartItemCount(e.target.value)}
                                min={1}
                            />
                            {
                                updateLoading ? <LoadingSpinner className={'mx-3'}></LoadingSpinner>
                                :
                                    <button className={'btn btn-dark'} onClick={handleOnChangeCount}>Update</button>
                            }
                        </div>
                        <div className="d-inline-flex align-items-center justify-content-center pt-2 barnd-text"><span>{item.price ? `${item.count +' x ' + item.price + ' = ' + item.count*item.price}` : 0}$</span></div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default CartItem