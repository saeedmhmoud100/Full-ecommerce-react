import React from 'react'
import { Card, Col } from 'react-bootstrap'
import favoff from "../../Assets/images/fav-off.png";
import favon from "../../Assets/images/fav-on.png";
import rate from "../../Assets/images/rate.png";
import {Link} from "react-router-dom";
import ProductCardHook from "../../hooks/product/product-card-hook";
const ProductCard = ({product}) => {
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
                   <Link to={`/products/${product._id}`} style={{textDecoration:'none'}}> <Card.Img style={{ height: "228px", width: "100%" }} src={product.imageCover} /></Link>
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
                    <Link to={`/products/${product._id}`} style={{textDecoration:'none'}}>
                    <Card.Title>
                        <div className="card-title">
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
                                <div className="card-price">{product.price}</div>
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