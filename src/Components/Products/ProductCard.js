import React from 'react'
import { Card, Col } from 'react-bootstrap'
import favoff from "../../Assets/images/fav-off.png";
import favon from "../../Assets/images/fav-on.png";
import rate from "../../Assets/images/rate.png";
import {Link} from "react-router-dom";
import ProductCardHook from "../../hooks/product/product-card-hook";
import baseURL from "../../Api/baseURL";
const ProductCard = ({product,imgURL}) => {
    const [isFav,deleteProductFromWishList,addProductToWishList] = ProductCardHook(product)
    return (
        <Col xs="10" sm="6" md="4" lg="3" className="d-flex">

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    minHeight: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                   <Link to={`/Full-ecommerce-react/products/${product._id}`} style={{textDecoration:'none'}}>
                       {/*<Card.Img style={{ height: "228px", width: "100%" }} src={imgURL ? (baseURL.getUri()+'/products/' +product.imageCover) : product.imageCover} />*/}
                       <div  style={{borderRadius:"4px 4px 0 0", height: "228px", width: "100%",backgroundImage:"url("+ (imgURL ? (baseURL.getUri()+'/products/' +product.imageCover) : product.imageCover) +")",backgroundSize: 'cover'}}></div>
                   </Link>
                <div className="d-flex justify-content-end mx-2 mt-2">
                    {
                        <img
                                src={isFav ?favon : favoff}
                                alt=""
                                className="text-center"
                                style={{
                                    height: "24px",
                                    width: "26px",
                                    cursor:'pointer'
                                }}
                                onClick={_=>isFav ? deleteProductFromWishList(product._id):addProductToWishList(product._id)}
                            />
                    }

                </div>
                <Card.Body>
                    <Link to={`/Full-ecommerce-react/products/${product._id}`} style={{textDecoration:'none'}}>
                    <Card.Title>
                        <div className="card-title" style={{minHeight:'80px'}}>
                            {product.title}
                        </div>
                    </Card.Title>
                </Link>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                {/*<i className="fa-regular fa-star"></i>*/}
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">{product.ratingsAverage || 0}</div>
                            </div>
                            <div className="d-flex">
                                {
                                    product.priceAfterDiscount && product.priceAfterDiscount > 0 && product.priceAfterDiscount < product.price ?
                                        <div className="card-price position-relative"><span className={'price-before-discount-product'}>{product.price}</span>{product.priceAfterDiscount}</div>
                                        : <div className="card-price">{product.price}</div>
                                }
                                <div className="card-currency mx-1">$</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard